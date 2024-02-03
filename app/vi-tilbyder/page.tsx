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
            <Link href="#samtaleterapi">
              {" "}
              <h4 className="m-1 inline cursor-pointer rounded-full p-2 transition-all hover:bg-black hover:text-orange-400">
                {" "}
                Samtaleterapi
              </h4>
            </Link>
            <span className="hidden sm:flex">- </span>
            <Link href="#til-dig-som-er-ung">
              <h4 className="hover:bg-blacktransition-all m-1 inline cursor-pointer rounded-full p-2 transition-all hover:bg-black hover:text-orange-400">
                {" "}
                Til dig, som er ung
              </h4>
            </Link>
            <span className="hidden sm:flex">- </span>
            <Link href="#forældresparring">
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
        id="samtaleterapi"
        className="prose-base flex scroll-mt-12 justify-center px-6 pt-6 font-serif sm:px-32 "
      >
        <div className="prose max-w-lg ">
          <div>
            <h2 className="mb-0">Samtaleterapi</h2>
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
      <section
        id="til-dig-som-er-ung"
        className="prose-base flex scroll-mt-12 justify-center px-6 pt-6 font-serif sm:px-32  "
      >
        <div className="prose max-w-lg">
          <h3 className="mb-0 ">Til dig, som er ung (+18)</h3>
          <p>
            Måske oplever du også, at der er mange krav til dig, som er ung?
            Krav om at gøre det ”rigtige” med sit liv og vide, hvad man vil. Hos
            Psykologtid Vejle har vi talt med mange unge, som kan synes, det er
            svært at navigere i, hvem man selv er samtidig med, at man skal leve
            op til forventninger om uddannelse.
          </p>
          <p>
            Det kan også være, du har haft en svær opvækst og ikke kan finde ud
            af, hvad det siger om dig, og hvem du er? Eller måske har du oplevet
            noget grænseoverskridende, som har sat dybe spor?
          </p>
          <p>
            Man kan ikke ændre på sin fortid, men vi kan have fokus på, hvad du
            ønsker for dig selv i fremtiden.
          </p>
          <p>
            Vi oplever ind imellem, at spørgsmål om selvværd og selvtillid
            fylder ekstra meget i den del af livet, hvor man er ved at finde sig
            selv. Særligt hvis ens vej gennem livet ikke har været nem.
          </p>
          <p>
            Hos Psykologtid Vejle vil vi gøre, hvad vi kan, for at hjælpe dig på
            vej.
          </p>
          <h5>Særligt i forhold til unge</h5>
          <p>
            Psykologtid Vejle tilbyder terapeutiske samtaler til unge fra 18 år.
          </p>
          <p>
            Fortæller du os noget, som kan give anledning til bekymring for din
            sikkerhed, fx selvmordstanker, har vi pligt til at sørge for, du
            bliver hjulpet godt videre.
          </p>
          <p>
            Har du eller dine forældre spørgsmål til dette, må I altid gerne
            kontakte os. I finder vores kontaktoplysninger{" "}
            <a href="/kontakt">her</a>.
          </p>
        </div>
      </section>
      <section
        id="forældresparring"
        className="prose-base flex scroll-mt-12 justify-center px-6 pt-6 font-serif sm:px-32 "
      >
        <div className="prose max-w-lg">
          <h3 className="mb-0">Forældresparring</h3>
          <p>
            Alle forældre vil fra tid til anden stå i situationer med deres
            børn, som er svære at håndtere. Det er en helt almindelig del af
            forældreskabet.
          </p>
          <p>
            Forældresparring er tiltænkt jer, som oplever længerevarende
            perioder, hvor det ikke giver sig selv, hvad det næste bedste skridt
            er.
          </p>
          <p>
            Vi har erfaring med at møde forældre, som føler sig fastlåste i
            deres forældreskab og ønsker at få nogle nye greb i mødet med deres
            børn.
          </p>

          <p>
            Vi har også ofte talt med forældre, som over tid har været vidner
            til en nedadgående trivsel hos deres barn. Det skaber hurtigt en
            følelse af magtesløshed for forældrene til barnet.
          </p>

          <p>
            Det vil for mange være en naturlig handling at inddrage barnet og
            tale med barnet om, hvad det kan gøre anderledes, og hvordan man kan
            hjælpe det på vej.
          </p>

          <p>
            Hos Psykologtid Vejle har vi et andet fokus. Vi har erfaret, at en
            ønsket udvikling kan ske, når voksne bliver bevidste om egne
            handlinger og foretager nødvendige justeringer i hverdagen.
          </p>

          <p>
            Hos Psykologtid Vejle har I som forældre mulighed for at booke tid
            til en forældresparring, hvor vi kan have et fælles fokus på, hvad I
            ønsker for jeres barn og familie som helhed.
          </p>

          <p>
            <span className="block font-bold text-black ">Vores erfaring</span>
            Vi har begge to flere års erfaring med rådgivning af denne karakter,
            da vi har arbejdet som psykologer på flere PPR-kontorer (Pædagogisk
            Psykologisk Rådgivning), hvor vi har været tilknyttet både skoler og
            dagtilbud.
          </p>

          <p>
            Børns udvikling og trivsel er det vigtigste omdrejningspunkt, når du
            arbejder i PPR og hele tiden med en bevidsthed om, at det ikke er
            børnene, der i udgangspunktet skal ændre på noget, men i stedet de
            voksne omkring dem, der skal arbejde med rammerne omkring barnet.
          </p>

          <p>
            Vi har stor erfaring med at sidde over for både børn, deres forældre
            og de nære voksne fra deres skole- eller dagtilbudsmiljø og byde ind
            med en nysgerrighed omkring barnets handlemuligheder.
          </p>

          <p>
            Det betyder, at forældre, som bekymrer sig omkring deres barns
            trivsel eller udvikling altid vil være velkomne til at rette
            henvendelse, så vi sammen kan vurdere, om vi kan hjælpe jer på vej.
          </p>
        </div>
      </section>
    </div>
  );
}
