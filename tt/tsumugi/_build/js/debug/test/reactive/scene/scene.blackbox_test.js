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
function _M0DTPC15error5Error120lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error120lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 2;
function _M0DTPC15error5Error122lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error122lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 1;
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
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
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
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
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
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
function _M0TP45lumen7tsumugi5algos7spatial4Aabb(param0, param1, param2, param3) {
  this.min_x = param0;
  this.min_y = param1;
  this.max_x = param2;
  this.max_y = param3;
}
function _M0TP45lumen7tsumugi4core4math4Vec2(param0, param1) {
  this.x = param0;
  this.y = param1;
}
function _M0TP45lumen7tsumugi4core4math6Mat2x3(param0, param1, param2, param3, param4, param5) {
  this.a = param0;
  this.b = param1;
  this.c = param2;
  this.d = param3;
  this.e = param4;
  this.f = param5;
}
function _M0TPB8MutLocalGmE(param0) {
  this.val = param0;
}
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPB8MutLocalGjE(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi4core4base5Crc32(param0) {
  this.table = param0;
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
function _M0TP45lumen7tsumugi8reactive6signal5GraphGdE(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27) {
  this.kind = param0;
  this.state = param1;
  this.level = param2;
  this.values = param3;
  this.compute = param4;
  this.effect = param5;
  this.changed_at = param6;
  this.validated_at = param7;
  this.dep_start = param8;
  this.dep_items = param9;
  this.obs_lists = param10;
  this.frozen = param11;
  this.obs_start = param12;
  this.obs_items = param13;
  this.in_pending = param14;
  this.pending = param15;
  this.batch = param16;
  this.worklist = param17;
  this.visit = param18;
  this.query_id = param19;
  this.stack = param20;
  this.stack_i = param21;
  this.post = param22;
  this.n = param23;
  this.version = param24;
  this.compute_count = param25;
  this.effect_count = param26;
  this.overflow = param27;
}
function _M0TP45lumen7tsumugi8reactive6signal6ReaderGdE(param0, param1, param2, param3) {
  this.values = param0;
  this.items = param1;
  this.start = param2;
  this.count = param3;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi8reactive6signal11FlushReport(param0, param1, param2, param3) {
  this.passes = param0;
  this.effects_run = param1;
  this.computes = param2;
  this.overflow = param3;
}
function _M0TP45lumen7tsumugi8reactive5scene3Trs(param0, param1, param2, param3, param4) {
  this.x = param0;
  this.y = param1;
  this.rot = param2;
  this.sx = param3;
  this.sy = param4;
}
function _M0TP45lumen7tsumugi8reactive5scene11DirtyRegion(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14) {
  this.vp = param0;
  this.tile = param1;
  this.cols = param2;
  this.rows = param3;
  this.bits = param4;
  this.tiles = param5;
  this.full = param6;
  this.min_x = param7;
  this.min_y = param8;
  this.max_x = param9;
  this.max_y = param10;
  this.rects = param11;
  this.rect_cap = param12;
  this.overflow = param13;
  this.adds = param14;
}
function _M0TP45lumen7tsumugi8reactive5scene5Scene(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.vp = param0;
  this.nodes = param1;
  this.free = param2;
  this.marks = param3;
  this.mark_stamp = param4;
  this.stamp = param5;
  this.scratch = param6;
  this.id_stack = param7;
  this.clip_stack = param8;
  this.dirty = param9;
  this.stats = param10;
}
function _M0TP45lumen7tsumugi8reactive5scene10SceneStats(param0, param1, param2, param3, param4, param5, param6) {
  this.marks = param0;
  this.refreshed = param1;
  this.matmuls = param2;
  this.promotes = param3;
  this.early_stops = param4;
  this.post_rects = param5;
  this.pre_rects = param6;
}
function _M0TP45lumen7tsumugi8reactive5scene4Node(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24) {
  this.alive = param0;
  this.gen = param1;
  this.parent = param2;
  this.first_child = param3;
  this.last_child = param4;
  this.next = param5;
  this.prev = param6;
  this.depth = param7;
  this.trs = param8;
  this.bounds_local = param9;
  this.flags = param10;
  this.opacity = param11;
  this.clip_local = param12;
  this.mat = param13;
  this.mat_valid = param14;
  this.placed_dirty = param15;
  this.world = param16;
  this.world_ver = param17;
  this.world_base = param18;
  this.world_valid = param19;
  this.bounds = param20;
  this.bounds_ver = param21;
  this.clip_world = param22;
  this.clip_ver = param23;
  this.sub_local = param24;
}
function _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi8reactive5scene7IrStore(param0, param1, param2, param3, param4, param5, param6) {
  this.nodes = param0;
  this.stride = param1;
  this.words = param2;
  this.stamps = param3;
  this.version = param4;
  this.writes = param5;
  this.crc = param6;
}
function _M0TP45lumen7tsumugi8reactive5scene8IrBridge(param0, param1, param2, param3) {
  this.links = param0;
  this.pulls = param1;
  this.pushes = param2;
  this.conflicts = param3;
}
function _M0TP45lumen7tsumugi8reactive5scene8PropLink(param0, param1, param2, param3, param4, param5) {
  this.node = param0;
  this.prop = param1;
  this.sig = param2;
  this.seen_sig = param3;
  this.seen_ir = param4;
  this.prefer_ir = param5;
}
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
function _M0TPB8MutLocalGRPB5ArrayGiEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP45lumen7tsumugi8reactive21scene__blackbox__test38moonbit__test__driver__js__parse__args = () => {
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
    case 2: {
      return "lumen/tsumugi/reactive/scene_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 4: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    default: {
      return "lumen/tsumugi/reactive/scene_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
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
const _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 = 16;
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FPC15debug10assert__eqN6constrS1686GRP45lumen7tsumugi5algos7spatial4AabbE = false;
const _M0FPC15debug10assert__eqN6constrS1686GiE = false;
const _M0FPC15debug10assert__eqN6constrS1686GdE = false;
const _M0FPB4seed = _M0FPB12random__seed();
const _bind = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__0, _1: ["scene: TRS composes as T · R · S, like CSS transform"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__1, _1: ["scene: incremental updates equal a full recompute (random fuzz)"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__2, _1: ["scene: identical writes cost nothing and damage nothing"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__3, _1: ["scene: damage is the union of where it was and where it is"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__4, _1: ["scene: subtree bounds make a group move with one rectangle"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__5, _1: ["scene: hidden subtrees paint nothing, and changes inside them damage nothing"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__6, _1: ["scene: clip chains bound the damage"] } }, { _0: 7, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__7, _1: ["scene: removal frees the subtree, and generations catch reuse"] } }, { _0: 8, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__8, _1: ["scene: reparent keeps depths, refuses cycles, damages both ends"] } }, { _0: 9, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__9, _1: ["scene: hit testing is topmost-first and clip aware"] } }, { _0: 10, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__10, _1: ["scene: a 4000-deep chain works (no recursion anywhere)"] } }, { _0: 11, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__11, _1: ["scene: reparenting between equal-version parents still refreshes the subtree"] } }, { _0: 12, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__12, _1: ["scene: visibility is inherited and a hidden subtree takes no damage"] } }];
const _tmp = { _0: "scene_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 13), undefined) };
const _bind$2 = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__0, _1: ["ir: store defaults, equality cut-off and stamps"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__1, _1: ["ir: TRS and clip round-trip through the store"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__2, _1: ["ir: apply_to_scene is idempotent and only damages when it changes"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__3, _1: ["ir: the bridge pulls only what changed and never echoes"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__4, _1: ["ir: a conflict resolves by policy, and the loser is re-synced"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__5, _1: ["ir: encode/decode is little-endian with a real CRC-32"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__6, _1: ["ir: the wire format round-trips, and rejects anything corrupt"] } }];
const _tmp$2 = { _0: "ir_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$2, 0, 7), undefined) };
const _bind$3 = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__0, _1: ["dirty: every touched tile is dirty and nothing else"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__1, _1: ["dirty: everything outside the viewport is ignored, partial damage is clipped"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__2, _1: ["dirty: the full shortcut takes over once every tile is dirty"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__3, _1: ["dirty: to_rects is an exact, non-overlapping cover of the tile set"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__4, _1: ["dirty: adding the same rect twice is idempotent, and the cap bounds the list"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__5, _1: ["dirty: region union equals the union of tile sets"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__6, _1: ["dirty: transform_bounds is tight under rotation and shear"] } }, { _0: 7, _1: { _0: _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__7, _1: ["dirty: covers tells the truth about partially dirty areas"] } }];
const _bind$4 = [_tmp, _tmp$2, { _0: "dirty_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$3, 0, 8), undefined) }];
const _M0FP45lumen7tsumugi8reactive21scene__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4, 0, 3), undefined);
function _M0FPC15abort5abortGdE(msg) {
  return $panic();
}
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
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < len) {
        const _tmp$4 = dst_offset + i | 0;
        const _tmp$5 = src_offset + i | 0;
        if (_tmp$4 >>> 0 < dst.length) {
          dst[_tmp$4] = _tmp$5 >>> 0 < src.length ? src[_tmp$5] : $oob();
        } else {
          $oob();
        }
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$3 = len - 1 | 0;
    while (true) {
      const i = _tmp$3;
      if (i >= 0) {
        const _tmp$4 = dst_offset + i | 0;
        const _tmp$5 = src_offset + i | 0;
        if (_tmp$4 >>> 0 < dst.length) {
          dst[_tmp$4] = _tmp$5 >>> 0 < src.length ? src[_tmp$5] : $oob();
        } else {
          $oob();
        }
        _tmp$3 = i - 1 | 0;
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
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  _L: while (true) {
    const i = _tmp$3;
    const seg = _tmp$4;
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
          _tmp$3 = i + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp$3 = i + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp$3 = i + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp$3 = i + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_0(logger.self, "}");
            _tmp$3 = i + 1 | 0;
            _tmp$4 = i + 1 | 0;
            continue _L;
          } else {
            _tmp$3 = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp$3 = i + 1 | 0;
    _tmp$4 = i + 1 | 0;
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
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
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
function _M0IP016_24default__implPB2Eq10not__equalGRP45lumen7tsumugi5algos7spatial4AabbE(x, y) {
  return !_M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
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
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
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
  const _bind$5 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GsE;
  } else {
    if (_bind$5 === undefined) {
    } else {
      const _Some = _bind$5;
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
      const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
      const msg$2 = new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length);
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
function _M0MPC14uint4UInt8to__byte(self) {
  return self & 255;
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$5 = self.str;
  const _bind$6 = self.start;
  const _bind$7 = self.end;
  let _tmp$3 = _bind$6;
  while (true) {
    const _string_index = _tmp$3;
    if (_string_index < _bind$7) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$8 = _bind$5.charCodeAt(_string_index);
        if (_bind$8 >= 55296 && _bind$8 <= 56319 && (_string_index + 1 | 0) < _bind$7) {
          const _bind$9 = _bind$5.charCodeAt(_string_index + 1 | 0);
          if (_bind$9 >= 56320 && _bind$9 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$8 - 55296 | 0, 1024) | 0) + _bind$9 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$8);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$8);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp$3 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp$3 = i + 1 | 0;
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
  let _tmp$3 = end_offset;
  let _tmp$4 = 0;
  while (true) {
    const utf16_offset = _tmp$3;
    const char_count = _tmp$4;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp$3 = utf16_offset - 2 | 0;
        _tmp$4 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$3 = utf16_offset - 1 | 0;
        _tmp$4 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$3 = start_offset;
    let _tmp$4 = 0;
    while (true) {
      const utf16_offset = _tmp$3;
      const char_count = _tmp$4;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp$3 = utf16_offset + 2 | 0;
          _tmp$4 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$3 = utf16_offset + 1 | 0;
          _tmp$4 = char_count + 1 | 0;
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
        let _tmp$3;
        if (len === 0) {
          _tmp$3 = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp$3 = (total / n | 0) === len;
        }
        if (_tmp$3) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$4 = 0;
          while (true) {
            const _ = _tmp$4;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$4 = _ + 1 | 0;
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
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGbE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp$3 = start;
  while (true) {
    const i = _tmp$3;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp$3 = i + 1 | 0;
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
  const _bind$5 = chars.str;
  const _bind$6 = chars.start;
  const _bind$7 = chars.end;
  let _tmp$3 = _bind$6;
  while (true) {
    const _string_index = _tmp$3;
    if (_string_index < _bind$7) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$8 = _bind$5.charCodeAt(_string_index);
        if (_bind$8 >= 55296 && _bind$8 <= 56319 && (_string_index + 1 | 0) < _bind$7) {
          const _bind$9 = _bind$5.charCodeAt(_string_index + 1 | 0);
          if (_bind$9 >= 56320 && _bind$9 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$8 - 55296 | 0, 1024) | 0) + _bind$9 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$8);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$8);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$8 = code >>> 5 | 0;
        switch (_bind$8) {
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
      _tmp$3 = _decoded_next_string_index;
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
    const _bind$5 = code >>> 5 | 0;
    switch (_bind$5) {
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
  let _tmp$3 = start;
  while (true) {
    const pos = _tmp$3;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp$3 = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$3 = end;
  while (true) {
    const pos = _tmp$3;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp$3 = pos - 1 | 0;
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
            let _tmp$3 = 0;
            while (true) {
              const i = _tmp$3;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp$3 = i + 2 | 0;
                  continue;
                }
                _tmp$3 = i + 1 | 0;
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
  let _tmp$3 = self;
  while (true) {
    const x = _tmp$3;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$4 = x.str;
      const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$5;
      if (_bind$5 === undefined) {
        _tmp$5 = x.end;
      } else {
        const _Some = _bind$5;
        _tmp$5 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$4, _tmp$5, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$3 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp$3 = self;
  while (true) {
    const x = _tmp$3;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$3 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$5 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$5 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$5;
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
    const _bind$5 = _M0MPB4Iter4nextGsE(self);
    if (_bind$5 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$5;
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
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$5 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$3 = 0;
    let _tmp$4 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$3;
      const size_hint$2 = _tmp$4;
      if (_ < _bind$5) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$3 = _ + 1 | 0;
        const _bind$6 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$4 = (size_hint$2 + (_bind$6.end - _bind$6.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$6 = _x_end - _x_start | 0;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$6) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$5 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$6 = _x_end - _x_start | 0;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$6) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$5 = _ + 1 | 0;
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
    const _bind$5 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$3 = 0;
    let _tmp$4 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$3;
      const size_hint$2 = _tmp$4;
      if (_ < _bind$5) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$3 = _ + 1 | 0;
        const _bind$6 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$4 = (size_hint$2 + (_bind$6.end - _bind$6.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$6 = _x_end - _x_start | 0;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$6) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$5 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$6 = _x_end - _x_start | 0;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$6) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$5 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16option6Option6unwrapGiE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGRP45lumen7tsumugi5algos7spatial4AabbE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
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
  const _bind$5 = capacity$2 - 1 | 0;
  const _bind$6 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$7 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$8 = undefined;
  return new _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$7, 0, capacity$2, _bind$5, _bind$6, _bind$8, -1);
}
function _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$5 = capacity$2 - 1 | 0;
  const _bind$6 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$7 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$8 = undefined;
  return new _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(_bind$7, 0, capacity$2, _bind$5, _bind$6, _bind$8, -1);
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
  const _bind$5 = self.tail;
  if (_bind$5 === -1) {
    self.head = entry;
  } else {
    const _tmp$3 = self.entries;
    _M0MPC16option6Option6unwrapGRP45lumen7tsumugi5algos7spatial4AabbE(_bind$5 >>> 0 < _tmp$3.length ? _tmp$3[_bind$5] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  const _bind$5 = self.tail;
  if (_bind$5 === -1) {
    self.head = entry;
  } else {
    const _tmp$3 = self.entries;
    _M0MPC16option6Option6unwrapGRP45lumen7tsumugi5algos7spatial4AabbE(_bind$5 >>> 0 < _tmp$3.length ? _tmp$3[_bind$5] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry, new_idx) {
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry, new_idx) {
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  let _tmp$3 = entry.psl + 1 | 0;
  let _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$5 = entry;
  while (true) {
    const psl = _tmp$3;
    const idx$2 = _tmp$4;
    const entry$2 = _tmp$5;
    const _bind$5 = self.entries[idx$2];
    if (_bind$5 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$5;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
        _tmp$3 = _curr_entry.psl + 1 | 0;
        _tmp$4 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$5 = _curr_entry;
        continue;
      } else {
        _tmp$3 = psl + 1 | 0;
        _tmp$4 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  let _tmp$3 = entry.psl + 1 | 0;
  let _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$5 = entry;
  while (true) {
    const psl = _tmp$3;
    const idx$2 = _tmp$4;
    const entry$2 = _tmp$5;
    const _bind$5 = self.entries[idx$2];
    if (_bind$5 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$5;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
        _tmp$3 = _curr_entry.psl + 1 | 0;
        _tmp$4 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$5 = _curr_entry;
        continue;
      } else {
        _tmp$3 = psl + 1 | 0;
        _tmp$4 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, outer) {
  const hash = outer.hash;
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$5;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$3 = psl + 1 | 0;
        _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, outer) {
  const hash = outer.hash;
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$5;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$3 = psl + 1 | 0;
        _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
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
  let _tmp$3 = old_head;
  while (true) {
    const x = _tmp$3;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, _e);
      _tmp$3 = next_in_chain;
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
  let _tmp$3 = old_head;
  while (true) {
    const x = _tmp$3;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, _e);
      _tmp$3 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, hash) {
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$3 = 0;
        _tmp$4 = hash & self.capacity_mask;
        continue;
      }
      const _bind$6 = self.tail;
      const _bind$7 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$6, _bind$7, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$5;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$3 = 0;
          _tmp$4 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$6 = self.tail;
        const _bind$7 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$6, _bind$7, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$3 = psl + 1 | 0;
      _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, hash) {
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
        _tmp$3 = 0;
        _tmp$4 = hash & self.capacity_mask;
        continue;
      }
      const _bind$6 = self.tail;
      const _bind$7 = undefined;
      const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$6, _bind$7, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$5;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
          _tmp$3 = 0;
          _tmp$4 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr_entry);
        const _bind$6 = self.tail;
        const _bind$7 = undefined;
        const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$6, _bind$7, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
        return undefined;
      }
      _tmp$3 = psl + 1 | 0;
      _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
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
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(m, e._0, e._1);
      _tmp$3 = _ + 1 | 0;
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
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(m, e._0, e._1);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$5;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$3 = i + 1 | 0;
      _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$3 = 0;
  let _tmp$4 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$3;
    const idx = _tmp$4;
    const _bind$5 = self.entries[idx];
    if (_bind$5 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$5;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$3 = i + 1 | 0;
      _tmp$4 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$3 = i + 1 | 0;
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
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$3 = i + 1 | 0;
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
function _M0MPC16double6Double4ceil(_tmp$3) {
  return Math.ceil(_tmp$3);
}
function _M0MPC16double6Double5floor(_tmp$3) {
  return Math.floor(_tmp$3);
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
  const _bind$5 = self;
  return new _M0TPB9ArrayViewGRPC15debug4ReprE(_bind$5, lo, lo + count | 0);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP45lumen7tsumugi5algos7spatial4AabbE(self, new_len) {
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
function _M0MPC15array5Array9is__emptyGiE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGRP45lumen7tsumugi5algos7spatial4AabbE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (_M0MPC15array5Array9is__emptyGiE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGRP45lumen7tsumugi5algos7spatial4AabbE(self) {
  if (_M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRP45lumen7tsumugi5algos7spatial4AabbE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEuE(self, index) {
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
  const _bind$5 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$5)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGiE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGOdE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
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
function _M0MPC15array5Array3setGbE(self, index, value) {
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
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$3 = len;
  let _tmp$4 = 0;
  while (true) {
    const len$2 = _tmp$3;
    const limit = _tmp$4;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = len$2 / 2 | 0;
      _tmp$4 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGiE(arr) {
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      let _tmp$4 = i;
      while (true) {
        const j = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
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
  let _tmp$3 = index;
  let _tmp$4 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$3;
    const child = _tmp$4;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$3 = child$2;
      _tmp$4 = (Math.imul(child$2, 2) | 0) + 1 | 0;
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
  const _bind$5 = len / 2 | 0;
  let _tmp$3 = _bind$5 - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGiE(arr, i);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = len - 1 | 0;
  while (true) {
    const i = _tmp$4;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB17fixed__sift__downGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$4 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGiE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$5 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  let _tmp$5 = true;
  while (true) {
    const j = _tmp$3;
    const i = _tmp$4;
    const partitioned = _tmp$5;
    if (j < _bind$5) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$3 = j + 1 | 0;
          _tmp$4 = i + 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          _tmp$3 = j + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$3 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGiE(arr) {
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 1;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$3;
    const tries = _tmp$4;
    if (i < _bind$5) {
      let sorted;
      let _tmp$5 = i;
      let _tmp$6 = true;
      while (true) {
        const j = _tmp$5;
        const sorted$2 = _tmp$6;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$5 = j - 1 | 0;
          _tmp$6 = false;
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
        _tmp$3 = i + 1 | 0;
        _tmp$4 = tries$2;
        continue;
      } else {
        _tmp$3 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGiE(arr, pred, limit) {
  let _tmp$3 = limit;
  let _tmp$4 = arr;
  let _tmp$5 = pred;
  let _tmp$6 = true;
  let _tmp$7 = true;
  while (true) {
    const limit$2 = _tmp$3;
    const arr$2 = _tmp$4;
    const pred$2 = _tmp$5;
    const was_partitioned = _tmp$6;
    const balanced = _tmp$7;
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
    const _bind$5 = _M0FPB20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind$5._0;
    const _likely_sorted = _bind$5._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$6 = _M0FPB16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$6._0;
    const _partitioned = _bind$6._1;
    const _tmp$8 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$8 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$9 = _pivot;
        while (true) {
          const i$2 = _tmp$9;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$9 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$3 = limit$3;
        _tmp$4 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$6 = _partitioned;
        _tmp$7 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGiE(left, pred$2, limit$3);
      _tmp$3 = limit$3;
      _tmp$4 = right;
      _tmp$5 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$6 = _partitioned;
      _tmp$7 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGiE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$3 = limit$3;
      _tmp$4 = left;
      _tmp$6 = _partitioned;
      _tmp$7 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGiE(self) {
  _M0FPB18fixed__quick__sortGiE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0FPB23fixed__bubble__sort__byGiE(arr, cmp) {
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$5) {
      let _tmp$4 = i;
      while (true) {
        const j = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGiE(arr, cmp) {
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
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGiE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$3 = index;
  let _tmp$4 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$3;
    const child = _tmp$4;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$3 = child$2;
      _tmp$4 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGiE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$5 = len / 2 | 0;
  let _tmp$3 = _bind$5 - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGiE(arr, i, cmp);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = len - 1 | 0;
  while (true) {
    const i = _tmp$4;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0, cmp);
      _tmp$4 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGiE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$5 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  let _tmp$5 = true;
  while (true) {
    const j = _tmp$3;
    const i = _tmp$4;
    const partitioned = _tmp$5;
    if (j < _bind$5) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$3 = j + 1 | 0;
          _tmp$4 = i + 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          _tmp$3 = j + 1 | 0;
          _tmp$4 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$3 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGiE(arr, cmp) {
  const _bind$5 = arr.end - arr.start | 0;
  let _tmp$3 = 1;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$3;
    const tries = _tmp$4;
    if (i < _bind$5) {
      let sorted;
      let _tmp$5 = i;
      let _tmp$6 = true;
      while (true) {
        const j = _tmp$5;
        const sorted$2 = _tmp$6;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$5 = j - 1 | 0;
          _tmp$6 = false;
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
        _tmp$3 = i + 1 | 0;
        _tmp$4 = tries$2;
        continue;
      } else {
        _tmp$3 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGiE(arr, cmp, pred, limit) {
  let _tmp$3 = limit;
  let _tmp$4 = arr;
  let _tmp$5 = pred;
  let _tmp$6 = true;
  let _tmp$7 = true;
  while (true) {
    const limit$2 = _tmp$3;
    const arr$2 = _tmp$4;
    const pred$2 = _tmp$5;
    const was_partitioned = _tmp$6;
    const balanced = _tmp$7;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGiE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGiE(arr$2, cmp);
      return undefined;
    }
    const _bind$5 = _M0FPB24fixed__choose__pivot__byGiE(arr$2, cmp);
    const _pivot_index = _bind$5._0;
    const _likely_sorted = _bind$5._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGiE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$6 = _M0FPB20fixed__partition__byGiE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$6._0;
    const _partitioned = _bind$6._1;
    const _tmp$8 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$8 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$9 = _pivot;
        while (true) {
          const i$2 = _tmp$9;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$9 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$3 = limit$3;
        _tmp$4 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$6 = _partitioned;
        _tmp$7 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGiE(left, cmp, pred$2, limit$3);
      _tmp$3 = limit$3;
      _tmp$4 = right;
      _tmp$5 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$6 = _partitioned;
      _tmp$7 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGiE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$3 = limit$3;
      _tmp$4 = left;
      _tmp$6 = _partitioned;
      _tmp$7 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView13sort__by__keyGiiE(self, map) {
  _M0FPB22fixed__quick__sort__byGiE(self, (a, b) => $compare_int(map(a), map(b)), undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  const _bind$5 = self.length;
  _M0MPC15array12MutArrayView4sortGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$5));
}
function _M0MPC15array5Array13sort__by__keyGiiE(self, map) {
  const _bind$5 = self.length;
  _M0MPC15array12MutArrayView13sort__by__keyGiiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$5), map);
}
function _M0MPC15array5Array4makeGmE(len, elem) {
  const arr = new Array(len);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < len) {
      arr[i] = elem;
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
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
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(self, f) {
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp$3 = _ + 1 | 0;
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
function _M0MPC15array5Array5clearGRP45lumen7tsumugi5algos7spatial4AabbE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP45lumen7tsumugi5algos7spatial4AabbE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$5 = self.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(arr, v);
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$5 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$5 === undefined) {
  } else {
    const _Some = _bind$5;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$6 = _M0MPB4Iter4nextGsE(iter);
    if (_bind$6 === undefined) {
      return;
    } else {
      const _Some = _bind$6;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self, _x);
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
function _M0MPC15debug4Repr4ReprGRP45lumen7tsumugi5algos7spatial4AabbE(value) {
  return _M0IP45lumen7tsumugi5algos7spatial4AabbPC15debug5Debug8to__repr(value);
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
function _M0MPC15debug4Repr7literal(value) {
  return new _M0DTPC15debug4Repr7Literal(value);
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
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, `${_last}${finish}`);
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
  const _bind$5 = middle.end - middle.start | 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const m = middle.buf[middle.start + _ | 0];
      const t = _M0MPC16string6String4trim(m, undefined);
      if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1131, 0, _M0FPC15debug15compact__middleN7_2abindS1131.length))) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(parts, t);
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1139, 0, _M0FPC15debug15compact__middleN7_2abindS1139.length));
  const _bind$6 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1133, 0, _M0FPC15debug15compact__middleN7_2abindS1133.length));
  if (_bind$6 === undefined) {
    return new _M0TPC16string10StringView(joined0, 0, joined0.length);
  } else {
    const _Some = _bind$6;
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
      const _bind$5 = lines.length - 1 | 0;
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, _bind$5);
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const joined = _M0FPC15debug15compact__middle(_x);
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1143, 0, _M0FPC15debug14compact__linesN7_2abindS1143.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1142, 0, _M0FPC15debug14compact__linesN7_2abindS1142.length)), s1);
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
          const _bind$6 = _bind$5 - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$6) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(parts, _M0MPC16string6String4trim(_last, undefined));
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
        if (!_M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGOdE(lines, last_i, `${_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, close);
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
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$5 = contents.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$6 = _x_end - 1 | 0;
              let _tmp$4 = 0;
              while (true) {
                const _$2 = _tmp$4;
                if (_$2 < _bind$6) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$4 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, close);
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
            const _bind$5 = _x_end - 1 | 0;
            let _tmp$3 = 0;
            while (true) {
              const _ = _tmp$3;
              if (_ < _bind$5) {
                const item = contents[1 + _ | 0];
                const _bind$6 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$6, 0, _bind$6.length));
                _tmp$3 = _ + 1 | 0;
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
                _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$5 = contents.length;
            let _tmp$3 = 0;
            while (true) {
              const _ = _tmp$3;
              if (_ < _bind$5) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$6 = _x_end - 1 | 0;
                    let _tmp$4 = 0;
                    while (true) {
                      const _$2 = _tmp$4;
                      if (_$2 < _bind$6) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$4 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp$3 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$5 = contents.length;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$3;
    const size = _tmp$4;
    if (_ < _bind$5) {
      const c = contents[_];
      _tmp$3 = _ + 1 | 0;
      _tmp$4 = size + c.size | 0;
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
  let _tmp$3;
  switch (info.$tag) {
    case 12: {
      _tmp$3 = true;
      break;
    }
    case 13: {
      _tmp$3 = true;
      break;
    }
    case 16: {
      _tmp$3 = true;
      break;
    }
    default: {
      _tmp$3 = false;
    }
  }
  return !_tmp$3;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(children)) {
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
      let _tmp$3;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp$3 = 1;
        } else {
          _tmp$3 = 0;
        }
      } else {
        _tmp$3 = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$3, [_s]));
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
      if (_M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(children)) {
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
        const _bind$5 = v.lines;
        if (_bind$5.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$5.length === 1) {
            const _one = _bind$5[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$5[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$5, 1, _bind$5.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$4 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$4, _self));
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
        const _bind$5 = _val.lines;
        if (_bind$5.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$5.length === 1) {
            const _first = _bind$5[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$5[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$5, 1, _bind$5.length);
            const _tmp$4 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$4, _self));
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
        const _bind$5 = v.lines;
        if (_bind$5.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$5.length === 1) {
            const _one = _bind$5[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$5[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$5, 1, _bind$5.length);
            const _tmp$4 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$4, _self));
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
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < min_len) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(children, _M0FPC15debug16diff__info__withN2goS142(max_relative_error, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(xs, i), _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(ys, i)));
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$5 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(xs, min_len, undefined);
    const _bind$6 = _bind$5.end - _bind$5.start | 0;
    let _tmp$4 = 0;
    while (true) {
      const _ = _tmp$4;
      if (_ < _bind$6) {
        const t = _bind$5.buf[_bind$5.start + _ | 0];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(children, new _M0DTPC15debug9ReprDelta6Extra1(t));
        _tmp$4 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$7 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(ys, min_len, undefined);
    const _bind$8 = _bind$7.end - _bind$7.start | 0;
    let _tmp$5 = 0;
    while (true) {
      const _ = _tmp$5;
      if (_ < _bind$8) {
        const t = _bind$7.buf[_bind$7.start + _ | 0];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(children, new _M0DTPC15debug9ReprDelta6Extra2(t));
        _tmp$5 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FPC15debug21info__is__unimportant(left_node) && (!_M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(children) && _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(children, (d) => {
      let _tmp$6;
      if (d.$tag === 0) {
        _tmp$6 = true;
      } else {
        _tmp$6 = false;
      }
      return !_tmp$6;
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
          return _M0MPC15array5Array9is__emptyGRP45lumen7tsumugi5algos7spatial4AabbE(_children) ? node : !_M0MPC15debug4Repr17info__adds__depth(_label) ? new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(d, child))) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
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
      let _tmp$3;
      if (children$2.length === 2) {
        const _left$2 = children$2[0];
        const _right$2 = children$2[1];
        _tmp$3 = _M0FPC15debug10no__parens(_M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_left$2)), _M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_right$2))));
      } else {
        _tmp$3 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$3);
    }
    case 2: {
      const _Extra1 = delta;
      const _x = _Extra1._0;
      const children$3 = [_M0MPC15debug4Repr12render__repr(_x, threshold)];
      let _tmp$4;
      if (children$3.length === 1) {
        const _x$2 = children$3[0];
        _tmp$4 = _M0FPC15debug10no__parens(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_x$2)));
      } else {
        _tmp$4 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$4);
    }
    default: {
      const _Extra2 = delta;
      const _x$2 = _Extra2._0;
      const children$4 = [_M0MPC15debug4Repr12render__repr(_x$2, threshold)];
      let _tmp$5;
      if (children$4.length === 1) {
        const _x$3 = children$4[0];
        _tmp$5 = _M0FPC15debug10no__parens(_M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_x$3)));
      } else {
        _tmp$5 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$5);
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
function _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRP45lumen7tsumugi5algos7spatial4AabbE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRP45lumen7tsumugi5algos7spatial4AabbE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRP45lumen7tsumugi5algos7spatial4AabbE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRP45lumen7tsumugi5algos7spatial4AabbE);
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
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0FPC14math3sin(_tmp$3) {
  return Math.sin(_tmp$3);
}
function _M0FPC14math3cos(_tmp$3) {
  return Math.cos(_tmp$3);
}
function _M0FPC14math3tan(_tmp$3) {
  return Math.tan(_tmp$3);
}
function _M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(_x_344, _x_345) {
  return _x_344.min_x === _x_345.min_x && _x_344.min_y === _x_345.min_y && _x_344.max_x === _x_345.max_x && _x_344.max_y === _x_345.max_y;
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
function _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty() {
  return new _M0TP45lumen7tsumugi5algos7spatial4Aabb(1e+308, 1e+308, -1e+308, -1e+308);
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(self) {
  return self.max_y - self.min_y;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(self) {
  return self.min_x > self.max_x || self.min_y > self.max_y;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(self, o) {
  return new _M0TP45lumen7tsumugi5algos7spatial4Aabb(self.min_x < o.min_x ? self.min_x : o.min_x, self.min_y < o.min_y ? self.min_y : o.min_y, self.max_x > o.max_x ? self.max_x : o.max_x, self.max_y > o.max_y ? self.max_y : o.max_y);
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb5width(self) {
  return self.max_x - self.min_x;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb11to__display(self) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, self.min_x);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, self.min_y);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, self.max_x);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, self.max_y);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
  return _M0MPB13StringBuilder10to__string(_string_builder);
}
function _M0IP45lumen7tsumugi5algos7spatial4AabbPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7literal(_M0MP45lumen7tsumugi5algos7spatial4Aabb11to__display(self));
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(self, o) {
  const min_x = _M0MPC16double6Double3max(self.min_x, o.min_x);
  const min_y = _M0MPC16double6Double3max(self.min_y, o.min_y);
  const max_x = _M0MPC16double6Double3min(self.max_x, o.max_x);
  const max_y = _M0MPC16double6Double3min(self.max_y, o.max_y);
  return min_x > max_x || min_y > max_y ? _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty() : new _M0TP45lumen7tsumugi5algos7spatial4Aabb(min_x, min_y, max_x, max_y);
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(self, x, y) {
  return x >= self.min_x && (x <= self.max_x && (y >= self.min_y && y <= self.max_y));
}
function _M0IP45lumen7tsumugi4core4math6Mat2x3PB2Eq5equal(_x_343, _x_344) {
  return _x_343.a === _x_344.a && _x_343.b === _x_344.b && _x_343.c === _x_344.c && _x_343.d === _x_344.d && _x_343.e === _x_344.e && _x_343.f === _x_344.f;
}
function _M0MP45lumen7tsumugi4core4math4Vec23new(x, y) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(x, y);
}
function _M0MP45lumen7tsumugi4core4math4Vec24zero() {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(0, 0);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x38identity() {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(1, 0, 0, 1, 0, 0);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x33new(a, b, c, d, e, f) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(a, b, c, d, e, f);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x39translate(tx, ty) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(1, 0, 0, 1, tx, ty);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x35scale(sx, sy) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(sx, 0, 0, sy, 0, 0);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(rad) {
  const c = _M0FPC14math3cos(rad);
  const s = _M0FPC14math3sin(rad);
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(c, s, -s, c, 0, 0);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x34skew(kx, ky) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(1, _M0FPC14math3tan(ky), _M0FPC14math3tan(kx), 1, 0, 0);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x37compose(self, other) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(self.a * other.a + self.c * other.b, self.b * other.a + self.d * other.b, self.a * other.c + self.c * other.d, self.b * other.c + self.d * other.d, self.a * other.e + self.c * other.f + self.e, self.b * other.e + self.d * other.f + self.f);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x35apply(self, p) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(self.a * p.x + self.c * p.y + self.e, self.b * p.x + self.d * p.y + self.f);
}
function _M0FP45lumen7tsumugi4core4base11utf8__bytes(s) {
  const u = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s, 0, s.length), false);
  const buf = $makebytes(u.length, 0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < u.length) {
      if (i >>> 0 < buf.length) {
        buf[i] = i >>> 0 < u.length ? u[i] : $oob();
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf;
}
function _M0FP45lumen7tsumugi4core4base8put__u16(buf, off, v) {
  if (off >>> 0 < buf.length) {
    buf[off] = _M0MPC14uint4UInt8to__byte(v & 255);
  } else {
    $oob();
  }
  const _tmp$3 = off + 1 | 0;
  if (_tmp$3 >>> 0 < buf.length) {
    buf[_tmp$3] = _M0MPC14uint4UInt8to__byte(v >> 8 & 255);
  } else {
    $oob();
  }
}
function _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, off, v) {
  if (off >>> 0 < buf.length) {
    buf[off] = _M0MPC14uint4UInt8to__byte(v & 255);
  } else {
    $oob();
  }
  const _tmp$3 = off + 1 | 0;
  if (_tmp$3 >>> 0 < buf.length) {
    buf[_tmp$3] = _M0MPC14uint4UInt8to__byte(v >> 8 & 255);
  } else {
    $oob();
  }
  const _tmp$4 = off + 2 | 0;
  if (_tmp$4 >>> 0 < buf.length) {
    buf[_tmp$4] = _M0MPC14uint4UInt8to__byte(v >> 16 & 255);
  } else {
    $oob();
  }
  const _tmp$5 = off + 3 | 0;
  if (_tmp$5 >>> 0 < buf.length) {
    buf[_tmp$5] = _M0MPC14uint4UInt8to__byte(v >> 24 & 255);
  } else {
    $oob();
  }
}
function _M0FP45lumen7tsumugi4core4base8put__u64(buf, off, v) {
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 8) {
      const _tmp$4 = off + i | 0;
      if (_tmp$4 >>> 0 < buf.length) {
        buf[_tmp$4] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, v) >> BigInt((Math.imul(i, 8) | 0) & 63)) & 255n));
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP45lumen7tsumugi4core4base8get__u16(buf, off) {
  const _tmp$3 = off >>> 0 < buf.length ? buf[off] : $oob();
  const _tmp$4 = off + 1 | 0;
  return _tmp$3 | (_tmp$4 >>> 0 < buf.length ? buf[_tmp$4] : $oob()) << 8;
}
function _M0FP45lumen7tsumugi4core4base12get__u32__le(buf, off) {
  const _tmp$3 = off >>> 0 < buf.length ? buf[off] : $oob();
  const _tmp$4 = off + 1 | 0;
  const _tmp$5 = _tmp$3 | (_tmp$4 >>> 0 < buf.length ? buf[_tmp$4] : $oob()) << 8;
  const _tmp$6 = off + 2 | 0;
  const _tmp$7 = _tmp$5 | (_tmp$6 >>> 0 < buf.length ? buf[_tmp$6] : $oob()) << 16;
  const _tmp$8 = off + 3 | 0;
  return _tmp$7 | (_tmp$8 >>> 0 < buf.length ? buf[_tmp$8] : $oob()) << 24;
}
function _M0FP45lumen7tsumugi4core4base8get__u64(buf, off) {
  const v = new _M0TPB8MutLocalGmE(0n);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 8) {
      const _tmp$4 = v.val;
      const _tmp$5 = off + i | 0;
      v.val = BigInt.asUintN(64, _tmp$4 | BigInt.asUintN(64, _M0MPC14uint4UInt10to__uint64(_tmp$5 >>> 0 < buf.length ? buf[_tmp$5] : $oob()) << BigInt((Math.imul(i, 8) | 0) & 63)));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return v.val;
}
function _M0FP45lumen7tsumugi4core4base8get__f64(buf, off) {
  return $i64_reinterpret_f64(_M0FP45lumen7tsumugi4core4base8get__u64(buf, off));
}
function _M0MP45lumen7tsumugi4core4base5Crc323new() {
  const table = $make_array_len_and_init(256, 0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 256) {
      const c = new _M0TPB8MutLocalGjE(i);
      let _tmp$4 = 0;
      while (true) {
        const _k = _tmp$4;
        if (_k < 8) {
          c.val = (c.val & 1) !== 0 ? (c.val >>> 1 | 0) ^ -306674912 : c.val >>> 1 | 0;
          _tmp$4 = _k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i >>> 0 < table.length) {
        table[i] = c.val;
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP45lumen7tsumugi4core4base5Crc32(table);
}
function _M0MP45lumen7tsumugi4core4base5Crc326update(self, buf, off, len, seed) {
  const c = new _M0TPB8MutLocalGjE(seed);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < len) {
      const _tmp$4 = off + i | 0;
      const b = (_tmp$4 >>> 0 < buf.length ? buf[_tmp$4] : $oob()) & 255;
      const _tmp$5 = c.val >>> 8 | 0;
      const _tmp$6 = self.table;
      const _tmp$7 = (c.val ^ b) & 255;
      c.val = _tmp$5 ^ (_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob());
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return c.val;
}
function _M0MP45lumen7tsumugi4core4base5Crc322of(self, buf, off, len) {
  return _M0MP45lumen7tsumugi4core4base5Crc326update(self, buf, off, len, -1) ^ -1;
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
    const _tmp$3 = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$4 = i / 64 | 0;
    const _tmp$5 = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$6 = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(_tmp$5, i / 64 | 0);
    if (64 === 0) {
      $panic();
    }
    _M0MPC15array5Array3setGOdE(_tmp$3, _tmp$4, BigInt.asUintN(64, _tmp$6 | BigInt.asUintN(64, 1n << BigInt((i % 64 | 0) & 63))));
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi4core4base6BitSet3get(self, i) {
  if (i < 0 || i >= self.len) {
    return false;
  } else {
    const _tmp$3 = self.words;
    if (64 === 0) {
      $panic();
    }
    const _tmp$4 = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(_tmp$3, i / 64 | 0);
    if (64 === 0) {
      $panic();
    }
    return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, _tmp$4) >> BigInt((i % 64 | 0) & 63)) & 1n)) === BigInt.asUintN(64, 1n);
  }
}
function _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self) {
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.words.length) {
      _M0MPC15array5Array3setGOdE(self.words, i, 0n);
      _tmp$3 = i + 1 | 0;
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
  const _tmp$3 = xorshifted >>> rot | 0;
  if (32 === 0) {
    $panic();
  }
  return _tmp$3 | xorshifted << ((32 - rot | 0) % 32 | 0);
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
  const _tmp$3 = _M0MPC13int3Int10to__uint64(bound);
  if (_tmp$3 === 0n) {
    $panic();
  }
  const threshold = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, 4294967296n - _M0MPC13int3Int10to__uint64(bound))) % BigInt.asUintN(64, _tmp$3));
  const r = new _M0TPB8MutLocalGmE(_M0MPC14uint4UInt10to__uint64(_M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self)));
  while (true) {
    if (BigInt.asUintN(64, r.val) < BigInt.asUintN(64, threshold)) {
      r.val = _M0MPC14uint4UInt10to__uint64(_M0MP45lumen7tsumugi4core3num5Pcg329next__u32(self));
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = _M0MPC13int3Int10to__uint64(bound);
  if (_tmp$4 === 0n) {
    $panic();
  }
  return Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, r.val) % BigInt.asUintN(64, _tmp$4)))) | 0;
}
function _M0MP45lumen7tsumugi4core3num5Pcg325range(self, lo, hi) {
  return lo + (hi - lo) * _M0MP45lumen7tsumugi4core3num5Pcg3212next__double(self);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph3newGdE() {
  return new _M0TP45lumen7tsumugi8reactive6signal5GraphGdE([], [], [], [], [], [], [], [], [0], [], [], false, [], [], [], [], [], [], [], 0, [], [], [], 0, 0, 0, 0, false);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph4pushGdE(self, k, lvl, v, c, e) {
  const i = self.n;
  _M0MPC15array5Array4pushGiE(self.kind, k);
  _M0MPC15array5Array4pushGiE(self.state, k === 0 ? 0 : 2);
  _M0MPC15array5Array4pushGiE(self.level, lvl);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.values, v);
  _M0MPC15array5Array4pushGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEdE(self.compute, c);
  _M0MPC15array5Array4pushGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEdE(self.effect, e);
  _M0MPC15array5Array4pushGiE(self.changed_at, 0);
  _M0MPC15array5Array4pushGiE(self.validated_at, -1);
  _M0MPC15array5Array4pushGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEdE(self.obs_lists, []);
  _M0MPC15array5Array4pushGbE(self.in_pending, false);
  _M0MPC15array5Array4pushGiE(self.visit, 0);
  _M0MPC15array5Array4pushGiE(self.dep_start, self.dep_items.length);
  self.n = i + 1 | 0;
  return i;
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph6sourceGdE(self, init) {
  return _M0MP45lumen7tsumugi8reactive6signal5Graph4pushGdE(self, 0, 0, new _M0DTPC16option6OptionGdE4Some(init), undefined, undefined);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph15enqueue__effectGdE(self, node) {
  if (_M0MPC15array5Array2atGiE(self.kind, node) === 2 && !_M0MPC15array5Array2atGbE(self.in_pending, node)) {
    _M0MPC15array5Array3setGbE(self.in_pending, node, true);
    _M0MPC15array5Array4pushGiE(self.pending, node);
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(self, i) {
  return _M0MPC15array5Array2atGiE(self.changed_at, i);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph15mark__observersGdE(self, from) {
  _M0MPC15array5Array5clearGiE(self.worklist);
  const k = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGiE(self.obs_start, from));
  while (true) {
    if (k.val < _M0MPC15array5Array2atGiE(self.obs_start, from + 1 | 0)) {
      const o = _M0MPC15array5Array2atGiE(self.obs_items, k.val);
      if (_M0MPC15array5Array2atGiE(self.state, o) === 0) {
        _M0MPC15array5Array3setGiE(self.state, o, 1);
        _M0MPC15array5Array4pushGiE(self.worklist, o);
        _M0MP45lumen7tsumugi8reactive6signal5Graph15enqueue__effectGdE(self, o);
      }
      k.val = k.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (self.worklist.length > 0) {
      const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(self.worklist));
      const k2 = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGiE(self.obs_start, node));
      while (true) {
        if (k2.val < _M0MPC15array5Array2atGiE(self.obs_start, node + 1 | 0)) {
          const o = _M0MPC15array5Array2atGiE(self.obs_items, k2.val);
          if (_M0MPC15array5Array2atGiE(self.state, o) === 0) {
            _M0MPC15array5Array3setGiE(self.state, o, 1);
            _M0MPC15array5Array4pushGiE(self.worklist, o);
            _M0MP45lumen7tsumugi8reactive6signal5Graph15enqueue__effectGdE(self, o);
          }
          k2.val = k2.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(self, i, v) {
  if (_M0MPC15array5Array2atGiE(self.kind, i) !== 0) {
    return 2;
  }
  let old;
  _L: {
    _L$2: {
      const _bind$5 = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.values, i);
      if (_bind$5.$tag === 1) {
        const _Some = _bind$5;
        const _old = _Some._0;
        old = _old;
        break _L$2;
      }
      break _L;
    }
    if (old === v) {
      return 1;
    }
  }
  _M0MPC15array5Array3setGOdE(self.values, i, new _M0DTPC16option6OptionGdE4Some(v));
  self.version = self.version + 1 | 0;
  _M0MPC15array5Array3setGiE(self.changed_at, i, self.version);
  _M0MPC15array5Array3setGiE(self.state, i, 0);
  if (self.frozen) {
    _M0MP45lumen7tsumugi8reactive6signal5Graph15mark__observersGdE(self, i);
  }
  return 0;
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph9recomputeGdE(self, n) {
  const reader = new _M0TP45lumen7tsumugi8reactive6signal6ReaderGdE(self.values, self.dep_items, _M0MPC15array5Array2atGiE(self.dep_start, n), _M0MPC15array5Array2atGiE(self.dep_start, n + 1 | 0) - _M0MPC15array5Array2atGiE(self.dep_start, n) | 0);
  if (_M0MPC15array5Array2atGiE(self.kind, n) === 2) {
    _M0MPC15array5Array3setGiE(self.validated_at, n, self.version);
    _M0MPC15array5Array3setGiE(self.state, n, 0);
    self.effect_count = self.effect_count + 1 | 0;
    let f;
    _L: {
      _L$2: {
        const _bind$5 = _M0MPC15array5Array2atGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEuE(self.effect, n);
        if (_bind$5 === undefined) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "reactive: effect ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has no body");
          _M0FPC15abort5abortGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        } else {
          const _Some = _bind$5;
          const _f = _Some;
          f = _f;
          break _L$2;
        }
        break _L;
      }
      f(reader);
    }
    return undefined;
  }
  let f;
  _L: {
    const _bind$5 = _M0MPC15array5Array2atGOWRP45lumen7tsumugi8reactive6signal6ReaderGdEEuE(self.compute, n);
    if (_bind$5 === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "reactive: computed ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has no body");
      _M0FPC15abort5abortGuE(_M0MPB13StringBuilder10to__string(_string_builder));
      return;
    } else {
      const _Some = _bind$5;
      const _f = _Some;
      f = _f;
      break _L;
    }
  }
  const next = f(reader);
  self.compute_count = self.compute_count + 1 | 0;
  const did_change = new _M0TPB8MutLocalGbE(true);
  let old;
  _L$2: {
    _L$3: {
      const _bind$5 = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.values, n);
      if (_bind$5.$tag === 1) {
        const _Some = _bind$5;
        const _old = _Some._0;
        old = _old;
        break _L$3;
      }
      break _L$2;
    }
    if (old === next) {
      did_change.val = false;
    }
  }
  if (did_change.val) {
    _M0MPC15array5Array3setGOdE(self.values, n, new _M0DTPC16option6OptionGdE4Some(next));
    self.version = self.version + 1 | 0;
    _M0MPC15array5Array3setGiE(self.changed_at, n, self.version);
  }
  _M0MPC15array5Array3setGiE(self.validated_at, n, self.version);
  _M0MPC15array5Array3setGiE(self.state, n, 0);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph6settleGdE(self, n) {
  if (_M0MPC15array5Array2atGiE(self.state, n) === 0) {
    return undefined;
  }
  if (_M0MPC15array5Array2atGiE(self.kind, n) === 0) {
    _M0MPC15array5Array3setGiE(self.state, n, 0);
    return undefined;
  }
  if (_M0MPC15array5Array2atGiE(self.state, n) === 2) {
    _M0MP45lumen7tsumugi8reactive6signal5Graph9recomputeGdE(self, n);
    return undefined;
  }
  const changed = new _M0TPB8MutLocalGbE(false);
  let _tmp$3 = _M0MPC15array5Array2atGiE(self.dep_start, n);
  while (true) {
    const k = _tmp$3;
    if (k < _M0MPC15array5Array2atGiE(self.dep_start, n + 1 | 0)) {
      if (_M0MPC15array5Array2atGiE(self.changed_at, _M0MPC15array5Array2atGiE(self.dep_items, k)) > _M0MPC15array5Array2atGiE(self.validated_at, n)) {
        changed.val = true;
      }
      _tmp$3 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (changed.val) {
    _M0MP45lumen7tsumugi8reactive6signal5Graph9recomputeGdE(self, n);
    return;
  } else {
    _M0MPC15array5Array3setGiE(self.state, n, 0);
    _M0MPC15array5Array3setGiE(self.validated_at, n, self.version);
    return;
  }
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph6ensureGdE(self, target) {
  if (_M0MPC15array5Array2atGiE(self.state, target) === 0) {
    return undefined;
  }
  if (_M0MPC15array5Array2atGiE(self.kind, target) === 0) {
    _M0MPC15array5Array3setGiE(self.state, target, 0);
    return undefined;
  }
  self.query_id = self.query_id + 1 | 0;
  const qid = self.query_id;
  const post = self.post;
  _M0MPC15array5Array5clearGiE(post);
  const stack = self.stack;
  _M0MPC15array5Array5clearGiE(stack);
  const cursors = self.stack_i;
  _M0MPC15array5Array5clearGiE(cursors);
  _M0MPC15array5Array3setGiE(self.visit, target, qid);
  _M0MPC15array5Array4pushGiE(stack, target);
  _M0MPC15array5Array4pushGiE(cursors, 0);
  while (true) {
    if (stack.length > 0) {
      const top = stack.length - 1 | 0;
      const n = _M0MPC15array5Array2atGiE(stack, top);
      const i = _M0MPC15array5Array2atGiE(cursors, top);
      const s0 = _M0MPC15array5Array2atGiE(self.dep_start, n);
      const e0 = _M0MPC15array5Array2atGiE(self.dep_start, n + 1 | 0);
      if ((s0 + i | 0) < e0) {
        const d = _M0MPC15array5Array2atGiE(self.dep_items, s0 + i | 0);
        _M0MPC15array5Array3setGiE(cursors, top, i + 1 | 0);
        if (_M0MPC15array5Array2atGiE(self.visit, d) !== qid) {
          _M0MPC15array5Array3setGiE(self.visit, d, qid);
          if (_M0MPC15array5Array2atGiE(self.state, d) !== 0) {
            _M0MPC15array5Array4pushGiE(stack, d);
            _M0MPC15array5Array4pushGiE(cursors, 0);
          }
        }
      } else {
        _M0MPC15array5Array3popGiE(stack);
        _M0MPC15array5Array3popGiE(cursors);
        _M0MPC15array5Array4pushGiE(post, n);
      }
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = post.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const n = post[_];
      _M0MP45lumen7tsumugi8reactive6signal5Graph6settleGdE(self, n);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph3getGdE(self, i) {
  _M0MP45lumen7tsumugi8reactive6signal5Graph6ensureGdE(self, i);
  const _bind$5 = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.values, i);
  if (_bind$5.$tag === 1) {
    const _Some = _bind$5;
    const _v = _Some._0;
    return _v;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "reactive: node ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has no value (effects have none)");
    return _M0FPC15abort5abortGdE(_M0MPB13StringBuilder10to__string(_string_builder));
  }
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph4peekGdE(self, i) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.values, i);
}
function _M0MP45lumen7tsumugi8reactive6signal5Graph5flushGdE(self, max_passes) {
  let cap;
  let m;
  _L: {
    _L$2: {
      if (max_passes === undefined) {
        cap = 64;
      } else {
        const _Some = max_passes;
        const _m = _Some;
        m = _m;
        break _L$2;
      }
      break _L;
    }
    cap = _M0MPC13int3Int3max(1, m);
  }
  self.compute_count = 0;
  self.effect_count = 0;
  self.overflow = false;
  const passes = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (self.pending.length > 0 && passes.val < cap) {
      const tmp = self.batch;
      self.batch = self.pending;
      self.pending = tmp;
      _M0MPC15array5Array5clearGiE(self.pending);
      const _bind$5 = self.batch;
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$6) {
          const e = _bind$5[_];
          _M0MPC15array5Array3setGbE(self.in_pending, e, false);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array13sort__by__keyGiiE(self.batch, (i) => _M0MPC15array5Array2atGiE(self.level, i));
      const _bind$7 = self.batch;
      const _bind$8 = _bind$7.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$8) {
          const e = _bind$7[_];
          _M0MP45lumen7tsumugi8reactive6signal5Graph6ensureGdE(self, e);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array5clearGiE(self.batch);
      passes.val = passes.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.pending.length > 0) {
    self.overflow = true;
  }
  return new _M0TP45lumen7tsumugi8reactive6signal11FlushReport(passes.val, self.effect_count, self.compute_count, self.overflow);
}
function _M0MP45lumen7tsumugi8reactive5scene3Trs3new(x, y, rot, sx, sy) {
  return new _M0TP45lumen7tsumugi8reactive5scene3Trs(x, y, rot, sx, sy);
}
function _M0MP45lumen7tsumugi8reactive5scene3Trs2at(x, y) {
  return new _M0TP45lumen7tsumugi8reactive5scene3Trs(x, y, 0, 1, 1);
}
function _M0MP45lumen7tsumugi8reactive5scene3Trs8identity() {
  return new _M0TP45lumen7tsumugi8reactive5scene3Trs(0, 0, 0, 1, 1);
}
function _M0MP45lumen7tsumugi8reactive5scene3Trs6matrix(self) {
  return _M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x39translate(self.x, self.y), _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(self.rot)), _M0MP45lumen7tsumugi4core4math6Mat2x35scale(self.sx, self.sy));
}
function _M0MP45lumen7tsumugi8reactive5scene3Trs5equal(self, o) {
  return self.x === o.x && (self.y === o.y && (self.rot === o.rot && (self.sx === o.sx && self.sy === o.sy)));
}
function _M0FP45lumen7tsumugi8reactive5scene11tile__count(extent, tile) {
  if (extent <= 0) {
    return 0;
  } else {
    const n = _M0MPC16double6Double7to__int(_M0MPC16double6Double4ceil(extent / (tile + 0)));
    return n < 0 ? 0 : n;
  }
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(vp, tile) {
  const t = tile < 1 ? 1 : tile;
  const cols = _M0FP45lumen7tsumugi8reactive5scene11tile__count(_M0MP45lumen7tsumugi5algos7spatial4Aabb5width(vp), t);
  const rows = _M0FP45lumen7tsumugi8reactive5scene11tile__count(_M0MP45lumen7tsumugi5algos7spatial4Aabb6height(vp), t);
  return new _M0TP45lumen7tsumugi8reactive5scene11DirtyRegion(vp, t, cols, rows, _M0MP45lumen7tsumugi4core4base6BitSet3new(Math.imul(cols, rows) | 0), 0, false, vp.max_x, vp.max_y, vp.min_x, vp.min_y, [], 16, false, 0);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene3new(vp, tile) {
  const s = new _M0TP45lumen7tsumugi8reactive5scene5Scene(vp, [], [], [], [], 1, [], [], [], _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(vp, tile), new _M0TP45lumen7tsumugi8reactive5scene10SceneStats(0, 0, 0, 0, 0, 0, 0));
  const root = new _M0TP45lumen7tsumugi8reactive5scene4Node(true, 0, -1, -1, -1, -1, -1, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs8identity(), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), 0, 1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), _M0MP45lumen7tsumugi4core4math6Mat2x38identity(), true, false, _M0MP45lumen7tsumugi4core4math6Mat2x38identity(), 0, 0, true, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), -1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), -1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(s.nodes, root);
  _M0MPC15array5Array4pushGiE(s.mark_stamp, 0);
  return s;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11node__count(self) {
  return self.nodes.length - self.free.length | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id) {
  return id >= 0 && (id < self.nodes.length && _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).alive);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene3gen(self, id) {
  return id < 0 || id >= self.nodes.length ? -1 : _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).gen;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).depth;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene10parent__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene12children__of(self, id) {
  const out = [];
  const c = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).first_child);
  while (true) {
    if (c.val !== -1) {
      _M0MPC15array5Array4pushGiE(out, c.val);
      c.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).next;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(self, id) {
  if (id === -1 || !_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  const cur = new _M0TPB8MutLocalGiE(id);
  while (true) {
    if (cur.val !== -1) {
      if ((_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).flags & 1) !== 0) {
        return false;
      }
      cur.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).parent;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(self, id) {
  return (_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags & 2) !== 0;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene7trs__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).trs;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene17local__bounds__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds_local;
}
function _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(b, m) {
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
    return _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty();
  }
  const cx = (b.min_x + b.max_x) * 0.5;
  const cy = (b.min_y + b.max_y) * 0.5;
  const ex = (b.max_x - b.min_x) * 0.5;
  const ey = (b.max_y - b.min_y) * 0.5;
  const ncx = m.a * cx + m.c * cy + m.e;
  const ncy = m.b * cx + m.d * cy + m.f;
  const nex = Math.abs(m.a) * ex + Math.abs(m.c) * ey;
  const ney = Math.abs(m.b) * ex + Math.abs(m.d) * ey;
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(ncx - nex, ncy - ney, ncx + nex, ncy + ney);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene13refresh__node(self, n) {
  const nd = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n);
  const local_changed = new _M0TPB8MutLocalGbE(false);
  if (!nd.mat_valid) {
    nd.mat = _M0MP45lumen7tsumugi8reactive5scene3Trs6matrix(nd.trs);
    nd.mat_valid = true;
    nd.placed_dirty = true;
    local_changed.val = true;
    self.stats.refreshed = self.stats.refreshed + 1 | 0;
  }
  const p = nd.parent;
  const parent_ver = p === -1 ? 0 : _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p).world_ver;
  if (local_changed.val || (!nd.world_valid || nd.world_base !== parent_ver)) {
    const w = p === -1 ? nd.mat : _M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p).world, nd.mat);
    self.stats.matmuls = self.stats.matmuls + 1 | 0;
    if (!_M0IP45lumen7tsumugi4core4math6Mat2x3PB2Eq5equal(w, nd.world)) {
      nd.world_ver = nd.world_ver + 1 | 0;
    }
    nd.world = w;
    nd.world_base = parent_ver;
    nd.world_valid = true;
    self.stats.refreshed = self.stats.refreshed + 1 | 0;
  }
  if (nd.bounds_ver !== nd.world_ver) {
    nd.bounds = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(nd.bounds_local, nd.world);
    nd.bounds_ver = nd.world_ver;
  }
  if (nd.clip_ver !== nd.world_ver) {
    if ((nd.flags & 2) !== 0) {
      nd.clip_world = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(nd.clip_local, nd.world);
    } else {
      nd.clip_world = _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty();
    }
    nd.clip_ver = nd.world_ver;
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id) {
  if (id === -1 || !_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return undefined;
  }
  _M0MPC15array5Array5clearGiE(self.scratch);
  const cur = new _M0TPB8MutLocalGiE(id);
  while (true) {
    if (cur.val !== -1) {
      _M0MPC15array5Array4pushGiE(self.scratch, cur.val);
      cur.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).parent;
      continue;
    } else {
      break;
    }
  }
  const k = new _M0TPB8MutLocalGiE(self.scratch.length - 1 | 0);
  while (true) {
    if (k.val >= 0) {
      _M0MP45lumen7tsumugi8reactive5scene5Scene13refresh__node(self, _M0MPC15array5Array2atGiE(self.scratch, k.val));
      k.val = k.val - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(self, id) {
  _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id);
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).world;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(self, id) {
  _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id);
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(self, id) {
  _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id);
  return _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).sub_local, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).world);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene18subtree__local__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).sub_local;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene15clip__local__of(self, id) {
  return _M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(self, id) ? _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).clip_local : _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty();
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(self) {
  return self.dirty;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene5stats(self) {
  return self.stats;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene7pending(self) {
  return self.marks.length > 0;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5clear(self) {
  if (!self.full) {
    _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.bits);
  }
  self.full = false;
  self.tiles = 0;
  _M0MPC15array5Array5clearGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects);
  self.overflow = false;
  self.adds = 0;
  self.min_x = self.vp.max_x;
  self.min_y = self.vp.max_y;
  self.max_x = self.vp.min_x;
  self.max_y = self.vp.min_y;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(self) {
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5clear(self.dirty);
  self.stats.marks = 0;
  self.stats.refreshed = 0;
  self.stats.matmuls = 0;
  self.stats.promotes = 0;
  self.stats.early_stops = 0;
  self.stats.post_rects = 0;
  self.stats.pre_rects = 0;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene5alloc(self, parent, trs, bounds_local) {
  const depth = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, parent).depth + 1 | 0;
  const node = new _M0TP45lumen7tsumugi8reactive5scene4Node(true, 0, parent, -1, -1, -1, -1, depth, trs, bounds_local, 0, 1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), _M0MP45lumen7tsumugi4core4math6Mat2x38identity(), false, false, _M0MP45lumen7tsumugi4core4math6Mat2x38identity(), 0, 0, false, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), -1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), -1, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  if (self.free.length > 0) {
    const id = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(self.free));
    const gen = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).gen + 1 | 0;
    _M0MPC15array5Array3setGOdE(self.nodes, id, node);
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).gen = gen;
    _M0MPC15array5Array3setGiE(self.mark_stamp, id, 0);
    return id;
  } else {
    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, node);
    _M0MPC15array5Array4pushGiE(self.mark_stamp, 0);
    return self.nodes.length - 1 | 0;
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene10link__last(self, parent, id) {
  const last = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, parent).last_child;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).prev = last;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).next = -1;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent = parent;
  if (last === -1) {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, parent).first_child = id;
  } else {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, last).next = id;
  }
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, parent).last_child = id;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id) {
  if (id === -1 || !_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return undefined;
  }
  if (_M0MPC15array5Array2atGiE(self.mark_stamp, id) === self.stamp) {
    return undefined;
  }
  _M0MPC15array5Array3setGiE(self.mark_stamp, id, self.stamp);
  _M0MPC15array5Array4pushGiE(self.marks, id);
  self.stats.marks = self.stats.marks + 1 | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(self, parent, trs, bounds_local) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, parent)) {
    return -1;
  }
  const id = _M0MP45lumen7tsumugi8reactive5scene5Scene5alloc(self, parent, trs, bounds_local);
  _M0MP45lumen7tsumugi8reactive5scene5Scene10link__last(self, parent, id);
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return id;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene6unlink(self, id) {
  const p = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent;
  if (p === -1) {
    return undefined;
  }
  const prev = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).prev;
  const next = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).next;
  if (prev === -1) {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p).first_child = next;
  } else {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, prev).next = next;
  }
  if (next === -1) {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p).last_child = prev;
  } else {
    _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, next).prev = prev;
  }
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent = -1;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).prev = -1;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).next = -1;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10keep__rect(self, c) {
  if (self.overflow) {
    return undefined;
  }
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects, c);
  if (self.rects.length > self.rect_cap) {
    const u = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects, 0));
    let _tmp$3 = 1;
    while (true) {
      const i = _tmp$3;
      if (i < self.rects.length) {
        u.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(u.val, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects, i));
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array5clearGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects);
    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects, u.val);
    self.overflow = true;
    return;
  } else {
    return;
  }
}
function _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(v, n) {
  return _M0FP45lumen7tsumugi5algos7spatial11clamp__tile(v, n);
}
function _M0FP45lumen7tsumugi8reactive5scene10tile__span(a, b, origin, tile) {
  return _M0FP45lumen7tsumugi5algos7spatial10tile__span(a, b, origin, tile);
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion12raster__rect(self, c) {
  if (self.full) {
    return undefined;
  }
  const tf = self.tile + 0;
  let lx;
  let hx;
  _L: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(c.min_x, c.max_x, self.vp.min_x, tf);
    const _lx = _bind$5._0;
    const _hx = _bind$5._1;
    lx = _lx;
    hx = _hx;
    break _L;
  }
  let ly;
  let hy;
  _L$2: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(c.min_y, c.max_y, self.vp.min_y, tf);
    const _ly = _bind$5._0;
    const _hy = _bind$5._1;
    ly = _ly;
    hy = _hy;
    break _L$2;
  }
  if (lx > hx || ly > hy) {
    return undefined;
  }
  const tx0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(lx, self.cols);
  const tx1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hx, self.cols);
  const ty0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(ly, self.rows);
  const ty1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hy, self.rows);
  if (tx0 > tx1 || ty0 > ty1) {
    return undefined;
  }
  if (tx0 === 0 && (ty0 === 0 && (tx1 === (self.cols - 1 | 0) && ty1 === (self.rows - 1 | 0)))) {
    self.full = true;
    self.tiles = Math.imul(self.cols, self.rows) | 0;
    _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.bits);
    self.min_x = self.vp.min_x;
    self.min_y = self.vp.min_y;
    self.max_x = self.vp.max_x;
    self.max_y = self.vp.max_y;
    return undefined;
  }
  const x0 = self.vp.min_x + ((Math.imul(tx0, self.tile) | 0) + 0);
  const y0 = self.vp.min_y + ((Math.imul(ty0, self.tile) | 0) + 0);
  const x1 = _M0MPC16double6Double3min(self.vp.max_x, self.vp.min_x + ((Math.imul(tx1 + 1 | 0, self.tile) | 0) + 0));
  const y1 = _M0MPC16double6Double3min(self.vp.max_y, self.vp.min_y + ((Math.imul(ty1 + 1 | 0, self.tile) | 0) + 0));
  if (self.tiles === 0) {
    self.min_x = x0;
    self.min_y = y0;
    self.max_x = x1;
    self.max_y = y1;
  } else {
    self.min_x = _M0MPC16double6Double3min(self.min_x, x0);
    self.min_y = _M0MPC16double6Double3min(self.min_y, y0);
    self.max_x = _M0MPC16double6Double3max(self.max_x, x1);
    self.max_y = _M0MPC16double6Double3max(self.max_y, y1);
  }
  let _tmp$3 = ty0;
  while (true) {
    const ty = _tmp$3;
    if (ty <= ty1) {
      const row = Math.imul(ty, self.cols) | 0;
      let _tmp$4 = tx0;
      while (true) {
        const tx = _tmp$4;
        if (tx <= tx1) {
          const idx = row + tx | 0;
          if (!_M0MP45lumen7tsumugi4core4base6BitSet3get(self.bits, idx)) {
            _M0MP45lumen7tsumugi4core4base6BitSet3set(self.bits, idx);
            self.tiles = self.tiles + 1 | 0;
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
  if (self.tiles === (Math.imul(self.cols, self.rows) | 0)) {
    self.full = true;
    _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.bits);
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(self, b) {
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
    return undefined;
  }
  const c = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(b, self.vp);
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(c)) {
    return undefined;
  }
  self.adds = self.adds + 1 | 0;
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10keep__rect(self, c);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion12raster__rect(self, c);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene15clip__to__chain(self, id, r) {
  const acc = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(r, self.vp));
  const cur = new _M0TPB8MutLocalGiE(id);
  while (true) {
    if (cur.val !== -1 && !_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(acc.val)) {
      const n = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val);
      if ((n.flags & 1) !== 0) {
        return _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty();
      }
      if ((n.flags & 2) !== 0) {
        acc.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(acc.val, n.clip_world);
      }
      cur.val = n.parent;
      continue;
    } else {
      break;
    }
  }
  return acc.val;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene10damage__of(self, id) {
  _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id);
  const box = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).sub_local, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).world);
  return _M0MP45lumen7tsumugi8reactive5scene5Scene15clip__to__chain(self, id, box);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return undefined;
  }
  const r = _M0MP45lumen7tsumugi8reactive5scene5Scene10damage__of(self, id);
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(r)) {
    return undefined;
  }
  self.stats.pre_rects = self.stats.pre_rects + 1 | 0;
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(self.dirty, r);
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(self, id) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id) || id === 0) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  const parent = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent;
  _M0MP45lumen7tsumugi8reactive5scene5Scene6unlink(self, id);
  _M0MPC15array5Array5clearGiE(self.scratch);
  _M0MPC15array5Array4pushGiE(self.scratch, id);
  while (true) {
    if (self.scratch.length > 0) {
      const n = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(self.scratch));
      const c = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).first_child);
      while (true) {
        if (c.val !== -1) {
          _M0MPC15array5Array4pushGiE(self.scratch, c.val);
          c.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).next;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).alive = false;
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).sub_local = _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty();
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).flags = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).flags | 1;
      _M0MPC15array5Array4pushGiE(self.free, n);
      continue;
    } else {
      break;
    }
  }
  if (parent !== -1) {
    _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, parent);
  }
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11fix__depths(self, id) {
  _M0MPC15array5Array5clearGiE(self.scratch);
  _M0MPC15array5Array4pushGiE(self.scratch, id);
  while (true) {
    if (self.scratch.length > 0) {
      const n = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(self.scratch));
      const d = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).parent).depth + 1 | 0;
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).depth = d;
      const c = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).first_child);
      while (true) {
        if (c.val !== -1) {
          _M0MPC15array5Array4pushGiE(self.scratch, c.val);
          c.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).next;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(self, id, new_parent) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id) || (id === 0 || !_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, new_parent))) {
    return false;
  }
  const p = new _M0TPB8MutLocalGiE(new_parent);
  while (true) {
    if (p.val !== -1) {
      if (p.val === id) {
        return false;
      }
      p.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p.val).parent;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  const old_parent = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).parent;
  _M0MP45lumen7tsumugi8reactive5scene5Scene6unlink(self, id);
  _M0MP45lumen7tsumugi8reactive5scene5Scene10link__last(self, new_parent, id);
  _M0MP45lumen7tsumugi8reactive5scene5Scene11fix__depths(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).world_valid = false;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, new_parent);
  if (old_parent !== -1) {
    _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, old_parent);
  }
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(self, id, trs) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  if (_M0MP45lumen7tsumugi8reactive5scene3Trs5equal(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).trs, trs)) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).trs = trs;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).mat_valid = false;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(self, id, dx, dy) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  if (dx === 0 && dy === 0) {
    return false;
  }
  const t = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).trs;
  return _M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(self, id, _M0MP45lumen7tsumugi8reactive5scene3Trs3new(t.x + dx, t.y + dy, t.rot, t.sx, t.sy));
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene18set__local__bounds(self, id, b) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  if (_M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds_local, b)) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds_local = b;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds_ver = -1;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(self, id, visible) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id) || id === 0) {
    return false;
  }
  const hidden = (_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags & 1) !== 0;
  if (hidden === !visible) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags = visible ? _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags & ~1 : _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags | 1;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds_ver = -1;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene12set__opacity(self, id, v) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  const nv = v < 0 ? 0 : v > 1 ? 1 : v;
  if (_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).opacity === nv) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).opacity = nv;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11opacity__of(self, id) {
  return _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).opacity;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9set__clip(self, id, box) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).clip_local = box;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags | 2;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).clip_ver = -1;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11clear__clip(self, id) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id) || !_M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(self, id)) {
    return false;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene9mark__pre(self, id);
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).flags & ~2;
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).clip_ver = -1;
  _M0MP45lumen7tsumugi8reactive5scene5Scene10mark__node(self, id);
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene14recompute__sub(self, n) {
  const s = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).bounds_local);
  const c = new _M0TPB8MutLocalGiE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, n).first_child);
  while (true) {
    if (c.val !== -1) {
      s.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(s.val, _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).sub_local, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).mat));
      c.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).next;
      continue;
    } else {
      break;
    }
  }
  return s.val;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene7promote(self, id) {
  const cur = new _M0TPB8MutLocalGiE(id);
  while (true) {
    if (cur.val !== -1) {
      const before = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).sub_local;
      const after = _M0MP45lumen7tsumugi8reactive5scene5Scene14recompute__sub(self, cur.val);
      const placed = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).placed_dirty;
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).placed_dirty = false;
      self.stats.promotes = self.stats.promotes + 1 | 0;
      _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).sub_local = after;
      if (!placed && _M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(before, after)) {
        self.stats.early_stops = self.stats.early_stops + 1 | 0;
        return;
      }
      cur.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, cur.val).parent;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(self) {
  if (self.marks.length === 0) {
    return self.stats;
  }
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.marks.length) {
      const id = _M0MPC15array5Array2atGiE(self.marks, i);
      if (_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
        _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, id);
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < self.marks.length) {
      const id = _M0MPC15array5Array2atGiE(self.marks, i);
      if (_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
        _M0MP45lumen7tsumugi8reactive5scene5Scene7promote(self, id);
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < self.marks.length) {
      _L: {
        const id = _M0MPC15array5Array2atGiE(self.marks, i);
        if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, id)) {
          break _L;
        }
        const r = _M0MP45lumen7tsumugi8reactive5scene5Scene10damage__of(self, id);
        if (!_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(r)) {
          self.stats.post_rects = self.stats.post_rects + 1 | 0;
          _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(self.dirty, r);
        }
        break _L;
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array5clearGiE(self.marks);
  self.stamp = self.stamp + 1 | 0;
  return self.stats;
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene11pull__local(self, id) {
  const nd = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id);
  const p = nd.parent;
  const parent_ver = p === -1 ? 0 : _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, p).world_ver;
  if (!nd.mat_valid || (!nd.world_valid || nd.world_base !== parent_ver)) {
    _M0MP45lumen7tsumugi8reactive5scene5Scene13refresh__node(self, id);
    return;
  } else {
    return;
  }
}
function _M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(self, x, y) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(self, 0) || !_M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(self, 0)) {
    return -1;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene6ensure(self, 0);
  if (!_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(_M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(self, 0), x, y)) {
    return -1;
  }
  _M0MPC15array5Array5clearGiE(self.id_stack);
  _M0MPC15array5Array5clearGRP45lumen7tsumugi5algos7spatial4AabbE(self.clip_stack);
  _M0MPC15array5Array4pushGiE(self.id_stack, 0);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.clip_stack, self.vp);
  while (true) {
    if (self.id_stack.length > 0) {
      const v = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(self.id_stack));
      const clip = _M0MPC16option6Option6unwrapGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MPC15array5Array3popGRP45lumen7tsumugi5algos7spatial4AabbE(self.clip_stack));
      if (v < 0) {
        const id = ~v;
        const b = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, id).bounds;
        if (_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(b, x, y) && _M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(clip, x, y)) {
          return id;
        }
        continue;
      }
      _M0MP45lumen7tsumugi8reactive5scene5Scene11pull__local(self, v);
      const node = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, v);
      if ((node.flags & 1) !== 0) {
        continue;
      }
      if (!_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(_M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, v).sub_local, node.world), x, y)) {
        continue;
      }
      const inner = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(clip);
      if ((node.flags & 2) !== 0) {
        inner.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(clip, node.clip_world);
      }
      _M0MPC15array5Array4pushGiE(self.id_stack, ~v);
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.clip_stack, clip);
      const c = new _M0TPB8MutLocalGiE(node.first_child);
      while (true) {
        if (c.val !== -1) {
          _M0MPC15array5Array4pushGiE(self.id_stack, c.val);
          _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.clip_stack, inner.val);
          c.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.nodes, c.val).next;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0MP45lumen7tsumugi8reactive5scene6PropId5index(self) {
  switch (self) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 2;
    }
    case 3: {
      return 3;
    }
    case 4: {
      return 4;
    }
    case 5: {
      return 5;
    }
    case 6: {
      return 6;
    }
    case 7: {
      return 7;
    }
    case 8: {
      return 8;
    }
    default: {
      return 9;
    }
  }
}
function _M0FP45lumen7tsumugi8reactive5scene17ir__encoded__size(nodes) {
  return 24 + (Math.imul(Math.imul(nodes, 10) | 0, 8) | 0) | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(nodes) {
  const n = nodes < 1 ? 1 : nodes;
  const stride = 10;
  const words = $make_array_len_and_init(Math.imul(n, stride) | 0, 0);
  const stamps = $make_array_len_and_init(Math.imul(n, stride) | 0, 0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < n) {
      const _tmp$4 = (Math.imul(i, stride) | 0) + _M0MP45lumen7tsumugi8reactive5scene6PropId5index(3) | 0;
      if (_tmp$4 >>> 0 < words.length) {
        words[_tmp$4] = 1;
      } else {
        $oob();
      }
      const _tmp$5 = (Math.imul(i, stride) | 0) + _M0MP45lumen7tsumugi8reactive5scene6PropId5index(4) | 0;
      if (_tmp$5 >>> 0 < words.length) {
        words[_tmp$5] = 1;
      } else {
        $oob();
      }
      const _tmp$6 = (Math.imul(i, stride) | 0) + _M0MP45lumen7tsumugi8reactive5scene6PropId5index(5) | 0;
      if (_tmp$6 >>> 0 < words.length) {
        words[_tmp$6] = 1;
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP45lumen7tsumugi8reactive5scene7IrStore(n, stride, words, stamps, 0, 0, _M0MP45lumen7tsumugi4core4base5Crc323new());
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore6stride(self) {
  return self.stride;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore11node__count(self) {
  return self.nodes;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore8grow__to(self, nodes) {
  if (nodes <= self.nodes) {
    return undefined;
  }
  const words = $make_array_len_and_init(Math.imul(nodes, self.stride) | 0, 0);
  const stamps = $make_array_len_and_init(Math.imul(nodes, self.stride) | 0, 0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < (Math.imul(self.nodes, self.stride) | 0)) {
      const _tmp$4 = self.words;
      if (i >>> 0 < words.length) {
        words[i] = i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob();
      } else {
        $oob();
      }
      const _tmp$5 = self.stamps;
      if (i >>> 0 < stamps.length) {
        stamps[i] = i >>> 0 < _tmp$5.length ? _tmp$5[i] : $oob();
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.words = words;
  self.stamps = stamps;
  self.nodes = nodes;
  self.version = self.version + 1 | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore9index__of(self, node, prop) {
  return (Math.imul(node, self.stride) | 0) + _M0MP45lumen7tsumugi8reactive5scene6PropId5index(prop) | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, prop) {
  const i = _M0MP45lumen7tsumugi8reactive5scene7IrStore9index__of(self, node, prop);
  if (i < 0 || i >= self.words.length) {
    return 0;
  } else {
    const _tmp$3 = self.words;
    return i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob();
  }
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, prop, v) {
  const i = _M0MP45lumen7tsumugi8reactive5scene7IrStore9index__of(self, node, prop);
  if (i < 0 || i >= self.words.length) {
    return false;
  }
  const _tmp$3 = self.words;
  if ((i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) === v) {
    return false;
  }
  const _tmp$4 = self.words;
  if (i >>> 0 < _tmp$4.length) {
    _tmp$4[i] = v;
  } else {
    $oob();
  }
  const _tmp$5 = self.stamps;
  const _tmp$6 = self.stamps;
  if (i >>> 0 < _tmp$5.length) {
    _tmp$5[i] = (i >>> 0 < _tmp$6.length ? _tmp$6[i] : $oob()) + 1 | 0;
  } else {
    $oob();
  }
  self.version = self.version + 1 | 0;
  self.writes = self.writes + 1 | 0;
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(self, node, prop) {
  const i = _M0MP45lumen7tsumugi8reactive5scene7IrStore9index__of(self, node, prop);
  if (i < 0 || i >= self.words.length) {
    return -1;
  } else {
    const _tmp$3 = self.stamps;
    return i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob();
  }
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore6writes(self) {
  return self.writes;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore7trs__of(self, node) {
  return _M0MP45lumen7tsumugi8reactive5scene3Trs3new(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 0), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 1), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 2), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 3), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 4));
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore8set__trs(self, node, t) {
  const a = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 0, t.x);
  const b = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 1, t.y);
  const c = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 2, t.rot);
  const d = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 3, t.sx);
  const e = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 4, t.sy);
  return a || (b || (c || (d || e)));
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore8no__clip() {
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 0, 0);
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(self, node) {
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 6), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 7), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 8), _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, node, 9));
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore9has__clip(self, node) {
  const b = _M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(self, node);
  return b.min_x < b.max_x && b.min_y < b.max_y;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore9set__clip(self, node, b) {
  const a = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 6, b.min_x);
  const b2 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 7, b.min_y);
  const c = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 8, b.max_x);
  const d = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, node, 9, b.max_y);
  return a || (b2 || (c || d));
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore20publish__from__scene(self, scene, id) {
  const changed = _M0MP45lumen7tsumugi8reactive5scene7IrStore8set__trs(self, id, _M0MP45lumen7tsumugi8reactive5scene5Scene7trs__of(scene, id));
  const op = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(self, id, 5, _M0MP45lumen7tsumugi8reactive5scene5Scene11opacity__of(scene, id));
  const clip = _M0MP45lumen7tsumugi8reactive5scene7IrStore9set__clip(self, id, _M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(scene, id) ? _M0MP45lumen7tsumugi8reactive5scene5Scene15clip__local__of(scene, id) : _M0MP45lumen7tsumugi8reactive5scene7IrStore8no__clip());
  return changed || (op || clip);
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(self, scene, id) {
  if (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(scene, id)) {
    return false;
  }
  const changed = new _M0TPB8MutLocalGbE(false);
  if (_M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(scene, id, _M0MP45lumen7tsumugi8reactive5scene7IrStore7trs__of(self, id))) {
    changed.val = true;
  }
  if (_M0MP45lumen7tsumugi8reactive5scene5Scene12set__opacity(scene, id, _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(self, id, 5))) {
    changed.val = true;
  }
  if (_M0MP45lumen7tsumugi8reactive5scene7IrStore9has__clip(self, id)) {
    if (_M0MP45lumen7tsumugi8reactive5scene5Scene9set__clip(scene, id, _M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(self, id))) {
      changed.val = true;
    }
  } else {
    if (_M0MP45lumen7tsumugi8reactive5scene5Scene11clear__clip(scene, id)) {
      changed.val = true;
    }
  }
  return changed.val;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge3new() {
  return new _M0TP45lumen7tsumugi8reactive5scene8IrBridge([], 0, 0, 0);
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge5count(self) {
  return self.links.length;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge4bind(self, graph, store, node, prop, sig) {
  const cur = _M0MP45lumen7tsumugi8reactive6signal5Graph4peekGdE(graph, sig);
  let seeded;
  let v;
  _L: {
    _L$2: {
      if (cur.$tag === 1) {
        const _Some = cur;
        const _v = _Some._0;
        v = _v;
        break _L$2;
      } else {
        seeded = false;
      }
      break _L;
    }
    if (v === 0) {
      _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(graph, sig, _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(store, node, prop));
      seeded = true;
    } else {
      seeded = false;
    }
  }
  const link = new _M0TP45lumen7tsumugi8reactive5scene8PropLink(node, prop, sig, _M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(graph, sig), _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(store, node, prop), false);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(self.links, link);
  return self.links.length - 1 | 0;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge15set__prefer__ir(self, i, prefer) {
  _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.links, i).prefer_ir = prefer;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge4pull(self, graph, store) {
  const n = new _M0TPB8MutLocalGiE(0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.links.length) {
      _L: {
        const l = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.links, i);
        const at = _M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(graph, l.sig);
        if (at === l.seen_sig) {
          break _L;
        }
        const v = _M0MP45lumen7tsumugi8reactive6signal5Graph3getGdE(graph, l.sig);
        if (_M0MP45lumen7tsumugi8reactive5scene7IrStore3set(store, l.node, l.prop, v)) {
          n.val = n.val + 1 | 0;
        }
        l.seen_sig = at;
        l.seen_ir = _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(store, l.node, l.prop);
        self.pulls = self.pulls + 1 | 0;
        break _L;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return n.val;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(self, graph, store) {
  const n = new _M0TPB8MutLocalGiE(0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.links.length) {
      _L: {
        const l = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.links, i);
        const at_ir = _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(store, l.node, l.prop);
        if (at_ir === l.seen_ir) {
          break _L;
        }
        const at_sig = _M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(graph, l.sig);
        const sig_dirty = at_sig !== l.seen_sig;
        if (sig_dirty && !l.prefer_ir) {
          self.conflicts = self.conflicts + 1 | 0;
          _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(store, l.node, l.prop, _M0MP45lumen7tsumugi8reactive6signal5Graph3getGdE(graph, l.sig));
          l.seen_ir = _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(store, l.node, l.prop);
          l.seen_sig = at_sig;
          break _L;
        }
        if (sig_dirty) {
          self.conflicts = self.conflicts + 1 | 0;
        }
        const v = _M0MP45lumen7tsumugi8reactive5scene7IrStore3get(store, l.node, l.prop);
        _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(graph, l.sig, v);
        l.seen_sig = _M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(graph, l.sig);
        l.seen_ir = at_ir;
        n.val = n.val + 1 | 0;
        self.pushes = self.pushes + 1 | 0;
        break _L;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return n.val;
}
function _M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(self, graph, store) {
  const n = new _M0TPB8MutLocalGiE(0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.links.length) {
      const l = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.links, i);
      if (_M0MP45lumen7tsumugi8reactive6signal5Graph11changed__atGdE(graph, l.sig) !== l.seen_sig || _M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(store, l.node, l.prop) !== l.seen_ir) {
        n.val = n.val + 1 | 0;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return n.val;
}
function _M0FP45lumen7tsumugi8reactive5scene17bytes__of__string(s) {
  return _M0FP45lumen7tsumugi4core4base11utf8__bytes(s);
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore12encode__into(self, buf) {
  const total = _M0FP45lumen7tsumugi8reactive5scene17ir__encoded__size(self.nodes);
  if (buf.length < total) {
    return 0;
  }
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 0, 1196249940);
  _M0FP45lumen7tsumugi4core4base8put__u16(buf, 4, 1);
  _M0FP45lumen7tsumugi4core4base8put__u16(buf, 6, self.stride);
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 8, self.nodes);
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 12, Math.imul(Math.imul(self.nodes, self.stride) | 0, 8) | 0);
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 20, 0);
  const off = new _M0TPB8MutLocalGiE(24);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.nodes) {
      let _tmp$4 = 0;
      while (true) {
        const p = _tmp$4;
        if (p < self.stride) {
          const _tmp$5 = off.val;
          const _tmp$6 = self.words;
          const _tmp$7 = (Math.imul(i, self.stride) | 0) + p | 0;
          _M0FP45lumen7tsumugi4core4base8put__u64(buf, _tmp$5, $f64_reinterpret_i64(_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob()));
          off.val = off.val + 8 | 0;
          _tmp$4 = p + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const crc = _M0MP45lumen7tsumugi4core4base5Crc322of(self.crc, buf, 24, Math.imul(Math.imul(self.nodes, self.stride) | 0, 8) | 0);
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 16, crc);
  return total;
}
function _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(buf) {
  if (buf.length < 24) {
    return undefined;
  }
  if (_M0FP45lumen7tsumugi4core4base12get__u32__le(buf, 0) !== 1196249940) {
    return undefined;
  }
  if (_M0FP45lumen7tsumugi4core4base8get__u16(buf, 4) !== 1) {
    return undefined;
  }
  const stride = _M0FP45lumen7tsumugi4core4base8get__u16(buf, 6);
  const nodes = _M0FP45lumen7tsumugi4core4base12get__u32__le(buf, 8);
  const payload = _M0FP45lumen7tsumugi4core4base12get__u32__le(buf, 12);
  if (stride !== 10 || nodes < 1) {
    return undefined;
  }
  if (payload !== (Math.imul(Math.imul(nodes, stride) | 0, 8) | 0) || buf.length < (24 + payload | 0)) {
    return undefined;
  }
  const store = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(nodes);
  const off = new _M0TPB8MutLocalGiE(24);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < nodes) {
      let _tmp$4 = 0;
      while (true) {
        const p = _tmp$4;
        if (p < stride) {
          const bits = _M0FP45lumen7tsumugi4core4base8get__u64(buf, off.val);
          const _tmp$5 = store.words;
          const _tmp$6 = (Math.imul(i, stride) | 0) + p | 0;
          if (_tmp$6 >>> 0 < _tmp$5.length) {
            _tmp$5[_tmp$6] = $i64_reinterpret_f64(bits);
          } else {
            $oob();
          }
          off.val = off.val + 8 | 0;
          _tmp$4 = p + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const want = _M0FP45lumen7tsumugi4core4base12get__u32__le(buf, 16);
  const got = _M0MP45lumen7tsumugi4core4base5Crc322of(store.crc, buf, 24, payload);
  if (want !== got) {
    return undefined;
  }
  store.stamps = $make_array_len_and_init(Math.imul(nodes, stride) | 0, 0);
  store.version = 1;
  return store;
}
function _M0FP45lumen7tsumugi8reactive5scene12get__f64__le(buf, off) {
  return _M0FP45lumen7tsumugi4core4base8get__f64(buf, off);
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(self) {
  return self.cols;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(self) {
  return self.rows;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(self) {
  return self.tiles;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(self) {
  return self.tiles === 0;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion8is__full(self) {
  return self.full;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(self) {
  return self.tiles === 0 ? _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty() : _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(self.min_x, self.min_y, self.max_x, self.max_y);
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(self, tx, ty) {
  return tx < 0 || (ty < 0 || (tx >= self.cols || ty >= self.rows)) ? false : self.full ? true : _M0MP45lumen7tsumugi4core4base6BitSet3get(self.bits, (Math.imul(ty, self.cols) | 0) + tx | 0);
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11add__region(self, o) {
  if (o.tiles === 0) {
    return undefined;
  }
  if (o.full) {
    _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(self, o.vp);
    return undefined;
  }
  if (!o.overflow) {
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < o.rects.length) {
        _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10keep__rect(self, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(o.rects, i));
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10keep__rect(self, _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(o));
  }
  if (self.full || o.tiles === 0) {
    return undefined;
  }
  const tf = self.tile + 0;
  let lx;
  let hx;
  _L: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(o.min_x, o.max_x, self.vp.min_x, tf);
    const _lx = _bind$5._0;
    const _hx = _bind$5._1;
    lx = _lx;
    hx = _hx;
    break _L;
  }
  let ly;
  let hy;
  _L$2: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(o.min_y, o.max_y, self.vp.min_y, tf);
    const _ly = _bind$5._0;
    const _hy = _bind$5._1;
    ly = _ly;
    hy = _hy;
    break _L$2;
  }
  const tx0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(lx, self.cols);
  const tx1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hx, self.cols);
  const ty0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(ly, self.rows);
  const ty1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hy, self.rows);
  let _tmp$3 = ty0;
  while (true) {
    const ty = _tmp$3;
    if (ty <= ty1) {
      let _tmp$4 = tx0;
      while (true) {
        const tx = _tmp$4;
        if (tx <= tx1) {
          if (_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(o, tx, ty) && !_M0MP45lumen7tsumugi4core4base6BitSet3get(self.bits, (Math.imul(ty, self.cols) | 0) + tx | 0)) {
            _M0MP45lumen7tsumugi4core4base6BitSet3set(self.bits, (Math.imul(ty, self.cols) | 0) + tx | 0);
            self.tiles = self.tiles + 1 | 0;
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
  if (self.tiles === (Math.imul(self.cols, self.rows) | 0)) {
    self.full = true;
    _M0MP45lumen7tsumugi4core4base6BitSet10clear__all(self.bits);
  }
  self.min_x = _M0MPC16double6Double3min(self.min_x, _M0MPC16double6Double3max(self.vp.min_x, o.min_x));
  self.min_y = _M0MPC16double6Double3min(self.min_y, _M0MPC16double6Double3max(self.vp.min_y, o.min_y));
  self.max_x = _M0MPC16double6Double3max(self.max_x, _M0MPC16double6Double3min(self.vp.max_x, o.max_x));
  self.max_y = _M0MPC16double6Double3max(self.max_y, _M0MPC16double6Double3min(self.vp.max_y, o.max_y));
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion12pixel__rects(self) {
  const out = [];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < self.rects.length) {
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self.rects, i));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10overflowed(self) {
  return self.overflow;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion14scissor__count(self) {
  return self.rects.length;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11emit__tiles(self, out, tx0, tx1, ty0, ty1) {
  const x0 = self.vp.min_x + ((Math.imul(tx0, self.tile) | 0) + 0);
  const y0 = self.vp.min_y + ((Math.imul(ty0, self.tile) | 0) + 0);
  const x1 = _M0MPC16double6Double3min(self.vp.max_x, self.vp.min_x + ((Math.imul(tx1, self.tile) | 0) + 0));
  const y1 = _M0MPC16double6Double3min(self.vp.max_y, self.vp.min_y + ((Math.imul(ty1, self.tile) | 0) + 0));
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x0, y0, x1, y1));
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9to__rects(self) {
  const out = [];
  if (self.tiles === 0) {
    return out;
  }
  if (self.full) {
    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, self.vp);
    return out;
  }
  const open_x0 = [];
  const open_x1 = [];
  const open_y0 = [];
  const row_x0 = [];
  const row_x1 = [];
  let _tmp$3 = 0;
  while (true) {
    const ty = _tmp$3;
    if (ty < self.rows) {
      _M0MPC15array5Array5clearGiE(row_x0);
      _M0MPC15array5Array5clearGiE(row_x1);
      const tx = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (tx.val < self.cols) {
          if (_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(self, tx.val, ty)) {
            const start = tx.val;
            while (true) {
              if (tx.val < self.cols && _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(self, tx.val, ty)) {
                tx.val = tx.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGiE(row_x0, start);
            _M0MPC15array5Array4pushGiE(row_x1, tx.val);
          } else {
            tx.val = tx.val + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      const next_x0 = [];
      const next_x1 = [];
      const next_y0 = [];
      const oi = new _M0TPB8MutLocalGiE(0);
      const ri = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (oi.val < open_x0.length || ri.val < row_x0.length) {
          if (oi.val < open_x0.length && ri.val < row_x0.length) {
            if (_M0MPC15array5Array2atGiE(open_x0, oi.val) === _M0MPC15array5Array2atGiE(row_x0, ri.val) && _M0MPC15array5Array2atGiE(open_x1, oi.val) === _M0MPC15array5Array2atGiE(row_x1, ri.val)) {
              _M0MPC15array5Array4pushGiE(next_x0, _M0MPC15array5Array2atGiE(open_x0, oi.val));
              _M0MPC15array5Array4pushGiE(next_x1, _M0MPC15array5Array2atGiE(open_x1, oi.val));
              _M0MPC15array5Array4pushGiE(next_y0, _M0MPC15array5Array2atGiE(open_y0, oi.val));
              oi.val = oi.val + 1 | 0;
              ri.val = ri.val + 1 | 0;
            } else {
              if (_M0MPC15array5Array2atGiE(open_x0, oi.val) < _M0MPC15array5Array2atGiE(row_x0, ri.val)) {
                _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11emit__tiles(self, out, _M0MPC15array5Array2atGiE(open_x0, oi.val), _M0MPC15array5Array2atGiE(open_x1, oi.val), _M0MPC15array5Array2atGiE(open_y0, oi.val), ty);
                oi.val = oi.val + 1 | 0;
              } else {
                _M0MPC15array5Array4pushGiE(next_x0, _M0MPC15array5Array2atGiE(row_x0, ri.val));
                _M0MPC15array5Array4pushGiE(next_x1, _M0MPC15array5Array2atGiE(row_x1, ri.val));
                _M0MPC15array5Array4pushGiE(next_y0, ty);
                ri.val = ri.val + 1 | 0;
              }
            }
          } else {
            if (oi.val < open_x0.length) {
              _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11emit__tiles(self, out, _M0MPC15array5Array2atGiE(open_x0, oi.val), _M0MPC15array5Array2atGiE(open_x1, oi.val), _M0MPC15array5Array2atGiE(open_y0, oi.val), ty);
              oi.val = oi.val + 1 | 0;
            } else {
              _M0MPC15array5Array4pushGiE(next_x0, _M0MPC15array5Array2atGiE(row_x0, ri.val));
              _M0MPC15array5Array4pushGiE(next_x1, _M0MPC15array5Array2atGiE(row_x1, ri.val));
              _M0MPC15array5Array4pushGiE(next_y0, ty);
              ri.val = ri.val + 1 | 0;
            }
          }
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array5clearGiE(open_x0);
      _M0MPC15array5Array5clearGiE(open_x1);
      _M0MPC15array5Array5clearGiE(open_y0);
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < next_x0.length) {
          _M0MPC15array5Array4pushGiE(open_x0, _M0MPC15array5Array2atGiE(next_x0, i));
          _M0MPC15array5Array4pushGiE(open_x1, _M0MPC15array5Array2atGiE(next_x1, i));
          _M0MPC15array5Array4pushGiE(open_y0, _M0MPC15array5Array2atGiE(next_y0, i));
          _tmp$4 = i + 1 | 0;
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
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < open_x0.length) {
      _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11emit__tiles(self, out, _M0MPC15array5Array2atGiE(open_x0, i), _M0MPC15array5Array2atGiE(open_x1, i), _M0MPC15array5Array2atGiE(open_y0, i), self.rows);
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(self, b) {
  if (self.tiles === 0 || _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
    return false;
  }
  if (self.full) {
    return true;
  }
  const c = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(b, self.vp);
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(c)) {
    return true;
  }
  const tf = self.tile + 0;
  let lx;
  let hx;
  _L: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(c.min_x, c.max_x, self.vp.min_x, tf);
    const _lx = _bind$5._0;
    const _hx = _bind$5._1;
    lx = _lx;
    hx = _hx;
    break _L;
  }
  let ly;
  let hy;
  _L$2: {
    const _bind$5 = _M0FP45lumen7tsumugi8reactive5scene10tile__span(c.min_y, c.max_y, self.vp.min_y, tf);
    const _ly = _bind$5._0;
    const _hy = _bind$5._1;
    ly = _ly;
    hy = _hy;
    break _L$2;
  }
  if (lx > hx || ly > hy) {
    return true;
  }
  const tx0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(lx, self.cols);
  const tx1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hx, self.cols);
  const ty0 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(ly, self.rows);
  const ty1 = _M0FP45lumen7tsumugi8reactive5scene11clamp__tile(hy, self.rows);
  let _tmp$3 = ty0;
  while (true) {
    const ty = _tmp$3;
    if (ty <= ty1) {
      let _tmp$4 = tx0;
      while (true) {
        const tx = _tmp$4;
        if (tx <= tx1) {
          if (!_M0MP45lumen7tsumugi4core4base6BitSet3get(self.bits, (Math.imul(ty, self.cols) | 0) + tx | 0)) {
            return false;
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
  return true;
}
function _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion15for__each__tile(self, f) {
  if (self.tiles === 0) {
    return undefined;
  }
  if (self.full) {
    let _tmp$3 = 0;
    while (true) {
      const ty = _tmp$3;
      if (ty < self.rows) {
        let _tmp$4 = 0;
        while (true) {
          const tx = _tmp$4;
          if (tx < self.cols) {
            f(tx, ty);
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
    return undefined;
  }
  let _tmp$3 = 0;
  while (true) {
    const ty = _tmp$3;
    if (ty < self.rows) {
      let _tmp$4 = 0;
      while (true) {
        const tx = _tmp$4;
        if (tx < self.cols) {
          if (_M0MP45lumen7tsumugi4core4base6BitSet3get(self.bits, (Math.imul(ty, self.cols) | 0) + tx | 0)) {
            f(tx, ty);
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
      return;
    }
  }
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene() {
  return _M0MP45lumen7tsumugi8reactive5scene5Scene3new(_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 256, 192), 16);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11naive__fill(s, id, parent, worlds, bounds, subs) {
  const lm = _M0MP45lumen7tsumugi8reactive5scene3Trs6matrix(_M0MP45lumen7tsumugi8reactive5scene5Scene7trs__of(s, id));
  const w = id === 0 ? lm : _M0MP45lumen7tsumugi4core4math6Mat2x37compose(parent, lm);
  const b = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MP45lumen7tsumugi8reactive5scene5Scene17local__bounds__of(s, id), w);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(worlds, w);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(bounds, b);
  _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(subs, b);
  const my_slot = subs.length - 1 | 0;
  const sub_local = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi8reactive5scene5Scene17local__bounds__of(s, id));
  const _bind$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene12children__of(s, id);
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const k = _bind$5[_];
      const child_sub = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11naive__fill(s, k, w, worlds, bounds, subs);
      sub_local.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(sub_local.val, _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(child_sub, _M0MP45lumen7tsumugi8reactive5scene3Trs6matrix(_M0MP45lumen7tsumugi8reactive5scene5Scene7trs__of(s, k))));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array3setGOdE(subs, my_slot, sub_local.val);
  return sub_local.val;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12collect__ids(s, id, out) {
  _M0MPC15array5Array4pushGiE(out, id);
  const _bind$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene12children__of(s, id);
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const k = _bind$5[_];
      _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12collect__ids(s, k, out);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, tag) {
  const problems = [];
  const ids = [];
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12collect__ids(s, 0, ids);
  const worlds = [];
  const bounds = [];
  const subs = [];
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11naive__fill(s, 0, _M0MP45lumen7tsumugi4core4math6Mat2x38identity(), worlds, bounds, subs);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < ids.length) {
      const id = _M0MPC15array5Array2atGiE(ids, i);
      if (!_M0IP45lumen7tsumugi4core4math6Mat2x3PB2Eq5equal(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(worlds, i), _M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(s, id))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": world wrong at node ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(problems, _M0MPB13StringBuilder10to__string(_string_builder));
      }
      const wb = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, id);
      const nb = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(bounds, i);
      if (Math.abs(wb.min_x - nb.min_x) > 1e-12 || (Math.abs(wb.min_y - nb.min_y) > 1e-12 || (Math.abs(wb.max_x - nb.max_x) > 1e-12 || Math.abs(wb.max_y - nb.max_y) > 1e-12))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": bounds wrong at node ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(problems, _M0MPB13StringBuilder10to__string(_string_builder));
      }
      const ws = _M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(s, id);
      const ns = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(subs, i), _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(worlds, i));
      if (Math.abs(ws.min_x - ns.min_x) > 1e-12 || (Math.abs(ws.min_y - ns.min_y) > 1e-12 || (Math.abs(ws.max_x - ns.max_x) > 1e-12 || Math.abs(ws.max_y - ns.max_y) > 1e-12))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, tag);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": subtree bounds wrong at node ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
        _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(problems, _M0MPB13StringBuilder10to__string(_string_builder));
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return problems;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14tiles__of__box(b, tile, cols, rows) {
  const out = [];
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
    return out;
  }
  const eps = 1e-09;
  const x0 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor(b.min_x / tile));
  const x1 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((b.max_x - eps) / tile));
  const y0 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor(b.min_y / tile));
  const y1 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((b.max_y - eps) / tile));
  let _tmp$3 = y0;
  while (true) {
    const ty = _tmp$3;
    if (ty <= y1) {
      let _tmp$4 = x0;
      while (true) {
        const tx = _tmp$4;
        if (tx <= x1) {
          if (tx >= 0 && (ty >= 0 && (tx < cols && ty < rows))) {
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, { _0: tx, _1: ty });
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
  return out;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(d, boxes) {
  const bad = [];
  const _bind$5 = boxes.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const b = boxes[_];
      const _bind$6 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14tiles__of__box(b, 16, _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(d), _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(d));
      const _bind$7 = _bind$6.length;
      let _tmp$4 = 0;
      while (true) {
        const _$2 = _tmp$4;
        if (_$2 < _bind$7) {
          const t = _bind$6[_$2];
          if (!_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(d, t._0, t._1)) {
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(bad, t);
          }
          _tmp$4 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return bad;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__0() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const n = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs3new(10, 0, 1.57079632679489656, 1, 1), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1, 1));
  const n2 = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs3new(10, 0, 1.57079632679489656, 2, 1), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1, 1));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const p = _M0MP45lumen7tsumugi4core4math6Mat2x35apply(_M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(s, n), _M0MP45lumen7tsumugi4core4math4Vec23new(1, 0));
  const _tmp$3 = Math.abs(p.x - 10) < 1e-12;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "x = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, p.x);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:159:3-159:62@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = Math.abs(p.y - 1) < 1e-12;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(4);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "y = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, p.y);
  const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:160:3-160:61@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const q = _M0MP45lumen7tsumugi4core4math6Mat2x35apply(_M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(s, n2), _M0MP45lumen7tsumugi4core4math4Vec23new(1, 0));
  const _tmp$5 = Math.abs(q.x - 10) < 1e-12;
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "scaled x = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, q.x);
  const _bind$9 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:163:3-163:69@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$6 = Math.abs(q.y - 2) < 1e-12;
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "scaled y = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, q.y);
  const _bind$11 = _M0MPB13StringBuilder10to__string(_string_builder$4);
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:164:3-164:68@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const child = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, n, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 5), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1, 1));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const c = _M0MP45lumen7tsumugi4core4math6Mat2x35apply(_M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(s, child), _M0MP45lumen7tsumugi4core4math4Vec24zero());
  const _tmp$7 = Math.abs(c.x - 5) < 1e-12;
  const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "child x = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$5, c.x);
  const _bind$13 = _M0MPB13StringBuilder10to__string(_string_builder$5);
  const _bind$14 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:175:3-175:67@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _tmp$8 = Math.abs(c.y) < 1e-12;
  const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "child y = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$6, c.y);
  const _bind$15 = _M0MPB13StringBuilder10to__string(_string_builder$6);
  const _bind$16 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length), "reactive/scene/scene_test.mbt:176:3-176:59@lumen/tsumugi");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _tmp$9 = _M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, child) === 2;
  const _bind$17 = "depth";
  return _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$17, 0, _bind$17.length), "reactive/scene/scene_test.mbt:177:3-177:51@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test6t__rot(s) {
  return 0.5;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__1() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const rng = _M0MP45lumen7tsumugi4core3num5Pcg323new(undefined, undefined);
  const ids = new _M0TPB8MutLocalGRPB5ArrayGiEE([0]);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 120) {
      const parent = _M0MPC15array5Array2atGiE(ids.val, _M0MP45lumen7tsumugi4core3num5Pcg3211next__below(rng, ids.val.length));
      const t = _M0MP45lumen7tsumugi8reactive5scene3Trs3new(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -40, 40), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -40, 40), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -1, 1), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0.3, 2), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0.3, 2));
      const x = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
      const y = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
      const w = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 4, 40);
      const h = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 4, 40);
      const id = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, parent, t, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + w, y + h));
      if (_M0MP45lumen7tsumugi4core3num5Pcg3212next__double(rng) < 0.15) {
        _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, id, false);
      }
      _M0MPC15array5Array4pushGiE(ids.val, id);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const initial = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, "build");
  if (initial.length > 0) {
    const _bind$5 = "\n";
    const _bind$6 = _M0MPC15array5Array4joinGsE(initial, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
    const _bind$7 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "reactive/scene/scene_test.mbt:208:5-208:29@lumen/tsumugi");
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
  }
  let _tmp$4 = 0;
  while (true) {
    const round = _tmp$4;
    if (round < 40) {
      const before_ids = [];
      _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12collect__ids(s, 0, before_ids);
      const before = [];
      const before_vis = [];
      const _bind$5 = before_ids.length;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$5) {
          const id = before_ids[_];
          _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(before, _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, id));
          _M0MPC15array5Array4pushGbE(before_vis, _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, id));
          _tmp$5 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
      const op = _M0MP45lumen7tsumugi4core3num5Pcg3211next__below(rng, 6);
      const victim = _M0MPC15array5Array2atGiE(ids.val, _M0MP45lumen7tsumugi4core3num5Pcg3211next__below(rng, ids.val.length));
      if (op === 0) {
        const t = _M0MP45lumen7tsumugi8reactive5scene5Scene7trs__of(s, victim);
        _M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(s, victim, _M0MP45lumen7tsumugi8reactive5scene3Trs3new(t.x + _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -60, 60), t.y + _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -60, 60), t.rot, t.sx, t.sy));
      } else {
        if (op === 1) {
          _M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(s, victim, _M0MP45lumen7tsumugi8reactive5scene3Trs3new(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -200, 200), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -200, 200), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test6t__rot(s), 1, 1));
        } else {
          if (op === 2) {
            const x = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
            const y = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
            _M0MP45lumen7tsumugi8reactive5scene5Scene18set__local__bounds(s, victim, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 2, 30), y + _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 2, 30)));
          } else {
            if (op === 3) {
              _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, victim, !_M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, victim));
            } else {
              if (op === 4) {
                const x = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
                const y = _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, 0, 60);
                const id = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, victim, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(_M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -50, 50), _M0MP45lumen7tsumugi4core3num5Pcg325range(rng, -50, 50)), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + 20, y + 20));
                if (id !== -1) {
                  _M0MPC15array5Array4pushGiE(ids.val, id);
                }
              } else {
                if (victim !== 0) {
                  _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, victim);
                }
              }
            }
          }
        }
      }
      _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "round ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, round);
      const problems = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, _M0MPB13StringBuilder10to__string(_string_builder));
      if (problems.length > 0) {
        const _bind$6 = "\n";
        const _bind$7 = _M0MPC15array5Array4joinGsE(problems, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
        const _bind$8 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:286:7-286:32@lumen/tsumugi");
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
      }
      const after_ids = [];
      _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12collect__ids(s, 0, after_ids);
      const need = [];
      const _bind$6 = after_ids.length;
      let _tmp$6 = 0;
      while (true) {
        const _ = _tmp$6;
        if (_ < _bind$6) {
          const id = after_ids[_];
          _L: {
            if (!_M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, id)) {
              break _L;
            }
            const after = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, id);
            const seen_before = new _M0TPB8MutLocalGbE(false);
            const old = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
            let _tmp$7 = 0;
            while (true) {
              const i = _tmp$7;
              if (i < before_ids.length) {
                if (_M0MPC15array5Array2atGiE(before_ids, i) === id) {
                  seen_before.val = true;
                  old.val = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(before, i);
                }
                _tmp$7 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (!seen_before.val || !_M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(old.val, after)) {
              _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(need, after);
              if (seen_before.val) {
                _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(need, old.val);
              }
            }
            break _L;
          }
          _tmp$6 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$7 = 0;
      while (true) {
        const i = _tmp$7;
        if (i < before_ids.length) {
          const id = _M0MPC15array5Array2atGiE(before_ids, i);
          if (_M0MPC15array5Array2atGbE(before_vis, i) && (!_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, id) || !_M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, id))) {
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(need, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(before, i));
          }
          _tmp$7 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), need);
      if (missing.length > 0) {
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(47);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "round ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, round);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ": ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, missing.length);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " tile(s) not damaged, first tile = (");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(missing, 0)._0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ", ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(missing, 0)._1);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ")");
        const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder$2);
        const _bind$8 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:323:7-325:8@lumen/tsumugi");
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
      }
      const alive = [];
      const _bind$7 = ids.val;
      const _bind$8 = _bind$7.length;
      let _tmp$8 = 0;
      while (true) {
        const _ = _tmp$8;
        if (_ < _bind$8) {
          const id = _bind$7[_];
          if (_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, id)) {
            _M0MPC15array5Array4pushGiE(alive, id);
          }
          _tmp$8 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      ids.val = alive;
      _tmp$4 = round + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__2() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const n = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(10, 10), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene5Scene8set__trs(s, n, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(10, 10)) === false;
  const _bind$5 = "same transform is a no-op";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:355:3-358:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, n, 0, 0) === false;
  const _bind$7 = "zero delta is a no-op";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:359:3-359:76@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene18set__local__bounds(s, n, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20)) === false;
  const _bind$9 = "same bounds";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:360:3-363:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene5Scene7pending(s) === false;
  const _bind$11 = "nothing should be queued";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:364:3-364:68@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s));
  const _bind$13 = "no-op writes must not damage";
  const _bind$14 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:366:3-366:72@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const st = _M0MP45lumen7tsumugi8reactive5scene5Scene5stats(s);
  const _bind$15 = _M0FPC15debug10assert__eqGiE(st.marks, 0, undefined, "reactive/scene/scene_test.mbt:368:3-368:25@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  return _M0FPC15debug10assert__eqGiE(st.matmuls, 0, undefined, "reactive/scene/scene_test.mbt:369:3-369:27@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__3() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const n = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, n, 200, 150);
  const st = _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$3 = st.pre_rects >= 1;
  const _bind$5 = "the old position must be damaged";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:384:3-384:73@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = st.post_rects >= 1;
  const _bind$7 = "the new position must be damaged";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:385:3-385:74@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const d = _M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s);
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(d, [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(200, 150, 220, 170)]);
  const _tmp$5 = missing.length === 0;
  const _bind$9 = "both endpoints must be dirty";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:391:3-391:73@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(d) < (Math.imul(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(d), _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(d)) | 0);
  const _bind$11 = "a 20px move must not dirty everything";
  return _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:393:3-396:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__4() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const group = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(20, 20), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, group, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, group, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(30, 40), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const gb = _M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(s, group);
  const _tmp$3 = Math.abs(gb.min_x - 20) < 1e-12;
  const _bind$5 = "group sub min_x";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:415:3-415:72@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = Math.abs(gb.max_x - 60) < 1e-12;
  const _bind$7 = "group sub max_x";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:416:3-416:72@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = Math.abs(gb.max_y - 70) < 1e-12;
  const _bind$9 = "group sub max_y";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:417:3-417:72@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, group, 100, 0);
  const st = _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$11 = _M0FPC15debug10assert__eqGiE(st.pre_rects, 1, undefined, "reactive/scene/scene_test.mbt:422:3-422:29@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGiE(st.post_rects, 1, undefined, "reactive/scene/scene_test.mbt:423:3-423:30@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const d = _M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s);
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(d, [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(20, 20, 60, 70), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(120, 20, 160, 70)]);
  const _tmp$6 = missing.length === 0;
  const _bind$13 = "old and new group areas must be dirty";
  const _bind$14 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:429:3-432:4@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FPC15debug10assert__eqGiE(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, "group move").length, 0, undefined, "reactive/scene/scene_test.mbt:434:3-434:61@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__5() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const n = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(10, 10), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 30, 30));
  const kid = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, n, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$3 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(s, n)) === false;
  const _bind$5 = "visible: non-empty";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:453:3-456:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, n, false);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$4 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(s, n)) === false;
  const _bind$7 = "geometry is unchanged by hiding";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:462:3-465:4@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene10damage__of(s, n));
  const _bind$9 = "a hidden node damages nothing";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:466:3-466:78@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 10, 40, 40)]);
  const _tmp$6 = missing.length === 0;
  const _bind$11 = "hiding must damage where it was";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:470:3-470:76@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, kid, 100, 100);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s));
  const _bind$13 = "changes under a hidden node must not damage";
  const _bind$14 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:475:3-478:4@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FPC15debug10assert__eqGiE(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, "hidden move").length, 0, undefined, "reactive/scene/scene_test.mbt:479:3-479:62@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, n, true);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const need = [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 10, 40, 40), _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MP45lumen7tsumugi8reactive5scene5Scene18subtree__local__of(s, n), _M0MP45lumen7tsumugi8reactive5scene5Scene9world__of(s, n))];
  const _tmp$8 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), need).length === 0;
  const _bind$16 = "showing must damage the new area";
  return _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length), "reactive/scene/scene_test.mbt:488:3-491:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__6() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const win = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  _M0MP45lumen7tsumugi8reactive5scene5Scene9set__clip(s, win, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 64, 64));
  const item = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, win, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 32, 32));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, item, 300, 300);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const b = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s));
  const _tmp$3 = b.max_x <= 64;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "damage escaped the clip in x: ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, b.max_x);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:510:3-510:79@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = b.max_y <= 64;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(30);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "damage escaped the clip in y: ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, b.max_y);
  const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:511:3-511:79@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 32, 32)]);
  const _tmp$5 = missing.length === 0;
  const _bind$9 = "the part that was visible must be damaged";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:515:3-518:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, item, 16, 0);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const b2 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s));
  const _tmp$6 = b2.max_x <= 64 && b2.min_x >= 0;
  const _bind$11 = "scrolling stayed inside the clip";
  return _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:525:3-528:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__7() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const parent = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const a = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, parent, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20));
  const b = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, a, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene11node__count(s), 4, undefined, "reactive/scene/scene_test.mbt:546:3-546:31@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const gen_a = _M0MP45lumen7tsumugi8reactive5scene5Scene3gen(s, a);
  const gen_b = _M0MP45lumen7tsumugi8reactive5scene5Scene3gen(s, b);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, a);
  const _bind$6 = "remove must succeed";
  const _bind$7 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "reactive/scene/scene_test.mbt:550:3-550:59@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, a) === false;
  const _bind$8 = "removed node is not alive";
  const _bind$9 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length), "reactive/scene/scene_test.mbt:551:3-551:68@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, b) === false;
  const _bind$10 = "the whole subtree is gone";
  const _bind$11 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/scene_test.mbt:552:3-552:68@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene11node__count(s), 2, undefined, "reactive/scene/scene_test.mbt:553:3-553:31@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20)]);
  const _tmp$6 = missing.length === 0;
  const _bind$13 = "removal must damage where the subtree was";
  const _bind$14 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:558:3-561:4@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene19subtree__bounds__of(s, parent));
  const _bind$15 = "parent shrank back to nothing";
  const _bind$16 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length), "reactive/scene/scene_test.mbt:562:3-565:4@lumen/tsumugi");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const c = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, parent, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 5, 5));
  const _bind$17 = _M0FPC15debug10assert__eqGiE(c, b, undefined, "reactive/scene/scene_test.mbt:573:3-573:18@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  const _tmp$8 = _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, b);
  const _bind$18 = "the slot is live again — as a different node";
  const _bind$19 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$18, 0, _bind$18.length), "reactive/scene/scene_test.mbt:574:3-574:78@lumen/tsumugi");
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _ok._0;
  } else {
    return _bind$19;
  }
  const _tmp$9 = _M0MP45lumen7tsumugi8reactive5scene5Scene3gen(s, b) !== gen_b;
  const _bind$20 = "a stale id must be detectable through the generation";
  const _bind$21 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$20, 0, _bind$20.length), "reactive/scene/scene_test.mbt:575:3-578:4@lumen/tsumugi");
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _ok._0;
  } else {
    return _bind$21;
  }
  const _tmp$10 = _M0MP45lumen7tsumugi8reactive5scene5Scene3gen(s, a) !== gen_a || !_M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, a);
  const _bind$22 = "the other freed slot is still free or renewed";
  const _bind$23 = _M0FPB12assert__true(_tmp$10, new _M0TPC16string10StringView(_bind$22, 0, _bind$22.length), "reactive/scene/scene_test.mbt:579:3-582:4@lumen/tsumugi");
  if (_bind$23.$tag === 1) {
    const _ok = _bind$23;
    _ok._0;
  } else {
    return _bind$23;
  }
  const _tmp$11 = _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, 0) === false;
  const _bind$24 = "the root cannot be removed";
  const _bind$25 = _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$24, 0, _bind$24.length), "reactive/scene/scene_test.mbt:585:3-585:75@lumen/tsumugi");
  if (_bind$25.$tag === 1) {
    const _ok = _bind$25;
    _ok._0;
  } else {
    return _bind$25;
  }
  const _tmp$12 = _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, a) === false;
  const _bind$26 = "a freed id cannot be removed again";
  const _bind$27 = _M0FPB12assert__true(_tmp$12, new _M0TPC16string10StringView(_bind$26, 0, _bind$26.length), "reactive/scene/scene_test.mbt:587:3-590:4@lumen/tsumugi");
  if (_bind$27.$tag === 1) {
    const _ok = _bind$27;
    _ok._0;
  } else {
    return _bind$27;
  }
  const _tmp$13 = _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, b);
  const _bind$28 = "the reused slot is alive again under a new node";
  return _M0FPB12assert__true(_tmp$13, new _M0TPC16string10StringView(_bind$28, 0, _bind$28.length), "reactive/scene/scene_test.mbt:593:3-593:81@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__8() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const p1 = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(10, 10), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const p2 = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(120, 100), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const mid = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, p1, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const leaf = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, mid, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 20, 20));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const before = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, leaf);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(s, mid, p2);
  const _bind$5 = "reparent must succeed";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:610:3-610:64@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, mid), _M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, p2) + 1 | 0, undefined, "reactive/scene/scene_test.mbt:611:3-611:49@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, leaf), _M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, mid) + 1 | 0, undefined, "reactive/scene/scene_test.mbt:612:3-612:51@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene10parent__of(s, mid) === p2;
  const _bind$9 = "new parent";
  const _bind$10 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:613:3-613:56@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const after = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, leaf);
  const missing = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test14missing__tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s), [before, after]);
  const _tmp$5 = missing.length === 0;
  const _bind$11 = "both old and new places must be damaged";
  const _bind$12 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:617:3-620:4@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGiE(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, "reparent").length, 0, undefined, "reactive/scene/scene_test.mbt:621:3-621:59@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(s, p2, leaf) === false;
  const _bind$14 = "a cycle must be refused";
  const _bind$15 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length), "reactive/scene/scene_test.mbt:623:3-623:76@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(s, 0, p1) === false;
  const _bind$16 = "the root cannot be reparented";
  const _bind$17 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length), "reactive/scene/scene_test.mbt:624:3-624:79@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  const _tmp$8 = _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(s, mid, 9999) === false;
  const _bind$18 = "a dead target must be refused";
  const _bind$19 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$18, 0, _bind$18.length), "reactive/scene/scene_test.mbt:625:3-628:4@lumen/tsumugi");
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _ok._0;
  } else {
    return _bind$19;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene10parent__of(s, p2), 0, "the refused reparent must not have moved anything", "reactive/scene/scene_test.mbt:629:3-633:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__7363656e655f746573742e6d6274__9() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 50, 50));
  const over = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(10, 10), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 50, 50));
  const tiny = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, over, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(30, 30), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 40, 40));
  const win = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(150, 100), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  _M0MP45lumen7tsumugi8reactive5scene5Scene9set__clip(s, win, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 40, 40));
  const item = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, win, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 200, 200));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 45, 45), tiny, undefined, "reactive/scene/scene_test.mbt:666:3-666:42@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 15, 15), over, undefined, "reactive/scene/scene_test.mbt:668:3-668:42@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 70, 70), tiny, undefined, "reactive/scene/scene_test.mbt:670:3-670:42@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 160, 110), item, undefined, "reactive/scene/scene_test.mbt:672:3-672:44@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 220, 110) !== item;
  const _bind$9 = "a clipped-out point must not hit the item";
  const _bind$10 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:673:3-676:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 250, 20), -1, undefined, "reactive/scene/scene_test.mbt:678:3-678:53@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, over, false);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 45, 45) !== tiny;
  const _bind$12 = "a hidden subtree must not be hittable";
  const _bind$13 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length), "reactive/scene/scene_test.mbt:682:3-685:4@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 45, 45) !== over;
  const _bind$14 = "nor the hidden node itself";
  const _bind$15 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length), "reactive/scene/scene_test.mbt:686:3-686:80@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__10() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const cur = new _M0TPB8MutLocalGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty()));
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 4000) {
      cur.val = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, cur.val, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0.01, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene18set__local__bounds(s, cur.val, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1, 1));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9depth__of(s, cur.val), 4001, undefined, "reactive/scene/scene_test.mbt:700:3-700:35@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const b0 = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, cur.val);
  const _tmp$4 = Math.abs(b0.min_x - 40) < 1e-06;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "leaf x = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, b0.min_x);
  const _bind$6 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$7 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "reactive/scene/scene_test.mbt:704:3-704:76@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _tmp$5 = Math.abs(b0.min_y) < 1e-09;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "leaf y before move = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, b0.min_y);
  const _bind$8 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$9 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length), "reactive/scene/scene_test.mbt:705:3-705:79@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, cur.val, 0, 1);
  const _bind$10 = "leaf move";
  const _bind$11 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/scene_test.mbt:706:3-706:57@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const b = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, cur.val);
  const _tmp$7 = Math.abs(b.min_y - 1) < 1e-09;
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "leaf y = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, b.min_y);
  const _bind$12 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _bind$13 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length), "reactive/scene/scene_test.mbt:709:3-709:73@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _tmp$8 = Math.abs(b.min_x - 40) < 1e-06;
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "leaf x after move = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, b.min_x);
  const _bind$14 = _M0MPB13StringBuilder10to__string(_string_builder$4);
  const _bind$15 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length), "reactive/scene/scene_test.mbt:710:3-713:4@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  const _tmp$9 = _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, 0, 5, 0);
  const _bind$16 = "root move";
  const _bind$17 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length), "reactive/scene/scene_test.mbt:715:3-715:55@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const b2 = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, cur.val);
  const _tmp$10 = Math.abs(b2.min_x - 45) < 1e-06;
  const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(31);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "descendant x after root move = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$5, b2.min_x);
  const _bind$18 = _M0MPB13StringBuilder10to__string(_string_builder$5);
  const _bind$19 = _M0FPB12assert__true(_tmp$10, new _M0TPC16string10StringView(_bind$18, 0, _bind$18.length), "reactive/scene/scene_test.mbt:718:3-721:4@lumen/tsumugi");
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _ok._0;
  } else {
    return _bind$19;
  }
  const _tmp$11 = _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, 1);
  const _bind$20 = "remove a deep chain";
  const _bind$21 = _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$20, 0, _bind$20.length), "reactive/scene/scene_test.mbt:723:3-723:59@lumen/tsumugi");
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _ok._0;
  } else {
    return _bind$21;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$12 = _M0MP45lumen7tsumugi8reactive5scene5Scene5alive(s, cur.val) === false;
  const _bind$22 = "the chain is gone";
  return _M0FPB12assert__true(_tmp$12, new _M0TPC16string10StringView(_bind$22, 0, _bind$22.length), "reactive/scene/scene_test.mbt:725:3-725:62@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__11() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const a = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const b = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(100, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const moved = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, a, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(5, 5), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  const deep = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, moved, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(1, 1), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 2, 2));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const before = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, deep);
  const _tmp$3 = Math.abs(before.min_x - 6) < 1e-12;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "deep x before = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, before.min_x);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:751:3-754:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene8reparent(s, moved, b);
  const _bind$7 = "reparent";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:755:3-755:52@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const after = _M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, deep);
  const _tmp$5 = Math.abs(after.min_x - 106) < 1e-12;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "deep x after = ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, after.min_x);
  const _bind$9 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:758:3-761:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGiE(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test20check__against__full(s, "equal-version reparent").length, 0, undefined, "reactive/scene/scene_test.mbt:762:3-762:73@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42____test__7363656e655f746573742e6d6274__12() {
  const s = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11make__scene();
  const group = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(20, 20), _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const leaf = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, group, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(4, 4), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, group);
  const _bind$5 = "the group starts visible";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/scene_test.mbt:771:3-771:67@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, leaf);
  const _bind$7 = "and so does its child";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/scene_test.mbt:772:3-772:63@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, group, false);
  const _bind$9 = "hide the group";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/scene_test.mbt:775:3-775:65@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, group) === false;
  const _bind$11 = "the group is hidden";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/scene_test.mbt:776:3-776:71@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, leaf) === false;
  const _bind$13 = "a child of a hidden group is hidden (inheritance)";
  const _bind$14 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/scene_test.mbt:777:3-780:4@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene8move__by(s, leaf, 5, 0);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$15 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s)), 0, "nothing was painted there, nothing repaints", "reactive/scene/scene_test.mbt:785:3-785:85@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  const _tmp$8 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene10damage__of(s, leaf));
  const _bind$16 = "damage_of agrees";
  const _bind$17 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$16, 0, _bind$16.length), "reactive/scene/scene_test.mbt:787:3-787:68@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  const _bind$18 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 29, 29), -1, "a hidden subtree is not hit", "reactive/scene/scene_test.mbt:788:3-788:75@lumen/tsumugi");
  if (_bind$18.$tag === 1) {
    const _ok = _bind$18;
    _ok._0;
  } else {
    return _bind$18;
  }
  const _tmp$9 = _M0MP45lumen7tsumugi8reactive5scene5Scene12set__visible(s, group, true);
  const _bind$19 = "show the group";
  const _bind$20 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$19, 0, _bind$19.length), "reactive/scene/scene_test.mbt:790:3-790:64@lumen/tsumugi");
  if (_bind$20.$tag === 1) {
    const _ok = _bind$20;
    _ok._0;
  } else {
    return _bind$20;
  }
  const _tmp$10 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, leaf);
  const _bind$21 = "the child is visible again";
  const _bind$22 = _M0FPB12assert__true(_tmp$10, new _M0TPC16string10StringView(_bind$21, 0, _bind$21.length), "reactive/scene/scene_test.mbt:791:3-791:68@lumen/tsumugi");
  if (_bind$22.$tag === 1) {
    const _ok = _bind$22;
    _ok._0;
  } else {
    return _bind$22;
  }
  const _bind$23 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene5Scene9hit__test(s, 29, 29), leaf, "and now it can be hit", "reactive/scene/scene_test.mbt:792:3-792:71@lumen/tsumugi");
  if (_bind$23.$tag === 1) {
    const _ok = _bind$23;
    _ok._0;
  } else {
    return _bind$23;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12remove__node(s, leaf);
  const _tmp$11 = _M0MP45lumen7tsumugi8reactive5scene5Scene11is__visible(s, leaf) === false;
  const _bind$24 = "a removed node is not visible";
  return _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$24, 0, _bind$24.length), "reactive/scene/scene_test.mbt:795:3-795:80@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12ascii__bytes(s) {
  return _M0FP45lumen7tsumugi8reactive5scene17bytes__of__string(s);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__0() {
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(4);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore11node__count(st), 4, undefined, "reactive/scene/ir_test.mbt:24:3-24:32@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore6stride(st), 10, undefined, "reactive/scene/ir_test.mbt:25:3-25:44@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 3), 1, undefined, "reactive/scene/ir_test.mbt:27:3-27:47@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 4), 1, undefined, "reactive/scene/ir_test.mbt:28:3-28:47@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 5), 1, undefined, "reactive/scene/ir_test.mbt:29:3-29:47@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 0), 0, undefined, "reactive/scene/ir_test.mbt:30:3-30:47@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 1, 0, 12);
  const _bind$11 = "first write changes";
  const _bind$12 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/ir_test.mbt:32:3-32:77@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 1, 0), 12, undefined, "reactive/scene/ir_test.mbt:33:3-33:48@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(st, 1, 0), 1, undefined, "reactive/scene/ir_test.mbt:34:3-34:50@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 1, 0, 12) === false;
  const _bind$15 = "identical write";
  const _bind$16 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length), "reactive/scene/ir_test.mbt:35:3-38:4@lumen/tsumugi");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _bind$17 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(st, 1, 0), 1, undefined, "reactive/scene/ir_test.mbt:39:3-39:50@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  const _bind$18 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 99, 0), 0, undefined, "reactive/scene/ir_test.mbt:41:3-41:48@lumen/tsumugi");
  if (_bind$18.$tag === 1) {
    const _ok = _bind$18;
    _ok._0;
  } else {
    return _bind$18;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 99, 0, 1) === false;
  const _bind$19 = "out of range write is refused";
  const _bind$20 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$19, 0, _bind$19.length), "reactive/scene/ir_test.mbt:42:3-45:4@lumen/tsumugi");
  if (_bind$20.$tag === 1) {
    const _ok = _bind$20;
    _ok._0;
  } else {
    return _bind$20;
  }
  const _bind$21 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(st, 99, 0), -1, undefined, "reactive/scene/ir_test.mbt:46:3-46:52@lumen/tsumugi");
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _ok._0;
  } else {
    return _bind$21;
  }
  _M0MP45lumen7tsumugi8reactive5scene7IrStore8grow__to(st, 8);
  const _bind$22 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 1, 0), 12, undefined, "reactive/scene/ir_test.mbt:49:3-49:48@lumen/tsumugi");
  if (_bind$22.$tag === 1) {
    const _ok = _bind$22;
    _ok._0;
  } else {
    return _bind$22;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore11node__count(st), 8, undefined, "reactive/scene/ir_test.mbt:50:3-50:32@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__1() {
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(2);
  const t = _M0MP45lumen7tsumugi8reactive5scene3Trs3new(3.5, -2.25, 0.75, 2, 0.5);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene7IrStore8set__trs(st, 0, t);
  const _bind$5 = "set_trs changes something";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/ir_test.mbt:57:3-57:65@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const back = _M0MP45lumen7tsumugi8reactive5scene7IrStore7trs__of(st, 0);
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene3Trs5equal(back, t);
  const _bind$7 = "trs round trip";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/ir_test.mbt:59:3-59:64@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene7IrStore8set__trs(st, 0, t) === false;
  const _bind$9 = "identical trs is a no-op";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/ir_test.mbt:60:3-60:73@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const clip = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(1, 2, 30, 40);
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene7IrStore9set__clip(st, 0, clip);
  const _bind$11 = "set_clip";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/ir_test.mbt:62:3-62:52@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(st, 0), clip, undefined, "reactive/scene/ir_test.mbt:63:3-63:33@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene7IrStore9has__clip(st, 1) === false;
  const _bind$14 = "default clip means no clip";
  const _bind$15 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length), "reactive/scene/ir_test.mbt:66:3-66:73@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  return _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(st, 1), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 0, 0), undefined, "reactive/scene/ir_test.mbt:67:3-67:67@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__2() {
  const s = _M0MP45lumen7tsumugi8reactive5scene5Scene3new(_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 128, 128), 16);
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(2);
  const n = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(4, 4), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 16, 16));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene7IrStore20publish__from__scene(st, s, n);
  const _bind$5 = "first publish writes the defaults";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/ir_test.mbt:82:3-85:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene7IrStore20publish__from__scene(st, s, n) === false;
  const _bind$7 = "second publish changes nothing";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/ir_test.mbt:86:3-89:4@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st, s, n) === false;
  const _bind$9 = "applying what we published is a no-op";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/ir_test.mbt:90:3-93:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s));
  const _bind$11 = "an idempotent round trip must damage nothing";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/ir_test.mbt:96:3-99:4@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, n, 0, 40);
  const _bind$13 = "js-side edit";
  const _bind$14 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/ir_test.mbt:101:3-101:70@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _tmp$8 = _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st, s, n);
  const _bind$15 = "the edit reaches the scene";
  const _bind$16 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length), "reactive/scene/ir_test.mbt:102:3-102:73@lumen/tsumugi");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const stt = _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$9 = stt.pre_rects >= 1 && stt.post_rects >= 1;
  const _bind$17 = "the node moved, so both ends are damaged";
  const _bind$18 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$17, 0, _bind$17.length), "reactive/scene/ir_test.mbt:104:3-107:4@lumen/tsumugi");
  if (_bind$18.$tag === 1) {
    const _ok = _bind$18;
    _ok._0;
  } else {
    return _bind$18;
  }
  const _bind$19 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, n).min_x, 40, undefined, "reactive/scene/ir_test.mbt:108:3-108:40@lumen/tsumugi");
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _ok._0;
  } else {
    return _bind$19;
  }
  const _tmp$10 = _M0MP45lumen7tsumugi8reactive5scene7IrStore9set__clip(st, n, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 8, 8));
  const _bind$20 = "clip edit";
  const _bind$21 = _M0FPB12assert__true(_tmp$10, new _M0TPC16string10StringView(_bind$20, 0, _bind$20.length), "reactive/scene/ir_test.mbt:110:3-113:4@lumen/tsumugi");
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _ok._0;
  } else {
    return _bind$21;
  }
  const _tmp$11 = _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st, s, n);
  const _bind$22 = "clip reaches the scene";
  const _bind$23 = _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$22, 0, _bind$22.length), "reactive/scene/ir_test.mbt:114:3-114:69@lumen/tsumugi");
  if (_bind$23.$tag === 1) {
    const _ok = _bind$23;
    _ok._0;
  } else {
    return _bind$23;
  }
  const _tmp$12 = _M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(s, n);
  const _bind$24 = "the scene node now has a clip";
  const _bind$25 = _M0FPB12assert__true(_tmp$12, new _M0TPC16string10StringView(_bind$24, 0, _bind$24.length), "reactive/scene/ir_test.mbt:115:3-115:66@lumen/tsumugi");
  if (_bind$25.$tag === 1) {
    const _ok = _bind$25;
    _ok._0;
  } else {
    return _bind$25;
  }
  const _tmp$13 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi8reactive5scene7IrStore8clip__of(st, n)) === false;
  const _bind$26 = "and the store still has it";
  const _bind$27 = _M0FPB12assert__true(_tmp$13, new _M0TPC16string10StringView(_bind$26, 0, _bind$26.length), "reactive/scene/ir_test.mbt:116:3-119:4@lumen/tsumugi");
  if (_bind$27.$tag === 1) {
    const _ok = _bind$27;
    _ok._0;
  } else {
    return _bind$27;
  }
  const _tmp$14 = _M0MP45lumen7tsumugi8reactive5scene7IrStore9set__clip(st, n, _M0MP45lumen7tsumugi8reactive5scene7IrStore8no__clip());
  const _bind$28 = "clear clip from the store";
  const _bind$29 = _M0FPB12assert__true(_tmp$14, new _M0TPC16string10StringView(_bind$28, 0, _bind$28.length), "reactive/scene/ir_test.mbt:122:3-125:4@lumen/tsumugi");
  if (_bind$29.$tag === 1) {
    const _ok = _bind$29;
    _ok._0;
  } else {
    return _bind$29;
  }
  const _tmp$15 = _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st, s, n);
  const _bind$30 = "applies";
  const _bind$31 = _M0FPB12assert__true(_tmp$15, new _M0TPC16string10StringView(_bind$30, 0, _bind$30.length), "reactive/scene/ir_test.mbt:126:3-126:54@lumen/tsumugi");
  if (_bind$31.$tag === 1) {
    const _ok = _bind$31;
    _ok._0;
  } else {
    return _bind$31;
  }
  const _tmp$16 = _M0MP45lumen7tsumugi8reactive5scene5Scene9has__clip(s, n) === false;
  const _bind$32 = "the clip is gone";
  const _bind$33 = _M0FPB12assert__true(_tmp$16, new _M0TPC16string10StringView(_bind$32, 0, _bind$32.length), "reactive/scene/ir_test.mbt:127:3-127:62@lumen/tsumugi");
  if (_bind$33.$tag === 1) {
    const _ok = _bind$33;
    _ok._0;
  } else {
    return _bind$33;
  }
  const _tmp$17 = _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, n, 0, 41);
  const _bind$34 = "move again";
  const _bind$35 = _M0FPB12assert__true(_tmp$17, new _M0TPC16string10StringView(_bind$34, 0, _bind$34.length), "reactive/scene/ir_test.mbt:128:3-128:68@lumen/tsumugi");
  if (_bind$35.$tag === 1) {
    const _ok = _bind$35;
    _ok._0;
  } else {
    return _bind$35;
  }
  _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st, s, n);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _tmp$18 = _M0MP45lumen7tsumugi8reactive5scene7IrStore20publish__from__scene(st, s, n) === false;
  const _bind$36 = "the store already agrees with the scene";
  return _M0FPB12assert__true(_tmp$18, new _M0TPC16string10StringView(_bind$36, 0, _bind$36.length), "reactive/scene/ir_test.mbt:131:3-134:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__3() {
  const g = _M0MP45lumen7tsumugi8reactive6signal5Graph3newGdE();
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(2);
  const bridge = _M0MP45lumen7tsumugi8reactive5scene8IrBridge3new();
  const sx = _M0MP45lumen7tsumugi8reactive6signal5Graph6sourceGdE(g, 1);
  const px = _M0MP45lumen7tsumugi8reactive6signal5Graph6sourceGdE(g, 0);
  _M0MP45lumen7tsumugi8reactive5scene8IrBridge4bind(bridge, g, st, 0, 0, px);
  _M0MP45lumen7tsumugi8reactive5scene8IrBridge4bind(bridge, g, st, 0, 3, sx);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge5count(bridge), 2, undefined, "reactive/scene/ir_test.mbt:146:3-146:31@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:148:3-148:42@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4pull(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:149:3-149:35@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:150:3-150:35@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(g, px, 12.5);
  _M0MP45lumen7tsumugi8reactive6signal5Graph5flushGdE(g, undefined);
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(bridge, g, st), 1, undefined, "reactive/scene/ir_test.mbt:154:3-154:42@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4pull(bridge, g, st), 1, undefined, "reactive/scene/ir_test.mbt:155:3-155:35@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 0), 12.5, undefined, "reactive/scene/ir_test.mbt:156:3-156:48@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:158:3-158:42@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4pull(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:159:3-159:35@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:160:3-160:35@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore6writes(st), 1, undefined, "reactive/scene/ir_test.mbt:161:3-161:28@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__4() {
  const g = _M0MP45lumen7tsumugi8reactive6signal5Graph3newGdE();
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(1);
  const bridge = _M0MP45lumen7tsumugi8reactive5scene8IrBridge3new();
  const sig = _M0MP45lumen7tsumugi8reactive6signal5Graph6sourceGdE(g, 0);
  const link = _M0MP45lumen7tsumugi8reactive5scene8IrBridge4bind(bridge, g, st, 0, 0, sig);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:171:3-171:35@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 0, 0, 5);
  _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(g, sig, 9);
  _M0MP45lumen7tsumugi8reactive6signal5Graph5flushGdE(g, undefined);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:177:3-177:35@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 0), 9, undefined, "reactive/scene/ir_test.mbt:178:3-178:47@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive6signal5Graph3getGdE(g, sig), 9, undefined, "reactive/scene/ir_test.mbt:179:3-179:29@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:180:3-180:42@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  _M0MP45lumen7tsumugi8reactive5scene8IrBridge15set__prefer__ir(bridge, link, true);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 0, 0, 20);
  _M0MP45lumen7tsumugi8reactive6signal5Graph3setGdE(g, sig, 30);
  _M0MP45lumen7tsumugi8reactive6signal5Graph5flushGdE(g, undefined);
  const _bind$10 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge4push(bridge, g, st), 1, undefined, "reactive/scene/ir_test.mbt:186:3-186:35@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive6signal5Graph3getGdE(g, sig), 20, undefined, "reactive/scene/ir_test.mbt:187:3-187:30@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(st, 0, 0), 20, undefined, "reactive/scene/ir_test.mbt:188:3-188:48@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene8IrBridge12dirty__links(bridge, g, st), 0, undefined, "reactive/scene/ir_test.mbt:189:3-189:42@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const s = _M0MP45lumen7tsumugi8reactive5scene5Scene3new(_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 128, 128), 16);
  const st_scene = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(2);
  const node = _M0MP45lumen7tsumugi8reactive5scene5Scene9add__node(s, 0, _M0MP45lumen7tsumugi8reactive5scene3Trs2at(0, 0), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 8, 8));
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  _M0MP45lumen7tsumugi8reactive5scene5Scene12begin__frame(s);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st_scene, node, 0, 20);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore16apply__to__scene(st_scene, s, node);
  _M0MP45lumen7tsumugi8reactive5scene5Scene5flush(s);
  const _bind$14 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene5Scene10bounds__of(s, node).min_x, 20, undefined, "reactive/scene/ir_test.mbt:204:3-204:43@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(_M0MP45lumen7tsumugi8reactive5scene5Scene5dirty(s)) === false;
  const _bind$15 = "the move damaged the two positions";
  return _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$15, 0, _bind$15.length), "reactive/scene/ir_test.mbt:205:3-208:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__5() {
  const crc = _M0MP45lumen7tsumugi4core4base5Crc323new();
  const digits = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12ascii__bytes("123456789");
  const v = _M0MP45lumen7tsumugi4core4base5Crc322of(crc, digits, 0, 9);
  const buf = $makebytes(8, _M0MPC14uint4UInt8to__byte(0));
  _M0FP45lumen7tsumugi4core4base12put__u32__le(buf, 0, v);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(0 >>> 0 < buf.length ? buf[0] : $oob(), 38, undefined, "reactive/scene/ir_test.mbt:224:3-224:35@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(1 >>> 0 < buf.length ? buf[1] : $oob(), 57, undefined, "reactive/scene/ir_test.mbt:225:3-225:35@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(2 >>> 0 < buf.length ? buf[2] : $oob(), 244, undefined, "reactive/scene/ir_test.mbt:226:3-226:35@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(3 >>> 0 < buf.length ? buf[3] : $oob(), 203, undefined, "reactive/scene/ir_test.mbt:227:3-227:35@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$3 = _M0MP45lumen7tsumugi4core4base5Crc322of(crc, _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12ascii__bytes("12345678A"), 0, 9) !== v;
  const _bind$9 = "crc must depend on the data";
  return _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/ir_test.mbt:229:3-232:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test35____test__69725f746573742e6d6274__6() {
  const st = _M0MP45lumen7tsumugi8reactive5scene7IrStore3new(3);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 0, 0, 1.5);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 1, 1, -2.25);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 2, 5, 0.5);
  _M0MP45lumen7tsumugi8reactive5scene7IrStore3set(st, 2, 8, 64);
  const size = _M0FP45lumen7tsumugi8reactive5scene17ir__encoded__size(3);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(size, 264, undefined, "reactive/scene/ir_test.mbt:243:3-243:64@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const buf = $makebytes(size, _M0MPC14uint4UInt8to__byte(0));
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore12encode__into(st, buf), size, undefined, "reactive/scene/ir_test.mbt:248:3-248:39@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0FP45lumen7tsumugi4core4base12get__u32__le(buf, 0), 1196249940, undefined, "reactive/scene/ir_test.mbt:250:3-250:55@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(4 >>> 0 < buf.length ? buf[4] : $oob(), 1, undefined, "reactive/scene/ir_test.mbt:251:3-251:48@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(6 >>> 0 < buf.length ? buf[6] : $oob(), 10, undefined, "reactive/scene/ir_test.mbt:252:3-252:48@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGiE(31 >>> 0 < buf.length ? buf[31] : $oob(), 63, undefined, "reactive/scene/ir_test.mbt:255:3-255:54@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGiE(30 >>> 0 < buf.length ? buf[30] : $oob(), 248, undefined, "reactive/scene/ir_test.mbt:256:3-256:54@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi8reactive5scene12get__f64__le(buf, 24), 1.5, undefined, "reactive/scene/ir_test.mbt:257:3-257:59@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const back = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(buf);
  let d;
  _L: {
    _L$2: {
      if (back === undefined) {
        const _bind$13 = "a valid buffer must decode";
        const _bind$14 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/ir_test.mbt:260:13-260:47@lumen/tsumugi");
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          _ok._0;
        } else {
          return _bind$14;
        }
      } else {
        const _Some = back;
        const _d = _Some;
        d = _d;
        break _L$2;
      }
      break _L;
    }
    const _bind$13 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore11node__count(d), 3, undefined, "reactive/scene/ir_test.mbt:262:7-262:35@lumen/tsumugi");
    if (_bind$13.$tag === 1) {
      const _ok = _bind$13;
      _ok._0;
    } else {
      return _bind$13;
    }
    const _bind$14 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(d, 0, 0), 1.5, undefined, "reactive/scene/ir_test.mbt:263:7-263:50@lumen/tsumugi");
    if (_bind$14.$tag === 1) {
      const _ok = _bind$14;
      _ok._0;
    } else {
      return _bind$14;
    }
    const _bind$15 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(d, 1, 1), -2.25, undefined, "reactive/scene/ir_test.mbt:264:7-264:52@lumen/tsumugi");
    if (_bind$15.$tag === 1) {
      const _ok = _bind$15;
      _ok._0;
    } else {
      return _bind$15;
    }
    const _bind$16 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(d, 2, 5), 0.5, undefined, "reactive/scene/ir_test.mbt:265:7-265:50@lumen/tsumugi");
    if (_bind$16.$tag === 1) {
      const _ok = _bind$16;
      _ok._0;
    } else {
      return _bind$16;
    }
    const _bind$17 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi8reactive5scene7IrStore3get(d, 2, 8), 64, undefined, "reactive/scene/ir_test.mbt:266:7-266:54@lumen/tsumugi");
    if (_bind$17.$tag === 1) {
      const _ok = _bind$17;
      _ok._0;
    } else {
      return _bind$17;
    }
    const _bind$18 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore9stamp__of(d, 0, 0), 0, undefined, "reactive/scene/ir_test.mbt:268:7-268:53@lumen/tsumugi");
    if (_bind$18.$tag === 1) {
      const _ok = _bind$18;
      _ok._0;
    } else {
      return _bind$18;
    }
  }
  const bad = $makebytes(size, _M0MPC14uint4UInt8to__byte(0));
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < size) {
      if (i >>> 0 < bad.length) {
        bad[i] = i >>> 0 < buf.length ? buf[i] : $oob();
      } else {
        $oob();
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (26 >>> 0 < bad.length) {
    bad[26] = _M0MPC14uint4UInt8to__byte(127);
  } else {
    $oob();
  }
  const _bind$13 = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(bad);
  const _tmp$4 = _bind$13 === undefined;
  const _bind$14 = "a flipped payload byte must be rejected";
  const _bind$15 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$14, 0, _bind$14.length), "reactive/scene/ir_test.mbt:280:3-283:4@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  const bad2 = $makebytes(size, _M0MPC14uint4UInt8to__byte(0));
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < size) {
      if (i >>> 0 < bad2.length) {
        bad2[i] = i >>> 0 < buf.length ? buf[i] : $oob();
      } else {
        $oob();
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (0 >>> 0 < bad2.length) {
    bad2[0] = _M0MPC14uint4UInt8to__byte(0);
  } else {
    $oob();
  }
  const _bind$16 = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(bad2);
  const _tmp$6 = _bind$16 === undefined;
  const _bind$17 = "a wrong magic must be rejected";
  const _bind$18 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$17, 0, _bind$17.length), "reactive/scene/ir_test.mbt:293:3-296:4@lumen/tsumugi");
  if (_bind$18.$tag === 1) {
    const _ok = _bind$18;
    _ok._0;
  } else {
    return _bind$18;
  }
  const bad3 = $makebytes(size, _M0MPC14uint4UInt8to__byte(0));
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < size) {
      if (i >>> 0 < bad3.length) {
        bad3[i] = i >>> 0 < buf.length ? buf[i] : $oob();
      } else {
        $oob();
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (4 >>> 0 < bad3.length) {
    bad3[4] = _M0MPC14uint4UInt8to__byte(99);
  } else {
    $oob();
  }
  const _bind$19 = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(bad3);
  const _tmp$8 = _bind$19 === undefined;
  const _bind$20 = "a wrong version must be rejected";
  const _bind$21 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$20, 0, _bind$20.length), "reactive/scene/ir_test.mbt:305:3-308:4@lumen/tsumugi");
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _ok._0;
  } else {
    return _bind$21;
  }
  const eight = $makebytes(8, _M0MPC14uint4UInt8to__byte(0));
  const _bind$22 = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(eight);
  const _tmp$9 = _bind$22 === undefined;
  const _bind$23 = "short header";
  const _bind$24 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$23, 0, _bind$23.length), "reactive/scene/ir_test.mbt:314:3-314:78@lumen/tsumugi");
  if (_bind$24.$tag === 1) {
    const _ok = _bind$24;
    _ok._0;
  } else {
    return _bind$24;
  }
  const short = $makebytes(size - 8 | 0, _M0MPC14uint4UInt8to__byte(0));
  let _tmp$10 = 0;
  while (true) {
    const i = _tmp$10;
    if (i < short.length) {
      if (i >>> 0 < short.length) {
        short[i] = i >>> 0 < buf.length ? buf[i] : $oob();
      } else {
        $oob();
      }
      _tmp$10 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$25 = _M0MP45lumen7tsumugi8reactive5scene7IrStore12decode__from(short);
  const _tmp$11 = _bind$25 === undefined;
  const _bind$26 = "truncated payload";
  const _bind$27 = _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$26, 0, _bind$26.length), "reactive/scene/ir_test.mbt:322:3-325:4@lumen/tsumugi");
  if (_bind$27.$tag === 1) {
    const _ok = _bind$27;
    _ok._0;
  } else {
    return _bind$27;
  }
  const tiny = $makebytes(24, _M0MPC14uint4UInt8to__byte(0));
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene7IrStore12encode__into(st, tiny), 0, undefined, "reactive/scene/ir_test.mbt:331:3-331:37@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12naive__tiles(b, vp, tile, cols, rows) {
  const out = [];
  const c = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(b, vp);
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(c)) {
    return out;
  }
  const tf = tile + 0;
  const eps = 1e-09;
  const x0 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((c.min_x - vp.min_x) / tf));
  const x1 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((c.max_x - eps - vp.min_x) / tf));
  const y0 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((c.min_y - vp.min_y) / tf));
  const y1 = _M0MPC16double6Double7to__int(_M0MPC16double6Double5floor((c.max_y - eps - vp.min_y) / tf));
  if (x1 < x0 || y1 < y0) {
    return out;
  }
  let _tmp$3 = y0;
  while (true) {
    const ty = _tmp$3;
    if (ty <= y1) {
      let _tmp$4 = x0;
      while (true) {
        const tx = _tmp$4;
        if (tx <= x1) {
          if (tx >= 0 && (ty >= 0 && (tx < cols && ty < rows))) {
            _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, { _0: tx, _1: ty });
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
  return out;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(r) {
  const out = [];
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion15for__each__tile(r, (tx, ty) => {
    _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(out, { _0: tx, _1: ty });
  });
  return out;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tile__key(t) {
  return (Math.imul(t._0, 100000) | 0) + t._1 | 0;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12sorted__keys(ts) {
  const ks = [];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < ts.length) {
      _M0MPC15array5Array4pushGiE(ks, _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tile__key(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(ts, i)));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4sortGiE(ks);
  const out = [];
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < ks.length) {
      if (i === 0 || _M0MPC15array5Array2atGiE(ks, i) !== _M0MPC15array5Array2atGiE(ks, i - 1 | 0)) {
        _M0MPC15array5Array4pushGiE(out, _M0MPC15array5Array2atGiE(ks, i));
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11same__tiles(a, b) {
  const ka = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12sorted__keys(a);
  const kb = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12sorted__keys(b);
  if (ka.length !== kb.length) {
    return false;
  }
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < ka.length) {
      if (_M0MPC15array5Array2atGiE(ka, i) !== _M0MPC15array5Array2atGiE(kb, i)) {
        return false;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp() {
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 256, 192);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__0() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(r), 16, undefined, "reactive/scene/dirty_test.mbt:105:3-105:26@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(r), 12, undefined, "reactive/scene/dirty_test.mbt:106:3-106:26@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const boxes = [_M0MP45lumen7tsumugi5algos7spatial4Aabb3new(3, 5, 40, 20), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(200, 100, 255, 191), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(16, 16, 32, 32), _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(128, 64, 128, 64)];
  const want = [];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < boxes.length) {
      _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(boxes, i));
      const _bind$7 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12naive__tiles(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(boxes, i), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16, _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(r), _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(r));
      const _bind$8 = _bind$7.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$8) {
          const t = _bind$7[_];
          _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(want, t);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11same__tiles(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(r), want);
  const _bind$7 = "dirty tiles != brute force rasterisation";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:121:3-124:4@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12sorted__keys(want).length, undefined, "reactive/scene/dirty_test.mbt:125:3-125:51@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const b = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(r);
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < boxes.length) {
      const c = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(boxes, i), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp());
      const _tmp$6 = c.min_x >= b.min_x && (c.max_x <= b.max_x && (c.min_y >= b.min_y && c.max_y <= b.max_y));
      const _bind$10 = "bounds must contain every clipped input";
      const _bind$11 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/dirty_test.mbt:130:5-136:6@lumen/tsumugi");
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__1() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(-100, -100, -1, -1));
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(r);
  const _bind$5 = "a box off the viewport must not dirty anything";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/dirty_test.mbt:144:3-147:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(r.adds, 0, undefined, "reactive/scene/dirty_test.mbt:148:3-148:23@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(250, 185, 1000, 1000));
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), 1, undefined, "reactive/scene/dirty_test.mbt:150:3-150:26@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const b = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6bounds(r);
  const _bind$9 = _M0FPC15debug10assert__eqGdE(b.max_x, 256, undefined, "reactive/scene/dirty_test.mbt:152:3-152:28@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGdE(b.max_y, 192, undefined, "reactive/scene/dirty_test.mbt:153:3-153:28@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGdE(b.min_x, 240, undefined, "reactive/scene/dirty_test.mbt:154:3-154:28@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPC15debug10assert__eqGdE(b.min_y, 176, undefined, "reactive/scene/dirty_test.mbt:155:3-155:28@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__2() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 10, 20, 20));
  const _tmp$3 = !_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion8is__full(r);
  const _bind$5 = "one tile is not full damage";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/dirty_test.mbt:162:3-162:63@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp());
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion8is__full(r);
  const _bind$7 = "viewport damage is full damage";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:164:3-164:65@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), Math.imul(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4cols(r), _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion4rows(r)) | 0, undefined, "reactive/scene/dirty_test.mbt:165:3-165:44@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), 192, undefined, "reactive/scene/dirty_test.mbt:166:3-166:28@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(r, 0, 0);
  const _bind$11 = "full damage covers every tile";
  const _bind$12 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/dirty_test.mbt:168:3-168:72@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(r, 15, 11);
  const _bind$13 = "full damage covers the last tile";
  const _bind$14 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/dirty_test.mbt:169:3-169:77@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FPB12assert__true(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(60, 60, 70, 70)), undefined, "reactive/scene/dirty_test.mbt:170:3-170:68@lumen/tsumugi");
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _ok._0;
  } else {
    return _bind$15;
  }
  const rects = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9to__rects(r);
  const _bind$16 = _M0FPC15debug10assert__eqGiE(rects.length, 1, undefined, "reactive/scene/dirty_test.mbt:172:3-172:31@lumen/tsumugi");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _bind$17 = _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, 0), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), undefined, "reactive/scene/dirty_test.mbt:173:3-173:28@lumen/tsumugi");
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _ok._0;
  } else {
    return _bind$17;
  }
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5clear(r);
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9is__empty(r);
  const _bind$18 = "clear must empty the region";
  const _bind$19 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$18, 0, _bind$18.length), "reactive/scene/dirty_test.mbt:176:3-176:63@lumen/tsumugi");
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _ok._0;
  } else {
    return _bind$19;
  }
  const _bind$20 = _M0FPB12assert__true(!_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion8is__full(r), undefined, "reactive/scene/dirty_test.mbt:177:3-177:28@lumen/tsumugi");
  if (_bind$20.$tag === 1) {
    const _ok = _bind$20;
    _ok._0;
  } else {
    return _bind$20;
  }
  const _tmp$8 = !_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion13is__tile__set(r, 3, 3);
  const _bind$21 = "clear must clear the tile bits";
  const _bind$22 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$21, 0, _bind$21.length), "reactive/scene/dirty_test.mbt:178:3-178:74@lumen/tsumugi");
  if (_bind$22.$tag === 1) {
    const _ok = _bind$22;
    _ok._0;
  } else {
    return _bind$22;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), 0, undefined, "reactive/scene/dirty_test.mbt:179:3-179:26@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__3() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 48, 32));
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(80, 0, 96, 16));
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 64, 16, 80));
  let _tmp$3 = 0;
  while (true) {
    const tx = _tmp$3;
    if (tx < 6) {
      let _tmp$4 = 6;
      while (true) {
        const ty = _tmp$4;
        if (ty < 10) {
          if (2 === 0) {
            $panic();
          }
          if (((tx + ty | 0) % 2 | 0) === 0) {
            const x = 128 + ((Math.imul(tx, 16) | 0) + 0);
            const y = (Math.imul(ty, 16) | 0) + 0;
            _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + 16, y + 16));
          }
          _tmp$4 = ty + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = tx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const rects = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9to__rects(r);
  const _tmp$4 = rects.length < _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r);
  const _bind$5 = "coalescing should reduce the rect count";
  const _bind$6 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/dirty_test.mbt:199:3-202:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  let _tmp$5 = 0;
  while (true) {
    const i = _tmp$5;
    if (i < rects.length) {
      const b = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, i);
      const _tmp$6 = b.min_x >= 0 && b.max_y <= 192;
      const _bind$7 = "rect inside viewport";
      const _bind$8 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:206:5-206:80@lumen/tsumugi");
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _ok._0;
      } else {
        return _bind$8;
      }
      const _tmp$7 = _M0MPC16double6Double5floor(b.min_x / 16) * 16 === b.min_x;
      const _bind$9 = "rect must be tile aligned in x";
      const _bind$10 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/dirty_test.mbt:207:5-210:6@lumen/tsumugi");
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _ok._0;
      } else {
        return _bind$10;
      }
      const _tmp$8 = _M0MPC16double6Double5floor(b.min_y / 16) * 16 === b.min_y;
      const _bind$11 = "rect must be tile aligned in y";
      const _bind$12 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/dirty_test.mbt:211:5-214:6@lumen/tsumugi");
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        _ok._0;
      } else {
        return _bind$12;
      }
      _tmp$5 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const back = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < rects.length) {
      _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(back, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, i));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$7 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11same__tiles(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(back), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(r));
  const _bind$7 = "rects are not an exact cover";
  const _bind$8 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:221:3-224:4@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(back), _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), undefined, "reactive/scene/dirty_test.mbt:225:3-225:37@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$8;
    if (i < rects.length) {
      let _tmp$9 = i + 1 | 0;
      while (true) {
        const j = _tmp$9;
        if (j < rects.length) {
          const inter = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, i), _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, j));
          const _tmp$10 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(inter) || (_M0MP45lumen7tsumugi5algos7spatial4Aabb5width(inter) === 0 || _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(inter) === 0);
          const _bind$10 = "merged rectangles must not overlap with positive area";
          const _bind$11 = _M0FPB12assert__true(_tmp$10, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/dirty_test.mbt:232:7-235:8@lumen/tsumugi");
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _ok._0;
          } else {
            return _bind$11;
          }
          _tmp$9 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$9 = 0;
  while (true) {
    const i = _tmp$9;
    if (i < rects.length) {
      let _tmp$10 = 0;
      while (true) {
        const j = _tmp$10;
        if (j < rects.length) {
          _L: {
            if (i === j) {
              break _L;
            }
            const a = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, i);
            const b = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(rects, j);
            const fusable = a.min_x === b.min_x && (a.max_x === b.max_x && a.max_y === b.min_y);
            const _tmp$11 = !fusable;
            const _bind$10 = "two stacked rects with the same x extent should have merged";
            const _bind$11 = _M0FPB12assert__true(_tmp$11, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/dirty_test.mbt:249:7-252:8@lumen/tsumugi");
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              _ok._0;
            } else {
              return _bind$11;
            }
            break _L;
          }
          _tmp$10 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$9 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__4() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 10, 20, 20);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, b);
  const t1 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, b);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(r), t1, undefined, "reactive/scene/dirty_test.mbt:264:3-264:27@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(r.adds, 2, undefined, "reactive/scene/dirty_test.mbt:265:3-265:23@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const r2 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < 30) {
      if (8 === 0) {
        $panic();
      }
      const x = (Math.imul(i % 8 | 0, 32) | 0) + 0;
      if (8 === 0) {
        $panic();
      }
      const y = (Math.imul(i / 8 | 0, 48) | 0) + 0;
      _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r2, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + 8, y + 8));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion10overflowed(r2);
  const _bind$7 = "30 rects must overflow a cap of 16";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:273:3-273:73@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion14scissor__count(r2), 1, undefined, "reactive/scene/dirty_test.mbt:274:3-274:35@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const pr = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion12pixel__rects(r2);
  const _bind$10 = _M0FPC15debug10assert__eqGiE(pr.length, 1, undefined, "reactive/scene/dirty_test.mbt:276:3-276:28@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPB12assert__true(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r2, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 8, 8)), undefined, "reactive/scene/dirty_test.mbt:278:3-278:65@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPB12assert__true(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r2, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(224, 96, 232, 104)), undefined, "reactive/scene/dirty_test.mbt:279:3-279:72@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__5() {
  const a = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(a, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 32, 32));
  const b = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(b, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(240, 176, 256, 192));
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(b, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(16, 16, 32, 32));
  const want = [];
  const _bind$5 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(a);
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const t = _bind$5[_];
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(want, t);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$7 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(b);
  const _bind$8 = _bind$7.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$8) {
      const t = _bind$7[_];
      _M0MPC15array5Array4pushGRP45lumen7tsumugi5algos7spatial4AabbE(want, t);
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion11add__region(a, b);
  const _tmp$5 = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test11same__tiles(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test9tiles__of(a), want);
  const _bind$9 = "add_region must be the set union";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/dirty_test.mbt:297:3-300:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(a), _M0FP45lumen7tsumugi8reactive21scene__blackbox__test12sorted__keys(want).length, undefined, "reactive/scene/dirty_test.mbt:301:3-301:51@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP45lumen7tsumugi8reactive5scene11DirtyRegion5tiles(a), 5, undefined, "reactive/scene/dirty_test.mbt:302:3-302:26@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__6() {
  const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(-2, -1, 3, 4);
  const cases = [_M0MP45lumen7tsumugi4core4math6Mat2x38identity(), _M0MP45lumen7tsumugi4core4math6Mat2x39translate(10, -5), _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(0), _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(0.785398163397448279), _M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x36rotate(1.1), _M0MP45lumen7tsumugi4core4math6Mat2x35scale(2, 0.5)), _M0MP45lumen7tsumugi4core4math6Mat2x34skew(0.4, 0), _M0MP45lumen7tsumugi4core4math6Mat2x33new(1.3, -0.7, 0.9, 1.1, 4, 2)];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < cases.length) {
      const m = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(cases, i);
      const got = _M0FP45lumen7tsumugi8reactive5scene17transform__bounds(b, m);
      let _tmp$4 = 0;
      while (true) {
        const ix = _tmp$4;
        if (ix <= 20) {
          let _tmp$5 = 0;
          while (true) {
            const iy = _tmp$5;
            if (iy <= 20) {
              const x = b.min_x + (b.max_x - b.min_x) * (ix + 0) / 20;
              const y = b.min_y + (b.max_y - b.min_y) * (iy + 0) / 20;
              const p = _M0MP45lumen7tsumugi4core4math6Mat2x35apply(m, _M0MP45lumen7tsumugi4core4math4Vec23new(x, y));
              const _tmp$6 = p.x >= got.min_x - 1e-09 && (p.x <= got.max_x + 1e-09 && (p.y >= got.min_y - 1e-09 && p.y <= got.max_y + 1e-09));
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(44);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "transformed point escaped the bound at case ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
              const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
              const _bind$6 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/dirty_test.mbt:327:9-333:10@lumen/tsumugi");
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
              _tmp$5 = iy + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$4 = ix + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const corners = [_M0MP45lumen7tsumugi4core4math4Vec23new(b.min_x, b.min_y), _M0MP45lumen7tsumugi4core4math4Vec23new(b.max_x, b.min_y), _M0MP45lumen7tsumugi4core4math4Vec23new(b.min_x, b.max_y), _M0MP45lumen7tsumugi4core4math4Vec23new(b.max_x, b.max_y)];
      const cx_min = new _M0TPB8MutLocalGdE(1e+308);
      const cx_max = new _M0TPB8MutLocalGdE(-1e+308);
      const cy_min = new _M0TPB8MutLocalGdE(1e+308);
      const cy_max = new _M0TPB8MutLocalGdE(-1e+308);
      const _bind$5 = corners.length;
      let _tmp$5 = 0;
      while (true) {
        const _ = _tmp$5;
        if (_ < _bind$5) {
          const c = corners[_];
          const p = _M0MP45lumen7tsumugi4core4math6Mat2x35apply(m, c);
          cx_min.val = _M0MPC16double6Double3min(cx_min.val, p.x);
          cx_max.val = _M0MPC16double6Double3max(cx_max.val, p.x);
          cy_min.val = _M0MPC16double6Double3min(cy_min.val, p.y);
          cy_max.val = _M0MPC16double6Double3max(cy_max.val, p.y);
          _tmp$5 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$6 = Math.abs(cx_min.val - got.min_x) < 1e-09;
      const _bind$6 = "left edge not tight";
      const _bind$7 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "reactive/scene/dirty_test.mbt:354:5-354:80@lumen/tsumugi");
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _ok._0;
      } else {
        return _bind$7;
      }
      const _tmp$7 = Math.abs(cx_max.val - got.max_x) < 1e-09;
      const _bind$8 = "right edge not tight";
      const _bind$9 = _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length), "reactive/scene/dirty_test.mbt:355:5-355:81@lumen/tsumugi");
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        return _bind$9;
      }
      const _tmp$8 = Math.abs(cy_min.val - got.min_y) < 1e-09;
      const _bind$10 = "top edge not tight";
      const _bind$11 = _M0FPB12assert__true(_tmp$8, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "reactive/scene/dirty_test.mbt:356:5-356:79@lumen/tsumugi");
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      const _tmp$9 = Math.abs(cy_max.val - got.max_y) < 1e-09;
      const _bind$12 = "bottom edge not tight";
      const _bind$13 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length), "reactive/scene/dirty_test.mbt:357:5-360:6@lumen/tsumugi");
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _ok._0;
      } else {
        return _bind$13;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0FP45lumen7tsumugi8reactive5scene17transform__bounds(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(0.3))), undefined, "reactive/scene/dirty_test.mbt:363:3-365:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test41____test__64697274795f746573742e6d6274__7() {
  const r = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion3new(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test2vp(), 16);
  _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion9add__rect(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 32, 16));
  const _tmp$3 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 32, 16));
  const _bind$5 = "exact hit";
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "reactive/scene/dirty_test.mbt:372:3-375:4@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(4, 4, 12, 12));
  const _bind$7 = "inside a dirty tile";
  const _bind$8 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "reactive/scene/dirty_test.mbt:376:3-379:4@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 48, 16)) === false;
  const _bind$9 = "a third tile is clean";
  const _bind$10 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "reactive/scene/dirty_test.mbt:380:3-383:4@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$6 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(-50, -50, -10, -10));
  const _bind$11 = "a box outside the viewport needs no repaint";
  const _bind$12 = _M0FPB12assert__true(_tmp$6, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), "reactive/scene/dirty_test.mbt:384:3-387:4@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _tmp$7 = _M0MP45lumen7tsumugi8reactive5scene11DirtyRegion6covers(r, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 10, 20, 20)) === false;
  const _bind$13 = "the second row of tiles is clean";
  return _M0FPB12assert__true(_tmp$7, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length), "reactive/scene/dirty_test.mbt:388:3-391:4@lumen/tsumugi");
}
function _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
    let _try_err;
    _L: {
      const _bind$5 = f();
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L;
      }
      on_ok();
      return;
    }
    const err = _try_err;
    on_err(err);
  }, (err_str) => {
    on_err(new _M0DTPC15error5Error120lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP45lumen7tsumugi8reactive21scene__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$5 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP45lumen7tsumugi8reactive21scene__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$5;
      const _index_map = _Some;
      index_map = _index_map;
      break _L;
    }
  }
  let f;
  let attrs;
  _L$2: {
    const _bind$5 = _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(index_map, index);
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$5;
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
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi8reactive21scene__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
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
    let _tmp$3;
    const _bind$5 = _M0IP45lumen7tsumugi8reactive21scene__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
    let _tmp$4;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$4 = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    if (_tmp$4) {
      _tmp$3 = true;
    } else {
      let _tmp$5;
      const _bind$6 = _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
      let _tmp$6;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$6 = _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L;
      }
      if (_tmp$6) {
        _tmp$5 = true;
      } else {
        let _tmp$7;
        const _bind$7 = _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
        let _tmp$8;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$8 = _ok._0;
        } else {
          const _err = _bind$7;
          _try_err = _err._0;
          break _L;
        }
        if (_tmp$8) {
          _tmp$7 = true;
        } else {
          let _tmp$9;
          const _bind$8 = _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
          let _tmp$10;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$10 = _ok._0;
          } else {
            const _err = _bind$8;
            _try_err = _err._0;
            break _L;
          }
          if (_tmp$10) {
            _tmp$9 = true;
          } else {
            const _bind$9 = _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi8reactive21scene__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
            let _tmp$11;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _tmp$11 = _ok._0;
            } else {
              const _err = _bind$9;
              _try_err = _err._0;
              break _L;
            }
            _tmp$9 = _tmp$11;
          }
          _tmp$7 = _tmp$9;
        }
        _tmp$5 = _tmp$7;
      }
      _tmp$3 = _tmp$5;
    }
    if (!_tmp$3) {
      _try_err = new _M0DTPC15error5Error122lumen_2ftsumugi_2freactive_2fscene__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
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
function _M0FP45lumen7tsumugi8reactive21scene__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$5 = 0;
  const _bind$6 = tests.length;
  let _tmp$3 = _bind$5;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$6) {
      const entry = i >>> 0 < tests.length ? tests[i] : $oob();
      _M0FP45lumen7tsumugi8reactive21scene__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP45lumen7tsumugi8reactive21scene__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi8reactive21scene__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP45lumen7tsumugi8reactive21scene__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP45lumen7tsumugi8reactive21scene__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=scene.blackbox_test.js.map
