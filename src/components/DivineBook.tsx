import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookPage {
  id: number;
  title: string;
  sanskritTitle: string;
  content: string;
  mantra?: string;
  mantraMeaning?: string;
  usage: string;
  category: string;
}

const bookPages: BookPage[] = [
  {
    id: 1,
    title: "Gayatri Mantra",
    sanskritTitle: "गायत्री मंत्र",
    content: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
    mantra: "Om Bhur Bhuvaḥ Swaḥ Tat-savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt",
    mantraMeaning: "We meditate on the glory of the Creator who has created the Universe, who is worthy of worship, who is the embodiment of Knowledge and Light, who is the remover of all sins and ignorance. May He enlighten our intellect.",
    usage: "Chanted during Sandhya Vandana at dawn, noon, and dusk. Believed to illuminate the intellect and remove spiritual darkness.",
    category: "Rigveda",
  },
  {
    id: 2,
    title: "Mahamrityunjaya Mantra",
    sanskritTitle: "महामृत्युंजय मंत्र",
    content: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्",
    mantra: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat",
    mantraMeaning: "We worship the three-eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, just as a cucumber is severed from its bondage to the vine.",
    usage: "Recited for health, longevity, and protection from untimely death. Particularly powerful when chanted 108 times during illness.",
    category: "Rigveda",
  },
  {
    id: 3,
    title: "Shanti Mantra",
    sanskritTitle: "शांति मंत्र",
    content: "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्",
    mantra: "Om Sarve Bhavantu Sukhinah Sarve Santu Niramayah Sarve Bhadrani Pashyantu Ma Kashchid-Duhkha-Bhag-Bhavet",
    mantraMeaning: "May all be happy, may all be free from illness, may all see what is auspicious, may no one suffer.",
    usage: "Universal peace prayer recited at the end of rituals and ceremonies. Used for collective well-being and harmony.",
    category: "Upanishads",
  },
  {
    id: 4,
    title: "Asato Ma Sadgamaya",
    sanskritTitle: "असतो मा सद्गमय",
    content: "ॐ असतो मा सद्गमय तमसो मा ज्योतिर्गमय मृत्योर्मा अमृतं गमय ॐ शान्तिः शान्तिः शान्तिः",
    mantra: "Om Asato Ma Sad Gamaya Tamaso Ma Jyotir Gamaya Mrityor Ma Amritam Gamaya Om Shanti Shanti Shanti",
    mantraMeaning: "Lead me from the unreal to the real, from darkness to light, from death to immortality. Om peace, peace, peace.",
    usage: "Recited during meditation and spiritual seeking. A prayer for enlightenment and liberation from ignorance.",
    category: "Brihadaranyaka Upanishad",
  },
  {
    id: 5,
    title: "Vishnu Sahasranama",
    sanskritTitle: "विष्णु सहस्रनाम",
    content: "शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये",
    mantra: "Shuklambaradharam Vishnum Shashivarnam Chaturbhujam Prasanna Vadanam Dhyayet Sarva Vighnopa Shantaye",
    mantraMeaning: "One who wears white garments, who is all-pervading, who is bright as the moon, who has four arms, who has a pleasant face, meditate on Him for removal of all obstacles.",
    usage: "Opening verse of Vishnu Sahasranama. Recited daily for protection and removal of obstacles in life.",
    category: "Mahabharata (Anushasana Parva)",
  },
  {
    id: 6,
    title: "Purusha Sukta",
    sanskritTitle: "पुरुष सूक्त",
    content: "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् स भूमिं विश्वतो वृत्वा अत्यतिष्ठद्दशाङ्गुलम्",
    mantra: "Sahasra-Shirsha Purushah Sahasrakshah Sahasra-Pat Sa Bhumim Vishvato Vritva Atyatishtad Dashangulam",
    mantraMeaning: "The Purusha (Cosmic Being) has a thousand heads, a thousand eyes, and a thousand feet. He envelops the earth from all sides and extends beyond it by ten fingers' length.",
    usage: "Recited during Yagnas and sacred rituals. Describes the cosmic sacrifice and origin of universe.",
    category: "Rigveda",
  },
  {
    id: 7,
    title: "Rudram Chamakam",
    sanskritTitle: "रुद्रं चमकम्",
    content: "नमस्ते रुद्र मन्यव उतो त इषवे नमः नमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः",
    mantra: "Namaste Rudra Manyava Utota Ishave Namah Namaste Astu Dhanvane Bahubhyamuta Te Namah",
    mantraMeaning: "Salutations to your anger, O Rudra, and also to your arrow. Salutations to your bow and to your arms.",
    usage: "Powerful Shiva worship from Krishna Yajurveda. Chanted for protection, prosperity, and spiritual purification.",
    category: "Krishna Yajurveda",
  },
  {
    id: 8,
    title: "Durga Sukta",
    sanskritTitle: "दुर्गा सूक्त",
    content: "जातवेदसे सुनवाम सोममरातीयतो निदहाति वेदः स नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः",
    mantra: "Jatavedase Sunavama Somam Aratiyato Nidahati Vedah Sa Nah Parshadati Durgani Vishva Naveva Sindhum Duritatyagnih",
    mantraMeaning: "We press Soma for Jatavedas (Agni). May He burn away the wealth of enemies. May He, like a boat across a river, take us across all difficulties.",
    usage: "Invocation to Goddess Durga for protection from obstacles and enemies. Especially powerful during Navaratri.",
    category: "Rigveda",
  },
  {
    id: 9,
    title: "Bhagavad Gita - Karma Yoga",
    sanskritTitle: "कर्मयोग",
    content: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि",
    mantra: "Karmanye Vadhikaraste Ma Phaleshu Kadachana Ma Karma Phala Hetur Bhurma Te Sango'stv Akarmani",
    mantraMeaning: "You have the right to work only, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
    usage: "Core teaching of Karma Yoga from Bhagavad Gita. Guides action without attachment to results.",
    category: "Bhagavad Gita (Chapter 2, Verse 47)",
  },
  {
    id: 10,
    title: "Bhagavad Gita - Dhyana Yoga",
    sanskritTitle: "ध्यान योग",
    content: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते",
    mantra: "Yoga-sthah Kuru Karmani Sangam Tyaktva Dhananjaya Siddhy-asiddhyoh Samo Bhutva Samatvam Yoga Uchyate",
    mantraMeaning: "Perform your duties established in Yoga, renouncing attachment, O Dhananjaya. Be even-minded in success and failure, for this equanimity is called Yoga.",
    usage: "Foundation of meditation practice. Teaches equanimity and balance in all situations of life.",
    category: "Bhagavad Gita (Chapter 2, Verse 48)",
  },
];

const DivineBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  const totalPages = bookPages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const currentContent = bookPages[currentPage];

  return (
    <div className="min-h-screen bg-background pattern-mandala py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider">
          Shruti <span className="text-maroon">& Smriti</span>
        </h1>
        <p className="font-body text-muted-foreground mt-2 text-sm md:text-base">
          श्रुति और स्मृति — The Divine Knowledge of the Vedas and Sacred Texts
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-3 h-3 bg-gold rotate-45" />
          <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>

      {/* Book Container */}
      <div className="max-w-5xl mx-auto perspective-1000">
        <div className="relative">
          {/* Book */}
          <div className="relative bg-gradient-to-br from-sandalwood via-parchment to-sandalwood rounded-lg shadow-2xl overflow-hidden border-4 border-bronze/30">
            {/* Book Spine Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-bronze/40 via-bronze/20 to-transparent z-10" />
            
            {/* Page Content */}
            <div 
              className={`relative min-h-[500px] md:min-h-[600px] p-6 md:p-12 transition-all duration-600
                ${isFlipping ? (flipDirection === "next" ? "animate-page-flip-next" : "animate-page-flip-prev") : ""}`}
            >
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-maroon">
                  <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" opacity="0.3" />
                  <path d="M20 0 L100 0 L100 80 Z" fill="currentColor" opacity="0.2" />
                </svg>
              </div>

              {/* Page Number */}
              <div className="absolute top-4 left-16 md:left-20 font-body text-bronze/60 text-sm">
                पृष्ठ {currentPage + 1} / {totalPages}
              </div>

              {/* Content */}
              <div className="ml-4 md:ml-8 mt-8">
                {/* Category Badge */}
                <div className="inline-block bg-maroon/10 border border-maroon/30 rounded-full px-4 py-1 mb-4">
                  <span className="font-body text-maroon text-sm">{currentContent.category}</span>
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl md:text-4xl text-foreground mb-1">
                  {currentContent.title}
                </h2>
                <p className="font-body text-xl md:text-2xl text-gold mb-6">
                  {currentContent.sanskritTitle}
                </p>

                {/* Mantra Box */}
                <div className="bg-parchment/50 border-l-4 border-gold rounded-r-lg p-4 md:p-6 mb-6">
                  <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-4 text-center">
                    {currentContent.content}
                  </p>
                  {currentContent.mantra && (
                    <p className="font-body text-sm md:text-base text-muted-foreground italic text-center">
                      "{currentContent.mantra}"
                    </p>
                  )}
                </div>

                {/* Meaning */}
                {currentContent.mantraMeaning && (
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-maroon mb-2 flex items-center gap-2">
                      <span className="w-6 h-px bg-maroon" />
                      अर्थ (Meaning)
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {currentContent.mantraMeaning}
                    </p>
                  </div>
                )}

                {/* Usage */}
                <div className="mb-4">
                  <h3 className="font-display text-lg text-maroon mb-2 flex items-center gap-2">
                    <span className="w-6 h-px bg-maroon" />
                    उपयोग (Usage)
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {currentContent.usage}
                  </p>
                </div>
              </div>

              {/* Page Edge Effect */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-bronze/20 to-transparent" />
              <div className="absolute right-2 top-0 bottom-0 w-px bg-bronze/10" />
              <div className="absolute right-3 top-0 bottom-0 w-px bg-bronze/5" />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || isFlipping}
              className="group flex items-center gap-2 bg-maroon/10 hover:bg-maroon/20 disabled:opacity-30 disabled:cursor-not-allowed
                border border-maroon/30 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 text-maroon group-hover:-translate-x-1 transition-transform" />
              <span className="font-display text-maroon">Previous</span>
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {bookPages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isFlipping && idx !== currentPage) {
                      setFlipDirection(idx > currentPage ? "next" : "prev");
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentPage(idx);
                        setIsFlipping(false);
                      }, 600);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentPage 
                      ? "bg-gold w-6" 
                      : "bg-bronze/30 hover:bg-bronze/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className="group flex items-center gap-2 bg-maroon/10 hover:bg-maroon/20 disabled:opacity-30 disabled:cursor-not-allowed
                border border-maroon/30 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
            >
              <span className="font-display text-maroon">Next</span>
              <ChevronRight className="w-5 h-5 text-maroon group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="font-display text-bronze text-sm tracking-wider">
          वेदाहमेतं पुरुषं महान्तम्
        </p>
        <p className="font-body text-muted-foreground text-sm mt-1 italic">
          "I know this great Purusha" — Purusha Sukta
        </p>
      </footer>
    </div>
  );
};

export default DivineBook;
