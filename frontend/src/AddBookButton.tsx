import { useRef } from "react";
import axios from "axios";

interface AddBookButtonProps {
    onUploadSuccess?: () => void;
}

export function AddBookButton({ onUploadSuccess }: AddBookButtonProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    if (file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", ""); // optionally add tags dynamically

    try {
        const res = await axios.post("/api/books/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Book uploaded successfully!");
        onUploadSuccess?.();
        console.log(res.data);
    } catch (err) {
        console.error(err);
        alert("Upload failed.");
    }

    // Reset input
    if (inputRef.current) inputRef.current.value = "";
    };

  return (
    <>
      <button
        onClick={() => inputRef.current?.click()}
        className="border rounded-lg p-1.5 w-30 h-15 hover:bg-violet-400 m-auto">
        Add Book
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        onChange={handleFileChange}/>
    </>
  );
}

export default AddBookButton;
