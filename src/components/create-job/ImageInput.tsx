"use client";

import React, { useEffect, useMemo, useState } from "react";

type Form = {
  name?: string;
  description?: string;
  benefits?: string;
  responsibilities?: string;
  minSalary?: number;
  maxSalary?: number;
  categoryId?: string;
  experienceId?: string;
  typeId?: string;
  qualificationId?: string;
  genderId?: string;
  location: Location;
  reset?: boolean;
};
type Location = {
  id: number;
  name: string;
  country: string;
  population: number;
};

export default function ImageInput({
  setFormValues,
  formValues,
  setFile,
  file,
}: {
  setFormValues: React.Dispatch<React.SetStateAction<Form>>;
  formValues: Form;
  setFile: React.Dispatch<React.SetStateAction<string | null>>;
  file: string | null;
}) {
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [responsibility, setResponsibility] = useState("");
  const [idRes, setIdRes] = useState(-1);
  const [updated, setUpdated] = useState(false);

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

  useEffect(() => {
    if (formValues.reset) {
      setResponsibilities([]);
      setResponsibility("");
      setFile(null);
    }
    if (!updated && formValues && formValues.responsibilities) {
      setResponsibilities(
        formValues.responsibilities.split("</responsibility/>")
      );
      setUpdated(true);
    }
  }, [formValues]);

  useEffect(() => {
    setFormValues({
      ...formValues,
      responsibilities:
        responsibilities.join("</responsibility/>")
    });
  }, [responsibilities]);
  console.log(formValues);
  
  const handleResponsibility = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && responsibility.trim()) {
      if (idRes != -1) {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[idRes] = responsibility;
        console.log(updatedResponsibilities);

        setResponsibilities(updatedResponsibilities);
        setIdRes(-1);
      } else {
        setResponsibilities([...responsibilities, responsibility]);
      }

      setResponsibility("");
    }
  };

  useEffect(() => {
    if (idRes != -1) setResponsibility(responsibilities[idRes]);
  }, [idRes]);

  return (
    <div className="w-1/2 h-full flex items-center justify-center flex-col gap-10">
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
      <div className="flex flex-col gap-5 w-[500px] mt-10">
        <label htmlFor="responsibility" className="text-lg font-semibold">
          Job Responsibility
        </label>
        <input
          type="text"
          id="responsibility"
          name="responsibility"
          placeholder="Responsibility"
          className={`border border-[#d4d8db] outline-none px-10 py-5`}
          value={responsibility}
          onChange={(e) => setResponsibility(e.target.value)}
          onKeyDown={(e) => handleResponsibility(e)}
        />
        <h1 className="font-semibold">Responsibilities: </h1>
        <ul>
          {responsibilities?.length == 0 ? (
            <p className="">There are no responsibilities</p>
          ) : (
            responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="flex items-center gap-3 justify-between mb-3 w-[500px]"
              >
                {responsibility}{" "}
                <span className="flex items-center gap-3">
                  <span
                    className={`px-3 py-2 font-semibold ${
                      idRes == index ? "bg-[#2797cb]" : "bg-[#27CB8B]"
                    } rounded-lg  text-white cursor-pointer`}
                    onClick={() => setIdRes(index)}
                  >
                    {idRes == index ? "Editing" : "Edit"}
                  </span>{" "}
                  <span
                    className="px-3 py-2 font-semibold rounded-lg cursor-pointer bg-[#cb2727] text-white"
                    onClick={(e) => {
                      setResponsibilities(
                        responsibilities.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    Delete
                  </span>
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
