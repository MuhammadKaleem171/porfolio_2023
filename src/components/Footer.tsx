import React from "react";
import Image from "next/image";
import PORTFOLIO_DATA from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-6 md:px-8 py-8 md:py-6 space-y-16">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={PORTFOLIO_DATA.PROFILE.logo}
          className="w-20 px-5 py-6 border border-secondary rounded-full"
          alt="my-logo"
        />
        <h6 className="font-bold text-secondary">
          {PORTFOLIO_DATA.PROFILE.name}
        </h6>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="border-2 rounded-lg border-secondary px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Built with love in Next JS
        </div>
        <h6 className="text-secondary font-bold">{`@${
          PORTFOLIO_DATA.PROFILE.username 
        }
        - ${new Date().getFullYear()}`}
        </h6>
      </div>
    </footer>
  );
};

export { Footer };
