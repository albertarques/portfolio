import Link from "next/link";

// TODO: Create a navbar component
export default function Navbar() {
  return (
    <div className="container flex flex-row justify-between p-5 lg:text-2xl text-xl">
      <div className="brand">
        <Link href="/">A::Portfolio</Link>
      </div>
      <nav className="flex justify-end">
        <ul className="">
          <li className="mr-5">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}