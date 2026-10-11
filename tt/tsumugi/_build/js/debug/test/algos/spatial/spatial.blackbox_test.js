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
const _M0FPB22uint64__to__string__js = (num, radix) => num.toString(radix);
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
function _M0DTPC15error5Error119lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error119lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 2;
function _M0DTPC15error5Error121lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error121lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 1;
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
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB12MutArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_uint64(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function $compare_float(a, b) {
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
function _M0TP45lumen7tsumugi5algos7spatial4Aabb(param0, param1, param2, param3) {
  this.min_x = param0;
  this.min_y = param1;
  this.max_x = param2;
  this.max_y = param3;
}
function _M0TP45lumen7tsumugi5algos7spatial3Sap(param0, param1, param2, param3, param4, param5, param6) {
  this.n = param0;
  this.boxes = param1;
  this.order_min = param2;
  this.order_max = param3;
  this.pos_min = param4;
  this.pos_max = param5;
  this.active = param6;
}
function _M0TPB8MutLocalGmE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi5algos7spatial4Grid(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  this.min_x = param0;
  this.min_y = param1;
  this.cell = param2;
  this.inv_cell = param3;
  this.cols = param4;
  this.rows = param5;
  this.start = param6;
  this.items = param7;
  this.visit = param8;
  this.boxes = param9;
  this.n = param10;
  this.query_id = param11;
}
function _M0TP45lumen7tsumugi5algos7spatial3Bvh(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  this.n = param0;
  this.n_nodes = param1;
  this.min_x = param2;
  this.min_y = param3;
  this.max_x = param4;
  this.max_y = param5;
  this.left = param6;
  this.right = param7;
  this.first = param8;
  this.count = param9;
  this.order = param10;
  this.boxes = param11;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP45lumen7tsumugi5algos23spatial__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP45lumen7tsumugi5algos23spatial__blackbox__test38moonbit__test__driver__js__parse__args = () => {
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
    case 1: {
      return "lumen/tsumugi/algos/spatial_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 4: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    default: {
      return "lumen/tsumugi/algos/spatial_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
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
const _M0FP45lumen7tsumugi5algos7spatial15bvh__leaf__size = 4;
(() => {
})();
const _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 = 16;
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FPC15debug10assert__eqN6constrS1686GiE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGiEE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRP45lumen7tsumugi5algos7spatial4AabbE = false;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug10assert__eqN6constrS1686GdE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGUiiEEE = false;
const _M0FPC15debug10assert__eqN6constrS1686GmE = false;
const _bind = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__0, _1: ["grid: query results equal the naive scan, with no duplicates"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__1, _1: ["grid: candidate query is a superset of the exact answer"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__2, _1: ["grid: cell growth is bounded and the build stays linear"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__3, _1: ["morton: fast bit spread equals the loop reference and round-trips"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__4, _1: ["morton: sorting by code shortens the walk through the points"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__5, _1: ["bvh: structure is a valid tree covering every primitive once"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__6, _1: ["bvh: box queries equal the naive scan"] } }, { _0: 7, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__7, _1: ["bvh: ray queries equal the naive slab scan"] } }, { _0: 8, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__8, _1: ["sap: pair list equals the naive O(n^2) overlap test"] } }, { _0: 9, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__9, _1: ["sap: incremental updates keep the pair list exact"] } }, { _0: 10, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__10, _1: ["ray/aabb: the slab answer agrees with sampling the ray"] } }, { _0: 11, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__11, _1: ["ray/sphere: the hit distance really is on the sphere"] } }, { _0: 12, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__12, _1: ["aabb: union, containment and the empty box"] } }, { _0: 13, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__13, _1: ["sap: orders and position index stay consistent through many moves"] } }, { _0: 14, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__14, _1: ["grid: visit-stamp wrap does not lose results"] } }, { _0: 15, _1: { _0: _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__15, _1: ["aabb intersect: empty when disjoint, exact when not"] } }];
const _bind$2 = [{ _0: "spatial_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 16), undefined) }];
const _M0FP45lumen7tsumugi5algos23spatial__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$2, 0, 1), undefined);
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
function _M0IPC15tuple6Tuple2PB2Eq5equalGiiE(self, other) {
  return self._0 === other._0 && self._1 === other._1;
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGiEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGiE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGUiiEEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGUiiEE(x, y);
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
function _M0MPC16uint646UInt6418to__string_2einner(self, radix) {
  return _M0FPB22uint64__to__string__js(self, radix);
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
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGUiiEE(self, value) {
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
function _M0MPC16option6Option6unwrapGiE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGUiiEE(self) {
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
    _M0MPC16option6Option6unwrapGUiiEE(_bind$3 >>> 0 < _tmp.length ? _tmp[_bind$3] : $oob()).next = entry;
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
    _M0MPC16option6Option6unwrapGUiiEE(_bind$3 >>> 0 < _tmp.length ? _tmp[_bind$3] : $oob()).next = entry;
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
function _M0MPC15array5Array3mapGUiiERPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array28unsafe__truncate__to__lengthGiE(self, new_len) {
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
function _M0MPC15array5Array9is__emptyGUiiEE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGUiiEE(self) {
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
function _M0MPC15array5Array3popGUiiEE(self) {
  if (_M0MPC15array5Array9is__emptyGUiiEE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGUiiEE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGiE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array4copyGUiiEE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
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
function _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, j) {
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
function _M0MPC15array12MutArrayView5sliceGUiiEE(arr, start, end) {
  const _bind$3 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$3)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGUiiEE(arr.buf, start + arr.start | 0, end + arr.start | 0);
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
function _M0MPC15array12MutArrayView14rev__in__placeGUiiEE(arr) {
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
function _M0FPB23fixed__bubble__sort__byGiE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
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
function _M0FPB23fixed__bubble__sort__byGUiiEE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, j, j - 1 | 0);
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
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGUiiEE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b);
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
function _M0FPB24fixed__choose__pivot__byGUiiEE(arr, cmp) {
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
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGUiiEE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGiE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
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
function _M0FPB21fixed__sift__down__byGUiiEE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
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
  const _bind$3 = len / 2 | 0;
  let _tmp = _bind$3 - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGiE(arr, i, cmp);
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
      _M0FPB21fixed__sift__down__byGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGUiiEE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$3 = len / 2 | 0;
  let _tmp = _bind$3 - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGUiiEE(arr, i, cmp);
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
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGUiiEE(_M0MPC15array12MutArrayView5sliceGUiiEE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGiE(arr, cmp, pivot_index) {
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
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
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
function _M0FPB20fixed__partition__byGUiiEE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGUiiEE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
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
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, j);
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
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGiE(arr, cmp) {
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
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
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
function _M0FPB28fixed__try__bubble__sort__byGUiiEE(arr, cmp) {
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
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, j, j - 1 | 0);
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
function _M0FPB22fixed__quick__sort__byGiE(arr, cmp, pred, limit) {
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
        _M0FPB23fixed__bubble__sort__byGiE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGiE(arr$2, cmp);
      return undefined;
    }
    const _bind$3 = _M0FPB24fixed__choose__pivot__byGiE(arr$2, cmp);
    const _pivot_index = _bind$3._0;
    const _likely_sorted = _bind$3._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGiE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$4 = _M0FPB20fixed__partition__byGiE(arr$2, cmp, _pivot_index);
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
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
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
      _M0FPB22fixed__quick__sort__byGiE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGiE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGUiiEE(arr, cmp, pred, limit) {
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
        _M0FPB23fixed__bubble__sort__byGUiiEE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGUiiEE(arr$2, cmp);
      return undefined;
    }
    const _bind$3 = _M0FPB24fixed__choose__pivot__byGUiiEE(arr$2, cmp);
    const _pivot_index = _bind$3._0;
    const _likely_sorted = _bind$3._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGUiiEE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$4 = _M0FPB20fixed__partition__byGUiiEE(arr$2, cmp, _pivot_index);
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
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGUiiEE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGUiiEE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView13sort__by__keyGimE(self, map) {
  _M0FPB22fixed__quick__sort__byGiE(self, (a, b) => $compare_uint64(map(a), map(b)), undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array12MutArrayView13sort__by__keyGidE(self, map) {
  _M0FPB22fixed__quick__sort__byGiE(self, (a, b) => $compare_float(map(a), map(b)), undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array12MutArrayView8sort__byGUiiEE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGUiiEE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView4sortGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$3));
}
function _M0MPC15array5Array13sort__by__keyGimE(self, map) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView13sort__by__keyGimE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$3), map);
}
function _M0MPC15array5Array8sort__byGUiiEE(self, cmp) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView8sort__byGUiiEE(new _M0TPB12MutArrayViewGUiiEE(self, 0, _bind$3), cmp);
}
function _M0MPC15array10FixedArray13sort__by__keyGidE(self, map) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView13sort__by__keyGidE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$3), map);
}
function _M0MPC15array5Array4makeGdE(len, elem) {
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
function _M0MPC15array5Array4makeGiE(len, elem) {
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
function _M0IPC15array5ArrayPB2Eq5equalGUiiEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGiiE(self[i], other[i])) {
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
        _M0MPC15array5Array4pushGUiiEE(arr, v);
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
      _M0MPC15array5Array4pushGUiiEE(self, _x);
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
function _M0MPC15debug4Repr4ReprGRPB5ArrayGiEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE(value);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGmE(value) {
  return _M0IPC16uint646UInt64PC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGUiiEEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiiEE(value);
}
function _M0MPC15debug4Repr4ReprGdE(value) {
  return _M0IPC16double6DoublePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP45lumen7tsumugi5algos7spatial4AabbE(value) {
  return _M0IP45lumen7tsumugi5algos7spatial4AabbPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGUiiEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiiE(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiiE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGiE(_a), _M0MPC15debug4Repr4ReprGiE(_b)]);
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
      _M0MPC15array5Array4pushGUiiEE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGUiiEE(_self, `${_last}${finish}`);
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
        _M0MPC15array5Array4pushGUiiEE(parts, t);
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
          const _bind$4 = _bind$3 - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$4) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGUiiEE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGUiiEE(parts, _M0MPC16string6String4trim(_last, undefined));
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
        if (!_M0MPC15array5Array9is__emptyGUiiEE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGmE(lines, last_i, `${_M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGUiiEE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGUiiEE(_self, close);
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
            _M0MPC15array5Array4pushGUiiEE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGUiiEE(_self, close);
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
              _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$4 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$4) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGUiiEE(out, close);
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
                _M0MPC15array5Array4pushGUiiEE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGUiiEE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGUiiEE(_self, end);
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
                    _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$4 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$4) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGUiiEE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGUiiEE(out, end);
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
    return _M0MPC15array5Array9is__emptyGUiiEE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGUiiEE(children)) {
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
      if (_M0MPC15array5Array9is__emptyGUiiEE(children)) {
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
            _M0MPC15array5Array4pushGUiiEE(_self, head);
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
            _M0MPC15array5Array4pushGUiiEE(_self, `${_name$3}=${_first}`);
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
            _M0MPC15array5Array4pushGUiiEE(_self, `${label}: ${_first}`);
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
        _M0MPC15array5Array4pushGUiiEE(children, _M0FPC15debug16diff__info__withN2goS142(max_relative_error, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(xs, i), _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(ys, i)));
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
        _M0MPC15array5Array4pushGUiiEE(children, new _M0DTPC15debug9ReprDelta6Extra1(t));
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
        _M0MPC15array5Array4pushGUiiEE(children, new _M0DTPC15debug9ReprDelta6Extra2(t));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FPC15debug21info__is__unimportant(left_node) && (!_M0MPC15array5Array9is__emptyGUiiEE(children) && _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(children, (d) => {
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
          return _M0MPC15array5Array9is__emptyGUiiEE(_children) ? node : !_M0MPC15debug4Repr17info__adds__depth(_label) ? new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(d, child))) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
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
function _M0IPC16uint646UInt64PC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC16uint646UInt6418to__string_2einner(self, 10));
}
function _M0IPC16double6DoublePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6double(self);
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGiRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGiE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiiEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUiiERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUiiEE(x)));
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
function _M0FPC15debug10assert__eqGmE(a, b, msg, loc) {
  if (BigInt.asUintN(64, a) !== BigInt.asUintN(64, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGmE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGmE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GmE);
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
function _M0FPC15debug10assert__eqGRPB5ArrayGUiiEEE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGUiiEEE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB5ArrayGUiiEEE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB5ArrayGUiiEEE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGUiiEEE);
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
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FPC14math3cos(_tmp) {
  return Math.cos(_tmp);
}
function _M0IP45lumen7tsumugi5algos7spatial4AabbPB2Eq5equal(_x_344, _x_345) {
  return _x_344.min_x === _x_345.min_x && _x_344.min_y === _x_345.min_y && _x_344.max_x === _x_345.max_x && _x_344.max_y === _x_345.max_y;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(min_x, min_y, max_x, max_y) {
  return new _M0TP45lumen7tsumugi5algos7spatial4Aabb(min_x, min_y, max_x, max_y);
}
function _M0MP45lumen7tsumugi5algos7spatial3Sap5build(boxes, n) {
  const om = $make_array_len_and_init(n, 0);
  const ox = $make_array_len_and_init(n, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      if (i >>> 0 < om.length) {
        om[i] = i;
      } else {
        $oob();
      }
      if (i >>> 0 < ox.length) {
        ox[i] = i;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sap = new _M0TP45lumen7tsumugi5algos7spatial3Sap(n, boxes, om, ox, $make_array_len_and_init(n, 0), $make_array_len_and_init(n, 0), []);
  _M0MPC15array10FixedArray13sort__by__keyGidE(sap.order_min, (i) => (i >>> 0 < boxes.length ? boxes[i] : $oob()).min_x);
  _M0MPC15array10FixedArray13sort__by__keyGidE(sap.order_max, (i) => (i >>> 0 < boxes.length ? boxes[i] : $oob()).max_x);
  let _tmp$2 = 0;
  while (true) {
    const k = _tmp$2;
    if (k < n) {
      const _tmp$3 = sap.pos_min;
      const _tmp$4 = sap.order_min;
      const _tmp$5 = k >>> 0 < _tmp$4.length ? _tmp$4[k] : $oob();
      if (_tmp$5 >>> 0 < _tmp$3.length) {
        _tmp$3[_tmp$5] = k;
      } else {
        $oob();
      }
      const _tmp$6 = sap.pos_max;
      const _tmp$7 = sap.order_max;
      const _tmp$8 = k >>> 0 < _tmp$7.length ? _tmp$7[k] : $oob();
      if (_tmp$8 >>> 0 < _tmp$6.length) {
        _tmp$6[_tmp$8] = k;
      } else {
        $oob();
      }
      _tmp$2 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sap;
}
function _M0FP45lumen7tsumugi5algos7spatial8reinsert(order, pos_of, index, key) {
  const n = order.length;
  const pos = new _M0TPB8MutLocalGiE(index >>> 0 < pos_of.length ? pos_of[index] : $oob());
  const k_new = key(index);
  while (true) {
    let _tmp;
    if (pos.val > 0) {
      const _tmp$2 = pos.val - 1 | 0;
      _tmp = key(_tmp$2 >>> 0 < order.length ? order[_tmp$2] : $oob()) > k_new;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      const _tmp$2 = pos.val - 1 | 0;
      const other = _tmp$2 >>> 0 < order.length ? order[_tmp$2] : $oob();
      const _tmp$3 = pos.val;
      if (_tmp$3 >>> 0 < order.length) {
        order[_tmp$3] = other;
      } else {
        $oob();
      }
      if (other >>> 0 < pos_of.length) {
        pos_of[other] = pos.val;
      } else {
        $oob();
      }
      pos.val = pos.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if ((pos.val + 1 | 0) < n) {
      const _tmp$2 = pos.val + 1 | 0;
      _tmp = key(_tmp$2 >>> 0 < order.length ? order[_tmp$2] : $oob()) < k_new;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      const _tmp$2 = pos.val + 1 | 0;
      const other = _tmp$2 >>> 0 < order.length ? order[_tmp$2] : $oob();
      const _tmp$3 = pos.val;
      if (_tmp$3 >>> 0 < order.length) {
        order[_tmp$3] = other;
      } else {
        $oob();
      }
      if (other >>> 0 < pos_of.length) {
        pos_of[other] = pos.val;
      } else {
        $oob();
      }
      pos.val = pos.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp = pos.val;
  if (_tmp >>> 0 < order.length) {
    order[_tmp] = index;
  } else {
    $oob();
  }
  if (index >>> 0 < pos_of.length) {
    pos_of[index] = pos.val;
  } else {
    $oob();
  }
}
function _M0MP45lumen7tsumugi5algos7spatial3Sap6update(self, i, box) {
  const _tmp = self.boxes;
  if (i >>> 0 < _tmp.length) {
    _tmp[i] = box;
  } else {
    $oob();
  }
  _M0FP45lumen7tsumugi5algos7spatial8reinsert(self.order_min, self.pos_min, i, (j) => {
    const _tmp$2 = self.boxes;
    return (j >>> 0 < _tmp$2.length ? _tmp$2[j] : $oob()).min_x;
  });
  _M0FP45lumen7tsumugi5algos7spatial8reinsert(self.order_max, self.pos_max, i, (j) => {
    const _tmp$2 = self.boxes;
    return (j >>> 0 < _tmp$2.length ? _tmp$2[j] : $oob()).max_x;
  });
}
function _M0MP45lumen7tsumugi5algos7spatial3Sap5pairs(self, out) {
  _M0MPC15array5Array5clearGiE(self.active);
  const count = new _M0TPB8MutLocalGiE(0);
  let _tmp = 0;
  while (true) {
    const k = _tmp;
    if (k < self.n) {
      const _tmp$2 = self.order_min;
      const i = k >>> 0 < _tmp$2.length ? _tmp$2[k] : $oob();
      const _tmp$3 = self.boxes;
      const bi = i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob();
      const w = new _M0TPB8MutLocalGiE(0);
      let _tmp$4 = 0;
      while (true) {
        const a = _tmp$4;
        if (a < self.active.length) {
          const j = _M0MPC15array5Array2atGiE(self.active, a);
          const _tmp$5 = self.boxes;
          if ((j >>> 0 < _tmp$5.length ? _tmp$5[j] : $oob()).max_x >= bi.min_x) {
            _M0MPC15array5Array3setGiE(self.active, w.val, j);
            w.val = w.val + 1 | 0;
          }
          _tmp$4 = a + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (w.val < self.active.length) {
        _M0MPC15array5Array6resizeGiE(self.active, w.val, 0);
      }
      let _tmp$5 = 0;
      while (true) {
        const a = _tmp$5;
        if (a < self.active.length) {
          const j = _M0MPC15array5Array2atGiE(self.active, a);
          const _tmp$6 = self.boxes;
          const bj = j >>> 0 < _tmp$6.length ? _tmp$6[j] : $oob();
          if (bj.min_y <= bi.max_y && bi.min_y <= bj.max_y) {
            if (j < i) {
              _M0MPC15array5Array4pushGUiiEE(out, { _0: j, _1: i });
            } else {
              _M0MPC15array5Array4pushGUiiEE(out, { _0: i, _1: j });
            }
            count.val = count.val + 1 | 0;
          }
          _tmp$5 = a + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGiE(self.active, i);
      _tmp = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return count.val;
}
function _M0FP45lumen7tsumugi5algos7spatial8part1by1(n) {
  const x = new _M0TPB8MutLocalGmE(BigInt.asUintN(64, n & 4294967295n));
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(16 & 63))) & 281470681808895n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(8 & 63))) & 71777214294589695n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(4 & 63))) & 1085102592571150095n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(2 & 63))) & 3689348814741910323n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(1 & 63))) & 6148914691236517205n);
  return x.val;
}
function _M0FP45lumen7tsumugi5algos7spatial8part1by2(n) {
  const x = new _M0TPB8MutLocalGmE(BigInt.asUintN(64, n & 2097151n));
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(32 & 63))) & 8725724278095871n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(16 & 63))) & 8725728556220671n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(8 & 63))) & 1157144660301377551n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(4 & 63))) & 1207822528635744451n);
  x.val = BigInt.asUintN(64, BigInt.asUintN(64, x.val | BigInt.asUintN(64, x.val << BigInt(2 & 63))) & 1317624576693539401n);
  return x.val;
}
function _M0FP45lumen7tsumugi5algos7spatial11compact1by1(x) {
  const n = new _M0TPB8MutLocalGmE(BigInt.asUintN(64, x & 6148914691236517205n));
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(1 & 63))) & 3689348814741910323n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(2 & 63))) & 1085102592571150095n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(4 & 63))) & 71777214294589695n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(8 & 63))) & 281470681808895n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(16 & 63))) & 4294967295n);
  return n.val;
}
function _M0FP45lumen7tsumugi5algos7spatial11compact1by2(x) {
  const n = new _M0TPB8MutLocalGmE(BigInt.asUintN(64, x & 1317624576693539401n));
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(2 & 63))) & 1207822528635744451n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(4 & 63))) & 1157144660301377551n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(8 & 63))) & 8725728556220671n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(16 & 63))) & 8725724278095871n);
  n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val ^ BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(32 & 63))) & 2097151n);
  return n.val;
}
function _M0FP45lumen7tsumugi5algos7spatial14part1by1__loop(n) {
  const out = new _M0TPB8MutLocalGmE(0n);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 32) {
      const bit = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, n) >> BigInt(i & 63)) & 1n);
      out.val = BigInt.asUintN(64, out.val | BigInt.asUintN(64, bit << BigInt((Math.imul(2, i) | 0) & 63)));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP45lumen7tsumugi5algos7spatial14part1by2__loop(n) {
  const out = new _M0TPB8MutLocalGmE(0n);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 21) {
      const bit = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, n) >> BigInt(i & 63)) & 1n);
      out.val = BigInt.asUintN(64, out.val | BigInt.asUintN(64, bit << BigInt((Math.imul(3, i) | 0) & 63)));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP45lumen7tsumugi5algos7spatial7morton2(x, y) {
  return BigInt.asUintN(64, _M0FP45lumen7tsumugi5algos7spatial8part1by1(x) | BigInt.asUintN(64, _M0FP45lumen7tsumugi5algos7spatial8part1by1(y) << BigInt(1 & 63)));
}
function _M0FP45lumen7tsumugi5algos7spatial7morton3(x, y, z) {
  return BigInt.asUintN(64, BigInt.asUintN(64, _M0FP45lumen7tsumugi5algos7spatial8part1by2(x) | BigInt.asUintN(64, _M0FP45lumen7tsumugi5algos7spatial8part1by2(y) << BigInt(1 & 63))) | BigInt.asUintN(64, _M0FP45lumen7tsumugi5algos7spatial8part1by2(z) << BigInt(2 & 63)));
}
function _M0FP45lumen7tsumugi5algos7spatial9demorton2(m) {
  return { _0: _M0FP45lumen7tsumugi5algos7spatial11compact1by1(m), _1: _M0FP45lumen7tsumugi5algos7spatial11compact1by1(BigInt.asUintN(64, BigInt.asUintN(64, m) >> BigInt(1 & 63))) };
}
function _M0FP45lumen7tsumugi5algos7spatial9demorton3(m) {
  return { _0: _M0FP45lumen7tsumugi5algos7spatial11compact1by2(m), _1: _M0FP45lumen7tsumugi5algos7spatial11compact1by2(BigInt.asUintN(64, BigInt.asUintN(64, m) >> BigInt(1 & 63))), _2: _M0FP45lumen7tsumugi5algos7spatial11compact1by2(BigInt.asUintN(64, BigInt.asUintN(64, m) >> BigInt(2 & 63))) };
}
function _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(self, x, y) {
  const cx = _M0MPC13int3Int3max(0, _M0MPC13int3Int3min(self.cols - 1 | 0, _M0MPC16double6Double7to__int((x - self.min_x) * self.inv_cell)));
  const cy = _M0MPC13int3Int3max(0, _M0MPC13int3Int3min(self.rows - 1 | 0, _M0MPC16double6Double7to__int((y - self.min_y) * self.inv_cell)));
  return (Math.imul(cy, self.cols) | 0) + cx | 0;
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
function _M0MP45lumen7tsumugi5algos7spatial4Grid5build(boxes, n, cell, max_cells) {
  let limit;
  let m;
  _L: {
    _L$2: {
      if (max_cells === undefined) {
        limit = _M0MPC13int3Int3max(64, Math.imul(n, 4) | 0);
      } else {
        const _Some = max_cells;
        const _m = _Some;
        m = _m;
        break _L$2;
      }
      break _L;
    }
    limit = _M0MPC13int3Int3max(1, m);
  }
  const bounds = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      bounds.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(bounds.val, i >>> 0 < boxes.length ? boxes[i] : $oob());
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(bounds.val)) {
    bounds.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 1, 1);
  }
  const size = new _M0TPB8MutLocalGdE(cell > 0 ? cell : 1);
  const cols = new _M0TPB8MutLocalGiE(1);
  const rows = new _M0TPB8MutLocalGiE(1);
  const pass_count = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (pass_count.val < 200) {
      pass_count.val = pass_count.val + 1 | 0;
      const w = _M0MP45lumen7tsumugi5algos7spatial4Aabb5width(bounds.val);
      const h = _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(bounds.val);
      cols.val = _M0MPC13int3Int3max(1, _M0MPC13int3Int3min(limit, _M0MPC16double6Double7to__int(_M0MPC16double6Double4ceil(w / size.val))));
      rows.val = _M0MPC13int3Int3max(1, _M0MPC13int3Int3min(limit, _M0MPC16double6Double7to__int(_M0MPC16double6Double4ceil(h / size.val))));
      const cells64 = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(cols.val)) * BigInt.asUintN(64, BigInt(rows.val)));
      if (BigInt.asIntN(64, cells64) <= BigInt.asIntN(64, BigInt.asUintN(64, BigInt(limit)))) {
        break;
      }
      size.val = size.val * 2;
      if (size.val === 0 || size.val > 1e+300) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const cells = Math.imul(cols.val, rows.val) | 0;
  const g = new _M0TP45lumen7tsumugi5algos7spatial4Grid(bounds.val.min_x, bounds.val.min_y, size.val, 1 / size.val, cols.val, rows.val, $make_array_len_and_init(cells + 1 | 0, 0), $make_array_len_and_init(0, 0), $make_array_len_and_init(n, 0), boxes, n, 0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      _L$2: {
        const b = i >>> 0 < boxes.length ? boxes[i] : $oob();
        if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
          break _L$2;
        }
        const c0 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(g, b.min_x, b.min_y);
        const c1 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(g, b.max_x, b.max_y);
        const _tmp$3 = cols.val;
        if (_tmp$3 === 0) {
          $panic();
        }
        const x0 = c0 % _tmp$3 | 0;
        const _tmp$4 = cols.val;
        if (_tmp$4 === 0) {
          $panic();
        }
        const y0 = c0 / _tmp$4 | 0;
        const _tmp$5 = cols.val;
        if (_tmp$5 === 0) {
          $panic();
        }
        const x1 = c1 % _tmp$5 | 0;
        const _tmp$6 = cols.val;
        if (_tmp$6 === 0) {
          $panic();
        }
        const y1 = c1 / _tmp$6 | 0;
        let _tmp$7 = y0;
        while (true) {
          const cy = _tmp$7;
          if (cy <= y1) {
            let _tmp$8 = x0;
            while (true) {
              const cx = _tmp$8;
              if (cx <= x1) {
                const _tmp$9 = g.start;
                const _tmp$10 = ((Math.imul(cy, cols.val) | 0) + cx | 0) + 1 | 0;
                const _tmp$11 = g.start;
                const _tmp$12 = ((Math.imul(cy, cols.val) | 0) + cx | 0) + 1 | 0;
                if (_tmp$10 >>> 0 < _tmp$9.length) {
                  _tmp$9[_tmp$10] = (_tmp$12 >>> 0 < _tmp$11.length ? _tmp$11[_tmp$12] : $oob()) + 1 | 0;
                } else {
                  $oob();
                }
                _tmp$8 = cx + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$7 = cy + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L$2;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = 0;
  while (true) {
    const c = _tmp$3;
    if (c < cells) {
      const _tmp$4 = g.start;
      const _tmp$5 = c + 1 | 0;
      const _tmp$6 = g.start;
      const _tmp$7 = c + 1 | 0;
      const _tmp$8 = _tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob();
      const _tmp$9 = g.start;
      if (_tmp$5 >>> 0 < _tmp$4.length) {
        _tmp$4[_tmp$5] = _tmp$8 + (c >>> 0 < _tmp$9.length ? _tmp$9[c] : $oob()) | 0;
      } else {
        $oob();
      }
      _tmp$3 = c + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = g.start;
  const total = cells >>> 0 < _tmp$4.length ? _tmp$4[cells] : $oob();
  const items = $make_array_len_and_init(total, 0);
  const cursor = $make_array_len_and_init(cells, 0);
  let _tmp$5 = 0;
  while (true) {
    const c = _tmp$5;
    if (c < cells) {
      const _tmp$6 = g.start;
      if (c >>> 0 < cursor.length) {
        cursor[c] = c >>> 0 < _tmp$6.length ? _tmp$6[c] : $oob();
      } else {
        $oob();
      }
      _tmp$5 = c + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < n) {
      _L$2: {
        const b = i >>> 0 < boxes.length ? boxes[i] : $oob();
        if (_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(b)) {
          break _L$2;
        }
        const c0 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(g, b.min_x, b.min_y);
        const c1 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(g, b.max_x, b.max_y);
        const _tmp$7 = cols.val;
        if (_tmp$7 === 0) {
          $panic();
        }
        const x0 = c0 % _tmp$7 | 0;
        const _tmp$8 = cols.val;
        if (_tmp$8 === 0) {
          $panic();
        }
        const y0 = c0 / _tmp$8 | 0;
        const _tmp$9 = cols.val;
        if (_tmp$9 === 0) {
          $panic();
        }
        const x1 = c1 % _tmp$9 | 0;
        const _tmp$10 = cols.val;
        if (_tmp$10 === 0) {
          $panic();
        }
        const y1 = c1 / _tmp$10 | 0;
        let _tmp$11 = y0;
        while (true) {
          const cy = _tmp$11;
          if (cy <= y1) {
            let _tmp$12 = x0;
            while (true) {
              const cx = _tmp$12;
              if (cx <= x1) {
                const id = (Math.imul(cy, cols.val) | 0) + cx | 0;
                const _tmp$13 = id >>> 0 < cursor.length ? cursor[id] : $oob();
                if (_tmp$13 >>> 0 < items.length) {
                  items[_tmp$13] = i;
                } else {
                  $oob();
                }
                if (id >>> 0 < cursor.length) {
                  cursor[id] = (id >>> 0 < cursor.length ? cursor[id] : $oob()) + 1 | 0;
                } else {
                  $oob();
                }
                _tmp$12 = cx + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$11 = cy + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L$2;
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP45lumen7tsumugi5algos7spatial4Grid(g.min_x, g.min_y, g.cell, g.inv_cell, g.cols, g.rows, g.start, items, g.visit, g.boxes, g.n, g.query_id);
}
function _M0MP45lumen7tsumugi5algos7spatial4Grid5cells(self) {
  return Math.imul(self.cols, self.rows) | 0;
}
function _M0MP45lumen7tsumugi5algos7spatial4Grid15next__query__id(self) {
  if (self.query_id >= 2147483646) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self.visit.length) {
        const _tmp$2 = self.visit;
        if (i >>> 0 < _tmp$2.length) {
          _tmp$2[i] = 0;
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    self.query_id = 1;
  } else {
    self.query_id = self.query_id + 1 | 0;
  }
  return self.query_id;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(self, o) {
  return self.min_x <= o.max_x && (o.min_x <= self.max_x && (self.min_y <= o.max_y && o.min_y <= self.max_y));
}
function _M0MP45lumen7tsumugi5algos7spatial4Grid5query(self, box, out) {
  const qid = _M0MP45lumen7tsumugi5algos7spatial4Grid15next__query__id(self);
  const added = new _M0TPB8MutLocalGiE(0);
  const c0 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(self, box.min_x, box.min_y);
  const c1 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(self, box.max_x, box.max_y);
  const _tmp = self.cols;
  if (_tmp === 0) {
    $panic();
  }
  const x0 = c0 % _tmp | 0;
  const _tmp$2 = self.cols;
  if (_tmp$2 === 0) {
    $panic();
  }
  const y0 = c0 / _tmp$2 | 0;
  const _tmp$3 = self.cols;
  if (_tmp$3 === 0) {
    $panic();
  }
  const x1 = c1 % _tmp$3 | 0;
  const _tmp$4 = self.cols;
  if (_tmp$4 === 0) {
    $panic();
  }
  const y1 = c1 / _tmp$4 | 0;
  let _tmp$5 = y0;
  while (true) {
    const cy = _tmp$5;
    if (cy <= y1) {
      let _tmp$6 = x0;
      while (true) {
        const cx = _tmp$6;
        if (cx <= x1) {
          const id = (Math.imul(cy, self.cols) | 0) + cx | 0;
          const _tmp$7 = self.start;
          let _tmp$8 = id >>> 0 < _tmp$7.length ? _tmp$7[id] : $oob();
          while (true) {
            const k = _tmp$8;
            const _tmp$9 = self.start;
            const _tmp$10 = id + 1 | 0;
            if (k < (_tmp$10 >>> 0 < _tmp$9.length ? _tmp$9[_tmp$10] : $oob())) {
              const _tmp$11 = self.items;
              const p = k >>> 0 < _tmp$11.length ? _tmp$11[k] : $oob();
              const _tmp$12 = self.visit;
              if ((p >>> 0 < _tmp$12.length ? _tmp$12[p] : $oob()) !== qid) {
                const _tmp$13 = self.visit;
                if (p >>> 0 < _tmp$13.length) {
                  _tmp$13[p] = qid;
                } else {
                  $oob();
                }
                const _tmp$14 = self.boxes;
                if (_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(p >>> 0 < _tmp$14.length ? _tmp$14[p] : $oob(), box)) {
                  _M0MPC15array5Array4pushGiE(out, p);
                  added.val = added.val + 1 | 0;
                }
              }
              _tmp$8 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$6 = cx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$5 = cy + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return added.val;
}
function _M0MP45lumen7tsumugi5algos7spatial4Grid17query__candidates(self, box, out) {
  const qid = _M0MP45lumen7tsumugi5algos7spatial4Grid15next__query__id(self);
  const added = new _M0TPB8MutLocalGiE(0);
  const c0 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(self, box.min_x, box.min_y);
  const c1 = _M0MP45lumen7tsumugi5algos7spatial4Grid8cell__of(self, box.max_x, box.max_y);
  const _tmp = self.cols;
  if (_tmp === 0) {
    $panic();
  }
  const x0 = c0 % _tmp | 0;
  const _tmp$2 = self.cols;
  if (_tmp$2 === 0) {
    $panic();
  }
  const y0 = c0 / _tmp$2 | 0;
  const _tmp$3 = self.cols;
  if (_tmp$3 === 0) {
    $panic();
  }
  const x1 = c1 % _tmp$3 | 0;
  const _tmp$4 = self.cols;
  if (_tmp$4 === 0) {
    $panic();
  }
  const y1 = c1 / _tmp$4 | 0;
  let _tmp$5 = y0;
  while (true) {
    const cy = _tmp$5;
    if (cy <= y1) {
      let _tmp$6 = x0;
      while (true) {
        const cx = _tmp$6;
        if (cx <= x1) {
          const id = (Math.imul(cy, self.cols) | 0) + cx | 0;
          const _tmp$7 = self.start;
          let _tmp$8 = id >>> 0 < _tmp$7.length ? _tmp$7[id] : $oob();
          while (true) {
            const k = _tmp$8;
            const _tmp$9 = self.start;
            const _tmp$10 = id + 1 | 0;
            if (k < (_tmp$10 >>> 0 < _tmp$9.length ? _tmp$9[_tmp$10] : $oob())) {
              const _tmp$11 = self.items;
              const p = k >>> 0 < _tmp$11.length ? _tmp$11[k] : $oob();
              const _tmp$12 = self.visit;
              if ((p >>> 0 < _tmp$12.length ? _tmp$12[p] : $oob()) !== qid) {
                const _tmp$13 = self.visit;
                if (p >>> 0 < _tmp$13.length) {
                  _tmp$13[p] = qid;
                } else {
                  $oob();
                }
                _M0MPC15array5Array4pushGiE(out, p);
                added.val = added.val + 1 | 0;
              }
              _tmp$8 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$6 = cx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$5 = cy + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return added.val;
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh8capacity(n) {
  return _M0MPC13int3Int3max(1, Math.imul(2, n) | 0);
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__x(self) {
  return (self.min_x + self.max_x) * 0.5;
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__y(self) {
  return (self.min_y + self.max_y) * 0.5;
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh5build(boxes, n) {
  const cap = _M0MP45lumen7tsumugi5algos7spatial3Bvh8capacity(n);
  const bvh = new _M0TP45lumen7tsumugi5algos7spatial3Bvh(n, 0, $make_array_len_and_init(cap, 0), $make_array_len_and_init(cap, 0), $make_array_len_and_init(cap, 0), $make_array_len_and_init(cap, 0), $make_array_len_and_init(cap, -1), $make_array_len_and_init(cap, -1), $make_array_len_and_init(cap, 0), $make_array_len_and_init(cap, 0), $make_array_len_and_init(n, 0), boxes);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _tmp$2 = bvh.order;
      if (i >>> 0 < _tmp$2.length) {
        _tmp$2[i] = i;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (n === 0) {
    return bvh;
  }
  const stack_node = [0];
  const stack_start = [0];
  const stack_count = [n];
  bvh.n_nodes = 1;
  while (true) {
    if (stack_node.length > 0) {
      const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack_node));
      const start = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack_start));
      const cnt = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack_count));
      const b = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
      let _tmp$2 = start;
      while (true) {
        const k = _tmp$2;
        if (k < (start + cnt | 0)) {
          const _tmp$3 = b.val;
          const _tmp$4 = bvh.order;
          const _tmp$5 = k >>> 0 < _tmp$4.length ? _tmp$4[k] : $oob();
          b.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(_tmp$3, _tmp$5 >>> 0 < boxes.length ? boxes[_tmp$5] : $oob());
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$3 = bvh.min_x;
      if (node >>> 0 < _tmp$3.length) {
        _tmp$3[node] = b.val.min_x;
      } else {
        $oob();
      }
      const _tmp$4 = bvh.min_y;
      if (node >>> 0 < _tmp$4.length) {
        _tmp$4[node] = b.val.min_y;
      } else {
        $oob();
      }
      const _tmp$5 = bvh.max_x;
      if (node >>> 0 < _tmp$5.length) {
        _tmp$5[node] = b.val.max_x;
      } else {
        $oob();
      }
      const _tmp$6 = bvh.max_y;
      if (node >>> 0 < _tmp$6.length) {
        _tmp$6[node] = b.val.max_y;
      } else {
        $oob();
      }
      if (cnt <= _M0FP45lumen7tsumugi5algos7spatial15bvh__leaf__size) {
        const _tmp$7 = bvh.first;
        if (node >>> 0 < _tmp$7.length) {
          _tmp$7[node] = start;
        } else {
          $oob();
        }
        const _tmp$8 = bvh.count;
        if (node >>> 0 < _tmp$8.length) {
          _tmp$8[node] = cnt;
        } else {
          $oob();
        }
        continue;
      }
      const cb = new _M0TPB8MutLocalGRP45lumen7tsumugi5algos7spatial4AabbE(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
      let _tmp$7 = start;
      while (true) {
        const k = _tmp$7;
        if (k < (start + cnt | 0)) {
          const _tmp$8 = bvh.order;
          const _tmp$9 = k >>> 0 < _tmp$8.length ? _tmp$8[k] : $oob();
          const bb = _tmp$9 >>> 0 < boxes.length ? boxes[_tmp$9] : $oob();
          const cx = _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__x(bb);
          const cy = _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__y(bb);
          cb.val = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(cb.val, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(cx, cy, cx, cy));
          _tmp$7 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const axis_x = _M0MP45lumen7tsumugi5algos7spatial4Aabb5width(cb.val) >= _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(cb.val);
      const slice = $make_array_len_and_init(cnt, 0);
      let _tmp$8 = 0;
      while (true) {
        const k = _tmp$8;
        if (k < cnt) {
          const _tmp$9 = bvh.order;
          const _tmp$10 = start + k | 0;
          if (k >>> 0 < slice.length) {
            slice[k] = _tmp$10 >>> 0 < _tmp$9.length ? _tmp$9[_tmp$10] : $oob();
          } else {
            $oob();
          }
          _tmp$8 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (axis_x) {
        _M0MPC15array10FixedArray13sort__by__keyGidE(slice, (i) => _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__x(i >>> 0 < boxes.length ? boxes[i] : $oob()));
      } else {
        _M0MPC15array10FixedArray13sort__by__keyGidE(slice, (i) => _M0MP45lumen7tsumugi5algos7spatial4Aabb9center__y(i >>> 0 < boxes.length ? boxes[i] : $oob()));
      }
      let _tmp$9 = 0;
      while (true) {
        const k = _tmp$9;
        if (k < cnt) {
          const _tmp$10 = bvh.order;
          const _tmp$11 = start + k | 0;
          if (_tmp$11 >>> 0 < _tmp$10.length) {
            _tmp$10[_tmp$11] = k >>> 0 < slice.length ? slice[k] : $oob();
          } else {
            $oob();
          }
          _tmp$9 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (2 === 0) {
        $panic();
      }
      const mid = cnt / 2 | 0;
      const l = bvh.n_nodes;
      const r = bvh.n_nodes + 1 | 0;
      bvh.n_nodes = bvh.n_nodes + 2 | 0;
      const _tmp$10 = bvh.left;
      if (node >>> 0 < _tmp$10.length) {
        _tmp$10[node] = l;
      } else {
        $oob();
      }
      const _tmp$11 = bvh.right;
      if (node >>> 0 < _tmp$11.length) {
        _tmp$11[node] = r;
      } else {
        $oob();
      }
      const _tmp$12 = bvh.count;
      if (node >>> 0 < _tmp$12.length) {
        _tmp$12[node] = 0;
      } else {
        $oob();
      }
      _M0MPC15array5Array4pushGiE(stack_node, r);
      _M0MPC15array5Array4pushGiE(stack_start, start + mid | 0);
      _M0MPC15array5Array4pushGiE(stack_count, cnt - mid | 0);
      _M0MPC15array5Array4pushGiE(stack_node, l);
      _M0MPC15array5Array4pushGiE(stack_start, start);
      _M0MPC15array5Array4pushGiE(stack_count, mid);
      continue;
    } else {
      break;
    }
  }
  return bvh;
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(self, node) {
  const _tmp = self.left;
  return (node >>> 0 < _tmp.length ? _tmp[node] : $oob()) < 0;
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh14node__overlaps(self, node, box) {
  const _tmp = self.min_x;
  if ((node >>> 0 < _tmp.length ? _tmp[node] : $oob()) <= box.max_x) {
    let _tmp$2;
    const _tmp$3 = box.min_x;
    const _tmp$4 = self.max_x;
    if (_tmp$3 <= (node >>> 0 < _tmp$4.length ? _tmp$4[node] : $oob())) {
      let _tmp$5;
      const _tmp$6 = self.min_y;
      if ((node >>> 0 < _tmp$6.length ? _tmp$6[node] : $oob()) <= box.max_y) {
        const _tmp$7 = box.min_y;
        const _tmp$8 = self.max_y;
        _tmp$5 = _tmp$7 <= (node >>> 0 < _tmp$8.length ? _tmp$8[node] : $oob());
      } else {
        _tmp$5 = false;
      }
      _tmp$2 = _tmp$5;
    } else {
      _tmp$2 = false;
    }
    return _tmp$2;
  } else {
    return false;
  }
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh5query(self, box, out) {
  const added = new _M0TPB8MutLocalGiE(0);
  const stack = [];
  if (self.n > 0 && _M0MP45lumen7tsumugi5algos7spatial3Bvh14node__overlaps(self, 0, box)) {
    _M0MPC15array5Array4pushGiE(stack, 0);
  }
  while (true) {
    if (stack.length > 0) {
      const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack));
      if (_M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(self, node)) {
        const _tmp = self.first;
        const first = node >>> 0 < _tmp.length ? _tmp[node] : $oob();
        const _tmp$2 = self.count;
        const cnt = node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob();
        let _tmp$3 = first;
        while (true) {
          const k = _tmp$3;
          if (k < (first + cnt | 0)) {
            const _tmp$4 = self.order;
            const p = k >>> 0 < _tmp$4.length ? _tmp$4[k] : $oob();
            const _tmp$5 = self.boxes;
            if (_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(p >>> 0 < _tmp$5.length ? _tmp$5[p] : $oob(), box)) {
              _M0MPC15array5Array4pushGiE(out, p);
              added.val = added.val + 1 | 0;
            }
            _tmp$3 = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        const _tmp = self.left;
        const l = node >>> 0 < _tmp.length ? _tmp[node] : $oob();
        const _tmp$2 = self.right;
        const r = node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob();
        if (_M0MP45lumen7tsumugi5algos7spatial3Bvh14node__overlaps(self, l, box)) {
          _M0MPC15array5Array4pushGiE(stack, l);
        }
        if (_M0MP45lumen7tsumugi5algos7spatial3Bvh14node__overlaps(self, r, box)) {
          _M0MPC15array5Array4pushGiE(stack, r);
        }
      }
      continue;
    } else {
      break;
    }
  }
  return added.val;
}
function _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, b) {
  const tmin = new _M0TPB8MutLocalGdE(-1e+308);
  const tmax = new _M0TPB8MutLocalGdE(1e+308);
  if (dx === 0) {
    if (ox < b.min_x || ox > b.max_x) {
      return _M0DTPC16option6OptionGdE4None__;
    }
  } else {
    const inv = 1 / dx;
    const t1 = (b.min_x - ox) * inv;
    const t2 = (b.max_x - ox) * inv;
    const lo = t1 < t2 ? t1 : t2;
    const hi = t1 < t2 ? t2 : t1;
    if (lo > tmin.val) {
      tmin.val = lo;
    }
    if (hi < tmax.val) {
      tmax.val = hi;
    }
    if (tmin.val > tmax.val) {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
  if (dy === 0) {
    if (oy < b.min_y || oy > b.max_y) {
      return _M0DTPC16option6OptionGdE4None__;
    }
  } else {
    const inv = 1 / dy;
    const t1 = (b.min_y - oy) * inv;
    const t2 = (b.max_y - oy) * inv;
    const lo = t1 < t2 ? t1 : t2;
    const hi = t1 < t2 ? t2 : t1;
    if (lo > tmin.val) {
      tmin.val = lo;
    }
    if (hi < tmax.val) {
      tmax.val = hi;
    }
    if (tmin.val > tmax.val) {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
  if (tmax.val < 0) {
    return _M0DTPC16option6OptionGdE4None__;
  }
  if (tmin.val < 0) {
    return new _M0DTPC16option6OptionGdE4Some(0);
  }
  return new _M0DTPC16option6OptionGdE4Some(tmin.val);
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh9node__box(self, node) {
  const _tmp = self.min_x;
  const _tmp$2 = node >>> 0 < _tmp.length ? _tmp[node] : $oob();
  const _tmp$3 = self.min_y;
  const _tmp$4 = node >>> 0 < _tmp$3.length ? _tmp$3[node] : $oob();
  const _tmp$5 = self.max_x;
  const _tmp$6 = node >>> 0 < _tmp$5.length ? _tmp$5[node] : $oob();
  const _tmp$7 = self.max_y;
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(_tmp$2, _tmp$4, _tmp$6, node >>> 0 < _tmp$7.length ? _tmp$7[node] : $oob());
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh10ray__query(self, ox, oy, dx, dy, t_max, out) {
  const added = new _M0TPB8MutLocalGiE(0);
  const stack = [];
  if (self.n > 0) {
    let t;
    _L: {
      _L$2: {
        const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, _M0MP45lumen7tsumugi5algos7spatial3Bvh9node__box(self, 0));
        if (_bind$3.$tag === 1) {
          const _Some = _bind$3;
          const _t = _Some._0;
          t = _t;
          break _L$2;
        }
        break _L;
      }
      if (t <= t_max) {
        _M0MPC15array5Array4pushGiE(stack, 0);
      }
    }
  }
  while (true) {
    if (stack.length > 0) {
      const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack));
      if (_M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(self, node)) {
        const _tmp = self.first;
        const first = node >>> 0 < _tmp.length ? _tmp[node] : $oob();
        const _tmp$2 = self.count;
        const cnt = node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob();
        let _tmp$3 = first;
        while (true) {
          const k = _tmp$3;
          if (k < (first + cnt | 0)) {
            const _tmp$4 = self.order;
            const p = k >>> 0 < _tmp$4.length ? _tmp$4[k] : $oob();
            let t;
            _L: {
              _L$2: {
                const _tmp$5 = self.boxes;
                const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, p >>> 0 < _tmp$5.length ? _tmp$5[p] : $oob());
                if (_bind$3.$tag === 1) {
                  const _Some = _bind$3;
                  const _t = _Some._0;
                  t = _t;
                  break _L$2;
                }
                break _L;
              }
              if (t <= t_max) {
                _M0MPC15array5Array4pushGiE(out, p);
                added.val = added.val + 1 | 0;
              }
            }
            _tmp$3 = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        const _tmp = self.left;
        const l = node >>> 0 < _tmp.length ? _tmp[node] : $oob();
        const _tmp$2 = self.right;
        const r = node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob();
        const tl = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, _M0MP45lumen7tsumugi5algos7spatial3Bvh9node__box(self, l));
        const tr = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, _M0MP45lumen7tsumugi5algos7spatial3Bvh9node__box(self, r));
        let order_flip;
        let a;
        let b;
        _L: {
          _L$2: {
            if (tl.$tag === 1) {
              const _Some = tl;
              const _a = _Some._0;
              if (tr.$tag === 1) {
                const _Some$2 = tr;
                const _b = _Some$2._0;
                a = _a;
                b = _b;
                break _L$2;
              } else {
                order_flip = false;
              }
            } else {
              if (tr.$tag === 1) {
                order_flip = true;
              } else {
                order_flip = false;
              }
            }
            break _L;
          }
          order_flip = a > b;
        }
        let near;
        let far;
        _L$2: {
          if (order_flip) {
            near = r;
            far = l;
            break _L$2;
          } else {
            near = l;
            far = r;
            break _L$2;
          }
        }
        const t_far = order_flip ? tl : tr;
        const t_near = order_flip ? tr : tl;
        let t;
        _L$3: {
          _L$4: {
            if (t_far.$tag === 1) {
              const _Some = t_far;
              const _t = _Some._0;
              t = _t;
              break _L$4;
            }
            break _L$3;
          }
          if (t <= t_max) {
            _M0MPC15array5Array4pushGiE(stack, far);
          }
        }
        let t$2;
        _L$4: {
          _L$5: {
            if (t_near.$tag === 1) {
              const _Some = t_near;
              const _t = _Some._0;
              t$2 = _t;
              break _L$5;
            }
            break _L$4;
          }
          if (t$2 <= t_max) {
            _M0MPC15array5Array4pushGiE(stack, near);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return added.val;
}
function _M0MP45lumen7tsumugi5algos7spatial3Bvh5depth(self) {
  if (self.n === 0) {
    return 0;
  }
  const stack = [{ _0: 0, _1: 1 }];
  const best = new _M0TPB8MutLocalGiE(1);
  while (true) {
    if (stack.length > 0) {
      let node;
      let d;
      _L: {
        const _bind$3 = _M0MPC16option6Option6unwrapGUiiEE(_M0MPC15array5Array3popGUiiEE(stack));
        const _node = _bind$3._0;
        const _d = _bind$3._1;
        node = _node;
        d = _d;
        break _L;
      }
      if (d > best.val) {
        best.val = d;
      }
      if (!_M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(self, node)) {
        const _tmp = self.left;
        _M0MPC15array5Array4pushGUiiEE(stack, { _0: node >>> 0 < _tmp.length ? _tmp[node] : $oob(), _1: d + 1 | 0 });
        const _tmp$2 = self.right;
        _M0MPC15array5Array4pushGUiiEE(stack, { _0: node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob(), _1: d + 1 | 0 });
      }
      continue;
    } else {
      break;
    }
  }
  return best.val;
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
function _M0MP45lumen7tsumugi5algos7spatial4Aabb9expand__d(self, d) {
  return new _M0TP45lumen7tsumugi5algos7spatial4Aabb(self.min_x - d, self.min_y - d, self.max_x + d, self.max_y + d);
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(self, x, y) {
  return x >= self.min_x && (x <= self.max_x && (y >= self.min_y && y <= self.max_y));
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb13contains__box(self, o) {
  return o.min_x >= self.min_x && (o.max_x <= self.max_x && (o.min_y >= self.min_y && o.max_y <= self.max_y));
}
function _M0MP45lumen7tsumugi5algos7spatial4Aabb15half__perimeter(self) {
  return _M0MP45lumen7tsumugi5algos7spatial4Aabb5width(self) + _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(self);
}
function _M0FP45lumen7tsumugi5algos7spatial11ray__sphere(ox, oy, dx, dy, cx, cy, r) {
  const fx = ox - cx;
  const fy = oy - cy;
  const a = dx * dx + dy * dy;
  if (a === 0) {
    return _M0DTPC16option6OptionGdE4None__;
  }
  const b = 2 * (fx * dx + fy * dy);
  const c = fx * fx + fy * fy - r * r;
  const disc = b * b - 4 * a * c;
  if (disc < 0) {
    return _M0DTPC16option6OptionGdE4None__;
  }
  const sd = Math.sqrt(disc);
  const t0 = (-b - sd) / (2 * a);
  const t1 = (-b + sd) / (2 * a);
  if (t0 >= 0) {
    return new _M0DTPC16option6OptionGdE4Some(t0);
  }
  if (t1 >= 0) {
    return new _M0DTPC16option6OptionGdE4Some(0);
  }
  return _M0DTPC16option6OptionGdE4None__;
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, seed, world) {
  const out = $make_array_len_and_init(n, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const s = new _M0TPB8MutLocalGiE(seed);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const x = ((s.val + 0) / 1073741824 - 1) * 0.5 + 0.5;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const y = ((s.val + 0) / 1073741824 - 1) * 0.5 + 0.5;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (64 === 0) {
        $panic();
      }
      const w = 1 + ((s.val % 64 | 0) + 0) * 0.5;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (64 === 0) {
        $panic();
      }
      const h = 1 + ((s.val % 64 | 0) + 0) * 0.5;
      let bx;
      let by;
      _L: {
        if (3 === 0) {
          $panic();
        }
        if ((i % 3 | 0) === 0) {
          bx = 0.05;
          by = 0.05;
          break _L;
        } else {
          bx = x * world;
          by = y * world;
          break _L;
        }
      }
      if (i >>> 0 < out.length) {
        out[i] = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(bx, by, bx + w, by + h);
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
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12naive__query(boxes, n, q) {
  const out = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      if (_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(i >>> 0 < boxes.length ? boxes[i] : $oob(), q)) {
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
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(a) {
  const b = _M0MPC15array5Array4copyGiE(a);
  _M0MPC15array5Array4sortGiE(b);
  return b;
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test14no__duplicates(a) {
  const b = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(a);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < b.length) {
      if (_M0MPC15array5Array2atGiE(b, i) === _M0MPC15array5Array2atGiE(b, i - 1 | 0)) {
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
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13test__queries(m, seed, world) {
  const out = [];
  const s = new _M0TPB8MutLocalGiE(seed);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < m) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const x = ((s.val + 0) / 1073741824 - 1) * 0.5 + 0.5;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const y = ((s.val + 0) / 1073741824 - 1) * 0.5 + 0.5;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (128 === 0) {
        $panic();
      }
      const w = 2 + ((s.val % 128 | 0) + 0);
      const cx = x * world;
      const cy = y * world;
      _M0MPC15array5Array4pushGUiiEE(out, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(cx, cy, cx + w, cy + w));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__0() {
  const n = 400;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 42, 128);
  const grid = _M0MP45lumen7tsumugi5algos7spatial4Grid5build(boxes, n, 8, undefined);
  const queries = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13test__queries(120, 7, 128);
  let _tmp = 0;
  while (true) {
    const qi = _tmp;
    if (qi < queries.length) {
      const q = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(queries, qi);
      const got = [];
      _M0MP45lumen7tsumugi5algos7spatial4Grid5query(grid, q, got);
      const want = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12naive__query(boxes, n, q);
      const _tmp$2 = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test14no__duplicates(got);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "duplicates in query ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, qi);
      const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
      const _bind$4 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:95:5-95:69@lumen/tsumugi");
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      const _bind$5 = _M0FPC15debug10assert__eqGRPB5ArrayGiEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(got), _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(want), undefined, "algos/spatial/spatial_test.mbt:96:5-96:51@lumen/tsumugi");
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      _tmp = qi + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__1() {
  const n = 200;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 11, 64);
  const grid = _M0MP45lumen7tsumugi5algos7spatial4Grid5build(boxes, n, 6, undefined);
  const queries = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13test__queries(40, 3, 64);
  let _tmp = 0;
  while (true) {
    const qi = _tmp;
    if (qi < queries.length) {
      const q = _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(queries, qi);
      const cand = [];
      _M0MP45lumen7tsumugi5algos7spatial4Grid17query__candidates(grid, q, cand);
      const exact = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12naive__query(boxes, n, q);
      const cs = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(cand);
      let _tmp$2 = 0;
      while (true) {
        const k = _tmp$2;
        if (k < exact.length) {
          const found = new _M0TPB8MutLocalGbE(false);
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < cs.length) {
              if (_M0MPC15array5Array2atGiE(cs, j) === _M0MPC15array5Array2atGiE(exact, k)) {
                found.val = true;
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _tmp$4 = found.val;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "missing ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGiE(exact, k));
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " in candidates");
          const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
          const _bind$4 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:121:7-121:66@lumen/tsumugi");
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _ok._0;
          } else {
            return _bind$4;
          }
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = qi + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__2() {
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(4, 5, 1000);
  const grid = _M0MP45lumen7tsumugi5algos7spatial4Grid5build(boxes, 4, 0.001, 256);
  const _tmp = _M0MP45lumen7tsumugi5algos7spatial4Grid5cells(grid) <= 256;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cells ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP45lumen7tsumugi5algos7spatial4Grid5cells(grid));
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:132:3-132:64@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const q = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(-10, -10, 1010, 1010);
  const got = [];
  _M0MP45lumen7tsumugi5algos7spatial4Grid5query(grid, q, got);
  return _M0FPC15debug10assert__eqGiE(got.length, 4, undefined, "algos/spatial/spatial_test.mbt:137:3-137:29@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__3() {
  const _bind$3 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(0n, 0n), 0n, undefined, "algos/spatial/spatial_test.mbt:143:3-143:45@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(1n, 0n), 1n, undefined, "algos/spatial/spatial_test.mbt:144:3-144:45@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(0n, 1n), 2n, undefined, "algos/spatial/spatial_test.mbt:145:3-145:45@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(1n, 1n), 3n, undefined, "algos/spatial/spatial_test.mbt:146:3-146:45@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(2n, 0n), 4n, undefined, "algos/spatial/spatial_test.mbt:147:3-147:45@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial7morton2(3n, 3n), 15n, undefined, "algos/spatial/spatial_test.mbt:148:3-148:46@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const s = new _M0TPB8MutLocalGiE(12345);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 20000) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const x = _M0MPC13int3Int10to__uint64(s.val & 65535);
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      const y = _M0MPC13int3Int10to__uint64(s.val & 65535);
      const _bind$9 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial8part1by1(x), _M0FP45lumen7tsumugi5algos7spatial14part1by1__loop(x), undefined, "algos/spatial/spatial_test.mbt:155:5-155:63@lumen/tsumugi");
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        return _bind$9;
      }
      const _bind$10 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial8part1by1(y), _M0FP45lumen7tsumugi5algos7spatial14part1by1__loop(y), undefined, "algos/spatial/spatial_test.mbt:156:5-156:63@lumen/tsumugi");
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _ok._0;
      } else {
        return _bind$10;
      }
      const m = _M0FP45lumen7tsumugi5algos7spatial7morton2(x, y);
      let dx;
      let dy;
      _L: {
        const _bind$11 = _M0FP45lumen7tsumugi5algos7spatial9demorton2(m);
        const _dx = _bind$11._0;
        const _dy = _bind$11._1;
        dx = _dx;
        dy = _dy;
        break _L;
      }
      const _bind$11 = _M0FPC15debug10assert__eqGmE(dx, x, undefined, "algos/spatial/spatial_test.mbt:159:5-159:21@lumen/tsumugi");
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      const _bind$12 = _M0FPC15debug10assert__eqGmE(dy, y, undefined, "algos/spatial/spatial_test.mbt:160:5-160:21@lumen/tsumugi");
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        _ok._0;
      } else {
        return _bind$12;
      }
      const x3 = BigInt.asUintN(64, x & 2097151n);
      const y3 = BigInt.asUintN(64, y & 2097151n);
      const z3 = BigInt.asUintN(64, BigInt.asUintN(64, x3 ^ BigInt.asUintN(64, BigInt.asUintN(64, y3) >> BigInt(3 & 63))) & 2097151n);
      const _bind$13 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial8part1by2(x3), _M0FP45lumen7tsumugi5algos7spatial14part1by2__loop(x3), undefined, "algos/spatial/spatial_test.mbt:165:5-165:65@lumen/tsumugi");
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _ok._0;
      } else {
        return _bind$13;
      }
      const _bind$14 = _M0FPC15debug10assert__eqGmE(_M0FP45lumen7tsumugi5algos7spatial8part1by2(z3), _M0FP45lumen7tsumugi5algos7spatial14part1by2__loop(z3), undefined, "algos/spatial/spatial_test.mbt:166:5-166:65@lumen/tsumugi");
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _ok._0;
      } else {
        return _bind$14;
      }
      const m3 = _M0FP45lumen7tsumugi5algos7spatial7morton3(x3, y3, z3);
      let ay;
      let ax;
      let az;
      _L$2: {
        const _bind$15 = _M0FP45lumen7tsumugi5algos7spatial9demorton3(m3);
        const _ax = _bind$15._0;
        const _ay = _bind$15._1;
        const _az = _bind$15._2;
        ay = _ay;
        ax = _ax;
        az = _az;
        break _L$2;
      }
      const _bind$15 = _M0FPC15debug10assert__eqGmE(ax, x3, undefined, "algos/spatial/spatial_test.mbt:169:5-169:22@lumen/tsumugi");
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _ok._0;
      } else {
        return _bind$15;
      }
      const _bind$16 = _M0FPC15debug10assert__eqGmE(ay, y3, undefined, "algos/spatial/spatial_test.mbt:170:5-170:22@lumen/tsumugi");
      if (_bind$16.$tag === 1) {
        const _ok = _bind$16;
        _ok._0;
      } else {
        return _bind$16;
      }
      const _bind$17 = _M0FPC15debug10assert__eqGmE(az, z3, undefined, "algos/spatial/spatial_test.mbt:171:5-171:22@lumen/tsumugi");
      if (_bind$17.$tag === 1) {
        const _ok = _bind$17;
        _ok._0;
      } else {
        return _bind$17;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__4() {
  const n = 1000;
  const xs = _M0MPC15array5Array4makeGdE(n, 0);
  const ys = _M0MPC15array5Array4makeGdE(n, 0);
  const s = new _M0TPB8MutLocalGiE(999);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      _M0MPC15array5Array3setGdE(xs, i, (s.val & 1023) + 0);
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      _M0MPC15array5Array3setGdE(ys, i, (s.val & 1023) + 0);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const codes = _M0MPC15array5Array4makeGmE(n, 0n);
  const idx = _M0MPC15array5Array4makeGiE(n, 0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      _M0MPC15array5Array3setGmE(codes, i, _M0FP45lumen7tsumugi5algos7spatial7morton2(_M0MPC13int3Int10to__uint64(_M0MPC16double6Double7to__int(_M0MPC15array5Array2atGdE(xs, i))), _M0MPC13int3Int10to__uint64(_M0MPC16double6Double7to__int(_M0MPC15array5Array2atGdE(ys, i)))));
      _M0MPC15array5Array3setGiE(idx, i, i);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array13sort__by__keyGimE(idx, (i) => _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(codes, i));
  const walk = new _M0TPB8MutLocalGdE(0);
  let _tmp$3 = 1;
  while (true) {
    const k = _tmp$3;
    if (k < n) {
      const a = _M0MPC15array5Array2atGiE(idx, k - 1 | 0);
      const b = _M0MPC15array5Array2atGiE(idx, k);
      const dx = _M0MPC15array5Array2atGdE(xs, a) - _M0MPC15array5Array2atGdE(xs, b);
      const dy = _M0MPC15array5Array2atGdE(ys, a) - _M0MPC15array5Array2atGdE(ys, b);
      walk.val = walk.val + Math.sqrt(dx * dx + dy * dy);
      _tmp$3 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const random_walk = new _M0TPB8MutLocalGdE(0);
  let _tmp$4 = 1;
  while (true) {
    const k = _tmp$4;
    if (k < n) {
      if (n === 0) {
        $panic();
      }
      const a = (Math.imul(k, 7919) | 0) % n | 0;
      if (n === 0) {
        $panic();
      }
      const b = (Math.imul(k - 1 | 0, 7919) | 0) % n | 0;
      const dx = _M0MPC15array5Array2atGdE(xs, a) - _M0MPC15array5Array2atGdE(xs, b);
      const dy = _M0MPC15array5Array2atGdE(ys, a) - _M0MPC15array5Array2atGdE(ys, b);
      random_walk.val = random_walk.val + Math.sqrt(dx * dx + dy * dy);
      _tmp$4 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$5 = walk.val < random_walk.val * 0.5;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "morton walk ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, walk.val);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " vs random ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, random_walk.val);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:216:3-219:4@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__5() {
  const _bind$3 = [1, 2, 5, 17, 200, 1000];
  const _bind$4 = _bind$3.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const n = _bind$3[_];
      const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 77 + n | 0, 256);
      const bvh = _M0MP45lumen7tsumugi5algos7spatial3Bvh5build(boxes, n);
      const seen = $make_array_len_and_init(n, 0);
      const leaves = [];
      const stack = [0];
      while (true) {
        if (stack.length > 0) {
          const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack));
          if (_M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(bvh, node)) {
            _M0MPC15array5Array4pushGiE(leaves, node);
            const _tmp$2 = bvh.first;
            const first = node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob();
            const _tmp$3 = bvh.count;
            const _tmp$4 = (node >>> 0 < _tmp$3.length ? _tmp$3[node] : $oob()) <= 4;
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "leaf too big: ");
            const _tmp$5 = bvh.count;
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, node >>> 0 < _tmp$5.length ? _tmp$5[node] : $oob());
            const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
            const _bind$6 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "algos/spatial/spatial_test.mbt:237:9-240:10@lumen/tsumugi");
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
            let _tmp$6 = first;
            while (true) {
              const k = _tmp$6;
              const _tmp$7 = bvh.count;
              if (k < (first + (node >>> 0 < _tmp$7.length ? _tmp$7[node] : $oob()) | 0)) {
                const _tmp$8 = bvh.order;
                const _tmp$9 = k >>> 0 < _tmp$8.length ? _tmp$8[k] : $oob();
                const _tmp$10 = bvh.order;
                const _tmp$11 = k >>> 0 < _tmp$10.length ? _tmp$10[k] : $oob();
                if (_tmp$9 >>> 0 < seen.length) {
                  seen[_tmp$9] = (_tmp$11 >>> 0 < seen.length ? seen[_tmp$11] : $oob()) + 1 | 0;
                } else {
                  $oob();
                }
                _tmp$6 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            const _tmp$2 = bvh.left;
            _M0MPC15array5Array4pushGiE(stack, node >>> 0 < _tmp$2.length ? _tmp$2[node] : $oob());
            const _tmp$3 = bvh.right;
            _M0MPC15array5Array4pushGiE(stack, node >>> 0 < _tmp$3.length ? _tmp$3[node] : $oob());
          }
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < n) {
          const _bind$5 = _M0FPC15debug10assert__eqGiE(i >>> 0 < seen.length ? seen[i] : $oob(), 1, undefined, "algos/spatial/spatial_test.mbt:250:7-250:28@lumen/tsumugi");
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _ok._0;
          } else {
            return _bind$5;
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const walk = [0];
      while (true) {
        if (walk.length > 0) {
          const node = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(walk));
          const _tmp$3 = bvh.min_x;
          const _tmp$4 = node >>> 0 < _tmp$3.length ? _tmp$3[node] : $oob();
          const _tmp$5 = bvh.min_y;
          const _tmp$6 = node >>> 0 < _tmp$5.length ? _tmp$5[node] : $oob();
          const _tmp$7 = bvh.max_x;
          const _tmp$8 = node >>> 0 < _tmp$7.length ? _tmp$7[node] : $oob();
          const _tmp$9 = bvh.max_y;
          const pb = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(_tmp$4, _tmp$6, _tmp$8, node >>> 0 < _tmp$9.length ? _tmp$9[node] : $oob());
          if (!_M0MP45lumen7tsumugi5algos7spatial3Bvh8is__leaf(bvh, node)) {
            const _tmp$10 = bvh.left;
            const _tmp$11 = node >>> 0 < _tmp$10.length ? _tmp$10[node] : $oob();
            const _tmp$12 = bvh.right;
            const _bind$5 = [_tmp$11, node >>> 0 < _tmp$12.length ? _tmp$12[node] : $oob()];
            const _bind$6 = _bind$5.length;
            let _tmp$13 = 0;
            while (true) {
              const _$2 = _tmp$13;
              if (_$2 < _bind$6) {
                const child = _bind$5[_$2];
                const _tmp$14 = bvh.min_x;
                const _tmp$15 = child >>> 0 < _tmp$14.length ? _tmp$14[child] : $oob();
                const _tmp$16 = bvh.min_y;
                const _tmp$17 = child >>> 0 < _tmp$16.length ? _tmp$16[child] : $oob();
                const _tmp$18 = bvh.max_x;
                const _tmp$19 = child >>> 0 < _tmp$18.length ? _tmp$18[child] : $oob();
                const _tmp$20 = bvh.max_y;
                const cb = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(_tmp$15, _tmp$17, _tmp$19, child >>> 0 < _tmp$20.length ? _tmp$20[child] : $oob());
                const _tmp$21 = _M0MP45lumen7tsumugi5algos7spatial4Aabb13contains__box(pb, cb);
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "child not contained (n=");
                _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
                const _bind$7 = _M0MPB13StringBuilder10to__string(_string_builder);
                const _bind$8 = _M0FPB12assert__true(_tmp$21, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length), "algos/spatial/spatial_test.mbt:270:11-270:79@lumen/tsumugi");
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
                _M0MPC15array5Array4pushGiE(walk, child);
                _tmp$13 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            const _tmp$10 = bvh.first;
            let _tmp$11 = node >>> 0 < _tmp$10.length ? _tmp$10[node] : $oob();
            while (true) {
              const k = _tmp$11;
              const _tmp$12 = bvh.first;
              const _tmp$13 = node >>> 0 < _tmp$12.length ? _tmp$12[node] : $oob();
              const _tmp$14 = bvh.count;
              if (k < (_tmp$13 + (node >>> 0 < _tmp$14.length ? _tmp$14[node] : $oob()) | 0)) {
                const _tmp$15 = bvh.order;
                const _tmp$16 = k >>> 0 < _tmp$15.length ? _tmp$15[k] : $oob();
                const bb = _tmp$16 >>> 0 < boxes.length ? boxes[_tmp$16] : $oob();
                const _tmp$17 = _M0MP45lumen7tsumugi5algos7spatial4Aabb13contains__box(pb, bb);
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(28);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "primitive not contained (n=");
                _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
                const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
                const _bind$6 = _M0FPB12assert__true(_tmp$17, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "algos/spatial/spatial_test.mbt:278:11-281:12@lumen/tsumugi");
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                _tmp$11 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      const d = _M0MP45lumen7tsumugi5algos7spatial3Bvh5depth(bvh);
      const limit = new _M0TPB8MutLocalGiE(2);
      const v = new _M0TPB8MutLocalGiE(1);
      while (true) {
        if (v.val < n) {
          v.val = Math.imul(v.val, 2) | 0;
          limit.val = limit.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$3 = d <= limit.val;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "n=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " depth ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, d);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " > ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, limit.val);
      const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
      const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "algos/spatial/spatial_test.mbt:293:5-293:64@lumen/tsumugi");
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        return _bind$6;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__6() {
  const n = 400;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 21, 128);
  const bvh = _M0MP45lumen7tsumugi5algos7spatial3Bvh5build(boxes, n);
  const queries = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13test__queries(120, 13, 128);
  let _tmp = 0;
  while (true) {
    const qi = _tmp;
    if (qi < queries.length) {
      const got = [];
      _M0MP45lumen7tsumugi5algos7spatial3Bvh5query(bvh, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(queries, qi), got);
      const _bind$3 = _M0FPC15debug10assert__eqGRPB5ArrayGiEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(got), _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12naive__query(boxes, n, _M0MPC15array5Array2atGRP45lumen7tsumugi5algos7spatial4AabbE(queries, qi))), undefined, "algos/spatial/spatial_test.mbt:306:5-306:81@lumen/tsumugi");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = qi + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__7() {
  const n = 300;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 31, 100);
  const bvh = _M0MP45lumen7tsumugi5algos7spatial3Bvh5build(boxes, n);
  const radii = [1e+308, 60, 25];
  const _bind$3 = radii.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const t_max = radii[_];
      let _tmp$2 = 0;
      while (true) {
        const k = _tmp$2;
        if (k < 60) {
          const s = ((Math.imul(k, 40503) | 0) + 7919 | 0) & 2147483647;
          if (100 === 0) {
            $panic();
          }
          const ox = (s % 100 | 0) + 0 - 50;
          if (97 === 0) {
            $panic();
          }
          if (100 === 0) {
            $panic();
          }
          const oy = ((s / 97 | 0) % 100 | 0) + 0 - 50;
          if (360 === 0) {
            $panic();
          }
          const ang = ((s % 360 | 0) + 0) * 0.0174532925199432955;
          const dx = _M0FPC14math3cos(ang);
          const dy = _M0FPC14math3sin(ang);
          const got = [];
          _M0MP45lumen7tsumugi5algos7spatial3Bvh10ray__query(bvh, ox, oy, dx, dy, t_max, got);
          const want = [];
          let _tmp$3 = 0;
          while (true) {
            const i = _tmp$3;
            if (i < n) {
              let t;
              _L: {
                _L$2: {
                  const _bind$4 = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, i >>> 0 < boxes.length ? boxes[i] : $oob());
                  if (_bind$4.$tag === 1) {
                    const _Some = _bind$4;
                    const _t = _Some._0;
                    t = _t;
                    break _L$2;
                  }
                  break _L;
                }
                if (t <= t_max) {
                  _M0MPC15array5Array4pushGiE(want, i);
                }
              }
              _tmp$3 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$4 = _M0FPC15debug10assert__eqGRPB5ArrayGiEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(got), _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(want), undefined, "algos/spatial/spatial_test.mbt:334:7-334:53@lumen/tsumugi");
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _ok._0;
          } else {
            return _bind$4;
          }
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13sorted__pairs(pairs) {
  const out = _M0MPC15array5Array4copyGUiiEE(pairs);
  _M0MPC15array5Array8sort__byGUiiEE(out, (a, b) => a._0 !== b._0 ? a._0 - b._0 | 0 : a._1 - b._1 | 0);
  return out;
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__8() {
  const n = 250;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 55, 64);
  const sap = _M0MP45lumen7tsumugi5algos7spatial3Sap5build(boxes, n);
  const got = [];
  _M0MP45lumen7tsumugi5algos7spatial3Sap5pairs(sap, got);
  const want = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      let _tmp$2 = i + 1 | 0;
      while (true) {
        const j = _tmp$2;
        if (j < n) {
          if (_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(i >>> 0 < boxes.length ? boxes[i] : $oob(), j >>> 0 < boxes.length ? boxes[j] : $oob())) {
            _M0MPC15array5Array4pushGUiiEE(want, { _0: i, _1: j });
          }
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPC15debug10assert__eqGRPB5ArrayGUiiEEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test13sorted__pairs(got), _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13sorted__pairs(want), undefined, "algos/spatial/spatial_test.mbt:354:3-354:51@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45____test__7370617469616c5f746573742e6d6274__9() {
  const n = 200;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 91, 50);
  const sap = _M0MP45lumen7tsumugi5algos7spatial3Sap5build(boxes, n);
  const s = new _M0TPB8MutLocalGiE(4242);
  let _tmp = 0;
  while (true) {
    const step = _tmp;
    if (step < 60) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (n === 0) {
        $panic();
      }
      const i = s.val % n | 0;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const nx = ((s.val % 500 | 0) + 0) * 0.1;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const ny = ((s.val % 500 | 0) + 0) * 0.1;
      let _tmp$2 = 0;
      while (true) {
        const k = _tmp$2;
        if (k < boxes.length) {
          if (k === i) {
            const h = _M0MP45lumen7tsumugi5algos7spatial4Aabb6height(k >>> 0 < boxes.length ? boxes[k] : $oob());
            const w = _M0MP45lumen7tsumugi5algos7spatial4Aabb5width(k >>> 0 < boxes.length ? boxes[k] : $oob());
            if (k >>> 0 < boxes.length) {
              boxes[k] = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(nx, ny, nx + w, ny + h);
            } else {
              $oob();
            }
          }
          _tmp$2 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MP45lumen7tsumugi5algos7spatial3Sap6update(sap, i, i >>> 0 < boxes.length ? boxes[i] : $oob());
      if (10 === 0) {
        $panic();
      }
      if ((step % 10 | 0) === 0) {
        const got = [];
        _M0MP45lumen7tsumugi5algos7spatial3Sap5pairs(sap, got);
        const want = [];
        let _tmp$3 = 0;
        while (true) {
          const a = _tmp$3;
          if (a < n) {
            let _tmp$4 = a + 1 | 0;
            while (true) {
              const b = _tmp$4;
              if (b < n) {
                if (_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(a >>> 0 < boxes.length ? boxes[a] : $oob(), b >>> 0 < boxes.length ? boxes[b] : $oob())) {
                  _M0MPC15array5Array4pushGUiiEE(want, { _0: a, _1: b });
                }
                _tmp$4 = b + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$3 = a + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$3 = _M0FPC15debug10assert__eqGRPB5ArrayGUiiEEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test13sorted__pairs(got), _M0FP45lumen7tsumugi5algos23spatial__blackbox__test13sorted__pairs(want), undefined, "algos/spatial/spatial_test.mbt:400:7-400:55@lumen/tsumugi");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
      }
      _tmp = step + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 1;
  while (true) {
    const k = _tmp$2;
    if (k < n) {
      const _tmp$3 = sap.order_min;
      const _tmp$4 = k - 1 | 0;
      const _tmp$5 = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      const _tmp$6 = (_tmp$5 >>> 0 < boxes.length ? boxes[_tmp$5] : $oob()).min_x;
      const _tmp$7 = sap.order_min;
      const _tmp$8 = k >>> 0 < _tmp$7.length ? _tmp$7[k] : $oob();
      const _tmp$9 = _tmp$6 <= (_tmp$8 >>> 0 < boxes.length ? boxes[_tmp$8] : $oob()).min_x;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "order_min broken at ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
      const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
      const _bind$4 = _M0FPB12assert__true(_tmp$9, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:405:5-408:6@lumen/tsumugi");
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      const _tmp$10 = sap.order_max;
      const _tmp$11 = k - 1 | 0;
      const _tmp$12 = _tmp$11 >>> 0 < _tmp$10.length ? _tmp$10[_tmp$11] : $oob();
      const _tmp$13 = (_tmp$12 >>> 0 < boxes.length ? boxes[_tmp$12] : $oob()).max_x;
      const _tmp$14 = sap.order_max;
      const _tmp$15 = k >>> 0 < _tmp$14.length ? _tmp$14[k] : $oob();
      const _tmp$16 = _tmp$13 <= (_tmp$15 >>> 0 < boxes.length ? boxes[_tmp$15] : $oob()).max_x;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "order_max broken at ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, k);
      const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder$2);
      const _bind$6 = _M0FPB12assert__true(_tmp$16, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "algos/spatial/spatial_test.mbt:409:5-412:6@lumen/tsumugi");
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        return _bind$6;
      }
      _tmp$2 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__10() {
  const s = new _M0TPB8MutLocalGiE(987);
  let _tmp = 0;
  while (true) {
    const k = _tmp;
    if (k < 200) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (200 === 0) {
        $panic();
      }
      const ox = ((s.val % 200 | 0) + 0) * 0.1 - 10;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (200 === 0) {
        $panic();
      }
      const oy = ((s.val % 200 | 0) + 0) * 0.1 - 10;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (6283 === 0) {
        $panic();
      }
      const ang = ((s.val % 6283 | 0) + 0) * 0.001;
      const dx = _M0FPC14math3cos(ang);
      const dy = _M0FPC14math3sin(ang);
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (100 === 0) {
        $panic();
      }
      const bx = ((s.val % 100 | 0) + 0) * 0.1;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (100 === 0) {
        $panic();
      }
      const by = ((s.val % 100 | 0) + 0) * 0.1;
      const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(bx, by, bx + 2, by + 1.5);
      let t;
      _L: {
        _L$2: {
          const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial9ray__aabb(ox, oy, dx, dy, b);
          if (_bind$3.$tag === 1) {
            const _Some = _bind$3;
            const _t = _Some._0;
            t = _t;
            break _L$2;
          } else {
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i <= 2000) {
                const tt = (i + 0) * 0.02;
                const px = ox + tt * dx;
                const py = oy + tt * dy;
                const _tmp$3 = !_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(b, px, py);
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "missed a hit at k=");
                _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " t=");
                _M0MPB13StringBuilder13write__objectGdE(_string_builder, tt);
                const _bind$4 = _M0MPB13StringBuilder10to__string(_string_builder);
                const _bind$5 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "algos/spatial/spatial_test.mbt:456:11-459:12@lumen/tsumugi");
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          break _L;
        }
        const px = ox + t * dx;
        const py = oy + t * dy;
        const _tmp$2 = _M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(_M0MP45lumen7tsumugi5algos7spatial4Aabb9expand__d(b, 1e-09), px, py) || t === 0;
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "entry point outside the box (k=");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "): t=");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, t);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " p=(");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, px);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, py);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") box=");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP45lumen7tsumugi5algos7spatial4Aabb11to__display(b));
        const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
        const _bind$4 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:445:9-448:10@lumen/tsumugi");
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
      }
      _tmp = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__11() {
  const s0 = _M0FP45lumen7tsumugi5algos7spatial11ray__sphere(10, 0, -1, 0, 0, 0, 2);
  let t;
  _L: {
    _L$2: {
      if (s0.$tag === 1) {
        const _Some = s0;
        const _t = _Some._0;
        t = _t;
        break _L$2;
      } else {
        const _bind$3 = "expected a hit";
        const _bind$4 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:470:13-470:35@lumen/tsumugi");
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _ok._0;
        } else {
          return _bind$4;
        }
      }
      break _L;
    }
    const _tmp = Math.abs(t - 8) < 1e-12;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "t=");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, t);
    const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
    const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "algos/spatial/spatial_test.mbt:469:16-469:68@lumen/tsumugi");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  let t$2;
  _L$2: {
    _L$3: {
      const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial11ray__sphere(0, 0, 1, 0, 0, 0, 2);
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _t = _Some._0;
        t$2 = _t;
        break _L$3;
      } else {
        const _bind$4 = "expected an inside hit";
        const _bind$5 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "algos/spatial/spatial_test.mbt:475:13-475:43@lumen/tsumugi");
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC15debug10assert__eqGdE(t$2, 0, undefined, "algos/spatial/spatial_test.mbt:474:16-474:33@lumen/tsumugi");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  const _bind$3 = _M0FP45lumen7tsumugi5algos7spatial11ray__sphere(10, 0, 1, 0, 0, 0, 2);
  let _tmp;
  if (_bind$3.$tag === 0) {
    _tmp = true;
  } else {
    _tmp = false;
  }
  const _bind$4 = _M0FPB12assert__true(_tmp, undefined, "algos/spatial/spatial_test.mbt:478:3-478:79@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const s = new _M0TPB8MutLocalGiE(555);
  let _tmp$2 = 0;
  while (true) {
    const k = _tmp$2;
    if (k < 200) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (100 === 0) {
        $panic();
      }
      const ox = ((s.val % 100 | 0) + 0) * 0.2 - 10;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (100 === 0) {
        $panic();
      }
      const oy = ((s.val % 100 | 0) + 0) * 0.2 - 10;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (6283 === 0) {
        $panic();
      }
      const ang = ((s.val % 6283 | 0) + 0) * 0.001;
      const dx = _M0FPC14math3cos(ang) * 2;
      const dy = _M0FPC14math3sin(ang) * 2;
      let t$3;
      _L$3: {
        _L$4: {
          const _bind$5 = _M0FP45lumen7tsumugi5algos7spatial11ray__sphere(ox, oy, dx, dy, 0, 0, 3);
          if (_bind$5.$tag === 1) {
            const _Some = _bind$5;
            const _t = _Some._0;
            t$3 = _t;
            break _L$4;
          }
          break _L$3;
        }
        if (t$3 > 0) {
          const px = ox + t$3 * dx;
          const py = oy + t$3 * dy;
          const d = Math.sqrt(px * px + py * py);
          const _tmp$3 = Math.abs(d - 3) < 1e-09;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "distance ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder, d);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " at k=");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
          const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
          const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "algos/spatial/spatial_test.mbt:496:11-496:79@lumen/tsumugi");
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
        }
      }
      _tmp$2 = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__12() {
  const a = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 2, 2);
  const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(1, -1, 5, 1);
  const u = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(a, b);
  const _bind$3 = _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(u, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, -1, 5, 2), undefined, "algos/spatial/spatial_test.mbt:508:3-508:56@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb13contains__box(u, a) && _M0MP45lumen7tsumugi5algos7spatial4Aabb13contains__box(u, b), undefined, "algos/spatial/spatial_test.mbt:509:3-509:54@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(a, b) && _M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(b, a), undefined, "algos/spatial/spatial_test.mbt:510:3-510:46@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty()), undefined, "algos/spatial/spatial_test.mbt:511:3-511:49@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPB12assert__true(!_M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), a), undefined, "algos/spatial/spatial_test.mbt:512:3-512:51@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(a, 0, 0) && _M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(a, 2, 2), undefined, "algos/spatial/spatial_test.mbt:513:3-513:72@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPB12assert__true(!_M0MP45lumen7tsumugi5algos7spatial4Aabb15contains__point(a, 2.0001, 1), undefined, "algos/spatial/spatial_test.mbt:514:3-514:46@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const acc = _M0MP45lumen7tsumugi5algos7spatial4Aabb5union(_M0MP45lumen7tsumugi5algos7spatial4Aabb5union(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), a), b);
  const _bind$10 = _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(acc, u, undefined, "algos/spatial/spatial_test.mbt:516:3-516:20@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPB12assert__true(Math.abs(_M0MP45lumen7tsumugi5algos7spatial4Aabb15half__perimeter(a) - 4) < 1e-12, undefined, "algos/spatial/spatial_test.mbt:517:3-517:58@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__13() {
  const n = 60;
  const boxes = $make_array_len_and_init(n, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty());
  const s = new _M0TPB8MutLocalGiE(91);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const x = ((s.val % 500 | 0) + 0) * 0.1;
      s.val = ((Math.imul(s.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const y = ((s.val % 500 | 0) + 0) * 0.1;
      if (i >>> 0 < boxes.length) {
        boxes[i] = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(x, y, x + 2, y + 2);
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sap = _M0MP45lumen7tsumugi5algos7spatial3Sap5build(boxes, n);
  const t = new _M0TPB8MutLocalGiE(4242);
  const msgs = [];
  let _tmp$2 = 0;
  while (true) {
    const step = _tmp$2;
    if (step < 200) {
      t.val = ((Math.imul(t.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (n === 0) {
        $panic();
      }
      const i = t.val % n | 0;
      t.val = ((Math.imul(t.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const nx = ((t.val % 500 | 0) + 0) * 0.1;
      t.val = ((Math.imul(t.val, 1103515245) | 0) + 12345 | 0) & 2147483647;
      if (500 === 0) {
        $panic();
      }
      const ny = ((t.val % 500 | 0) + 0) * 0.1;
      if (i >>> 0 < boxes.length) {
        boxes[i] = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(nx, ny, nx + 2, ny + 2);
      } else {
        $oob();
      }
      _M0MP45lumen7tsumugi5algos7spatial3Sap6update(sap, i, i >>> 0 < boxes.length ? boxes[i] : $oob());
      let _tmp$3 = 0;
      while (true) {
        const k = _tmp$3;
        if (k < n) {
          const _tmp$4 = sap.pos_min;
          const _tmp$5 = sap.order_min;
          const _tmp$6 = k >>> 0 < _tmp$5.length ? _tmp$5[k] : $oob();
          if ((_tmp$6 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$6] : $oob()) !== k) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "step=");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, step);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": pos_min broken at ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
            _M0MPC15array5Array4pushGUiiEE(msgs, _M0MPB13StringBuilder10to__string(_string_builder));
          }
          const _tmp$7 = sap.pos_max;
          const _tmp$8 = sap.order_max;
          const _tmp$9 = k >>> 0 < _tmp$8.length ? _tmp$8[k] : $oob();
          if ((_tmp$9 >>> 0 < _tmp$7.length ? _tmp$7[_tmp$9] : $oob()) !== k) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "step=");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, step);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": pos_max broken at ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
            _M0MPC15array5Array4pushGUiiEE(msgs, _M0MPB13StringBuilder10to__string(_string_builder));
          }
          if (k > 0) {
            const _tmp$10 = sap.order_min;
            const _tmp$11 = k - 1 | 0;
            const _tmp$12 = _tmp$11 >>> 0 < _tmp$10.length ? _tmp$10[_tmp$11] : $oob();
            const _tmp$13 = (_tmp$12 >>> 0 < boxes.length ? boxes[_tmp$12] : $oob()).min_x;
            const _tmp$14 = sap.order_min;
            const _tmp$15 = k >>> 0 < _tmp$14.length ? _tmp$14[k] : $oob();
            if (_tmp$13 > (_tmp$15 >>> 0 < boxes.length ? boxes[_tmp$15] : $oob()).min_x) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(34);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "step=");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, step);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": order_min unsorted at ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
              const _tmp$16 = sap.order_min;
              const _tmp$17 = k - 1 | 0;
              const _tmp$18 = _tmp$17 >>> 0 < _tmp$16.length ? _tmp$16[_tmp$17] : $oob();
              _M0MPB13StringBuilder13write__objectGdE(_string_builder, (_tmp$18 >>> 0 < boxes.length ? boxes[_tmp$18] : $oob()).min_x);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " > ");
              const _tmp$19 = sap.order_min;
              const _tmp$20 = k >>> 0 < _tmp$19.length ? _tmp$19[k] : $oob();
              _M0MPB13StringBuilder13write__objectGdE(_string_builder, (_tmp$20 >>> 0 < boxes.length ? boxes[_tmp$20] : $oob()).min_x);
              _M0MPC15array5Array4pushGUiiEE(msgs, _M0MPB13StringBuilder10to__string(_string_builder));
            }
            const _tmp$16 = sap.order_max;
            const _tmp$17 = k - 1 | 0;
            const _tmp$18 = _tmp$17 >>> 0 < _tmp$16.length ? _tmp$16[_tmp$17] : $oob();
            const _tmp$19 = (_tmp$18 >>> 0 < boxes.length ? boxes[_tmp$18] : $oob()).max_x;
            const _tmp$20 = sap.order_max;
            const _tmp$21 = k >>> 0 < _tmp$20.length ? _tmp$20[k] : $oob();
            if (_tmp$19 > (_tmp$21 >>> 0 < boxes.length ? boxes[_tmp$21] : $oob()).max_x) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "step=");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, step);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": order_max unsorted at ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, k);
              _M0MPC15array5Array4pushGUiiEE(msgs, _M0MPB13StringBuilder10to__string(_string_builder));
            }
          }
          _tmp$3 = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (msgs.length > 0) {
        break;
      }
      _tmp$2 = step + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$3 = msgs.length;
  const _bind$3 = "\n";
  return _M0FPC15debug10assert__eqGiE(_tmp$3, 0, _M0MPC15array5Array4joinGsE(msgs, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)), "algos/spatial/spatial_test.mbt:571:3-571:51@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__14() {
  const n = 20;
  const boxes = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test11test__boxes(n, 123, 40);
  const g = _M0MP45lumen7tsumugi5algos7spatial4Grid5build(boxes, n, 8, undefined);
  const q = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 40, 40);
  const want = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12naive__query(boxes, n, q));
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < 8) {
      const got = [];
      _M0MP45lumen7tsumugi5algos7spatial4Grid5query(g, q, got);
      const _bind$3 = _M0FPC15debug10assert__eqGRPB5ArrayGiEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test12sorted__copy(got), want, undefined, "algos/spatial/spatial_test.mbt:589:5-589:38@lumen/tsumugi");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const empty = [];
  _M0MP45lumen7tsumugi5algos7spatial4Grid5query(g, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(-100, -100, -90, -90), empty);
  return _M0FPC15debug10assert__eqGiE(empty.length, 0, undefined, "algos/spatial/spatial_test.mbt:594:3-594:31@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test46____test__7370617469616c5f746573742e6d6274__15() {
  const a = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(0, 0, 10, 10);
  const b = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(5, -5, 20, 5);
  const i = _M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(a, b);
  const _bind$3 = _M0FPC15debug10assert__eqGRP45lumen7tsumugi5algos7spatial4AabbE(i, _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(5, 0, 10, 5), undefined, "algos/spatial/spatial_test.mbt:603:3-603:56@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _tmp = _M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(a, b);
  const _bind$4 = "overlaps disagrees with a non-empty intersect";
  const _bind$5 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "algos/spatial/spatial_test.mbt:604:3-607:4@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const c = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10, 0, 20, 10);
  const _tmp$2 = _M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(a, c);
  const _bind$6 = "edge-touching boxes should overlap";
  const _bind$7 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "algos/spatial/spatial_test.mbt:610:3-610:71@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _tmp$3 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(a, c)) === false;
  const _bind$8 = "edge: zero-area box, not empty";
  const _bind$9 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length), "algos/spatial/spatial_test.mbt:611:3-614:4@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const d = _M0MP45lumen7tsumugi5algos7spatial4Aabb3new(10.001, 0, 20, 10);
  const _tmp$4 = _M0MP45lumen7tsumugi5algos7spatial4Aabb8overlaps(a, d) === false;
  const _bind$10 = "disjoint boxes must not overlap";
  const _bind$11 = _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), "algos/spatial/spatial_test.mbt:616:3-616:77@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _tmp$5 = _M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(a, d));
  const _bind$12 = "disjoint intersect must be empty";
  const _bind$13 = _M0FPB12assert__true(_tmp$5, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length), "algos/spatial/spatial_test.mbt:617:3-617:81@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(a, _M0MP45lumen7tsumugi5algos7spatial4Aabb5empty())), undefined, "algos/spatial/spatial_test.mbt:619:3-619:62@lumen/tsumugi");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  return _M0FPB12assert__true(_M0MP45lumen7tsumugi5algos7spatial4Aabb9is__empty(_M0MP45lumen7tsumugi5algos7spatial4Aabb9intersect(_M0MP45lumen7tsumugi5algos7spatial4Aabb5empty(), a)), undefined, "algos/spatial/spatial_test.mbt:620:3-620:62@lumen/tsumugi");
}
function _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP45lumen7tsumugi5algos23spatial__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
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
    on_err(new _M0DTPC15error5Error119lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP45lumen7tsumugi5algos23spatial__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$3 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP45lumen7tsumugi5algos23spatial__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
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
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
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
  _M0FP45lumen7tsumugi5algos23spatial__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi5algos23spatial__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
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
    const _bind$3 = _M0IP45lumen7tsumugi5algos23spatial__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
      const _bind$4 = _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
        const _bind$5 = _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
          const _bind$6 = _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
            const _bind$7 = _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi5algos23spatial__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
      _try_err = new _M0DTPC15error5Error121lumen_2ftsumugi_2falgos_2fspatial__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
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
function _M0FP45lumen7tsumugi5algos23spatial__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$3 = 0;
  const _bind$4 = tests.length;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const entry = i >>> 0 < tests.length ? tests[i] : $oob();
      _M0FP45lumen7tsumugi5algos23spatial__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP45lumen7tsumugi5algos23spatial__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi5algos23spatial__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP45lumen7tsumugi5algos23spatial__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP45lumen7tsumugi5algos23spatial__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP45lumen7tsumugi5algos23spatial__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=spatial.blackbox_test.js.map
