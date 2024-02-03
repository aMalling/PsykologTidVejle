import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Praktisk() {
  return (
    <div className=" bg-orange-200 ">
      <div className="prose-base flex justify-center px-6 pt-24 sm:px-32 ">
        <div className="prose max-w-lg">
          <h1>Praktisk</h1>
          <Image
            src={require("@/assets/Kort-Andkaerhus-1.jpg")}
            placeholder="blur"
            alt="Portraet Camilla"
            width={600}
            className="shadow-lgs border"
          ></Image>
          <h2 className="mb-0">Her finder du os</h2>
          <p>
            Psykologtid Vejle har lokaler i Andkærhus, som ligger tæt på
            motorvej E45 afkørsel Vejle C.
          </p>
          <p>
            Du kan se Andkærhus’ hjemmeside{" "}
            <Link
              href="https://andkaerhus.dk/"
              data-type="URL"
              data-id="https://andkaerhus.dk/"
            >
              her
            </Link>
            , hvis du gerne vil have et indtryk af stedet før dit første besøg.
          </p>

          <p>
            Psykologtid Vejle har lokaler lige inden for døren til højre. Du vil
            kunne se vores logo på døren ind til venteområdet, hvor du kan tage
            plads.
          </p>

          <h2 className="mb-0">Parkering</h2>

          <p>Der er gratis parkering lige ud for indgangen.</p>

          <h2 className="mb-0">offentlig transport</h2>

          <p>
            Fra Banegårdspladsen i Vejle Centrum kan du tage bus til Andkærhus.
          </p>

          <p>
            Undersøg den bedste løsning for dig på Rejseplanens hjemmeside. Der
            forefindes et busstoppested 100 m. fra Andkærhus, men også andre
            stop findes i gåafstand fra adressen.
          </p>

          <h2 className="mb-0">For gangbesværede</h2>

          <p className="mb-8">Der er god adgang for gangbesværede. </p>
        </div>
      </div>
    </div>
  );
}
