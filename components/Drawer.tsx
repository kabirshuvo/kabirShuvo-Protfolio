import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FaMenu, XIcon } from "react-icons/fa";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="text-white">
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <Transition.Child
              enter="transform transition ease-in-out duration-200 sm:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-200 sm:duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              className="relative w-screen max-w-md"
            >
              <div className="h-full bg-white shadow-xl">
                {/* Drawer content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">Drawer Content</h2>
                  <p>This is the content of the drawer.</p>
                  <p>You can add any components or links here.</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Drawer;
