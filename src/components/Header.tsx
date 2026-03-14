/*********************
 * File: Header.tsx
 * Description: Header component
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
