import Image from 'next/image';
import { committeeMembers } from '@/data/committeeMembers';

export default function CommitteeMembers() {
  return (
    <section className="my-20 flex justify-center">
      <div className="bg-black rounded-2xl px-8 py-10 w-full max-w-5xl">
        {/* Header */}
        <h2 className="text-white text-2xl font-semibold text-center tracking-wider">
          COMMITTEE MEMBERS
        </h2>

        {/* Images grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-700 mb-3">
                <Image
                  src={member.image}
                  alt="Committee member"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-sm font-semibold text-white leading-tight">
                {member.name}
              </p>
              <p className="text-xs text-gray-400 leading-tight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
