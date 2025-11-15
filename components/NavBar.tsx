import Link from "next/link";
import {navLinks} from "@/constants";
import Image from "next/image";
import {NavLink} from "@/type";

const NavBar = () => {
    return (
        <header>
            <nav>
                {/*The area for image like logo*/}
                <Link href={'/'} className={'flex-center gap-2 text-xl'}>
                    <p className={'font-montserrat'}>BP</p>
                <p className={' font-montserrat'}><span className={'font-bold '}>Bold</span> Purity</p>
                </Link>
                <ul>

                    {navLinks.map(({label, link}:NavLink) => (
                    <li key={label}>
                        <Link href={link} className={" hidden md:block text-sm text-primary-400 opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"}>{label}</Link>
                    </li>
                    ))}
                </ul>

                <div className={'flex-center gap-3'}>
                    <button>
                        <Image src={'/cart.svg'} alt={"cart icon"} width={32} height={32} />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
