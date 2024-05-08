import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Socket() {
  const socket = io.connect("http://localhost:5000/");

  const [message, setMessage] = useState("");
  const [getMessage, setGetMessage] = useState("");
  const [room, setRoom] = useState("");

  const handleSend = () => {
    socket.emit("reactVite", { message, room });
  };

  const handleRoom = () => {
    socket.emit("joinRoom", room);
  };

  useEffect(() => {
    socket.on("showMessage", (data) => {
      setGetMessage(data.message);
    });
  }, [socket]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-xl font-bold mt-8 mb-4">Socket IO</div>
      <div className="flex flex-col">
        <div className="bg-white p-4 rounded-lg">
          <div className="relative bg-inherit">
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="number"
              id="username"
              name="username"
              className="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
              placeholder="Join Room"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
              Join room
            </label>
          </div>
        </div>
        <button
          onClick={handleRoom}
          className="my-2 w-1/2 mx-auto px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          Join Room
        </button>

        <div className="bg-white p-4 rounded-lg">
          <div className="relative bg-inherit">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="username"
              name="username"
              className="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
              placeholder="Type inside me"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
              Type inside me
            </label>
          </div>
        </div>

        <button
          onClick={handleSend}
          className="w-1/2 mx-auto px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          Click me!
        </button>

        <div className="mt-4">
          {/* <p>{message}</p> */}
          <p>{getMessage}</p>
        </div>
        {/* <div className="flex flex-col h-screen max-w-sm">
          <div className="flex-grow overflow-y-auto">
            {/* <!-- Chat messages --> */}
            {/* <div className="flex flex-col mb-4 gap-4 py-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                  {message && (
                    <p className="text-gray-900 text-sm">{message}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                  {getMessage && (
                    <p className="text-white text-sm">
                      {getMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-16">
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
              placeholder="Type a message..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
