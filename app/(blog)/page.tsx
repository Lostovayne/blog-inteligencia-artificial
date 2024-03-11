import { Articulos, ArticulosData } from "@/data/data";
import { dataTheme } from "@/data/data.theme";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Aside from "./_components/aside";
import CardArticulo from "./_components/card-articulo";

export default function Home() {
  const ArticulosAsc: ArticulosData[] = Articulos.sort(
    (a: ArticulosData, b: ArticulosData) => Number(b.id) - Number(a.id)
  );

  return (
    <div className="flex flex-wrap justify-between gap-16 mx-auto mt-8 px-4 max-w-screen-xl">
      <main className="flex-1">
        <h3 className="font-semibold text-xl lg:text-2xl">Últimos artículos</h3>

        <section className="my-5">
          {/* ordenar de manera ascendente */}
          {ArticulosAsc.map((articulo) => {
            return (
              <Link
                href={`/articulo/${articulo.id}`}
                key={articulo.id}
                className="flex items-center gap-2 hover:bg-pink-500/40 shadow mt-2 py-1 pl-5 rounded transition-all cursor-pointer hover:scale-105 duration-500"
              >
                <Image src={articulo.icon} alt="image" width={60} height={60} />
                <h4 className="font-semibold text-base text-pretty text-white">{articulo.title}</h4>
              </Link>
            );
          })}
        </section>

        <section className="mt-10">
          <h3 className="font-semibold text-xl lg:text-2xl">Artículos por temas</h3>

          <div className="flex flex-wrap items-center gap-5 p-5 w-2/3">
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
