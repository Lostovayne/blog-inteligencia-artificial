import { Articulos } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Video from "../../_components/video";

interface Props {
  params: { id: string };
}

const ArticuloPage = ({ params: { id } }: Props) => {
  // Logica del Articulo
  const Articulo = Articulos.filter((articulo) => articulo.id === id)[0];

  if (!Articulo) {
    redirect("/");
  }

  return (
    <main className="mx-auto mt-16 max-w-screen-md text-pretty">
      <h1 className="mx-auto font-bold text-2xl text-pink-300 xl:text-4xl">{Articulo.title}</h1>

      <span className="block text-right font-medium text-pretty text-xs xl:text-sm">
        {` Articulo publicado el ${Articulo.publishedAt}`} por María Jose Causil{" "}
      </span>

      <section className="gap-3">
        <Image
          src={Articulo.image[0]}
          alt="image"
          width={500}
          height={500}
          className="shadow mx-auto mt-10 mb-5 xl:mb-6 rounded-lg w-full xl:w-auto h-auto xl:h-96 object-contain xl:object-cover"
        />
        {Articulo.video ? <Video video={Articulo.video} /> : null}

        <p className="mx-auto font-normal text-base text-pretty xl:text-xl">{Articulo.description}</p>

        {Articulo.image[1] && (
          <Image
            src={Articulo.image[1]}
            alt="image"
            width={500}
            height={500}
            className="shadow mx-auto mt-10 mb-5 xl:mb-6 rounded-lg w-full xl:w-auto h-auto xl:h-96 object-contain xl:object-cover"
          />
        )}

        <h2 className="py-4 font-semibold text-pink-300 text-xl xl:text-4xl">{Articulo?.title2}</h2>

        <p className="mx-auto font-normal text-base text-pretty xl:text-xl">{Articulo?.description2}</p>

        {Articulo.id === "7" && (
          <div className="my-4">
            <h3 className="py-2 font-semibold text-base">Referencias</h3>
            <ul className="space-y-2">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-sm">
                  Turkle, S. (2012). En defensa de la conversación: El poder de la charla en la era
                  digital. Paidós.
                </span>
                <Link
                  className="text-pink-300"
                  href="https://www.redalyc.org/journal/5894/589466336014/589466336014.pdf"
                  target="_blank"
                >
                  Pdf del articulo
                </Link>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-sm">
                  Kelly, K. (2017). Lo inevitable: Entender las 12 fuerzas tecnológicas que configurarán
                  nuestro futuro. Taurus.
                </span>
                <Link
                  className="text-pink-300"
                  href="https://cubillos.info/lo-inevitable-kevin-kelly/"
                  target="_blank"
                >
                  Libro del cual se tomaron ideas
                </Link>
              </li>
            </ul>
          </div>
        )}

        <h2 className="py-4 font-semibold text-pink-300 text-xl xl:text-4xl">{Articulo?.title3}</h2>

        <p className="mx-auto font-normal text-base text-pretty xl:text-xl">{Articulo?.description3}</p>

        {Articulo?.image[2] && (
          <Image
            src={Articulo.image[2]}
            alt="image"
            width={500}
            height={500}
            className="shadow mx-auto mt-10 mb-5 xl:mb-6 rounded-lg w-full xl:w-96 h-80 xl:h-96 object-cover xl:object-cover"
          />
        )}
      </section>
    </main>
  );
};
export default ArticuloPage;
