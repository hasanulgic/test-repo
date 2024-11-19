import { useCookies } from "react-cookie";

const auth = {
  name: "Hasan",
  role: "Admin",
};

export default function Cookie() {
  const [cookies, setCookie, removeCookie] = useCookies(["something"]);

  const generateCookie = () => {
    setCookie("something", auth, {
      path: '/',
      maxAge: 10
    });
    setCookie("anotherCookie", auth.name);
  };

  const deleteCookie = () => {
    removeCookie("something");
    removeCookie("anotherCookie");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <p className="font-bold">Cookie information </p>
        <p>Name: {cookies?.something?.name}</p>
        <p>Role: {cookies?.something?.role}</p>
        <p>Aonther Coookie: {cookies?.anotherCookie}</p>
        <button
          onClick={generateCookie}
          className="bg-teal-700 px-4 py-2 rounded-md font-bold"
        >
          Set Cookie
        </button>
        <button
          onClick={deleteCookie}
          className="bg-teal-700 px-4 py-2 rounded-md font-bold"
        >
          Remove Cookie
        </button>
      </div>
    </div>
  );
}
