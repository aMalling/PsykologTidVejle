import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div className="w-screen max-h-[600px] overflow-hidden bg-gray-400">
        <Image
          src={require("@/assets/Gruppefoto-logo.jpg")}
          alt="Gruppefoto"
          className="w-full z-10 opacity-70 "
          width={1000}
          height={600}
        />
      </div>
      <div className="z-20 mt-32 sm:mt-72 sm:w-1/2 px-3 sm:px-28 absolute">
        <div className="z-20 black text-lg pt-3 pb-5 px-5 bg-orange-200 rounded-md ">
          <p>
            Søger du en{" "}
            <span className="font-bold text-black  ">
              autoriseret psykolog{" "}
            </span>{" "}
            med{" "}
            <span className="font-bold text-black  ">kort ventetid </span> i
            Vejle?{" "}
          </p>{" "}
          Book tid til en samtale med psykolog Kamilla Nansen eller psykolog
          Thea Dahl Vemmelund og få en tid snarest.{" "}
          <p>
            <button className="bg-black text-white/80 rounded-full font-semibold  mt-1 text-medium font-mono px-5 py-2  hover:scale-110 hover:text-orange-400 transition-all">
              > Bestil tid nu
            </button>
          </p>
        </div>
      </div>
      <div className="py-10 w-screen bg-orange-100">
        <div className="px-28 py-4 flex justify-center">
          <div className=" py-3 px-4  font-serif w-1/2 rounded-md">
            <h2 className="pb-2 font-bold text-lg ">Hvad kan man tale med en psykolog om? </h2>
            <p className="pb-2">
              Det korte svar er alt. Intet er for stort eller for småt. I
              samtaleterapi hos os, har vi fokus på det, der er vigtigt for dig.
            </p>
            <p className="pb-2">
              Hvem du er, og hvad der har formet dig gennem livet har betydning
              for, hvad du vælger at gøre her og nu. En samtale handler ofte om,
              hvordan man kan bryde vaner og skabe forandring. Din identitet og
              hvem du gerne vil være er for nogen det vigtige at arbejde med i
              terapi.
            </p>
            <p>
              Du skal ikke passe ind i en kategori for at tale med en psykolog.
              Vi oplever dog alligevel, at det for mange er rart at mærke, de
              ikke er alene med det, de oplever. I kasserne nedenfor, samt under
              fanen genkender du?, kan du læse mere om nogle af de emner, vi
              ofte møder..
            </p>
          </div>
        </div>
      </div>
        <div className="px-52 py-20 flex justify-center text-white/90 bg-gray-700">
          <div className="grid grid-cols-2 font-serif ">
            <p className="pb-5 border-b-4 border-r-4  border-orange-200 p-7">
            Har du <span className="text-orange-400">angst</span>, kan det have store konsekvenser for, hvordan du lever
            dit liv. Du kan blive begrænset i at leve, som du gerne vil, og det kan føles som en fuldstændig umulig opgave at tage kontrollen tilbage, fordi alene tanken kan få et angstanfald til at skylle ind over dig.
            </p>
            <p className="border-b-4 border-orange-200 p-7">
            Ordet <span className="text-orange-400"> stress </span> bruges ofte til at beskrive almindelig travlhed. Er du én af dem som faktisk har oplevet hvad rigtig stress er, så er du ikke i tvivl. Måske har du symptomer, som vi kan arbejde forebyggende med eller måske er du allerede sygemeldt. Stress er alvorligt, og det kan være svært at skrue ned for tempoet, selvom du har en god idé om, hvad du skal skære væk.
            </p>
            <p className=" border-r-4 border-orange-200 p-7">Lever du et liv med <span className="text-orange-400"> depression</span>, der kommer og går i perioder? Oplever du for første gang en overvældende følelse af tristhed og at meningen med livet er svær at finde? Livet vil byde på dyk, men du har brug for også at mærke, at der findes en vej ud af mørket igen. Selvom det er svært at række ud, når du har det sværest, kan det være vendepunktet. Vi er klar til at tage varmt imod dig.
            </p>
            <p className="p-7">
            At få stillet en diagnose er for mange en lettelse, fordi det giver svar på spørgsmål, der har fyldt meget. For nogen medfører en diagnose dog også mange nye spørgsmål. Hvem er jeg med min diagnose? Vil det være smart at ændre på noget i min hverdag eller skal jeg bare leve som før? Har jeg fået det bedre af at få stillet min diagnose eller ej? Uanset om du har autisme, ADHD, ADD, angst eller andet, så kan det føles som om, man skal lære sig selv at kende på en ny måde. Nogen er glade for deres diagnose og andre er ikke</p>
        </div>
      </div>
      <section className="flex-row justify-center px-40 bg-orange-100 font-sans ">
      <div className="flex flex-col py-10 mt-32 gap-10 ">
        <p className="italic font-serif">
        Vi træder oftest på de stier, som vi kender allerbedst, så det at turde gå en ny vej, kan være svært, og for mange kan det slet ikke lade sig gøre at få øje på nye stier. Dem kan vi sammen finde. – Kamilla
        </p>
        <p className="italic max-w-3xl font-serif">
        Det kræver ofte tilløb og mod at starte i terapi, og jeg vil tage omsorgsfuldt imod dig. – Thea </p>
        </div>
      
      <div className="grid grid-cols-2 justify-center my-10">
          <div className="h-16 border-r-2 border-black/65"></div>
        </div>
        <div className="flex flex-row items-center max-w-5xl justify-center py-20 max">
        <Image
          src={require("@/assets/pexels-maryia-plashchynskaya-3393793.jpg")}
          alt="Gruppefoto"
          className="w-full z-10  max-h-92 object-cover"
          width={1000}
          height={600}
        />
          <div className="ml-10 ">
          <h2 className="pb-2 font-bold text-lg "> Til dig, som er ung</h2>
          <p>Som ung kan du opleve, at der er mange krav og forventninger til dig, både fra omgivelserne og fra dig selv. Det kan handle om alt fra skolearbejde, venner, kærester og forældre, til ensomhed, angst, konflikter, vrede og tristhed. Det kan være svært at navigere i på egen hånd, og det kan derfor være rart at tale med nogen om det, du står i. Mange oplever det som en god hjælp at snakke med deres venner eller en tryg voksen i deres omgangskreds, mens andre også har gavn af at tale med en psykolog i en periode. Vi tilbyder samtaler til unge, læs mere her.</p>
          </div>
        </div>
        <div className="flex flex-row items-center max-w-5xl justify-center py-24 max">
 
          <div className="mr-10">
          <h2 className="pb-2 font-bold text-lg "> Forældresparring</h2>
          <p>Vi tilbyder sparring til forældre, der ønsker at forstå og hjælpe deres børn til bedre trivsel og balance i en måske hektisk hverdag. Har dit barn en diagnose, fx autisme, ADHD, ADD eller angst, kan det påvirke hele jeres familie, og det kan være hjælpsomt at snakke med nogen om det, samt få nye perspektiver eller konkrete redskaber. Vi har flere års erfaring med dette fra PPR. Hvis du vil læse mere, kan du trykke her.</p>
          </div>
          <Image
          src={require("@/assets/pexels-kindel-media-8550841.jpg")}
          alt="Gruppefoto"
          className="w-full z-10  max-h-92 object-cover"
          width={1000}
          height={600}
        />
        
        </div>
        <div className="flex justify-center pb-10">
            <button className="bg-black text-white/80 rounded-full font-semibold mt-1 mb-24 text-xl font-mono px-8 py-4 hover:scale-110 hover:text-orange-400 transition-all">
              > Bestil tid nu
              </button>
            </div>
      </section>

      <section className="grid py-10 justify-center  text-white/90 bg-gray-700">
      <div>
      <p>Psykologtid Vejle</p>
      <p>Andkærhus</p>
      <p>Andkærvej 19</p>
      <p>7100 Vejle</p>
      <p>Telefon: 25331100</p>
      <p>Mail: psykologtidvejle@protonmail.com</p>
      </div>

      </section>



    </main>
  );
}
