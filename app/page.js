import Image from "next/image";

export default function Home() {
  const imageSrc = "https://i.ibb.co/tZ4vzBy/tausif1.png";
  return (
    <main className="">
      <header className="bg-gradient-to-r from-[#F8F2FF] to-[#FAFAFA]">
        <div className="max-w-screen-xl mx-auto h-screen">
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center">
              <div className="space-y-5">
                <h2 className="text-5xl text-[#25323D] font-bold">
                  👋 Hi, I’m Cristopher
                </h2>
                <div className="w-[433px]">
                  <p className="">
                    I’m a Product Designer with a passion for participate in
                    every stage of digital product, from discovery to delivery.
                    Helping to focus the business goals on users.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-6xl">👋👋👋👋👋👋👋</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
