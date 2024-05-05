/* eslint-disable react/prop-types */
export default function Comments({comment}) {
    const { id, body, user, postId } = comment;

  return (
    <div className="border px-4 py-2 rounded-md mb-3">
      <h3 className="mb-1 text-slate-900 font-semibold">
        <span className="mb-1 block text-sm leading-6 text-indigo-500">
          Comment no - {id}
        </span>
        {body}
      </h3>
      <div className="flex justify-between items-center">
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-1"
          href=""
        >
          {user?.username}
        </a>
        <button className="text-gray text-sm bg-slate-100 px-2 rounded-full h-9 font-semibold">Post Id : {postId}</button>
      </div>
    </div>
  );
}
