#export_name("add_two")
pub fn add_two(a : Int, b : Int) -> Int {
  a + b
}

let scratch : FixedArray[Byte] = FixedArray::make(64, (0).reinterpret_as_uint().to_byte())

#export_name("fill")
pub fn fill(v : Int) -> Int {
  for i = 0; i < 64; i = i + 1 {
    scratch[i] = (v + i).reinterpret_as_uint().to_byte()
  }
  64
}

#export_name("byte_at")
pub fn byte_at(i : Int) -> Int {
  scratch[i].to_int()
}

#owned(a)
extern "wasm" fn arr_ptr(a : FixedArray[Byte]) -> Int = #|(func (param $a i32) (result i32) (local.get $a))

let fscratch : FixedArray[Double] = FixedArray::make(16, 0.0)

#export_name("fill_d")
pub fn fill_d(v : Double) -> Int {
  for i = 0; i < 16; i = i + 1 {
    fscratch[i] = v + i.to_double()
  }
  16
}

#export_name("scratch_byte_ptr")
pub fn scratch_byte_ptr() -> Int {
  arr_ptr(scratch)
}

#owned(a)
extern "wasm" fn arr_ptr_d(a : FixedArray[Double]) -> Int = #|(func (param $a i32) (result i32) (local.get $a))

#export_name("scratch_double_ptr")
pub fn scratch_double_ptr() -> Int {
  arr_ptr_d(fscratch)
}
