import Image from 'next/image';

interface CardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ExpCardProps {
  card: CardData;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  onClose: () => void;
}

export default function ExpCard({
  card,
  isExpanded,
  onToggle,
  onClose,
}: ExpCardProps) {
  return (
    <div
      className={`
          relative rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
          ${isExpanded ? 'flex-[3]' : 'flex-[0.5]'} 
          ${isExpanded ? 'bg-black' : 'bg-[#0A0A0A]'}
        `}
      onClick={() => onToggle(card.id)}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center py-10 transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="7" x2="17" y2="17"></line>
            <polyline points="17 7 17 17 7 17"></polyline>
          </svg>
        </div>

        <div className="flex-1 w-[1px] bg-white/20 mb-8"></div>

        <h3 className="text-white text-3xl md:text-5xl font-medium whitespace-nowrap [writing-mode:vertical-rl] rotate-180 tracking-wide">
          {card.title}
        </h3>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>

        <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
          <div className="flex justify-end">
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>

          {/* Bottom Content */}
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#00C2FF] to-[#AD00FF] bg-clip-text text-transparent decoration-blue-500 underline decoration-2 underline-offset-8">
                {card.title}
              </span>
            </h3>

            <p className="text-white text-lg md:text-xl leading-relaxed">
              {card.description}
            </p>

            <div className="pt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="bg-white text-black px-8 py-2 md:py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
