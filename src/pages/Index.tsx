import { useState } from "react";
import Loader from "@/components/Loader";
import CharactersGrid from "@/components/CharactersGrid";
import DivineBook from "@/components/DivineBook";
import TabNavigation from "@/components/TabNavigation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"warriors" | "book">("warriors");

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "warriors" ? <CharactersGrid /> : <DivineBook />}
      </div>
    </>
  );
};

export default Index;
