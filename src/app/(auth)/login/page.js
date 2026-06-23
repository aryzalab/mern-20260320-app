"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PasswordInput from "@/components/PasswordInput";
import SocialLogins from "../_components/SocialLogins";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStore";
import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import { login } from "@/api/auth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useAuthStore.getState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function submitForm(data) {
    setLoading(true);

    login(data)
      .then((response) => {
        loginUser({ user: response.data });

        router.replace(HOME_ROUTE);

        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.response.data);
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-center py-10 md:py-20">
        <div className="w-full rounded-lg sm:max-w-md dark:bg-gray-900 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <SocialLogins />
            <form
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <PasswordInput id="password" {...register("password")} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href={FORGOT_PASSWORD_ROUTE}
                  className="text-sm font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="relative w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-85"
                disabled={loading}
              >
                Sign in
                {loading && (
                  <Spinner className="absolute right-3 top-2 w-6! h-6!" />
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account yet?{" "}
                <Link
                  href={REGISTER_ROUTE}
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
