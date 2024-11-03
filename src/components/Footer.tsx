import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#F1F5F9] pt-36 pb-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-start flex-col">
          <Logo />
          <p className="mt-5 text-[#6D6E9E]">
            The automated process starts as soon as
            <br />
            your clothes go into the machine. The
            <br />
            outcome is gleaming clothes.
          </p>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 bg-white">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 text-[#020DFF]"
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 bg-white">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-5 text-[#020DFF]"
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 bg-white">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-5 text-[#020DFF]"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-5">Useful links</h1>
          <h3 className="mb-3">Design & creatives</h3>
          <h3 className="mb-3">Telecommunication</h3>
          <h3 className="mb-3">Restaurant</h3>
          <h3 className="mb-3">Programing</h3>
          <h3>Architecture</h3>
        </div>
        <div>
          <h1 className="font-bold mb-5 text-lg">Subscribe Newsletter</h1>
          <p className="text-[#6D6E9E]">
            Subscribe newsletter to get updates about new jobs.
          </p>
          <div className="mt-10 flex flex-col gap-5">
            <input
              type="text"
              className="rounded-lg outline-none w-72 py-4 px-5"
              placeholder="Enter Your Email"
            />
            <button className="rounded-lg bg-[#020DFF] text-white font-bold outline-none w-72 py-4 px-5">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <p className="mt-20 text-center font-bold text-lg text-[#6D6E9E]">Copyright ©2024 All rights reserved</p>

    </div>
  );
}
