import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-100">
      <div className="flex items-center justify-center min-h-screen container">
        <div className="w-full max-w-xl">
          <Button size="2xl" variant="reflective-3d">
            HELLO WORLD
          </Button>
        </div>
      </div>
    </main>
  );
}
