'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfo } from "@/app/utils/zodSchemas";

type FormData = z.infer<typeof personalInfo>;

export default function PersonalInfo({ onNext, defaultValues }: { onNext: (data: FormData) => void; defaultValues: FormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(personalInfo),
    defaultValues
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
          Step 1: Personal Info
        </h2>

        <form onSubmit={handleSubmit(onNext)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              {...register("fullName")}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter Your Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Atleast 10 digits"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition duration-200"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}