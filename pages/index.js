import { useState } from "react";
import Typical from "react-typical";
import "tailwindcss/tailwind.css";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Corpo />
    </div>
  );
}

function Navbar() {
  return (
    <div style={{ background: "#091c29" }}>
      <div className="flex items-center justify-between w-11/12 mx-auto py-3 text-white">
        <h1 className="text-2xl font-bold">Bem vindo!</h1>
        <a href="#Contato">Contato</a>
      </div>
    </div>
  );
}

function Corpo() {
  return (
    <div
      className="flex flex-grow h-full items-center justify-right text-white"
      style={{ background: "#091c29" }}
    >
      <h1 className="mx-10 text-xl">
        Olá meu nome é
        <br />
        <b>Ícaro Ibernon</b>
        <br />e eu sou um: 
      <Typical
        steps={["Desenvolvedor", 750, "Desenvolvedor Web 📄", 500,"Desenvolvedor Backend 🔧", 500, "Desenvolvedor Mobile 📱", 500]}
        loop={Infinity}
      />
      </h1>
    </div>
  );
}

export default Home;
