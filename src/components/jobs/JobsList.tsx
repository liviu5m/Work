import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import Pagination from "../Pagination";
import { Loader } from "../Loader";

type Location = {
  id: number;
  name: string;
  country: string;
};

type Element = {
  id: number;
  name: string;
};

type Job = {
  id: number;
  name?: string;
  description?: string;
  category: Element;
  experience?: Element;
  type?: Element;
  qualification?: Element;
  gender?: Element;
  city: Location;
  userId: number;
  imageUrl?: string;
  createdAt?: string;
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

export default function JobsList({ filterValues }: { filterValues: Form }) {
  const [jobs, setJobs] = useState<Job[]>();
  const [paginatedJobs, setPaginatedJobs] = useState<Job[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    if (jobs) setPaginatedJobs(jobs.slice(startIndex, startIndex + pageSize));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/jobs", {
        params: { ...filterValues, location: filterValues.location.id },
      })
      .then((res) => {
        setJobs(res.data);
        if (res.data) setPaginatedJobs(res.data.slice(0, pageSize));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [filterValues]);

  if (loading) return <Loader />;

  

  return jobs && jobs.length > 0 && paginatedJobs ? (
    <div className="w-4/5">
      <div className="bg-white rounded-lg px-7 py-5">
        <h1 className="text-xl">Job Listing</h1>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {paginatedJobs?.map((job) => {
          return (
            <JobCard
              key={job.id}
              id={job.id}
              name={job.name || ""}
              imageUrl={job.imageUrl || ""}
              type={job.type || { name: "", id: 0 }}
              location={job.city.name + ", " + job.city.country}
              createAt={job.createdAt || ""}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <Pagination
          items={jobs.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  ) : (
    <p className="text-center text-3xl font-bold w-full">No Jobs</p>
  );
}
