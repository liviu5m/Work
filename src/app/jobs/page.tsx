"use client";

import Filter from "@/components/jobs/Filter";
import JobsList from "@/components/jobs/JobsList";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Location = {
  id: number;
  name: string;
  country: string;
  population: number;
};

type Form = {
  name?: string;
  categoryId?: string;
  experienceId?: string;
  typeId?: string;
  qualificationId?: string;
  genderId?: string;
  location: Location;
};

export default function page() {
  const [filterValues, setFilterValues] = useState<Form>({
    name: "",
    location: { name: "", country: "", id: -1, population: 0 },
  });
  return (
    <div>
      <div className="pb-36 pt-60 bg-[#F1F5F9]">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-[#00044A]">Browse Jobs</h1>
        </div>
      </div>
      <div className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto flex gap-7">
          <Filter setFormValues={setFilterValues} formValues={filterValues} />
          <JobsList filterValues={filterValues}  />
        </div>
      </div>
    </div>
  );
}
