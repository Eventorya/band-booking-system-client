"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

// Import your assets (same as in SignUp)
import ArtistBookLogo from "../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../assets/AuthCoverImage.jpg";
import QuestionMark from "../../../../assets/QuestionMark.svg";

export default function ForgotPassword() {
  return (
    <div className="relative bg-white overflow-hidden h-screen">
      {/* Background blurred image */}
      <Image
        src={AuthCover}
        className="w-[1537px] h-[1024.79px] left-0 top-[-0.90px] absolute opacity-20 mix-blend-multiply "
        width={1537}
        height={1025}
        alt="Background"
      />

      {/* Logo */}
      <Image
        src={ArtistBookLogo}
        className="w-[200px] h-[100px] mt-2 ml-20 relative z-10"
        alt="Artist Book Logo"
      />

      {/* Main Centered Card */}
      <div className="flex justify-center items-center h-[calc(100vh-104px)] w-full">
        <div className="rounded-2xl flex w-[800px] shadow-2xl overflow-hidden h-[400px]">
          {/* Left Side - Form */}
          <div className="w-[50%]">
            <Card className="bg-white backdrop-blur-md shadow-2xl rounded-none h-[400px] border-0">
              <CardHeader className="pt-8 pb-2">
                <CardTitle className="text-center text-emerald-800 text-4xl font-bold font-['Montserrat'] mb-4">
                  Forgot Password ?
                </CardTitle>
                <p className="text-center text-gray-600 text-sm font-poppins">
                  Enter your email address below and we'll send <br /> you a
                  password reset OTP
                </p>
              </CardHeader>

              <CardContent className="px-10 mt-4">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="email"
                      className="text-black text-base font-normal font-poppins"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Type your email"
                      required
                      className="bg-zinc-100 text-stone-500 text-xs font-normal font-poppins h-12"
                    />
                  </div>
                </div>
              </CardContent>

              <div className="px-10 mt-1">
                <Button className="w-full h-12 text-base font-semibold bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out">
                  Send OTP
                </Button>

                <p className="text-center mt-4 text-sm font-poppins">
                  Don't you have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 underline underline-offset-4"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </Card>
          </div>

          {/* Right Side - Big Question Mark */}
          <div className="w-[50%] bg-white backdrop-blur-md flex items-center justify-center">
            <Image
              src={QuestionMark}
              width={250}
              height={250}
              className="object-cover"
              alt="Forgot Password Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}