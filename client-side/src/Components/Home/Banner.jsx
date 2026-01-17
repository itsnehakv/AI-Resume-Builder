import { ArrowRight } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 md:px-14 py-2 font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 to-purple-100">
      <p>
        Build your perfect resume in minutes with AI-powered personalization.
      </p>
      <a
        href="/app"
        className="flex items-center gap-1 px-3 py-1 rounded-lg text-violet-600 bg-violet-50 hover:bg-slate-100 transition active:scale-95 ml-3"
      >
        Explore Now <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default Banner;
