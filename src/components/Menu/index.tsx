import Link from "next/link"
import Image from "next/image"
import devs from "@/assets/imagens/devs.png"
export const Menu = ()=>{
    return(
        <>
        <div>
            <div>
                <div>
                    <Link href={"/"}>
                    <Image className=" w-15 h-15 "  src={devs}alt="avata"/> 
                    </Link>
                    <button>
                        
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}