"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type Form = {
  name?: string;
  description?: string;
  categoryId?: string;
  experienceId?: string;
  typeId?: string;
  qualificationId?: string;
  genderId?: string;
  location: Location;
  benefits: string;
};

type Location = {
  id: number;
  name: string;
  country: string;
  population: number;
};

type Element = {
  id: number;
  name: string;
  description: string;
};

export default function Inputs({
  setFormValues,
  formValues,
  size,
}: {
  setFormValues: React.Dispatch<React.SetStateAction<Form>>;
  formValues: Form;
  size?: string;
}) {
  const [locations, setLocations] = useState<Location[]>();
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [categories, setCategories] = useState<Element[]>();
  const [experiences, setExperiences] = useState<Element[]>();
  const [types, setTypes] = useState<Element[]>();
  const [qualifications, setQualifications] = useState<Element[]>();
  const [genders, setGenders] = useState<Element[]>();

  const changeLocation = (e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = (e.target as HTMLInputElement).value;
    setFormValues({
      ...formValues,
      location: { name: searchValue, country: "", id: -1, population: 0 },
    });
    axios
      .get("/api/city", {
        params: {
          search: searchValue,
        },
      })
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("/api/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/experience")
      .then((res) => {
        setExperiences(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/type")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/qualification")
      .then((res) => {
        setQualifications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/gender")
      .then((res) => {
        setGenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={`${
        size == "filter" ? "w-full" : "w-1/2"
      } flex items-center justify-center gap-5 flex-col`}
    >
      <input
        type="text"
        placeholder="Job Name"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5`}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            name: (e.target as HTMLInputElement).value,
          });
        }}
        value={formValues.name}
      />

      <div>
        <input
          type="text"
          placeholder="Job Location"
          className={`border border-[#d4d8db] ${
            size == "filter" ? "w-full" : "w-[500px]"
          }  outline-none px-10  py-5`}
          onChange={(e) => changeLocation(e)}
          onFocus={() => setIsLocationFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsLocationFocused(false);
            }, 200);
          }}
          value={`${formValues?.location.name ? formValues.location.name : ""}${
            formValues?.location.country ? ", " : ""
          }${formValues?.location.country ? formValues.location.country : ""}`}
        />
        <div>
          {isLocationFocused &&
            locations != undefined &&
            locations.map((location) => {
              return (
                <div
                  key={location.id}
                  className="text-lg w-full px-10 cursor-pointer py-5 border border-[#d4d8db] font-medium text-[#6D6E9E]"
                  onClick={(e) => {
                    setFormValues({
                      ...formValues,
                      location,
                    });
                  }}
                >
                  {location.name}, {location.country}
                </div>
              );
            })}
        </div>
      </div>
      <select
        name="category"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5 bg-white`}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            categoryId: (e.target as HTMLSelectElement).value,
          });
        }}
        value={formValues.categoryId}
      >
        <option value="" selected={true} disabled={true} className="">
          Job Category
        </option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
      <select
        name="experience"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5 bg-white`}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            experienceId: (e.target as HTMLSelectElement).value,
          });
        }}
        value={formValues.experienceId}
      >
        <option value="" selected={true} disabled={true} className="">
          Job Experience
        </option>
        {experiences &&
          experiences.map((experience) => {
            return (
              <option key={experience.id} value={experience.id}>
                {experience.name}
              </option>
            );
          })}
      </select>
      <select
        name="type"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5 bg-white`}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            typeId: (e.target as HTMLSelectElement).value,
          });
        }}
        value={formValues.typeId}
      >
        <option value="" selected={true} disabled={true} className="">
          Job Types
        </option>
        {types &&
          types.map((type) => {
            return (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            );
          })}
      </select>
      <select
        onChange={(e) => {
          setFormValues({
            ...formValues,
            qualificationId: (e.target as HTMLSelectElement).value,
          });
        }}
        name="qualification"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5 bg-white`}
        value={formValues.qualificationId}
      >
        <option value="" selected={true} disabled={true} className="">
          Job Qualification
        </option>
        {qualifications &&
          qualifications.map((qualification) => {
            return (
              <option key={qualification.id} value={qualification.id}>
                {qualification.name}
              </option>
            );
          })}
      </select>
      <select
        onChange={(e) => {
          setFormValues({
            ...formValues,
            genderId: (e.target as HTMLSelectElement).value,
          });
        }}
        name="gender"
        className={`border border-[#d4d8db] ${
          size == "filter" ? "w-full" : "w-[500px]"
        }  outline-none px-10  py-5 bg-white`}
        value={formValues.genderId}
      >
        <option value="" selected={true} disabled={true} className="">
          Job Gender
        </option>
        {genders &&
          genders.map((gender) => {
            return (
              <option key={gender.id} value={gender.id}>
                {gender.name}
              </option>
            );
          })}
      </select>
      {size != "filter" && (
        <textarea
          name="description"
          placeholder="Job Description"
          className={`border border-[#d4d8db] ${
            size == "filter" ? "w-full" : "w-[500px]"
          }  outline-none px-10  py-5 h-[200px] resize-none`}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              description: (e.target as HTMLTextAreaElement).value,
            });
          }}
          value={formValues.description}
        ></textarea>
      )}
    </div>
  );
}
