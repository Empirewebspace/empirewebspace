import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Communications() {
  return (
    <>
      <hr></hr>

      <section class="bg-gradient-to-bl from-violet-100 via-cyan-200 to-neutral-100">
        <div class="sm:mx-6 mx-6 lg:mx-0">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 py-10">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl  text-left md:text-center sm:text-left lg:text-center ">
                Communications & Real-Time Support
              </h2>
            </div>
            <div class="text-white">
              <div class="mx-auto max-w-4xl text-left md:text-center sm:text-left lg:text-center">
                <p class="mt-4 text-lg text-gray-800">
                  Our two{" "}
                  <span class="bg-emerald-200">
                    preferred methods of communication with clients are Email or
                    Discord
                  </span>
                  : Once you submit the Google Form, we&apos;ll send you an
                  email confirming that we have received your request for a
                  website. If you left any questions on the form, we&apos;ll
                  also answer them. We also provide real-time support through
                  messaging on our{" "}
                  <a href="https://discord.gg/J2HMe5S7Gf" target="_blank">
                    <span class="bg-emerald-200">
                      <u>Discord server</u>
                    </span>
                  </a>
                  . Join the server and start chatting with us directly!
                  <br />
                  <br />
                  Email: empirewebspace@gmail.com, Discord:{" "}
                  <a href="https://discord.gg/J2HMe5S7Gf" target="_blank">
                    <u>discord.gg/J2HMe5S7Gf</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
