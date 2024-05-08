
function ForgetPassword() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="min-w-[995px] bg-[#FFFFFF] drop-shadow-sm rounded-xl">
        <div className="px-28 py-20">
          <h1 className="font-medium text-4xl text-center mb-2">
            Forgot your password?
          </h1>
          <p className="font-medium text-xl text-center text-[#CA8A04] mb-8 opacity-75">
            Don’t worry, happens to all of us.<br/> Enter your email below to recover
            your password
          </p>
          <form>
            <h2 className="font-semibold text-xl mb-3 uppercase text-[#111827]">
              Email
            </h2>
            <input
              className="border-[1.28px] rounded-lg w-full h-16 px-3 mb-2"
              placeholder="nazmul@gmail.com"
              type="email"
            />
            <button className="bg-[#FEF08A] text-[#CA8A04] w-full rounded-lg h-14 mt-8 font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword