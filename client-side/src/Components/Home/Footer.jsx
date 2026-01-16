import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-black-300 mt-30 bg-gradient-to-r from-white via-violet-400/60 ">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <img alt="logo" class="h-11 w-auto" src="/logo.svg" />
          <p className="mt-6 text-sm">
            Trusted by thousands of job seekers, our AI-powered resume builder
            helps you create professional, interview-ready resumes in minutes.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://prebuiltui.com">Resume Builder</a>.
      </p>
    </footer>
  );
};
export default Footer;
