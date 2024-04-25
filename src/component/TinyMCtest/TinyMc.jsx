import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

export default function TinyMc() {
  const [content, setContent] = useState("This is the content");
//   console.log(content)

  const handleEditorChange = (content) => {
    setContent(content);
  };
  return (
    <div>
      <div>
        <div
          className="text-[#767676] m-5 text-center text-lg"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
      <Editor
        apiKey="09iwvb92n40wmo9wxg0laves9bngja4xjvo02zz3lgo4ikew"
        value={content}
        init={{
          height: 500,
          menubar: 'favs file edit view insert format tools table help',
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
