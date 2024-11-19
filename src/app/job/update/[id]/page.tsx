"use client";

import ImageInput from "@/components/create-job/ImageInput";
import Inputs from "@/components/create-job/Inputs";
import { Loading } from "@/components/Loader";
import { useAppContext } from "@/lib/AppContext";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
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
  userId?: number;
  id?: number;
  imageUrl?: string;
};

export default function Page() {
  const { id } = useParams();
  const { user } = useAppContext();
  const router = useRouter();
  const [formValues, setFormValues] = useState<Form>({
    name: "",
    description: "",
    location: { name: "", country: "", id: -1, population: 0 },
    responsibilities: "",
  });
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    if (formValues && user && formValues.userId) {
      if (formValues.userId != user.id) router.push("/jobs");
    }
  }, [formValues, user]);

  useEffect(() => {
    if (id) {
      axios
        .get("/api/jobs/" + id)
        .then((res) => {
          setFormValues({
            ...res.data,
            location: {
              id: res.data.city.id,
              name: res.data.city.name,
              country: res.data.city.country,
              population: res.data.city.population,
            },
          });
          setFile(res.data.imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    
    if (!file) {
      toast.error("Please select a image");
      return;
    } else if (
      !formValues.name ||
      !formValues.description ||
      !formValues.benefits ||
      !formValues.responsibilities ||
      !formValues.categoryId ||
      !formValues.minSalary ||
      !formValues.maxSalary ||
      !formValues.categoryId ||
      !formValues.experienceId ||
      !formValues.genderId ||
      !formValues.location ||
      !formValues.qualificationId ||
      !formValues.typeId
    ) {
      toast.error("Please fill all fields");
      return;
    } else {
      if (file == formValues.imageUrl) {
        axios
          .put("/api/jobs/" + formValues.id, {
            ...formValues,
          })
          .then((res) => {
            router.push("/jobs");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .post("/api/upload", { image: file })
          .then((res) => {
            axios
              .put("/api/jobs/" + formValues.id, {
                ...formValues,
                imageUrl: res.data.url,
              })
              .then((res) => {
                console.log(res.data);
                
                // router.push("/jobs");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    formValues.minSalary && (
      <div>
        <div className="pb-36 pt-60 bg-[#F1F5F9]">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-[#00044A]">Update Job</h1>
          </div>
        </div>
        <div className="bg-white py-36">
          <div className="container mx-auto">
            <form
              className="flex items-center justify-center gap-20 flex-col"
              onSubmit={(e) => handleSubmit(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <div className="flex items-center justify-center gap-10 w-full">
                <Inputs setFormValues={setFormValues} formValues={formValues} />
                <ImageInput
                  setFormValues={setFormValues}
                  formValues={formValues}
                  setFile={setFile}
                  file={file}
                />
              </div>
              <button className="w-[400px] px-7 text-center py-4 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg hover:scale-105">
                UPDATE
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
}
