import FeaturedCard from "@/components/FeaturedCard";
import Image from "next/image";

const Home = () => {
  return (
    <main className="">
      <header className="bg-gradient-to-r from-[#F8F2FF] to-[#FAFAFA]">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-48">
            <div className="flex justify-between items-center">
              <div className="space-y-10">
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
                <p className="text-6xl">👋👋👋👋👋👋👋</p>
                <p className="text-6xl">👋👋👋👋👋👋👋</p>
                <p className="text-6xl">👋👋👋👋👋👋👋</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="flex flex-wrap justify-center gap-9 bg-gradient-to-r from-[#F8F2FF] to-[#FAFAFA] py-16">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </section>
    </main>
  );
};
export default Home;
