import { SignedIn, SignedOut } from "@clerk/nextjs";
import { FileIcon, Upload } from "lucide-react";
import Link from "next/link";
import { getMyDocs } from "~/server/queries";
import UploadDocButton from "./_components/uploadDocButton";

export const dynamic = "force-dynamic";

async function Docs() {
  const docs = await getMyDocs();
  return (
    <>
    <h1 className="text-2xl font-bold mb-6">Your PDF Files</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <UploadDocButton />
        {docs.map((doc) => (
          <Link
          key={doc.id}
            href="#"
            className="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            <div  className="flex flex-col items-center text-center">
              <FileIcon className="w-12 h-12 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-900 truncate max-w-full">
                {doc.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <SignedOut>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Please Sign In</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Docs />
      </SignedIn>
    </main>
  );
}
