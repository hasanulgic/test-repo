import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { FILE_UPLOAD_URL } from "../../../data";

const UploadFile = () => {
    const [open, setOpen] = useState(false);
  // State to hold the selected files
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadResponse, setUploadResponse] = useState(null);

  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  // console.log(selectedFiles);

  // Handle single file selection
  const handleSingleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to upload single file
  const uploadSingleFile = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${FILE_UPLOAD_URL}/property-app`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setUploadResponse(result);
      setUploadedFileURL(result?.name)
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle multiple file selection
  const handleMultipleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  // Function to upload multiple files
  const uploadMultipleFiles = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files first!");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await fetch(`${FILE_UPLOAD_URL}/multi-property-app`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setUploadResponse(result);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <h2>File Upload with React</h2>

      {/* Single File Upload */}
      <div>
        <h3>Upload Single File</h3>
        <input type="file" onChange={handleSingleFileChange} />
        <Button variant="contained" onClick={uploadSingleFile}>
          Upload Single File
        </Button>
      </div>

      {/* Multiple Files Upload */}
      <div>
        <h3>Upload Multiple Files</h3>
        <input type="file" onChange={handleMultipleFileChange} multiple />
        <Button variant="contained" onClick={uploadMultipleFiles}>
          Upload Multiple Files
        </Button>
      </div>

      {/* Display Upload Response */}
      {uploadResponse && (
        <div>
          <h3>Upload Response</h3>
          <pre>{JSON.stringify(uploadResponse, null, 2)}</pre>
        </div>
      )}

      {/* Display Uploaded Image */}
      {uploadedFileURL && (
        <div>
          <h3>Uploaded File Preview</h3>
          <img
            src={`${FILE_UPLOAD_URL}/property-img/${uploadedFileURL}`}
            alt="Uploaded File"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      {/* <Button  onClick={()=> setOpen(!open)}>
        Mui Modal
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message="Note archived"
        // action={action}
      /> */}
    </div>
  );
};

export default UploadFile;
