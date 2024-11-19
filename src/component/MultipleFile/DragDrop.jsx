import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { IoMdCloseCircle } from "react-icons/io";
const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragDrop() {
  const [file, setFile] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    const selectedFileArray = Array.from(file);
    const imagesArray = selectedFileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imagesArray);
  };

  const handleDelete = (image, index) => {
    const fileIndex = file.findIndex((file) => file.name === "app.js");
    // setFile(file.filter((e) => e != index));
    // console.log(image, index)
    setSelectedImages(selectedImages.filter((img) => img != image));
  };

  // console.log(files.findIndex((file) => file.name === "app.js"));
  console.log(file);
  console.log(selectedImages);
  return (
    <div className="flex justify-center items-center h-auto mt-10">
      <div>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple
          label="This label of file upload"
          maxSize={2}
          onTypeError={(err) => {
            console.log(err);
          }}
        >
          <label
            htmlFor="upload"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
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
        </FileUploader>
        <div className="grid grid-cols-4 gap-3 mt-6">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div
                  key={image}
                  className="border border-gray-200 p-1.5 rounded-md"
                >
                  <div className="flex justify-between mb-1 relative z-10">
                    {/* <p className="text-sm">{index + 1}</p> */}
                    <div
                      onClick={() =>
                        // setSelectedImages(
                        //   selectedImages.filter((e) => e != image)
                        // )
                        handleDelete(image, index)
                      }
                      className="absolute -top-3 -right-3"
                    >
                      <IoMdCloseCircle />
                    </div>
                  </div>
                  <img
                    src={image}
                    className="h-16 w-20 rounded-sm relative"
                    alt="image"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
