import Image from "next/image";

export default function PartnersSetion() {
  const partners = [
    [
      {
        name: "TORI",
        logo: "/images/tori.png",
      },
      {
        name: "GIDG Kigali",
        logo: "/images/gdg.png",
      },
      {
        name: "The education collaborative",
        logo: "/images/education.png",
      },
      {
        name: "Kepler",
        logo: "/images/kepler.png",
      },
      {
        name: "HILL",
        logo: "/images/hill.png",
      },
      {
        name: "CIBA",
        logo: "/images/CIBA1.png",
      },
      {
        name: "ARED",
        logo: "/images/Ared1.png",
      },
      {
        name: "IGIHE",
        logo: "/images/igihe.png",
      },
      {
        name: "VIAMO",
        logo: "/images/viamo1.png",
      },
      {
        name: "KEPLER",
        logo: "/images/kepler.png",
      },
      {
        name: "Laterite",
        logo: "/images/laterite.png",
      },
      {
        name: "SokoFund",
        logo: "/images/SokoFund.png",
      },
    ],
  ];

  return (
    <section className="py-12 px-4 mt-16 h-[400px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-12 text-[#03192E]">
          Join a few Educational Institutions understanding
          <br />
          Skills Challenges by Umurava
        </h2>

        <div className="space-y-8">
          {partners.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-72 items-center justify-center gap-y-24"
            >
              {row.map((partner, index) => (
                <div
                  key={index}
                  className="w-48 h-16 relative flex items-center justify-center ml-0"
                >
                  <Image
                    src={partner.logo || "placeholder.svg"}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
