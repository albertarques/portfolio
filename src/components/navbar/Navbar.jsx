import Link from "next/link";

// TODO: Create a navbar component
export default function Navbar() {
  return (
    <div className="w-full sticky z-10 top-0 flex flex-row justify-between lg:text-2xl text-xl">
      <div className="border-f brand frame-f block py-3 px-6 font-bold">
        <Link href="/">AA_Portfolio</Link>
      </div>
      <nav className="flex justify-end">
        <ul className="border-f brand frame-f bg-current block py-3 px-6 font-bold">
          <li className="">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}