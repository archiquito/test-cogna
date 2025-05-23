import Link from "next/link";

export function Header () {
    return (
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">
            <Link href="/">Fake Store</Link>
          </h1>
        </header>
    )
}