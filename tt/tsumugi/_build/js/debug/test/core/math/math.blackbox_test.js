const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
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
function _M0TPB13SourceLocRepr(param0, param1, param2, param3, param4) {
  this.filename = param0;
  this.start_line = param1;
  this.start_column = param2;
  this.end_line = param3;
  this.end_column = param4;
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
function _M0DTPC15error5Error115lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error115lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 3;
function _M0DTPC15error5Error117lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error117lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 2;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError.prototype.$tag = 1;
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
function _M0TPB9ArrayViewGRPC15debug4ReprE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
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
function _M0DTPC16result6ResultGuRPB12InspectErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB12InspectErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB12InspectErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB12InspectErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TP45lumen7tsumugi4core4math4Vec2(param0, param1) {
  this.x = param0;
  this.y = param1;
}
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRP45lumen7tsumugi4core4math4Vec2E(param0) {
  this.val = param0;
}
function _M0TP45lumen7tsumugi4core4math6Mat2x3(param0, param1, param2, param3, param4, param5) {
  this.a = param0;
  this.b = param1;
  this.c = param2;
  this.d = param3;
  this.e = param4;
  this.f = param5;
}
function _M0TP45lumen7tsumugi4core4math11AffineParts(param0, param1, param2, param3) {
  this.translate = param0;
  this.rotation = param1;
  this.scale = param2;
  this.skew_x = param3;
}
function _M0TP45lumen7tsumugi4core4math8CubicBez(param0, param1, param2, param3) {
  this.p0 = param0;
  this.p1 = param1;
  this.p2 = param2;
  this.p3 = param3;
}
function _M0TPB8MutLocalGjE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP45lumen7tsumugi4core20math__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP45lumen7tsumugi4core20math__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP45lumen7tsumugi4core20math__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP45lumen7tsumugi4core20math__blackbox__test38moonbit__test__driver__js__parse__args = () => {
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
const _M0FP0143moonbitlang_2fcore_2fbuiltin_2fArray_5b_28lumen_2ftsumugi_2fcore_2fmath_2fEasing_2c_20Double_29_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug = { method_0: _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP45lumen7tsumugi4core4math6EasingdEE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 1: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
    case 2: {
      return "lumen/tsumugi/core/math_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 4: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    default: {
      return "lumen/tsumugi/core/math_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
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
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
(() => {
})();
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 = 16;
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FPC15debug10assert__eqN6constrS1686GdE = false;
const _M0FPC15debug10assert__eqN6constrS1686GiE = false;
const _M0MPB13SourceLocRepr5parseN26_2atransition__table__1104S1130 = [15, 15, 15, 15, 15, 15, 15, 15, 1, 1, 1, 2, 1, 15, 15, 1, 1, 3, 2, 1, 15, 15, 1, 1, 3, 4, 1, 15, 15, 1, 1, 5, 2, 1, 15, 15, 1, 6, 7, 4, 1, 15, 15, 1, 1, 8, 2, 1, 15, 15, 1, 6, 7, 4, 1, 15, 15, 1, 1, 8, 9, 1, 15, 15, 1, 1, 10, 2, 1, 15, 15, 1, 1, 11, 4, 12, 15, 15, 1, 1, 11, 4, 12, 15, 0, 13, 13, 13, 2, 13, 15, 0, 13, 13, 13, 2, 13, 15, 15, 1, 1, 1, 1, 1, 15];
const _bind = [{ _0: 0, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__0, _1: ["inverse via adjugate: M * M^-1 == I over 1000 random affine maps"] } }, { _0: 1, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__1, _1: ["inverse rejects degenerate maps instead of dividing by zero"] } }, { _0: 2, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__2, _1: ["decompose <-> rebuild round trip for TRS+skew"] } }, { _0: 3, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__3, _1: ["Kahan-Neumaier beats naive summation by orders of magnitude"] } }, { _0: 4, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__4, _1: ["inv_sqrt accuracy vs exact reciprocal square root"] } }, { _0: 5, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__5, _1: ["cubic flattening: every curve sample lies within tol of the polyline"] } }, { _0: 6, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__6, _1: ["flattening is adaptive: tighter tolerance yields more segments"] } }, { _0: 7, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__7, _1: ["cubic bounds are exact extrema, not samples"] } }, { _0: 8, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__8, _1: ["arc to bezier: radial error stays under the kappa bound"] } }, { _0: 9, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__9, _1: ["easing endpoints and monotonicity"] } }, { _0: 10, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__10, _1: ["vec2 batch bounds on planar input"] } }, { _0: 11, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__11, _1: ["snapshot: easing samples"] } }, { _0: 12, _1: { _0: _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__12, _1: ["tm.sqrt clamps instead of NaN, and flatten_to_array owns its storage"] } }];
const _bind$2 = [{ _0: "math_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 13), undefined) }];
const _M0FP45lumen7tsumugi4core20math__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$2, 0, 1), undefined);
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
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
function _M0MPB13StringBuilder13write__objectGRPB9SourceLocE(self, obj) {
  _M0IPB9SourceLocPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGbE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGbE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0MPB13SourceLocRepr5parse(repr) {
  const _bind$3 = repr.length;
  const _target_1076 = new _M0TPC16string10StringView(repr, 0, _bind$3);
  let _cursor_1077 = 0;
  const _start_1078 = _cursor_1077;
  let _accept_state_1080 = -1;
  let _match_end_1081 = -1;
  let _state_1082 = 14;
  let _match_tag_saver_0_1083 = -1;
  let _match_tag_saver_1_1084 = -1;
  let _match_tag_saver_2_1085 = -1;
  let _match_tag_saver_3_1086 = -1;
  let _match_tag_saver_4_1087 = -1;
  let _tag_0_1089 = -1;
  let _tag_0_1_1090 = -1;
  let _tag_0_2_1091 = -1;
  let _tag_1_1093 = -1;
  let _tag_1_1_1094 = -1;
  let _tag_2_1096 = -1;
  let _tag_3_1098 = -1;
  let _tag_4_1100 = -1;
  while (true) {
    if (_state_1082 !== 15) {
      if (_state_1082 < 14) {
        const _bind$4 = _state_1082;
        switch (_bind$4) {
          case 0: {
            _tag_0_1089 = _tag_0_1_1090;
            _match_tag_saver_0_1083 = _tag_0_1089;
            _match_tag_saver_1_1084 = _tag_1_1093;
            _match_tag_saver_2_1085 = _tag_2_1096;
            _match_tag_saver_3_1086 = _tag_3_1098;
            _match_tag_saver_4_1087 = _tag_4_1100;
            _accept_state_1080 = _state_1082;
            _match_end_1081 = _cursor_1077;
            break;
          }
          case 1: {
            _tag_0_1089 = _cursor_1077;
            break;
          }
          case 2: {
            _tag_0_1_1090 = _tag_0_1089;
            _tag_0_1089 = _cursor_1077;
            break;
          }
          case 3: {
            _tag_0_1089 = _cursor_1077;
            _tag_1_1093 = _cursor_1077;
            break;
          }
          case 4: {
            _tag_0_2_1091 = _tag_0_1_1090;
            _tag_0_1_1090 = _tag_0_1089;
            _tag_0_1089 = _cursor_1077;
            break;
          }
          case 5: {
            _tag_0_1089 = _cursor_1077;
            _tag_1_1_1094 = _tag_1_1093;
            _tag_1_1093 = _cursor_1077;
            _tag_2_1096 = _cursor_1077;
            break;
          }
          case 6: {
            _tag_0_1_1090 = _tag_0_2_1091;
            _tag_0_1089 = _cursor_1077;
            _tag_1_1093 = _tag_1_1_1094;
            break;
          }
          case 7: {
            _tag_0_1089 = _cursor_1077;
            _tag_1_1093 = _cursor_1077;
            _tag_2_1096 = _cursor_1077;
            break;
          }
          case 8: {
            _tag_0_1089 = _cursor_1077;
            _tag_3_1098 = _cursor_1077;
            break;
          }
          case 9: {
            _tag_0_2_1091 = _tag_0_1_1090;
            _tag_0_1_1090 = _tag_0_1089;
            _tag_0_1089 = _cursor_1077;
            break;
          }
          case 10: {
            _tag_0_1089 = _cursor_1077;
            _tag_1_1_1094 = _tag_1_1093;
            _tag_1_1093 = _cursor_1077;
            _tag_4_1100 = _cursor_1077;
            break;
          }
          case 11: {
            _tag_0_1089 = _cursor_1077;
            _tag_1_1093 = _cursor_1077;
            _tag_4_1100 = _cursor_1077;
            break;
          }
          case 12: {
            _tag_0_1_1090 = _tag_0_2_1091;
            _tag_0_1089 = _cursor_1077;
            _tag_1_1093 = _tag_1_1_1094;
            break;
          }
          case 13: {
            _tag_0_1089 = _cursor_1077;
            break;
          }
          default: {
            $panic();
          }
        }
      }
      const _tmp = Math.imul(_state_1082, 7) | 0;
      let _next_char_1103;
      if (_cursor_1077 < _bind$3) {
        const _char_1102 = repr.charCodeAt(_cursor_1077);
        _cursor_1077 = _cursor_1077 + 1 | 0;
        _next_char_1103 = _char_1102;
      } else {
        _next_char_1103 = -1;
      }
      _state_1082 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0MPB13SourceLocRepr5parseN26_2atransition__table__1104S1130, _tmp + (_next_char_1103 < 48 ? (_next_char_1103 < 45 ? (_next_char_1103 < 0 ? 0 : 1) : _next_char_1103 > 45 ? 1 : 2) : _next_char_1103 > 57 ? (_next_char_1103 < 64 ? (_next_char_1103 < 59 ? 4 : 1) : _next_char_1103 > 64 ? 1 : 5) : 3) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _accept_state_1080;
  if (_bind$4 === 0) {
    _M0MPC16string10StringView12view_2einner(_target_1076, _match_tag_saver_4_1087 + 1 | 0, _match_end_1081);
    const end_column = _M0MPC16string10StringView12view_2einner(_target_1076, _match_tag_saver_3_1086 + 1 | 0, _match_tag_saver_4_1087);
    const end_line = _M0MPC16string10StringView12view_2einner(_target_1076, _match_tag_saver_2_1085 + 1 | 0, _match_tag_saver_3_1086);
    const filename = _M0MPC16string10StringView12view_2einner(_target_1076, _start_1078, _match_tag_saver_0_1083);
    const start_column = _M0MPC16string10StringView12view_2einner(_target_1076, _match_tag_saver_1_1084 + 1 | 0, _match_tag_saver_2_1085);
    const start_line = _M0MPC16string10StringView12view_2einner(_target_1076, _match_tag_saver_0_1083 + 1 | 0, _match_tag_saver_1_1084);
    _cursor_1077 = _match_end_1081;
    return new _M0TPB13SourceLocRepr(filename, start_line, start_column, end_line, end_column);
  } else {
    _cursor_1077 = _start_1078;
    return $panic();
  }
}
function _M0MPB13SourceLocRepr16to__json__string(self) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(69);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"filename\":");
  _M0MPC16string10StringView18escape__to_2einner(self.filename, { self: _string_builder, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, true);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"start_line\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.start_line);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"start_column\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.start_column);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"end_line\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.end_line);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"end_column\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.end_column);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
  return _M0MPB13StringBuilder10to__string(_string_builder);
}
function _M0MPB9SourceLoc16to__json__string(self) {
  return _M0MPB13SourceLocRepr16to__json__string(_M0MPB13SourceLocRepr5parse(self));
}
function _M0MPB7ArgsLoc8to__json(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(10);
  const _self = self;
  _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
  const _bind$3 = _self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$3) {
      const item = _self[i];
      if (i !== 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(buf, ", ");
      }
      if (item === undefined) {
        _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
      } else {
        const _Some = item;
        const _loc = _Some;
        _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPB9SourceLoc16to__json__string(_loc));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
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
    return _M0FPC15abort5abortGRPC16string10StringViewE("negative repeat count");
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
          return _M0FPC15abort5abortGRPC16string10StringViewE("repeat result too large");
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
function _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGdE(self, value) {
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
function _M0MPC15array5Array3mapGRP45lumen7tsumugi4core4math6EasingURP45lumen7tsumugi4core4math6EasingdEE(self, f) {
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
function _M0MPC15array5Array3mapGURP45lumen7tsumugi4core4math6EasingdERPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
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
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$3 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
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
      _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(self, _x);
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
function _M0MPC15debug4Repr4ReprGdE(value) {
  return _M0IPC16double6DoublePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGURP45lumen7tsumugi4core4math6EasingdEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP45lumen7tsumugi4core4math6EasingdE(value);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP45lumen7tsumugi4core4math6EasingE(value) {
  return _M0IP45lumen7tsumugi4core4math6EasingPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP45lumen7tsumugi4core4math6EasingdE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGRP45lumen7tsumugi4core4math6EasingE(_a), _M0MPC15debug4Repr4ReprGdE(_b)]);
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
      _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, `${_last}${finish}`);
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
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(parts, t);
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
              _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(parts, _M0MPC16string6String4trim(_last, undefined));
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
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, close);
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
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, close);
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
              _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$4 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$4) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, close);
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
                _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, end);
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
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$4 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$4) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, end);
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
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, head);
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
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, `${_name$3}=${_first}`);
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
            _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(_self, `${label}: ${_first}`);
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
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(children, _M0FPC15debug16diff__info__withN2goS142(max_relative_error, _M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(xs, i), _M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(ys, i)));
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
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(children, new _M0DTPC15debug9ReprDelta6Extra1(t));
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
        _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(children, new _M0DTPC15debug9ReprDelta6Extra2(t));
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
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP45lumen7tsumugi4core4math6EasingdEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGURP45lumen7tsumugi4core4math6EasingdERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGURP45lumen7tsumugi4core4math6EasingdEE(x)));
}
function _M0FPC15debug14debug__inspect(obj, content, loc, args_loc) {
  const loc$2 = _M0MPB9SourceLoc16to__json__string(loc);
  const args_loc$2 = _M0MPB7ArgsLoc8to__json(args_loc);
  const actual = _M0FPC15debug6render(obj.method_table.method_0(obj.self), undefined);
  let want;
  if (content === undefined) {
    want = "";
  } else {
    const _Some = content;
    want = _Some;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(actual, want)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(63);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "@EXPECT_FAILED {\"loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"args_loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, args_loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"expect\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC16string6String14escape_2einner(want, true));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"actual\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC16string6String14escape_2einner(actual, true));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(_M0MPB13StringBuilder10to__string(_string_builder)));
  } else {
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE2Ok(undefined);
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
function _M0FPC14math3sin(_tmp) {
  return Math.sin(_tmp);
}
function _M0FPC14math3cos(_tmp) {
  return Math.cos(_tmp);
}
function _M0FPC14math3tan(_tmp) {
  return Math.tan(_tmp);
}
function _M0FPC14math5atan2(_tmp, _tmp$2) {
  return Math.atan2(_tmp, _tmp$2);
}
function _M0FPC14math13math__pow__js(_tmp, _tmp$2) {
  return Math.pow(_tmp, _tmp$2);
}
function _M0FPC14math3pow(base, exponent) {
  if (base === 1) {
    return 1;
  }
  if (base === -1 && (exponent === _M0FPC16double8infinity || exponent === _M0FPC16double13neg__infinity)) {
    return 1;
  }
  return _M0FPC14math13math__pow__js(base, exponent);
}
function _M0MP45lumen7tsumugi4core4math4Vec23new(x, y) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(x, y);
}
function _M0MP45lumen7tsumugi4core4math4Vec23sub(self, o) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(self.x - o.x, self.y - o.y);
}
function _M0MP45lumen7tsumugi4core4math4Vec25scale(self, k) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(self.x * k, self.y * k);
}
function _M0MP45lumen7tsumugi4core4math4Vec23dot(self, o) {
  return self.x * o.x + self.y * o.y;
}
function _M0MP45lumen7tsumugi4core4math4Vec25cross(self, o) {
  return self.x * o.y - self.y * o.x;
}
function _M0MP45lumen7tsumugi4core4math4Vec210length__sq(self) {
  return _M0MP45lumen7tsumugi4core4math4Vec23dot(self, self);
}
function _M0MP45lumen7tsumugi4core4math4Vec26length(self) {
  return Math.sqrt(_M0MP45lumen7tsumugi4core4math4Vec210length__sq(self));
}
function _M0FP45lumen7tsumugi4core4math9inv__sqrt(x) {
  if (x <= 0) {
    return 0;
  }
  const half = 0.5 * x;
  const i = $f64_reinterpret_i64(x);
  const magic = 6910469410427058089n;
  const y = new _M0TPB8MutLocalGdE($i64_reinterpret_f64(BigInt.asUintN(64, magic - BigInt.asUintN(64, BigInt.asUintN(64, i) >> BigInt(1 & 63)))));
  y.val = y.val * (1.5 - half * y.val * y.val);
  return y.val * (1.5 - half * y.val * y.val);
}
function _M0MP45lumen7tsumugi4core4math4Vec24lerp(self, o, t) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(self.x + (o.x - self.x) * t, self.y + (o.y - self.y) * t);
}
function _M0MP45lumen7tsumugi4core4math4Vec23min(self, o) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(_M0MPC16double6Double3min(self.x, o.x), _M0MPC16double6Double3min(self.y, o.y));
}
function _M0MP45lumen7tsumugi4core4math4Vec23max(self, o) {
  return new _M0TP45lumen7tsumugi4core4math4Vec2(_M0MPC16double6Double3max(self.x, o.x), _M0MPC16double6Double3max(self.y, o.y));
}
function _M0FP45lumen7tsumugi4core4math12vec2__bounds(points, count) {
  const mn = new _M0TPB8MutLocalGRP45lumen7tsumugi4core4math4Vec2E(new _M0TP45lumen7tsumugi4core4math4Vec2(1e+30, 1e+30));
  const mx = new _M0TPB8MutLocalGRP45lumen7tsumugi4core4math4Vec2E(new _M0TP45lumen7tsumugi4core4math4Vec2(-1e+30, -1e+30));
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < count) {
      const _tmp$2 = Math.imul(i, 2) | 0;
      const x = _tmp$2 >>> 0 < points.length ? points[_tmp$2] : $oob();
      const _tmp$3 = (Math.imul(i, 2) | 0) + 1 | 0;
      const y = _tmp$3 >>> 0 < points.length ? points[_tmp$3] : $oob();
      mn.val = _M0MP45lumen7tsumugi4core4math4Vec23min(mn.val, new _M0TP45lumen7tsumugi4core4math4Vec2(x, y));
      mx.val = _M0MP45lumen7tsumugi4core4math4Vec23max(mx.val, new _M0TP45lumen7tsumugi4core4math4Vec2(x, y));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: mn.val, _1: mx.val };
}
function _M0FP45lumen7tsumugi4core4math3sin(x) {
  return _M0FPC14math3sin(x);
}
function _M0FP45lumen7tsumugi4core4math3cos(x) {
  return _M0FPC14math3cos(x);
}
function _M0FP45lumen7tsumugi4core4math4sqrt(x) {
  return x <= 0 ? 0 : Math.sqrt(x);
}
function _M0FP45lumen7tsumugi4core4math5clamp(x, lo, hi) {
  return x < lo ? lo : x > hi ? hi : x;
}
function _M0FP45lumen7tsumugi4core4math7clamp01(x) {
  return _M0FP45lumen7tsumugi4core4math5clamp(x, 0, 1);
}
function _M0FP45lumen7tsumugi4core4math16inv__sqrt__exact(x) {
  return x <= 0 ? 0 : 1 / Math.sqrt(x);
}
function _M0FP45lumen7tsumugi4core4math10kahan__sum(values, len) {
  let n;
  if (len === undefined) {
    n = values.length;
  } else {
    const _Some = len;
    const _n = _Some;
    n = _n;
  }
  const sum = new _M0TPB8MutLocalGdE(0);
  const c = new _M0TPB8MutLocalGdE(0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const v = i >>> 0 < values.length ? values[i] : $oob();
      const t = sum.val + v;
      if (Math.abs(sum.val) >= Math.abs(v)) {
        c.val = c.val + (sum.val - t + v);
      } else {
        c.val = c.val + (v - t + sum.val);
      }
      sum.val = t;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sum.val + c.val;
}
function _M0FP45lumen7tsumugi4core4math10naive__sum(values, len) {
  let n;
  if (len === undefined) {
    n = values.length;
  } else {
    const _Some = len;
    const _n = _Some;
    n = _n;
  }
  const sum = new _M0TPB8MutLocalGdE(0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      sum.val = sum.val + (i >>> 0 < values.length ? values[i] : $oob());
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sum.val;
}
function _M0MP45lumen7tsumugi4core4math6Easing4eval(self, t) {
  const t$2 = _M0FP45lumen7tsumugi4core4math7clamp01(t);
  switch (self) {
    case 0: {
      return t$2;
    }
    case 1: {
      return t$2 * t$2;
    }
    case 2: {
      return t$2 * (2 - t$2);
    }
    case 3: {
      return t$2 < 0.5 ? 2 * t$2 * t$2 : -1 + (4 - 2 * t$2) * t$2;
    }
    case 4: {
      return t$2 * t$2 * t$2;
    }
    case 5: {
      const u = t$2 - 1;
      return u * u * u + 1;
    }
    case 6: {
      if (t$2 < 0.5) {
        return 4 * t$2 * t$2 * t$2;
      } else {
        const u$2 = t$2 - 1;
        return 4 * u$2 * u$2 * u$2 + 1;
      }
    }
    case 7: {
      return t$2 >= 1 ? 1 : 1 - _M0FPC14math3pow(2, -10 * t$2);
    }
    case 8: {
      const s = 1.70158;
      const u$2 = t$2 - 1;
      return u$2 * u$2 * ((s + 1) * u$2 + s) + 1;
    }
    default: {
      const n1 = 7.5625;
      const d1 = 2.75;
      const x = new _M0TPB8MutLocalGdE(t$2);
      if (x.val < 1 / d1) {
        return n1 * x.val * x.val;
      } else {
        if (x.val < 2 / d1) {
          x.val = x.val - 1.5 / d1;
          return n1 * x.val * x.val + 0.75;
        } else {
          if (x.val < 2.5 / d1) {
            x.val = x.val - 2.25 / d1;
            return n1 * x.val * x.val + 0.9375;
          } else {
            x.val = x.val - 2.625 / d1;
            return n1 * x.val * x.val + 0.984375;
          }
        }
      }
    }
  }
}
function _M0IP45lumen7tsumugi4core4math6EasingPC15debug5Debug8to__repr(self) {
  switch (self) {
    case 0: {
      return _M0MPC15debug4Repr7literal("Linear");
    }
    case 1: {
      return _M0MPC15debug4Repr7literal("QuadIn");
    }
    case 2: {
      return _M0MPC15debug4Repr7literal("QuadOut");
    }
    case 3: {
      return _M0MPC15debug4Repr7literal("QuadInOut");
    }
    case 4: {
      return _M0MPC15debug4Repr7literal("CubicIn");
    }
    case 5: {
      return _M0MPC15debug4Repr7literal("CubicOut");
    }
    case 6: {
      return _M0MPC15debug4Repr7literal("CubicInOut");
    }
    case 7: {
      return _M0MPC15debug4Repr7literal("ExpoOut");
    }
    case 8: {
      return _M0MPC15debug4Repr7literal("BackOut");
    }
    default: {
      return _M0MPC15debug4Repr7literal("BounceOut");
    }
  }
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
function _M0MP45lumen7tsumugi4core4math6Mat2x33det(self) {
  return self.a * self.d - self.b * self.c;
}
function _M0MP45lumen7tsumugi4core4math6Mat2x37compose(self, other) {
  return new _M0TP45lumen7tsumugi4core4math6Mat2x3(self.a * other.a + self.c * other.b, self.b * other.a + self.d * other.b, self.a * other.c + self.c * other.d, self.b * other.c + self.d * other.d, self.a * other.e + self.c * other.f + self.e, self.b * other.e + self.d * other.f + self.f);
}
function _M0MP45lumen7tsumugi4core4math6Mat2x36invert(self, eps) {
  const det = _M0MP45lumen7tsumugi4core4math6Mat2x33det(self);
  let eps$2;
  if (eps.$tag === 1) {
    const _Some = eps;
    const _e = _Some._0;
    eps$2 = _e;
  } else {
    eps$2 = 1e-12;
  }
  if (Math.abs(det) <= eps$2 || _M0MPC16double6Double7is__nan(det)) {
    return undefined;
  } else {
    const inv = 1 / det;
    return new _M0TP45lumen7tsumugi4core4math6Mat2x3(self.d * inv, -self.b * inv, -self.c * inv, self.a * inv, (self.c * self.f - self.d * self.e) * inv, (self.b * self.e - self.a * self.f) * inv);
  }
}
function _M0MP45lumen7tsumugi4core4math6Mat2x39decompose(self) {
  const det = _M0MP45lumen7tsumugi4core4math6Mat2x33det(self);
  if (Math.abs(det) <= 1e-12) {
    return undefined;
  }
  const sx = Math.sqrt(self.a * self.a + self.b * self.b);
  if (sx <= 1e-12) {
    return undefined;
  }
  const rotation = _M0FPC14math5atan2(self.b, self.a);
  const cos_r = self.a / sx;
  const sin_r = self.b / sx;
  const shear = self.c * cos_r + self.d * sin_r;
  const sy = -self.c * sin_r + self.d * cos_r;
  const skew_x = _M0FPC14math5atan2(shear, sy);
  return new _M0TP45lumen7tsumugi4core4math11AffineParts(new _M0TP45lumen7tsumugi4core4math4Vec2(self.e, self.f), rotation, new _M0TP45lumen7tsumugi4core4math4Vec2(sx, sy), skew_x);
}
function _M0FP45lumen7tsumugi4core4math15affine__rebuild(parts) {
  const t = _M0MP45lumen7tsumugi4core4math6Mat2x39translate(parts.translate.x, parts.translate.y);
  const r = _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(parts.rotation);
  const k = _M0MP45lumen7tsumugi4core4math6Mat2x34skew(parts.skew_x, 0);
  const s = _M0MP45lumen7tsumugi4core4math6Mat2x35scale(parts.scale.x, parts.scale.y);
  return _M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x37compose(t, r), k), s);
}
function _M0MP45lumen7tsumugi4core4math8CubicBez3new(p0, p1, p2, p3) {
  return new _M0TP45lumen7tsumugi4core4math8CubicBez(p0, p1, p2, p3);
}
function _M0MP45lumen7tsumugi4core4math8CubicBez4eval(self, t) {
  const a = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p0, self.p1, t);
  const b = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p1, self.p2, t);
  const c = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p2, self.p3, t);
  const d = _M0MP45lumen7tsumugi4core4math4Vec24lerp(a, b, t);
  const e = _M0MP45lumen7tsumugi4core4math4Vec24lerp(b, c, t);
  return _M0MP45lumen7tsumugi4core4math4Vec24lerp(d, e, t);
}
function _M0MP45lumen7tsumugi4core4math8CubicBez5split(self, t) {
  const p01 = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p0, self.p1, t);
  const p12 = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p1, self.p2, t);
  const p23 = _M0MP45lumen7tsumugi4core4math4Vec24lerp(self.p2, self.p3, t);
  const a = _M0MP45lumen7tsumugi4core4math4Vec24lerp(p01, p12, t);
  const b = _M0MP45lumen7tsumugi4core4math4Vec24lerp(p12, p23, t);
  const mid = _M0MP45lumen7tsumugi4core4math4Vec24lerp(a, b, t);
  return { _0: new _M0TP45lumen7tsumugi4core4math8CubicBez(self.p0, p01, a, mid), _1: new _M0TP45lumen7tsumugi4core4math8CubicBez(mid, b, p23, self.p3) };
}
function _M0FP45lumen7tsumugi4core4math14dist__to__line(p, a, b) {
  const ab = _M0MP45lumen7tsumugi4core4math4Vec23sub(b, a);
  const len = _M0MP45lumen7tsumugi4core4math4Vec26length(ab);
  return len <= 1e-15 ? _M0MP45lumen7tsumugi4core4math4Vec26length(_M0MP45lumen7tsumugi4core4math4Vec23sub(p, a)) : Math.abs(_M0MP45lumen7tsumugi4core4math4Vec25cross(ab, _M0MP45lumen7tsumugi4core4math4Vec23sub(p, a)) / len);
}
function _M0MP45lumen7tsumugi4core4math8CubicBez8flatness(self) {
  const d1 = _M0FP45lumen7tsumugi4core4math14dist__to__line(self.p1, self.p0, self.p3);
  const d2 = _M0FP45lumen7tsumugi4core4math14dist__to__line(self.p2, self.p0, self.p3);
  return 0.75 * _M0MPC16double6Double3max(d1, d2);
}
function _M0FP45lumen7tsumugi4core4math19flatten__cubic__rec(c, tol, out, start, depth) {
  let _tmp = c;
  let _tmp$2 = tol;
  let _tmp$3 = out;
  let _tmp$4 = start;
  let _tmp$5 = depth;
  while (true) {
    const c$2 = _tmp;
    const tol$2 = _tmp$2;
    const out$2 = _tmp$3;
    const start$2 = _tmp$4;
    const depth$2 = _tmp$5;
    if (_M0MP45lumen7tsumugi4core4math8CubicBez8flatness(c$2) <= tol$2 || depth$2 >= 24) {
      if (start$2 >>> 0 < out$2.length) {
        out$2[start$2] = c$2.p3.x;
      } else {
        $oob();
      }
      const _tmp$6 = start$2 + 1 | 0;
      if (_tmp$6 >>> 0 < out$2.length) {
        out$2[_tmp$6] = c$2.p3.y;
      } else {
        $oob();
      }
      return start$2 + 2 | 0;
    } else {
      let a;
      let b;
      _L: {
        const _bind$3 = _M0MP45lumen7tsumugi4core4math8CubicBez5split(c$2, 0.5);
        const _a = _bind$3._0;
        const _b = _bind$3._1;
        a = _a;
        b = _b;
        break _L;
      }
      const next = _M0FP45lumen7tsumugi4core4math19flatten__cubic__rec(a, tol$2, out$2, start$2, depth$2 + 1 | 0);
      _tmp = b;
      _tmp$4 = next;
      _tmp$5 = depth$2 + 1 | 0;
      continue;
    }
  }
}
function _M0MP45lumen7tsumugi4core4math8CubicBez7flatten(self, tol, out, start) {
  return _M0FP45lumen7tsumugi4core4math19flatten__cubic__rec(self, _M0MPC16double6Double3max(tol, 1e-09), out, start, 0);
}
function _M0FP45lumen7tsumugi4core4math17count__cubic__rec(c, tol, depth) {
  if (_M0MP45lumen7tsumugi4core4math8CubicBez8flatness(c) <= tol || depth >= 24) {
    return 1;
  } else {
    let a;
    let b;
    _L: {
      const _bind$3 = _M0MP45lumen7tsumugi4core4math8CubicBez5split(c, 0.5);
      const _a = _bind$3._0;
      const _b = _bind$3._1;
      a = _a;
      b = _b;
      break _L;
    }
    return _M0FP45lumen7tsumugi4core4math17count__cubic__rec(a, tol, depth + 1 | 0) + _M0FP45lumen7tsumugi4core4math17count__cubic__rec(b, tol, depth + 1 | 0) | 0;
  }
}
function _M0MP45lumen7tsumugi4core4math8CubicBez12point__count(self, tol) {
  return _M0FP45lumen7tsumugi4core4math17count__cubic__rec(self, _M0MPC16double6Double3max(tol, 1e-09), 0);
}
function _M0MP45lumen7tsumugi4core4math8CubicBez18flatten__to__array(self, tol) {
  const points = _M0MP45lumen7tsumugi4core4math8CubicBez12point__count(self, tol);
  const buf = $make_array_len_and_init(Math.imul(2, points) | 0, 0);
  const n = _M0MP45lumen7tsumugi4core4math8CubicBez7flatten(self, tol, buf, 0);
  const out = [];
  _M0MPC15array5Array4pushGdE(out, self.p0.x);
  _M0MPC15array5Array4pushGdE(out, self.p0.y);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      _M0MPC15array5Array4pushGdE(out, i >>> 0 < buf.length ? buf[i] : $oob());
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP45lumen7tsumugi4core4math14collect__roots(a, b, c, out) {
  if (Math.abs(a) < 1e-12) {
    if (Math.abs(b) > 1e-12) {
      _M0MPC15array5Array4pushGdE(out, -c / b);
      return;
    } else {
      return;
    }
  } else {
    const disc = b * b - 4 * a * c;
    if (disc >= 0) {
      const sq = Math.sqrt(disc);
      _M0MPC15array5Array4pushGdE(out, (-b + sq) / (2 * a));
      _M0MPC15array5Array4pushGdE(out, (-b - sq) / (2 * a));
      return;
    } else {
      return;
    }
  }
}
function _M0MP45lumen7tsumugi4core4math8CubicBez6bounds(self) {
  const a_ = _M0MP45lumen7tsumugi4core4math4Vec25scale(_M0MP45lumen7tsumugi4core4math4Vec23sub(self.p1, self.p0), 3);
  const b_ = _M0MP45lumen7tsumugi4core4math4Vec25scale(_M0MP45lumen7tsumugi4core4math4Vec23sub(self.p2, self.p1), 3);
  const c_ = _M0MP45lumen7tsumugi4core4math4Vec25scale(_M0MP45lumen7tsumugi4core4math4Vec23sub(self.p3, self.p2), 3);
  const mn = new _M0TPB8MutLocalGRP45lumen7tsumugi4core4math4Vec2E(_M0MP45lumen7tsumugi4core4math4Vec23min(self.p0, self.p3));
  const mx = new _M0TPB8MutLocalGRP45lumen7tsumugi4core4math4Vec2E(_M0MP45lumen7tsumugi4core4math4Vec23max(self.p0, self.p3));
  const qa_x = a_.x - 2 * b_.x + c_.x;
  const qb_x = 2 * (b_.x - a_.x);
  const qc_x = a_.x;
  const qa_y = a_.y - 2 * b_.y + c_.y;
  const qb_y = 2 * (b_.y - a_.y);
  const qc_y = a_.y;
  const ts = [];
  _M0FP45lumen7tsumugi4core4math14collect__roots(qa_x, qb_x, qc_x, ts);
  _M0FP45lumen7tsumugi4core4math14collect__roots(qa_y, qb_y, qc_y, ts);
  const _bind$3 = ts.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const t = ts[_];
      if (t > 0 && t < 1) {
        const p = _M0MP45lumen7tsumugi4core4math8CubicBez4eval(self, t);
        mn.val = _M0MP45lumen7tsumugi4core4math4Vec23min(mn.val, p);
        mx.val = _M0MP45lumen7tsumugi4core4math4Vec23max(mx.val, p);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: mn.val, _1: mx.val };
}
function _M0FP45lumen7tsumugi4core4math16arc__to__beziers(cx, cy, r, start_rad, sweep_rad, max_seg_rad) {
  let max_seg;
  if (max_seg_rad.$tag === 1) {
    const _Some = max_seg_rad;
    const _m = _Some._0;
    max_seg = _m;
  } else {
    max_seg = 1.57079632679489656;
  }
  const out = [];
  const n = _M0MPC13int3Int3max(1, _M0MPC16double6Double7to__int(_M0MPC16double6Double4ceil(Math.abs(sweep_rad) / max_seg)));
  const step = sweep_rad / (n + 0);
  const k = 1.33333333333333326 * _M0FPC14math3tan(step / 4);
  const theta = new _M0TPB8MutLocalGdE(start_rad);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < n) {
      const t0 = theta.val;
      const t1 = theta.val + step;
      const c0 = _M0FPC14math3cos(t0);
      const s0 = _M0FPC14math3sin(t0);
      const c1 = _M0FPC14math3cos(t1);
      const s1 = _M0FPC14math3sin(t1);
      const p0 = new _M0TP45lumen7tsumugi4core4math4Vec2(cx + r * c0, cy + r * s0);
      const p3 = new _M0TP45lumen7tsumugi4core4math4Vec2(cx + r * c1, cy + r * s1);
      const p1 = new _M0TP45lumen7tsumugi4core4math4Vec2(p0.x - k * r * s0, p0.y + k * r * c0);
      const p2 = new _M0TP45lumen7tsumugi4core4math4Vec2(p3.x + k * r * s1, p3.y - k * r * c1);
      _M0MPC15array5Array4pushGRP45lumen7tsumugi4core4math8CubicBezE(out, new _M0TP45lumen7tsumugi4core4math8CubicBez(p0, p1, p2, p3));
      theta.val = t1;
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state) {
  const next = ((Math.imul(state, 1664525) | 0) >>> 0) + (1013904223 >>> 0) | 0;
  return { _0: next, _1: (next + 0) / 4294967296 };
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test9mat__diff(p, q) {
  const d = [Math.abs(p.a - q.a), Math.abs(p.b - q.b), Math.abs(p.c - q.c), Math.abs(p.d - q.d), Math.abs(p.e - q.e), Math.abs(p.f - q.f)];
  const m = new _M0TPB8MutLocalGdE(0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < d.length) {
      m.val = _M0MPC16double6Double3max(m.val, _M0MPC15array5Array2atGdE(d, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m.val;
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__0() {
  const state = new _M0TPB8MutLocalGjE(12345);
  const worst = new _M0TPB8MutLocalGdE(0);
  let _tmp = 0;
  while (true) {
    const _k = _tmp;
    if (_k < 1000) {
      let s1;
      let r1;
      _L: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s1 = _bind$3._0;
        const _r1 = _bind$3._1;
        s1 = _s1;
        r1 = _r1;
        break _L;
      }
      state.val = s1;
      let s2;
      let r2;
      _L$2: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s2 = _bind$3._0;
        const _r2 = _bind$3._1;
        s2 = _s2;
        r2 = _r2;
        break _L$2;
      }
      state.val = s2;
      let s3;
      let r3;
      _L$3: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s3 = _bind$3._0;
        const _r3 = _bind$3._1;
        s3 = _s3;
        r3 = _r3;
        break _L$3;
      }
      state.val = s3;
      let s4;
      let r4;
      _L$4: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s4 = _bind$3._0;
        const _r4 = _bind$3._1;
        s4 = _s4;
        r4 = _r4;
        break _L$4;
      }
      state.val = s4;
      let s5;
      let r5;
      _L$5: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s5 = _bind$3._0;
        const _r5 = _bind$3._1;
        s5 = _s5;
        r5 = _r5;
        break _L$5;
      }
      state.val = s5;
      let s6;
      let r6;
      _L$6: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s6 = _bind$3._0;
        const _r6 = _bind$3._1;
        s6 = _s6;
        r6 = _r6;
        break _L$6;
      }
      state.val = s6;
      const m = _M0MP45lumen7tsumugi4core4math6Mat2x33new(r1 * 4 - 2, r2 * 4 - 2, r3 * 4 - 2, r4 * 4 - 2, r5 * 40 - 20, r6 * 40 - 20);
      if (Math.abs(_M0MP45lumen7tsumugi4core4math6Mat2x33det(m)) > 0.001) {
        let inv;
        _L$7: {
          _L$8: {
            const _bind$3 = _M0MP45lumen7tsumugi4core4math6Mat2x36invert(m, _M0DTPC16option6OptionGdE4None__);
            if (_bind$3 === undefined) {
              const _bind$4 = "invert returned None for a non-degenerate matrix";
              const _bind$5 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "core/math/math_test.mbt:59:17-59:73@lumen/tsumugi");
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
            } else {
              const _Some = _bind$3;
              const _inv = _Some;
              inv = _inv;
              break _L$8;
            }
            break _L$7;
          }
          const id = _M0MP45lumen7tsumugi4core4math6Mat2x37compose(m, inv);
          const target = _M0MP45lumen7tsumugi4core4math6Mat2x38identity();
          worst.val = _M0MPC16double6Double3max(worst.val, _M0FP45lumen7tsumugi4core20math__blackbox__test9mat__diff(id, target));
        }
      }
      _tmp = _k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = worst.val < 1e-09;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "worst deviation ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, worst.val);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  return _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:68:3-68:62@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__1() {
  const scale_zero = _M0MP45lumen7tsumugi4core4math6Mat2x35scale(0, 1);
  const _bind$3 = _M0MP45lumen7tsumugi4core4math6Mat2x36invert(scale_zero, _M0DTPC16option6OptionGdE4None__);
  const _bind$4 = _M0FPB12assert__true(_bind$3 === undefined, undefined, "core/math/math_test.mbt:74:3-74:43@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const collapse = _M0MP45lumen7tsumugi4core4math6Mat2x33new(1, 2, 2, 4, 0, 0);
  const _bind$5 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi4core4math6Mat2x33det(collapse), 0, undefined, "core/math/math_test.mbt:76:3-76:33@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP45lumen7tsumugi4core4math6Mat2x36invert(collapse, _M0DTPC16option6OptionGdE4None__);
  const _bind$7 = _M0FPB12assert__true(_bind$6 === undefined, undefined, "core/math/math_test.mbt:77:3-77:41@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const tiny = _M0MP45lumen7tsumugi4core4math6Mat2x33new(1e-09, 0, 0, 1e-09, 0, 0);
  const _bind$8 = _M0MP45lumen7tsumugi4core4math6Mat2x36invert(tiny, new _M0DTPC16option6OptionGdE4Some(1e-12));
  const _bind$9 = _M0FPB12assert__true(_bind$8 === undefined, undefined, "core/math/math_test.mbt:80:3-80:48@lumen/tsumugi");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0MP45lumen7tsumugi4core4math6Mat2x36invert(tiny, new _M0DTPC16option6OptionGdE4Some(1e-20));
  return _M0FPB12assert__true(!(_bind$10 === undefined), undefined, "core/math/math_test.mbt:81:3-81:51@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__2() {
  const state = new _M0TPB8MutLocalGjE(987654321);
  const worst = new _M0TPB8MutLocalGdE(0);
  let _tmp = 0;
  while (true) {
    const _k = _tmp;
    if (_k < 500) {
      let s1;
      let r1;
      _L: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s1 = _bind$3._0;
        const _r1 = _bind$3._1;
        s1 = _s1;
        r1 = _r1;
        break _L;
      }
      state.val = s1;
      let s2;
      let r2;
      _L$2: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s2 = _bind$3._0;
        const _r2 = _bind$3._1;
        s2 = _s2;
        r2 = _r2;
        break _L$2;
      }
      state.val = s2;
      let s3;
      let r3;
      _L$3: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s3 = _bind$3._0;
        const _r3 = _bind$3._1;
        s3 = _s3;
        r3 = _r3;
        break _L$3;
      }
      state.val = s3;
      let s4;
      let r4;
      _L$4: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s4 = _bind$3._0;
        const _r4 = _bind$3._1;
        s4 = _s4;
        r4 = _r4;
        break _L$4;
      }
      state.val = s4;
      let s5;
      let r5;
      _L$5: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s5 = _bind$3._0;
        const _r5 = _bind$3._1;
        s5 = _s5;
        r5 = _r5;
        break _L$5;
      }
      state.val = s5;
      const m = _M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x37compose(_M0MP45lumen7tsumugi4core4math6Mat2x39translate(r1 * 100 - 50, r2 * 100 - 50), _M0MP45lumen7tsumugi4core4math6Mat2x36rotate(r3 * 6.2831853 - 3.1415926)), _M0MP45lumen7tsumugi4core4math6Mat2x34skew(r4 * 0.6 - 0.3, 0)), _M0MP45lumen7tsumugi4core4math6Mat2x35scale(r5 * 3 + 0.1, r5 * 2 + 0.2));
      let parts;
      _L$6: {
        _L$7: {
          const _bind$3 = _M0MP45lumen7tsumugi4core4math6Mat2x39decompose(m);
          if (_bind$3 === undefined) {
            const _bind$4 = "decompose failed on an invertible matrix";
            const _bind$5 = _M0FPB4failGuE(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), "core/math/math_test.mbt:104:15-104:63@lumen/tsumugi");
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
          } else {
            const _Some = _bind$3;
            const _parts = _Some;
            parts = _parts;
            break _L$7;
          }
          break _L$6;
        }
        const rebuilt = _M0FP45lumen7tsumugi4core4math15affine__rebuild(parts);
        worst.val = _M0MPC16double6Double3max(worst.val, _M0FP45lumen7tsumugi4core20math__blackbox__test9mat__diff(m, rebuilt));
      }
      _tmp = _k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = worst.val < 1e-09;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "decompose round trip worst ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, worst.val);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  return _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:111:3-111:73@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__3() {
  const n = 100000;
  const values = $make_array_len_and_init(n, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      let _tmp$2;
      if (2 === 0) {
        $panic();
      }
      if ((i % 2 | 0) === 0) {
        _tmp$2 = 1e+16;
      } else {
        _tmp$2 = 1;
      }
      if (i >>> 0 < values.length) {
        values[i] = _tmp$2;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (2 === 0) {
    $panic();
  }
  const _tmp$2 = ((n / 2 | 0) + 0) * 1e+16;
  if (2 === 0) {
    $panic();
  }
  const exact = _tmp$2 + ((n / 2 | 0) + 0) * 1;
  const naive = _M0FP45lumen7tsumugi4core4math10naive__sum(values, undefined);
  const kahan = _M0FP45lumen7tsumugi4core4math10kahan__sum(values, undefined);
  const naive_err = Math.abs(naive - exact);
  const kahan_err = Math.abs(kahan - exact);
  const _tmp$3 = naive_err > 1000;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(45);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "naive should drop the small terms, error was ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, naive_err);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:129:3-132:4@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp$4 = kahan_err * 1000 < naive_err;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "kahan ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, kahan_err);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " vs naive ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, naive_err);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  return _M0FPB12assert__true(_tmp$4, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "core/math/math_test.mbt:134:3-137:4@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__4() {
  const state = new _M0TPB8MutLocalGjE(24680);
  const worst_fast = new _M0TPB8MutLocalGdE(0);
  const worst_exact = new _M0TPB8MutLocalGdE(0);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i <= 1000) {
      let s;
      _L: {
        const _bind$3 = _M0FP45lumen7tsumugi4core20math__blackbox__test9lcg__next(state.val);
        const _s = _bind$3._0;
        s = _s;
        break _L;
      }
      state.val = s;
      const x = (i + 0) * 0.01;
      const truth = 1 / Math.sqrt(x);
      worst_fast.val = _M0MPC16double6Double3max(worst_fast.val, Math.abs((_M0FP45lumen7tsumugi4core4math9inv__sqrt(x) - truth) / truth));
      worst_exact.val = _M0MPC16double6Double3max(worst_exact.val, Math.abs((_M0FP45lumen7tsumugi4core4math16inv__sqrt__exact(x) - truth) / truth));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = worst_fast.val < 0.002;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "fast path relative error ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, worst_fast.val);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:159:3-159:81@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPB12assert__true(worst_exact.val < 1e-15, undefined, "core/math/math_test.mbt:160:3-160:37@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi4core4math9inv__sqrt(0), 0, undefined, "core/math/math_test.mbt:161:3-161:38@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi4core4math9inv__sqrt(-4), 0, undefined, "core/math/math_test.mbt:162:3-162:39@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test20dist__point__segment(p, a, b) {
  const ab = _M0MP45lumen7tsumugi4core4math4Vec23sub(b, a);
  const len_sq = _M0MP45lumen7tsumugi4core4math4Vec210length__sq(ab);
  if (len_sq <= 1e-18) {
    return _M0MP45lumen7tsumugi4core4math4Vec26length(_M0MP45lumen7tsumugi4core4math4Vec23sub(p, a));
  } else {
    const t = _M0FP45lumen7tsumugi4core4math7clamp01(_M0MP45lumen7tsumugi4core4math4Vec23dot(_M0MP45lumen7tsumugi4core4math4Vec23sub(p, a), ab) / len_sq);
    return _M0MP45lumen7tsumugi4core4math4Vec26length(_M0MP45lumen7tsumugi4core4math4Vec23sub(p, _M0MP45lumen7tsumugi4core4math4Vec24lerp(a, b, t)));
  }
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__5() {
  const tol = 0.25;
  const curve = _M0MP45lumen7tsumugi4core4math8CubicBez3new(new _M0TP45lumen7tsumugi4core4math4Vec2(0, 0), new _M0TP45lumen7tsumugi4core4math4Vec2(30, 90), new _M0TP45lumen7tsumugi4core4math4Vec2(170, -70), new _M0TP45lumen7tsumugi4core4math4Vec2(200, 20));
  const out = $make_array_len_and_init(4096, 0);
  if (0 >>> 0 < out.length) {
    out[0] = curve.p0.x;
  } else {
    $oob();
  }
  if (1 >>> 0 < out.length) {
    out[1] = curve.p0.y;
  } else {
    $oob();
  }
  const len = _M0MP45lumen7tsumugi4core4math8CubicBez7flatten(curve, tol, out, 2);
  if (2 === 0) {
    $panic();
  }
  const point_count = len / 2 | 0;
  const _tmp = point_count > 3;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(26);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected subdivision, got ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, point_count);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:192:3-192:79@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const worst = new _M0TPB8MutLocalGdE(0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i <= 2000) {
      const t = (i + 0) / 2000;
      const p = _M0MP45lumen7tsumugi4core4math8CubicBez4eval(curve, t);
      const best = new _M0TPB8MutLocalGdE(1e+30);
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if ((j + 1 | 0) < point_count) {
          const _tmp$4 = Math.imul(j, 2) | 0;
          const _tmp$5 = _tmp$4 >>> 0 < out.length ? out[_tmp$4] : $oob();
          const _tmp$6 = (Math.imul(j, 2) | 0) + 1 | 0;
          const a = new _M0TP45lumen7tsumugi4core4math4Vec2(_tmp$5, _tmp$6 >>> 0 < out.length ? out[_tmp$6] : $oob());
          const _tmp$7 = Math.imul(j + 1 | 0, 2) | 0;
          const _tmp$8 = _tmp$7 >>> 0 < out.length ? out[_tmp$7] : $oob();
          const _tmp$9 = (Math.imul(j + 1 | 0, 2) | 0) + 1 | 0;
          const b = new _M0TP45lumen7tsumugi4core4math4Vec2(_tmp$8, _tmp$9 >>> 0 < out.length ? out[_tmp$9] : $oob());
          best.val = _M0MPC16double6Double3min(best.val, _M0FP45lumen7tsumugi4core20math__blackbox__test20dist__point__segment(p, a, b));
          _tmp$3 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      worst.val = _M0MPC16double6Double3max(worst.val, best.val);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$3 = worst.val <= tol;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(28);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "max deviation ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, worst.val);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " exceeded tol ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, tol);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$6 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "core/math/math_test.mbt:205:3-205:78@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _tmp$4 = Math.imul(point_count - 1 | 0, 2) | 0;
  const _bind$7 = _M0FPC15debug10assert__eqGdE(_tmp$4 >>> 0 < out.length ? out[_tmp$4] : $oob(), curve.p3.x, undefined, "core/math/math_test.mbt:207:3-207:52@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _tmp$5 = (Math.imul(point_count - 1 | 0, 2) | 0) + 1 | 0;
  return _M0FPC15debug10assert__eqGdE(_tmp$5 >>> 0 < out.length ? out[_tmp$5] : $oob(), curve.p3.y, undefined, "core/math/math_test.mbt:208:3-208:56@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__6() {
  const curve = _M0MP45lumen7tsumugi4core4math8CubicBez3new(new _M0TP45lumen7tsumugi4core4math4Vec2(0, 0), new _M0TP45lumen7tsumugi4core4math4Vec2(100, 0), new _M0TP45lumen7tsumugi4core4math4Vec2(0, 100), new _M0TP45lumen7tsumugi4core4math4Vec2(100, 100));
  const count = (tol) => {
    const out = $make_array_len_and_init(8192, 0);
    if (2 === 0) {
      $panic();
    }
    return _M0MP45lumen7tsumugi4core4math8CubicBez7flatten(curve, tol, out, 0) / 2 | 0;
  };
  const coarse = count(2);
  const medium = count(0.25);
  const fine = count(0.01);
  const _tmp = coarse < medium;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, coarse);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " !< ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, medium);
  const _bind$3 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$4 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), "core/math/math_test.mbt:226:3-226:61@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp$2 = medium < fine;
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(4);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, medium);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " !< ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, fine);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _bind$6 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "core/math/math_test.mbt:227:3-227:57@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPB12assert__true((fine + 0) / (coarse + 0) < 60, undefined, "core/math/math_test.mbt:230:3-230:60@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPB12assert__true(fine > 20, undefined, "core/math/math_test.mbt:231:3-231:25@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__7() {
  const curve = _M0MP45lumen7tsumugi4core4math8CubicBez3new(new _M0TP45lumen7tsumugi4core4math4Vec2(0, 0), new _M0TP45lumen7tsumugi4core4math4Vec2(300, 0), new _M0TP45lumen7tsumugi4core4math4Vec2(-200, 10), new _M0TP45lumen7tsumugi4core4math4Vec2(50, 0));
  let mn;
  let mx;
  _L: {
    const _bind$3 = _M0MP45lumen7tsumugi4core4math8CubicBez6bounds(curve);
    const _mn = _bind$3._0;
    const _mx = _bind$3._1;
    mn = _mn;
    mx = _mx;
    break _L;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i <= 5000) {
      const p = _M0MP45lumen7tsumugi4core4math8CubicBez4eval(curve, (i + 0) / 5000);
      const _bind$3 = _M0FPB12assert__true(p.x >= mn.x - 1e-09 && p.x <= mx.x + 1e-09, undefined, "core/math/math_test.mbt:245:5-245:62@lumen/tsumugi");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0FPB12assert__true(p.y >= mn.y - 1e-09 && p.y <= mx.y + 1e-09, undefined, "core/math/math_test.mbt:246:5-246:62@lumen/tsumugi");
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB12assert__true(mx.x > 50, undefined, "core/math/math_test.mbt:249:3-249:27@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__8() {
  const arcs = _M0FP45lumen7tsumugi4core4math16arc__to__beziers(10, 5, 40, 0.3, 5.5, _M0DTPC16option6OptionGdE4None__);
  const _bind$3 = _M0FPB12assert__true(arcs.length >= 4, undefined, "core/math/math_test.mbt:255:3-255:34@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const worst = new _M0TPB8MutLocalGdE(0);
  const _bind$4 = arcs.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const seg = arcs[_];
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= 200) {
          const p = _M0MP45lumen7tsumugi4core4math8CubicBez4eval(seg, (i + 0) / 200);
          const r = Math.sqrt((p.x - 10) * (p.x - 10) + (p.y - 5) * (p.y - 5));
          worst.val = _M0MPC16double6Double3max(worst.val, Math.abs(r - 40) / 40);
          _tmp$2 = i + 1 | 0;
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
  const _tmp$2 = worst.val < 0.00027;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "relative radial error ");
  _M0MPB13StringBuilder13write__objectGdE(_string_builder, worst.val);
  const _bind$5 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _bind$6 = _M0FPB12assert__true(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), "core/math/math_test.mbt:264:3-264:68@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const first = _M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(arcs, 0).p0;
  const last = _M0MPC15array5Array2atGRP45lumen7tsumugi4core4math8CubicBezE(arcs, arcs.length - 1 | 0).p3;
  const _bind$7 = _M0FPB12assert__true(Math.abs(first.x - (10 + 40 * _M0FP45lumen7tsumugi4core4math3cos(0.3))) < 1e-09, undefined, "core/math/math_test.mbt:268:3-268:73@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPB12assert__true(Math.abs(last.y - (5 + 40 * _M0FP45lumen7tsumugi4core4math3sin(5.8))) < 1e-09, undefined, "core/math/math_test.mbt:269:3-269:77@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test39____test__6d6174685f746573742e6d6274__9() {
  const monotone = [0, 1, 2, 3, 4, 5, 6, 7];
  const _bind$3 = monotone.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const e = monotone[_];
      const _bind$4 = _M0FPC15debug10assert__eqGdE(_M0MP45lumen7tsumugi4core4math6Easing4eval(e, 0), 0, undefined, "core/math/math_test.mbt:285:5-285:32@lumen/tsumugi");
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      const _bind$5 = _M0FPB12assert__true(Math.abs(_M0MP45lumen7tsumugi4core4math6Easing4eval(e, 1) - 1) < 1e-12, undefined, "core/math/math_test.mbt:286:5-286:53@lumen/tsumugi");
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      const prev = new _M0TPB8MutLocalGdE(_M0MP45lumen7tsumugi4core4math6Easing4eval(e, 0));
      let _tmp$2 = 1;
      while (true) {
        const i = _tmp$2;
        if (i <= 1000) {
          const v = _M0MP45lumen7tsumugi4core4math6Easing4eval(e, (i + 0) / 1000);
          const _tmp$3 = v >= prev.val - 1e-12;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "non-monotone at step ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, i);
          const _bind$6 = _M0MPB13StringBuilder10to__string(_string_builder);
          const _bind$7 = _M0FPB12assert__true(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), "core/math/math_test.mbt:290:7-290:72@lumen/tsumugi");
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _ok._0;
          } else {
            return _bind$7;
          }
          prev.val = v;
          _tmp$2 = i + 1 | 0;
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
  const _bind$4 = _M0FPB12assert__true(_M0MP45lumen7tsumugi4core4math6Easing4eval(8, 0.8) > 1, undefined, "core/math/math_test.mbt:295:3-295:53@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FPB12assert__true(_M0MP45lumen7tsumugi4core4math6Easing4eval(9, 0.95) > 0.9, undefined, "core/math/math_test.mbt:296:3-296:56@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__10() {
  const pts = $make_array_len_and_init(8, 0);
  const coords = [3, -2, -1, 5, 4, 4, 0, 0];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 8) {
      if (i >>> 0 < pts.length) {
        pts[i] = _M0MPC15array5Array2atGdE(coords, i);
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let mn;
  let mx;
  _L: {
    const _bind$3 = _M0FP45lumen7tsumugi4core4math12vec2__bounds(pts, 4);
    const _mn = _bind$3._0;
    const _mx = _bind$3._1;
    mn = _mn;
    mx = _mx;
    break _L;
  }
  const _bind$3 = _M0FPC15debug10assert__eqGdE(mn.x, -1, undefined, "core/math/math_test.mbt:307:3-307:24@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGdE(mn.y, -2, undefined, "core/math/math_test.mbt:308:3-308:24@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGdE(mx.x, 4, undefined, "core/math/math_test.mbt:309:3-309:23@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return _M0FPC15debug10assert__eqGdE(mx.y, 5, undefined, "core/math/math_test.mbt:310:3-310:23@lumen/tsumugi");
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__11() {
  const samples = _M0MPC15array5Array3mapGRP45lumen7tsumugi4core4math6EasingURP45lumen7tsumugi4core4math6EasingdEE([3, 8, 9], (e) => ({ _0: e, _1: _M0MP45lumen7tsumugi4core4math6Easing4eval(e, 0.25) }));
  return _M0FPC15debug14debug__inspect({ self: samples, method_table: _M0FP0143moonbitlang_2fcore_2fbuiltin_2fArray_5b_28lumen_2ftsumugi_2fcore_2fmath_2fEasing_2c_20Double_29_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug }, "[\n  (QuadInOut, 0.125),\n  (BackOut, 0.8174096875000001),\n  (BounceOut, 0.47265625),\n]", "core/math/math_test.mbt:322:3-331:4@lumen/tsumugi", ["core/math/math_test.mbt:323:5-323:12@lumen/tsumugi", "core/math/math_test.mbt:325:7-329:10@lumen/tsumugi", undefined, undefined]);
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test40____test__6d6174685f746573742e6d6274__12() {
  const _bind$3 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi4core4math4sqrt(-1), 0, undefined, "core/math/math_test.mbt:338:3-338:35@lumen/tsumugi");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi4core4math4sqrt(0), 0, undefined, "core/math/math_test.mbt:339:3-339:34@lumen/tsumugi");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGdE(_M0FP45lumen7tsumugi4core4math4sqrt(9), 3, undefined, "core/math/math_test.mbt:340:3-340:34@lumen/tsumugi");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const line = _M0MP45lumen7tsumugi4core4math8CubicBez3new(_M0MP45lumen7tsumugi4core4math4Vec23new(0, 0), _M0MP45lumen7tsumugi4core4math4Vec23new(1, 0), _M0MP45lumen7tsumugi4core4math4Vec23new(2, 0), _M0MP45lumen7tsumugi4core4math4Vec23new(3, 0));
  const pts = _M0MP45lumen7tsumugi4core4math8CubicBez18flatten__to__array(line, 0.1);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(pts.length, 4, undefined, "core/math/math_test.mbt:349:3-349:29@lumen/tsumugi");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGdE(_M0MPC15array5Array2atGdE(pts, 0), 0, undefined, "core/math/math_test.mbt:350:3-350:25@lumen/tsumugi");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGdE(_M0MPC15array5Array2atGdE(pts, 2), 3, undefined, "core/math/math_test.mbt:351:3-351:25@lumen/tsumugi");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const curved = _M0MP45lumen7tsumugi4core4math8CubicBez3new(_M0MP45lumen7tsumugi4core4math4Vec23new(0, 0), _M0MP45lumen7tsumugi4core4math4Vec23new(0, 100), _M0MP45lumen7tsumugi4core4math4Vec23new(100, -100), _M0MP45lumen7tsumugi4core4math4Vec23new(100, 0));
  const fine = _M0MP45lumen7tsumugi4core4math8CubicBez18flatten__to__array(curved, 0.01);
  const coarse = _M0MP45lumen7tsumugi4core4math8CubicBez18flatten__to__array(curved, 1);
  const _tmp = fine.length > coarse.length;
  const _bind$9 = "tolerance had no effect";
  const _bind$10 = _M0FPB12assert__true(_tmp, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), "core/math/math_test.mbt:361:3-361:78@lumen/tsumugi");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGdE(_M0MPC15array5Array2atGdE(fine, 0), 0, undefined, "core/math/math_test.mbt:362:3-362:26@lumen/tsumugi");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGdE(_M0MPC15array5Array2atGdE(fine, 1), 0, undefined, "core/math/math_test.mbt:363:3-363:26@lumen/tsumugi");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPB12assert__true(Math.abs(_M0MPC15array5Array2atGdE(fine, fine.length - 2 | 0) - 100) < 1e-09, undefined, "core/math/math_test.mbt:364:3-364:64@lumen/tsumugi");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  return _M0FPB12assert__true(Math.abs(_M0MPC15array5Array2atGdE(fine, fine.length - 1 | 0)) < 1e-09, undefined, "core/math/math_test.mbt:365:3-365:54@lumen/tsumugi");
}
function _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi4core20math__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP45lumen7tsumugi4core20math__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
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
    on_err(new _M0DTPC15error5Error115lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP45lumen7tsumugi4core20math__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$3 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP45lumen7tsumugi4core20math__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
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
      return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
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
  _M0FP45lumen7tsumugi4core20math__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP45lumen7tsumugi4core20math__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP45lumen7tsumugi4core20math__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP45lumen7tsumugi4core20math__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
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
        case 1: {
          const _InspectError = err;
          const _e$2 = _InspectError._0;
          return _e$2;
        }
        case 4: {
          const _SnapshotError = err;
          const _e$3 = _SnapshotError._0;
          return _e$3;
        }
        case 3: {
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
    const _bind$3 = _M0IP45lumen7tsumugi4core20math__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
      const _bind$4 = _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
        const _bind$5 = _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
          const _bind$6 = _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
            const _bind$7 = _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test21MoonBit__Test__Driver9run__testGRP45lumen7tsumugi4core20math__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
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
      _try_err = new _M0DTPC15error5Error117lumen_2ftsumugi_2fcore_2fmath__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
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
function _M0FP45lumen7tsumugi4core20math__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$3 = 0;
  const _bind$4 = tests.length;
  let _tmp = _bind$3;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const entry = i >>> 0 < tests.length ? tests[i] : $oob();
      _M0FP45lumen7tsumugi4core20math__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP45lumen7tsumugi4core20math__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP45lumen7tsumugi4core20math__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP45lumen7tsumugi4core20math__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP45lumen7tsumugi4core20math__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP45lumen7tsumugi4core20math__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP45lumen7tsumugi4core20math__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP45lumen7tsumugi4core20math__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP45lumen7tsumugi4core20math__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP45lumen7tsumugi4core20math__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=math.blackbox_test.js.map
