"use client";

import React, { useState } from "react";

export default function ImageInput({
  setFile,
  file
}: {
  setFile: React.Dispatch<React.SetStateAction<string | null>>;
  file: string | null;
}) {

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-1/2 h-full flex items-center justify-center">
      <label
        htmlFor="image"
        className={`w-[500px] h-[500px] bg-black rounded-full flex items-center justify-center text-white cursor-pointer ${
          file ? "" : "bg-black"
        }`}
        style={{
          backgroundImage: file ? `url(${file})` : "none",
          backgroundSize: "cover",
        }}
      >
        <span>Select An Image</span>
        <input
          type="file"
          id="image"
          name="image"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
