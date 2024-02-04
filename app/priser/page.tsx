import Image from "next/image";
import React from "react";

export default function Priser() {
  return (
    <div className=" bg-orange-200 ">
      <div className="prose-base flex justify-center px-6 pt-24 sm:px-32">
        <div className="prose max-w-lg">
          <div>
            <h1>Priser</h1>
          </div>
          <div>
            <div className="my-8 flex grid-cols-3 flex-col gap-8 sm:-mx-16 sm:grid">
              <div className="grid grid-cols-1  bg-orange-300/80 p-3 text-center shadow-md">
                <p>Individuelle samtaler </p>
                <p className="mt-12 text-3xl font-bold">1050,-</p>
                <p>50 MIN.</p>
              </div>
              <div className="grid grid-cols-1  bg-orange-300/80 p-3 text-center shadow-md">
                <p>Individuelle samtaler for studerende og unge under 25 år </p>
                <p className="text-3xl font-bold sm:-mt-2">950,-</p>
                <p>50 MIN.</p>
              </div>
              <div className="grid grid-cols-1  bg-orange-300/80 p-3 text-center shadow-md">
                <p>Forældresparring</p>
                <p className="mt-12 text-3xl font-bold">1.250,-</p>
                <p>75 MIN.</p>
              </div>
            </div>
            <h2 className="mb-0">Tilskud</h2>
            <p>
              Vi kan desværre ikke modtage klienter med henvisning fra egen
              læge, men hvis du er medlem af Sygeforsikringen&nbsp;“danmark”,
              kan du få tilskud til psykologsamtaler. Unge mellem 18 og 25 år
              kan få op til 450 kr. i tilskud, andre aldersgrupper kan få op til
              300 kr. i tilskud. Vi anbefaler, at du kontakter ”danmark” for at
              høre om dine muligheder for tilskud. Vi sørger for en ugentlig
              indberetning til Sygeforsikringen “danmark”. Såfremt du ønsker
              tilskud fra ”danmark”, bedes du gøre opmærksom på det i
              forbindelse med første samtale.
            </p>

            <h2 className="mb-0">Betaling</h2>
            <p>
              Betaling foregår via MobilePay eller bankoverførsel efter hver
              samtale.
            </p>
            <h2 className="mb-0">Afbud</h2>
            <p>
              Afbud meldes i så god tid som muligt på sms eller mail, og senest
              24 timer før aftalen.{" "}
            </p>
            <p>Ved udeblivelse eller for sent afbud opkræves halv takst.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
