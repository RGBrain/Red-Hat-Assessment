/*********************
 * File: Header.tsx
 * Description: Header component for the frontend of the Red Hat Assessment project. This file holds the header section of the landing page. The header is styled using Tailwind CSS and uses the Red Hat Display font
 ********************/

import BtnRegister from "@/components/BtnRegister";

const Header = () => {
  return (
    <header className="bg-red-hat-red sticky top-0 z-50 w-full py-6 text-white transition duration-750 ease-in-out">
      <div className="container mx-auto flex justify-end px-4">
        <BtnRegister />
      </div>
    </header>
  );
};

export default Header;
