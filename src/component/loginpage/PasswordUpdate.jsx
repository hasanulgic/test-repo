
function PasswordUpdate() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F0F0F0]">
      <div className="min-w-[995px] bg-[#FFFFFF] drop-shadow-sm rounded-xl">
        <div className="px-28 py-20">
          <h1 className="font-medium text-4xl text-center mb-2">
            Set a Password
          </h1>
          <p className="font-medium text-xl text-center text-[#CA8A04] mb-4 opacity-75">
            Please set a new password for your account
          </p>
          <form>
            <h2 className="font-semibold text-xl mb-3 uppercase text-[#111827]">
              Create Password
            </h2>
            <input
              className="border-[1.28px] rounded-lg w-full h-16 px-3 mb-4"
              placeholder="Create Password"
              type="password"
              required
            />
            <h2 className="font-semibold text-xl mb-3 uppercase text-[#111827]">
              Re-enter Password
            </h2>
            <input
              className="border-[1.28px] rounded-lg w-full h-16 px-3 mb-6"
              placeholder="Re-enter Password"
              type="password"
              required
            />
            <button type="submit" className="bg-[#FEF08A] text-[#CA8A04] w-full rounded-lg h-14 font-semibold">
              Set password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordUpdate