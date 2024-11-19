import axios from "axios";
import React, { useEffect, useState } from "react";
import Inputs from "../create-job/Inputs";
import { useAppContext } from "@/lib/AppContext";

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
  userId?: number;
};

export default function Filter({
  setFormValues,
  formValues,
}: {
  setFormValues: React.Dispatch<React.SetStateAction<Form>>;
  formValues: Form;
}) {
  const [yourJobs, setYourJobs] = useState(false);
  const { user } = useAppContext();
  console.log(yourJobs);

  useEffect(() => {
    setFormValues({
      ...formValues,
      userId: yourJobs ? user?.id : -1,
    });
  }, [yourJobs]);

  return (
    <div className="bg-white rounded-lg p-8 w-1/5 h-fit">
      <h2 className="text-xl mb-5">Filter</h2>
      <form
        className="flex flex-col items-start gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          setFormValues({
            name: "",
            description: "",
            location: {
              name: "",
              country: "",
              id: -1,
              population: 0,
            },
            categoryId: "",
            experienceId: "",
            typeId: "",
            qualificationId: "",
            genderId: "",
            userId: -1,
          });
        }}
      >
        <div className="w-full">
          <button
            type="button"
            onClick={() => {
              setYourJobs(!yourJobs);
            }}
            className={`w-full ${
              yourJobs ? "bg-white text-[#27CB8B]" : "text-white bg-[#27CB8B]"
            } font-semibold py-5 rounded-lg  border border-[#27CB8B] outline-none`}
          >
            Your Jobs
          </button>
        </div>
        <Inputs
          setFormValues={setFormValues}
          formValues={formValues}
          size={"filter"}
        />

        <button className="px-7 text-center py-4 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg border border-[#27CB8B] hover:text-[#27CB8B] hover:bg-transparent w-full">
          RESET
        </button>
      </form>
    </div>
  );
}
