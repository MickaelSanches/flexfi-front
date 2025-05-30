const logos = [
  { src: "/logo/usdc.webp", alt: "USDC", href: "https://www.circle.com/usdc" },
  { src: "/logo/solana.webp", alt: "Solana", href: "https://solana.com/" },
  { src: "/logo/pyth.webp", alt: "PYTH", href: "https://pyth.network/" },
  { src: "/logo/jito.webp", alt: "JITO", href: "https://jito.network/" },
  { src: "/logo/jupiter.webp", alt: "JUPITER", href: "https://jup.ag/" },
  { src: "/logo/codigo.webp", alt: "CODIGO" },
  { src: "/logo/plink.webp", alt: "P-Link", href: "https://p-link.io/" },
  {
    src: "/logo/solidefinance.webp",
    alt: "SOLIDEFINANCE",
    href: "https://solide.fi/",
  },
  { src: "/logo/kulipa.webp", alt: "KULIPA" },
  {
    src: "/logo/logo-STF-1.webp",
    alt: "SUPERTEAMFRANCE",
    href: "https://fr.superteam.fun/",
  },
];

const ScrollingLogos = () => {
  return (
    <div className="w-full overflow-hidden mb-20">
      <div className="animate-slide flex gap-16 items-center w-max px-6">
        {[...logos, ...logos].map((logo, index) => {
          const img = (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-20 py-2 drop-shadow-[0_0_5px_rgba(0,255,250,0.3)] opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
          );

          return logo.href ? (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {img}
            </a>
          ) : (
            img
          );
        })}
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingLogos;
