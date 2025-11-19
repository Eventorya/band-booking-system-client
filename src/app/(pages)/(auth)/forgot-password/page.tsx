"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import ArtistBookLogo from "../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../assets/AuthCover.svg";
import Image from "next/image";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={ArtistBookLogo}
            className="w-[8.055rem] h-[3rem] mt-12 md:w-[15.33rem] md:h-[5.063rem] md:mt-20 lg:w-[12.313rem] lg:h-[3.058rem] lg:mt-[2.438rem] lg:ml-[2.438rem]"
            alt="Artist Book Logo"
          />
        </div>

        <div className="flex items-center justify-center flex-col px-4">
          <h2 className="mt-[2.5rem] text-[#00654F] text-center font-[Montserrat] text-[1.563rem] font-bold line-height-[6.063rem]">
            Forgot Password ?
          </h2>

          <div className="mt-[1.625rem] justify-center items-center">
            <p className="text-[#000] font-[Poppins] text-[0.688rem] font-medium line-height-[1.063rem] text-center ml-[4.50rem] mr-[5.063rem]">
              Enter your email address below and we'll send you a password reset
              OTP
            </p>
          </div>

          <form>
            <div className="w-full max-w-[400px] mt-4 ">
              <Label
                htmlFor="email"
                className="text-[#000] font-[Poppins] text-sm font-medium mb-2 block"
              >
                Email
              </Label>
              <div className="relative ">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pr-10 border  border-black/12 rounded-md h-10 text-sm bg-[#F3F3F3] font-[Poppins] line-height-[1.063rem] "
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm justify-center">
                <p className="text-[#000] font-[Montserrat] font-normal text-[0.625rem] text-center line-hieght-[6.063rem] ">
                  Don't You Have an Account?
                </p>
                <a
                  href="#"
                  className="text-[#1877F2] font-[Montserrat]   text-center text-[0.625rem] font-semibold line-hieght-[6.063rem] tracking-normal"
                >
                  Sign Up
                </a>
              </div>

              <div className="w-full px-[6.25rem] mt-[1rem]">
                <Button
                  type="submit"
                  className="bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-[5.813rem] text-sm font-bold font-poppins h-[2.25rem] rounded-xl "
                >
                  RESET
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
