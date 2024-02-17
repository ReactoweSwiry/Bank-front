import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold"><Link href="/home">Home</Link></h1>

    </>
  );
}
