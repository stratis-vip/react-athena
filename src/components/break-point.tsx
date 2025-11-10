const BreakPoint = () => {
  return (
    <div
      className="fixed top-2 right-2 p-2 rounded bg-gray-700 text-white text-xs font-mono select-none
  sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-600"
    >
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        default
      </div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        md
      </div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        lg
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        xl
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        2xl
      </div>
    </div>
  );
};

export default BreakPoint;
