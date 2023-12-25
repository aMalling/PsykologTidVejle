import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-screen h-screen absolute ">
        <Image
          src={require("@/assets/Gruppefoto-logo.jpg")}
          alt="Gruppefoto"
          className="w-full z-10"
          width={1000}
          height={600}
        />
      </div>
      <div className="z-20 mt-80 w-1/2 px-28">
        <div className="z-20 black text-xl pt-3 pb-5 px-5 bg-orange-200/90 rounded-md ">
          <p>
            Søger du en{" "}
            <span className="font-bold text-black  ">
              autoriseret psykolog{" "}
            </span>{" "}
            med{" "}
            <span className="font-bold text-slate-950  ">kort ventetid </span> i
            Vejle?{" "}
          </p>{" "}
          Book tid til en samtale med psykolog Kamilla Nansen eller psykolog
          Thea Dahl Vemmelund og få en tid snarest.{" "}
          <p>
            <button className="bg-black text-white/80 rounded-full font-semibold  mt-1 text-medium font-mono px-4 py-2  hover:scale-110 hover:text-orange-400 transition-all">
              Bestil tid
            </button>
          </p>
        </div>
      </div>
      <div className="h-96 mt-[92px] w-screen  bg-orange-100">
        <div className="mx-32">
          <h2>Hvad kan man tale med en psykolog om? </h2>
          <p>
            Det korte svar er alt. Intet er for stort eller for småt. I
            samtaleterapi hos os, har vi fokus på det, der er vigtigt for dig.
          </p>
          <p>
            Hvem du er, og hvad der har formet dig gennem livet har betydning
            for, hvad du vælger at gøre her og nu. En samtale handler ofte om,
            hvordan man kan bryde vaner og skabe forandring. Din identitet og
            hvem du gerne vil være er for nogen det vigtige at arbejde med i
            terapi.
          </p>
          <p>
            Du skal ikke passe ind i en kategori for at tale med en psykolog. Vi
            oplever dog alligevel, at det for mange er rart at mærke, de ikke er
            alene med det, de oplever. I kasserne nedenfor, samt under fanen
            genkender du?, kan du læse mere om nogle af de emner, vi ofte
            møder..
          </p>
        </div>
      </div>
    </main>
  );
}
