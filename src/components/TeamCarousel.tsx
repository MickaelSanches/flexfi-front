import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Mickael | Founder of FlexFi",
    image: "/images/mike.webp",
    description: `Mickael brings over a decade of real-world experience in sales, business management, and entrepreneurship.\n\nHaving spent years in the retail trenches, he witnessed firsthand the challenges merchants face: rising costs, payment friction, and the limits of traditional finance.\n\nFueled by this experience, he pivoted into Web Development and Web3 technologies, determined to create a better system.\n\nAt FlexFi, Mickael combines street-smart commercial insight with technical innovation, building a platform that puts real power back into the hands of merchants and users — where it belongs.\n\nFlexFi isn’t just a project. It’s the solution he wished existed when he was on the other side of the counter.`,
  },
  {
    name: "Dylan | Developer (Full-stack/Mobile App)",
    image: "/images/dylan.webp",
    description: `A passionate developer dedicated to crafting high-performance, elegant web applications. Dylan brings full-stack expertise across both web and mobile! Known for his user-centered approach, he loves tackling complex challenges and designing robust, aesthetic, and scalable solutions. Dylan continues to push boundaries, contributing to innovative projects while exploring the frontier of emerging technologies.`,
  },
  {
    name: "Christos | Data Scientist (Data Analysis / Social Media)",
    image: "/images/chris.webp",
    description: `Currently completing his MSc in Data Science, Christos blends four years of hands-on experience in crypto trading and investment with deep research in Blockchain technologies and digital assets. His combined academic rigor and real-world financial acumen make him a key asset in the teams mission!`,
  },
  {
    name: "Eddy | Developer (Backend / Blockchain)",
    image: "/images/eddy.webp",
    description: `Self-taught and relentlessly curious, Eddy has spent the past four years mastering blockchain development by building real-world projects from the ground up. Specializing in secure, efficient smart contracts and dApps on Ethereum while expanding in AI integration, backend architecture, and full-stack development. For Eddy, it's all about learning through discipline and substance!`,
  },
  {
    name: "Henri | Developer (Backend/ Blockchain)",
    image: "/images/henri.webp",
    description: `Henri began his career as a data analyst before quickly progressing into data engineering, where he has thrived for the last three years within a large organization. Drawn to the world of Crypto and Web 3 back in 2020, he developed deep expertise in Solana infrastructure and has a keen interest in DeFi and DePIN technology!`,
  },
  {
    name: "Erzum | Developer (Backend)",
    image: "/images/erzum.webp",
    description: `Currently pursuing a degree in Computer Science and working at IBM, Erzum brings a fresh, dynamic perspective to Web3. Passionate about decentralized finance’s potential to drive financial inclusion, he is thrilled to implement his skills toward building solutions which reshape digital asset engagement!`,
  },
  {
    name: "Jérémy | Developer (Cybersecurity & Audit)",
    image: "/images/jeremy.webp",
    description: `A 42 Blockchain Program alum and 'EthCC[7] Hackathon' veteran, Jeremy keeps FlexFi’s infrastructure secure, auditing endpoints, APIs, and smart contracts to ensure battle-tested protection!`,
  },
];

const TeamCarousel = () => {
  return (
    <div className="w-full px-6 pt-16 py-10 md:px-16 lg:px-24 xl:px-50 bg-gradient-to-b text-white overflow-hidden">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-white text-4xl font-bold text-left mb-16">
          FlexFi <span className="text-[#71FFFF]">Team</span>
        </h2>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={600}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-7xl mx-auto overflow-visible"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide
            key={index}
            className="w-full md:!w-[800px] px-2 box-border  rounded-2xl"
          >
            <div className="bg-[#0C1D26] rounded-2xl p-6 sm:p-10 shadow-lg min-h-[520px] border border-[#00FEFB] ">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  className="rounded-xl w-[280px] h-[340px] object-cover shadow-lg"
                />
                <div className="text-white space-y-4 text-left">
                  <h3 className="text-2xl font-bold font-days-one">
                    {member.name}
                  </h3>
                  {member.description.split("\n").map((line, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
