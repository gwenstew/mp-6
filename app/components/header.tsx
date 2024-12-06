import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <nav className="p-2 m-4">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/profile" className={linkStyling}>
                    Profile
                </Link>
                <Link href="/signIn" className={linkStyling}>
                    Sign In
                </Link>
            </nav>
        </header>
    )
}
