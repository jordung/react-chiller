import chiller from "../assets/images/chiller.png";

function Navbar() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src={chiller} class="h-6 mr-1 sm:h-9" alt="Chiller Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Chiller
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-70 focus:ring-1 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 transition duration-300 hover:scale-105"
          >
            <span class="relative transition ease-in duration-150 rounded-md group-hover:opacity-70">
              Get Started
            </span>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-cyan-500 rounded md:bg-transparent md:text-cyan-500 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
