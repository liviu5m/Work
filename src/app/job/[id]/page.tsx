"use client";

import { Loader } from "@/components/Loader";
import { useAppContext } from "@/lib/AppContext";
import {
  faClock,
  faLocation,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Element = {
  name: string;
};

type Location = {
  id: number;
  name: string;
  country: string;
  population: number;
};

type Job = {
  id: number;
  name?: string;
  description?: string;
  benefits?: string;
  imageUrl?: string;
  responsibilities?: string;
  minSalary?: number;
  maxSalary?: number;
  category?: Element;
  experience?: Element;
  type?: Element;
  qualification?: Element;
  gender?: Element;
  city: Location;
  createdAt: string;
  userId: number;
};

export default function page() {
  const { user } = useAppContext();
  const [job, setJob] = useState<Job>();
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/jobs/" + id)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/request", {
        userId: user,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteJob = () => {
    if(job) axios
      .delete("/api/jobs/"+job.id)
      .then((res) => {
        console.log(res.data);
        router.push("/jobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return job ? (
    <div>
      <div className="pb-36 pt-60 bg-[#F1F5F9]">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-[#00044A]">{job.name}</h1>
        </div>
      </div>
      <div className="bg-[#fbfbfb] py-20">
        <div className="container mx-auto flex items-start justify-between gap-20">
          <div className="w-8/12">
            <div className="bg-white rounded-lg">
              <div className="border-b-2 border-[#ebebeb]">
                <div className="bg-white rounded-lg px-10 py-12 border border-white hover:border flex items-center justify-between gap-10">
                  <div className="h-full w-1/12">
                    <img
                      src={job.imageUrl}
                      alt=""
                      className="w-full rounded-lg h-full aspect-square border border-[#f0f0f0] bg-[#f5f7fa] p-3 object-cover"
                    />
                  </div>
                  <div className="w-7/12">
                    <h1 className="text-3xl w-fit flex items-center gap-10">
                      <a>{job.name}</a>
                      {job.userId == user.id && (
                        <>
                          <a
                            className="text-lg w-32 py-3 rounded-lg bg-[#1ecbf7] text-white text-center"
                            href={`/job/update/${job.id}`}
                          >
                            Update
                          </a>
                          <a
                            className="text-lg w-32 py-3 rounded-lg bg-[#f73e1e] text-white text-center cursor-pointer"
                            onClick={() => deleteJob()}
                          >
                            Delete
                          </a>
                        </>
                      )}
                    </h1>
                    <div className="flex items-center justify-start mt-7 gap-14">
                      <div className="flex items-center justify-center gap-3 text-[#6D6E9E]">
                        <FontAwesomeIcon icon={faLocation} className="w-5" />
                        <p>{job.city.name + ", " + job.city.country}</p>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-[#6D6E9E]">
                        <FontAwesomeIcon icon={faClock} className="w-5" />
                        <p>{job.type?.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/12 flex flex-col gap-5 items-center justify-center"></div>
                </div>
              </div>
              <div className="px-10 bg-white py-7">
                <h1 className="font-semibold text-xl mt-10">Job Description</h1>
                <p className="text-[#6D6E9E] py-3">{job.description}</p>
                <h1 className="font-semibold text-xl mt-10">
                  Responsibilities
                </h1>
                <ul className="text-[#6D6E9E] py-3 list-disc ml-4">
                  {job.responsibilities
                    ?.split("</responsibility/>")
                    .map((el) => {
                      return <li className="mb-2">{el}</li>;
                    })}
                </ul>
                <h1 className="font-semibold text-xl mt-10">Benefits</h1>
                <p className="text-[#6D6E9E] py-3">{job.benefits}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg px-10 py-7 mt-10">
              <h1 className="text-2xl font-bold">Apply for the job</h1>
              <form className="mt-10" onSubmit={(e) => sendEmail(e)}>
                <div className="w-full flex items-center justify-between gap-10">
                  <input
                    type="text"
                    className={`border border-[#d4d8db] outline-none rounded-lg w-1/2 px-5 py-3`}
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    className={`border border-[#d4d8db] outline-none rounded-lg w-1/2 px-5 py-3`}
                    placeholder="Email"
                  />
                </div>
                <input
                  type="text"
                  className={`border border-[#d4d8db] outline-none rounded-lg mt-7 px-5 w-full py-3`}
                  placeholder="Website/Portfolio Link"
                />
                <div
                  className={`border border-[#d4d8db] rounded-lg mt-7 px-5 w-full py-3 text-[#9ca3af]`}
                >
                  <label
                    htmlFor="file"
                    className="w-full flex gap-3 items-center"
                  >
                    <FontAwesomeIcon icon={faUpload} /> <span>Upload CV</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    placeholder="Website/Portfolio Link"
                  />
                </div>
                <textarea
                  className={`border border-[#d4d8db] outline-none rounded-lg mt-7 px-5 w-full py-3 h-40 resize-none`}
                  placeholder="Coverletter"
                ></textarea>
                <button className="rounded-lg px-10 py-5 text-center w-full text-white hover:scale-105 bg-[#27cb8b] mt-10 font-bold shadow-md hover:shadow-xl">
                  Apply now
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white w-4/12">
            <h1 className="text-3xl border-b-2 border-[#ebebeb] px-10 py-7">
              Job Summery
            </h1>
            <ul className="px-10 py-7 ml-4 list-disc">
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Published On: </span>
                <span className="text-[#00044A]">
                  {new Date(job.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Salary: </span>
                <span className="text-[#00044A]">
                  {`${job.minSalary
                    ?.toString()
                    .substring(
                      0,
                      job.minSalary.toString().length - 3
                    )}k - ${job.maxSalary
                    ?.toString()
                    .substring(0, job.maxSalary.toString().length - 3)}k/y`}
                </span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Location: </span>
                <span className="text-[#00044A]">
                  {job.city.name + ", " + job.city.country}
                </span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Category: </span>
                <span className="text-[#00044A]">{job.category?.name}</span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Experience: </span>
                <span className="text-[#00044A]">{job.experience?.name}</span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Type: </span>
                <span className="text-[#00044A]">{job.type?.name}</span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Qualification: </span>
                <span className="text-[#00044A]">
                  {job.qualification?.name}
                </span>
              </li>
              <li className="mb-2">
                <span className="text-[#6D6E9E]">Gender: </span>
                <span className="text-[#00044A]">{job.gender?.name}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
