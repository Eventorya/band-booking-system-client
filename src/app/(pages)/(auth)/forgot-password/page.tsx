"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ArtistBookLogo from "../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../assets/AuthCoverImage.jpg";
import QuestionMark from "../../../../assets/QuestionMark.svg";
import Image from "next/image";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <div className="lg:m-0 lg:p-0 lg:h-screen lg:overflow-hidden lg:fixed lg:w-screen">
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={ArtistBookLogo}
              className="w-[8.055rem] h-[3rem] mt-12 md:w-[15.33rem] md:h-[5.063rem] md:mt-20 lg:w-[12.313rem] lg:h-[3.058rem] lg:mt-[2.438rem] lg:ml-[2.438rem]"
              alt="Artist Book Logo"
            />

            <Image
              src={AuthCover}
              className="hidden md:hidden lg:block lg:absolute lg:opacity-20 lg:mix-blend-multiply lg:w-full"
              width={1537}
              height={1025}
              alt="Auth Cover Image"
            />
          </div>
          <div className="pt-[2.563rem] md:pt-[4.875rem] lg:flex lg:items-center lg:justify-center ">
            <div className="md:flex md:justify-center md:items-center md:w-full ">
              <div className="md:rounded-2xl sm:flex md:shadow-2xl md:overflow-hidden md:bg-white md:backdrop-blur-md md:h-[450px] md:w-[500px] md:border-2 lg:w-[700px] lg:h-[400px] lg:transform -translate-y-6">
                <div className="lg:w-[50%] lg:flex lg:items-center">
                  <Card className="border-none shadow-none bg-transparent md:w-full lg:h-auto">
                    <CardHeader className="pt-1 md:pt-[60px] lg:pt-0 lg:pb-4">
                      <CardTitle className="text-[#00654F] text-center font-[Montserrat] text-[1.563rem] font-bold md:text-[2.25rem] lg:text-[1.75rem]">
                        Forgot Password ?
                      </CardTitle>
                    </CardHeader>

                    <div className="mt-[1.625rem] justify-center items-center md:mt-0 lg:mt-2">
                      <p className="text-[#000] font-[Poppins] text-[0.688rem] font-normal text-center mx-[4.3rem] md:text-[0.875rem] md:mx-[5.85rem] lg:text-[0.75rem] lg:mx-[2.5rem] lg:leading-tight">
                        Enter your email address below and we'll send you a
                        password reset OTP
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-col gap-[1px] w-[20rem] ml-[3.125rem] mt-[1rem] md:w-[24rem] lg:w-full lg:ml-0 lg:px-[2rem] lg:mt-[2rem]">
                        <Label
                          htmlFor="email"
                          className="text-[#000] font-[Poppins] text-sm font-medium mb-2 block lg:text-xs"
                        >
                          Email
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-black/12 rounded-md h-10 text-sm bg-[#F3F3F3] font-[Poppins] lg:h-9 lg:text-xs"
                          />
                        </div>

                        <div className="w-full px-[6.25rem] mt-[2rem] sm:px-[50px] lg:px-0 lg:mt-[1.5rem]">
                          <Button
                            onClick={handleSubmit}
                            className="hidden md:block bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-[100px] text-sm font-bold font-poppins h-[46px] rounded-xl sm:w-[385px] sm:ml-[-50px] lg:w-full lg:ml-0 lg:h-[40px] lg:text-sm"
                          >
                            Send OTP
                          </Button>
                        </div>

                        <div className="md:mt-4 flex items-center gap-2 justify-center lg:mt-3">
                          <p className="text-[#000] font-[Montserrat] font-normal text-[0.625rem] text-center md:text-[0.875rem] lg:text-[0.7rem]">
                            Don't You Have an Account?
                          </p>
                          <a
                            href="#"
                            className="text-[#1877F2] font-[Montserrat] text-center text-[0.625rem] font-semibold md:text-[0.875rem] lg:text-[0.7rem]"
                          >
                            Sign Up
                          </a>
                        </div>

                        <div className="w-full px-[6.25rem] mt-[1rem] sm:px-[50px]">
                          <Button
                            onClick={handleSubmit}
                            className="md:hidden bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-[100px] text-sm font-bold font-poppins h-[46px] rounded-xl sm:w-[385px] sm:ml-[-50px]"
                          >
                            Send OTP
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="hidden lg:flex lg:w-[50%] lg:bg-white lg:items-center lg:justify-center ">
                  <Image
                    src={QuestionMark}
                    width={200}
                    height={200}
                    className="hidden lg:block w-[15.563rem] h-[18.375rem]"
                    alt="Forgot Password Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
