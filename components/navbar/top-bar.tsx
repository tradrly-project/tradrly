import Link from 'next/link'
import { MainButton } from '@/components/button/main-button'

const Topbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/4 z-50 px-6 py-2 w-[60%] h-16 flex items-center justify-between ">

            {/* Placeholder kiri untuk keseimbangan */}
            <div className="w-32" />

            {/* Menu Tengah */}
            <div className="absolute left-1/4 -translate-x-1/2">
                <ul className="flex gap-16 items-center">
                    <li className="relative group">
                        <button className="font-semibold text-lg text-white transition-all duration-300 group-hover:text-[#29BFDF] group-hover:-translate-y-0.5 ">
                            Fitur
                        </button>
                        <ul className="absolute left-0 gap-2 p-2 top-full hidden w-56 bg-white text-black shadow-lg rounded-md group-hover:flex flex-col transition-all duration-300 ease-in-out opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 z-50">
                            {["Fitur 1", "Fitur 2", "Fitur 3", "Fitur 4", "Fitur 5", "Fitur 6"].map((text, i) => (
                                <li key={i}>
                                    <Link href="#" className="block px-4 py-2 rounded-lg hover:text-emerald-900 hover:bg-emerald-50">
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <Link
                            href="/harga"
                            className="font-semibold text-lg text-white transition-all duration-300 hover:text-[#29BFDF] hover:-translate-y-0.5 hover:scale-100"
                        >
                            Harga
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/tentang-kami"
                            className="font-semibold text-lg text-white transition-all duration-300 hover:text-[#29BFDF] hover:-translate-y-0.5"
                        >
                            Tentang Kami
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Tombol Masuk di kanan */}
            <div className=" flex justify-end">
                <MainButton className="w-full px-7">
                    <Link href={"/login"}>
                  <span className="text-md font-bold">Masuk</span>  
                    </Link>
                </MainButton>
            </div>
        </nav>
    )
}

export default Topbar
