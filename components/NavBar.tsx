import Link from "next/link";

const NavBar = () => {
    return (
        <header>
            <nav>
                {/*The area for image like logo*/}
                <p>Bold Purity Logo</p>
                <ul>
                    {/*I'll make constants*/}
                    <li>
                        <Link href="/" className={"hidden md:block text-primary-400 opacity-80 text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"}>Home</Link>
                    </li>
                    <li>
                        <Link href="/" className={"hidden md:block text-primary-400 opacity-80 text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"}>Home</Link>
                    </li>
                    <li>
                        <Link href="/" className={"hidden md:block text-primary-400 opacity-80 text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"}>Home</Link>
                    </li>
                </ul>

                <div className={''}>
                    <button>
                    {/*Cart button*/}
                        <p>Cart</p>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
