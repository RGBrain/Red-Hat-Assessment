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
    <header className="bg-red-hat-red text-white py-6">
      <div className="container mx-auto px-4 flex justify-end">
        <button
          className="bg-white text-black font-bold py-2 px-10 rounded-lg"
          onClick={handleRegisterClick}
        >Register</button>
      </div>
    </header>
  )
}

export default Header
