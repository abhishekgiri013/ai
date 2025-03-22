

const Navbar = () => {
  return (
    <nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-amber-300 text-black py-4 px-8 flex justify-between items-center z-50"
    >
      
      <div className="flex gap-4">
        {[ "Contact","About", "Projects","Hire"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
