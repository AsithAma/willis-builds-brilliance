
import React, { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    title: "Modern Commercial Building",
    category: "Commercial",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    title: "Luxury Residential Complex",
    category: "Residential",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format&fit=crop",
    title: "Glass Office Tower",
    category: "Commercial",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=800&auto=format&fit=crop",
    title: "Urban Development Project",
    category: "Development",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&auto=format&fit=crop",
    title: "Educational Building",
    category: "Educational",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format&fit=crop",
    title: "Community Center",
    category: "Public",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=800&auto=format&fit=crop",
    title: "Corporate Headquarters",
    category: "Commercial",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=800&auto=format&fit=crop",
    title: "Residential Housing",
    category: "Residential",
  },
];

interface GalleryProps {
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ 
  title = "Our Project Gallery", 
  subtitle = "Take a look at some of our remarkable projects showcasing our commitment to quality and excellence."
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="py-16 bg-gray-50">
      <div className="willis-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-24 h-1 bg-willis-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-willis-red text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedImage(image.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-willis-red transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            
            {galleryImages.find(img => img.id === selectedImage) && (
              <>
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.url}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="mt-4 text-white">
                  <h3 className="text-xl font-bold">{galleryImages.find(img => img.id === selectedImage)?.title}</h3>
                  <p className="text-white/70">{galleryImages.find(img => img.id === selectedImage)?.category}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
