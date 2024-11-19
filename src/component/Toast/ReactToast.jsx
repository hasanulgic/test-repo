import toast, { Toaster } from "react-hot-toast";

export default function ReactToast() {
    const notify = () => toast.success("Here is your toast.");
    const customToast = () =>
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Emilia Gates
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));

  return (
    <section class="pt-12 bg-gray-50 dark:bg-gray-500 sm:pt-16 duration-200">
      <div class="px-4 mx-auto max-w-7xl h-screen sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 dark:text-gray-50 duration-200 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            React toast testing
          </p>
          <h1 class="max-w-2xl mx-auto px-6 text-lg text-gray-600 dark:text-gray-50 font-inter">
            Our AI-powered customer service chatbot is an innovative tool that
            can assist customers 24/7 with their inquiries, providing fast and
            accurate responses.
          </h1>
          <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <button
              onClick={notify}
              class="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white dark:text-black transition-all duration-200 bg-gray-900 dark:bg-gray-100 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Make Toast
            </button>
            <button
              onClick={customToast}
              class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Custom Toast
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
