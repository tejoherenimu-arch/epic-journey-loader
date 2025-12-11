import CharacterCard, { Character } from "./CharacterCard";

// Import character images
import arjunaImg from "@/assets/arjuna.png";
import karnaImg from "@/assets/karna.png";
import bhishmaImg from "@/assets/bhishma.png";
import dronaImg from "@/assets/drona.png";
import krishnaImg from "@/assets/krishna.png";
import duryodhanaImg from "@/assets/duryodhana.png";
import yudhishthiraImg from "@/assets/yudhishthira.png";
import bhimaImg from "@/assets/bhima.png";
import nakulaImg from "@/assets/nakula.png";
import sahadevaImg from "@/assets/sahadeva.png";
import abhimanyuImg from "@/assets/abhimanyu.png";
import ashwatthamaImg from "@/assets/ashwatthama.png";
import ghatotkachaImg from "@/assets/ghatotkacha.png";
import dushasanaImg from "@/assets/dushasana.png";
import shakuniImg from "@/assets/shakuni.png";
import satyakiImg from "@/assets/satyaki.png";

const characters: Character[] = [
  {
    id: "arjuna",
    name: "Arjuna",
    sanskritName: "अर्जुन",
    image: arjunaImg,
    birthplace: "Hastinapura",
    strengths: ["Supreme Archery", "Unwavering Focus", "Divine Weapons", "Ambidextrous"],
    weaknesses: ["Overthinking", "Pride in Skills", "Emotional Vulnerability"],
    parents: { father: "Indra (Divine)", mother: "Kunti" },
    description: "The greatest archer of his time, third among the Pandavas, and the chosen recipient of Lord Krishna's divine wisdom in the Bhagavad Gita. His name means 'bright' or 'shining'.",
    title: "The Archer",
  },
  {
    id: "karna",
    name: "Karna",
    sanskritName: "कर्ण",
    image: karnaImg,
    birthplace: "Anga (Raised)",
    strengths: ["Divine Armor", "Unmatched Charity", "Loyalty", "Archery Mastery"],
    weaknesses: ["Bound by Gratitude", "Cursed by Fate", "Abandoned Heritage"],
    parents: { father: "Surya (Sun God)", mother: "Kunti" },
    description: "The tragic hero born with divine armor (Kavach-Kundal), abandoned at birth, yet rose to become one of the greatest warriors. His loyalty to Duryodhana defined his destiny.",
    title: "The Generous",
  },
  {
    id: "bhishma",
    name: "Bhishma",
    sanskritName: "भीष्म",
    image: bhishmaImg,
    birthplace: "River Ganga",
    strengths: ["Iccha Mrityu", "Brahmacharya", "Supreme Warrior", "Wisdom"],
    weaknesses: ["Bound by Vows", "Unable to Act Against Dharma", "Silence in Injustice"],
    parents: { father: "King Shantanu", mother: "Goddess Ganga" },
    description: "The grand patriarch who took the terrible vow of celibacy for his father's happiness. Blessed with the power to choose his own death, he remained invincible until he chose to fall.",
    title: "The Patriarch",
  },
  {
    id: "drona",
    name: "Dronacharya",
    sanskritName: "द्रोणाचार्य",
    image: dronaImg,
    birthplace: "Ashram of Bharadwaja",
    strengths: ["Supreme Teacher", "Brahmastra Knowledge", "Strategic Mind", "Archery"],
    weaknesses: ["Attachment to Son", "Discrimination", "Pride"],
    parents: { father: "Sage Bharadwaja", mother: "Divine Birth" },
    description: "The royal guru who trained both Pandavas and Kauravas in the art of warfare. His partiality towards his son Ashwatthama led to questionable decisions during the great war.",
    title: "The Guru",
  },
  {
    id: "krishna",
    name: "Krishna",
    sanskritName: "कृष्ण",
    image: krishnaImg,
    birthplace: "Mathura",
    strengths: ["Divine Wisdom", "Supreme Strategy", "Omniscience", "Charisma"],
    weaknesses: ["Bound by Promise", "Non-Combatant Role"],
    parents: { father: "Vasudeva", mother: "Devaki" },
    description: "The divine charioteer and supreme strategist who guided Arjuna through the war. His teachings in the Bhagavad Gita remain humanity's greatest philosophical treasure.",
    title: "The Divine",
  },
  {
    id: "duryodhana",
    name: "Duryodhana",
    sanskritName: "दुर्योधन",
    image: duryodhanaImg,
    birthplace: "Hastinapura",
    strengths: ["Mace Fighting", "Leadership", "Determination", "Loyalty to Friends"],
    weaknesses: ["Jealousy", "Pride", "Blind Ambition", "Hatred"],
    parents: { father: "Dhritarashtra", mother: "Gandhari" },
    description: "The eldest Kaurava prince whose jealousy of the Pandavas ignited the great war. Despite his flaws, he was a formidable warrior and a loyal friend to Karna.",
    title: "The Crown Prince",
  },
  {
    id: "yudhishthira",
    name: "Yudhishthira",
    sanskritName: "युधिष्ठिर",
    image: yudhishthiraImg,
    birthplace: "Hastinapura",
    strengths: ["Dharma (Righteousness)", "Truthfulness", "Wisdom", "Spear Combat"],
    weaknesses: ["Gambling Addiction", "Over-reliance on Dharma", "Indecisiveness"],
    parents: { father: "Yama (Dharmaraja)", mother: "Kunti" },
    description: "The eldest Pandava and embodiment of Dharma. Known as Dharmaraja, his adherence to truth was legendary, yet his weakness for gambling led to the exile of his brothers.",
    title: "The Righteous King",
  },
  {
    id: "bhima",
    name: "Bhima",
    sanskritName: "भीम",
    image: bhimaImg,
    birthplace: "Hastinapura",
    strengths: ["Immense Strength", "Mace Combat", "Fearlessness", "Appetite for Justice"],
    weaknesses: ["Hot-Tempered", "Impulsive", "Pride in Strength"],
    parents: { father: "Vayu (Wind God)", mother: "Kunti" },
    description: "The second Pandava with the strength of ten thousand elephants. His vow to kill all hundred Kauravas and drink Dushasana's blood was fulfilled during the great war.",
    title: "The Mighty",
  },
  {
    id: "nakula",
    name: "Nakula",
    sanskritName: "नकुल",
    image: nakulaImg,
    birthplace: "Hastinapura",
    strengths: ["Swordsmanship", "Horse Expertise", "Beauty", "Medicine"],
    weaknesses: ["Vanity", "Over-confidence", "Dependent on Brothers"],
    parents: { father: "Ashwini Kumaras", mother: "Madri" },
    description: "The fourth Pandava and twin of Sahadeva, known as the most handsome man in the world. Expert in Ayurveda and horse training, he was skilled with the sword.",
    title: "The Handsome",
  },
  {
    id: "sahadeva",
    name: "Sahadeva",
    sanskritName: "सहदेव",
    image: sahadevaImg,
    birthplace: "Hastinapura",
    strengths: ["Astrology", "Wisdom", "Cattle Knowledge", "Swordsmanship"],
    weaknesses: ["Cursed Knowledge", "Introversion", "Self-doubt"],
    parents: { father: "Ashwini Kumaras", mother: "Madri" },
    description: "The youngest Pandava with the gift of seeing the future. Cursed that if he revealed prophecies, his head would shatter, he carried the burden of knowing the war's outcome.",
    title: "The Wise",
  },
  {
    id: "abhimanyu",
    name: "Abhimanyu",
    sanskritName: "अभिमन्यु",
    image: abhimanyuImg,
    birthplace: "Dwaraka",
    strengths: ["Chakravyuha Entry", "Fearlessness", "Archery", "Youth & Vigor"],
    weaknesses: ["Incomplete Knowledge", "Rashness", "Youth"],
    parents: { father: "Arjuna", mother: "Subhadra" },
    description: "The brave son of Arjuna who learned the secret of entering the Chakravyuha while in his mother's womb. His heroic death at sixteen remains one of the war's greatest tragedies.",
    title: "The Young Hero",
  },
  {
    id: "ashwatthama",
    name: "Ashwatthama",
    sanskritName: "अश्वत्थामा",
    image: ashwatthamaImg,
    birthplace: "Ashram of Drona",
    strengths: ["Immortality", "Brahmastra", "Warfare Mastery", "Divine Gem"],
    weaknesses: ["Rage", "Vengeance", "Cursed Existence"],
    parents: { father: "Dronacharya", mother: "Kripi" },
    description: "Born with a divine gem on his forehead, he was cursed by Krishna to wander the earth eternally for his war crimes. One of the seven Chiranjivi (immortals).",
    title: "The Cursed Immortal",
  },
  {
    id: "ghatotkacha",
    name: "Ghatotkacha",
    sanskritName: "घटोत्कच",
    image: ghatotkachaImg,
    birthplace: "Forest of Kamyaka",
    strengths: ["Illusion Magic", "Flight", "Size Changing", "Night Fighting"],
    weaknesses: ["Vulnerability to Divine Weapons", "Demonic Heritage"],
    parents: { father: "Bhima", mother: "Hidimbi (Rakshasi)" },
    description: "The half-demon son of Bhima whose magical powers wreaked havoc on the Kaurava army at night. His death by Shakti weapon saved Arjuna's life.",
    title: "The Demon Prince",
  },
  {
    id: "dushasana",
    name: "Dushasana",
    sanskritName: "दुःशासन",
    image: dushasanaImg,
    birthplace: "Hastinapura",
    strengths: ["Warrior Skills", "Loyalty to Brother", "Fearlessness"],
    weaknesses: ["Cruelty", "Arrogance", "Blind Obedience"],
    parents: { father: "Dhritarashtra", mother: "Gandhari" },
    description: "The second Kaurava who attempted to disrobe Draupadi in the royal court. His brutal death at Bhima's hands fulfilled the vow made that fateful day.",
    title: "The Cruel Prince",
  },
  {
    id: "shakuni",
    name: "Shakuni",
    sanskritName: "शकुनि",
    image: shakuniImg,
    birthplace: "Gandhara",
    strengths: ["Dice Mastery", "Cunning", "Political Manipulation", "Patience"],
    weaknesses: ["Physical Weakness", "Obsession with Revenge", "Deception"],
    parents: { father: "King Subala", mother: "Queen of Gandhara" },
    description: "The master manipulator whose rigged dice game led to the Pandavas' exile. His hatred for the Kuru dynasty stemmed from his family's tragic past.",
    title: "The Mastermind",
  },
  {
    id: "satyaki",
    name: "Satyaki",
    sanskritName: "सात्यकि",
    image: satyakiImg,
    birthplace: "Dwaraka",
    strengths: ["Archery", "Loyalty", "Chariot Warfare", "Bravery"],
    weaknesses: ["Hot-Tempered", "Rivalry with Kritavarma"],
    parents: { father: "Satyaka", mother: "Yadava Princess" },
    description: "The loyal Yadava warrior and student of Arjuna who stood by the Pandavas throughout the war. His valor was unmatched among Krishna's army.",
    title: "The Loyal Yadava",
  },
];

const CharactersGrid = () => {
  return (
    <div className="min-h-screen bg-background pattern-mandala">
      {/* Header */}
      <header className="relative py-12 md:py-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/10 to-transparent" />
        <div className="relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider animate-fade-in">
            Warriors of <span className="text-maroon">Kurukshetra</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover the legendary heroes and their tales from the greatest epic ever told — 
            <span className="text-gold font-semibold italic"> The Mahabharata</span>
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 bg-gold rotate-45" />
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </header>

      {/* Characters Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
          {characters.map((character, index) => (
            <div
              key={character.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-maroon/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-bronze text-sm tracking-wider">
            यतो धर्मस्ततो जयः
          </p>
          <p className="font-body text-muted-foreground text-sm mt-1 italic">
            "Where there is Dharma, there is Victory"
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-2 h-2 bg-gold/50 rotate-45" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CharactersGrid;
