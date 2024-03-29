import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function AboutCard() {
  return (
    <>
      <header aria-label="Site Header" class="shadow-sm bg-gray-800">
        <div class="mx-auto max-w-screen-xl p-7"></div>
      </header>
      <section
        class="mx-auto lg:max-w-6xl sm:max-w-4xl md:max-w-6xl max-w-5xl px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: "'Ubuntu', sans-serif" }}
      >
        {/* 
        <div
          class="text-gray-800 lg:text-3xl sm:text-3xl text-3xl mt-8"
          style={{ lineHeight: "3.7rem" }}
        >
          Empireweb.space Team
        </div>
 */}
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-indigo-500 to-blue-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <h3 class="lg:text-3xl text-2xl  text-gray-700 sm:text-2xl">
                Bian Lee{" "}
                <span class="text-sm  text-gray-500 font-normal">
                  Lead Developer / Design / Sales
                </span>
              </h3>
            </div>

            <div class="mt-4">
              <p class="max-w-full text-md text-gray-500">
                Bian is a college freshman studying computer science and
                economics. He previously interned as an analyst at social
                finance startup Vestr.io, and this summer he&apos;ll be a data
                analyst intern at California Air Resources Board. He is the
                founder of Empireweb.space agency and is also the lead
                developer.
              </p>
            </div>
          </div>
          {/*
          <div
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-indigo-500 to-blue-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <h3 class="lg:text-3xl text-2xl  text-gray-700 sm:text-2xl">
                Andrew Kuang{" "}
                <span class="text-sm  text-gray-500 font-normal">
                  Developer / Design / Sales
                </span>
              </h3>
            </div>

            <div class="mt-4">
              <p class="max-w-full text-md text-gray-500">
                Andrew is a freshman studying Data science.{" "}
              </p>
            </div>
          </div>
           */}
          {/*
          <div
            href="#"
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            class="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-indigo-500 to-blue-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="lg:text-3xl text-2xl  text-gray-700 sm:text-2xl">
                  Ritvik Irigireddy{" "}
                  <span class="text-sm  text-gray-500 font-normal">
                    Developer / Sales
                  </span>
                </h3>
              </div>
            </div>
            <div class="mt-4">
              <p class="max-w-full text-md text-gray-500">
                Ritvik is a full-time student and developer. He is an alumni of
                LaunchX program, and he has also done research at UCSD. He is
                proficient in full-stack development.
              </p>
            </div>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
