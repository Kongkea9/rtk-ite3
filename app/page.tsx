import { Countercomponent } from "@/components/counter";
import NavbarCounter from "@/components/navbar-counter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black gap-16">
      <NavbarCounter />
      {/* <Countercomponent /> */}
    </div>
  );
}
