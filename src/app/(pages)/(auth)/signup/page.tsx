import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ArtistBookLogo from "../../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../../assets/AuthCoverImage.jpg";
import SignupImage from "../../../../../assets/SignupImage.jpg";
import Google from "../../../../../assets/Google.svg";
import Facebook from "../../../../../assets/Facebook.svg"
import Apple from "../../../../../assets/Apple.svg"
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="relative bg-white overflow-hidden">
      <Image
        src={AuthCover}
        className="w-[1537px] h-[1024.79px] left-0 top-[-0.90px] absolute opacity-20 mix-blend-multiply"
        width={1537}
        height={1025}
        alt="Auth Cover Image"
      />
      <Image
        src={ArtistBookLogo}
        className="w-[200px] h-[100px] mt-2 ml-20 relative"
        alt="Auth Cover Image"
      />

      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="rounded-2xl flex w-[1000px] shadow-2xl overflow-hidden mb-20 h-[650px]">
          <div className="w-[50%]">
            <Card className=" bg-white backdrop-blur-md shadow-2xl rounded-none h-[650px]">
              <CardHeader>
                <CardTitle className="text-center justify-center text-emerald-800 text-4xl font-bold font-['Montserrat'] mt-4">SIGN UP</CardTitle>
              </CardHeader>
              <CardContent className="ml-10 mr-10">
                <form >
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="username"
                        placeholder="Enter your username"
                        required
                        className="bg-zinc-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="bg-zinc-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your Password"
                        required
                        className="bg-zinc-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="confirm-password"
                        placeholder="Enter your password"
                        required
                        className="bg-zinc-100"
                      />
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-5 ml-10 mr-10">
                <Button type="submit" className="bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-full">
                  SIGNUP
                </Button>
                <div className="flex gap-6">
                  <div className="bg-white rounded-full border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-3 py-2">
                    <Image src={Google} alt="Google" />
                  </div>
                  <div className="bg-white rounded-full border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-3 py-2">
                    <Image src={Facebook} alt="Google" />
                  </div>
                  <div className="bg-white rounded-full border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-3 py-2">
                    <Image src={Apple} alt="Google" />
                  </div>
                </div>
                <p className="text-center font-semibold">
                  Already have an account?{" "}
                  <Link href="/signup" className="underline underline-offset-4 text-blue-600">
                    Sign in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-[50%]">
            <Image
              src={SignupImage}
              className="w-[500px] h-[650px] object-cover"
              alt="Signup Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
