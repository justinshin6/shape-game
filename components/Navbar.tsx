import Link from "next/link"
/**
 * Navbar component at the top of the screen that also contains the "Sign In" button that is in charge of authentication 
 */
export default function Navbar() {
  return (
    <div className="absolute inset-y-0 h-12 bg-[#1D4229CC] w-screen text-white" aria-labelledby="Navigation bar">
        <Link href="/" className="py-2.5 inline-flex">
            <p className="font-extrabold font-sans text-xl">
            Guess The Shape!
            </p>
        </Link>


        <div className='absolute right-10 top-2.5'>
            Icon            
        </div>

    </div>
  )
}