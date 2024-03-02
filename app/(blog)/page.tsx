import { Articulos } from "@/data/data";
import { dataTheme } from "@/data/data.theme";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Aside from "./_components/aside";
import CardArticulo from "./_components/card-articulo";

export default function Home() {
  return (
    <div className="px-4 mt-8 max-w-screen-xl gap-16 mx-auto flex-wrap flex justify-between">
      <main className="flex-1 ">
        <h3 className="text-xl lg:text-2xl font-semibold">Últimos artículos</h3>

        <section className="my-5">
          {Articulos.map((articulo) => {
            return (
              <Link
                href={`/articulo/${articulo.id}`}
                key={articulo.id}
                className="flex items-center gap-2 mt-2 cursor-pointer  py-1 rounded shadow hover:bg-pink-500/40 transition-all  hover:scale-105 duration-500 pl-5"
              >
                <Image src={articulo.icon} alt="image" width={60} height={60} />
                <h4 className="text-base font-semibold text-pretty text-white">{articulo.title}</h4>
              </Link>
            );
          })}
        </section>

        <section className="mt-10">
          <h3 className="text-xl lg:text-2xl font-semibold">Artículos por temas</h3>

          <div className="p-5 flex items-center  w-2/3 gap-5 flex-wrap">
            {dataTheme.map((theme) => {
              return (
                <CardArticulo key={theme.title} title={theme.title}>
                  <Image
                    src={theme.src}
                    alt="image"
                    width={35}
                    height={35}
                    className={cn(
                      "w-10 h-10",
                      theme.title === "JavaScript" ? "h-8 auto object-contain" : ""
                    )}
                  />
                </CardArticulo>
              );
            })}
          </div>
        </section>
      </main>

      <Aside />
    </div>
  );
}
