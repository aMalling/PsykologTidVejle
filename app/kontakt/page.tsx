import Image from "next/image";
import React from "react";

export default function GenkenderDu() {
  return (
    <div className="bg-orange-200 ">
      <div className="prose-base flex justify-center px-6 pb-12 pt-24 sm:px-32">
        <div className="prose max-w-lg">
          <h1>Kontakt</h1>
          <p>
            Ønsker du at komme i kontakt med os eller få en tid, er du mere end
            velkommen til at udfylde formularen ovenfor. Du vil få tilbudt en
            tid snarest muligt efter din henvendelse.
          </p>

          <p>
            Hos Psykologtid Vejle kan du ikke benytte en henvisning fra egen
            læge. Har du en henvisning, skal du kontakte en psykolog med
            ydernummer. Du kan finde en liste over psykologer med ydernummer på{" "}
            <a
              href="https://www.sundhed.dk/"
              data-type="URL"
              data-id="https://www.sundhed.dk/"
            >
              sundhed.dk
            </a>
            .
          </p>

          <p>
            Typisk vil du opleve, at der er nogle måneders ventetid på
            psykologer med ydernummer. Har du brug for at starte et forløb op
            inden da, er du velkommen til at kontakte os.
          </p>

          <p>
            Er du medlem af Sygeforsikringen ”danmark”, kan du få tilskud til
            psykologsamtaler hos os.
          </p>

          <p>
            En sundhedsforsikring (privat eller via arbejde) giver også
            sommetider tilskud til psykologsamtaler. Du kan undersøge dine
            muligheder, og hvorvidt din forsikring selv lader dig vælge din
            psykolog, da de typisk har et etableret netværk af psykologer.
          </p>

          <p>
            Du kan spørge ind til, hvor mange konsultationer din forsikring
            giver dig adgang til, og om der eventuelt er psykologiske
            problemstillinger, din forsikring ikke dækker.
          </p>

          <p>
            Inden vores første samtale skal du sende din bevilling fra dit
            forsikringsselskab til os på skrift.
          </p>

          <p>Vi ser frem til at høre fra dig.</p>
        </div>
      </div>
    </div>
  );
}
