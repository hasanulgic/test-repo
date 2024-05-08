
function VerifyCode() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="min-w-[995px] bg-[#FFFFFF] drop-shadow-sm rounded-xl">
        <div className="px-28 py-20">
          <h1 className="font-medium text-4xl text-center mb-2">Verify code</h1>
          <p className="font-medium text-xl text-center text-[#CA8A04] mb-8 opacity-75">
            An authentication code has been sent to your email.
          </p>
          <form>
            <h2 className="font-semibold text-xl mb-3 uppercase text-[#111827]">
              Enter Code
            </h2>
            <input
              className="border-[1.28px] rounded-lg w-full h-16 px-3 mb-2"
              placeholder="7789BM6X@@H&$K_"
              type="number"
            />
            <u className="text-sm font-medium">
              Didn’t receive a code?{" "}
              <u className="text-[#ED1517]">Resend</u>
            </u>
            <button className="bg-[#FEF08A] text-[#CA8A04] w-full rounded-lg h-14 mt-8 font-semibold">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode