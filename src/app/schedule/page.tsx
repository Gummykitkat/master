"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ScheduleForm {
  name: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

interface Scores {
  automation: number;
  analysis: number;
  integration: number;
}

function ScheduleWithParams() {
  const searchParams = useSearchParams();
  const scores = searchParams.get("scores") ? JSON.parse(searchParams.get("scores")!) : null;
  return <Schedule scores={scores} />;
}

export default function ScheduleWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScheduleWithParams />
    </Suspense>
  );
}

function Schedule({ scores }: { scores: Scores | null }) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ScheduleForm>();

  const onSubmit: SubmitHandler<ScheduleForm> = async (data) => {
    const submissionData = { ...data, scores };
    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) throw new Error("Failed to submit scheduling request");
      alert("Thank you! We’ll confirm your consultation soon.");
      router.push("/");
    } catch (error) {
      alert("There was an error submitting your request. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Schedule Your Free Consultation</h1>
        <p className="text-xl text-gray-300 mb-12">
          Let’s discuss how our AI consulting, web development, and design services can transform your business. Pick a time that works for you!
        </p>

        {scores && (
          <Card className="bg-gray-900 border-gray-800 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Assessment Summary</h2>
            <p className="text-gray-300">
              Your focus area: <span className="text-blue-500">
                {scores.automation === Math.max(scores.automation, scores.analysis, scores.integration)
                  ? "Automation"
                  : scores.analysis === Math.max(scores.automation, scores.analysis, scores.integration)
                  ? "Data Analysis"
                  : "System Integration"}
              </span>
            </p>
            <p className="text-gray-400 mt-2">We’ll tailor our consultation to your needs!</p>
          </Card>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input {...register("name", { required: "Name is required" })}
              className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Your Name" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
              className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Your Email" type="email" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Preferred Date</label>
            <input {...register("preferredDate", { required: "Date is required" })}
              className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              type="date" />
            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Preferred Time</label>
            <input {...register("preferredTime", { required: "Time is required" })}
              className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              type="time" />
            {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Additional Notes (Optional)</label>
            <textarea {...register("message")}
              className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none h-32"
              placeholder="Anything else we should know?" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
            Submit Request
          </Button>
        </form>
        <Button variant="ghost" className="mt-6 text-gray-400 hover:text-blue-500" onClick={() => router.push("/assessment")}>
          Back to Assessment
        </Button>
      </div>
    </div>
  );
}
