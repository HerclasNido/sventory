import React, { useRef, useState } from "react";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value?: string | null;
  onChange?: (value: File | null) => void;
  className?: string;
  previewUrl?: string;
}

const ImageInput = React.forwardRef<HTMLInputElement, ImageInputProps>(
  ({ className, value, onChange, previewUrl, ...props }, ref) => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string>(previewUrl || "");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // Create preview URL
        const url = URL.createObjectURL(file);
        setPreview(url);
        onChange?.(file);
      }
    };

    const handleRemove = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      setPreview("");
      onChange?.(null);
    };

    const handleClick = () => {
      fileRef.current?.click();
    };

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <input
          {...props}
          type="file"
          ref={fileRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        
        {preview ? (
          <div className="relative w-24 h-24 group">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg border border-gray-200"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleRemove}
            >
              <IconX size={16} />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleClick}
            >
              <IconPhoto size={16} />
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="w-24 h-24 flex flex-col items-center justify-center gap-2 border-dashed"
            onClick={handleClick}
          >
            <IconUpload className="h-8 w-8 text-gray-400" />
            <span className="text-sm text-gray-600">Image</span>
          </Button>
        )}
      </div>
    );
  }
);

ImageInput.displayName = "ImageInput";

export { ImageInput };