export default function SecondaryRoles() {
  return (
    <div className="mx-auto w-[65%] mb-12 p-[2px] rounded-2xl h-[200px]">
      <div className="grid grid-cols-3 items-center">
        <div className="w-50 h-60 p-[2px] rounded-xl bg-gradient-to-r from-[#62DDFF] to-[#B039FF] justify-self-start">
          <img
            src="/board/asaath.png"
            className="aspect-square rounded-xl object-cover bg-white w-50 h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-full text-center">
          <div className="self-start text-left">
            <h4 className="text-sm uppercase tracking-wider text-gray-500">
              Secretary
            </h4>
            <p className="text-2xl font-semibold">M Asath</p>
          </div>
          <div className="self-end text-right">
            <h4 className="text-sm uppercase tracking-wider text-gray-500">
              Treasurer
            </h4>
            <p className="text-2xl font-semibold">S Janukshan</p>
          </div>
        </div>
        <div className="w-50 h-60 p-[2px] rounded-xl bg-gradient-to-r from-[#62DDFF] to-[#B039FF] justify-self-end">
          <img
            src="/board/janukshan.png"
            className="aspect-square rounded-xl object-cover bg-white w-50 h-full"
          />
        </div>
      </div>
    </div>
  );
}
