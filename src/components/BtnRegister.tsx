"use client";
import React from "react";
import posthog from "posthog-js";

import { useScrollPosition } from "@thibault.sh/hooks/useScrollPosition";

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const BtnRegister = () => {
  const handleRegisterClick = () => {
    posthog.capture("register_button_clicked", { location: "header" });
  };
  const { y } = useScrollPosition();
  return (
    <button
      className="cursor-pointer rounded-lg bg-white px-10 py-2 font-bold text-black hover:scale-102"
      onClick={() => {
        handleRegisterClick();
        scrollToElement("s4");
      }}
    >
      Register
    </button>
  );
};

export default BtnRegister;
