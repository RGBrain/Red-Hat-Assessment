/*********************
 * File: Header.tsx
 * Description: Header component for the frontend of the Red Hat Assessment project. This file holds the header section of the landing page. The header is styled using Tailwind CSS and uses the Red Hat Display font
 ********************/

"use client";

import posthog from "posthog-js";

const Header = () => {
  const handleRegisterClick = () => {
    posthog.capture("register_button_clicked", { location: "header" });
  };

  return (
    <header className="bg-red-hat-red sticky top-0 z-50 w-full py-6 text-white transition duration-750 ease-in-out">
      <div className="container mx-auto flex justify-end px-4">
        <button
          className="rounded-lg bg-white px-10 py-2 font-bold text-black"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
