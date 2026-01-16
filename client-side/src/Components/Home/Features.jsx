import React, { useState } from "react";
import { Zap } from "lucide-react";
import Title from "./Title.jsx";

const Features = () => {
  const features = [
    {
      title: "Real-Time Analytics",
      description:
        "Get instant insights into your finances with live dashboards.",
      iconColor: "violet",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
            stroke="#7F22FE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, 2FA, compliance with GDPR standards.",
      iconColor: "green",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.832 22.75C6.415 21 6.999 17.5 6.999 14a7 7 0 0 1 .396-2.333m2.695 13.999c.245-.77.525-1.54.665-2.333m-.255-15.4A7 7 0 0 1 21 14v2.333"
            stroke="#00A63E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Reports",
      description:
        "Export professional, audit-ready financial reports for tax or internal review.",
      iconColor: "orange",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667"
            stroke="#F54900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5"
            stroke="#F54900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex justify-center mt-4">
        <div className="inline-flex items-center gap-2 text-sm text-violet-800 bg-indigo-400/10 border border-indigo-200 rounded-full px-4 py-1 w-max    ">
          <Zap width={14} />
          <span>Simple process</span>
        </div>
      </div>
      <Title
        title="Build your resume"
        description="Our streamlined process helps you create a professional
      resume in minutes with intelligent AI-powered tools and features"
      />
      <div className="flex justify-center mt-20 px-4 md:px-0">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="flex flex-col text-center items-center justify-center rounded-xl p-6 border gap-6 max-w-sm transition-all duration-300 cursor-pointer"
              style={{
                borderColor:
                  hoverIndex === index
                    ? feature.iconColor === "violet"
                      ? "#7F22FE"
                      : feature.iconColor === "green"
                      ? "#00A63E"
                      : "#F54900"
                    : "#e5e7eb",
                backgroundColor: hoverIndex === index ? "#f0efff" : "#ffffff",
                boxShadow:
                  hoverIndex === index
                    ? "0 6px 20px rgba(0,0,0,0.2)"
                    : "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div className="p-6 aspect-square rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
