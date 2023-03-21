import { Navbar } from "@/src/components/navbar.component"
import Image from "next/image"
export default function Home() {
  return(
    <div>
      <Navbar></Navbar>
      <div className="text-center font-bold text-2xl py-5">SELAMAT DATANG DI DUNIA NEXTJS</div>
    </div>
  )
}