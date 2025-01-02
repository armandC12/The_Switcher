import React from 'react';
import NameForm from '../components/ui/NameForm';
import logo from '../assets/logo_switcher.png';

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-zinc-950 flex flex-col items-end justify-center p-6">
      <div className="mr-20  h-1/2  w-auto flex flex-col justify-center align-middle items-center">
        <h1 className=" home-title text-5xl md:text-8xl text-white text-center">EL SWITCHER</h1>
        <img className=" h-80 w-80 mt-4 md:mt-0" src={logo} alt="Switcher Logo" />
      </div>
      
      </div>
      <div className="w-full md:w-1/2 bg-zinc-950 flex flex-col items-start justify-center p-6">
        <div className='ml-10'>
          <h1 className=" text-4xl md:text-5xl font-bold mb-8 text-white text-center"> ¡ A jugar !</h1>
          <NameForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
