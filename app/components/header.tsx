import Link from "next/link";
import LogButton from "./login-button";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <nav className="flex p-2 m-4 items-center space-x-4">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/profile" className={linkStyling}>
                    Profile
                </Link>
                <LogButton />
            </nav>
        </header>
    )
}
