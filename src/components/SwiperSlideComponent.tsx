import React from "react";

export default function SwiperSlideComponent({
  img,
  text,
  desc,
}: {
  img: string;
  text: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl shadow-xl border-2 border-[#F1F5F9]">
      <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
        <img className="w-10" src={img} alt="" />
      </div>
      <a className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]">
        {text}
      </a>
      <p className="text-[#6D6E9E] mt-5">{desc}</p>
      <a
        className="btn-hover px-10 mt-5 py-3 text-[#00044A] bg-[#F1F5F9] font-bold rounded-lg"
        href="/jobs"
      >
        APPLY NOW
      </a>
    </div>
  );
}
