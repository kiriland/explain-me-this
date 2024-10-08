
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { Button } from "~/components/ui/button"


export default function TopNav() {
   
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90 text-gray-950 dark:text-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="#" className="flex items-center" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
            <SignedOut>
            <SignInButton>
                <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            
            <UserButton />
          </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }