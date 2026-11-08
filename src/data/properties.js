/**
 * Hostayy Luxury Serviced Residences & Hospitality Management
 * Curated 1, 2, and 3 BHK Serviced Apartments near Yashobhoomi (IICC) & IGI Airport, Delhi NCR
 * Official Contact: Mohit Chaudhary (+91 9217680108)
 * Address: Hostayy, Block A, Dwarka Sector 23, New Delhi - 110077 (3 mins to Yashobhoomi IICC)
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
  kitchen: "Modular Kitchens & Dining",
  living: "Living & Cinema Lounges",
  bedrooms: "Bedrooms & Suites",
  outdoor: "Balconies & Terraces",
  baths: "Bathrooms & Vanities"
};

export const CATEGORY_ICONS = {
  all: "fa-images",
  kitchen: "fa-kitchen-set",
  living: "fa-couch",
  bedrooms: "fa-bed",
  outdoor: "fa-sun",
  baths: "fa-shower"
};

export function getHostayyWhatsAppLink(customMsg = "") {
  const base = `https://wa.me/${HOSTAYY_CONFIG.whatsappNumber}`;
  if (!customMsg) return base;
  return `${base}?text=${encodeURIComponent(customMsg)}`;
}

/**
 * Generates a pre-filled WhatsApp link clearly focused on LONG-TERM & MONTHLY QUOTATIONS
 */
export function getGuestWhatsAppLink({ property = "", moveInDate = "", checkIn = "", checkOut = "", duration = "", guests = "", purpose = "", message = "" } = {}) {
  let text = `🏨 [LONG-TERM / SERVICED STAY QUOTATION - HOSTAYY]\nHello Mohit, I am inquiring about a serviced apartment stay near Yashobhoomi (IICC) with Hostayy:`;

  if (property) text += `\n• Preferred Residence: ${property}`;
  const effectiveMoveIn = moveInDate || checkIn;
  if (effectiveMoveIn) text += `\n• Move-in / Check-in Date: ${effectiveMoveIn}`;
  if (duration) {
    text += `\n• Stay Duration: ${duration}`;
  } else if (checkOut) {
    text += `\n• Check-out Date: ${checkOut}`;
  }
  if (guests) text += `\n• Number of Guests / Team Members: ${guests}`;
  if (purpose) text += `\n• Purpose of Stay: ${purpose}`;
  if (message) text += `\n• Note: ${message}`;

  text += `\n\nPlease share the customized long-term quotation, live availability, and apartment photos (0% Brokerage · 0% OTA fees).`;
  return getHostayyWhatsAppLink(text);
}

/**
 * Generates a pre-filled WhatsApp link for PROPERTY OWNERS looking to register/partner
 */
export function getOwnerWhatsAppLink({ name = "", location = "", propertyType = "", bedrooms = "", monthlyYield = "", message = "" } = {}) {
  let text = `🔑 [PROPERTY MANAGEMENT / OWNER PARTNERSHIP - HOSTAYY]\nHello Mohit, I am a property owner and I want to list/register my property with Hostayy for turnkey management:`;

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
  return getGuestWhatsAppLink({ property: propertyName, purpose: "Long-term / monthly stay inquiry" });
}

export const HOSTAYY_PROPERTIES = [
  {
    id: "velora",
    name: "Velora by Hostayy",
    bhk: "1 BHK",
    brandSubtitle: "Curated 1 BHK Luxury Serviced Residence",
    tagline: "Modern Smart Living, Dedicated Workstation & 4K Cinema",
    badge: "1 BHK Suite",
    roomsCount: 1,
    bathroomsCount: 1.5,
    maxGuests: 4,
    areaSqFt: "950 Sq.Ft.",
    location: "Dwarka Sector 23, New Delhi (Yashobhoomi IICC Corridor)",
    nearbyLandmarks: "3 mins to Yashobhoomi IICC (Sector 25) • 10 mins to IGI Airport (T3) • 5 mins to Sector 21 Metro Interchange • 4 mins to Pacific D21 Mall",
    shortDescription: "A designer 1-BHK serviced residence engineered for solo corporate executives, business delegates attending exhibitions at Yashobhoomi IICC, and couples seeking turnkey comfort. Features a spacious king en-suite bedroom, ergonomic workstation, 4K Smart cinema lounge, and a fully equipped modular kitchen with RO, microwave, and induction.",
    quotationBadge: "Long-Term Quotation on Request",
    stayType: "Weekly, Monthly & Extended Corporate Stays",
    tariffNote: "Custom all-inclusive monthly packages • 0% Brokerage • 0% Platform Fees • 300 Mbps Wi-Fi & Housekeeping Included",
    rating: 4.98,
    reviewsCount: 38,
    airbnbUrl: "https://www.airbnb.com/h/velorabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/1Z-TYFoB5a8o9AZ0mwCpTnx1-W_P73a_A",
    heroImage: "/assets/images/velora/velora-05.jpg",
    specs: [
      { label: "Configuration", value: "1 BHK Luxury Suite", icon: "fa-door-open" },
      { label: "Bathrooms", value: "1.5 Baths (En-Suite)", icon: "fa-bath" },
      { label: "Living Area", value: "950 Sq.Ft.", icon: "fa-vector-square" },
      { label: "Kitchen", value: "Fully Fitted Modular", icon: "fa-kitchen-set" },
      { label: "Connectivity", value: "3 Mins Yashobhoomi", icon: "fa-location-dot" }
    ],
    features: [
      "Fully equipped modular kitchen with microwave, induction/gas hob, refrigerator & RO purifier",
      "Dedicated ergonomic work desk with high-speed 300 Mbps mesh optical Wi-Fi",
      "Ultra-HD 4K Smart Cinema lounge with Netflix, Prime & premium audio",
      "Air Purifiers & HEPA filtration in bedroom and living spaces",
      "Hospital-grade regular housekeeping and sanitized Egyptian cotton linens",
      "100% automatic power backup & continuous hot water",
      "Automatic washing machine and steam iron setup for long-term comfort",
      "3 minutes to Yashobhoomi IICC Convention Centre & Sector 25 Metro"
    ],
    roomBreakdown: [
      { title: "Master Bedroom Suite", details: "Plush King Bed, Orthopedic Mattress, Wardrobe, Air Purifier, Workstation, Ensuite Bath with Glass Rain Shower" },
      { title: "Designer Living & Cinema Lounge", details: "L-shaped Sectional Sofa, 55-inch 4K Smart TV, Ambient LED Mood Lighting, Private Balcony Access" },
      { title: "Fully Equipped Modular Kitchen", details: "Induction & Gas Hob, Microwave Oven, Refrigerator, RO Water Purifier, Cookware, Cutlery, Electric Kettle" },
      { title: "Dining & Breakfast Counter", details: "Solid Wood Dining Counter with Power Outlets for Laptop Work and Meals" },
      { title: "Ensuite Bathroom & Vanity", details: "Designer Marble Finish, Glass Rain Shower Enclosure, Anti-Fog Backlit Mirror, Kohler Sanitaryware" }
    ],
    images: [
      { id: 1, src: "/assets/images/velora/velora-05.jpg", thumb: "/assets/images/velora/thumbs/velora-05-thumb.jpg", title: "4K Cinema Living Lounge with Backlit Italian Marble Console", category: "living", isFeatured: true },
      { id: 2, src: "/assets/images/velora/velora-13.jpg", thumb: "/assets/images/velora/thumbs/velora-13-thumb.jpg", title: "Fully Equipped Modular Kitchen with Microwave, RO & Modern Storage", category: "kitchen", isFeatured: true },
      { id: 3, src: "/assets/images/velora/velora-02.jpg", thumb: "/assets/images/velora/thumbs/velora-02-thumb.jpg", title: "Executive Master Bedroom Suite with Ambient LED Lighting", category: "bedrooms", isFeatured: true },
      { id: 4, src: "/assets/images/velora/velora-04.jpg", thumb: "/assets/images/velora/thumbs/velora-04-thumb.jpg", title: "Spa-Grade Designer Bathroom with Glass Rain Shower Enclosure", category: "baths", isFeatured: true },
      { id: 5, src: "/assets/images/velora/velora-03.jpg", thumb: "/assets/images/velora/thumbs/velora-03-thumb.jpg", title: "Gourmet Kitchen & Solid Wood Dining Space", category: "kitchen", isFeatured: true },
      { id: 6, src: "/assets/images/velora/velora-16.jpg", thumb: "/assets/images/velora/thumbs/velora-16-thumb.jpg", title: "Private Balcony & Sunset City Vista", category: "outdoor", isFeatured: true },
      { id: 7, src: "/assets/images/velora/velora-01.jpg", thumb: "/assets/images/velora/thumbs/velora-01-thumb.jpg", title: "Grand Living Hall & Architectural Seating", category: "living", isFeatured: false },
      { id: 8, src: "/assets/images/velora/velora-06.jpg", thumb: "/assets/images/velora/thumbs/velora-06-thumb.jpg", title: "VIP Cinema Seating & Smart Entertainment Setup", category: "living", isFeatured: false },
      { id: 9, src: "/assets/images/velora/velora-12.jpg", thumb: "/assets/images/velora/thumbs/velora-12-thumb.jpg", title: "Dining Gallery & Premium Coffee Bar Counter", category: "kitchen", isFeatured: false },
      { id: 10, src: "/assets/images/velora/velora-14.jpg", thumb: "/assets/images/velora/thumbs/velora-14-thumb.jpg", title: "Master Bathroom Vanity with Backlit Anti-Fog Mirror", category: "baths", isFeatured: false },
      { id: 11, src: "/assets/images/velora/velora-07.jpg", thumb: "/assets/images/velora/thumbs/velora-07-thumb.jpg", title: "Sunlit Bedroom Suite with King Bed & Wardrobe", category: "bedrooms", isFeatured: false },
      { id: 12, src: "/assets/images/velora/velora-17.jpg", thumb: "/assets/images/velora/thumbs/velora-17-thumb.jpg", title: "Grand Entrance Foyer & Elevator Access", category: "living", isFeatured: false }
    ]
  },
  {
    id: "azura",
    name: "Azura by Hostayy",
    bhk: "2 BHK",
    brandSubtitle: "Premium 2 BHK Executive Serviced Residence",
    tagline: "Chic Contemporary Comfort, Sky Terrace & Dual Workstations",
    badge: "2 BHK Residence",
    roomsCount: 2,
    bathroomsCount: 2.5,
    maxGuests: 6,
    areaSqFt: "1,850 Sq.Ft.",
    location: "Dwarka Sector 23 / Aerocity Corridor, New Delhi",
    nearbyLandmarks: "4 mins to Yashobhoomi IICC • 12 mins to Aerocity & Worldmark • 10 mins to IGI Airport (T3/T1) • 5 mins to Dwarka Expressway • Diplomatic Enclave II",
    shortDescription: "An elegant, sunlit 2-BHK executive serviced apartment tailor-made for corporate project teams, relocating expat families, and Yashobhoomi conference delegations. Features two private king en-suite bedrooms, dual work desks, Italian marble living lounge, sky terrace balcony, and fully fitted open-plan gourmet kitchen.",
    quotationBadge: "Long-Term Quotation on Request",
    stayType: "Monthly, Multi-Month & Expat Housing",
    tariffNote: "All-inclusive monthly packages • 0% Brokerage • Daily/weekly housekeeping • GST invoicing for business expense credit",
    rating: 4.96,
    reviewsCount: 29,
    airbnbUrl: "https://www.airbnb.com/h/azurabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/1BMlPKoj5d1ID1WwQNRHDBcwfhLpE7Tto",
    heroImage: "/assets/images/azura/azura-01.jpg",
    specs: [
      { label: "Configuration", value: "2 BHK Executive Suite", icon: "fa-door-open" },
      { label: "Bathrooms", value: "2.5 En-Suite Baths", icon: "fa-bath" },
      { label: "Living Area", value: "1,850 Sq.Ft.", icon: "fa-vector-square" },
      { label: "Kitchen", value: "Open-Plan Gourmet Kitchen", icon: "fa-kitchen-set" },
      { label: "Connectivity", value: "4 Mins to Yashobhoomi", icon: "fa-location-dot" }
    ],
    features: [
      "Open-concept gourmet kitchen with espresso bar, microwave, induction hob & full cookware",
      "Two independent king en-suite bedroom suites with private workstations",
      "Private sky terrace lounge with open skyline views and morning coffee seating",
      "Enterprise 300 Mbps mesh optical Wi-Fi throughout all rooms and balcony",
      "Individual smart air purifiers with real-time PM2.5 displays in every room",
      "Keyless digital smart lock access & 24/7 building security",
      "Full automatic laundry machine and ironing infrastructure for extended stays",
      "Official GST tax invoicing for registered corporate entities and businesses"
    ],
    roomBreakdown: [
      { title: "Master Sky Suite 1", details: "King Bed, Skyline Glass Window, Walk-in Closet, Dedicated Workstation, Ensuite Bath with Rain Shower" },
      { title: "Executive Bedroom Suite 2", details: "King Bed, Soundproof Double Glazing, Attached Ensuite Bath, Dressing Vanity, Ergonomic Work Desk" },
      { title: "Designer Living & Dining Hall", details: "Italian Leather Sofas, 65-inch 4K Smart TV, 6-Seater Marble Dining Table, Balcony Sliding Doors" },
      { title: "Gourmet Open Kitchen", details: "Induction Hob, Convection Microwave, Double Door Fridge, RO Water Filter, Toaster, Wine Rack, Dishware" },
      { title: "Private Sky Terrace", details: "Outdoor Wicker Seating, Potted Greenery, Sunset Panoramas across Dwarka Skyline" }
    ],
    images: [
      { id: 1, src: "/assets/images/azura/azura-01.jpg", thumb: "/assets/images/azura/thumbs/azura-01-thumb.jpg", title: "Azura Sunlit Designer Living Room with Skyline Windows", category: "living", isFeatured: true },
      { id: 2, src: "/assets/images/azura/azura-06.jpg", thumb: "/assets/images/azura/thumbs/azura-06-thumb.jpg", title: "Gourmet Open Kitchen with Induction Hob, Espresso Bar & Modern Appliances", category: "kitchen", isFeatured: true },
      { id: 3, src: "/assets/images/azura/azura-03.jpg", thumb: "/assets/images/azura/thumbs/azura-03-thumb.jpg", title: "Master Sky Suite with Floor-to-Ceiling Windows & Ambient Lighting", category: "bedrooms", isFeatured: true },
      { id: 4, src: "/assets/images/azura/azura-07.jpg", thumb: "/assets/images/azura/thumbs/azura-07-thumb.jpg", title: "Executive Suite 2 with Direct Balcony Sliding Doors", category: "bedrooms", isFeatured: true },
      { id: 5, src: "/assets/images/azura/azura-05.jpg", thumb: "/assets/images/azura/thumbs/azura-05-thumb.jpg", title: "Contemporary Dining Space & Italian Marble Breakfast Bar", category: "kitchen", isFeatured: true },
      { id: 6, src: "/assets/images/azura/azura-04.jpg", thumb: "/assets/images/azura/thumbs/azura-04-thumb.jpg", title: "Private Sky Terrace Lounge & Evening Sunset Deck", category: "outdoor", isFeatured: true },
      { id: 7, src: "/assets/images/azura/azura-02.jpg", thumb: "/assets/images/azura/thumbs/azura-02-thumb.jpg", title: "Modernist Bathroom with Floating Vanity & Rain Shower", category: "baths", isFeatured: false },
      { id: 8, src: "/assets/images/azura/azura-11.jpg", thumb: "/assets/images/azura/thumbs/azura-11-thumb.jpg", title: "Dedicated Executive Workstation with High-Speed Mesh Wi-Fi", category: "living", isFeatured: false },
      { id: 9, src: "/assets/images/azura/azura-12.jpg", thumb: "/assets/images/azura/thumbs/azura-12-thumb.jpg", title: "Ensuite Bathroom with Glass Rain Shower Enclosure", category: "baths", isFeatured: false },
      { id: 10, src: "/assets/images/azura/azura-15.jpg", thumb: "/assets/images/azura/thumbs/azura-15-thumb.jpg", title: "Breakfast Island with Built-in Wine Cooler", category: "kitchen", isFeatured: false },
      { id: 11, src: "/assets/images/azura/azura-16.jpg", thumb: "/assets/images/azura/thumbs/azura-16-thumb.jpg", title: "Master Bedroom Walk-in Wardrobe & Dressing Island", category: "bedrooms", isFeatured: false },
      { id: 12, src: "/assets/images/azura/azura-18.jpg", thumb: "/assets/images/azura/thumbs/azura-18-thumb.jpg", title: "Private Penthouse Entrance Lobby & Smart Lock", category: "living", isFeatured: false }
    ]
  },
  {
    id: "verde",
    name: "Verde by Hostayy",
    bhk: "3 BHK",
    brandSubtitle: "Palatial 3 BHK Signature Serviced Residence",
    tagline: "Expansive Living Hall, Wrap-around Balconies & Chef's Kitchen",
    badge: "3 BHK Signature",
    roomsCount: 3,
    bathroomsCount: 3.5,
    maxGuests: 10,
    areaSqFt: "2,800 Sq.Ft.",
    location: "Dwarka Sector 23 Prime / DDA Golf Course Belt, New Delhi",
    nearbyLandmarks: "3 mins to Yashobhoomi IICC • 8 mins to 18-Hole DDA Golf Course Dwarka • 12 mins to IGI Airport (T3) • 15 mins to Cyber City Gurugram via Expressway",
    shortDescription: "A palatial 3-BHK luxury serviced apartment crafted for senior executives, embassy delegations, and extended family relocations. Boasting three expansive king en-suite suites, a banquet dining hall for 8, wrap-around lush green balconies, commercial-grade modular kitchen, and 24/7 dedicated butler & concierge.",
    quotationBadge: "Long-Term Quotation on Request",
    stayType: "Extended Corporate, Embassy & Family Stays",
    tariffNote: "Custom long-term residential contract • 0% Brokerage • 0% OTA fees • 24/7 Butler & dedicated concierge",
    rating: 4.97,
    reviewsCount: 42,
    airbnbUrl: "https://www.airbnb.com/h/velorabyhostayy",
    bookingUrl: "https://www.booking.com/Share-OrxZmT",
    driveFolderUrl: "https://drive.google.com/drive/folders/14Ui8U99c0iEy0rCJaDz5__SkLSmcyzWH",
    heroImage: "/assets/images/verde/verde-02.jpg",
    specs: [
      { label: "Configuration", value: "3 BHK Signature Floor", icon: "fa-door-open" },
      { label: "Bathrooms", value: "3.5 Luxury Baths", icon: "fa-bath" },
      { label: "Living Area", value: "2,800 Sq.Ft.", icon: "fa-vector-square" },
      { label: "Kitchen", value: "Chef Grade Island Kitchen", icon: "fa-kitchen-set" },
      { label: "Connectivity", value: "3 Mins Yashobhoomi / Golf Course", icon: "fa-location-dot" }
    ],
    features: [
      "Chef-grade modular island kitchen with 4-burner hob, oven, microwave & large refrigerator",
      "Three grand king en-suite bedroom suites with private wardrobes and walk-in dressing",
      "Expansive banquet living lounge accommodating 10-12 guests with floor-to-ceiling glass",
      "Wrap-around garden balconies with lush foliage views and fresh air circulation",
      "Dedicated on-site host and optional in-house private chef service",
      "Dual-band 300 Mbps mesh optical Wi-Fi across all suites and patio spaces",
      "100% generator power backup and 24/7 guarded residential gatehouse",
      "Minutes to Yashobhoomi IICC convention halls, Diplomatic Enclave II & DDA Golf Course"
    ],
    roomBreakdown: [
      { title: "Royal Master Suite 1", details: "King Bed, Balcony Sliding Doors, Italian Marble Ensuite Bath with Soaking Tub, Walk-in Dressing Area" },
      { title: "Executive Garden Suite 2", details: "King Bed, French Windows overlooking Green Foliage, Ensuite Bath with Rain Shower, Work Desk" },
      { title: "Courtyard Bedroom Suite 3", details: "King Bed, Quiet Rear Balcony, Ensuite Bath, Large Wardrobes, Reading Lamps, Air Purifier" },
      { title: "Grand Banquet Living & Dining", details: "Floor-to-Ceiling Windows, 8-Seater Solid Wood Dining Table, 75-inch 4K Cinema Display, Velvet Sofas" },
      { title: "Chef Grade Island Kitchen", details: "Commercial Island Counter, Chimney, 4-Burner Hob, Oven, Double Refrigerator, Washing Machine, Utility Balcony" }
    ],
    images: [
      { id: 1, src: "/assets/images/verde/verde-02.jpg", thumb: "/assets/images/verde/thumbs/verde-02-thumb.jpg", title: "Palatial Living Lounge with High Ceilings & Green Garden Vistas", category: "living", isFeatured: true },
      { id: 2, src: "/assets/images/verde/verde-07.jpg", thumb: "/assets/images/verde/thumbs/verde-07-thumb.jpg", title: "Chef Grade Island Kitchen with Commercial Appliances & Induction Hob", category: "kitchen", isFeatured: true },
      { id: 3, src: "/assets/images/verde/verde-12.jpg", thumb: "/assets/images/verde/thumbs/verde-12-thumb.jpg", title: "Executive Garden Suite with King Size Bed & Warm Ambient Lighting", category: "bedrooms", isFeatured: true },
      { id: 4, src: "/assets/images/verde/verde-08.jpg", thumb: "/assets/images/verde/thumbs/verde-08-thumb.jpg", title: "Poolside Royal Suite 1 with French Glass Doors", category: "bedrooms", isFeatured: true },
      { id: 5, src: "/assets/images/verde/verde-06.jpg", thumb: "/assets/images/verde/thumbs/verde-06-thumb.jpg", title: "Grand Banquet Dining Area for 8-12 Guests", category: "kitchen", isFeatured: true },
      { id: 6, src: "/assets/images/verde/verde-04.jpg", thumb: "/assets/images/verde/thumbs/verde-04-thumb.jpg", title: "Alfresco Gazebo Dining & Evening Patio Lawn", category: "outdoor", isFeatured: true },
      { id: 7, src: "/assets/images/verde/verde-01.jpg", thumb: "/assets/images/verde/thumbs/verde-01-thumb.jpg", title: "Verde Private Residence Facade & Landscaped Garden Grounds", category: "outdoor", isFeatured: false },
      { id: 8, src: "/assets/images/verde/verde-03.jpg", thumb: "/assets/images/verde/thumbs/verde-03-thumb.jpg", title: "Formal Reception Lounge with Velvet Sofas", category: "living", isFeatured: false },
      { id: 9, src: "/assets/images/verde/verde-09.jpg", thumb: "/assets/images/verde/thumbs/verde-09-thumb.jpg", title: "Courtyard Bedroom Suite 3 with Garden Accents", category: "bedrooms", isFeatured: false },
      { id: 10, src: "/assets/images/verde/verde-15.jpg", thumb: "/assets/images/verde/thumbs/verde-15-thumb.jpg", title: "Spa Bathroom with Deep Soaking Tub & Rain Shower", category: "baths", isFeatured: false },
      { id: 11, src: "/assets/images/verde/verde-16.jpg", thumb: "/assets/images/verde/thumbs/verde-16-thumb.jpg", title: "Double Vanity Marble Ensuite Bathroom", category: "baths", isFeatured: false },
      { id: 12, src: "/assets/images/verde/verde-19.jpg", thumb: "/assets/images/verde/thumbs/verde-19-thumb.jpg", title: "Rooftop Gazebo & Panoramic Foliage Vista", category: "outdoor", isFeatured: false }
    ]
  }
];
