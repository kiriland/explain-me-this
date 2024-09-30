"use client";

import { useRouter } from "next/navigation";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "~/app/api/uploadthing/core";
import { Upload } from "lucide-react";
import { useState, useRef } from "react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

export default function UploadDocButton(){
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { startUpload } = useUploadThing("docUploader", {
      onClientUploadComplete(){
        router.refresh();
        setIsUploading(false);
      },
      onUploadBegin(){
        setIsUploading(true);
      }
    });

    const handleFileChange = () => {
      const files = fileInputRef.current?.files;
      if (files) {
        startUpload(Array.from(files));
      }
    };

    return (
      <div
        className="block p-4 bg-white border border-gray-200 rounded-lg w-50 shadow hover:bg-gray-50 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center text-center h-full justify-center">
          <Upload className="w-12 h-12 text-blue-500 mb-2" />
          <span className="text-sm font-medium text-gray-900 max-w-full">
            {isUploading ? "Uploading..." : "Upload New File..."}
          </span>
        </div>
      </div>
    )
  }