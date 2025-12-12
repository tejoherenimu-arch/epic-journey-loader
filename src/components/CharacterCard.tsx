import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsFlipped(false);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFlipped(false);
    document.body.style.overflow = "auto";
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={handleCloseModal}
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-lg" />

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-3xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute -top-12 right-0 z-20 p-2 text-gold hover:text-gold-dark transition-colors bg-card/80 rounded-full"
        >
          <X size={24} />
        </button>

        {/* Flip Card Container */}
        <div className="perspective-1000">
          <div
            className={cn(
              "relative w-full cursor-pointer transition-transform duration-700",
              isFlipped ? "rotate-y-180" : ""
            )}
            style={{ transformStyle: "preserve-3d" }}
            onClick={handleFlip}
          >
            {/* Front Side - Basic Details */}
            <div
              className="w-full rounded-xl overflow-hidden shadow-2xl"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="bg-card border-2 border-gold/30">
                <div className="h-2 bg-gradient-gold" />
                
                {/* Horizontal Layout - Image Left, Details Right */}
                <div className="flex flex-col md:flex-row">
                  {/* Full Character Image */}
                  <div className="relative md:w-1/2 h-72 md:h-auto md:min-h-[420px] overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/50 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                    
                    {/* Title badge - mobile */}
                    <div className="absolute top-4 right-4 md:hidden bg-maroon/90 px-4 py-1.5 rounded-full">
                      <span className="font-display text-sm text-primary-foreground tracking-wider uppercase">
                        {character.title}
                      </span>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    {/* Title badge - desktop */}
                    <div className="hidden md:inline-block self-start bg-maroon/90 px-4 py-1.5 rounded-full mb-3">
                      <span className="font-display text-sm text-primary-foreground tracking-wider uppercase">
                        {character.title}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide">
                      {character.name}
                    </h2>
                    <p className="font-body text-xl text-gold italic mb-6">
                      {character.sanskritName}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <span className="font-display text-sm text-bronze font-semibold uppercase tracking-wider">
                          Birthplace
                        </span>
                        <p className="font-body text-foreground mt-1 text-lg">{character.birthplace}</p>
                      </div>
                      <div>
                        <span className="font-display text-sm text-bronze font-semibold uppercase tracking-wider">
                          Parents
                        </span>
                        <p className="font-body text-foreground mt-1 text-lg">
                          {character.parents.mother} & {character.parents.father}
                        </p>
                      </div>
                    </div>

                    {/* Flip instruction */}
                    <div className="text-center pt-6 mt-6 border-t border-gold/30">
                      <span className="font-body text-sm text-gold">
                        ↻ Click card to see detailed legend
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-2 bg-gradient-gold" />
              </div>
            </div>

            {/* Back Side - Detailed Info */}
            <div
              className="w-full rounded-xl overflow-hidden shadow-2xl absolute top-0 left-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="bg-card border-2 border-gold/30">
                <div className="h-2 bg-gradient-gold" />

                <div className="p-6 min-h-[480px]">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h2 className="font-display text-3xl font-bold text-foreground tracking-wide">
                      {character.name}
                    </h2>
                    <p className="font-body text-xl text-gold italic">
                      {character.sanskritName}
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>

                  {/* Strengths */}
                  <div className="mb-5">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span>⚔️</span> Strengths
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {character.strengths.map((strength, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gold/20 text-gold-dark rounded-full text-sm font-body border border-gold/30"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="mb-5">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span>⚡</span> Weaknesses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {character.weaknesses.map((weakness, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-maroon/15 text-maroon-light rounded-full text-sm font-body border border-maroon/20"
                        >
                          {weakness}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Legend/Description */}
                  <div className="mb-5">
                    <h4 className="font-display text-sm font-semibold text-maroon mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span>📜</span> Legend
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed italic border-l-2 border-gold/50 pl-4 text-base">
                      "{character.description}"
                    </p>
                  </div>

                  {/* Flip back instruction */}
                  <div className="text-center pt-4 border-t border-gold/30">
                    <span className="font-body text-sm text-gold">
                      ↻ Click to go back
                    </span>
                  </div>
                </div>

                <div className="h-2 bg-gradient-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Card in Grid */}
      <div
        className="group relative cursor-pointer transition-all duration-500 ease-out"
        onClick={handleOpenModal}
      >
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
              <span className="font-body text-xs text-gold hover:text-gold-dark transition-colors">
                Click to reveal more
              </span>
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

      {/* Render Modal in Portal */}
      {isModalOpen && createPortal(modalContent, document.body)}
    </>
  );
};

export default CharacterCard;
