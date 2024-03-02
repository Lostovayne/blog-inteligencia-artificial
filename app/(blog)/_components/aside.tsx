import { Button } from "@/components/ui/button";
import Image from "next/image";
const Aside = () => {
  return (
    <div className="w-80  shrink-0  h-full px-5 space-y-4 text- pl-10">
      <h3 className="text-xl font-bold text-left">María Jose Causil Silva</h3>

      <Image src="/perfil.jpg" alt="logo" width={150} height={80} className="h-80 rounded  w-auto" />

      <Button variant="link" size="lg" className="bg-pink-600 text-white">
        Contactar Conmigo
      </Button>

      <p className="text-pretty font-medium text-base ">
        La inteligencia artificial es una ciencia que estudia el comportamiento de los seres humanos
        <span className="font-semibold text-pink-600"> #Python #IA #OpenAi #Developer #Tecnología</span>
      </p>

      <footer className="flex justify-between pr-40">
        <div>
          <h4 className="text-base font-semibold">Ubicación</h4>
          <span className="text-sm font-medium">Colombia</span>
        </div>
        <div>
          <h4 className="text-base font-semibold">Profesión</h4>
          <span className="text-sm font-medium">Developer</span>
        </div>
      </footer>
    </div>
  );
};
export default Aside;
