import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function File({}) {
  const [file, setFile] = useState([]);
  const [isDrag, setIsDrag] = useState(false);

  console.log(file)

  const onSelectedFile = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);

    if (file.length === 0) {
      setFile(selectedFiles);
      return;
    } else {
      const updatedList = [...file, ...selectedFiles];
      setFile(updatedList);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const selectedDropFiles = event.dataTransfer.files;
    const selectedFiles = Array.from(selectedDropFiles);

    if (file.length === 0) {
      setFile(selectedFiles);
      return;
    } else {
      const updatedList = [...file, ...selectedFiles];
      setFile(updatedList);
    }
    setIsDrag(false);
  };

  const handleDragOverandLeave = (e, isDraging) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(isDraging);
  };

  const handleDelete = (index) => {
    const updatedList = Array.from([...file]).filter((_, ind) => ind !== index);
    setFile(updatedList);
  };

//   const formData = new FormData();
//   formData.append("files", file);
//   console.log(formData)
// for (files in formData) {
//   console.log(files);
}
  return (
    <div className="flex justify-center items-center h-auto mt-10">
      <form>
        <div className="mb-8">
          <input
            onChange={onSelectedFile}
            type="file"
            name="images"
            multiple
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
            id="upload"
          />
          <label
            onDrop={handleDrop}
            onDragOver={(e) => handleDragOverandLeave(e, true)}
            onDragLeave={(e) => handleDragOverandLeave(e, false)}
            htmlFor="upload"
            className={`relative flex min-h-[200px] max-w-xl items-center justify-center rounded-md border border-dashed ${
              isDrag ? "border-gray-800" : "border-gray-300"
            } p-12 text-center`}
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                Browse
              </span>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-4 gap-3 max-w-xl">
          {file &&
            Array.from(file).map((singleFile, index) => {
              return (
                <div
                  key={URL.createObjectURL(singleFile)}
                  className="border border-gray-200 p-1.5 rounded-md"
                >
                  <div className="flex justify-between mb-1 relative z-10">
                    <p className="text-xs bg-gray-300 rounded-full px-2 py-1 mb-1">
                      {index + 1}
                    </p>
                    <div
                      onClick={() => handleDelete(index)}
                      className="absolute -top-4 -right-4 text-xl cursor-pointer"
                    >
                      <IoMdCloseCircle />
                    </div>
                  </div>
                  <img
                    src={URL.createObjectURL(singleFile)}
                    className="h-20 w-full rounded-sm relative"
                    alt="image"
                  />
                  <p className="text-[10px] mt-1 text-pretty overflow-hidden">
                    {singleFile?.name}
                  </p>
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );

