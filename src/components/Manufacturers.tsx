import { Manufacturer } from "@/types";

interface ManufacturersProps {
  manufacturers: Manufacturer[];
}

export default function Manufacturers({ manufacturers }: ManufacturersProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Výrobci
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Spolupracujeme s předními světovými výrobci zemědělské techniky
          </p>
        </div>

        {/* Manufacturers List */}
        <div className="space-y-24">
          {manufacturers.map((manufacturer, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={manufacturer.id}
                className="relative"
              >
                {/* Manufacturer Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  {manufacturer.name}
                </h2>

                {/* Content Grid */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Video - Left for even, Right for odd */}
                  <div
                    className={`w-full ${
                      !isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${manufacturer.youtubeVideoId}`}
                        title={`${manufacturer.name} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Text - Right for even, Left for odd */}
                  <div
                    className={`w-full flex items-center ${
                      !isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="prose prose-lg max-w-none dark:prose-invert w-full">
                      <div className="text-foreground leading-relaxed whitespace-pre-line">
                        {manufacturer.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
