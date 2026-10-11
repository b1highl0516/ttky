function _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError.prototype.$tag = 4;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError.prototype.$tag = 3;
function _M0DTPC15error5Error118lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error118lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 2;
function _M0DTPC15error5Error120lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error120lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGRPC15debug4ReprE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0DTPC15debug9ReprDelta4Same(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug9ReprDelta4Same.prototype.$tag = 0;
function _M0DTPC15debug9ReprDelta9Different(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug9ReprDelta9Different.prototype.$tag = 1;
function _M0DTPC15debug9ReprDelta6Extra1(param0) {
  this._0 = param0;
}
_M0DTPC15debug9ReprDelta6Extra1.prototype.$tag = 2;
function _M0DTPC15debug9ReprDelta6Extra2(param0) {
  this._0 = param0;
}
_M0DTPC15debug9ReprDelta6Extra2.prototype.$tag = 3;
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TP45lumen7tsumugi5algos7spatial4Aabb(param0, param1, param2, param3) {
  this.min_x = param0;
  this.min_y = param1;
  this.max_x = param2;
  this.max_y = param3;
}
function _M0TP45lumen7tsumugi4core4base5Rgba8(param0, param1, param2, param3) {
  this.r = param0;
  this.g = param1;
  this.b = param2;
  this.a = param3;
}
function _M0TP45lumen7tsumugi4core4base6BitSet(param0, param1) {
  this.words = param0;
  this.len = param1;
}
function _M0TP45lumen7tsumugi4core3num5Pcg32(param0, param1) {
  this.state = param0;
  this.inc = param1;
}
function $f64_convert_i32_u(a) {
  return a < 0 ? a + 4294967296.0 : a + 0.0;
}
function _M0TPB8MutLocalGmE(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi6render5light5Light(param0, param1, param2, param3, param4, param5) {
  this.x = param0;
  this.y = param1;
  this.z = param2;
  this.radius = param3;
  this.color = param4;
  this.intensity = param5;
}
function _M0TP45lumen7tsumugi6render5light9LightCull(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29, param30, param31) {
  this.vp = param0;
  this.tile = param1;
  this.cols = param2;
  this.rows = param3;
  this.cap = param4;
  this.z_lo = param5;
  this.z_hi = param6;
  this.gz_lo = param7;
  this.gz_hi = param8;
  this.counts = param9;
  this.counts_b = param10;
  this.head = param11;
  this.head_b = param12;
  this.cursor = param13;
  this.idx = param14;
  this.tmp = param15;
  this.spans = param16;
  this.dirty = param17;
  this.dirty_n = param18;
  this.moved = param19;
  this.moved_sorted = param20;
  this.moved_stamp = param21;
  this.moved_n = param22;
  this.touch_stamp = param23;
  this.listed = param24;
  this.tile_token = param25;
  this.depth_epoch = param26;
  this.built_epoch = param27;
  this.sel_i = param28;
  this.sel_s = param29;
  this.buf = param30;
  this.stats = param31;
}
function _M0TP45lumen7tsumugi6render5light10LightStats(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.lights = param0;
  this.links = param1;
  this.tiles_with_light = param2;
  this.max_per_tile = param3;
  this.culled_span = param4;
  this.culled_tile = param5;
  this.trimmed = param6;
  this.dirty_tiles = param7;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP45lumen7tsumugi6render21light__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP45lumen7tsumugi6render21light__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP45lumen7tsumugi6render21light__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP45lumen7tsumugi6render21light__blackbox__test38moonbit__test__driver__js__parse__args = () => {
  try {
    let testParams = []
    // check if there is command line argument
    if (process.argv.length > 2) {
      const testArgs = JSON.parse(process.argv[2])
      testParams = testArgs.file_and_index.flatMap(([file, ranges]) => {
        let arr = []
        for (let range of ranges) {
          for (let i = range.start; i < range.end; i++) {
            arr.push([file, i])
          }
        }
        return arr
      })
      return testParams
    }
  } catch (error) {
    console.error('failed to parse args: ', error.message)
    process.exit(1)
  }
};
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 3: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 2: {
      return "lumen/tsumugi/render/light_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
    }
    case 1: {
      return "lumen/tsumugi/render/light_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    default: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6932 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9909GsE = 0;
const _M0MPB4Iter4nextN6constrS9910GsE = 0;
const _M0MPB4Iter3newN6constrS9917GsE = 0;
const _M0FPC15debug15compact__middleN7_2abindS1131 = "";
const _M0FPC15debug15compact__middleN7_2abindS1139 = " ";
const _M0FPC15debug15compact__middleN7_2abindS1133 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1143 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1142 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1140 = "";
const _M0FPC15debug14compact__linesN7_2abindS1145 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1151 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1160 = "";
const _M0FPC15debug14print__contentN7_2abindS1229 = "\n";
(() => {
})();
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 = 16;
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FPC15debug10assert__eqN6constrS1686GiE = false;
const _M0FPC15debug10assert__eqN6constrS1686GdE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGiEE = false;
const _bind = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__0, _1: ["light: a light inside one tile lands in exactly that tile"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__1, _1: ["light: a light on a tile boundary does not bleed one tile too far"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__2, _1: ["light: a light covering the whole viewport lists every tile"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__3, _1: ["light: lights outside the viewport are culled by span, not by luck"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__4, _1: ["light: the 2.5D slab really culls a raised light"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__5, _1: ["light: ground_radius is the 2.5D footprint, and shrinks with height"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__6, _1: ["light: span_radius never under-covers what the exact test accepts"] } }, { _0: 7, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__7, _1: ["light: the per-tile cap keeps the top-k by importance"] } }, { _0: 8, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__8, _1: ["light: cap large enough to hold everything changes nothing"] } }, { _0: 9, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__9, _1: ["light: the incremental pass agrees with the full pass after a drag"] } }, { _0: 10, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__10, _1: ["light: an incremental pass with nothing dirty does no work"] } }, { _0: 11, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__11, _1: ["light: moving a light off a tile removes it from that tile"] } }, { _0: 12, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__12, _1: ["light: a dirty grid wider than a quarter falls back to a full pass"] } }, { _0: 13, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__13, _1: ["light: pack_words round-trips into a readable block"] } }, { _0: 14, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__14, _1: ["light: empty light list and zero-radius lights are not special cases"] } }, { _0: 15, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__15, _1: ["light: pack_lights lays out eight floats per light"] } }, { _0: 16, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__16, _1: ["light: a light exactly at its reach distance is on the boundary"] } }, { _0: 17, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__17, _1: ["light: touching a moved light marks exactly its old and new spans"] } }, { _0: 18, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__18, _1: ["light: a light has a span exactly when it can reach the grid"] } }, { _0: 19, _1: { _0: _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__19, _1: ["light: the span is tight around the light, never a whole-grid fallback"] } }];
const _bind$2 = [{ _0: "light_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 20), undefined) }];
const _M0FP45lumen7tsumugi6render21light__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$2, 0, 1), undefined);
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGsE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_5642, _x_5643) {
  const _Failure = _x_5642;
  const _$42$arg_5644 = _Failure._0;
  _x_5643.method_table.method_0(_x_5643.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_5643, _$42$arg_5644);
  _x_5643.method_table.method_0(_x_5643.self, ")");
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0FPB13clamp__offset(offset, len) {
  return offset < 0 ? 0 : offset > len ? len : offset;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGbE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGbE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPB9SourceLocE(self, obj) {
  _M0IPB9SourceLocPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  const str = self.str;
  const base = self.start;
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + lo | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + lo | 0) - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + hi | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + hi | 0) - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView21clamped__view_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: logger, _1: self };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_0(logger.self, "}");
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGsE("Invalid index for View");
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0MPC13int3Int10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGiEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGiE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP45lumen7tsumugi4core4base5Rgba8E(x, y) {
  return !_M0IP45lumen7tsumugi4core4base5Rgba8PB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(lo)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(lo - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(hi)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(hi - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGbE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC14bool4BoolPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGsE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GsE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GsE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0FPB4failGuE(msg, loc) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0MPB13StringBuilder13write__objectGRPB9SourceLocE(_string_builder, loc);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " FAILED: ");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, msg);
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0MPB13StringBuilder10to__string(_string_builder)));
}
function _M0FPB12assert__true(x, msg, loc) {
  if (!x) {
    let fail_msg;
    if (msg === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGbE(_string_builder, x);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` is not true");
      const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
      const msg$2 = new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length);
      fail_msg = msg$2;
    } else {
      const _Some = msg;
      const _msg = _Some;
      fail_msg = _msg;
    }
    return _M0FPB4failGuE(fail_msg, loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0MPB4Iter3newGsE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GsE;
  }
  return new _M0TPB4IterGsE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$3 = self.str;
  const _bind$4 = self.start;
  const _bind$5 = self.end;
  let _tmp = _bind$4;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$5) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$6 = _bind$3.charCodeAt(_string_index);
        if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
          const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
          if (_bind$7 >= 56320 && _bind$7 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGsE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGsE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGiEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$3 = chars.str;
  const _bind$4 = chars.start;
  const _bind$5 = chars.end;
  let _tmp = _bind$4;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$5) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$6 = _bind$3.charCodeAt(_string_index);
        if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
          const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
          if (_bind$7 >= 56320 && _bind$7 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$6 = code >>> 5 | 0;
        switch (_bind$6) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$3 = code >>> 5 | 0;
    switch (_bind$3) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind$3 === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind$3;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$3 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$3 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6932, 0, _M0MPC16string6String4trimN7_2abindS6932.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$3 = _M0MPB4Iter4nextGsE(self);
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC14uint4UInt10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self >>> 0));
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGsE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC13int3Int3min(self, other) {
  return self < other ? self : other;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$3 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$3) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$4 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$4.end - _bind$4.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$3 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$3) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$4 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$4.end - _bind$4.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRP45lumen7tsumugi4core4base5Rgba8E(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$3 >>> 0 < _tmp.length ? _tmp[_bind$3] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$3 >>> 0 < _tmp.length ? _tmp[_bind$3] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGiE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGiRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double4ceil(_tmp) {
  return Math.ceil(_tmp);
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double3min(self, other) {
  return _M0MPC16double6Double7is__nan(self) ? other : _M0MPC16double6Double7is__nan(other) ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return _M0MPC16double6Double7is__nan(self) ? other : _M0MPC16double6Double7is__nan(other) ? self : self > other ? self : other;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0FPB7printlnGsE(input) {
  console.log(_M0IPC16string6StringPB4Show10to__string(input));
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_0(logger.self, "}");
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPB9SourceLocPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(self, start, end) {
  const len = self.length;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$3 = self;
  return new _M0TPB9ArrayViewGRPC15debug4ReprE(_bind$3, lo, lo + count | 0);
}
function _M0MPC15array5Array29unsafe__resize__with__defaultGiE(self, new_len, value) {
  const len = self.length;
  if (new_len >= len) {
    _M0MPB7JSArray11set__length(self, new_len);
    let _tmp = len;
    while (true) {
      const i = _tmp;
      if (i < new_len) {
        self[i] = value;
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array29unsafe__resize__with__defaultGdE(self, new_len, value) {
  const len = self.length;
  if (new_len >= len) {
    _M0MPB7JSArray11set__length(self, new_len);
    let _tmp = len;
    while (true) {
      const i = _tmp;
      if (i < new_len) {
        self[i] = value;
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGdE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRPC15debug7ContentE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array4copyGiE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRPB5ArrayGiEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGiE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGiE(arr, start, end) {
  const _bind$3 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$3)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGiE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGmE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGdE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGiE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGiE(arr) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S564GiE(_env, a, b) {
  const swaps = _env._1;
  const arr = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S568GiE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S564GiE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S564GiE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S564GiE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGiE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S568GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S568GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGiE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGiE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$3 = len / 2 | 0;
  let _tmp = _bind$3 - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGiE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB17fixed__sift__downGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGiE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$3 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind$3) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGiE(arr) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind$3) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGiE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGiE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGiE(arr$2);
      return undefined;
    }
    const _bind$3 = _M0FPB20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind$3._0;
    const _likely_sorted = _bind$3._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$4 = _M0FPB16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$4._0;
    const _partitioned = _bind$4._1;
    const _tmp$6 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$6 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGiE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGiE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGiE(self) {
  _M0FPB18fixed__quick__sortGiE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView4sortGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$3));
}
function _M0MPC15array5Array4makeGmE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IPC15array5ArrayPB2Eq5equalGiE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(self, f) {
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array5clearGiE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6resizeGiE(self, new_len, f) {
  if (new_len < 0) {
    _M0FPC15abort5abortGuE("negative new length");
  }
  const len = self.length;
  if (new_len < len) {
    _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len);
    return;
  } else {
    if (new_len > len) {
      _M0MPC15array5Array29unsafe__resize__with__defaultGiE(self, new_len, f);
      return;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array6resizeGdE(self, new_len, f) {
  if (new_len < 0) {
    _M0FPC15abort5abortGuE("negative new length");
  }
  const len = self.length;
  if (new_len < len) {
    _M0MPC15array5Array28unsafe__truncate__to__lengthGdE(self, new_len);
    return;
  } else {
    if (new_len > len) {
      _M0MPC15array5Array29unsafe__resize__with__defaultGdE(self, new_len, f);
      return;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$3 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGsE(iter);
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGdE(value) {
  return _M0IPC16double6DoublePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGiEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr6double(x) {
  return new _M0DTPC15debug4Repr9DoubleLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug15compact__middle(middle) {
  const parts = [];
  const _bind$3 = middle.end - middle.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const m = middle.buf[middle.start + _ | 0];
      const t = _M0MPC16string6String4trim(m, undefined);
      if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1131, 0, _M0FPC15debug15compact__middleN7_2abindS1131.length))) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(parts, t);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1139, 0, _M0FPC15debug15compact__middleN7_2abindS1139.length));
  const _bind$4 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1133, 0, _M0FPC15debug15compact__middleN7_2abindS1133.length));
  if (_bind$4 === undefined) {
    return new _M0TPC16string10StringView(joined0, 0, joined0.length);
  } else {
    const _Some = _bind$4;
    return _Some;
  }
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _bind$3 = lines.length - 1 | 0;
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, _bind$3);
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const joined = _M0FPC15debug15compact__middle(_x);
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRP45lumen7tsumugi4core4base5Rgba8E(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1143, 0, _M0FPC15debug14compact__linesN7_2abindS1143.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRP45lumen7tsumugi4core4base5Rgba8E(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1142, 0, _M0FPC15debug14compact__linesN7_2abindS1142.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1140, 0, _M0FPC15debug14compact__linesN7_2abindS1140.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1145, 0, _M0FPC15debug14compact__linesN7_2abindS1145.length)) && _last === ")") {
          const joined = _M0FPC15debug15compact__middle(_x);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$4 = _bind$3 - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$4) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1151, 0, _M0FPC15debug14compact__linesN7_2abindS1151.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGmE(lines, last_i, `${_M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1160, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1160.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$3 = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$3) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$4 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$4) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$3 = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$3) {
                const item = contents[1 + _ | 0];
                const _bind$4 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$4, 0, _bind$4.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$3 = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$3) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$4 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$4) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$3 = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind$3) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1229, 0, _M0FPC15debug14print__contentN7_2abindS1229.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$3 = v.lines;
        if (_bind$3.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$3.length === 1) {
            const _one = _bind$3[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$3[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$3, 1, _bind$3.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$3 = _val.lines;
        if (_bind$3.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$3.length === 1) {
            const _first = _bind$3[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$3[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$3, 1, _bind$3.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$3 = v.lines;
        if (_bind$3.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$3.length === 1) {
            const _one = _bind$3[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$3[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$3, 1, _bind$3.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1683 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0FPC15debug11double__abs(x) {
  return x < 0 ? -x : x;
}
function _M0FPC15debug11double__max(x, y) {
  return x > y ? x : y;
}
function _M0FPC15debug15relative__error(x, y) {
  if (x === y) {
    return 0;
  } else {
    const denom = _M0FPC15debug11double__max(_M0FPC15debug11double__abs(x), _M0FPC15debug11double__abs(y));
    return denom === 0 ? _M0FPC15debug11double__abs(x - y) : _M0FPC15debug11double__abs(x - y) / denom;
  }
}
function _M0FPC15debug16info__approx__eq(max_relative_error, x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      const _Integer = x;
      const _x1 = _Integer._0;
      if (y.$tag === 1) {
        const _Integer$2 = y;
        const _y1 = _Integer$2._0;
        return _x1 === _y1;
      } else {
        return false;
      }
    }
    case 2: {
      const _DoubleLit = x;
      const _x1$2 = _DoubleLit._0;
      if (y.$tag === 2) {
        const _DoubleLit$2 = y;
        const _y1 = _DoubleLit$2._0;
        return _M0FPC15debug15relative__error(_x1$2, _y1) <= max_relative_error;
      } else {
        return false;
      }
    }
    case 3: {
      const _FloatLit = x;
      const _x1$3 = _FloatLit._0;
      if (y.$tag === 3) {
        const _FloatLit$2 = y;
        const _y1 = _FloatLit$2._0;
        return _x1$3 === _y1;
      } else {
        return false;
      }
    }
    case 4: {
      const _BoolLit = x;
      const _x1$4 = _BoolLit._0;
      if (y.$tag === 4) {
        const _BoolLit$2 = y;
        const _y1 = _BoolLit$2._0;
        return _x1$4 === _y1;
      } else {
        return false;
      }
    }
    case 5: {
      const _CharLit = x;
      const _x1$5 = _CharLit._0;
      if (y.$tag === 5) {
        const _CharLit$2 = y;
        const _y1 = _CharLit$2._0;
        return _x1$5 === _y1;
      } else {
        return false;
      }
    }
    case 6: {
      const _StringLit = x;
      const _x1$6 = _StringLit._0;
      if (y.$tag === 6) {
        const _StringLit$2 = y;
        const _y1 = _StringLit$2._0;
        return _x1$6 === _y1;
      } else {
        return false;
      }
    }
    case 7: {
      if (y.$tag === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (y.$tag === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (y.$tag === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      const _Enum = x;
      const _n1 = _Enum._0;
      if (y.$tag === 10) {
        const _Enum$2 = y;
        const _n2 = _Enum$2._0;
        return _n1 === _n2;
      } else {
        return false;
      }
    }
    case 11: {
      if (y.$tag === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      const _RecordField = x;
      const _n1$2 = _RecordField._0;
      if (y.$tag === 12) {
        const _RecordField$2 = y;
        const _n2 = _RecordField$2._0;
        return _n1$2 === _n2;
      } else {
        return false;
      }
    }
    case 13: {
      const _EnumLabeledArg = x;
      const _n1$3 = _EnumLabeledArg._0;
      if (y.$tag === 13) {
        const _EnumLabeledArg$2 = y;
        const _n2 = _EnumLabeledArg$2._0;
        return _n1$3 === _n2;
      } else {
        return false;
      }
    }
    case 14: {
      const _Opaque = x;
      const _n1$4 = _Opaque._0;
      if (y.$tag === 14) {
        const _Opaque$2 = y;
        const _n2 = _Opaque$2._0;
        return _n1$4 === _n2;
      } else {
        return false;
      }
    }
    case 15: {
      const _Literal = x;
      const _x1$7 = _Literal._0;
      if (y.$tag === 15) {
        const _Literal$2 = y;
        const _y1 = _Literal$2._0;
        return _x1$7 === _y1;
      } else {
        return false;
      }
    }
    case 16: {
      if (y.$tag === 16) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 17) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FPC15debug21info__is__unimportant(info) {
  switch (info.$tag) {
    case 16: {
      return true;
    }
    case 7: {
      return true;
    }
    case 8: {
      return true;
    }
    case 9: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FPC15debug16diff__info__withN2goS142(max_relative_error, left_node, right_node) {
  if (_M0FPC15debug16info__approx__eq(max_relative_error, left_node, right_node)) {
    const xs = _M0MPC15debug4Repr8children(left_node);
    const ys = _M0MPC15debug4Repr8children(right_node);
    const xlen = xs.length;
    const ylen = ys.length;
    const min_len = xlen < ylen ? xlen : ylen;
    const children = [];
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < min_len) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(children, _M0FPC15debug16diff__info__withN2goS142(max_relative_error, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(xs, i), _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(ys, i)));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(xs, min_len, undefined);
    const _bind$4 = _bind$3.end - _bind$3.start | 0;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const t = _bind$3.buf[_bind$3.start + _ | 0];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(children, new _M0DTPC15debug9ReprDelta6Extra1(t));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$5 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(ys, min_len, undefined);
    const _bind$6 = _bind$5.end - _bind$5.start | 0;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$6) {
        const t = _bind$5.buf[_bind$5.start + _ | 0];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(children, new _M0DTPC15debug9ReprDelta6Extra2(t));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FPC15debug21info__is__unimportant(left_node) && (!_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children) && _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(children, (d) => {
      let _tmp$4;
      if (d.$tag === 0) {
        _tmp$4 = true;
      } else {
        _tmp$4 = false;
      }
      return !_tmp$4;
    })) ? new _M0DTPC15debug9ReprDelta9Different(left_node, right_node) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7shallow(left_node), children);
  } else {
    return new _M0DTPC15debug9ReprDelta9Different(left_node, right_node);
  }
}
function _M0FPC15debug16diff__info__with(left, right, max_relative_error) {
  return _M0FPC15debug16diff__info__withN2goS142(max_relative_error, left, right);
}
function _M0FPC15debug18diff__repr_2einner(x, y, max_relative_error) {
  return _M0FPC15debug16diff__info__with(x, y, max_relative_error);
}
function _M0FPC15debug10diff__repr(x, y, max_relative_error$46$opt) {
  let max_relative_error;
  if (max_relative_error$46$opt.$tag === 1) {
    const _Some = max_relative_error$46$opt;
    max_relative_error = _Some._0;
  } else {
    max_relative_error = 1e-12;
  }
  return _M0FPC15debug18diff__repr_2einner(x, y, max_relative_error);
}
function _M0FPC15debug12prune__deltaN2goS115(d, node) {
  if (d <= 0) {
    _L: {
      switch (node.$tag) {
        case 0: {
          const _Same = node;
          const _label = _Same._0;
          const _children = _Same._1;
          return _M0MPC15array5Array9is__emptyGRPC15debug7ContentE(_children) ? node : !_M0MPC15debug4Repr17info__adds__depth(_label) ? new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(d, child))) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
        }
        case 1: {
          break _L;
        }
        case 2: {
          break _L;
        }
        default: {
          break _L;
        }
      }
    }
    return new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
  } else {
    switch (node.$tag) {
      case 0: {
        const _Same = node;
        const _label = _Same._0;
        const _children = _Same._1;
        const next_depth = _M0MPC15debug4Repr17info__adds__depth(_label) ? d - 1 | 0 : d;
        return new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(next_depth, child)));
      }
      case 1: {
        const _Different = node;
        const _left = _Different._0;
        const _right = _Different._1;
        return new _M0DTPC15debug9ReprDelta9Different(_M0MPC15debug4Repr11prune__info(_left, undefined, d), _M0MPC15debug4Repr11prune__info(_right, undefined, d));
      }
      case 2: {
        const _Extra1 = node;
        const _x = _Extra1._0;
        return new _M0DTPC15debug9ReprDelta6Extra1(_M0MPC15debug4Repr11prune__info(_x, undefined, d));
      }
      default: {
        const _Extra2 = node;
        const _x$2 = _Extra2._0;
        return new _M0DTPC15debug9ReprDelta6Extra2(_M0MPC15debug4Repr11prune__info(_x$2, undefined, d));
      }
    }
  }
}
function _M0FPC15debug12prune__delta(max_depth, delta) {
  if (max_depth === undefined) {
    return delta;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0FPC15debug12prune__deltaN2goS115(_M0MPC13int3Int3max(1, _depth), delta);
  }
}
function _M0FPC15debug17delta__root__size(delta) {
  if (delta.$tag === 0) {
    const _Same = delta;
    const _label = _Same._0;
    return _M0FPC15debug10info__size(_label);
  } else {
    return 0;
  }
}
function _M0FPC15debug11mark__added(use_ansi, x) {
  return use_ansi ? _M0FPC15debug8surround("\u001b[32m+", "\u001b[0m", x) : _M0FPC15debug8surround("+", "", x);
}
function _M0FPC15debug13mark__removed(use_ansi, x) {
  return use_ansi ? _M0FPC15debug8surround("\u001b[31m-", "\u001b[0m", x) : _M0FPC15debug8surround("-", "", x);
}
function _M0FPC15debug13render__delta(threshold, use_ansi, delta) {
  switch (delta.$tag) {
    case 0: {
      const _Same = delta;
      const _label = _Same._0;
      const _children_delta = _Same._1;
      const children = _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug7ContentE(_children_delta, (child) => _M0FPC15debug13render__delta(threshold, use_ansi, child));
      return _M0FPC15debug14with__resizing(_M0FPC15debug17delta__root__size(delta), threshold, _M0MPC15debug4Repr13pretty__print(_label, children));
    }
    case 1: {
      const _Different = delta;
      const _left = _Different._0;
      const _right = _Different._1;
      const children$2 = [_M0MPC15debug4Repr12render__repr(_left, threshold), _M0MPC15debug4Repr12render__repr(_right, threshold)];
      let _tmp;
      if (children$2.length === 2) {
        const _left$2 = children$2[0];
        const _right$2 = children$2[1];
        _tmp = _M0FPC15debug10no__parens(_M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_left$2)), _M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_right$2))));
      } else {
        _tmp = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp);
    }
    case 2: {
      const _Extra1 = delta;
      const _x = _Extra1._0;
      const children$3 = [_M0MPC15debug4Repr12render__repr(_x, threshold)];
      let _tmp$2;
      if (children$3.length === 1) {
        const _x$2 = children$3[0];
        _tmp$2 = _M0FPC15debug10no__parens(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_x$2)));
      } else {
        _tmp$2 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$2);
    }
    default: {
      const _Extra2 = delta;
      const _x$2 = _Extra2._0;
      const children$4 = [_M0MPC15debug4Repr12render__repr(_x$2, threshold)];
      let _tmp$3;
      if (children$4.length === 1) {
        const _x$3 = children$4[0];
        _tmp$3 = _M0FPC15debug10no__parens(_M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_x$3)));
      } else {
        _tmp$3 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$3);
    }
  }
}
function _M0FPC15debug28pretty__print__delta_2einner(d, max_depth, compact_threshold, use_ansi) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 : max_depth;
  const delta = _M0FPC15debug12prune__delta(max_depth$2, d);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0FPC15debug13render__delta(compact_threshold, use_ansi, delta)));
}
function _M0FPC15debug20pretty__print__delta(d, max_depth, compact_threshold$46$opt, use_ansi$46$opt) {
  let compact_threshold;
  if (compact_threshold$46$opt === undefined) {
    compact_threshold = 70;
  } else {
    const _Some = compact_threshold$46$opt;
    compact_threshold = _Some;
  }
  const use_ansi = use_ansi$46$opt === -1 ? true : use_ansi$46$opt;
  return _M0FPC15debug28pretty__print__delta_2einner(d, max_depth, compact_threshold, use_ansi);
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16double6DoublePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6double(self);
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGiRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGiE(x)));
}
function _M0FPC15debug10assert__eqGiE(a, b, msg, loc) {
  if (a !== b) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGiE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGiE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GiE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGdE(a, b, msg, loc) {
  if (a !== b) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGdE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGdE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GdE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRPB5ArrayGiEE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGiEE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB5ArrayGiEE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB5ArrayGiEE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGiEE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FP45lumen7tsumugi5algos7spatial10tile__span(a, b, origin, tile) {
  const lo = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((a - origin) / tile));
  const hi = _M0MPC16double6Double7to__int(_M0MPC16double6Double4ceil((b - origin) / tile)) - 1 | 0;
  return { _0: lo, _1: hi };
}
function _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(v, n) {
  return v < 0 ? 0 : v >= n ? n - 1 | 0 : v;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(min_x, min_y, max_x, max_y) {
  return new _M0TP45lumen7tsumugi5algos7spatial4Aabb(min_x, min_y, max_x, max_y);
}
function _M0FP45lumen7tsumugi5algos7spatial10tile__rect(tx0, ty0, tx1, ty1, origin_x, origin_y, tile, clip) {
  const x0 = origin_x + (tx0 + 0) * tile;
  const y0 = origin_y + (ty0 + 0) * tile;
  const x1 = _M0MPC16double6Double3min(clip.max_x, origin_x + ((tx1 + 1 | 0) + 0) * tile);
  const y1 = _M0MPC16double6Double3min(clip.max_y, origin_y + ((ty1 + 1 | 0) + 0) * tile);
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(_M0MPC16double6Double3max(clip.min_x, x0), _M0MPC16double6Double3max(clip.min_y, y0), x1, y1);
}
function _M0FP45lumen7tsumugi5algos7spatial18sphere__box__dist2(x, y, z, b, z0, z1) {
  const dx = x < b.min_x ? b.min_x - x : x > b.max_x ? x - b.max_x : 0;
  const dy = y < b.min_y ? b.min_y - y : y > b.max_y ? y - b.max_y : 0;
  const dz = z < z0 ? z0 - z : z > z1 ? z - z1 : 0;
  return dx * dx + dy * dy + dz * dz;
}
function _M0FP45lumen7tsumugi5algos7spatial11sphere__box(x, y, z, r, b, z0, z1) {
  return r > 0 && _M0FP45lumen7tsumugi5algos7spatial18sphere__box__dist2(x, y, z, b, z0, z1) <= r * r;
}
function _M0FP45lumen7tsumugi5algos7spatial20sphere__slab__radius(z, r, z0, z1) {
  if (!(r > 0)) {
    return 0;
  }
  const dz = z < z0 ? z0 - z : z > z1 ? z - z1 : 0;
  return dz >= r ? 0 : Math.sqrt(r * r - dz * dz);
}
function _M0IP45lumen7tsumugi4core4base5Rgba8PB2Eq5equal(_x_231, _x_232) {
  return _x_231.r === _x_232.r && _x_231.g === _x_232.g && _x_231.b === _x_232.b && _x_231.a === _x_232.a;
}
function _M0MP45lumen7tsumugi4core4base5Rgba83new(r, g, b, alpha) {
  let alpha$2;
  if (alpha === undefined) {
    alpha$2 = 255;
  } else {
    const _Some = alpha;
    const _x = _Some;
    alpha$2 = _x;
  }
  return new _M0TP45lumen7tsumugi4core4base5Rgba8(r & 255, g & 255, b & 255, alpha$2 & 255);
}
function _M0MP45lumen7tsumugi4core4base6BitSet3new(bits) {
  if (64 === 0) {
    $panic();
  }
  const words = _M0MPC15array5Array4makeGmE((bits + 63 | 0) / 64 | 0, 0n);
  return new _M0TP45lumen7tsumugi4core4base6BitSet(words, bits);
}
function _M0MP45lumen7tsumugi4core4base6BitSet3set(self, i) {
  if (i >= 0 && i < self.len) {
    const _tmp = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$2 = i / 64 | 0;
    const _tmp$3 = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$4 = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(_tmp$3, i / 64 | 0);
    if (64 === 0) {
      $panic();
    }
    _M0MPC15array5Array3setGmE(_tmp, _tmp$2, BigInt.asUintN(64, _tmp$4 | BigInt.asUintN(64, 1n << BigInt((i % 64 | 0) & 63))));
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi4core4base6BitSet3get(self, i) {
  if (i < 0 || i >= self.len) {
    return false;
  } else {
    const _tmp = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$2 = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(_tmp, i / 64 | 0);
    if (64 === 0) {
      $panic();
    }
    return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, _tmp$2) >> BigInt((i % 64 | 0) & 63)) & 1n)) === BigInt.asUintN(64, 1n);
  }
}
function _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.words.length) {
      _M0MPC15array5Array3setGmE(self.words, i, 0n);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self) {
  const old = self.state;
  self.state = BigInt.asUintN(64, BigInt.asUintN(64, old * 6364136223846793005n) + self.inc);
  const xorshifted = Number(BigInt.asUintN(32, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, old) >> BigInt(18 & 63)) ^ old)) >> BigInt(27 & 63)))) | 0;
  const rot = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, old) >> BigInt(59 & 63)))) | 0;
  const _tmp = xorshifted >>> rot | 0;
  if (32 === 0) {
    $panic();
  }
  return _tmp | xorshifted << ((32 - rot | 0) % 32 | 0);
}
function _M0MP45lumen7tsumugi4core3num5Pcg323new(seed, seq) {
  let init_state;
  if (seed === undefined) {
    init_state = 9600629759793949339n;
  } else {
    const _Some = seed;
    const _s = _Some;
    init_state = _s;
  }
  let init_seq;
  if (seq === undefined) {
    init_seq = 15726070495360670683n;
  } else {
    const _Some = seq;
    const _s = _Some;
    init_seq = _s;
  }
  const rng = new _M0TP45lumen7tsumugi4core3num5Pcg32(0n, BigInt.asUintN(64, BigInt.asUintN(64, init_seq << BigInt(1 & 63)) | 1n));
  _M0MP45lumen7tsumugi4core3num5Pcg329next__u32(rng);
  rng.state = BigInt.asUintN(64, rng.state + init_state);
  _M0MP45lumen7tsumugi4core3num5Pcg329next__u32(rng);
  return rng;
}
function _M0MP45lumen7tsumugi4core3num5Pcg3212next__double(self) {
  return $f64_convert_i32_u(_M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self)) / 4294967296;
}
function _M0MP45lumen7tsumugi4core3num5Pcg3211next__below(self, bound) {
  if (bound <= 0) {
    return 0;
  }
  const _tmp = _M0MPC13int3Int10to__uint64(bound);
  if (_tmp === 0n) {
    $panic();
  }
  const threshold = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, 4294967296n - _M0MPC13int3Int10to__uint64(bound))) % BigInt.asUintN(64, _tmp));
  const r = new _M0TPB8MutLocalGmE(_M0MPC14uint4UInt10to__uint64(_M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self)));
  while (true) {
    if (BigInt.asUintN(64, r.val) < BigInt.asUintN(64, threshold)) {
      r.val = _M0MPC14uint4UInt10to__uint64(_M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self));
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = _M0MPC13int3Int10to__uint64(bound);
  if (_tmp$2 === 0n) {
    $panic();
  }
  return Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, r.val) % BigInt.asUintN(64, _tmp$2)))) | 0;
}
function _M0MP45lumen7tsumugi4core3num5Pcg325range(self, lo, hi) {
  return lo + (hi - lo) * _M0MP45lumen7tsumugi4core3num5Pcg3212next__double(self);
}
function _M0MP45lumen7tsumugi6render5light5Light5point(x, y, radius, color, intensity) {
  return new _M0TP45lumen7tsumugi6render5light5Light(x, y, 0, _M0MPC16double6Double3max(0, radius), _M0MPC16option6Option10unwrap__orGRP45lumen7tsumugi4core4base5Rgba8E(color, _M0MP45lumen7tsumugi4core4base5Rgba83new(255, 255, 255, undefined)), _M0MPC16double6Double3max(0, _M0MPC16option6Option10unwrap__orGdE(intensity, 1)));
}
function _M0MP45lumen7tsumugi6render5light5Light6raised(x, y, z, radius, color, intensity) {
  const l = _M0MP45lumen7tsumugi6render5light5Light5point(x, y, radius, color, intensity);
  l.z = z;
  return l;
}
function _M0MP45lumen7tsumugi6render5light5Light3set(self, o) {
  const r = _M0MPC16double6Double3max(0, o.radius);
  const i = _M0MPC16double6Double3max(0, o.intensity);
  const changed = self.x !== o.x || (self.y !== o.y || (self.z !== o.z || (self.radius !== r || (self.intensity !== i || _M0IP016_24default__implPB2Eq10not__equalGRP45lumen7tsumugi4core4base5Rgba8E(self.color, o.color)))));
  self.x = o.x;
  self.y = o.y;
  self.z = o.z;
  self.radius = r;
  self.intensity = i;
  self.color = o.color;
  return changed;
}
function _M0MP45lumen7tsumugi6render5light5Light14ground__radius(self) {
  return _M0FP45lumen7tsumugi5algos7spatial20sphere__slab__radius(self.z, self.radius, 0, 0);
}
function _M0MP45lumen7tsumugi6render5light5Light12span__radius(self, z0, z1) {
  return _M0FP45lumen7tsumugi5algos7spatial20sphere__slab__radius(self.z, self.radius, z0, z1);
}
function _M0MP45lumen7tsumugi6render5light5Light10importance(self, box, z0, z1) {
  const d2 = _M0FP45lumen7tsumugi5algos7spatial18sphere__box__dist2(self.x, self.y, self.z, box, z0, z1);
  return self.intensity / (1 + d2);
}
function _M0FP45lumen7tsumugi6render5light12pack__lights(lights) {
  const n = lights.length;
  const out = $make_array_len_and_init(Math.imul(8, n) | 0, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i);
      const o = Math.imul(i, 8) | 0;
      if (o >>> 0 < out.length) {
        out[o] = l.x;
      } else {
        $oob();
      }
      const _tmp$2 = o + 1 | 0;
      if (_tmp$2 >>> 0 < out.length) {
        out[_tmp$2] = l.y;
      } else {
        $oob();
      }
      const _tmp$3 = o + 2 | 0;
      if (_tmp$3 >>> 0 < out.length) {
        out[_tmp$3] = l.z;
      } else {
        $oob();
      }
      const _tmp$4 = o + 3 | 0;
      if (_tmp$4 >>> 0 < out.length) {
        out[_tmp$4] = l.radius;
      } else {
        $oob();
      }
      const _tmp$5 = o + 4 | 0;
      if (_tmp$5 >>> 0 < out.length) {
        out[_tmp$5] = (l.color.r + 0) / 255;
      } else {
        $oob();
      }
      const _tmp$6 = o + 5 | 0;
      if (_tmp$6 >>> 0 < out.length) {
        out[_tmp$6] = (l.color.g + 0) / 255;
      } else {
        $oob();
      }
      const _tmp$7 = o + 6 | 0;
      if (_tmp$7 >>> 0 < out.length) {
        out[_tmp$7] = (l.color.b + 0) / 255;
      } else {
        $oob();
      }
      const _tmp$8 = o + 7 | 0;
      if (_tmp$8 >>> 0 < out.length) {
        out[_tmp$8] = l.intensity;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP45lumen7tsumugi6render5light10LightStats11to__display(self) {
  const lights = self.lights;
  const links = self.links;
  const tiles = self.tiles_with_light;
  const mx = self.max_per_tile;
  const cs = self.culled_span;
  const ct = self.culled_tile;
  const tr = self.trimmed;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(79);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "LightStats(lights=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, lights);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", links=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, links);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", tiles=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, tiles);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", max/");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, mx);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", culled_span=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, cs);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", culled_tile=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, ct);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", trimmed=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, tr);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
  return _M0MPB13StringBuilder10to__string(_string_builder);
}
function _M0MP45lumen7tsumugi6render5light9LightCull3new(vp, tile) {
  const t = tile > 0 ? tile : 16;
  const tf = t + 0;
  let hi_x;
  _L: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(vp.min_x, vp.max_x, vp.min_x, tf);
    const _hi_x = _bind$3._1;
    hi_x = _hi_x;
    break _L;
  }
  let hi_y;
  _L$2: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(vp.min_y, vp.max_y, vp.min_y, tf);
    const _hi_y = _bind$3._1;
    hi_y = _hi_y;
    break _L$2;
  }
  const cols = _M0MPC13int3Int3max(1, hi_x + 1 | 0);
  const rows = _M0MPC13int3Int3max(1, hi_y + 1 | 0);
  const tiles = Math.imul(cols, rows) | 0;
  return new _M0TP45lumen7tsumugi6render5light9LightCull(vp, t, cols, rows, 0, $make_array_len_and_init(tiles, 0), $make_array_len_and_init(tiles, 0), 0, 0, $make_array_len_and_init(tiles, 0), $make_array_len_and_init(tiles, 0), $make_array_len_and_init(tiles + 1 | 0, 0), $make_array_len_and_init(tiles + 1 | 0, 0), $make_array_len_and_init(tiles, 0), [], [], [], _M0MP45lumen7tsumugi4core4base6BitSet3new(tiles), 0, [], [], [], 0, 1, $make_array_len_and_init(0, 0), 0, 0, 0, [], [], $make_array_len_and_init(64, 0), new _M0TP45lumen7tsumugi6render5light10LightStats(0, 0, 0, 0, 0, 0, 0, 0));
}
function _M0MP45lumen7tsumugi6render5light9LightCull4cols(self) {
  return self.cols;
}
function _M0MP45lumen7tsumugi6render5light9LightCull4rows(self) {
  return self.rows;
}
function _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self) {
  return Math.imul(self.cols, self.rows) | 0;
}
function _M0MP45lumen7tsumugi6render5light9LightCull5stats(self) {
  return self.stats;
}
function _M0MP45lumen7tsumugi6render5light9LightCull8set__cap(self, cap) {
  self.cap = _M0MPC13int3Int3max(0, cap);
  _M0MPC15array5Array6resizeGiE(self.sel_i, self.cap, 0);
  _M0MPC15array5Array6resizeGdE(self.sel_s, self.cap, 0);
}
function _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty) {
  return _M0FP45lumen7tsumugi5algos7spatial10tile__rect(tx, ty, tx, ty, self.vp.min_x, self.vp.min_y, self.tile + 0, self.vp);
}
function _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(self, box, z_lo, z_hi) {
  const tf = self.tile + 0;
  let lx;
  let hx;
  _L: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(box.min_x, box.max_x, self.vp.min_x, tf);
    const _lx = _bind$3._0;
    const _hx = _bind$3._1;
    lx = _lx;
    hx = _hx;
    break _L;
  }
  let ly;
  let hy;
  _L$2: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(box.min_y, box.max_y, self.vp.min_y, tf);
    const _ly = _bind$3._0;
    const _hy = _bind$3._1;
    ly = _ly;
    hy = _hy;
    break _L$2;
  }
  if (lx > hx || ly > hy) {
    return undefined;
  }
  const tx0 = _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(lx, self.cols);
  const tx1 = _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(hx, self.cols);
  const ty0 = _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(ly, self.rows);
  const ty1 = _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(hy, self.rows);
  const lo = _M0MPC16double6Double3min(z_lo, z_hi);
  const hi = _M0MPC16double6Double3max(z_lo, z_hi);
  let _tmp = ty0;
  while (true) {
    const ty = _tmp;
    if (ty <= ty1) {
      let _tmp$2 = tx0;
      while (true) {
        const tx = _tmp$2;
        if (tx <= tx1) {
          const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
          const _tmp$3 = self.z_lo;
          const _tmp$4 = self.z_lo;
          if (t >>> 0 < _tmp$3.length) {
            _tmp$3[t] = _M0MPC16double6Double3min(t >>> 0 < _tmp$4.length ? _tmp$4[t] : $oob(), lo);
          } else {
            $oob();
          }
          const _tmp$5 = self.z_hi;
          const _tmp$6 = self.z_hi;
          if (t >>> 0 < _tmp$5.length) {
            _tmp$5[t] = _M0MPC16double6Double3max(t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob(), hi);
          } else {
            $oob();
          }
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.gz_lo = _M0MPC16double6Double3min(self.gz_lo, lo);
  self.gz_hi = _M0MPC16double6Double3max(self.gz_hi, hi);
  self.depth_epoch = self.depth_epoch + 1 | 0;
}
function _M0MP45lumen7tsumugi6render5light9LightCull11tile__depth(self, tx, ty) {
  const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
  const _tmp = self.z_lo;
  const _tmp$2 = t >>> 0 < _tmp.length ? _tmp[t] : $oob();
  const _tmp$3 = self.z_hi;
  return { _0: _tmp$2, _1: t >>> 0 < _tmp$3.length ? _tmp$3[t] : $oob() };
}
function _M0MP45lumen7tsumugi6render5light9LightCull7reserve(self, n) {
  while (true) {
    if (self.spans.length < (Math.imul(n, 4) | 0)) {
      _M0MPC15array5Array4pushGiE(self.spans, -1);
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (self.moved_stamp.length < n) {
      _M0MPC15array5Array4pushGiE(self.moved_stamp, 0);
      continue;
    } else {
      break;
    }
  }
  if (self.listed.length < n) {
    self.listed = $make_array_len_and_init(n, 0);
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi6render5light9LightCull11mark__moved(self, i) {
  if (i < 0 || i >= self.moved_stamp.length) {
    return undefined;
  }
  if (_M0MPC15array5Array2atGiE(self.moved_stamp, i) === self.touch_stamp) {
    return undefined;
  }
  _M0MPC15array5Array3setGiE(self.moved_stamp, i, self.touch_stamp);
  _M0MPC15array5Array4pushGiE(self.moved, i);
  self.moved_n = self.moved_n + 1 | 0;
}
function _M0MP45lumen7tsumugi6render5light9LightCull8span__of(self, l, i) {
  const tf = self.tile + 0;
  const base = Math.imul(i, 4) | 0;
  const r = _M0MP45lumen7tsumugi6render5light5Light12span__radius(l, self.gz_lo, self.gz_hi);
  if (r <= 0 || (l.x + r <= self.vp.min_x || (l.x - r >= self.vp.max_x || (l.y + r <= self.vp.min_y || l.y - r >= self.vp.max_y)))) {
    _M0MPC15array5Array3setGiE(self.spans, base, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 1 | 0, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 2 | 0, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 3 | 0, -1);
    return undefined;
  }
  let lx;
  let hx;
  _L: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(l.x - r, l.x + r, self.vp.min_x, tf);
    const _lx = _bind$3._0;
    const _hx = _bind$3._1;
    lx = _lx;
    hx = _hx;
    break _L;
  }
  let ly;
  let hy;
  _L$2: {
    const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial10tile__span(l.y - r, l.y + r, self.vp.min_y, tf);
    const _ly = _bind$3._0;
    const _hy = _bind$3._1;
    ly = _ly;
    hy = _hy;
    break _L$2;
  }
  if (lx > hx || (ly > hy || (hx < 0 || (ly > (self.rows - 1 | 0) || (hy < 0 || lx > (self.cols - 1 | 0)))))) {
    _M0MPC15array5Array3setGiE(self.spans, base, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 1 | 0, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 2 | 0, -1);
    _M0MPC15array5Array3setGiE(self.spans, base + 3 | 0, -1);
    return undefined;
  }
  _M0MPC15array5Array3setGiE(self.spans, base, _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(lx, self.cols));
  _M0MPC15array5Array3setGiE(self.spans, base + 1 | 0, _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(hx, self.cols));
  _M0MPC15array5Array3setGiE(self.spans, base + 2 | 0, _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(ly, self.rows));
  _M0MPC15array5Array3setGiE(self.spans, base + 3 | 0, _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(hy, self.rows));
}
function _M0MP45lumen7tsumugi6render5light9LightCull9is__moved(self, i) {
  return i >= 0 && (i < self.moved_stamp.length && _M0MPC15array5Array2atGiE(self.moved_stamp, i) === self.touch_stamp);
}
function _M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, l, box, t) {
  const _tmp = l.x;
  const _tmp$2 = l.y;
  const _tmp$3 = l.z;
  const _tmp$4 = l.radius;
  const _tmp$5 = self.z_lo;
  const _tmp$6 = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
  const _tmp$7 = self.z_hi;
  return _M0FP45lumen7tsumugi5algos7spatial11sphere__box(_tmp, _tmp$2, _tmp$3, _tmp$4, box, _tmp$6, t >>> 0 < _tmp$7.length ? _tmp$7[t] : $oob());
}
function _M0MP45lumen7tsumugi6render5light9LightCull8in__span(self, i, tx, ty) {
  const base = Math.imul(i, 4) | 0;
  const lx = _M0MPC15array5Array2atGiE(self.spans, base);
  return lx >= 0 && (tx >= lx && (tx <= _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0) && (ty >= _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0) && ty <= _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0))));
}
function _M0MP45lumen7tsumugi6render5light9LightCull11depth__slab(self) {
  return { _0: self.gz_lo, _1: self.gz_hi };
}
function _M0MP45lumen7tsumugi6render5light9LightCull11light__span(self, i) {
  if (i < 0 || ((Math.imul(i, 4) | 0) + 3 | 0) >= self.spans.length) {
    return { _0: -1, _1: -1, _2: -1, _3: -1 };
  }
  const base = Math.imul(i, 4) | 0;
  return { _0: _M0MPC15array5Array2atGiE(self.spans, base), _1: _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0), _2: _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0), _3: _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0) };
}
function _M0MP45lumen7tsumugi6render5light9LightCull12dirty__tiles(self) {
  return self.dirty_n;
}
function _M0MP45lumen7tsumugi6render5light9LightCull11touch__tile(self, tx, ty) {
  if (tx < 0 || (ty < 0 || (tx >= self.cols || ty >= self.rows))) {
    return undefined;
  }
  const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
  if (!_M0MP45lumen7tsumugi4core4base6BitSet3get(self.dirty, t)) {
    _M0MP45lumen7tsumugi4core4base6BitSet3set(self.dirty, t);
    self.dirty_n = self.dirty_n + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi6render5light9LightCull12touch__light(self, lights, i) {
  _M0MP45lumen7tsumugi6render5light9LightCull7reserve(self, lights.length);
  _M0MP45lumen7tsumugi6render5light9LightCull11mark__moved(self, i);
  const base = Math.imul(i, 4) | 0;
  const ox0 = _M0MPC15array5Array2atGiE(self.spans, base);
  const ox1 = _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0);
  const oy0 = _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0);
  const oy1 = _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0);
  _M0MP45lumen7tsumugi6render5light9LightCull8span__of(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), i);
  const nx0 = _M0MPC15array5Array2atGiE(self.spans, base);
  const nx1 = _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0);
  const ny0 = _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0);
  const ny1 = _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0);
  if (ox0 < 0 && nx0 < 0) {
    return undefined;
  }
  const x0 = ox0 < 0 ? nx0 : nx0 < 0 ? ox0 : _M0MPC13int3Int3min(ox0, nx0);
  const x1 = _M0MPC13int3Int3max(ox1, nx1);
  const y0 = oy0 < 0 ? ny0 : ny0 < 0 ? oy0 : _M0MPC13int3Int3min(oy0, ny0);
  const y1 = _M0MPC13int3Int3max(oy1, ny1);
  let _tmp = y0;
  while (true) {
    const ty = _tmp;
    if (ty <= y1) {
      let _tmp$2 = x0;
      while (true) {
        const tx = _tmp$2;
        if (tx <= x1) {
          _M0MP45lumen7tsumugi6render5light9LightCull11touch__tile(self, tx, ty);
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi6render5light9LightCull10apply__cap(self, lights) {
  const tiles = _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self);
  const cap = self.cap;
  const any = new _M0TPB8MutLocalGbE(false);
  let _tmp = 0;
  while (true) {
    const t = _tmp;
    if (t < tiles) {
      const _tmp$2 = self.counts;
      if ((t >>> 0 < _tmp$2.length ? _tmp$2[t] : $oob()) > cap) {
        any.val = true;
        break;
      }
      _tmp = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!any.val) {
    return undefined;
  }
  const acc = new _M0TPB8MutLocalGiE(0);
  let _tmp$2 = 0;
  while (true) {
    const t = _tmp$2;
    if (t < tiles) {
      let c;
      const _tmp$3 = self.counts;
      if ((t >>> 0 < _tmp$3.length ? _tmp$3[t] : $oob()) > cap) {
        c = cap;
      } else {
        const _tmp$4 = self.counts;
        c = t >>> 0 < _tmp$4.length ? _tmp$4[t] : $oob();
      }
      const _tmp$4 = self.head_b;
      if (t >>> 0 < _tmp$4.length) {
        _tmp$4[t] = acc.val;
      } else {
        $oob();
      }
      acc.val = acc.val + c | 0;
      _tmp$2 = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$3 = self.head_b;
  if (tiles >>> 0 < _tmp$3.length) {
    _tmp$3[tiles] = acc.val;
  } else {
    $oob();
  }
  _M0MPC15array5Array6resizeGiE(self.tmp, acc.val, 0);
  const trimmed = new _M0TPB8MutLocalGiE(0);
  let _tmp$4 = 0;
  while (true) {
    const t = _tmp$4;
    if (t < tiles) {
      _L: {
        const _tmp$5 = self.counts;
        const cnt = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
        const _tmp$6 = self.head;
        const from = t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob();
        if (cnt <= cap) {
          let _tmp$7 = 0;
          while (true) {
            const k = _tmp$7;
            if (k < cnt) {
              const _tmp$8 = self.tmp;
              const _tmp$9 = self.head_b;
              _M0MPC15array5Array3setGiE(_tmp$8, (t >>> 0 < _tmp$9.length ? _tmp$9[t] : $oob()) + k | 0, _M0MPC15array5Array2atGiE(self.idx, from + k | 0));
              _tmp$7 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        trimmed.val = trimmed.val + (cnt - cap | 0) | 0;
        const _tmp$7 = self.cols;
        if (_tmp$7 === 0) {
          $panic();
        }
        const tx = t % _tmp$7 | 0;
        const _tmp$8 = self.cols;
        if (_tmp$8 === 0) {
          $panic();
        }
        const ty = t / _tmp$8 | 0;
        const box = _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty);
        const _tmp$9 = self.z_lo;
        const z0 = t >>> 0 < _tmp$9.length ? _tmp$9[t] : $oob();
        const _tmp$10 = self.z_hi;
        const z1 = t >>> 0 < _tmp$10.length ? _tmp$10[t] : $oob();
        const kept = new _M0TPB8MutLocalGiE(0);
        let _tmp$11 = 0;
        while (true) {
          const k = _tmp$11;
          if (k < cnt) {
            const i = _M0MPC15array5Array2atGiE(self.idx, from + k | 0);
            const s = _M0MP45lumen7tsumugi6render5light5Light10importance(_M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), box, z0, z1);
            if (kept.val < cap) {
              const j = new _M0TPB8MutLocalGiE(kept.val);
              while (true) {
                if (j.val > 0 && _M0MPC15array5Array2atGdE(self.sel_s, j.val - 1 | 0) < s) {
                  _M0MPC15array5Array3setGdE(self.sel_s, j.val, _M0MPC15array5Array2atGdE(self.sel_s, j.val - 1 | 0));
                  _M0MPC15array5Array3setGiE(self.sel_i, j.val, _M0MPC15array5Array2atGiE(self.sel_i, j.val - 1 | 0));
                  j.val = j.val - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array3setGdE(self.sel_s, j.val, s);
              _M0MPC15array5Array3setGiE(self.sel_i, j.val, i);
              kept.val = kept.val + 1 | 0;
            } else {
              if (s > _M0MPC15array5Array2atGdE(self.sel_s, cap - 1 | 0)) {
                const j = new _M0TPB8MutLocalGiE(cap - 1 | 0);
                while (true) {
                  if (j.val > 0 && _M0MPC15array5Array2atGdE(self.sel_s, j.val - 1 | 0) < s) {
                    _M0MPC15array5Array3setGdE(self.sel_s, j.val, _M0MPC15array5Array2atGdE(self.sel_s, j.val - 1 | 0));
                    _M0MPC15array5Array3setGiE(self.sel_i, j.val, _M0MPC15array5Array2atGiE(self.sel_i, j.val - 1 | 0));
                    j.val = j.val - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _M0MPC15array5Array3setGdE(self.sel_s, j.val, s);
                _M0MPC15array5Array3setGiE(self.sel_i, j.val, i);
              }
            }
            _tmp$11 = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let _tmp$12 = 1;
        while (true) {
          const a = _tmp$12;
          if (a < kept.val) {
            const vi = _M0MPC15array5Array2atGiE(self.sel_i, a);
            const vs = _M0MPC15array5Array2atGdE(self.sel_s, a);
            const j = new _M0TPB8MutLocalGiE(a);
            while (true) {
              if (j.val > 0 && _M0MPC15array5Array2atGiE(self.sel_i, j.val - 1 | 0) > vi) {
                _M0MPC15array5Array3setGiE(self.sel_i, j.val, _M0MPC15array5Array2atGiE(self.sel_i, j.val - 1 | 0));
                _M0MPC15array5Array3setGdE(self.sel_s, j.val, _M0MPC15array5Array2atGdE(self.sel_s, j.val - 1 | 0));
                j.val = j.val - 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array3setGiE(self.sel_i, j.val, vi);
            _M0MPC15array5Array3setGdE(self.sel_s, j.val, vs);
            _tmp$12 = a + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let _tmp$13 = 0;
        while (true) {
          const k = _tmp$13;
          if (k < kept.val) {
            const _tmp$14 = self.tmp;
            const _tmp$15 = self.head_b;
            _M0MPC15array5Array3setGiE(_tmp$14, (t >>> 0 < _tmp$15.length ? _tmp$15[t] : $oob()) + k | 0, _M0MPC15array5Array2atGiE(self.sel_i, k));
            _tmp$13 = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _tmp$14 = self.counts;
        if (t >>> 0 < _tmp$14.length) {
          _tmp$14[t] = kept.val;
        } else {
          $oob();
        }
        break _L;
      }
      _tmp$4 = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$5 = 0;
  while (true) {
    const t = _tmp$5;
    if (t < (tiles + 1 | 0)) {
      const _tmp$6 = self.head;
      const _tmp$7 = self.head_b;
      if (t >>> 0 < _tmp$6.length) {
        _tmp$6[t] = t >>> 0 < _tmp$7.length ? _tmp$7[t] : $oob();
      } else {
        $oob();
      }
      _tmp$5 = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const fresh = self.tmp;
  self.tmp = self.idx;
  self.idx = fresh;
  self.stats.trimmed = self.stats.trimmed + trimmed.val | 0;
}
function _M0MP45lumen7tsumugi6render5light9LightCull12build__lists(self, lights, incremental) {
  const tiles = _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self);
  const n = lights.length;
  const acc = new _M0TPB8MutLocalGiE(0);
  let _tmp = 0;
  while (true) {
    const t = _tmp;
    if (t < tiles) {
      const _tmp$2 = self.head_b;
      if (t >>> 0 < _tmp$2.length) {
        _tmp$2[t] = acc.val;
      } else {
        $oob();
      }
      const _tmp$3 = acc.val;
      let _tmp$4;
      if (_M0MP45lumen7tsumugi4core4base6BitSet3get(self.dirty, t)) {
        const _tmp$5 = self.counts_b;
        _tmp$4 = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
      } else {
        const _tmp$5 = self.counts;
        _tmp$4 = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
      }
      acc.val = _tmp$3 + _tmp$4 | 0;
      _tmp = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = self.head_b;
  if (tiles >>> 0 < _tmp$2.length) {
    _tmp$2[tiles] = acc.val;
  } else {
    $oob();
  }
  if (!incremental) {
    _M0MPC15array5Array6resizeGiE(self.idx, acc.val, 0);
    _M0MPC15array5Array6resizeGiE(self.tmp, acc.val, 0);
  } else {
    if (self.tmp.length < acc.val) {
      _M0MPC15array5Array6resizeGiE(self.tmp, acc.val, 0);
    }
  }
  const total = new _M0TPB8MutLocalGiE(0);
  if (!incremental) {
    let _tmp$3 = 0;
    while (true) {
      const t = _tmp$3;
      if (t < tiles) {
        const _tmp$4 = self.cursor;
        const _tmp$5 = self.head_b;
        if (t >>> 0 < _tmp$4.length) {
          _tmp$4[t] = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
        } else {
          $oob();
        }
        _tmp$3 = t + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$4 = 0;
    while (true) {
      const i = _tmp$4;
      if (i < n) {
        _L: {
          const base = Math.imul(i, 4) | 0;
          if (_M0MPC15array5Array2atGiE(self.spans, base) < 0) {
            break _L;
          }
          const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i);
          let _tmp$5 = _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0);
          while (true) {
            const ty = _tmp$5;
            if (ty <= _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0)) {
              let _tmp$6 = _M0MPC15array5Array2atGiE(self.spans, base);
              while (true) {
                const tx = _tmp$6;
                if (tx <= _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0)) {
                  const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
                  if (_M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, l, _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty), t)) {
                    const _tmp$7 = self.idx;
                    const _tmp$8 = self.cursor;
                    _M0MPC15array5Array3setGiE(_tmp$7, t >>> 0 < _tmp$8.length ? _tmp$8[t] : $oob(), i);
                    const _tmp$9 = self.cursor;
                    const _tmp$10 = self.cursor;
                    if (t >>> 0 < _tmp$9.length) {
                      _tmp$9[t] = (t >>> 0 < _tmp$10.length ? _tmp$10[t] : $oob()) + 1 | 0;
                    } else {
                      $oob();
                    }
                  }
                  _tmp$6 = tx + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$5 = ty + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        _tmp$4 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$5 = 0;
    while (true) {
      const t = _tmp$5;
      if (t < tiles) {
        const _tmp$6 = total.val;
        const _tmp$7 = self.counts;
        total.val = _tmp$6 + (t >>> 0 < _tmp$7.length ? _tmp$7[t] : $oob()) | 0;
        _tmp$5 = t + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    const ms = self.moved_sorted;
    const ms_n = ms.length;
    let _tmp$3 = 0;
    while (true) {
      const t = _tmp$3;
      if (t < tiles) {
        _L: {
          const _tmp$4 = self.head_b;
          const dst = t >>> 0 < _tmp$4.length ? _tmp$4[t] : $oob();
          if (!_M0MP45lumen7tsumugi4core4base6BitSet3get(self.dirty, t)) {
            const _tmp$5 = self.head;
            const from = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
            const _tmp$6 = self.counts;
            const cnt = t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob();
            let _tmp$7 = 0;
            while (true) {
              const k = _tmp$7;
              if (k < cnt) {
                _M0MPC15array5Array3setGiE(self.tmp, dst + k | 0, _M0MPC15array5Array2atGiE(self.idx, from + k | 0));
                _tmp$7 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            total.val = total.val + cnt | 0;
            break _L;
          }
          const _tmp$5 = self.cols;
          if (_tmp$5 === 0) {
            $panic();
          }
          const tx = t % _tmp$5 | 0;
          const _tmp$6 = self.cols;
          if (_tmp$6 === 0) {
            $panic();
          }
          const ty = t / _tmp$6 | 0;
          const box = _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty);
          const _tmp$7 = self.head;
          const from = t >>> 0 < _tmp$7.length ? _tmp$7[t] : $oob();
          const _tmp$8 = self.counts;
          const cnt = t >>> 0 < _tmp$8.length ? _tmp$8[t] : $oob();
          const ri = new _M0TPB8MutLocalGiE(0);
          const mi = new _M0TPB8MutLocalGiE(0);
          const w = new _M0TPB8MutLocalGiE(dst);
          self.tile_token = self.tile_token + 1 | 0;
          const token = self.tile_token;
          while (true) {
            if (ri.val < cnt || mi.val < ms_n) {
              const take_run = ri.val >= cnt ? false : mi.val >= ms_n ? true : _M0MPC15array5Array2atGiE(self.idx, from + ri.val | 0) <= _M0MPC15array5Array2atGiE(ms, mi.val);
              if (take_run) {
                const i = _M0MPC15array5Array2atGiE(self.idx, from + ri.val | 0);
                ri.val = ri.val + 1 | 0;
                if (i >= n) {
                  continue;
                }
                const _tmp$9 = self.listed;
                if (i >>> 0 < _tmp$9.length) {
                  _tmp$9[i] = token;
                } else {
                  $oob();
                }
                if (_M0MP45lumen7tsumugi6render5light9LightCull9is__moved(self, i)) {
                  if (_M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), box, t)) {
                    _M0MPC15array5Array3setGiE(self.tmp, w.val, i);
                    w.val = w.val + 1 | 0;
                  } else {
                    self.stats.culled_tile = self.stats.culled_tile + 1 | 0;
                  }
                } else {
                  _M0MPC15array5Array3setGiE(self.tmp, w.val, i);
                  w.val = w.val + 1 | 0;
                }
              } else {
                const i = _M0MPC15array5Array2atGiE(ms, mi.val);
                mi.val = mi.val + 1 | 0;
                if (i >= n) {
                  continue;
                }
                const _tmp$9 = self.listed;
                if ((i >>> 0 < _tmp$9.length ? _tmp$9[i] : $oob()) === token) {
                  continue;
                }
                if (_M0MP45lumen7tsumugi6render5light9LightCull8in__span(self, i, tx, ty) && _M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), box, t)) {
                  _M0MPC15array5Array3setGiE(self.tmp, w.val, i);
                  w.val = w.val + 1 | 0;
                } else {
                  self.stats.culled_tile = self.stats.culled_tile + 1 | 0;
                }
              }
              continue;
            } else {
              break;
            }
          }
          total.val = total.val + (w.val - dst | 0) | 0;
          break _L;
        }
        _tmp$3 = t + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  let _tmp$3 = 0;
  while (true) {
    const t = _tmp$3;
    if (t < (tiles + 1 | 0)) {
      const _tmp$4 = self.head;
      const _tmp$5 = self.head_b;
      if (t >>> 0 < _tmp$4.length) {
        _tmp$4[t] = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
      } else {
        $oob();
      }
      _tmp$3 = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (incremental) {
    let _tmp$4 = 0;
    while (true) {
      const t = _tmp$4;
      if (t < tiles) {
        if (_M0MP45lumen7tsumugi4core4base6BitSet3get(self.dirty, t)) {
          const _tmp$5 = self.counts;
          const _tmp$6 = self.counts_b;
          if (t >>> 0 < _tmp$5.length) {
            _tmp$5[t] = t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob();
          } else {
            $oob();
          }
        }
        _tmp$4 = t + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const fresh = self.tmp;
    self.tmp = self.idx;
    self.idx = fresh;
  }
  self.stats.links = total.val;
}
function _M0MP45lumen7tsumugi6render5light9LightCull6finish(self) {
  const tiles = _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self);
  const with_light = new _M0TPB8MutLocalGiE(0);
  const mx = new _M0TPB8MutLocalGiE(0);
  let _tmp = 0;
  while (true) {
    const t = _tmp;
    if (t < tiles) {
      const _tmp$2 = self.counts;
      const c = t >>> 0 < _tmp$2.length ? _tmp$2[t] : $oob();
      if (c > 0) {
        with_light.val = with_light.val + 1 | 0;
      }
      if (c > mx.val) {
        mx.val = c;
      }
      _tmp = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.stats.tiles_with_light = with_light.val;
  self.stats.max_per_tile = mx.val;
  return self.stats;
}
function _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(self, lights) {
  const n = lights.length;
  _M0MP45lumen7tsumugi6render5light9LightCull7reserve(self, n);
  _M0MPC15array10FixedArray12fill_2einnerGiE(self.counts, 0, 0, undefined);
  _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.dirty);
  self.dirty_n = 0;
  _M0MPC15array5Array5clearGiE(self.moved);
  self.moved_n = 0;
  self.touch_stamp = self.touch_stamp + 1 | 0;
  self.stats = new _M0TP45lumen7tsumugi6render5light10LightStats(n, 0, 0, 0, 0, 0, 0, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      _M0MP45lumen7tsumugi6render5light9LightCull8span__of(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), i);
      if (_M0MPC15array5Array2atGiE(self.spans, Math.imul(i, 4) | 0) < 0) {
        self.stats.culled_span = self.stats.culled_span + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const total = new _M0TPB8MutLocalGiE(0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      _L: {
        const base = Math.imul(i, 4) | 0;
        if (_M0MPC15array5Array2atGiE(self.spans, base) < 0) {
          break _L;
        }
        const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i);
        let _tmp$3 = _M0MPC15array5Array2atGiE(self.spans, base + 2 | 0);
        while (true) {
          const ty = _tmp$3;
          if (ty <= _M0MPC15array5Array2atGiE(self.spans, base + 3 | 0)) {
            let _tmp$4 = _M0MPC15array5Array2atGiE(self.spans, base);
            while (true) {
              const tx = _tmp$4;
              if (tx <= _M0MPC15array5Array2atGiE(self.spans, base + 1 | 0)) {
                const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
                if (_M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, l, _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty), t)) {
                  const _tmp$5 = self.counts;
                  const _tmp$6 = self.counts;
                  if (t >>> 0 < _tmp$5.length) {
                    _tmp$5[t] = (t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob()) + 1 | 0;
                  } else {
                    $oob();
                  }
                  total.val = total.val + 1 | 0;
                } else {
                  self.stats.culled_tile = self.stats.culled_tile + 1 | 0;
                }
                _tmp$4 = tx + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$3 = ty + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.stats.links = total.val;
  _M0MP45lumen7tsumugi6render5light9LightCull12build__lists(self, lights, false);
  if (self.cap > 0) {
    _M0MP45lumen7tsumugi6render5light9LightCull10apply__cap(self, lights);
  }
  self.built_epoch = self.depth_epoch;
  return _M0MP45lumen7tsumugi6render5light9LightCull6finish(self);
}
function _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(self, lights) {
  const tiles = _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self);
  if (self.dirty_n === 0) {
    self.stats.dirty_tiles = 0;
    return self.stats;
  }
  if (self.depth_epoch !== self.built_epoch) {
    return _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(self, lights);
  }
  if ((Math.imul(self.dirty_n, 4) | 0) > tiles) {
    return _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(self, lights);
  }
  const n = lights.length;
  _M0MP45lumen7tsumugi6render5light9LightCull7reserve(self, n);
  if (self.listed.length < n) {
    self.listed = $make_array_len_and_init(n, 0);
  }
  self.stats = new _M0TP45lumen7tsumugi6render5light10LightStats(n, 0, 0, 0, 0, 0, 0, self.dirty_n);
  _M0MPC15array5Array5clearGiE(self.moved_sorted);
  let _tmp = 0;
  while (true) {
    const m = _tmp;
    if (m < self.moved_n) {
      const i = _M0MPC15array5Array2atGiE(self.moved, m);
      const j = new _M0TPB8MutLocalGiE(self.moved_sorted.length);
      _M0MPC15array5Array4pushGiE(self.moved_sorted, i);
      while (true) {
        if (j.val > 0 && _M0MPC15array5Array2atGiE(self.moved_sorted, j.val - 1 | 0) > i) {
          _M0MPC15array5Array3setGiE(self.moved_sorted, j.val, _M0MPC15array5Array2atGiE(self.moved_sorted, j.val - 1 | 0));
          j.val = j.val - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array3setGiE(self.moved_sorted, j.val, i);
      _tmp = m + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      _M0MP45lumen7tsumugi6render5light9LightCull8span__of(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), i);
      if (_M0MPC15array5Array2atGiE(self.spans, Math.imul(i, 4) | 0) < 0) {
        self.stats.culled_span = self.stats.culled_span + 1 | 0;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const cols = self.cols;
  const rows = self.rows;
  let _tmp$3 = 0;
  while (true) {
    const ty = _tmp$3;
    if (ty < rows) {
      let _tmp$4 = 0;
      while (true) {
        const tx = _tmp$4;
        if (tx < cols) {
          _L: {
            const t = (Math.imul(ty, cols) | 0) + tx | 0;
            if (!_M0MP45lumen7tsumugi4core4base6BitSet3get(self.dirty, t)) {
              break _L;
            }
            self.tile_token = self.tile_token + 1 | 0;
            const token = self.tile_token;
            const _tmp$5 = self.head;
            const prev_from = t >>> 0 < _tmp$5.length ? _tmp$5[t] : $oob();
            const _tmp$6 = self.counts;
            const prev_cnt = t >>> 0 < _tmp$6.length ? _tmp$6[t] : $oob();
            const box = _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(self, tx, ty);
            const c = new _M0TPB8MutLocalGiE(0);
            let _tmp$7 = 0;
            while (true) {
              const k = _tmp$7;
              if (k < prev_cnt) {
                _L$2: {
                  const i = _M0MPC15array5Array2atGiE(self.idx, prev_from + k | 0);
                  if (i >= n) {
                    break _L$2;
                  }
                  const _tmp$8 = self.listed;
                  if (i >>> 0 < _tmp$8.length) {
                    _tmp$8[i] = token;
                  } else {
                    $oob();
                  }
                  if (_M0MP45lumen7tsumugi6render5light9LightCull9is__moved(self, i) && !_M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), box, t)) {
                    break _L$2;
                  }
                  c.val = c.val + 1 | 0;
                  break _L$2;
                }
                _tmp$7 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            let _tmp$8 = 0;
            while (true) {
              const m = _tmp$8;
              if (m < self.moved_sorted.length) {
                _L$2: {
                  const i = _M0MPC15array5Array2atGiE(self.moved_sorted, m);
                  let _tmp$9;
                  if (i >= n) {
                    _tmp$9 = true;
                  } else {
                    const _tmp$10 = self.listed;
                    _tmp$9 = (i >>> 0 < _tmp$10.length ? _tmp$10[i] : $oob()) === token;
                  }
                  if (_tmp$9) {
                    break _L$2;
                  }
                  if (_M0MP45lumen7tsumugi6render5light9LightCull8in__span(self, i, tx, ty) && _M0MP45lumen7tsumugi6render5light9LightCull12reaches__box(self, _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i), box, t)) {
                    c.val = c.val + 1 | 0;
                  }
                  break _L$2;
                }
                _tmp$8 = m + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _tmp$9 = self.counts_b;
            if (t >>> 0 < _tmp$9.length) {
              _tmp$9[t] = c.val;
            } else {
              $oob();
            }
            break _L;
          }
          _tmp$4 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi6render5light9LightCull12build__lists(self, lights, true);
  if (self.cap > 0) {
    _M0MP45lumen7tsumugi6render5light9LightCull10apply__cap(self, lights);
  }
  const st = _M0MP45lumen7tsumugi6render5light9LightCull6finish(self);
  _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.dirty);
  self.dirty_n = 0;
  _M0MPC15array5Array5clearGiE(self.moved);
  self.moved_n = 0;
  self.touch_stamp = self.touch_stamp + 1 | 0;
  self.built_epoch = self.depth_epoch;
  return st;
}
function _M0MP45lumen7tsumugi6render5light9LightCull9count__at(self, tx, ty) {
  if (tx < 0 || (ty < 0 || (tx >= self.cols || ty >= self.rows))) {
    return 0;
  }
  const _tmp = self.counts;
  const _tmp$2 = (Math.imul(ty, self.cols) | 0) + tx | 0;
  return _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
}
function _M0MP45lumen7tsumugi6render5light9LightCull7run__of(self, tx, ty) {
  if (tx < 0 || (ty < 0 || (tx >= self.cols || ty >= self.rows))) {
    return { _0: 0, _1: 0 };
  }
  const t = (Math.imul(ty, self.cols) | 0) + tx | 0;
  const _tmp = self.head;
  const _tmp$2 = t >>> 0 < _tmp.length ? _tmp[t] : $oob();
  const _tmp$3 = self.counts;
  return { _0: _tmp$2, _1: t >>> 0 < _tmp$3.length ? _tmp$3[t] : $oob() };
}
function _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(self, tx, ty, out) {
  _M0MPC15array5Array5clearGiE(out);
  let start;
  let len;
  _L: {
    const _bind$3 = _M0MP45lumen7tsumugi6render5light9LightCull7run__of(self, tx, ty);
    const _start = _bind$3._0;
    const _len = _bind$3._1;
    start = _start;
    len = _len;
    break _L;
  }
  let _tmp = 0;
  while (true) {
    const k = _tmp;
    if (k < len) {
      _M0MPC15array5Array4pushGiE(out, _M0MPC15array5Array2atGiE(self.idx, start + k | 0));
      _tmp = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return len;
}
function _M0MP45lumen7tsumugi6render5light9LightCull11pack__words(self) {
  const tiles = _M0MP45lumen7tsumugi6render5light9LightCull11tile__count(self);
  const need = (8 + (Math.imul(2, tiles) | 0) | 0) + self.idx.length | 0;
  if (self.buf.length < need) {
    self.buf = $make_array_len_and_init(need, 0);
  }
  const _tmp = self.buf;
  if (0 >>> 0 < _tmp.length) {
    _tmp[0] = 1279743048;
  } else {
    $oob();
  }
  const _tmp$2 = self.buf;
  if (1 >>> 0 < _tmp$2.length) {
    _tmp$2[1] = 1;
  } else {
    $oob();
  }
  const _tmp$3 = self.buf;
  if (2 >>> 0 < _tmp$3.length) {
    _tmp$3[2] = self.cols;
  } else {
    $oob();
  }
  const _tmp$4 = self.buf;
  if (3 >>> 0 < _tmp$4.length) {
    _tmp$4[3] = self.rows;
  } else {
    $oob();
  }
  const _tmp$5 = self.buf;
  if (4 >>> 0 < _tmp$5.length) {
    _tmp$5[4] = self.tile;
  } else {
    $oob();
  }
  const _tmp$6 = self.buf;
  if (5 >>> 0 < _tmp$6.length) {
    _tmp$6[5] = self.stats.lights;
  } else {
    $oob();
  }
  const _tmp$7 = self.buf;
  if (6 >>> 0 < _tmp$7.length) {
    _tmp$7[6] = self.cap;
  } else {
    $oob();
  }
  const _tmp$8 = self.buf;
  if (7 >>> 0 < _tmp$8.length) {
    _tmp$8[7] = self.idx.length;
  } else {
    $oob();
  }
  let _tmp$9 = 0;
  while (true) {
    const t = _tmp$9;
    if (t < tiles) {
      const _tmp$10 = self.buf;
      const _tmp$11 = 8 + t | 0;
      const _tmp$12 = self.counts;
      if (_tmp$11 >>> 0 < _tmp$10.length) {
        _tmp$10[_tmp$11] = t >>> 0 < _tmp$12.length ? _tmp$12[t] : $oob();
      } else {
        $oob();
      }
      const _tmp$13 = self.buf;
      const _tmp$14 = (8 + tiles | 0) + t | 0;
      const _tmp$15 = self.head;
      if (_tmp$14 >>> 0 < _tmp$13.length) {
        _tmp$13[_tmp$14] = t >>> 0 < _tmp$15.length ? _tmp$15[t] : $oob();
      } else {
        $oob();
      }
      _tmp$9 = t + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$10 = 0;
  while (true) {
    const k = _tmp$10;
    if (k < self.idx.length) {
      const _tmp$11 = self.buf;
      const _tmp$12 = (8 + (Math.imul(2, tiles) | 0) | 0) + k | 0;
      if (_tmp$12 >>> 0 < _tmp$11.length) {
        _tmp$11[_tmp$12] = _M0MPC15array5Array2atGiE(self.idx, k);
      } else {
        $oob();
      }
      _tmp$10 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return need;
}
function _M0MP45lumen7tsumugi6render5light9LightCull12word__buffer(self) {
  return self.buf;
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test11brute__tile(cull, lights, tx, ty) {
  let z0;
  let z1;
  _L: {
    const _bind$3 = _M0MP45lumen7tsumugi6render5light9LightCull11tile__depth(cull, tx, ty);
    const _z0 = _bind$3._0;
    const _z1 = _bind$3._1;
    z0 = _z0;
    z1 = _z1;
    break _L;
  }
  const box = _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(cull, tx, ty);
  const out = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < lights.length) {
      const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i);
      if (_M0FP45lumen7tsumugi5algos7spatial11sphere__box(l.x, l.y, l.z, l.radius, box, z0, z1)) {
        _M0MPC15array5Array4pushGiE(out, i);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test12brute__links(cull, lights) {
  const total = new _M0TPB8MutLocalGiE(0);
  let _tmp = 0;
  while (true) {
    const ty = _tmp;
    if (ty < _M0MP45lumen7tsumugi6render5light9LightCull4rows(cull)) {
      let _tmp$2 = 0;
      while (true) {
        const tx = _tmp$2;
        if (tx < _M0MP45lumen7tsumugi6render5light9LightCull4cols(cull)) {
          total.val = total.val + _M0FP45lumen7tsumugi6render21light__blackbox__test11brute__tile(cull, lights, tx, ty).length | 0;
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return total.val;
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, lights, tag) {
  const out = [];
  const problems = new _M0TPB8MutLocalGiE(0);
  const first = new _M0TPB8MutLocalGsE("");
  let _tmp = 0;
  while (true) {
    const ty = _tmp;
    if (ty < _M0MP45lumen7tsumugi6render5light9LightCull4rows(cull)) {
      let _tmp$2 = 0;
      while (true) {
        const tx = _tmp$2;
        if (tx < _M0MP45lumen7tsumugi6render5light9LightCull4cols(cull)) {
          _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, tx, ty, out);
          const want = _M0FP45lumen7tsumugi6render21light__blackbox__test11brute__tile(cull, lights, tx, ty);
          if (out.length !== want.length) {
            problems.val = problems.val + 1 | 0;
            if (first.val === "") {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "(");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, tx);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, ty);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") got ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, out.length);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " want ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, want.length);
              first.val = _M0MPB13StringBuilder10to__string(_string_builder);
            }
          } else {
            let _tmp$3 = 0;
            while (true) {
              const i = _tmp$3;
              if (i < out.length) {
                if (_M0MPC15array5Array2atGiE(out, i) !== _M0MPC15array5Array2atGiE(want, i)) {
                  problems.val = problems.val + 1 | 0;
                  if (first.val === "") {
                    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "(");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder, tx);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder, ty);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") element ");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": got ");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGiE(out, i));
                    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " want ");
                    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGiE(want, i));
                    first.val = _M0MPB13StringBuilder10to__string(_string_builder);
                  }
                }
                _tmp$3 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (problems.val > 0) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(44);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, problems.val);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " tile(s) differ from brute force, first = ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, first.val);
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  if (_M0MP45lumen7tsumugi6render5light9LightCull5stats(cull).links !== _M0FP45lumen7tsumugi6render21light__blackbox__test12brute__links(cull, lights)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": link count ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP45lumen7tsumugi6render5light9LightCull5stats(cull).links);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != brute force ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0FP45lumen7tsumugi6render21light__blackbox__test12brute__links(cull, lights));
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  return "";
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test8ids__str(a) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "[");
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < a.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, ",");
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGiE(a, i));
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "]");
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(problems) {
  return _M0IP016_24default__implPB2Eq10not__equalGsE(problems, "") ? _M0FPB4failGuE(new _M0TPC16string10StringView(problems, 0, problems.length), "render/light/light_test.mbt:104:5-104:19@lumen/tsumugi") : new _M0DTPC16result6ResultGuRPB7FailureE2Ok(undefined);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull() {
  return _M0MP45lumen7tsumugi6render5light9LightCull3new(_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 16);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__0() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 5, _M0MP45lumen7tsumugi4core4base5Rgba83new(255, 0, 0, undefined), new _M0DTPC16option6OptionGdE4Some(2))];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(st.links, 1, "one light-tile link", "render/light/light_test.mbt:120:3-120:52@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 1, undefined, "render/light/light_test.mbt:121:3-121:36@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 0), 0, undefined, "render/light/light_test.mbt:122:3-122:36@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const out = [];
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, 0, 0, out), 1, undefined, "render/light/light_test.mbt:124:3-124:42@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MPC15array5Array2atGiE(out, 0), 0, undefined, "render/light/light_test.mbt:125:3-125:23@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, lights, "single tile"));
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__1() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(16, 16, 8, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 1, undefined, "render/light/light_test.mbt:138:3-138:36@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 0), 1, undefined, "render/light/light_test.mbt:139:3-139:36@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 1), 1, undefined, "render/light/light_test.mbt:140:3-140:36@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 1), 1, undefined, "render/light/light_test.mbt:141:3-141:36@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 2, 0), 0, undefined, "render/light/light_test.mbt:142:3-142:36@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 2), 0, undefined, "render/light/light_test.mbt:143:3-143:36@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 2, 2), 0, "corner-only contact is not a hit", "render/light/light_test.mbt:144:3-144:76@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, lights, "boundary"));
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__2() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(32, 24, 200, undefined, _M0DTPC16option6OptionGdE4None__)];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(st.links, 12, "4×3 grid, one light everywhere", "render/light/light_test.mbt:153:3-153:64@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(st.tiles_with_light, 12, undefined, "render/light/light_test.mbt:154:3-154:37@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(st.max_per_tile, 1, undefined, "render/light/light_test.mbt:155:3-155:32@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  let _tmp = 0;
  while (true) {
    const ty = _tmp;
    if (ty < 3) {
      let _tmp$2 = 0;
      while (true) {
        const tx = _tmp$2;
        if (tx < 4) {
          const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, tx, ty), 1, undefined, "render/light/light_test.mbt:158:7-158:42@lumen/tsumugi");
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__3() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(-100, 24, 10, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(32, 24, 100, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(500, 24, 100, undefined, _M0DTPC16option6OptionGdE4None__)];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _tmp = st.links;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "only the big light covers tiles: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP45lumen7tsumugi6render5light10LightStats11to__display(st));
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_tmp, 12, _M0MPB13StringBuilder10to__string(_string_builder), "render/light/light_test.mbt:175:3-175:85@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _tmp$2 = st.culled_span === 2;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(32);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "two lights have no span at all: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0MP45lumen7tsumugi6render5light10LightStats11to__display(st));
  const _bind$4 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$5 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "render/light/light_test.mbt:176:3-176:93@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const out = [];
  _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, 0, 0, out);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(out.length, 1, undefined, "render/light/light_test.mbt:179:3-179:29@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MPC15array5Array2atGiE(out, 0), 1, "the light that covers tile (0,0) is index 1", "render/light/light_test.mbt:180:3-180:74@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const edge = [_M0MP45lumen7tsumugi6render5light5Light5point(500, 24, 440, undefined, _M0DTPC16option6OptionGdE4None__)];
  const _tmp$3 = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, edge).links > 0;
  const _bind$8 = "reach into the viewport counts";
  const _bind$9 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length), "render/light/light_test.mbt:184:3-184:82@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, edge, "edge light"));
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__4() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const flat = [_M0MP45lumen7tsumugi6render5light5Light6raised(8, 8, 4, 3, undefined, _M0DTPC16option6OptionGdE4None__)];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, flat);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(st.links, 0, "a light at z=4 with r=3 does not reach the z=0 plane", "render/light/light_test.mbt:193:3-193:85@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(st.culled_span, 1, undefined, "render/light/light_test.mbt:194:3-194:31@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 3, 6);
  const st2 = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, flat);
  const _tmp = st2.links > 0;
  const _bind$5 = "with the slab at z=3..6 the light is inside it";
  const _bind$6 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "render/light/light_test.mbt:198:3-198:83@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, flat, "raised light"));
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const high = [_M0MP45lumen7tsumugi6render5light5Light6raised(8, 8, 40, 3, undefined, _M0DTPC16option6OptionGdE4None__)];
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, high).links, 0, undefined, "render/light/light_test.mbt:202:3-202:41@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__5() {
  const on_plane = _M0MP45lumen7tsumugi6render5light5Light5point(0, 0, 10, undefined, _M0DTPC16option6OptionGdE4None__);
  const _bind$3 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi6render5light5Light14ground__radius(on_plane), 10, undefined, "render/light/light_test.mbt:208:3-208:44@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const raised = _M0MP45lumen7tsumugi6render5light5Light6raised(0, 0, 6, 10, undefined, _M0DTPC16option6OptionGdE4None__);
  const _tmp = Math.abs(_M0MP45lumen7tsumugi6render5light5Light14ground__radius(raised) - 8) < 1e-12;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "3-4-5 triangle scaled: got ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, _M0MP45lumen7tsumugi6render5light5Light14ground__radius(raised));
  const _bind$4 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$5 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "render/light/light_test.mbt:211:3-214:4@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const floating = _M0MP45lumen7tsumugi6render5light5Light6raised(0, 0, 11, 10, undefined, _M0DTPC16option6OptionGdE4None__);
  const _bind$6 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi6render5light5Light14ground__radius(floating), 0, "above its own reach", "render/light/light_test.mbt:216:3-216:70@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$2 = Math.abs(_M0MP45lumen7tsumugi6render5light5Light12span__radius(raised, 6, 6) - 10) < 1e-12;
  const _bind$7 = "inside the slab the full radius is available";
  return _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "render/light/light_test.mbt:218:3-221:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__6() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const rng = _M0MP45lumen7tsumugi4core3num5Pcg323new(7n, 11n);
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 0, 20);
  const lights = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 40) {
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(lights, _M0MP45lumen7tsumugi6render5light5Light6raised(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -10, 74), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -10, 58), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 30), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 30), undefined, _M0DTPC16option6OptionGdE4None__));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  return _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, lights, "span safety"));
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__7() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 0, 0);
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(4, 4, 40, undefined, new _M0DTPC16option6OptionGdE4Some(1)), _M0MP45lumen7tsumugi6render5light5Light5point(12, 4, 40, undefined, new _M0DTPC16option6OptionGdE4Some(1)), _M0MP45lumen7tsumugi6render5light5Light5point(30, 4, 40, undefined, new _M0DTPC16option6OptionGdE4Some(1)), _M0MP45lumen7tsumugi6render5light5Light5point(60, 4, 40, undefined, new _M0DTPC16option6OptionGdE4Some(1)), _M0MP45lumen7tsumugi6render5light5Light5point(16, 16, 40, undefined, new _M0DTPC16option6OptionGdE4Some(8))];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const cols = _M0MP45lumen7tsumugi6render5light9LightCull4cols(cull);
  const rows = _M0MP45lumen7tsumugi6render5light9LightCull4rows(cull);
  const before = [];
  const list = [];
  let _tmp = 0;
  while (true) {
    const ty = _tmp;
    if (ty < rows) {
      let _tmp$2 = 0;
      while (true) {
        const tx = _tmp$2;
        if (tx < cols) {
          const c = _M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, tx, ty);
          _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, tx, ty, list);
          _M0MPC15array5Array4pushGRPB5ArrayGiEE(before, _M0MPC15array5Array4copyGiE(list));
          const _tmp$3 = list.length;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "count and list agree at (");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, tx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, ty);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
          const _bind$3 = _M0FPC15debug10assert__eqGiE(c, _tmp$3, _M0MPB13StringBuilder10to__string(_string_builder), "render/light/light_test.mbt:274:7-274:79@lumen/tsumugi");
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          _tmp$2 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_M0MPC15array5Array2atGRPB5ArrayGiEE(before, 0).length, 4, "four of the five reach tile (0,0)", "render/light/light_test.mbt:277:3-277:76@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  _M0MP45lumen7tsumugi6render5light9LightCull8set__cap(cull, 2);
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _tmp$2 = st.trimmed > 0;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "the cap dropped something: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP45lumen7tsumugi6render5light10LightStats11to__display(st));
  const _bind$4 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$5 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "render/light/light_test.mbt:281:3-281:83@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 2, "cap of 2", "render/light/light_test.mbt:282:3-282:52@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, 0, 0, list);
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGiEE(list, [0, 4], "kept the top two by importance", "render/light/light_test.mbt:286:3-286:64@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const problems = new _M0TPB8MutLocalGiE(0);
  const first = new _M0TPB8MutLocalGsE("");
  let _tmp$3 = 0;
  while (true) {
    const ty = _tmp$3;
    if (ty < rows) {
      let _tmp$4 = 0;
      while (true) {
        const tx = _tmp$4;
        if (tx < cols) {
          const t = (Math.imul(ty, cols) | 0) + tx | 0;
          const want = _M0MPC13int3Int3min(_M0MPC15array5Array2atGRPB5ArrayGiEE(before, t).length, 2);
          _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, tx, ty, list);
          if (list.length !== want) {
            problems.val = problems.val + 1 | 0;
            if (first.val === "") {
              const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(14);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "(");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, tx);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, ty);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ") got ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, list.length);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " want ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, want);
              first.val = _M0MPB13StringBuilder10to__string(_string_builder$2);
            }
          } else {
            if (want > 0) {
              const box = _M0MP45lumen7tsumugi6render5light9LightCull9tile__box(cull, tx, ty);
              let z0;
              let z1;
              _L: {
                const _bind$8 = _M0MP45lumen7tsumugi6render5light9LightCull11tile__depth(cull, tx, ty);
                const _z0 = _bind$8._0;
                const _z1 = _bind$8._1;
                z0 = _z0;
                z1 = _z1;
                break _L;
              }
              const ranked = _M0MPC15array5Array4copyGiE(_M0MPC15array5Array2atGRPB5ArrayGiEE(before, t));
              let _tmp$5 = 1;
              while (true) {
                const a = _tmp$5;
                if (a < ranked.length) {
                  const vi = _M0MPC15array5Array2atGiE(ranked, a);
                  const vs = _M0MP45lumen7tsumugi6render5light5Light10importance(_M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, vi), box, z0, z1);
                  const j = new _M0TPB8MutLocalGiE(a);
                  while (true) {
                    if (j.val > 0 && (_M0MP45lumen7tsumugi6render5light5Light10importance(_M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, _M0MPC15array5Array2atGiE(ranked, j.val - 1 | 0)), box, z0, z1) < vs || _M0MP45lumen7tsumugi6render5light5Light10importance(_M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, _M0MPC15array5Array2atGiE(ranked, j.val - 1 | 0)), box, z0, z1) === vs && _M0MPC15array5Array2atGiE(ranked, j.val - 1 | 0) > vi)) {
                      _M0MPC15array5Array3setGiE(ranked, j.val, _M0MPC15array5Array2atGiE(ranked, j.val - 1 | 0));
                      j.val = j.val - 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _M0MPC15array5Array3setGiE(ranked, j.val, vi);
                  _tmp$5 = a + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              const want_ids = [];
              let _tmp$6 = 0;
              while (true) {
                const k = _tmp$6;
                if (k < want) {
                  _M0MPC15array5Array4pushGiE(want_ids, _M0MPC15array5Array2atGiE(ranked, k));
                  _tmp$6 = k + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4sortGiE(want_ids);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGiEE(list, want_ids)) {
                problems.val = problems.val + 1 | 0;
                if (first.val === "") {
                  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "(");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, tx);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, ty);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ") kept ");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP45lumen7tsumugi6render21light__blackbox__test8ids__str(list));
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " want top-");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, want);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " ");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP45lumen7tsumugi6render21light__blackbox__test8ids__str(want_ids));
                  first.val = _M0MPB13StringBuilder10to__string(_string_builder$2);
                }
              }
            }
          }
          _tmp$4 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4;
  if (problems.val > 0) {
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(40);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "cap selection wrong in ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, problems.val);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " tile(s), first: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, first.val);
    _tmp$4 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  } else {
    _tmp$4 = "";
  }
  const _bind$8 = _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_tmp$4);
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  _M0MP45lumen7tsumugi6render5light9LightCull8set__cap(cull, 0);
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  let _tmp$5 = 0;
  while (true) {
    const ty = _tmp$5;
    if (ty < rows) {
      let _tmp$6 = 0;
      while (true) {
        const tx = _tmp$6;
        if (tx < cols) {
          _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(cull, tx, ty, list);
          const _tmp$7 = _M0IPC15array5ArrayPB2Eq5equalGiE(list, _M0MPC15array5Array2atGRPB5ArrayGiEE(before, (Math.imul(ty, cols) | 0) + tx | 0));
          const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(28);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "uncapped list at (");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, tx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, ty);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ") is back");
          const _bind$9 = _M0MPB13StringBuilder10to__string(_string_builder$2);
          const _bind$10 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "render/light/light_test.mbt:340:7-343:8@lumen/tsumugi");
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _ok._0;
          } else {
            return _bind$10;
          }
          _tmp$6 = tx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$5 = ty + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP45lumen7tsumugi6render21light__blackbox__test13expect__clean(_M0FP45lumen7tsumugi6render21light__blackbox__test21check__against__brute(cull, lights, "uncapped"));
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__8() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 6, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(24, 8, 6, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(40, 8, 6, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const uncapped = _M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 0);
  const before = _M0MP45lumen7tsumugi6render5light9LightCull5stats(cull).links;
  _M0MP45lumen7tsumugi6render5light9LightCull8set__cap(cull, uncapped);
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 0), uncapped, undefined, "render/light/light_test.mbt:361:3-361:43@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(st.links, before, undefined, "render/light/light_test.mbt:362:3-362:30@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FPC15debug10assert__eqGiE(st.trimmed, 0, "nothing was trimmed", "render/light/light_test.mbt:363:3-363:54@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test41____test__6c696768745f746573742e6d6274__9() {
  const full = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const inc = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(full, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 0, 8);
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(inc, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 0, 8);
  const lights = [];
  const rng = _M0MP45lumen7tsumugi4core3num5Pcg323new(99n, 3n);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 12) {
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(lights, _M0MP45lumen7tsumugi6render5light5Light5point(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 64), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 48), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 6, 20), undefined, _M0DTPC16option6OptionGdE4None__));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(full, lights);
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(inc, lights);
  const a = [];
  const b = [];
  let _tmp$2 = 0;
  while (true) {
    const round = _tmp$2;
    if (round < 30) {
      const who = _M0MP45lumen7tsumugi4core3num5Pcg3211next__below(rng, 12);
      const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, who);
      const moved = _M0MP45lumen7tsumugi6render5light5Light6raised(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -8, 72), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -8, 56), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 12), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 2, 18), undefined, new _M0DTPC16option6OptionGdE4Some(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0.5, 3)));
      _M0MP45lumen7tsumugi6render5light5Light3set(l, moved);
      _M0MP45lumen7tsumugi6render5light9LightCull12touch__light(inc, lights, who);
      _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(inc, lights);
      _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(full, lights);
      let _tmp$3 = 0;
      while (true) {
        const ty = _tmp$3;
        if (ty < _M0MP45lumen7tsumugi6render5light9LightCull4rows(full)) {
          let _tmp$4 = 0;
          while (true) {
            const tx = _tmp$4;
            if (tx < _M0MP45lumen7tsumugi6render5light9LightCull4cols(full)) {
              _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(full, tx, ty, a);
              _M0MP45lumen7tsumugi6render5light9LightCull10lights__at(inc, tx, ty, b);
              const _tmp$5 = _M0IPC15array5ArrayPB2Eq5equalGiE(a, b);
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(38);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "round ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, round);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": tile (");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, tx);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, ty);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") incremental ");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP45lumen7tsumugi6render21light__blackbox__test8ids__str(b));
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != full ");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP45lumen7tsumugi6render21light__blackbox__test8ids__str(a));
              const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
              const _bind$4 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "render/light/light_test.mbt:401:9-404:10@lumen/tsumugi");
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              _tmp$4 = tx + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$3 = ty + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = round + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__10() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 6, undefined, _M0DTPC16option6OptionGdE4None__)];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const st2 = _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(st2.links, st.links, "the previous answer stands", "render/light/light_test.mbt:416:3-416:67@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  return _M0FPC15debug10assert__eqGiE(st2.dirty_tiles, 0, undefined, "render/light/light_test.mbt:417:3-417:32@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__11() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 3, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 1, undefined, "render/light/light_test.mbt:425:3-425:36@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, 0);
  _M0MP45lumen7tsumugi6render5light5Light3set(l, _M0MP45lumen7tsumugi6render5light5Light5point(56, 40, 3, undefined, _M0DTPC16option6OptionGdE4None__));
  _M0MP45lumen7tsumugi6render5light9LightCull12touch__light(cull, lights, 0);
  _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(cull, lights);
  const _bind$4 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 0, "the tile it left is clean", "render/light/light_test.mbt:430:3-430:69@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 3, 2), 1, "the tile it entered has it", "render/light/light_test.mbt:431:3-431:70@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__12() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(32, 24, 200, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  _M0MP45lumen7tsumugi6render5light9LightCull12touch__light(cull, lights, 0);
  _M0MP45lumen7tsumugi6render5light9LightCull11touch__tile(cull, 0, 0);
  const st = _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(cull, lights);
  return _M0FPC15debug10assert__eqGiE(st.links, 12, undefined, "render/light/light_test.mbt:444:3-444:26@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__13() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 48), 0, 4);
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 6, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(40, 30, 6, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(500, 500, 6, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const n = _M0MP45lumen7tsumugi6render5light9LightCull11pack__words(cull);
  const words = _M0MP45lumen7tsumugi6render5light9LightCull12word__buffer(cull);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(0 >>> 0 < words.length ? words[0] : $oob(), 1279743048, undefined, "render/light/light_test.mbt:459:3-459:42@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(1 >>> 0 < words.length ? words[1] : $oob(), 1, undefined, "render/light/light_test.mbt:460:3-460:44@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(2 >>> 0 < words.length ? words[2] : $oob(), 4, "cols", "render/light/light_test.mbt:461:3-461:37@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(3 >>> 0 < words.length ? words[3] : $oob(), 3, "rows", "render/light/light_test.mbt:462:3-462:37@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(4 >>> 0 < words.length ? words[4] : $oob(), 16, "tile size", "render/light/light_test.mbt:463:3-463:43@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(5 >>> 0 < words.length ? words[5] : $oob(), 3, "lights", "render/light/light_test.mbt:464:3-464:39@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(7 >>> 0 < words.length ? words[7] : $oob(), _M0MP45lumen7tsumugi6render5light9LightCull5stats(cull).links, "link count in the header", "render/light/light_test.mbt:465:3-465:74@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGiE(n, 32 + _M0MP45lumen7tsumugi6render5light9LightCull5stats(cull).links | 0, undefined, "render/light/light_test.mbt:466:3-466:50@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  let start;
  let len;
  _L: {
    const _bind$11 = _M0MP45lumen7tsumugi6render5light9LightCull7run__of(cull, 0, 0);
    const _start = _bind$11._0;
    const _len = _bind$11._1;
    start = _start;
    len = _len;
    break _L;
  }
  const head_in_block = 20 >>> 0 < words.length ? words[20] : $oob();
  const _bind$11 = _M0FPC15debug10assert__eqGiE(head_in_block, start, undefined, "render/light/light_test.mbt:470:3-470:34@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGiE(8 >>> 0 < words.length ? words[8] : $oob(), len, undefined, "render/light/light_test.mbt:471:3-471:31@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _tmp = 32 + start | 0;
  return _M0FPC15debug10assert__eqGiE(_tmp >>> 0 < words.length ? words[_tmp] : $oob(), 0, "light 0 is the one over tile (0,0)", "render/light/light_test.mbt:472:3-472:80@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__14() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const none = [];
  const st = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, none);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(st.links, 0, undefined, "render/light/light_test.mbt:480:3-480:25@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGiE(st.tiles_with_light, 0, undefined, "render/light/light_test.mbt:481:3-481:36@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(st.max_per_tile, 0, undefined, "render/light/light_test.mbt:482:3-482:32@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const zero = [_M0MP45lumen7tsumugi6render5light5Light5point(8, 8, 0, undefined, _M0DTPC16option6OptionGdE4None__), _M0MP45lumen7tsumugi6render5light5Light5point(8, 8, -5, undefined, _M0DTPC16option6OptionGdE4None__)];
  const st2 = _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, zero);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(st2.links, 0, "a radius that clamps to zero lights nothing", "render/light/light_test.mbt:488:3-488:77@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 0, 0), 0, undefined, "render/light/light_test.mbt:489:3-489:36@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__15() {
  const lights = [_M0MP45lumen7tsumugi6render5light5Light6raised(1, 2, 3, 4, _M0MP45lumen7tsumugi4core4base5Rgba83new(255, 128, 0, undefined), new _M0DTPC16option6OptionGdE4Some(2.5))];
  const w = _M0FP45lumen7tsumugi6render5light12pack__lights(lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(w.length, 8, undefined, "render/light/light_test.mbt:498:3-498:27@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGdE(0 >>> 0 < w.length ? w[0] : $oob(), 1, undefined, "render/light/light_test.mbt:499:3-499:23@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGdE(1 >>> 0 < w.length ? w[1] : $oob(), 2, undefined, "render/light/light_test.mbt:500:3-500:23@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGdE(2 >>> 0 < w.length ? w[2] : $oob(), 3, undefined, "render/light/light_test.mbt:501:3-501:23@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGdE(3 >>> 0 < w.length ? w[3] : $oob(), 4, undefined, "render/light/light_test.mbt:502:3-502:23@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGdE(4 >>> 0 < w.length ? w[4] : $oob(), 1, undefined, "render/light/light_test.mbt:503:3-503:23@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp = Math.abs((5 >>> 0 < w.length ? w[5] : $oob()) - 0.501960784313725483) < 1e-12;
  const _bind$9 = "green normalised";
  const _bind$10 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "render/light/light_test.mbt:504:3-504:80@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGdE(6 >>> 0 < w.length ? w[6] : $oob(), 0, undefined, "render/light/light_test.mbt:505:3-505:23@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPC15debug10assert__eqGdE(7 >>> 0 < w.length ? w[7] : $oob(), 2.5, undefined, "render/light/light_test.mbt:506:3-506:23@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__16() {
  const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 0, 20, 10);
  const _tmp = _M0FP45lumen7tsumugi5algos7spatial11sphere__box(0, 0, 0, 10, b, 0, 0);
  const _bind$3 = "exactly r away hits";
  const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "render/light/light_test.mbt:513:3-513:96@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp$2 = _M0FP45lumen7tsumugi5algos7spatial11sphere__box(0, 0, 0, 9.999, b, 0, 0) === false;
  const _bind$5 = "just inside r misses";
  const _bind$6 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "render/light/light_test.mbt:514:3-517:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi5algos7spatial20sphere__slab__radius(10, 10, 0, 0), 0, undefined, "render/light/light_test.mbt:519:3-519:68@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPB12assert__true(_M0FP45lumen7tsumugi5algos7spatial20sphere__slab__radius(9, 10, 0, 0) > 0, undefined, "render/light/light_test.mbt:520:3-520:70@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__17() {
  const cull = _M0FP45lumen7tsumugi6render21light__blackbox__test11small__cull();
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(24, 24, 4, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  const _bind$3 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull12dirty__tiles(cull), 0, "a rebuild leaves nothing marked", "render/light/light_test.mbt:528:3-528:74@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, 0);
  _M0MP45lumen7tsumugi6render5light5Light3set(l, _M0MP45lumen7tsumugi6render5light5Light5point(40, 24, 4, undefined, _M0DTPC16option6OptionGdE4None__));
  _M0MP45lumen7tsumugi6render5light9LightCull12touch__light(cull, lights, 0);
  const _tmp = _M0MP45lumen7tsumugi6render5light9LightCull12dirty__tiles(cull) > 0;
  const _bind$4 = "the move marked tiles";
  const _bind$5 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "render/light/light_test.mbt:533:3-533:67@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const marked = _M0MP45lumen7tsumugi6render5light9LightCull12dirty__tiles(cull);
  _M0MP45lumen7tsumugi6render5light9LightCull14rebuild__dirty(cull, lights);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull12dirty__tiles(cull), 0, "the incremental pass clears the marks", "render/light/light_test.mbt:536:3-536:80@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$2 = marked >= 2;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "old span and new span both marked: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, marked);
  const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$8 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "render/light/light_test.mbt:537:3-537:79@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 1, 1), 0, "the tile it left", "render/light/light_test.mbt:538:3-538:60@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi6render5light9LightCull9count__at(cull, 2, 1), 1, "the tile it entered", "render/light/light_test.mbt:539:3-539:63@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__18() {
  const vp = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1920, 1080);
  const cull = _M0MP45lumen7tsumugi6render5light9LightCull3new(vp, 16);
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, vp, 0, 12);
  const rng = _M0MP45lumen7tsumugi4core3num5Pcg323new(31n, 17n);
  const lights = [];
  const unreach = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 300) {
      _M0MPC15array5Array4pushGRP45lumen7tsumugi6render5light5LightE(lights, _M0MP45lumen7tsumugi6render5light5Light6raised(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -200, 2120), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -200, 1280), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 120), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 140), undefined, _M0DTPC16option6OptionGdE4None__));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  let z0;
  let z1;
  _L: {
    const _bind$3 = _M0MP45lumen7tsumugi6render5light9LightCull11depth__slab(cull);
    const _z0 = _bind$3._0;
    const _z1 = _bind$3._1;
    z0 = _z0;
    z1 = _z1;
    break _L;
  }
  const _bind$3 = _M0FPC15debug10assert__eqGdE(z0, 0, undefined, "render/light/light_test.mbt:564:3-564:21@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGdE(z1, 12, undefined, "render/light/light_test.mbt:565:3-565:22@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const problems = new _M0TPB8MutLocalGiE(0);
  const first = new _M0TPB8MutLocalGsE("");
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < lights.length) {
      const l = _M0MPC15array5Array2atGRP45lumen7tsumugi6render5light5LightE(lights, i);
      const r = _M0MP45lumen7tsumugi6render5light5Light12span__radius(l, z0, z1);
      const reachable = r > 0 && (l.x + r >= vp.min_x && (l.x - r <= vp.max_x && (l.y + r >= vp.min_y && l.y - r <= vp.max_y)));
      let lx;
      _L$2: {
        const _bind$5 = _M0MP45lumen7tsumugi6render5light9LightCull11light__span(cull, i);
        const _lx = _bind$5._0;
        lx = _lx;
        break _L$2;
      }
      const has_span = lx >= 0;
      if (_M0IP016_24default__implPB2Eq10not__equalGbE(reachable, has_span)) {
        problems.val = problems.val + 1 | 0;
        if (first.val === "") {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(43);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "i=");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " x=");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, l.x);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " y=");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, l.y);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " z=");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, l.z);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " r=");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, l.radius);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " span_r=");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, r);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " reachable=");
          _M0MPB13StringBuilder13write__objectGbE(_string_builder, reachable);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " got_span=");
          _M0MPB13StringBuilder13write__objectGbE(_string_builder, has_span);
          first.val = _M0MPB13StringBuilder10to__string(_string_builder);
        }
      }
      if (!reachable) {
        _M0MPC15array5Array4pushGiE(unreach, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$3 = problems.val === 0;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, problems.val);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " light(s) disagree about having a span; first: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, first.val);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "render/light/light_test.mbt:589:3-592:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = unreach.length > 20;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(56);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "the spread really does include unreachable lights (got ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, unreach.length);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ")");
  const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  return _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "render/light/light_test.mbt:593:3-596:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test42____test__6c696768745f746573742e6d6274__19() {
  const vp = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1920, 1080);
  const cull = _M0MP45lumen7tsumugi6render5light9LightCull3new(vp, 16);
  _M0MP45lumen7tsumugi6render5light9LightCull16set__tile__depth(cull, vp, 0, 0);
  const lights = [_M0MP45lumen7tsumugi6render5light5Light5point(500, 500, 20, undefined, _M0DTPC16option6OptionGdE4None__)];
  _M0MP45lumen7tsumugi6render5light9LightCull7rebuild(cull, lights);
  let ly;
  let lx;
  let hx;
  let hy;
  _L: {
    const _bind$3 = _M0MP45lumen7tsumugi6render5light9LightCull11light__span(cull, 0);
    const _lx = _bind$3._0;
    const _hx = _bind$3._1;
    const _ly = _bind$3._2;
    const _hy = _bind$3._3;
    ly = _ly;
    lx = _lx;
    hx = _hx;
    hy = _hy;
    break _L;
  }
  const _tmp = (hx - lx | 0) <= 3 && (hy - ly | 0) <= 3;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "a 40 px disc spans at most 4 tiles: got (");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, lx);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, ly);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")..(");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, hx);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, hy);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "render/light/light_test.mbt:608:3-611:4@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp$2 = lx >= 30 && hx <= 32;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(32);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "tx range around 500/16 = 31: (");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, lx);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, hx);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ")");
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  return _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "render/light/light_test.mbt:612:3-612:86@lumen/tsumugi");
}
function _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi6render21light__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP45lumen7tsumugi6render21light__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
    let _try_err;
    _L: {
      const _bind$3 = f();
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        const _err = _bind$3;
        _try_err = _err._0;
        break _L;
      }
      on_ok();
      return;
    }
    const err = _try_err;
    on_err(err);
  }, (err_str) => {
    on_err(new _M0DTPC15error5Error118lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP45lumen7tsumugi6render21light__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$3 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP45lumen7tsumugi6render21light__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$3;
      const _index_map = _Some;
      index_map = _index_map;
      break _L;
    }
  }
  let f;
  let attrs;
  _L$2: {
    const _bind$3 = _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(index_map, index);
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _f = _x._0;
      const _attrs = _x._1;
      f = _f;
      attrs = _attrs;
      break _L$2;
    }
  }
  let name;
  if (attrs.length >= 1) {
    const _name = attrs[0];
    name = _name;
  } else {
    name = "";
  }
  handle_start();
  _M0FP45lumen7tsumugi6render21light__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi6render21light__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP45lumen7tsumugi6render21light__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
  const handle_start = () => {
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"start\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const handle_result = (_testname, message, skipped) => {
    if (!skipped && false) {
    }
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    const message$2 = _M0MPC16string6String14escape_2einner(message, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(45);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"result\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"message\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, message$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const error_to_string = (err) => {
    let e;
    _L: {
      switch (err.$tag) {
        case 0: {
          const _Failure = err;
          const _e = _Failure._0;
          return _e;
        }
        case 3: {
          const _InspectError = err;
          const _e$2 = _InspectError._0;
          return _e$2;
        }
        case 4: {
          const _SnapshotError = err;
          const _e$3 = _SnapshotError._0;
          return _e$3;
        }
        case 2: {
          const _MoonBitTestDriverInternalJsError = err;
          const _e$4 = _MoonBitTestDriverInternalJsError._0;
          return _e$4;
        }
        default: {
          e = err;
          break _L;
        }
      }
    }
    return _M0FP15Error10to__string(e);
  };
  let _try_err;
  _L: {
    let _tmp;
    const _bind$3 = _M0IP45lumen7tsumugi6render21light__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    if (_tmp$2) {
      _tmp = true;
    } else {
      let _tmp$3;
      const _bind$4 = _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
      let _tmp$4;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$4 = _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L;
      }
      if (_tmp$4) {
        _tmp$3 = true;
      } else {
        let _tmp$5;
        const _bind$5 = _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
        let _tmp$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$6 = _ok._0;
        } else {
          const _err = _bind$5;
          _try_err = _err._0;
          break _L;
        }
        if (_tmp$6) {
          _tmp$5 = true;
        } else {
          let _tmp$7;
          const _bind$6 = _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
          let _tmp$8;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$8 = _ok._0;
          } else {
            const _err = _bind$6;
            _try_err = _err._0;
            break _L;
          }
          if (_tmp$8) {
            _tmp$7 = true;
          } else {
            const _bind$7 = _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi6render21light__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
            let _tmp$9;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$9 = _ok._0;
            } else {
              const _err = _bind$7;
              _try_err = _err._0;
              break _L;
            }
            _tmp$7 = _tmp$9;
          }
          _tmp$5 = _tmp$7;
        }
        _tmp$3 = _tmp$5;
      }
      _tmp = _tmp$3;
    }
    if (!_tmp) {
      _try_err = new _M0DTPC15error5Error120lumen_2ftsumugi_2frender_2flight__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
      break _L;
    } else {
      return;
    }
  }
  const err = _try_err;
  let name;
  _L$2: {
    const _MoonBitTestDriverInternalSkipTest = err;
    const _name = _MoonBitTestDriverInternalSkipTest._0;
    name = _name;
    break _L$2;
  }
  handle_result(name, "skipped test", true);
}
function _M0FP45lumen7tsumugi6render21light__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$3 = 0;
  const _bind$4 = tests.length;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const entry = i >>> 0 < tests.length ? tests[i] : $oob();
      _M0FP45lumen7tsumugi6render21light__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP45lumen7tsumugi6render21light__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP45lumen7tsumugi6render21light__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP45lumen7tsumugi6render21light__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi6render21light__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP45lumen7tsumugi6render21light__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP45lumen7tsumugi6render21light__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP45lumen7tsumugi6render21light__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP45lumen7tsumugi6render21light__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP45lumen7tsumugi6render21light__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=light.blackbox_test.js.map
