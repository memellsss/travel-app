import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30 py-5 backdrop-blur-md bg-white/80 rounded-b-3xl border-b border-gray-10">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="drop-shadow-sm" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all duration-300 hover:text-green-50 hover:font-bold relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden hover:opacity-70 transition-opacity"
      />
    </nav>
  )
}

export default Navbar