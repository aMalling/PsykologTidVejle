import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full grid grid-cols-9 py-5 text-white/90 bg-gray-700">
      <div className=" col-start-5 text-left col-span-3 ">
        <p>Psykologtid Vejle</p>
        <p>Andkærhus</p>
        <p>Andkærvej 19</p>
        <p>7100 Vejle</p>
        <p>Telefon: 25331100</p>
        <p>Mail: psykologtidvejle@protonmail.com</p>
      </div>
      <div className="col-start-8 col-span-2 mr-10">
        <Image
          src={require("@/assets/DanskPsykologForening-300x103-1.png")}
          alt="Dansk Psykolog Foreningslogo"
          className="z-20 "
          width={200}
          height={75}
        />
      </div>
    </section>
  );
}
