
import Link from "next/link";
import Image from "next/image";
import devs from "@/assets/imagens/devs.png"



export const Header = () => {
return(
<>
<header className= "{quicksand.className} bg-[#93946c]  text-sm flex py-3 px-5 justify-between items-center static top-0 z-20" >
  <Link href="/">
    <Image className=" w-11 h-11 " src={devs} 
    alt="logo"/>
  </Link>
  <div className="hidden md:flex items-center gap-10 text-md">
    <Link href={"/"}> Sobre mim</Link>
  <Link href={"/contatos"}>Ir para a pagina contatos</Link>
  </div>
</header>
  </>
)}