import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold"><Link href="/home">Home</Link></h1>
    </>
  );
}
