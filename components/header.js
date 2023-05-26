import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <>
      <section className="bg-gradient-to-bl from-violet-300 via-pink-500 to-neutral-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Build & Grow Your Listener Base */}
          <h2
            className="text-center text-5xl font-bold text-white tracking-tight sm:text-6xl"
            style={{ lineHeight: "3.5rem" }}
          >
            <div className="inline-block">
              <div
                class="text-white inline-block text-5xl lg:text-7xl sm:text-5xl"
                style={{ lineHeight: "3.5rem" }}
              >
                Build Empires on the Web
              </div>
            </div>
            {/* <div class="text-orange-400 inline-block">AllegroStudio</div> */}
          </h2>
          <div className="text-center mb-0 sm:mb-0 md:mb-3 lg:mb-5 sm:mt-5 lg:mt-3 mt-5">
            <div className="text-center inline-block sm:text-xl lg:text-xl text-white tracking-tight sm:text-lg sm:mt-3 lg:mt-5">
              I&apos;ll build you a slick, blazingly-fast, mobile-friendly
              website with interactive components, brilliant design, simple CMS
              (with Google Sheets API) and the best SEO — at an affordable and
              negotiable pricing.
            </div>
          </div>
          <center>
            <Link
              class="mt-4 ml-2 inline-block text-white rounded border border-white px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="/account"
            >
              Submit Google Form
            </Link>
          </center>
        </div>
      </section>
    </>
  );
}
