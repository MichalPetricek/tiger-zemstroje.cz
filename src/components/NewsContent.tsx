"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/types";

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/
  );
  return match ? match[1] : null;
}

export default function NewsPageContent({ news }: { news: NewsItem[] }) {

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Novinky</h1>
          <p className="text-xl text-muted-foreground">
            Aktuality ze světa TIGER CZ – předání strojů, nové produkty a další
          </p>
        </div>

        {news.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            Zatím nejsou žádné novinky.
          </p>
        ) : (
          <div className="space-y-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="md:flex">
                  {/* Images */}
                  {item.images && item.images.length > 0 && (
                    <div className="md:w-1/3 shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-accent border-accent">
                          {item.date}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>

                      {/* Image gallery */}
                      {item.images && item.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {item.images.slice(1, 4).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${item.title} – foto ${i + 2}`}
                              className="w-full aspect-[3/2] object-cover rounded"
                            />
                          ))}
                        </div>
                      )}

                      {/* YouTube embed */}
                      {item.youtubeUrl && extractYouTubeId(item.youtubeUrl) && (
                        <div className="pt-2">
                          <div className="aspect-video rounded overflow-hidden">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(item.youtubeUrl)}`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
