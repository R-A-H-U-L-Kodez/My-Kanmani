import { Heart } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

// Photos
const photos: Photo[] = [
  { id: "photo-4", src: "/gallery/Snapchat-1042045780.jpg", alt: "Snapchat-1042045780", caption: "" },
  { id: "photo-5", src: "/gallery/Snapchat-1102688786~2.jpg", alt: "Snapchat-1102688786~2", caption: "" },
  { id: "photo-6", src: "/gallery/Snapchat-1978531051.jpg", alt: "Snapchat-1978531051", caption: "" },
  { id: "photo-7", src: "/gallery/Snapchat-378859662.jpg", alt: "Snapchat-378859662", caption: "" },
  { id: "photo-9", src: "/gallery/Snapchat-671050214.jpg", alt: "Snapchat-671050214", caption: "" },
  { id: "photo-10", src: "/gallery/Snapchat-835469002.jpg", alt: "Snapchat-835469002", caption: "" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-midnight-blue pt-20 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-gold-accent mb-2">
            Captured Moons & Moments
          </h1>
          <p className="text-starlight-purple text-xl">
            Every photograph tells how pretty My Love is Baby
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-2xl border-4 border-gold-accent shadow-xl overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 border-2 border-dashed border-starlight-purple/50 rounded-2xl p-8 max-w-md mx-auto">
            <div className="mb-4 flex justify-center">
              <Heart className="w-10 h-10 text-gold-accent" />
            </div>
            <h3 className="font-romantic text-xl text-gold-accent mb-2">
              More Memories Coming Soon
            </h3>
            <p className="text-starlight-purple">
              Our gallery will keep growing with every beautiful moment we share together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
