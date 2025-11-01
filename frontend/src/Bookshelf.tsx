function Bookshelf() {
    return (
        <main className="flex flex-col">
            <div className="h-[60vh] w-screen p-15">
                <div className="border w-250 h-115 text-center m-auto">
                    BOOKSHELF
                </div>
            </div>
            <button className="border rounded-lg p-1.5 w-30 h-15 hover:bg-violet-400 m-auto">
                Add Book
            </button>
        </main>

    );
}

export default Bookshelf