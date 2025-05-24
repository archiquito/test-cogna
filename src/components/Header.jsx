import { Store } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Store /> Fake Store
        </Link>
      </h1>
    </header>
  );
}
