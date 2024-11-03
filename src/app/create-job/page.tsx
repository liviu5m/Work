"use client";

import ImageInput from "@/components/create-job/ImageInput";
import Inputs from "@/components/create-job/Inputs";
import { useAppContext } from "@/lib/AppContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Location = {
  id: number;
  name: string;
  country: string;
  population: number;
};

type Form = {
  name?: string;
  description?: string;
  categoryId?: string;
  experienceId?: string;
  typeId?: string;
  qualificationId?: string;
  genderId?: string;
  location: Location;
};

export default function page() {
  if (!localStorage.getItem("userId")) {
    return (
      <div className="w-full h-full">
        <div className="flex items-center justify-center h-full">
          <div className="w-full h-full bg-[#F1F5F9] py-48 flex items-center justify-center flex-col gap-10">
            <div className="text-[#00044A] text-4xl">
              Please log in to create a new job
            </div>
            <a
              href={"/login"}
              className="px-7 py-4 w-80 text-center rounded-lg bg-[#020DFF] text-white font-bold button2 shadow-lg hover:scale-105 hover:shadow-xl"
            >
              {"LOG IN"}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const { user } = useAppContext();
  const [formValues, setFormValues] = useState<Form>({
    name: "",
    description: "",
    location: { name: "", country: "", id: -1, population: 0 },
  });
  const [file, setFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a image");
      return;
    } else if (
      !formValues.name ||
      !formValues.description ||
      !formValues.categoryId ||
      !formValues.experienceId ||
      !formValues.genderId ||
      !formValues.location ||
      !formValues.qualificationId ||
      !formValues.typeId
    ) {
      toast.error("Please fill all fields");
    } else {
      axios
        .post("/api/upload", { image: file })
        .then((res) => {
          axios
            .post("/api/jobs", {
              ...formValues,
              image: res.data.url,
              userId: user.id,
            })
            .then((res) => {
              console.log(res.data);
              setFormValues({
                name: "",
                description: "",
                categoryId: "",
                experienceId: "",
                typeId: "",
                qualificationId: "",
                genderId: "",
                location: { name: "", country: "", id: -1, population: 0 },
              });
              setFile("");
              toast.success("Job posted successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="pb-36 pt-60 bg-[#F1F5F9]">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-[#00044A]">Post A Job</h1>
        </div>
      </div>
      <div className="bg-white py-36">
        <div className="container mx-auto">
          <form
            className="flex items-center justify-center gap-20 flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex items-center justify-center gap-10 w-full">
              <Inputs setFormValues={setFormValues} formValues={formValues} />
              <ImageInput setFile={setFile} file={file} />
            </div>
            <button className="w-[400px] px-7 text-center py-4 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg hover:scale-105">
              POST
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
