import { useState } from "react";
import Typical from "react-typical";
import "tailwindcss/tailwind.css";
import Image from "next/image";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#03121c" }}
    >
      <Navbar />
      <Corpo />
    </div>
  );
}

function Navbar() {
  return (
    <div className="z-10" style={{ background: "#091c29" }}>
      <div className="flex items-center justify-between w-11/12 mx-auto py-3 text-white">
        <h1 className="text-2xl font-bold">Bem vindo!</h1>
        <a href="#Contato">Contato</a>
      </div>
    </div>
  );
}

function Corpo() {
  return (
    <div className="flex flex-grow h-full items-center justify-right text-white">
      <Image
        className="z-0"
        src="/circuit-board.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <h1 className="z-10 mx-10 text-xl">
        Olá meu nome é
        <br />
        <b>Ícaro Ibernon</b>
        <br />e eu sou um:
        {/*<Typical
          steps={["Desenvolvedor", 750, "Desenvolvedor Web 📄", 500,"Desenvolvedor Backend 🔧", 500, "Desenvolvedor Mobile 📱", 500]}
          loop={Infinity}
        />*/}
      </h1>
    </div>
  );
}

export default Home;
