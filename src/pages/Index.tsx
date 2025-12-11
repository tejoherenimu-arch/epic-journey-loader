import { useState } from "react";
import Loader from "@/components/Loader";
import CharactersGrid from "@/components/CharactersGrid";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <CharactersGrid />
      </div>
    </>
  );
};

export default Index;
