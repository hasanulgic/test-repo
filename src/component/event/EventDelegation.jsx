

export default function EventDelegation() {
      const parentFunction = () => {
        console.log("Hello from the parent");
      };
      const firstChildFunction = () => {
        console.log("Hello from the first child");
      };
      const secondChildFunction = () => {
        console.log("Hello from the second child");
      };
      const thirdChildFunction = (e) => {
        e.stopPropagation();
        console.log("Hello from the third child");
      };
  return (
    <div>
      <div className="">
        <div className="flex justify-around items-center mt-10 gap-2" onClick={parentFunction}>
          <button
            className="px-4 py-3 bg-teal-500 rounded-md text-black text-lg"
            onClick={firstChildFunction}
          >
            First child button
          </button>
          <button
            className="px-4 py-3 bg-sky-500 rounded-md text-black text-lg"
            onClick={secondChildFunction}
          >
            Second child button
          </button>
          <button
            className="px-4 py-3 bg-pink-500 rounded-md text-black text-lg"
            onClick={thirdChildFunction}
          >
            Third child button
          </button>
        </div>
      </div>
    </div>
  );
}
