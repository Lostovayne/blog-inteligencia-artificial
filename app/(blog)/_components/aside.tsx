import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Aside = () => {
  return (
    <div className="space-y-4 px-5 pl-10 w-80 h-full text- shrink-0">
      <h3 className="font-bold text-left text-xl">María Jose Causil Silva</h3>

      <Image src="/perfil.jpg" alt="logo" width={150} height={80} className="rounded w-auto h-80" />

      <Button variant="link" size="lg" className="bg-pink-600 text-white">
        Contactar Conmigo
      </Button>

      <p className="font-medium text-base text-pretty">
        La inteligencia artificial es una ciencia que estudia el comportamiento de los seres humanos
        <span className="font-semibold text-pink-600"> #Python #IA #OpenAi #Developer #Tecnología</span>
      </p>

      <footer className="">
        <section className="flex justify-between">
          <div>
            <h4 className="font-semibold text-base">Ubicación</h4>
            <span className="font-medium text-sm">Colombia</span>
          </div>
          {/* <div>
            <h4 className="font-semibold text-base">Profesión</h4>
            <span className="font-medium text-sm">Developer</span>
          </div> */}
          <div>
            <h4 className="font-semibold text-base">Universidad</h4>
            <span className="font-medium text-sm">Digital de Antioquia</span>
          </div>
        </section>

        <section>
          <h2 className="mt-4 font-semibold text-base">Organización de Tareas ={">"}</h2>
          <div className="flex flex-col gap-1 mt-2">
            <Link
              className="font-semibold text-base text-pink-600 hover:underline"
              href="https://docs.google.com/document/d/1okvxDnQMbCMMRzmDgCK148-gFX74nl3j"
            >
              Búsqueda en bases de datos
            </Link>
            <Link
              className="font-semibold text-base text-pink-600 hover:underline"
              href="https://docs.google.com/document/d/1okvxDnQMbCMMRzmDgCK148-gFX74nl3j"
            >
              Búsqueda en bases de datos
            </Link>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Aside;
