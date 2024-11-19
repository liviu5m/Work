import { faClock, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Element = {
  id: number;
  name: string;
};

export default function JobCard({
  id,
  name,
  imageUrl,
  location,
  type,
  createAt,
}: {
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  type: Element;
  createAt: string;
}) {
  const formattedDate = new Date(createAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-lg px-10 py-7 border border-white hover:border hover:border-[#27CB8B] shadow-md flex items-center justify-between gap-10">
      <div className="h-full w-1/12">
        <img
          src={imageUrl}
          alt=""
          className="w-full rounded-lg h-full aspect-square border border-[#f0f0f0] bg-[#f5f7fa] p-3 object-cover"
        />
      </div>
      <div className="w-7/12">
        <h1 className="text-3xl hover:text-[#27CB8B] w-fit">
          <a href={`/job/${id}`}>{name}</a>
        </h1>
        <div className="flex items-center justify-start mt-5 gap-14">
          <div className="flex items-center justify-center gap-3 text-[#6D6E9E]">
            <FontAwesomeIcon icon={faLocation} className="w-5" />
            <p>{location}</p>
          </div>
          <div className="flex items-center justify-center gap-3 text-[#6D6E9E]">
            <FontAwesomeIcon icon={faClock} className="w-5" />
            <p>{type.name}</p>
          </div>
        </div>
      </div>
      <div className="w-2/12 flex flex-col gap-5 items-center justify-center">
        <a
          className="px-5 text-center py-3 w-40 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg border border-[#27CB8B] hover:text-[#27CB8B] hover:bg-transparent"
          href={`/job/${id}`}
        >
          Apply Now
        </a>
        <p className="italic text-[#6D6E9E]">{formattedDate}</p>
      </div>
    </div>
  );
}
