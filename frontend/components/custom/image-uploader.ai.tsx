"use client";
import React, { useState, useRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Citrus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileInfo } from "@/types/global";

interface ImageUploaderAiProps {
  onProcess: (image: FileInfo) => void;
  onUpload: () => void;
  isAnalyzing: boolean;
  maxFileSizeBytes?: number;
}

const defaultImage = {
  url: null,
  content: null,
};

export interface ImageUploaderAiHandle {
  reset: () => void;
}

const ImageUploaderAi = React.forwardRef<
  ImageUploaderAiHandle,
  ImageUploaderAiProps
>(
  (
    {
      onProcess,
      onUpload,
      isAnalyzing,
      maxFileSizeBytes = 5000000,
    }: ImageUploaderAiProps,
    ref
  ) => {
    const [image, setImage] = useState<FileInfo>(defaultImage);
    const [isMaxSizeReached, setIsMaxSizeReached] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if ((file?.size ?? 0) > maxFileSizeBytes) {
        setImage(defaultImage);
        setIsMaxSizeReached(true);
        return;
      }

      setIsMaxSizeReached(false);

      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImage({
            url: event.target?.result as string,
            content: file,
          });
          // set null
          onUpload();
        };
        reader.readAsDataURL(file);
      }
    };

    const processImage = async () => {
      if (!image.content) return;
      onProcess(image);
    };

    useImperativeHandle(ref, () => ({
      reset: () => {
        setImage(defaultImage);
      },
    }));

    return (
      <Card className="border-2 border-dashed  bg-white shadow-md mb-8">
        <CardHeader className="pb-3">
          <CardTitle className="">Upload Rice Leaf Image</CardTitle>
          <CardDescription>
            JPG, JPEG or PNG (max. {maxFileSizeBytes / 1000000}MB)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className=" text-sm h-2 text-red-600">
            {isMaxSizeReached
              ? "Kirim gambar dibawah 5mb"
              : ""}
          </p>
          {!image.url ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer  transition-colors"
            >
              <Upload className="w-12 h-12 0 mx-auto mb-3" />
              <p className="text-gray-700 font-medium mb-1">
                Click to upload
              </p>
              <p className="text-sm text-gray-500">
                Your image will be classified 
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden">
                {isAnalyzing && (
                  <>
                    <div className="flex flex-col items-center justify-center absolute w-full h-full ">
                      <Citrus
                        className="text-secondary animate-spin text-center z-40"
                        size={60}
                      />
                    </div>

                    <div className="absolute w-full h-full bg-accent/80"></div>
                  </>
                )}

                <div className="flex justify-center items-center">
                  <img
                    src={image.url}
                    alt="Uploaded leaf"
                    className="w-[300px] h-[300px] object-cover"
                  />
                </div>
                
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="flex-1"
                  disabled={isAnalyzing}
                >
                  Change Image
                </Button>
                <Button
                  onClick={processImage}
                  disabled={isAnalyzing}
                  className="flex-1 "
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png, .jpg, .jpeg"
            capture="environment"
            onChange={handleImageUpload}
            className="hidden"
          />
        </CardContent>
      </Card>
    );
  }
);

ImageUploaderAi.displayName = 'ImageUploaderAi'
export {ImageUploaderAi}
