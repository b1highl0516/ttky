import fs from "node:fs";
const bytes = fs.readFileSync("_build/wasm/release/build/app/app.wasm");
const mod = new WebAssembly.Module(bytes);
console.log("exports:", WebAssembly.Module.exports(mod).map((e) => e.name + ":" + e.kind).join(", "));
console.log("imports:", WebAssembly.Module.imports(mod).map((e) => e.module + "." + e.name).join(", "));
const inst = new WebAssembly.Instance(mod, { spectest: { print_char: (c) => {} } });
console.log("add_two(2,3) =", inst.exports.add_two(2, 3));
console.log("fill(10) =", inst.exports.fill(10));
const mem = inst.exports.memory;
console.log("memory?", !!mem, mem && mem.buffer.byteLength);
if (mem) {
  const u8 = new Uint8Array(mem.buffer);
  // find the filled run 10..73
  let at = -1;
  for (let i = 0; i + 64 <= u8.length; i++) {
    if (u8[i] === 10 && u8[i + 63] === 73) { at = i; break; }
  }
  console.log("scratch bytes at offset", at, "->", at >= 0 ? Array.from(u8.slice(at, at + 8)) : null);
}
console.log("byte_at(0) =", inst.exports.byte_at(0));
