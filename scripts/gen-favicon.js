// Generates all favicon assets from public/logo.webp
// Outputs:
//   src/app/favicon.ico  (16x16 + 32x32 + 48x48, PNG-in-ICO)
//   public/apple-touch-icon.png    (180x180)
//   public/icon-192.png            (192x192 — Android Chrome)
//   public/icon-512.png            (512x512 — Android Chrome / PWA)

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.resolve(__dirname, "../public/logo.webp");
const APP_DIR = path.resolve(__dirname, "../src/app");
const PUBLIC_DIR = path.resolve(__dirname, "../public");

/** Build a valid .ico binary from an array of PNG Buffers */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const HEADER_SIZE = 6;
  const ENTRY_SIZE = 16;
  const dataStart = HEADER_SIZE + ENTRY_SIZE * count;

  // ICO ICONDIR header
  const header = Buffer.alloc(HEADER_SIZE);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = dataStart;

  for (const png of pngBuffers) {
    // PNG IHDR: signature(8) + length(4) + "IHDR"(4) + width(4) + height(4)
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);

    const entry = Buffer.alloc(ENTRY_SIZE);
    entry.writeUInt8(w >= 256 ? 0 : w, 0);   // width  (0 = 256)
    entry.writeUInt8(h >= 256 ? 0 : h, 1);   // height (0 = 256)
    entry.writeUInt8(0, 2);                   // colour count (0 = truecolour)
    entry.writeUInt8(0, 3);                   // reserved
    entry.writeUInt16LE(1, 4);               // planes
    entry.writeUInt16LE(32, 6);              // bits per pixel
    entry.writeUInt32LE(png.length, 8);      // image data size
    entry.writeUInt32LE(offset, 12);         // offset from start of file
    entries.push(entry);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function main() {
  console.log("Reading logo.webp …");

  // --- favicon.ico: 16, 32, 48 px (PNG-in-ICO, modern format) ---
  const [png16, png32, png48] = await Promise.all([
    sharp(SRC).resize(16, 16,  { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer(),
    sharp(SRC).resize(32, 32,  { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer(),
    sharp(SRC).resize(48, 48,  { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer(),
  ]);

  const ico = buildIco([png16, png32, png48]);
  fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), ico);
  console.log(`✓ src/app/favicon.ico  (${ico.length} bytes, 3 sizes: 16/32/48)`);

  // --- apple-touch-icon.png: 180x180 ---
  await sharp(SRC).resize(180, 180, { fit: "cover" }).png().toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  console.log("✓ public/apple-touch-icon.png  (180×180)");

  // --- Android / PWA icons ---
  await sharp(SRC).resize(192, 192, { fit: "cover" }).png().toFile(path.join(PUBLIC_DIR, "icon-192.png"));
  console.log("✓ public/icon-192.png  (192×192)");

  await sharp(SRC).resize(512, 512, { fit: "cover" }).png().toFile(path.join(PUBLIC_DIR, "icon-512.png"));
  console.log("✓ public/icon-512.png  (512×512)");

  console.log("\nAll favicon assets generated successfully.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
