import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-700 p-4 flex items-center">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-white rounded-full p-2 flex items-center justify-center h-12 w-12">
          {/* Cambia la ruta del logo según donde lo ubiques */}
          <span className="text-red-700 font-bold text-lg">C</span>
        </div>
        <span className="ml-3 text-white font-bold text-xl">CACECOB</span>
      </div>
      
      {/* Links */}
      <div className="ml-auto flex space-x-8">
        <a href="#inicio" className="text-white font-semibold hover:text-gray-200">Inicio</a>
        <a href="#cursos" className="text-gray-300 hover:text-white">Cursos</a>
        <a href="#talleres" className="text-gray-300 hover:text-white">Talleres</a>
        <a href="#nosotros" className="text-gray-300 hover:text-white">Nosotros</a>
        <a href="#examenes" className="text-gray-300 hover:text-white">Examenes</a>
      </div>
    </nav>
  );
};

export default Navbar;
