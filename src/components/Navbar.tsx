"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useOnClickOutside } from "@/hooks";
import { toast } from "react-toastify";
import PORTFOLIO_DATA from "@/constants";
import { useRouter } from "next/navigation";
import { addVisitor } from "@/api/firebase";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<any>();
  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);

  useOnClickOutside(ref, closeSidebar);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.PROFILE.email);
    toast.success("Copied to clipboard");
  };

  const router = useRouter();

  const saveData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source");
    await addVisitor(source);
    router.replace("/");
  };

  useEffect(() => {
    saveData();
  }, []);

  return (
    <div className="relative">
      <header className="flex justify-between items-center px-6 md:px-8 py-6 md:py-4">
        <div className="flex items-center space-x-8">
          <a href="/">
            <Image
              src={PORTFOLIO_DATA.PROFILE.logo}
              className="w-8 md:w-10"
              alt="my-logo"
            />
          </a>
          <div className="hidden md:flex items-center space-x-4">
            {PORTFOLIO_DATA.SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.id} href={item.href} target="_blank">
                  <Icon
                    fontSize="1.5rem"
                    className="text-secondary hover:text-white cursor-pointer transition-all duration-200"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {PORTFOLIO_DATA.LINKS.map((item) => (
              <a
                href={item.href}
                key={item.id}
                className="text-secondary  hover:text-white text-[1.2rem] transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div
            className="bg-[#82828A33] rounded-md px-4 py-2 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer"
            onClick={copyToClipboard}
          >
            <h6 className="text-sm">{PORTFOLIO_DATA.PROFILE.email}</h6>
          </div>
        </div>
        <BiMenu
          fontSize="2rem"
          className="text-secondary cursor-pointer block md:hidden"
          onClick={openSidebar}
        />
      </header>
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50">
          <div
            className="h-full w-64 bg-primary shadow-2xl py-8 px-6 flex flex-col justify-between"
            ref={ref}
          >
            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <a href="/">
                  <Image
                    src={PORTFOLIO_DATA.PROFILE.logo}
                    className="w-10"
                    alt="my-logo"
                  />
                </a>
                <RxCross2
                  fontSize="1.6rem"
                  className="text-secondary cursor-pointer"
                  onClick={closeSidebar}
                />
              </div>
              <div className="flex flex-col space-y-4">
                {PORTFOLIO_DATA.LINKS.map((item) => (
                  <a
                    href={item.href}
                    key={item.id}
                    className="text-secondary hover:text-white text-sm transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex justify-center space-x-2">
                {PORTFOLIO_DATA.SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.id} href={item.href} target="_blank">
                      <Icon
                        fontSize="1.5rem"
                        className="text-secondary hover:text-white cursor-pointer transition-all duration-200"
                      />
                    </a>
                  );
                })}
              </div>
              <div
                className="rounded-md px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer"
                onClick={copyToClipboard}
              >
                <h6 className="text-xs">{PORTFOLIO_DATA.PROFILE.email}</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar };
