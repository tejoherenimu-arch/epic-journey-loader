import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface Character {
  id: string;
  name: string;
  sanskritName: string;
  image: string;
  birthplace: string;
  strengths: string[];
  weaknesses: string[];
  parents: { father: string; mother: string };
  description: string;
  title: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setIsFlipped(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {/* Card in Grid */}
      <div className="group relative cursor-pointer transition-all duration-500 ease-out z-10">
        <div className="card-ancient overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-ancient-lg">
          {/* Gold accent bar */}
          <div className="h-1 bg-gradient-gold" />

          {/* Image section */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Title badge */}
            <div className="absolute top-3 right-3 bg-maroon/90 px-3 py-1 rounded-full">
              <span className="font-display text-xs text-primary-foreground tracking-wider uppercase">
                {character.title}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Name */}
            <div className="text-center mb-4">
              <h3 className="font-display text-2xl font-bold text-foreground tracking-wide">
                {character.name}
              </h3>
              <p className="font-body text-lg text-gold italic">
                {character.sanskritName}
              </p>
            </div>

            {/* Quick info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-display text-bronze font-semibold">Birthplace:</span>
                <span className="font-body text-muted-foreground">{character.birthplace}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-bronze font-semibold">Parents:</span>
                <span className="font-body text-muted-foreground">
                  {character.parents.mother} & {character.parents.father}
                </span>
              </div>
            </div>

            {/* Reveal button */}
            <div className="mt-4 text-center">
              <button
                onClick={handleOpenModal}
                className="font-body text-xs text-gold hover:text-gold-dark transition-colors"
              >
                Click to reveal more
              </button>
              <div className="mx-auto mt-1 w-6 h-6 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-gold" />
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Blurred Background */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md animate-fade-in" />

          {/* Flip Card Container */}
          <div
            className="relative w-full max-w-lg perspective-1000 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 z-10 p-2 text-gold hover:text-gold-dark transition-colors"
            >
              <X size={28} />
            </button>

            {/* Flip Card */}
            <div
              className={cn(
                "relative w-full transition-transform duration-700 transform-style-3d cursor-pointer",
                isFlipped ? "rotate-y-180" : ""
              )}
              onClick={handleFlip}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side - Basic Details */}
              <div
                className="card-ancient w-full backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="h-2 bg-gradient-gold" />
                
                {/* Hero Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-maroon/90 px-4 py-1 rounded-full inline-block mb-2">
                      <span className="font-display text-sm text-primary-foreground tracking-wider uppercase">
                        {character.title}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground tracking-wide">
                      {character.name}
                    </h2>
                    <p className="font-body text-xl text-gold italic">
                      {character.sanskritName}
                    </p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-display text-sm text-bronze font-semibold uppercase tracking-wider">
                        Birthplace
                      </span>
                      <p className="font-body text-foreground mt-1">{character.birthplace}</p>
                    </div>
                    <div>
                      <span className="font-display text-sm text-bronze font-semibold uppercase tracking-wider">
                        Parents
                      </span>
                      <p className="font-body text-foreground mt-1">
                        {character.parents.mother} & {character.parents.father}
                      </p>
                    </div>
                  </div>

                  {/* Flip instruction */}
                  <div className="text-center pt-4 border-t border-gold/20">
                    <span className="font-body text-sm text-gold animate-pulse">
                      ↻ Click to see detailed legend
                    </span>
                  </div>
                </div>

                <div className="h-2 bg-gradient-gold" />
              </div>

              {/* Back Side - Detailed Info */}
              <div
                className="card-ancient w-full absolute top-0 left-0 backface-hidden rotate-y-180"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="h-2 bg-gradient-gold" />

                <div className="p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h2 className="font-display text-2xl font-bold text-foreground tracking-wide">
                      {character.name}
                    </h2>
                    <p className="font-body text-lg text-gold italic">
                      {character.sanskritName}
                    </p>
                    <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>

                  {/* Strengths */}
                  <div className="mb-4">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                      ⚔️ Strengths
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {character.strengths.map((strength, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gold/20 text-gold-dark rounded-full text-sm font-body"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="mb-4">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                      ⚡ Weaknesses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {character.weaknesses.map((weakness, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-maroon/15 text-maroon-light rounded-full text-sm font-body"
                        >
                          {weakness}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Legend/Description */}
                  <div className="mb-4">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                      📜 Legend
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed italic border-l-2 border-gold/50 pl-4">
                      "{character.description}"
                    </p>
                  </div>

                  {/* Flip back instruction */}
                  <div className="text-center pt-4 border-t border-gold/20">
                    <span className="font-body text-sm text-gold animate-pulse">
                      ↻ Click to go back
                    </span>
                  </div>
                </div>

                <div className="h-2 bg-gradient-gold" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterCard;
