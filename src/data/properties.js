/**
 * Hostayy Luxury Estates - Curated Data Model
 * Brand Colors: Coral Red (#FF4D4D), Slate White (#F8FAFC), Midnight (#0F172A)
 * Official Contact: Mohit Chaudhary (+91 9217680108)
 * Address: Hostayy, Block A, Dwarka Sector 23, New Delhi - 110077
 */

export const HOSTAYY_CONFIG = {
  whatsappNumber: "919217680108",
  displayPhone: "+91 9217680108",
  contactName: "Mohit Chaudhary",
  address: "Hostayy, Block A, Dwarka Sector 23, New Delhi - 110077",
  brandName: "Hostayy",
  email: "C.mohit@hostayy.com",
  bookingUrl: "https://www.booking.com/Share-OrxZmT",
  airbnbVeloraUrl: "https://www.airbnb.com/h/velorabyhostayy",
  airbnbAzuraUrl: "https://www.airbnb.com/h/azurabyhostayy",
  googleFormOwnerUrl: "https://forms.google.com"
};

export const CATEGORY_NAMES = {
  all: "All Photos",
  living: "Living & Cinema",
  bedrooms: "Bedrooms & Suites",
  dining: "Kitchen & Dining",
  outdoor: "Outdoor & Terraces",
  baths: "Bathrooms & Vanities"
};

export const CATEGORY_ICONS = {
  all: "fa-images",
  living: "fa-couch",
  bedrooms: "fa-bed",
  dining: "fa-utensils",
  outdoor: "fa-leaf",
  baths: "fa-shower"
};

export function getHostayyWhatsAppLink(customMsg = "") {
  const base = `https://wa.me/${HOSTAYY_CONFIG.whatsappNumber}`;
  if (!customMsg) return base;
  return `${base}?text=${encodeURIComponent(customMsg)}`;
}

/**
 * Generates a pre-filled WhatsApp link clearly tagged for GUEST BOOKINGS
 */
export function getGuestWhatsAppLink({ property = "", checkIn = "", checkOut = "", guests = "", purpose = "", message = "" } = {}) {
  let text = `🏨 [GUEST BOOKING INQUIRY - HOSTAYY]\nHello Mohit, I am a prospective guest reaching out to book a stay with Hostayy:`;

  if (property) text += `\n• Property: ${property}`;
  if (checkIn) text += `\n• Check-In: ${checkIn}`;
  if (checkOut) text += `\n• Check-Out: ${checkOut}`;
  if (guests) text += `\n• Number of Guests: ${guests}`;
  if (purpose) text += `\n• Purpose / Occasion: ${purpose}`;
  if (message) text += `\n• Note: ${message}`;

  text += `\n\nPlease share live availability, photos, and direct VIP rates (0% OTA platform fees).`;
  return getHostayyWhatsAppLink(text);
}

/**
 * Generates a pre-filled WhatsApp link clearly tagged for PROPERTY OWNERS looking to register/partner
 */
export function getOwnerWhatsAppLink({ name = "", location = "", propertyType = "", bedrooms = "", monthlyYield = "", message = "" } = {}) {
  let text = `🔑 [PROPERTY OWNER / PARTNERSHIP INQUIRY - HOSTAYY]\nHello Mohit, I am a property owner and I want to register/list my residence with Hostayy:`;

  if (name) text += `\n• Owner Name: ${name}`;
  if (location) text += `\n• Property Location: ${location}`;
  if (propertyType) text += `\n• Property Type: ${propertyType}`;
  if (bedrooms) text += `\n• Configuration: ${bedrooms}`;
  if (monthlyYield) text += `\n• Projected Monthly Target: ${monthlyYield}`;
  if (message) text += `\n• Note: ${message}`;

  text += `\n\nPlease share an official feasibility assessment and onboarding details for Delhi NCR.`;
  return getHostayyWhatsAppLink(text);
}

export function getGuestPropertyWhatsAppLink(propertyName) {
  return getGuestWhatsAppLink({ property: propertyName });
}

export const HOSTAYY_PROPERTIES = [
  {
    id: "velora",
    name: "Velora by Hostayy",
    brandSubtitle: "Signature 6-Bedroom Residence",
    formerName: "Tana Bana",
    tagline: "Contemporary Grandeur & 4K Cinema Living",
    badge: "Signature Collection",
    roomsCount: 6,
    bathroomsCount: 6.5,
    maxGuests: 16,
    areaSqFt: "5,800 Sq.Ft.",
    location: "South Delhi / Dwarka Corridor, New Delhi",
    nearbyLandmarks: "12 mins to Yashobhoomi IICC • 15 mins to IGI Airport (T3) • 5 mins to Sector 21 Metro",
    shortDescription: "An expansive 6-bedroom architectural masterwork engineered for large multi-generational families, VIP delegations, and wedding parties. Features a dedicated 4K cinema lounge, Italian marble entertaining spaces, and private elevator access.",
    tariffPerNight: "₹6,500",
    tariffNote: "Direct VIP rate (₹5,500 - ₹7,000 range · 0% OTA fees)",
    rating: 4.98,
    reviewsCount: 38,
    airbnbUrl: "https://www.airbnb.com/h/velorabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/1Z-TYFoB5a8o9AZ0mwCpTnx1-W_P73a_A",
    heroImage: "/assets/images/velora/velora-05.jpg",
    specs: [
      { label: "Bedrooms", value: "6 En-Suite", icon: "fa-bed" },
      { label: "Bathrooms", value: "6.5 Baths", icon: "fa-bath" },
      { label: "Capacity", value: "12 - 16 Guests", icon: "fa-users" },
      { label: "Living Area", value: "5,800 Sq.Ft.", icon: "fa-vector-square" },
      { label: "Dining", value: "Seats 8-10", icon: "fa-utensils" }
    ],
    features: [
      "4K Ultra-HD Smart Cinema Lounge with Netflix/Prime",
      "Air Purifiers & HEPA Filtration in every bedroom",
      "Custom Backlit Italian Marble Entertainment Wall",
      "Modular Open-Plan Gourmet Kitchen with Induction & Microwave",
      "Private Balconies with Peaceful Tree-Lined Views",
      "Dedicated On-Site Villa Butler & Daily Housekeeping",
      "100% Inverter Power Backup & RO Drinking Water",
      "High-Speed 300 Mbps Optical Fiber Mesh Wi-Fi"
    ],
    roomBreakdown: [
      { title: "Master Suite 1", details: "King Bed, Walk-in Dressing, Ensuite Bath with Rain Shower, Air Purifier, Work Desk" },
      { title: "Executive Suite 2", details: "King Bed, Private Balcony, Ensuite Bath, Wardrobe, Bedside Mood Lighting" },
      { title: "Serenity Suite 3", details: "Queen Bed, Ensuite Bath with Vanity, Large Double Glazed Windows, Air Purifier" },
      { title: "Horizon Suite 4", details: "King Bed, Private Terrace Access, Ensuite Bath, Lounge Chair" },
      { title: "Garden Suite 5", details: "Queen Bed, Direct Access to Inner Courtyard, Ensuite Bath" },
      { title: "Penthouse Suite 6", details: "King Bed, Skylight Ceilings, Ensuite Bath, Mini Dressing Area" }
    ],
    images: [
      { id: 1, src: "/assets/images/velora/velora-05.jpg", thumb: "/assets/images/velora/thumbs/velora-05-thumb.jpg", title: "4K Cinema Living Lounge with Backlit Italian Marble Console", category: "living", isFeatured: true },
      { id: 2, src: "/assets/images/velora/velora-01.jpg", thumb: "/assets/images/velora/thumbs/velora-01-thumb.jpg", title: "Velora Grand Living Hall & Architectural Seating", category: "living", isFeatured: true },
      { id: 3, src: "/assets/images/velora/velora-02.jpg", thumb: "/assets/images/velora/thumbs/velora-02-thumb.jpg", title: "Executive Master Bedroom Suite with Ambient LED Lighting", category: "bedrooms", isFeatured: true },
      { id: 4, src: "/assets/images/velora/velora-03.jpg", thumb: "/assets/images/velora/thumbs/velora-03-thumb.jpg", title: "Gourmet Kitchen & Solid Wood 8-Seater Dining Space", category: "dining", isFeatured: true },
      { id: 5, src: "/assets/images/velora/velora-04.jpg", thumb: "/assets/images/velora/thumbs/velora-04-thumb.jpg", title: "Spa-Grade Designer Bathroom with Glass Rain Shower Enclosure", category: "baths", isFeatured: true },
      { id: 6, src: "/assets/images/velora/velora-06.jpg", thumb: "/assets/images/velora/thumbs/velora-06-thumb.jpg", title: "VIP Cinema Seating & Smart Entertainment Setup", category: "living", isFeatured: false },
      { id: 7, src: "/assets/images/velora/velora-07.jpg", thumb: "/assets/images/velora/thumbs/velora-07-thumb.jpg", title: "Bedroom Suite 2 with Natural Sunlight & King Bed", category: "bedrooms", isFeatured: false },
      { id: 8, src: "/assets/images/velora/velora-08.jpg", thumb: "/assets/images/velora/thumbs/velora-08-thumb.jpg", title: "Bedroom Suite 3 with Ensuite Bathroom & Wardrobe", category: "bedrooms", isFeatured: false },
      { id: 9, src: "/assets/images/velora/velora-09.jpg", thumb: "/assets/images/velora/thumbs/velora-09-thumb.jpg", title: "Bedroom Suite 4 with Private Sitting Alcove", category: "bedrooms", isFeatured: false },
      { id: 10, src: "/assets/images/velora/velora-10.jpg", thumb: "/assets/images/velora/thumbs/velora-10-thumb.jpg", title: "Bedroom Suite 5 with Contemporary Minimalist Headboard", category: "bedrooms", isFeatured: false },
      { id: 11, src: "/assets/images/velora/velora-11.jpg", thumb: "/assets/images/velora/thumbs/velora-11-thumb.jpg", title: "Bedroom Suite 6 with Hardwood Flooring Accents", category: "bedrooms", isFeatured: false },
      { id: 12, src: "/assets/images/velora/velora-12.jpg", thumb: "/assets/images/velora/thumbs/velora-12-thumb.jpg", title: "Dining Gallery & Premium Bar Counter", category: "dining", isFeatured: false },
      { id: 13, src: "/assets/images/velora/velora-13.jpg", thumb: "/assets/images/velora/thumbs/velora-13-thumb.jpg", title: "Fully Equipped Modular Kitchen with Microwave & RO", category: "dining", isFeatured: false },
      { id: 14, src: "/assets/images/velora/velora-14.jpg", thumb: "/assets/images/velora/thumbs/velora-14-thumb.jpg", title: "Master Bathroom Vanity with Backlit Anti-Fog Mirror", category: "baths", isFeatured: false },
      { id: 15, src: "/assets/images/velora/velora-15.jpg", thumb: "/assets/images/velora/thumbs/velora-15-thumb.jpg", title: "Guest Bathroom with Kohler Sanitaryware", category: "baths", isFeatured: false },
      { id: 16, src: "/assets/images/velora/velora-16.jpg", thumb: "/assets/images/velora/thumbs/velora-16-thumb.jpg", title: "Private Terrace & Sunset Balcony View", category: "outdoor", isFeatured: false },
      { id: 17, src: "/assets/images/velora/velora-17.jpg", thumb: "/assets/images/velora/thumbs/velora-17-thumb.jpg", title: "Grand Entrance Foyer & Elevator Lobby", category: "living", isFeatured: false }
    ]
  },
  {
    id: "verde",
    name: "Verde by Hostayy",
    brandSubtitle: "Botanical 8-Bedroom Luxury Estate",
    formerName: "The Bageecha",
    tagline: "Lush Garden Tranquility & Private Swimming Pool",
    badge: "Boutique Estate",
    roomsCount: 8,
    bathroomsCount: 9,
    maxGuests: 22,
    areaSqFt: "11,500 Sq.Ft.",
    location: "Chhatarpur / South Delhi Green Belt",
    nearbyLandmarks: "10 mins to Qutub Minar • 20 mins to Aerocity & IGI Airport • 10 mins to Chhatarpur Metro",
    shortDescription: "An expansive botanical retreat set amidst lush greenery in South Delhi. Features an 8-room manor, private plunge pool, manicured banquet lawns, alfresco gazebo dining, and complete seclusion for celebration getaways, wedding groups, and corporate retreats.",
    tariffPerNight: "₹7,000",
    tariffNote: "Direct VIP rate for botanical pool estate (₹5,500 - ₹7,000 range · 0% OTA fees)",
    rating: 4.97,
    reviewsCount: 42,
    airbnbUrl: "https://www.airbnb.com/h/velorabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/14Ui8U99c0iEy0rCJaDz5__SkLSmcyzWH",
    heroImage: "/assets/images/verde/verde-01.jpg",
    specs: [
      { label: "Bedrooms", value: "8 En-Suite", icon: "fa-bed" },
      { label: "Bathrooms", value: "9 Baths", icon: "fa-bath" },
      { label: "Capacity", value: "16 - 22 Guests", icon: "fa-users" },
      { label: "Estate Area", value: "11,500 Sq.Ft.", icon: "fa-tree" },
      { label: "Private Pool", value: "Yes (Private)", icon: "fa-person-swimming" }
    ],
    features: [
      "Private Swimming Pool with Sun Loungers & Outdoor Shower",
      "Expansive Landscaped Lawn for Gatherings & Evening BBQs",
      "Covered Gazebo & Outdoor Wicker Lounge Pavilion",
      "Air-Conditioned Banquet Living Hall with Floor-to-Ceiling Glass",
      "Professional Chef Kitchen & Outdoor Barbeque Grill",
      "Private Guarded Gatehouse & 24/7 Estate Security",
      "Dedicated Housekeeping Crew & On-Call Butler Service",
      "Ample Secure On-Site Parking for 8+ Vehicles"
    ],
    roomBreakdown: [
      { title: "Poolside Royal Suite 1", details: "King Bed, Direct Access to Pool Deck, Marble Ensuite Bath, Walk-in Dressing" },
      { title: "Garden View Suite 2", details: "King Bed, French Windows overlooking Main Lawn, Ensuite Bath" },
      { title: "Courtyard Suite 3", details: "Queen Bed, Private Verandah Seating, Ensuite Bath with Rain Shower" },
      { title: "Pavilion Suite 4", details: "King Bed, Direct Gazebo Access, Ensuite Bath with Vanity" },
      { title: "Manor Suite 5", details: "Two Queen Beds (Family Suite), Ensuite Bath, Wardrobe, Lounge Chairs" },
      { title: "Estate Suite 6", details: "King Bed, Upper Deck Balcony with Lawn Views, Ensuite Bath" },
      { title: "Sunset Suite 7", details: "King Bed, Terrace Facing West, Ensuite Bath with Bathtub" },
      { title: "Orchard Suite 8", details: "Queen Bed, Quiet Corner Location, Ensuite Bath, Work Desk" }
    ],
    images: [
      { id: 1, src: "/assets/images/verde/verde-01.jpg", thumb: "/assets/images/verde/thumbs/verde-01-thumb.jpg", title: "Verde Private Villa Facade & Landscaped Garden Grounds", category: "outdoor", isFeatured: true },
      { id: 2, src: "/assets/images/verde/verde-05.jpg", thumb: "/assets/images/verde/thumbs/verde-05-thumb.jpg", title: "Private Azure Swimming Pool with Sun Loungers", category: "outdoor", isFeatured: true },
      { id: 3, src: "/assets/images/verde/verde-02.jpg", thumb: "/assets/images/verde/thumbs/verde-02-thumb.jpg", title: "Palatial Living Lounge with High Ceilings & Garden Vistas", category: "living", isFeatured: true },
      { id: 4, src: "/assets/images/verde/verde-12.jpg", thumb: "/assets/images/verde/thumbs/verde-12-thumb.jpg", title: "Executive Garden Suite with King Size Bed", category: "bedrooms", isFeatured: true },
      { id: 5, src: "/assets/images/verde/verde-04.jpg", thumb: "/assets/images/verde/thumbs/verde-04-thumb.jpg", title: "Alfresco Gazebo Dining & Evening Cocktail Lawn", category: "outdoor", isFeatured: true },
      { id: 6, src: "/assets/images/verde/verde-06.jpg", thumb: "/assets/images/verde/thumbs/verde-06-thumb.jpg", title: "Grand Banquet Dining Area for 14 Guests", category: "dining", isFeatured: false },
      { id: 7, src: "/assets/images/verde/verde-03.jpg", thumb: "/assets/images/verde/thumbs/verde-03-thumb.jpg", title: "Formal Reception Lounge with Velvet Sofas", category: "living", isFeatured: false },
      { id: 8, src: "/assets/images/verde/verde-07.jpg", thumb: "/assets/images/verde/thumbs/verde-07-thumb.jpg", title: "Chef Grade Island Kitchen with Commercial Appliances", category: "dining", isFeatured: false },
      { id: 9, src: "/assets/images/verde/verde-08.jpg", thumb: "/assets/images/verde/thumbs/verde-08-thumb.jpg", title: "Poolside Royal Suite with French Glass Doors", category: "bedrooms", isFeatured: false },
      { id: 10, src: "/assets/images/verde/verde-09.jpg", thumb: "/assets/images/verde/thumbs/verde-09-thumb.jpg", title: "Courtyard Bedroom Suite 3 with Garden Accents", category: "bedrooms", isFeatured: false },
      { id: 11, src: "/assets/images/verde/verde-10.jpg", thumb: "/assets/images/verde/thumbs/verde-10-thumb.jpg", title: "Pavilion Bedroom Suite 4 with Private Verandah", category: "bedrooms", isFeatured: false },
      { id: 12, src: "/assets/images/verde/verde-11.jpg", thumb: "/assets/images/verde/thumbs/verde-11-thumb.jpg", title: "Manor Bedroom Suite 5 for Family Groups", category: "bedrooms", isFeatured: false },
      { id: 13, src: "/assets/images/verde/verde-13.jpg", thumb: "/assets/images/verde/thumbs/verde-13-thumb.jpg", title: "Upper Deck Estate Suite 6 with Balcony", category: "bedrooms", isFeatured: false },
      { id: 14, src: "/assets/images/verde/verde-14.jpg", thumb: "/assets/images/verde/thumbs/verde-14-thumb.jpg", title: "Orchard Suite 8 Quiet Garden Corner", category: "bedrooms", isFeatured: false },
      { id: 15, src: "/assets/images/verde/verde-15.jpg", thumb: "/assets/images/verde/thumbs/verde-15-thumb.jpg", title: "Spa Bathroom with Deep Soaking Tub", category: "baths", isFeatured: false },
      { id: 16, src: "/assets/images/verde/verde-16.jpg", thumb: "/assets/images/verde/thumbs/verde-16-thumb.jpg", title: "Double Vanity Marble Ensuite Bathroom", category: "baths", isFeatured: false },
      { id: 17, src: "/assets/images/verde/verde-17.jpg", thumb: "/assets/images/verde/thumbs/verde-17-thumb.jpg", title: "Pool Deck Night Lighting & Evening Ambience", category: "outdoor", isFeatured: false },
      { id: 18, src: "/assets/images/verde/verde-18.jpg", thumb: "/assets/images/verde/thumbs/verde-18-thumb.jpg", title: "Private Villa Driveway & Gatehouse", category: "outdoor", isFeatured: false },
      { id: 19, src: "/assets/images/verde/verde-19.jpg", thumb: "/assets/images/verde/thumbs/verde-19-thumb.jpg", title: "Rooftop Gazebo & Panoramic Foliage Vista", category: "outdoor", isFeatured: false }
    ]
  },
  {
    id: "azura",
    name: "Azura by Hostayy",
    brandSubtitle: "Executive 4-Bedroom Sky Penthouse",
    formerName: "The Penthouse",
    tagline: "Chic Minimalist Luxury & Sky Terrace Views",
    badge: "Executive Penthouse",
    roomsCount: 4,
    bathroomsCount: 4.5,
    maxGuests: 10,
    areaSqFt: "4,200 Sq.Ft.",
    location: "South Delhi / Vasant Kunj Corridor",
    nearbyLandmarks: "10 mins to DLF Emporio & Promenade • 12 mins to Aerocity • 15 mins to IGI Airport",
    shortDescription: "A sophisticated 4-bedroom executive residence designed for high-profile business travelers, transit layovers, and modern families seeking refined urban aesthetics. Boasts designer Italian furnishings, private terrace lounge, and ultra-fast optical fiber.",
    tariffPerNight: "₹5,500",
    tariffNote: "Direct VIP rate for penthouse suite (₹5,500 - ₹7,000 range · 0% OTA fees)",
    rating: 4.96,
    reviewsCount: 29,
    airbnbUrl: "https://www.airbnb.com/h/azurabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/1BMlPKoj5d1ID1WwQNRHDBcwfhLpE7Tto",
    heroImage: "/assets/images/azura/azura-01.jpg",
    specs: [
      { label: "Bedrooms", value: "4 En-Suite", icon: "fa-bed" },
      { label: "Bathrooms", value: "4.5 Baths", icon: "fa-bath" },
      { label: "Capacity", value: "8 - 10 Guests", icon: "fa-users" },
      { label: "Penthouse Area", value: "4,200 Sq.Ft.", icon: "fa-building" },
      { label: "Sky Terrace", value: "Private 800 Sq.Ft.", icon: "fa-sun" }
    ],
    features: [
      "Private Sky Terrace Lounge with City Skyline Views",
      "Custom Italian Leather Furniture & Sculptural Decor",
      "Executive Workstations with Ergonomic Seating in all rooms",
      "High-End Modular Open Kitchen with Espresso Bar",
      "Individual Smart Air Purifiers with PM2.5 Monitors",
      "Automated Keyless Check-in & Smart Door Access",
      "Dedicated Concierge Coordinator & Daily Housekeeping",
      "High-Speed 300 Mbps Dedicated Mesh Wi-Fi"
    ],
    roomBreakdown: [
      { title: "Master Sky Suite 1", details: "King Bed, Skyline Glass Wall, Walk-in Closet, Ensuite Bath with Rain Shower" },
      { title: "Terrace Suite 2", details: "King Bed, Direct Sliding Door to Sky Deck, Ensuite Bath, Workstation" },
      { title: "Nordic Suite 3", details: "Queen Bed, Minimalist Oak Finish, Ensuite Bath with Vanity, Air Purifier" },
      { title: "Studio Suite 4", details: "Queen Bed, Quiet Rear View, Ensuite Bath, Wardrobe, Reading Lamp" }
    ],
    images: [
      { id: 1, src: "/assets/images/azura/azura-01.jpg", thumb: "/assets/images/azura/thumbs/azura-01-thumb.jpg", title: "Azura Sunlit Designer Living Room with Skyline Windows", category: "living", isFeatured: true },
      { id: 2, src: "/assets/images/azura/azura-03.jpg", thumb: "/assets/images/azura/thumbs/azura-03-thumb.jpg", title: "Master Sky Suite with Floor-to-Ceiling Windows", category: "bedrooms", isFeatured: true },
      { id: 3, src: "/assets/images/azura/azura-04.jpg", thumb: "/assets/images/azura/thumbs/azura-04-thumb.jpg", title: "Private Sky Terrace Lounge & Evening Sunset Deck", category: "outdoor", isFeatured: true },
      { id: 4, src: "/assets/images/azura/azura-05.jpg", thumb: "/assets/images/azura/thumbs/azura-05-thumb.jpg", title: "Contemporary Dining Space & Italian Marble Breakfast Bar", category: "dining", isFeatured: true },
      { id: 5, src: "/assets/images/azura/azura-02.jpg", thumb: "/assets/images/azura/thumbs/azura-02-thumb.jpg", title: "Modernist Bathroom with Floating Vanity & Rain Shower", category: "baths", isFeatured: true },
      { id: 6, src: "/assets/images/azura/azura-06.jpg", thumb: "/assets/images/azura/thumbs/azura-06-thumb.jpg", title: "Gourmet Open Kitchen with Induction Hob & Espresso Machine", category: "dining", isFeatured: false },
      { id: 7, src: "/assets/images/azura/azura-07.jpg", thumb: "/assets/images/azura/thumbs/azura-07-thumb.jpg", title: "Terrace Suite 2 with Direct Balcony Sliding Doors", category: "bedrooms", isFeatured: false },
      { id: 8, src: "/assets/images/azura/azura-08.jpg", thumb: "/assets/images/azura/thumbs/azura-08-thumb.jpg", title: "Nordic Suite 3 with Warm Oak Wood Accents", category: "bedrooms", isFeatured: false },
      { id: 9, src: "/assets/images/azura/azura-09.jpg", thumb: "/assets/images/azura/thumbs/azura-09-thumb.jpg", title: "Studio Suite 4 Peaceful Urban Bedroom", category: "bedrooms", isFeatured: false },
      { id: 10, src: "/assets/images/azura/azura-10.jpg", thumb: "/assets/images/azura/thumbs/azura-10-thumb.jpg", title: "Sky Terrace Evening Cocktail Seating", category: "outdoor", isFeatured: false },
      { id: 11, src: "/assets/images/azura/azura-11.jpg", thumb: "/assets/images/azura/thumbs/azura-11-thumb.jpg", title: "Dedicated Executive Workstation with High-Speed Mesh Wi-Fi", category: "living", isFeatured: false },
      { id: 12, src: "/assets/images/azura/azura-12.jpg", thumb: "/assets/images/azura/thumbs/azura-12-thumb.jpg", title: "Ensuite Bathroom with Glass Rain Shower Enclosure", category: "baths", isFeatured: false },
      { id: 13, src: "/assets/images/azura/azura-13.jpg", thumb: "/assets/images/azura/thumbs/azura-13-thumb.jpg", title: "Powder Room Vanity with Kohler Fixtures", category: "baths", isFeatured: false },
      { id: 14, src: "/assets/images/azura/azura-14.jpg", thumb: "/assets/images/azura/thumbs/azura-14-thumb.jpg", title: "Living Room Modernist Art & Ambient Lighting", category: "living", isFeatured: false },
      { id: 15, src: "/assets/images/azura/azura-15.jpg", thumb: "/assets/images/azura/thumbs/azura-15-thumb.jpg", title: "Breakfast Island with Built-in Wine Cooler", category: "dining", isFeatured: false },
      { id: 16, src: "/assets/images/azura/azura-16.jpg", thumb: "/assets/images/azura/thumbs/azura-16-thumb.jpg", title: "Master Bedroom Walk-in Wardrobe & Dressing Island", category: "bedrooms", isFeatured: false },
      { id: 17, src: "/assets/images/azura/azura-17.jpg", thumb: "/assets/images/azura/thumbs/azura-17-thumb.jpg", title: "Sky Terrace Panoramic Delhi Foliage View", category: "outdoor", isFeatured: false },
      { id: 18, src: "/assets/images/azura/azura-18.jpg", thumb: "/assets/images/azura/thumbs/azura-18-thumb.jpg", title: "Private Penthouse Entrance Lobby & Smart Lock", category: "living", isFeatured: false }
    ]
  }
];
