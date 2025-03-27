import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center  text-white justify-center px-8 pt-32 pb-32">
        <h1 className="ocean-view-heading text-4xl md:text-6xl font-bold mb-8 text-center">
          Welcome to Ocean View
        </h1>
        <p className="text-xl  mb-12 text-center  max-w-2xl">
          TOURIST GUEST HOUSE AND TOURS
        </p>
      </div>
    </div>
  );
}
