import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={"/dashboard"}>
        <Button>Go To Dashboard</Button>
      </Link>
    </main>
  );
}
