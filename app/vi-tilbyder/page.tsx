import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function viTilbyder() {
  return (
    <div className=" bg-orange-200 ">
      <div className="prose-base flex justify-center px-6 pt-8 sm:px-32 sm:pt-24">
        <div className="prose max-w-lg">
          <h1>Vi tilbyder:</h1>
          <div className="flex flex-col gap-y-2 sm:flex-row">
            <Link href="#vi-tilbyder">
              {" "}
              <h4 className="m-1 inline cursor-pointer rounded-full p-2 transition-all hover:bg-black hover:text-orange-400">
                {" "}
                Samtaleterapi
              </h4>
            </Link>
            <span className="hidden sm:flex">- </span>
            <Link href="#vi-tilbyder">
              <h4 className="hover:bg-blacktransition-all m-1 inline cursor-pointer rounded-full p-2 transition-all hover:bg-black hover:text-orange-400">
                {" "}
                Til dig, som er ung
              </h4>
            </Link>
            <span className="hidden sm:flex">- </span>
            <Link href="#vi-tilbyder">
              <h4 className="hover:bg-blacktransition-all m-1 inline cursor-pointer rounded-full p-2 transition-all hover:bg-black hover:text-orange-400">
                Forældresparring
              </h4>
            </Link>
          </div>

          <p className="pt-2">Har dit liv taget en uventet drejning?</p>
          <p>
            Har du over tid haft oplevelsen af, at dit liv ikke udvikler sig i
            den retning, du kunne ønske?
          </p>
          <p>
            Føler du ikke, du er i kontrol over dine tanker og psykiske
            velbefindende?
          </p>
          <p>
            Psykologtid Vejle er for dig, som ønsker at arbejde med dig selv og
            få øje på de vinkler, som kan være svære at finde og udvikle på
            alene.
          </p>
          <p>
            Hos os vil du opleve en nysgerrighed på, hvad der har været din vej
            i livet og et fokus på, hvad du ønsker for dig selv fremadrettet.
          </p>
          <p>
            Et forløb hos Psykologtid Vejle tilpasses dig. For nogen er få
            samtaler det rigtige, mens andre ønsker et længerevarende forløb.
            Hos os er der ikke nogen rigtig eller forkert måde at gøre det på.
          </p>
        </div>
      </div>
      <section
        id="vi-tilbyder"
        className="prose-base flex justify-center px-6 pt-6 font-serif sm:px-32  "
      >
        <div className="prose max-w-lg ">
          <div>
            <h2>Samtaleterapi</h2>
          </div>

          <div>
            <p>
              Når du vælger samtaleterapi hos Psykologtid Vejle, vil du blive
              budt velkommen i et rum, hvor vi arbejder med det, som du tager
              op. Vi gør os umage med, at du får mulighed for at bringe de emner
              i spil, som er vigtige for dig at arbejde med og udvikle på – også
              uden for det terapeutiske rum. Det betyder, at vi vægter det højt,
              at du oplever et trygt rum, hvor du mødes i øjenhøjde og med
              respekt for dig. Når du kommer hos os første gang, vil vi sammen
              afstemme, hvad du har af håb og forventninger for dit forløb.
            </p>

            <p>
              At livet går op og ned, kan de fleste mennesker genkende fra deres
              eget liv. Der kan opstå svære perioder i ens tilværelse, som kan
              være udløst af eksempelvis et brud med en partner, sorg, en
              arbejdsrelateret hændelse, akut eller længerevarende sygdom hos
              sig selv eller en, der står dig nær. Det kan endda i nogle
              perioder være svært for nogen, at sætte en finger på, hvad der er
              årsagen til, at noget ikke føles rigtigt.
            </p>

            <p>
              At gå til psykolog handler om at blive klogere på sig selv og det,
              man er rundet af. I takt med at man lærer nyt om sig selv, vil
              mulighederne for at udvikle sig i en ønsket retning opstå. Vi
              hjælper dig gerne på vej.
            </p>

            <p>
              Et samtaleforløb kan bestå af få samtaler eller være et
              længerevarende forløb. Nogen ønsker at mødes med et kort interval
              mellem samtalerne, mens andre ønsker et længere interval. Vi tager
              hensyn til dine præferencer og laver aftaler efter, hvad du har
              brug for.
            </p>

            <p>
              Vi har tavshedspligt og værner naturligvis om det, du bringer op i
              samtalen. Intet er for stort eller for småt i en samtale hos os.
              Hvis det er vigtigt for dig, så er det vigtigt for os i terapien.
            </p>

            <p>
              Vil du gerne vide mere om, hvem vi er og hvad der kendetegner os,
              kan du læse mere i afsnittene <Link href="/kontakt">om os</Link>.
            </p>
            <p>
              Psykologtid Vejle har tid til dig. Du er velkommen til at kontakte
              os uforpligtende pr. mail eller telefon, hvis du har spørgsmål til
              et samtaleforløb hos os.
            </p>
            <p>
              Du kan kontakte os <Link href="/kontakt">her</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
