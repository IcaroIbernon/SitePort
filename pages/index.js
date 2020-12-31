import { useState } from "react";
import Typical from "react-typical";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Stack from "./stack";
import Contato from "./contato";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#03121c" }}
    >
      <title>Ícaro Ibernon - Portfólio</title>
      <Navbar />
      <Corpo />
    </div>
  );
}

function Navbar() {
  return (
    <div className="z-10 w-min-screen" style={{ background: "#091c29" }}>
      <div className="flex items-center justify-between w-11/12 mx-auto py-3 text-white">
        <h1 className="text-2xl font-bold">Bem vindo!</h1>
        <Contato />
      </div>
    </div>
  );
}

function Corpo() {
  return (
    <div className="flex flex-grow flex-col md:flex-row h-full w-min-screen md:items-center justify-right text-white">
      <Image
        className="z-0"
        src="/Cb.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <h1 className="z-10 mt-10 md:mt-0 mx-10 items-center text-md sm:h-1/2 sm:w-full md:text-2xl md:w-1/2">
        Olá meu nome é
        <br />
        <b>Ícaro Ibernon</b>
        <br />e eu sou um:
        <Typical
          steps={["Desenvolvedor", 750, "Desenvolvedor Web 📄", 500,"Desenvolvedor Backend 🔧", 500, "Desenvolvedor Mobile 📱", 500]}
          loop={Infinity}
        />
      </h1>
      <Stack />
    </div>
  );
}

export default Home;
