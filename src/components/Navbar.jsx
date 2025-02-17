import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-violet-500 p-4 flex items-center shadow-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"
        alt="Profile"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="text-white text-lg font-semibold flex flex-col">
        Hello, welcome !
        <div className="name ">
            <h1>Krishna Chauhan</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
