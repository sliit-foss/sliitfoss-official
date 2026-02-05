export interface FeaturedRoleProps {
  title: string;
  name: string;
  image: string;
  reverse?: boolean;
}

function FeaturedRole({
  title,
  name,
  image,
  reverse = false,
}: FeaturedRoleProps) {
  return (
    <div className="mx-auto w-[65%] mb-12 p-[2px] rounded-2xl bg-gradient-to-r from-[#62DDFF] to-[#B039FF]">
      {/* Inner card */}
      <div
        className={`
                flex
                justify-around
                rounded-2xl
                bg-gray-50
                border border-transparent
                shadow
                ${reverse ? 'flex-row-reverse' : 'flex-row'}
                `}
      >
        {/* Image */}
        <img src={image} alt={name} className="w-45 object-cover -mt-12" />

        {/* Text */}
        <div className="flex w-1/2 flex-col justify-center px-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            {title}
          </p>
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRole;
