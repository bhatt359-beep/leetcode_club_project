import axios from "axios";

interface DeleteBookButtonProps {
    bookId: number;
    onDeleted?: () => void;
}

export function DeleteBookButton({ bookId, onDeleted }: DeleteBookButtonProps) {
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this book?")) return;

        try {
            await axios.delete(`/api/books/${bookId}`);
            alert("Book deleted successfully!");
            onDeleted?.();
        } catch (err) {
            console.error(err);
            alert("Failed to delete book");
        }
    };


    return (
        <button onClick={handleDelete} className="border rounded-lg p-1 text-sm text-red-600 hover:bg-red-100">
            Delete
        </button>
    )
};
