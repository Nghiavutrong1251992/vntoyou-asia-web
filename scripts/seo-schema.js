// Schema markup cho tour (thêm vào head của tour detail page)
function generateTourSchema(tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.description,
    "image": tour.image,
    "offers": {
      "@type": "Offer",
      "price": tour.price,
      "priceCurrency": "VND"
    },
    "provider": {
      "@type": "TravelAgency", 
      "name": "VN To You Tourism"
    },
    "duration": `P${tour.days}D`,
    "location": {
      "@type": "Place",
      "name": tour.city + ", " + tour.region
    },
    "keywords": tour.keywords.join(", ")
  };
}