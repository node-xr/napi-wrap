const expect = require('chai').expect;
const bind = require('./build/Release/napi_bind_test.node')

describe("primitives", () => {

  it("bool", () => {
    expect(bind.primitives.identity_bool(true)).to.eq(true);
    expect(bind.primitives.identity_bool(false)).to.eq(false);
  });

  it("int8_t", () => {
    expect(bind.primitives.identity_int8(-128)).to.eq(-128);
    expect(bind.primitives.identity_int8(0)).to.eq(0);
    expect(bind.primitives.identity_int8(127)).to.eq(127);
  });

  it("int16_t", () => {
    expect(bind.primitives.identity_int16(-32768)).to.eq(-32768);
    expect(bind.primitives.identity_int16(0)).to.eq(0);
    expect(bind.primitives.identity_int16(32767)).to.eq(32767);
  });

  it("int32_t", () => {
    expect(bind.primitives.identity_int32(-2147483648)).to.eq(-2147483648);
    expect(bind.primitives.identity_int32(0)).to.eq(0);
    expect(bind.primitives.identity_int32(2147483647)).to.eq(2147483647);
  });

  it("int64_t", () => {
    expect(bind.primitives.identity_int64(-32768)).to.eq(-32768); // TODO
    expect(bind.primitives.identity_int64(0)).to.eq(0);
    expect(bind.primitives.identity_int64(32767)).to.eq(32767);

    expect(bind.primitives.identity_int64(-32768n)).to.eq(-32768n);
    expect(bind.primitives.identity_int64(0n)).to.eq(0);
    expect(bind.primitives.identity_int64(32767n)).to.eq(32767n);
  });

  it("uint8_t", () => {
    expect(bind.primitives.identity_uint8(0x00)).to.eq(0x00);
    expect(bind.primitives.identity_uint8(0xFF)).to.eq(0xFF);
  });

  it("uint16_t", () => {
    expect(bind.primitives.identity_uint16(0x0000)).to.eq(0x0000);
    expect(bind.primitives.identity_uint16(0xFFFF)).to.eq(0xFFFF);
  });

  it("uint32_t", () => {
    expect(bind.primitives.identity_uint32(0x00000000)).to.eq(0x00000000);
    expect(bind.primitives.identity_uint32(0xFFFFFFFF)).to.eq(0xFFFFFFFF);
  });

  it("uint64_t", () => {
    expect(bind.primitives.identity_uint64(0x00000000)).to.eq(0x00000000);
    expect(bind.primitives.identity_uint64(0xFFFFFFFF)).to.eq(0xFFFFFFFF);

    expect(bind.primitives.identity_uint64(0x0000000000000000n)).to.eq(0x0000000000000000n);
    expect(bind.primitives.identity_uint64(0xFFFFFFFFFFFFFFFFn)).to.eq(0xFFFFFFFFFFFFFFFFn);

  });

  it("float", () => {
    expect(bind.primitives.identity_float(0.0)).to.eq(0.0);
    expect(bind.primitives.identity_float(Number.EPSILON)).to.eq(Number.EPSILON);
    expect(bind.primitives.identity_float(Number.POSITIVE_INFINITY)).to.eq(Number.POSITIVE_INFINITY);
    expect(bind.primitives.identity_float(Number.NEGATIVE_INFINITY)).to.eq(Number.NEGATIVE_INFINITY);
    expect(bind.primitives.identity_float(NaN)).to.be.NaN;
  });

  it("double", () => {
    expect(bind.primitives.identity_double(0.0)).to.eq(0.0);
    expect(bind.primitives.identity_float(Number.EPSILON)).to.eq(Number.EPSILON);
    expect(bind.primitives.identity_double(Number.POSITIVE_INFINITY)).to.eq(Number.POSITIVE_INFINITY);
    expect(bind.primitives.identity_double(Number.NEGATIVE_INFINITY)).to.eq(Number.NEGATIVE_INFINITY);
    expect(bind.primitives.identity_double(NaN)).to.be.NaN;
  });

});
