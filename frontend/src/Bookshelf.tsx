import AddBookButton from "./AddBookButton";
import { DeleteBookButton } from "./DeleteBookButton";

export interface Book {
    id: number;
    title: string;
    filename: string;
    filetype: string;
    tags: string;
    added_on: string;
}

interface BookshelfProps {
    books: Book[];
    onUploadSuccess?: () => void;
}

export function Bookshelf({ books }: BookshelfProps) {
    return (
        <main className="flex flex-col">
            <div className="h-[60vh] w-screen p-15">
                <div className="border w-250 h-115 text-center m-auto">
                    BOOKSHELF
                </div>
            </div>

        <div className="flex flex-col gap-4 p-4">
            {books.length === 0 ? (
                <p className="text-center">No books found</p>
            ) : (
                books.map((book) => (
                    <div key={book.id} className="border p-2 rounded">
                        <div>
                            <h3>Title: {book.title}</h3>
                            <p>File: {book.filename} ({book.filetype})</p>
                            <p>Tags: {book.tags}</p>
                            <p>Added: {book.added_on}</p>
                        </div>
                        <DeleteBookButton bookId={book.id} onDeleted={() => {
                            window.location.reload();
                        }}/>
                    </div>
                ))
            )}
        </div>
        <AddBookButton onUploadSuccess={() => {
            window.location.reload();
        }}/>
        </main>
    );
}

export default Bookshelf