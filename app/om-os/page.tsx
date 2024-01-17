import Image from "next/image";
import React from "react";

export default function OmOs() {
  return (
    <div className="bg-orange-200 px-32 pt-24">
      <h2 className="text-center pb-2 font-bold text-lg">Om os</h2>
      <div className="grid grid-cols-2">
        <div className="mx-20">
          <Image
            src={require("@/assets/Camilla-Porstraet-1024x1536.jpg")}
            placeholder="blur"
            alt="Portraet Camilla"
            width={300}
            height={450}
            className="rounded-b-full rounded-tl-full"
          ></Image>
        </div>
        <div className=" bg-orange-200 flex flex-col justify-center">
          <section>
            <h3>Kamilla Nansen</h3>
          </section>
          <p>
            Jeg er uddannet psykolog ved Københavns Universitet i 2015 og havde
            under min studietid et særligt fokus på arbejdsmiljø og herunder
            mobning og stress. Jeg er autoriseret af Psykolognævnet.
          </p>
          <p>
            Som et led i at være ansat hos Kolding Kommunes PPR-kontor
            (Pædagogisk Psykologisk Rådgivning) har jeg på de forskellige
            ungdomsuddannelser i Kolding Kommune varetaget samtaleforløb med
            unge studerende.
          </p>{" "}
          <p>Jeg har erfaring med at varetage forløb, der omhandler: </p>
          <ol>
            <li>Misbrug</li>
            <li>Angst</li>
            <li>Stress</li>
            <li>Depression</li>
            <li>Sorg</li>
            <li>Spørgsmål vedrørende identitet</li>
          </ol>
          <p>
            Hos mig vil du opleve, at det er hvad du har brug for, der er det
            vigtige.
          </p>{" "}
          <p>
            En udvikling kan først finde sted, når du oplever, at være tilpas
            med at tage de emner op, du har brug for at arbejde med.
          </p>{" "}
          <p>
            Derfor er det vigtigt, at vi sammen sporer os ind på, hvad du har
            brug for i et tempo, der er rart for dig.
          </p>{" "}
          <p>
            Jeg ser det som min fornemmeste opgave, at vi sammen får fundet frem
            til nogle nye vinkler, som kan åbne op for nye muligheder for dig.
          </p>{" "}
          <p>
            Det vil ofte være i det levede liv, at vi finder svarene på hvorfor,
            vi kan synes noget er svært at håndtere lige nu og her. Vi træder
            oftest på de stier, som vi kender allerbedst, så det at turde gå en
            ny vej, kan være svært, og for mange kan det slet ikke lade sig gøre
            at få øje på nye stier. Dem kan vi sammen finde.
          </p>{" "}
          <p>Kontakt Kamilla</p>
          <p>Telefon til praksis: 25331100 </p>
          <p>Direkte e-mail: kamilla@psykologtidvejle.dk</p>
        </div>

        <div className="pt-24">
          <h3>Thea Dahl Vemmelund </h3>
          <p>
            Jeg er uddannet psykolog fra Aarhus Universitet i 2017 og
            autoriseret af Psykolognævnet i 2021
          </p>
          <p>
            {" "}
            I mit arbejde som psykolog lægger jeg stor vægt på at møde dig åbent
            og respektfuldt. Jeg vil altid bestræbe mig på at skabe et trygt og
            roligt rum med plads og tid til at udforske det, der fylder hos dig.
            Det kan være både små og store ting, som du ønsker at forstå bedre
            eller ændre på i dit liv. Alle mennesker oplever kriser og svære
            perioder i løbet af livet, hvor det kan være rart at tale med nogen.
            Det kan også være, du oplever at være fastlåst i bestemte mønstre.
            Det kræver ofte tilløb og mod at starte i terapi, og jeg vil tage
            omsorgsfuldt imod dig.
          </p>
          <p>
            {" "}
            Jeg er optaget af sammenhængen mellem krop, følelser og tanker, samt
            de fortællinger og overbevisninger, vi bærer med os. Jeg anvender
            elementer fra blandt andet narrative og kognitive tilgange. Mit mål
            er, at du oplever en positiv forandring i din hverdag, hvorfor
            metoderne naturligvis tilpasses lige netop det, du står i. Jeg
            beskæftiger mig blandt andet med stress, angst, depression, lavt
            selvværd og relationer.
          </p>
          <p>
            Jeg har tidligere arbejdet med børn, unge og familier i kommunalt
            regi (Pædagogisk Psykologisk Rådgivning), samt varetaget supervision
            og sparring med personale og ledelse på skoler og i dagtilbud. Under
            min studietid har jeg desuden haft tilknytning til psykiatrien,
            herunder Klinik for OCD og Angstlidelser.{" "}
          </p>
          <p>Kontakt Thea</p>
          <p>Telefon til praksis: 25331100</p>
          <p>Direkte e-mail: thea@psykologtidvejle.dk</p>
        </div>
        <div className="mx-20">
          <Image
            src={require("@/assets/Thea-Portraet-1024x1536.jpg")}
            placeholder="blur"
            alt="Portraet Camilla"
            width={300}
            height={450}
            className="mt-24 rounded-b-full rounded-tr-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}
