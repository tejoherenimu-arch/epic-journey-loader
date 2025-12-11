import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative cursor-pointer transition-all duration-500 ease-out",
        isExpanded ? "z-20" : "z-10"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className={cn(
          "card-ancient overflow-hidden transition-all duration-500",
          isExpanded 
            ? "scale-105 shadow-ancient-lg" 
            : "hover:scale-[1.02] hover:shadow-ancient-lg"
        )}
      >
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

          {/* Expandable content */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-500",
              isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            )}
          >
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />

            {/* Strengths */}
            <div className="mb-3">
              <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {character.strengths.map((strength, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gold/20 text-gold-dark rounded-md text-xs font-body"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="mb-3">
              <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                Weaknesses
              </h4>
              <div className="flex flex-wrap gap-2">
                {character.weaknesses.map((weakness, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-maroon/10 text-maroon-light rounded-md text-xs font-body"
                  >
                    {weakness}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-display text-sm font-semibold text-maroon mb-2 uppercase tracking-wider">
                Legend
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "{character.description}"
              </p>
            </div>
          </div>

          {/* Expand indicator */}
          <div className="mt-4 text-center">
            <span className="font-body text-xs text-gold">
              {isExpanded ? "Click to collapse" : "Click to reveal more"}
            </span>
            <div
              className={cn(
                "mx-auto mt-1 w-6 h-6 text-gold transition-transform duration-300",
                isExpanded ? "rotate-180" : ""
              )}
            >
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
  );
};

export default CharacterCard;
