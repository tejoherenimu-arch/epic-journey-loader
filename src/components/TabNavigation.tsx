import { Sword, BookOpen } from "lucide-react";

interface TabNavigationProps {
  activeTab: "warriors" | "book";
  onTabChange: (tab: "warriors" | "book") => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4">
          {/* Warriors Tab */}
          <button
            onClick={() => onTabChange("warriors")}
            className={`group flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === "warriors"
                ? "bg-maroon text-parchment shadow-lg shadow-maroon/30"
                : "bg-parchment/50 text-foreground hover:bg-parchment border border-gold/30"
            }`}
          >
            <Sword className={`w-5 h-5 transition-transform ${activeTab === "warriors" ? "scale-110" : "group-hover:scale-110"}`} />
            <span className="font-display text-sm md:text-base tracking-wider">Warriors</span>
            <span className="hidden md:inline font-body text-xs opacity-70">(योद्धा)</span>
          </button>

          {/* Decorative Divider */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rotate-45" />
          </div>

          {/* Divine Book Tab */}
          <button
            onClick={() => onTabChange("book")}
            className={`group flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === "book"
                ? "bg-maroon text-parchment shadow-lg shadow-maroon/30"
                : "bg-parchment/50 text-foreground hover:bg-parchment border border-gold/30"
            }`}
          >
            <BookOpen className={`w-5 h-5 transition-transform ${activeTab === "book" ? "scale-110" : "group-hover:scale-110"}`} />
            <span className="font-display text-sm md:text-base tracking-wider">Shruti & Smriti</span>
            <span className="hidden md:inline font-body text-xs opacity-70">(श्रुति & स्मृति)</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;
