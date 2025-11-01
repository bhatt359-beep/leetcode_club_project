function Header() {
    return (
        <header className="flex justify-between py-5 px-5 items-center border-b">
            <h1 className="font-bold text-3xl">
                AI Bookshelf
            </h1>
            <nav>
                <ul className="flex gap-8">
                    <li><a href="#">link one</a></li>
                    <li><a href="#">link two</a></li>
                    <li><a href="#">link three</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header