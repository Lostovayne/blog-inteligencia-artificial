import { Articulos } from "@/data/data";
import Image from "next/image";
import { redirect } from "next/navigation";

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
    <main className="mt-16 max-w-screen-md text-pretty mx-auto ">
      <h1 className="text-2xl font-bold  mx-auto xl:text-4xl text-pink-300">{Articulo.title}</h1>

      <span className="text-sm block font-medium text-pretty text-right ">
        {` Articulo publicado el ${Articulo.publishedAt}`} por María Jose Causil{" "}
      </span>

      <section className="gap-3 ">
        <Image
          src={Articulo.image[0]}
          alt="image"
          width={500}
          height={500}
          className="mx-auto mt-10 mb-5 xl:mb-6  h-auto  w-full  xl:w-auto xl:h-96  shadow object-contain xl:object-cover rounded-lg"
        />
        <p className="text-wrap    py-0 xl:py-6 xl:px-10 font-normal text-base xl:text-xl">
          {Articulo.description}
        </p>

        <Image
          src={Articulo.image[1]}
          alt="image"
          width={500}
          height={500}
          className="mx-auto mt-10 mb-5 xl:mb-6  h-auto  w-full  xl:w-auto xl:h-96  shadow object-contain xl:object-cover rounded-lg"
        />

        <h2 className="text-xl font-semibold py-4  xl:text-4xl text-pink-300">{Articulo?.title2}</h2>

        <p className="text-pretty   mx-auto  text-base xl:text-xl  font-normal">
          {Articulo?.description2}
        </p>

        <h2 className="text-xl font-semibold py-4 xl:text-4xl text-pink-300">{Articulo?.title3}</h2>

        <p className="text-pretty  mx-auto  text-base xl:text-xl  font-normal">
          {Articulo?.description3}
        </p>

        {Articulo?.image[2] && (
          <Image
            src={Articulo.image[2]}
            alt="image"
            width={500}
            height={500}
            className="mx-auto mt-10 mb-5 xl:mb-6  h-80  w-full  xl:w-auto xl:h-96  shadow object-cover xl:object-cover rounded-lg"
          />
        )}
      </section>
    </main>
  );
};
export default ArticuloPage;
