import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ton Mobles
            </span>
          </a>
          <div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <a href="#" className="text-amber-50 mr-3" aria-current="page">
                Sillones
              </a>
              <a href="#" className="text-amber-50 mr-3">
                Sillas
              </a>
              <a href="#" className="text-amber-50 mr-3">
                Butacas
              </a>
              <a href="#" className="text-amber-50 mr-3">
                Respaldos
              </a>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
