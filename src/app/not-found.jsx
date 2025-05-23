import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className=" w-full h-screen flex flex-col space-y-2 items-center justify-center">
            <Frown className="w-25 h-25" />
            <h1 className="text-center font-bold">
                Página não encontrada!
            </h1>
            <p>Essa página não existe!</p>
            <Link href='/' className="underline">
                Voltar para Home
            </Link>
        </div>
    )

}