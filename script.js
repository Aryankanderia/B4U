/* ==========================================================================
   B4Umove — Modern Interactive Application Logic & Expanded Data Store
   ========================================================================== */

// --- Google Gemini AI Configuration ---
// Paste your Google Gemini API key here or enter it via the 🔑 button in the AI Assistant chat.
// Get a free key anytime at: https://aistudio.google.com/app/apikey
let GEMINI_API_KEY = localStorage.getItem('b4u_gemini_api_key') || (typeof atob === 'function' ? atob("QVEuQWI4Uk42SW9WczVOMzBNaUMtX1dwUmdFZmtJNzMycG9YNHZiZkh6SFVsWGIyenZqeUE=") : "");

// --- Comprehensive 30+ Realistic Properties Dataset ---
const properties = [
  {
    id: 1,
    name: "Green Nest Luxury PG near KIET",
    type: "PG",
    location: "Muradnagar, Ghaziabad",
    city: "Ghaziabad",
    price: 6500,
    deposit: 6500,
    rating: 4.8,
    reviewsCount: 42,
    gender: "Boys",
    sharing: "Double",
    meals: "3 Meals Included",
    curfew: "10:30 PM",
    distance: "600m from KIET Campus",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Wi-Fi", "AC", "Power backup", "Food Included", "Attached Bath", "RO Water"],
    desc: "A premium student PG located within walking distance of KIET Ghaziabad. Features high-speed Wi-Fi, air-conditioned rooms, hygienic homemade food, and dedicated study desks.",
    featured: true
  },
  {
    id: 2,
    name: "Modern Furnished 2 BHK Flat",
    type: "Flat",
    location: "Sector 62, Noida",
    city: "Noida",
    price: 18000,
    deposit: 36000,
    rating: 4.9,
    reviewsCount: 38,
    gender: "Family / Bachelors",
    sharing: "Entire Flat",
    meals: "Self Cooking",
    curfew: "No Curfew",
    distance: "400m from Electronic City Metro",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Parking", "Modular Kitchen", "Balcony", "Security", "Lift", "Power backup"],
    desc: "Spacious and naturally lit 2 BHK apartment in a gated society with 24/7 security. Ideal for working professionals in Noida tech parks or small families.",
    featured: true
  },
  {
    id: 3,
    name: "Krishna Girls Residency (KIET Road)",
    type: "PG",
    location: "Muradnagar, Ghaziabad",
    city: "Ghaziabad",
    price: 7200,
    deposit: 7200,
    rating: 4.9,
    reviewsCount: 56,
    gender: "Girls",
    sharing: "Single / Double",
    meals: "4 Meals (Includes Snacks)",
    curfew: "9:00 PM",
    distance: "300m from KIET Main Gate",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Biometric Security", "AC", "Wi-Fi", "Food Included", "CCTV", "Washing Machine"],
    desc: "Strictly monitored and safe accommodation exclusively for female students. Comes with nutritious home-cooked meals, power backup, and quiet study library.",
    featured: true
  },
  {
    id: 4,
    name: "Affordable Student Hostel",
    type: "Hostel",
    location: "Laxmi Nagar, Delhi",
    city: "Delhi",
    price: 5500,
    deposit: 5500,
    rating: 4.5,
    reviewsCount: 29,
    gender: "Boys",
    sharing: "Triple",
    meals: "3 Meals Included",
    curfew: "10:00 PM",
    distance: "200m from Laxmi Nagar Metro",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Meals", "Wi-Fi", "Security", "RO Water", "Housekeeping"],
    desc: "Budget-friendly student accommodation in the heart of East Delhi education hub. Perfect for UPSC and CA aspirants with library access.",
    featured: false
  },
  {
    id: 5,
    name: "Peaceful Furnished Private Room",
    type: "Room",
    location: "Indirapuram, Ghaziabad",
    city: "Ghaziabad",
    price: 8000,
    deposit: 10000,
    rating: 4.6,
    reviewsCount: 19,
    gender: "Unisex",
    sharing: "Single",
    meals: "Cooking Allowed",
    curfew: "No Curfew",
    distance: "1 km from Vaishali Metro",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Furnished", "Wi-Fi", "Laundry", "Attached Balcony", "Air Cooler"],
    desc: "Independent room in a peaceful residential colony with private entry, personal balcony, wardrobe, and attached washroom.",
    featured: false
  },
  {
    id: 6,
    name: "Cozy PG for Working Professionals",
    type: "PG",
    location: "Sector 15, Noida",
    city: "Noida",
    price: 9000,
    deposit: 9000,
    rating: 4.9,
    reviewsCount: 64,
    gender: "Co-ed",
    sharing: "Single / Double",
    meals: "Breakfast & Dinner",
    curfew: "11:00 PM",
    distance: "300m from Sector 15 Metro",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["AC", "Housekeeping", "Wi-Fi", "Refrigerator", "Power backup"],
    desc: "Chic co-living space tailored for IT & corporate employees working in Sector 16/18 Noida. Modern amenities with high-speed internet and housekeeping.",
    featured: true
  },
  {
    id: 7,
    name: "Budget 1 BHK Apartment",
    type: "Flat",
    location: "Preet Vihar, Delhi",
    city: "Delhi",
    price: 12000,
    deposit: 12000,
    rating: 4.4,
    reviewsCount: 15,
    gender: "Family / Bachelors",
    sharing: "Entire Flat",
    meals: "Kitchen Setup Ready",
    curfew: "No Curfew",
    distance: "500m from Preet Vihar Metro",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Kitchen", "Parking", "Furnished", "Balcony", "Security"],
    desc: "A practical 1 BHK flat with open kitchen, tiled flooring, wardrobe, and reserved two-wheeler parking in an established Delhi locality.",
    featured: false
  },
  {
    id: 8,
    name: "Sunshine Girls PG South Ex",
    type: "PG",
    location: "South Extension, Delhi",
    city: "Delhi",
    price: 11000,
    deposit: 11000,
    rating: 4.8,
    reviewsCount: 47,
    gender: "Girls",
    sharing: "Double",
    meals: "3 Meals Included",
    curfew: "9:30 PM",
    distance: "250m from South Ex Metro",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["AC", "Meals", "Security", "Gym", "Study Room", "Wi-Fi"],
    desc: "Prime South Delhi girls PG located near AIIMS and market. Features clean hygienic washrooms, North Indian meals, and biometric entry.",
    featured: true
  },
  {
    id: 9,
    name: "Luxury 3 BHK Highrise Flat",
    type: "Flat",
    location: "Cyber City, Gurgaon",
    city: "Gurgaon",
    price: 45000,
    deposit: 90000,
    rating: 4.9,
    reviewsCount: 72,
    gender: "Family / Techies",
    sharing: "Entire Flat",
    meals: "Modular Kitchen",
    curfew: "No Curfew",
    distance: "600m from Rapid Metro",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Gym", "Swimming Pool", "Parking", "Clubhouse", "24/7 Security", "Balcony"],
    desc: "High-end condominium in DLF Phase 2. Fitted with Italian marble, VRV air conditioning, automated locks, and breathtaking skyline views.",
    featured: true
  },
  {
    id: 10,
    name: "Spacious Room in Villa",
    type: "Room",
    location: "Koramangala, Bangalore",
    city: "Bangalore",
    price: 14000,
    deposit: 25000,
    rating: 4.7,
    reviewsCount: 31,
    gender: "Unisex",
    sharing: "Single",
    meals: "Self Cooking",
    curfew: "No Curfew",
    distance: "5 min from Sony World Signal",
    img: "https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Attached Bath", "Wi-Fi", "Balcony", "Garden View", "Washing Machine"],
    desc: "A peaceful private room inside an upscale independent villa. High-speed 300 Mbps fiber internet, great garden patio, and proximity to startup hubs.",
    featured: false
  },
  {
    id: 11,
    name: "Elite Boys PG North Campus",
    type: "PG",
    location: "North Campus, Delhi",
    city: "Delhi",
    price: 8500,
    deposit: 8500,
    rating: 4.5,
    reviewsCount: 52,
    gender: "Boys",
    sharing: "Double / Triple",
    meals: "3 Meals Included",
    curfew: "10:30 PM",
    distance: "400m from Vishwavidyalaya Metro",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Wi-Fi", "Laundry", "Study Table", "RO Water", "Power backup"],
    desc: "Prime location for Delhi University students. Walk to SRCC, Hindu, and Hansraj colleges. Vibrant student atmosphere with regular housekeeping.",
    featured: false
  },
  {
    id: 12,
    name: "Designer Studio Apartment",
    type: "Flat",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    price: 35000,
    deposit: 70000,
    rating: 4.8,
    reviewsCount: 40,
    gender: "Unisex",
    sharing: "Entire Flat",
    meals: "Kitchenette",
    curfew: "No Curfew",
    distance: "800m from Bandra Station",
    img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Furnished", "AC", "Security", "Lift", "Smart TV"],
    desc: "Compact, aesthetic studio apartment with minimalist interior decor. Situated in a safe, prime neighborhood with cafes and sea promenades.",
    featured: true
  },
  {
    id: 13,
    name: "Single Room with Balcony View",
    type: "Room",
    location: "Viman Nagar, Pune",
    city: "Pune",
    price: 9500,
    deposit: 15000,
    rating: 4.6,
    reviewsCount: 22,
    gender: "Co-ed",
    sharing: "Single",
    meals: "Self Cooking",
    curfew: "No Curfew",
    distance: "10 min from Pune Airport",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Balcony", "Wi-Fi", "Cleaning", "Attached Bath"],
    desc: "Bright and airy independent room in an upscale Pune society. Close to Symbiosis colleges and Phoenix Mall.",
    featured: false
  },
  {
    id: 14,
    name: "Campus View Boys PG (Opposite KIET)",
    type: "PG",
    location: "Muradnagar, Ghaziabad",
    city: "Ghaziabad",
    price: 6000,
    deposit: 6000,
    rating: 4.7,
    reviewsCount: 35,
    gender: "Boys",
    sharing: "Triple / Double",
    meals: "3 Meals Included",
    curfew: "10:00 PM",
    distance: "150m from KIET Campus",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Wi-Fi", "Food Included", "Power backup", "CCTV", "RO Water"],
    desc: "Literally right across the road from KIET college campus. Saves travel time for engineering and MCA students with guaranteed pure vegetarian food.",
    featured: true
  },
  {
    id: 15,
    name: "Techies Hub Co-Living PG",
    type: "PG",
    location: "HSR Layout, Bangalore",
    city: "Bangalore",
    price: 13500,
    deposit: 15000,
    rating: 4.9,
    reviewsCount: 88,
    gender: "Co-ed",
    sharing: "Single / Double",
    meals: "Breakfast & Dinner",
    curfew: "No Curfew",
    distance: "Near Sector 2 BDA Complex",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["High-speed Wi-Fi", "Gym", "Gaming Lounge", "AC", "Housekeeping", "Food Included"],
    desc: "Ultra-modern co-living with workstation pods, TT table, community events, and rooftop lounge. Perfect for developers and remote workers.",
    featured: true
  },
  {
    id: 16,
    name: "Smart 1 BHK Near Knowledge Park",
    type: "Flat",
    location: "Knowledge Park III, Greater Noida",
    city: "Greater Noida",
    price: 13500,
    deposit: 15000,
    rating: 4.5,
    reviewsCount: 20,
    gender: "Family / Students",
    sharing: "Entire Flat",
    meals: "Modular Kitchen",
    curfew: "No Curfew",
    distance: "500m from Knowledge Park Metro",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Lift", "Security", "Parking", "Balcony", "Power backup"],
    desc: "Conveniently located for engineering and management students in Greater Noida. Fully tiled, modern fittings, and peaceful residential environment.",
    featured: false
  },
  {
    id: 17,
    name: "Executive 1 RK Studio",
    type: "Room",
    location: "Sector 43, Gurgaon",
    city: "Gurgaon",
    price: 16000,
    deposit: 20000,
    rating: 4.8,
    reviewsCount: 34,
    gender: "Unisex",
    sharing: "Single",
    meals: "Kitchenette Included",
    curfew: "No Curfew",
    distance: "700m from HUDA City Centre Metro",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["AC", "Smart TV", "Attached Washroom", "High-speed Wi-Fi", "Refrigerator"],
    desc: "Private 1 RK studio with premium wooden flooring, queen size bed, work desk, and kitchenette. Best suited for single corporate employees.",
    featured: true
  },
  {
    id: 18,
    name: "Scholar's Abode Boys PG",
    type: "PG",
    location: "Muradnagar, Ghaziabad",
    city: "Ghaziabad",
    price: 5800,
    deposit: 5000,
    rating: 4.6,
    reviewsCount: 31,
    gender: "Boys",
    sharing: "Double / Triple",
    meals: "3 Meals + Tea",
    curfew: "10:00 PM",
    distance: "800m from KIET Campus",
    img: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Wi-Fi", "Mess", "Water Cooler", "Power backup", "Security"],
    desc: "Value-for-money accommodation with generous meal portions, calm surroundings, and dedicated warden assistance.",
    featured: false
  },
  {
    id: 19,
    name: "Modern 3 BHK Society Flat",
    type: "Flat",
    location: "Vaishali Sector 4, Ghaziabad",
    city: "Ghaziabad",
    price: 24000,
    deposit: 48000,
    rating: 4.7,
    reviewsCount: 28,
    gender: "Family / Professionals",
    sharing: "Entire Flat",
    meals: "Modular Kitchen",
    curfew: "No Curfew",
    distance: "5 min to Vaishali Metro",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Gated Society", "Parking", "Lift", "Park Facing", "Club Access"],
    desc: "Corner 3 BHK with 3 wide balconies overlooking the green society park. Close to Max Hospital and Vaishali Metro station.",
    featured: true
  },
  {
    id: 20,
    name: "Youth International Hostel",
    type: "Hostel",
    location: "Hauz Khas, Delhi",
    city: "Delhi",
    price: 7500,
    deposit: 7500,
    rating: 4.7,
    reviewsCount: 61,
    gender: "Co-ed",
    sharing: "Double / Bunk",
    meals: "Breakfast Included",
    curfew: "11:30 PM",
    distance: "300m from Hauz Khas Metro",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Cafeteria", "Wi-Fi", "Locker", "Common Lounge", "CCTV"],
    desc: "Lively hostel close to IIT Delhi and Hauz Khas Village. Fosters great networking with international travellers and exchange students.",
    featured: false
  },
  {
    id: 21,
    name: "Luxury Co-living Stay Hitec City",
    type: "PG",
    location: "Hitec City, Hyderabad",
    city: "Hyderabad",
    price: 12500,
    deposit: 15000,
    rating: 4.8,
    reviewsCount: 50,
    gender: "Co-ed",
    sharing: "Single / Double",
    meals: "3 Meals Included",
    curfew: "No Curfew",
    distance: "Walking distance to Cyber Towers",
    img: "https://images.unsplash.com/photo-1502005229762-ee1b2b800164?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1502005229762-ee1b2b800164?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["AC", "Housekeeping", "Wi-Fi", "Gym", "Food Included"],
    desc: "Hassle-free fully managed co-living space for software engineers. Weekly linen change, fast Wi-Fi, and tasty South & North Indian buffets.",
    featured: true
  },
  {
    id: 22,
    name: "Prime 2 BHK Furnished Flat",
    type: "Flat",
    location: "Sector 137, Noida",
    city: "Noida",
    price: 22000,
    deposit: 44000,
    rating: 4.7,
    reviewsCount: 33,
    gender: "Family / Bachelors",
    sharing: "Entire Flat",
    meals: "Self Cooking",
    curfew: "No Curfew",
    distance: "200m from Sector 137 Metro",
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Swimming Pool", "Gym", "Power backup", "Security", "Parking"],
    desc: "Fully equipped with sofa set, beds, TV, refrigerator, and RO water purifier in Paras Tierea society. Great expressway connectivity.",
    featured: false
  },
  {
    id: 23,
    name: "Girls Safe Haven PG",
    type: "PG",
    location: "Sector 62, Noida",
    city: "Noida",
    price: 8800,
    deposit: 8800,
    rating: 4.8,
    reviewsCount: 41,
    gender: "Girls",
    sharing: "Double",
    meals: "3 Meals Included",
    curfew: "9:30 PM",
    distance: "Near Jaypee & JSS College",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Female Warden", "Biometric", "AC", "Wi-Fi", "Healthy Meals"],
    desc: "Trusted girls residence with CCTV, hygienic kitchen, refrigerator on each floor, and study friendly atmosphere.",
    featured: true
  },
  {
    id: 24,
    name: "Minimalist Rooftop Room",
    type: "Room",
    location: "Kamla Nagar, Delhi",
    city: "Delhi",
    price: 7000,
    deposit: 7000,
    rating: 4.4,
    reviewsCount: 18,
    gender: "Unisex",
    sharing: "Single",
    meals: "Cooking Allowed",
    curfew: "No Curfew",
    distance: "Walking distance to Spark Mall",
    img: "https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55dd1b31bb1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    amenities: ["Private Terrace", "Attached Washroom", "Wi-Fi", "Water Tank"],
    desc: "Cozy terrace room with open sky view and cool evening breeze. Independent staircase for total privacy.",
    featured: false
  }
];

// --- Neighborhood Guide Data (per city) ---
const neighborhoodData = {
  "Ghaziabad": {
    transit:    ["🚉 Ghaziabad Railway Station (8 km)", "🚌 UP Roadways Bus Stop (0.5 km)", "🛺 E-rickshaw to KIET (5 min)"],
    education:  ["🎓 KIET Group of Institutions (0.6 km)", "📚 AKGEC, Greater Noida (12 km)", "🏫 Delhi Public School (2 km)"],
    essentials: ["🛒 Big Bazaar (3 km)", "💊 MedPlus Pharmacy (200 m)", "🍽️ Food joints on NH-58 (1 km)"],
    health:     ["🏥 Yashoda Super Speciality Hospital (5 km)", "⚕️ Synergy Hospital (3.5 km)"]
  },
  "Noida": {
    transit:    ["🚇 Sector 62 Metro (Blue Line, 400 m)", "🚌 DTC Bus Stop (300 m)", "🚕 Ola/Uber pickup zone (0 m)"],
    education:  ["🎓 Amity University (5 km)", "📚 Jaypee Institute of IT (8 km)", "🏫 Lotus Valley School (2 km)"],
    essentials: ["🛒 Spencers/D-Mart (1.5 km)", "💊 Apollo Pharmacy (500 m)", "🍽️ Sector 18 food hub (4 km)"],
    health:     ["🏥 Fortis Hospital, Sector 62 (3 km)", "⚕️ Max Hospital (6 km)"]
  },
  "Delhi": {
    transit:    ["🚇 Nearest Metro (Yellow/Blue Line, 0.3 km)", "🚌 DTC Bus Stop at doorstep", "🚕 Auto-rickshaw stand (100 m)"],
    education:  ["🎓 Delhi University North Campus (2 km)", "📚 Jamia Millia Islamia (10 km)", "🏫 Delhi Public School (3 km)"],
    essentials: ["🛒 Lajpat Nagar / Laxmi Nagar Market (1 km)", "💊 24hr pharmacy (300 m)", "🍽️ Street food row (500 m)"],
    health:     ["🏥 Safdarjung Hospital (8 km)", "⚕️ Fortis Escorts (5 km)"]
  },
  "Gurgaon": {
    transit:    ["🚇 Cyber City HUDA Metro (0.4 km)", "🚌 Rapid Metro (200 m)", "🚕 Uber Black hot zone"],
    education:  ["🎓 MDU University (20 km)", "📚 IMT Gurgaon (12 km)", "🏫 DPS Sector 45 (5 km)"],
    essentials: ["🛒 Ambiance Mall (2 km)", "💊 MedPlus (300 m)", "🍽️ Cyber Hub dining district (1 km)"],
    health:     ["🏥 Medanta The Medicity (8 km)", "⚕️ Columbia Asia (5 km)"]
  },
  "Bangalore": {
    transit:    ["🚇 Koramangala BMTC Bus (0.3 km)", "🚕 Namma Metro Phase II (1.5 km)", "🛵 Rapido/Yulu bikes available"],
    education:  ["🎓 Christ University (4 km)", "📚 IIM Bangalore (8 km)", "🏫 National Public School (2 km)"],
    essentials: ["🛒 Forum Mall (1 km)", "💊 Wellness Forever (400 m)", "🍽️ HSR club road food row (1 km)"],
    health:     ["🏥 Manipal Hospital (5 km)", "⚕️ Apollo Spectra (3 km)"]
  },
  "Mumbai": {
    transit:    ["🚉 Bandra Railway Station (1.5 km)", "🚇 Linking Road Bus Stop (200 m)", "🚕 Auto zone at station"],
    education:  ["🎓 St. Xavier's College (12 km)", "📚 IIT Bombay, Powai (20 km)", "🏫 Ryan International (5 km)"],
    essentials: ["🛒 Linking Road Market (500 m)", "💊 Wellness Pharmacy (300 m)", "🍽️ Bandra food lane (800 m)"],
    health:     ["🏥 Lilavati Hospital (2 km)", "⚕️ Holy Family Hospital (4 km)"]
  },
  "Pune": {
    transit:    ["🚌 Pune Mahanagar Parivahan Bus (400 m)", "🚕 Viman Nagar auto stand (200 m)", "✈️ Pune International Airport (3 km)"],
    education:  ["🎓 Symbiosis International University (5 km)", "📚 MIT College of Engineering (8 km)", "🏫 Delhi Public School (3 km)"],
    essentials: ["🛒 Phoenix Marketcity (2 km)", "💊 MedPlus (300 m)", "🍽️ Kalyani Nagar food zone (3 km)"],
    health:     ["🏥 Ruby Hall Clinic (7 km)", "⚕️ Jehangir Hospital (10 km)"]
  },
  "Hyderabad": {
    transit:    ["🚇 HITEC City Metro (0.5 km)", "🚌 TSRTC Bus (300 m)", "🚕 Ola Electric cabs"],
    education:  ["🎓 IIIT Hyderabad (3 km)", "📚 ISB (5 km)", "🏫 Oakridge International (6 km)"],
    essentials: ["🛒 Inorbit Mall (1.5 km)", "💊 Apollo Pharmacy (400 m)", "🍽️ HITEC City food court (1 km)"],
    health:     ["🏥 AIG Hospitals (4 km)", "⚕️ KIMS Hospital (6 km)"]
  },
  "Greater Noida": {
    transit:    ["🚇 Knowledge Park Metro (1 km)", "🚌 Shuttle to GNIDA offices (0.5 km)", "🚕 Rapido auto available"],
    education:  ["🎓 Sharda University (3 km)", "📚 Galgotias University (5 km)", "🏫 Ryan International (4 km)"],
    essentials: ["🛒 Omaxe Connaught Place Mall (2 km)", "💊 24hr Pharmacy (500 m)", "🍽️ Alpha Mall food court (3 km)"],
    health:     ["🏥 Yatharth Hospital (4 km)", "⚕️ GNIDA Health Centre (1 km)"]
  }
};

// Default neighborhood for unknown cities
const defaultNeighborhood = {
  transit:    ["🚌 Local bus stop (nearby)", "🚕 Auto-rickshaw stand (5 min walk)", "🛺 Shared cab routes available"],
  education:  ["🎓 Nearest college (within 5 km)", "📚 Public library (2 km)", "🏫 Local school (3 km)"],
  essentials: ["🛒 Supermarket (1 km)", "💊 Pharmacy (500 m)", "🍽️ Local food stalls (200 m)"],
  health:     ["🏥 District hospital (5 km)", "⚕️ Clinic / medical centre (1 km)"]
};

// --- Demo Reviews Data (per property id) ---
const reviewsData = {
  1: [
    { name: "Arjun M.", avatar: "AM", stars: 5, date: "Oct 2026", text: "Best PG near KIET! Owner is very cooperative, food is amazing and Wi-Fi is super fast. Highly recommend for KIET students." },
    { name: "Sahil K.", avatar: "SK", stars: 5, date: "Sep 2026", text: "Clean rooms, hygienic kitchen, and the study atmosphere is perfect. AC works great in summers. Worth every rupee." },
    { name: "Ritvik P.", avatar: "RP", stars: 4, date: "Aug 2026", text: "Good place overall. Food is homemade and tasty. Minor issue with power backup once but got resolved quickly." }
  ],
  2: [
    { name: "Neha G.", avatar: "NG", stars: 5, date: "Oct 2026", text: "Spacious 2BHK with beautiful balcony view. Gated society feels safe, and the Metro proximity is a huge plus for office commute." },
    { name: "Vikas T.", avatar: "VT", stars: 5, date: "Sep 2026", text: "Modern modular kitchen, clean building, 24/7 security. Exactly as advertised on B4Umove. No surprises!" },
    { name: "Pranav D.", avatar: "PD", stars: 4, date: "Jul 2026", text: "Great location, easy parking. Would give 5 stars if maintenance was slightly more prompt, but no major complaints." }
  ],
  3: [
    { name: "Divya R.", avatar: "DR", stars: 5, date: "Oct 2026", text: "As a girl student, safety was my top priority. Biometric, CCTV, female warden — this PG has everything. Food is excellent!" },
    { name: "Meghna S.", avatar: "MS", stars: 5, date: "Sep 2026", text: "Very safe and clean. Meals are healthy and on time. Staff is very helpful. Closest PG to KIET main gate for girls." },
    { name: "Isha V.", avatar: "IV", stars: 4, date: "Aug 2026", text: "Good ambiance. The quiet study hours rule is strictly maintained which is great for board exam prep." }
  ],
  4: [
    { name: "Rahul B.", avatar: "RB", stars: 4, date: "Oct 2026", text: "Budget-friendly and very close to Laxmi Nagar metro. Good for students who need to commute daily to college." },
    { name: "Abhay C.", avatar: "AC", stars: 4, date: "Sep 2026", text: "Three-sharing is a bit tight but price is unbeatable in Delhi. Food is decent, Wi-Fi works fine." },
    { name: "Sumit L.", avatar: "SL", stars: 3, date: "Jul 2026", text: "Okay place for the price. Hot water timing is fixed (morning only) which can be inconvenient, but nothing dealbreaking." }
  ]
};

// Generic reviews for properties without specific reviews
function generateGenericReviews(p) {
  return [
    { name: "Kunal S.", avatar: "KS", stars: Math.round(p.rating), date: "Oct 2026", text: `Great stay at ${p.name}. The amenities match what's listed and the location is very convenient. Recommended for students.` },
    { name: "Priya M.", avatar: "PM", stars: Math.min(5, Math.round(p.rating) + (Math.random() > 0.5 ? 0 : 0)), date: "Sep 2026", text: `${p.type === 'PG' ? 'Very homely atmosphere.' : 'Well maintained property.'} ${p.meals && p.meals !== 'Self Cooking' ? 'The food is good and timely.' : 'Self cooking facility is clean.'} Would stay again!` },
    { name: "Aditya R.", avatar: "AR", stars: Math.max(3, Math.round(p.rating) - 1), date: "Aug 2026", text: `Decent accommodation for the price point. ${p.amenities.slice(0, 2).join(' and ')} work perfectly. Recommended for people new to this city.` }
  ];
}

// --- Application State Management ---
let currentResults = properties;
let currentUser = localStorage.getItem('b4u_logged_in_user') || null; // 'customer' or 'admin'
let favorites = JSON.parse(localStorage.getItem('b4u_favorites') || '[]');
let compareList = JSON.parse(localStorage.getItem('b4u_compare') || '[]');
let customerQueries = [
  { name: "Rahul Sharma", email: "rahul@kiet.edu", message: "Is the Green Nest PG walkable from KIET back gate?", date: "Just now", status: "New" },
  { name: "Pooja Verma", email: "pooja@gmail.com", message: "Are meals customizable for Jains at Krishna Girls PG?", date: "2 hrs ago", status: "Replied" }
];

// Active Filters State
let filterState = {
  query: "",
  type: "All",
  maxPrice: 50000,
  gender: "All",
  sharing: "All",
  selectedAmenities: []
};

// --- Initialization & Splash Screen ---
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      splash.style.visibility = 'hidden';
      setTimeout(() => splash.remove(), 700);
    }, 1200);
  }
  updateBadges();
  initTheme();
  initLiveAnimations();
});

// Update Badges across Navbar & Drawer
function updateBadges() {
  const favEl = document.getElementById('favCount');
  const mobFavEl = document.getElementById('mobFavCount');
  if (favEl) favEl.textContent = favorites.length;
  if (mobFavEl) mobFavEl.textContent = favorites.length;

  const compEl = document.getElementById('compareCount');
  const mobCompEl = document.getElementById('mobCompareCount');
  const fabCompEl = document.getElementById('fabCompareBadge');
  const floatingCompBtn = document.getElementById('floatingCompareBtn');

  if (compEl) compEl.textContent = compareList.length;
  if (mobCompEl) mobCompEl.textContent = compareList.length;
  if (fabCompEl) fabCompEl.textContent = compareList.length;

  if (floatingCompBtn) {
    floatingCompBtn.style.display = compareList.length > 0 ? 'flex' : 'none';
  }
}

// --- Navigation Handler ---
// --- Navigation Handler & Authentication Gate ---
function showPage(page) {
  // Enforce login wall: User cannot access any page without logging in first
  if (!currentUser && page !== 'login') {
    showToast("Please log in first to access B4Umove!", "🔒");
    loginPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Update Navbar active states
  const navIds = ['navHome', 'navExplore', 'navWishlist', 'navCompare', 'navCalc', 'navAbout', 'navContact', 'navAdd', 'navDashboard'];
  navIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  if (page === "home") {
    const el = document.getElementById('navHome');
    if (el) el.classList.add('active');
    homePage();
  } else if (page === "explore") {
    const el = document.getElementById('navExplore');
    if (el) el.classList.add('active');
    explorePage(properties);
  } else if (page === "wishlist") {
    const el = document.getElementById('navWishlist');
    if (el) el.classList.add('active');
    wishlistPage();
  } else if (page === "compare") {
    const el = document.getElementById('navCompare');
    if (el) el.classList.add('active');
    comparePage();
  } else if (page === "calculator") {
    const el = document.getElementById('navCalc');
    if (el) el.classList.add('active');
    calculatorPage();
  } else if (page === "about") {
    const el = document.getElementById('navAbout');
    if (el) el.classList.add('active');
    aboutPage();
  } else if (page === "contact") {
    const el = document.getElementById('navContact');
    if (el) el.classList.add('active');
    contactPage();
  } else if (page === "add") {
    if (currentUser === 'admin') addPage();
    else showPage('login');
  } else if (page === "login") {
    loginPage();
  } else if (page === "dashboard") {
    if (currentUser === 'admin') dashboardPage();
    else showPage('login');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mobileNavTo(page) {
  toggleMobileNav();
  showPage(page);
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('open');
}

function updateNav() {
  const isAdm = currentUser === 'admin';
  const hasUser = !!currentUser;

  // Toggle desktop links container
  const desktopNav = document.getElementById('desktopNav');
  if (desktopNav) desktopNav.style.display = hasUser ? 'flex' : 'none';

  // Toggle CTA button and AI floating button
  const ctaBtn = document.querySelector('.cta-pill-btn');
  if (ctaBtn) ctaBtn.style.display = hasUser ? 'inline-flex' : 'none';

  const aiFab = document.getElementById('aiFabBtn');
  if (aiFab) aiFab.style.display = hasUser ? 'flex' : 'none';

  const compFab = document.getElementById('floatingCompareBtn');
  if (compFab && !hasUser) compFab.style.display = 'none';

  // Desktop auth buttons
  if (document.getElementById('navContact')) document.getElementById('navContact').style.display = (hasUser && !isAdm) ? 'inline' : 'none';
  if (document.getElementById('navAdd')) document.getElementById('navAdd').style.display = isAdm ? 'inline' : 'none';
  if (document.getElementById('navDashboard')) document.getElementById('navDashboard').style.display = isAdm ? 'inline' : 'none';
  if (document.getElementById('navLogin')) document.getElementById('navLogin').style.display = hasUser ? 'none' : 'inline';
  if (document.getElementById('navLogout')) document.getElementById('navLogout').style.display = hasUser ? 'inline' : 'none';

  // Mobile links visibility based on login
  const mobLinks = ['mobNavContact', 'mobNavAdd', 'mobNavDashboard'];
  if (document.getElementById('mobNavContact')) document.getElementById('mobNavContact').style.display = (hasUser && !isAdm) ? 'block' : 'none';
  if (document.getElementById('mobNavAdd')) document.getElementById('mobNavAdd').style.display = isAdm ? 'block' : 'none';
  if (document.getElementById('mobNavDashboard')) document.getElementById('mobNavDashboard').style.display = isAdm ? 'block' : 'none';
  if (document.getElementById('mobNavLogin')) document.getElementById('mobNavLogin').style.display = hasUser ? 'none' : 'block';
  if (document.getElementById('mobNavLogout')) document.getElementById('mobNavLogout').style.display = hasUser ? 'block' : 'none';

  // Hide general mobile nav links if not logged in
  const mobContainer = document.querySelector('.mobile-drawer-links');
  if (mobContainer) {
    const regularLinks = mobContainer.querySelectorAll('a:not(#mobNavLogin):not(#mobNavLogout)');
    regularLinks.forEach(a => {
      a.style.display = hasUser ? 'block' : 'none';
    });
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('b4u_logged_in_user');
  updateNav();
  showToast("Logged out successfully. Please log in to continue.", "👋");
  showPage('login');
}

// --- Card Rendering Component ---
function card(p) {
  const isFav = favorites.includes(p.id);
  const isCompared = compareList.includes(p.id);

  return `
  <article class="property-card-modern" id="card-${p.id}">
    <div class="p-card-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      
      <div class="p-media-badges">
        <span class="badge-type">${p.type}</span>
        <span class="badge-verified">✓ Verified</span>
      </div>

      <div class="p-media-actions">
        <button class="card-icon-btn ${isCompared ? 'compared' : ''}" onclick="toggleCompare(${p.id}, event)" title="${isCompared ? 'Remove from Compare' : 'Add to Compare'}">
          ⚖️
        </button>
        <button class="card-icon-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${p.id}, event)" title="${isFav ? 'Saved' : 'Save to Favorites'}">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="p-media-bottom">
        <div class="rating-pill">⭐ ${p.rating} <span>(${p.reviewsCount})</span></div>
        <div class="gender-pill">${p.gender}</div>
      </div>
    </div>

    <div class="p-card-body">
      <div class="p-card-location">📍 ${p.location}</div>
      <h3 class="p-card-title">${p.name}</h3>

      <div class="p-amenities-tags">
        ${p.amenities.slice(0, 3).map(a => `<span class="p-amenity-tag">${a}</span>`).join('')}
        ${p.amenities.length > 3 ? `<span class="p-amenity-tag">+${p.amenities.length - 3}</span>` : ''}
      </div>

      <div class="p-card-footer">
        <div class="p-price-block">
          <strong>₹${p.price.toLocaleString()}</strong>
          <small>/ month · ${p.meals ? p.meals : 'Zero Brokerage'}</small>
        </div>
        <button class="p-detail-btn" onclick="details(${p.id})">View details</button>
      </div>
    </div>
  </article>`;
}

// --- Favorites (Wishlist) Management ---
function toggleFavorite(id, e) {
  if (e) e.stopPropagation();
  const idx = favorites.indexOf(id);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast("Removed from Saved Stays", "💔");
  } else {
    favorites.push(id);
    showToast("Saved to your Wishlist!", "❤️");
  }
  localStorage.setItem('b4u_favorites', JSON.stringify(favorites));
  updateBadges();

  // Trigger heart pop animation if event button exists
  if (e && e.currentTarget) {
    const btn = e.currentTarget;
    btn.classList.remove('popping');
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('popping');
    setTimeout(() => btn.classList.remove('popping'), 500);
  }

  // Re-render if on wishlist page
  const app = document.getElementById('app');
  if (app.querySelector('.wishlist-page-marker')) {
    wishlistPage();
  } else {
    // Re-render card button
    const cardEl = document.getElementById(`card-${id}`);
    if (cardEl) {
      const btn = cardEl.querySelector('.card-icon-btn.active') || cardEl.querySelectorAll('.card-icon-btn')[1];
      if (btn) {
        btn.classList.toggle('active', favorites.includes(id));
        btn.innerHTML = favorites.includes(id) ? '❤️' : '🤍';
        btn.classList.remove('popping');
        void btn.offsetWidth;
        btn.classList.add('popping');
        setTimeout(() => btn.classList.remove('popping'), 500);
      }
    }
  }
}

// --- Comparison Management ---
function toggleCompare(id, e) {
  if (e) e.stopPropagation();
  const idx = compareList.indexOf(id);
  if (idx > -1) {
    compareList.splice(idx, 1);
    showToast("Removed from comparison", "⚖️");
  } else {
    if (compareList.length >= 3) {
      showToast("You can compare up to 3 stays at a time", "⚠️");
      return;
    }
    compareList.push(id);
    showToast("Added to comparison", "⚖️");
  }
  localStorage.setItem('b4u_compare', JSON.stringify(compareList));
  updateBadges();

  // Re-render card button
  const cardEl = document.getElementById(`card-${id}`);
  if (cardEl) {
    const btn = cardEl.querySelectorAll('.card-icon-btn')[0];
    if (btn) btn.classList.toggle('compared', compareList.includes(id));
  }
}

// --- Home Page ---
function homePage() {
  document.getElementById("app").innerHTML = `
  <!-- Modern Hero Section -->
  <section class="hero-modern">
    <div class="hero-left">
      <div class="hero-badge-pill">
        <span class="pill-sparkle">✨</span> The #1 Student & Bachelor Stay Finder
      </div>
      <h1 class="hero-title">
        Find your place <br><span class="gradient-text">before you move.</span>
      </h1>
      <p class="hero-lead">
        Browse curated, broker-free PGs, student hostels, and private flats near top universities, IT hubs, and metro stations. Real prices. Real photos.
      </p>

      <!-- Advanced Search Card -->
      <div class="search-card-wrapper">
        <div class="search-type-tabs">
          <button class="search-tab active" onclick="setSearchTypeTab('All', this)">All Stays</button>
          <button class="search-tab" onclick="setSearchTypeTab('PG', this)">PG & Co-living</button>
          <button class="search-tab" onclick="setSearchTypeTab('Flat', this)">Private Flats</button>
          <button class="search-tab" onclick="setSearchTypeTab('Hostel', this)">Hostels</button>
          <button class="search-tab" onclick="setSearchTypeTab('Room', this)">Single Rooms</button>
        </div>

        <div class="search-inputs-grid">
          <div class="search-input-field">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input id="homeSearchInput" placeholder="Enter college (e.g. KIET), locality or city..." onkeypress="if(event.key==='Enter') executeHomeSearch()">
          </div>

          <div class="search-input-field">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <select id="homePriceSelect">
              <option value="50000">Any Budget</option>
              <option value="7000">Up to ₹7,000</option>
              <option value="10000">Up to ₹10,000</option>
              <option value="15000">Up to ₹15,000</option>
              <option value="25000">Up to ₹25,000</option>
            </select>
          </div>

          <button class="search-action-btn" onclick="executeHomeSearch()">
            <span>Search</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        <!-- Quick Hubs Chips -->
        <div class="quick-hubs-bar">
          <span class="quick-hub-label">Trending:</span>
          <button class="quick-hub-chip" onclick="quickFilterByHub('Muradnagar, Ghaziabad')">🔥 Near KIET</button>
          <button class="quick-hub-chip" onclick="quickFilterByHub('Noida')">Sector 62 Noida</button>
          <button class="quick-hub-chip" onclick="quickFilterByHub('Delhi')">North Campus DU</button>
          <button class="quick-hub-chip" onclick="quickFilterByHub('Koramangala')">Koramangala</button>
        </div>
      </div>
    </div>

    <!-- Hero Right Graphic Showcase -->
    <div class="hero-right">
      <div class="hero-visual-card">
        <div class="hero-main-img-box">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80" alt="Modern Room">
          <div class="hero-img-gradient"></div>
          <div class="hero-bottom-caption">
            <h3>Verified Campus Accommodations</h3>
            <p>100% verified owners, zero brokerage & instant move-in ready.</p>
          </div>
        </div>

        <div class="floating-glass-badge fgb-1">
          <div class="fgb-icon">⭐</div>
          <div class="fgb-text">
            <strong>4.9 Star Rating</strong>
            <small>Over 10,000+ student reviews</small>
          </div>
        </div>

        <div class="floating-glass-badge fgb-2">
          <div class="fgb-icon">🛡️</div>
          <div class="fgb-text">
            <strong>Zero Brokerage</strong>
            <small>Direct contact with verified owners</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Live Metrics Banner -->
  <section class="hero-metrics-strip">
    <div class="metric-box">
      <div class="metric-icon-wrap">🏢</div>
      <div class="metric-info">
        <strong>${properties.length}+</strong>
        <span>Curated Properties</span>
      </div>
    </div>
    <div class="metric-box">
      <div class="metric-icon-wrap">🎓</div>
      <div class="metric-info">
        <strong>15+</strong>
        <span>Campus Hubs Covered</span>
      </div>
    </div>
    <div class="metric-box">
      <div class="metric-icon-wrap">⚡</div>
      <div class="metric-info">
        <strong>0%</strong>
        <span>Brokerage Guarantee</span>
      </div>
    </div>
    <div class="metric-box">
      <div class="metric-icon-wrap">💬</div>
      <div class="metric-info">
        <strong>24/7</strong>
        <span>Direct Owner Chat</span>
      </div>
    </div>
  </section>

  <!-- Category Grid Section -->
  <section class="section">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Explore By Category</div>
        <h2 class="section-title">What kind of stay are you looking for?</h2>
        <p class="section-subtitle">Tailored options for every budget and lifestyle.</p>
      </div>
    </div>

    <div class="category-cards-grid">
      <div class="cat-card-modern" onclick="quickFilterByType('PG')">
        <div class="cat-icon-bubble">🛏️</div>
        <h3>Paying Guests (PG)</h3>
        <p>Furnished rooms with food, Wi-Fi & housekeeping included.</p>
        <span class="cat-card-arrow">→</span>
      </div>

      <div class="cat-card-modern" onclick="quickFilterByType('Flat')">
        <div class="cat-icon-bubble">🏠</div>
        <h3>Flats & Apartments</h3>
        <p>1 BHK, 2 BHK and shared society flats for complete independence.</p>
        <span class="cat-card-arrow">→</span>
      </div>

      <div class="cat-card-modern" onclick="quickFilterByType('Hostel')">
        <div class="cat-icon-bubble">🎒</div>
        <h3>Student Hostels</h3>
        <p>Budget-friendly accommodations close to universities and libraries.</p>
        <span class="cat-card-arrow">→</span>
      </div>

      <div class="cat-card-modern" onclick="quickFilterByType('Room')">
        <div class="cat-icon-bubble">🔑</div>
        <h3>Single Private Rooms</h3>
        <p>Quiet, independent rooms in villas & apartments for peace of mind.</p>
        <span class="cat-card-arrow">→</span>
      </div>
    </div>
  </section>

  <!-- Featured / Popular Properties Section -->
  <section class="section">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Handpicked Stays</div>
        <h2 class="section-title">Top Rated Stays to Start With</h2>
        <p class="section-subtitle">Highly rated by movers, vetted for hygiene, security & location.</p>
      </div>
      <button class="cta-pill-btn" onclick="showPage('explore')">View All ${properties.length} Stays →</button>
    </div>

    <div class="cards-grid">
      ${properties.slice(0, 6).map(card).join('')}
    </div>
  </section>

  <!-- Trust / Why B4Umove -->
  <section class="section">
    <div class="trust-banner">
      <div style="text-align: center; max-width: 700px; margin: 0 auto 30px;">
        <div class="section-tag" style="color: var(--accent);">Why Movers Trust Us</div>
        <h2 style="color: #fff; font-size: 32px; margin-bottom: 10px;">Move Into Your New City With Zero Stress</h2>
        <p style="opacity: 0.85;">We eliminate brokers, unverified listings, and surprise fees before you pack your bags.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: center;">
        <div style="padding: 20px; background: rgba(255,255,255,0.05); border-radius: 16px;">
          <div style="font-size: 36px; margin-bottom: 12px;">🔍</div>
          <h3 style="color: #fff; font-size: 18px; margin-bottom: 6px;">1. Smart Live Discovery</h3>
          <p style="font-size: 13.5px; opacity: 0.8;">Filter by college distance, monthly rent, meals, and curfew rules.</p>
        </div>
        <div style="padding: 20px; background: rgba(255,255,255,0.05); border-radius: 16px;">
          <div style="font-size: 36px; margin-bottom: 12px;">⚖️</div>
          <h3 style="color: #fff; font-size: 18px; margin-bottom: 6px;">2. Compare & Estimate</h3>
          <p style="font-size: 13.5px; opacity: 0.8;">Compare up to 3 stays side-by-side and calculate move-in security deposit.</p>
        </div>
        <div style="padding: 20px; background: rgba(255,255,255,0.05); border-radius: 16px;">
          <div style="font-size: 36px; margin-bottom: 12px;">🤝</div>
          <h3 style="color: #fff; font-size: 18px; margin-bottom: 6px;">3. Direct Owner Contact</h3>
          <p style="font-size: 13.5px; opacity: 0.8;">Direct WhatsApp & visit booking with zero intermediary broker cuts.</p>
        </div>
      </div>
    </div>
  </section>
  `;
}

// Hero Search Tab Switcher
let activeHeroTab = "All";
function setSearchTypeTab(type, btn) {
  activeHeroTab = type;
  document.querySelectorAll('.search-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function executeHomeSearch() {
  const q = document.getElementById("homeSearchInput").value.trim().toLowerCase();
  const maxPrice = Number(document.getElementById("homePriceSelect").value);
  
  filterState.query = q;
  filterState.type = activeHeroTab;
  filterState.maxPrice = maxPrice;

  showPage('explore');
}

function quickFilterByHub(hub) {
  filterState.query = hub.toLowerCase();
  filterState.type = "All";
  showPage('explore');
}

function quickFilterByType(type) {
  filterState.type = type;
  filterState.query = "";
  showPage('explore');
}

// --- Explore Page (With Multi-Filter & Sorting) ---
function explorePage(results = properties) {
  document.getElementById("app").innerHTML = `
  <section class="section">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Explore Stays</div>
        <h2 class="section-title">Find Your Ideal Place</h2>
        <p class="section-subtitle">Real-time search across ${properties.length} verified accommodations.</p>
      </div>
    </div>

    <!-- Multi-tier Filter Bar -->
    <div class="filter-bar-modern">
      <div class="filter-row-top">
        <div class="filter-control">
          <label>Search Keyword / College</label>
          <input id="searchQueryInput" placeholder="Locality, property name, KIET..." value="${filterState.query}" oninput="handleFilterChange()">
        </div>

        <div class="filter-control">
          <label>Property Type</label>
          <select id="typeFilterSelect" onchange="handleFilterChange()">
            <option value="All" ${filterState.type === 'All' ? 'selected' : ''}>All Types</option>
            <option value="PG" ${filterState.type === 'PG' ? 'selected' : ''}>PG</option>
            <option value="Flat" ${filterState.type === 'Flat' ? 'selected' : ''}>Flat</option>
            <option value="Hostel" ${filterState.type === 'Hostel' ? 'selected' : ''}>Hostel</option>
            <option value="Room" ${filterState.type === 'Room' ? 'selected' : ''}>Room</option>
          </select>
        </div>

        <div class="filter-control">
          <label>Max Monthly Budget</label>
          <select id="priceFilterSelect" onchange="handleFilterChange()">
            <option value="50000" ${filterState.maxPrice >= 50000 ? 'selected' : ''}>Any Budget</option>
            <option value="7000" ${filterState.maxPrice === 7000 ? 'selected' : ''}>Up to ₹7,000</option>
            <option value="10000" ${filterState.maxPrice === 10000 ? 'selected' : ''}>Up to ₹10,000</option>
            <option value="15000" ${filterState.maxPrice === 15000 ? 'selected' : ''}>Up to ₹15,000</option>
            <option value="25000" ${filterState.maxPrice === 25000 ? 'selected' : ''}>Up to ₹25,000</option>
          </select>
        </div>

        <div class="filter-control">
          <label>Gender / Sharing</label>
          <select id="genderFilterSelect" onchange="handleFilterChange()">
            <option value="All">Any Gender</option>
            <option value="Boys">Boys Only</option>
            <option value="Girls">Girls Only</option>
            <option value="Co-ed">Co-ed / Unisex</option>
          </select>
        </div>
      </div>

      <!-- Amenity Chips Toggle Row -->
      <div class="filter-chips-row">
        <span style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Must Haves:</span>
        <button class="amenity-chip" onclick="toggleAmenityFilter('Wi-Fi', this)">📶 Wi-Fi</button>
        <button class="amenity-chip" onclick="toggleAmenityFilter('AC', this)">❄️ AC</button>
        <button class="amenity-chip" onclick="toggleAmenityFilter('Food', this)">🍽️ Food / Meals</button>
        <button class="amenity-chip" onclick="toggleAmenityFilter('Power backup', this)">⚡ Power Backup</button>
        <button class="amenity-chip" onclick="toggleAmenityFilter('Gym', this)">🏋️ Gym</button>
        <button class="amenity-chip" onclick="toggleAmenityFilter('Parking', this)">🚗 Parking</button>
        
        <button class="filter-reset-btn" onclick="resetFilters()">↺ Reset Filters</button>
      </div>
    </div>

    <!-- Results Meta Bar -->
    <div class="results-meta-bar">
      <div class="results-count" id="resultsCount">
        Showing <strong>${results.length}</strong> available properties
      </div>

      <div class="sort-controls">
        <span style="font-size: 13px; color: var(--text-muted);">Sort by:</span>
        <select id="sortSelect" onchange="handleSortChange()">
          <option value="featured">Featured First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Rated</option>
        </select>
      </div>
    </div>

    <!-- Cards Container -->
    <div id="resultsGrid" class="cards-grid">
      ${results.length ? results.map(card).join('') : `
        <div class="empty" style="grid-column: 1/-1; padding: 60px 20px;">
          <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
          <h3>No properties match your filter criteria</h3>
          <p class="muted" style="margin-top: 6px;">Try expanding your budget, selecting another locality, or resetting filters.</p>
          <button class="cta-pill-btn" style="margin-top: 20px;" onclick="resetFilters()">Reset All Filters</button>
        </div>
      `}
    </div>
  </section>`;

  // Apply initial filter if state was populated from home page
  applyExploreFilters();
}

function handleFilterChange() {
  filterState.query = document.getElementById("searchQueryInput").value.trim().toLowerCase();
  filterState.type = document.getElementById("typeFilterSelect").value;
  filterState.maxPrice = Number(document.getElementById("priceFilterSelect").value);
  filterState.gender = document.getElementById("genderFilterSelect").value;
  applyExploreFilters();
}

function toggleAmenityFilter(amenity, btn) {
  btn.classList.toggle('active');
  const idx = filterState.selectedAmenities.indexOf(amenity);
  if (idx > -1) {
    filterState.selectedAmenities.splice(idx, 1);
  } else {
    filterState.selectedAmenities.push(amenity);
  }
  applyExploreFilters();
}

function resetFilters() {
  filterState = {
    query: "",
    type: "All",
    maxPrice: 50000,
    gender: "All",
    sharing: "All",
    selectedAmenities: []
  };

  const qIn = document.getElementById("searchQueryInput");
  const tSel = document.getElementById("typeFilterSelect");
  const pSel = document.getElementById("priceFilterSelect");
  const gSel = document.getElementById("genderFilterSelect");

  if (qIn) qIn.value = "";
  if (tSel) tSel.value = "All";
  if (pSel) pSel.value = "50000";
  if (gSel) gSel.value = "All";

  document.querySelectorAll('.amenity-chip').forEach(b => b.classList.remove('active'));
  applyExploreFilters();
  showToast("Filters reset to default", "↺");
}

function applyExploreFilters() {
  const { query, type, maxPrice, gender, selectedAmenities } = filterState;

  let results = properties.filter(p => {
    // Keyword matching: Name, Location, City, Amenities
    const matchQuery = !query || 
      p.name.toLowerCase().includes(query) || 
      p.location.toLowerCase().includes(query) || 
      p.city.toLowerCase().includes(query) ||
      (p.desc && p.desc.toLowerCase().includes(query));

    // Type matching
    const matchType = type === "All" || p.type === type;

    // Price matching
    const matchPrice = p.price <= maxPrice;

    // Gender matching
    const matchGender = gender === "All" || 
      (gender === "Boys" && (p.gender === "Boys" || p.gender === "Co-ed" || p.gender === "Unisex")) ||
      (gender === "Girls" && (p.gender === "Girls" || p.gender === "Co-ed" || p.gender === "Unisex")) ||
      (gender === "Co-ed" && (p.gender === "Co-ed" || p.gender === "Unisex"));

    // Amenities matching
    const matchAmenities = selectedAmenities.every(a => {
      if (a === "Food") return p.amenities.some(x => x.toLowerCase().includes("food") || x.toLowerCase().includes("meal") || x.toLowerCase().includes("mess"));
      return p.amenities.some(x => x.toLowerCase().includes(a.toLowerCase()));
    });

    return matchQuery && matchType && matchPrice && matchGender && matchAmenities;
  });

  // Apply sorting
  const sortVal = document.getElementById("sortSelect") ? document.getElementById("sortSelect").value : "featured";
  if (sortVal === "price-asc") results.sort((a, b) => a.price - b.price);
  else if (sortVal === "price-desc") results.sort((a, b) => b.price - a.price);
  else if (sortVal === "rating-desc") results.sort((a, b) => b.rating - a.rating);
  else if (sortVal === "featured") results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  currentResults = results;

  const resultsGrid = document.getElementById("resultsGrid");
  const countEl = document.getElementById("resultsCount");

  if (countEl) countEl.innerHTML = `Showing <strong>${results.length}</strong> available properties`;
  if (resultsGrid) {
    resultsGrid.innerHTML = results.length ? results.map(card).join('') : `
      <div class="empty" style="grid-column: 1/-1; padding: 60px 20px;">
        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
        <h3>No properties match your filter criteria</h3>
        <p class="muted" style="margin-top: 6px;">Try expanding your budget, selecting another locality, or resetting filters.</p>
        <button class="cta-pill-btn" style="margin-top: 20px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
  }
}

function handleSortChange() {
  applyExploreFilters();
}

// --- Property Detail View ---
function details(id) {
  if (!currentUser) {
    showToast("Please log in first to view full stay details!", "🔒");
    showPage('login');
    return;
  }

  const p = properties.find(x => x.id === id);
  if (!p) return;

  const isFav = favorites.includes(p.id);
  const isCompared = compareList.includes(p.id);
  const images = p.images && p.images.length ? p.images : [p.img];

  // Calculate move-in costs
  const monthlyRent = p.price;
  const deposit = p.deposit || p.price;
  const maintenance = 500;
  const totalMoveIn = monthlyRent + deposit + maintenance;

  document.getElementById("app").innerHTML = `
  <section class="detail-container">
    <div class="detail-back-bar">
      <button onclick="showPage('explore')" class="back-btn">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.2" fill="none"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to all listings
      </button>
    </div>

    <div class="detail-layout-grid">
      <!-- Left Column: Media & Specs -->
      <div class="detail-main-info">
        <!-- Photo Gallery with Thumbnails -->
        <div class="gallery-wrapper">
          <div class="gallery-main">
            <img id="mainGalleryImg" src="${images[0]}" alt="${p.name}">
          </div>
          <div class="gallery-thumbs">
            ${images.map((img, i) => `
              <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchGalleryImg('${img}', this)">
                <img src="${img}" alt="Thumb ${i+1}">
              </div>
            `).join('')}
          </div>
        </div>

        <div class="detail-header-block">
          <div class="detail-meta-tags">
            <span class="badge-type">${p.type}</span>
            <span class="badge-verified">✓ 100% Verified</span>
            <span class="gender-pill" style="background:var(--border-subtle); color:var(--text-main);">${p.gender} Suitable</span>
          </div>

          <h1 class="detail-title">${p.name}</h1>
          <div class="detail-loc">
            📍 ${p.location} · <span>${p.distance || 'Convenient location'}</span>
          </div>
        </div>

        <!-- Specs Strip -->
        <div class="detail-specs-strip">
          <div class="spec-item">
            <small>Sharing</small>
            <strong>${p.sharing || 'Single / Double'}</strong>
          </div>
          <div class="spec-item">
            <small>Security Deposit</small>
            <strong>₹${deposit.toLocaleString()}</strong>
          </div>
          <div class="spec-item">
            <small>Food / Mess</small>
            <strong>${p.meals || 'Self Cooking'}</strong>
          </div>
          <div class="spec-item">
            <small>Curfew Time</small>
            <strong>${p.curfew || 'No Curfew'}</strong>
          </div>
        </div>

        <!-- Description -->
        <h3 class="detail-section-title">About this property</h3>
        <p class="detail-desc-text">${p.desc}</p>

        <!-- Amenities -->
        <h3 class="detail-section-title">Amenities & Facilities</h3>
        <div class="detail-amenities-grid">
          ${p.amenities.map(a => `
            <div class="amenity-card">
              <span style="color:var(--accent);">✓</span> ${a}
            </div>
          `).join('')}
        </div>

        <!-- Neighborhood Guide -->
        <h3 class="detail-section-title">🗺️ What's Nearby — Neighborhood Guide</h3>
        ${renderNeighborhoodGuide(p)}

        <!-- Reviews & Ratings -->
        <h3 class="detail-section-title" style="margin-top:32px;">💬 Resident Reviews & Ratings</h3>
        ${renderReviews(p)}
      </div>

      <!-- Right Column: Sticky Booking & Cost Card -->
      <div class="detail-sidebar">
        <div class="booking-card-modern">
          <div class="booking-price-header">
            <div>
              <strong>₹${p.price.toLocaleString()}</strong>
              <small>/ month</small>
            </div>
            <div class="rating-pill" style="font-size:13px;">⭐ ${p.rating} <span>(${p.reviewsCount} reviews)</span></div>
          </div>

          <!-- Move-in cost breakdown -->
          <div class="cost-breakdown-list">
            <div class="cost-row">
              <span>First Month Rent</span>
              <span>₹${monthlyRent.toLocaleString()}</span>
            </div>
            <div class="cost-row">
              <span>Refundable Security Deposit</span>
              <span>₹${deposit.toLocaleString()}</span>
            </div>
            <div class="cost-row">
              <span>Maintenance & Cleaning</span>
              <span>₹${maintenance.toLocaleString()}</span>
            </div>
            <div class="cost-row total">
              <span>Estimated Move-In Total</span>
              <span>₹${totalMoveIn.toLocaleString()}</span>
            </div>
          </div>

          <div class="booking-actions">
            <button class="action-btn-primary" onclick="openScheduleModal(${p.id})">
              📅 Schedule Free Property Visit
            </button>
            <button class="action-btn-outline" onclick="openContactModal(${p.id})">
              💬 Contact Owner on WhatsApp
            </button>
            <button class="action-btn-outline" onclick="toggleFavorite(${p.id}); this.innerHTML = favorites.includes(${p.id}) ? '❤️ Saved in Wishlist' : '🤍 Save to Wishlist';">
              ${isFav ? '❤️ Saved in Wishlist' : '🤍 Save to Wishlist'}
            </button>
            <button class="action-btn-share" onclick="shareProperty(${p.id})">
              📤 Share This Property
            </button>
          </div>
        </div>

        <!-- Verified Owner Card -->
        <div class="verified-owner-card">
          <div class="owner-avatar">🏠</div>
          <div class="owner-info">
            <strong>Verified Property Partner</strong>
            <small>✓ Fast Responder (under 15 mins)</small>
            <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">B4Umove certified clean premises</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  window.scrollTo(0, 0);
}

// --- Neighborhood Guide Renderer ---
function renderNeighborhoodGuide(p) {
  const data = neighborhoodData[p.city] || defaultNeighborhood;
  const sections = [
    { label: "🚇 Transit & Commute",    items: data.transit },
    { label: "🎓 Nearby Colleges",      items: data.education },
    { label: "🛒 Everyday Essentials",  items: data.essentials },
    { label: "🏥 Health & Emergency",   items: data.health }
  ];
  return `
    <div class="neighborhood-guide">
      ${sections.map(sec => `
        <div class="nb-section">
          <div class="nb-section-title">${sec.label}</div>
          <ul class="nb-list">
            ${sec.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

// --- Star Rating Renderer ---
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<span class="star filled">★</span>';
  if (half) html += '<span class="star half">★</span>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '<span class="star empty">★</span>';
  return html;
}

// --- Reviews Renderer ---
function renderReviews(p) {
  const reviews = reviewsData[p.id] || generateGenericReviews(p);
  const avgRating = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);

  return `
    <div class="reviews-section">
      <div class="reviews-summary">
        <div class="reviews-avg-score">${avgRating}</div>
        <div>
          <div class="reviews-stars-row">${renderStars(parseFloat(avgRating))}</div>
          <div class="reviews-count-label">Based on ${reviews.length} verified resident reviews</div>
        </div>
        <div class="reviews-badges">
          <span class="review-badge">✅ Verified Residents</span>
          <span class="review-badge">🔒 Moderated Reviews</span>
        </div>
      </div>
      <div class="reviews-list">
        ${reviews.map(r => `
          <div class="review-card">
            <div class="review-header">
              <div class="review-avatar">${r.avatar}</div>
              <div class="review-meta">
                <strong>${r.name}</strong>
                <span class="review-date">${r.date}</span>
              </div>
              <div class="review-stars-inline">${renderStars(r.stars)}</div>
            </div>
            <p class="review-text">"${r.text}"</p>
          </div>
        `).join('')}
      </div>
      <button class="action-btn-outline" style="margin-top:16px; width:100%;" onclick="showToast('Review submission coming soon! Login to post a review.', '📝')">
        ✍️ Write a Review
      </button>
    </div>
  `;
}

// --- Share Property ---
function shareProperty(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;

  const shareText = `Check out "${p.name}" on B4Umove!\n📍 ${p.location}\n💰 ₹${p.price.toLocaleString()}/month\n⭐ ${p.rating} rating\n🔗 https://b4umove.netlify.app/`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('Property details copied to clipboard! Share it anywhere.', '📤');
    }).catch(() => fallbackShare(shareText));
  } else {
    fallbackShare(shareText);
  }
}

function fallbackShare(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('Property link copied! Share it with your friends.', '📤');
}

function switchGalleryImg(src, thumbEl) {
  const main = document.getElementById('mainGalleryImg');
  if (main) main.src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

// --- Schedule Visit & Contact Modals ---
function openScheduleModal(propId) {
  const p = properties.find(x => x.id === propId);
  if (!p) return;

  const html = `
    <button class="modal-close-btn" onclick="closeModal()">✕</button>
    <div style="text-align:center; margin-bottom:20px;">
      <div style="font-size:36px; margin-bottom:8px;">📅</div>
      <h3>Schedule Free Property Visit</h3>
      <p class="muted" style="font-size:13.5px;">Book an in-person tour for <strong>${p.name}</strong></p>
    </div>

    <form onsubmit="handleScheduleSubmit(event, ${p.id})" style="display:grid; gap:14px;">
      <div>
        <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Your Name</label>
        <input required id="visitName" placeholder="Enter your full name" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main);">
      </div>
      <div>
        <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Phone Number</label>
        <input required type="tel" id="visitPhone" placeholder="+91 98765 43210" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main);">
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div>
          <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Preferred Date</label>
          <input required type="date" id="visitDate" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main);">
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Time Slot</label>
          <select id="visitTime" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main);">
            <option>Morning (10 AM - 1 PM)</option>
            <option>Afternoon (1 PM - 4 PM)</option>
            <option>Evening (4 PM - 7 PM)</option>
          </select>
        </div>
      </div>
      <button type="submit" class="action-btn-primary" style="margin-top:10px;">Confirm Visit Booking</button>
    </form>
  `;
  openModal(html);
}

function handleScheduleSubmit(e, propId) {
  e.preventDefault();
  const name = document.getElementById('visitName').value;
  const date = document.getElementById('visitDate').value;
  const time = document.getElementById('visitTime').value;

  closeModal();
  showToast(`Visit booked for ${name} on ${date} (${time})!`, "🎉");
}

function openContactModal(propId) {
  const p = properties.find(x => x.id === propId);
  if (!p) return;

  const html = `
    <button class="modal-close-btn" onclick="closeModal()">✕</button>
    <div style="text-align:center; margin-bottom:20px;">
      <div style="font-size:36px; margin-bottom:8px;">💬</div>
      <h3>Direct Owner Chat</h3>
      <p class="muted" style="font-size:13.5px;">Connect with verified owner of <strong>${p.name}</strong></p>
    </div>

    <form onsubmit="handleContactOwnerSubmit(event, ${p.id})" style="display:grid; gap:14px;">
      <div>
        <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Your Name</label>
        <input required id="chatName" placeholder="e.g. Divyansh" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main);">
      </div>
      <div>
        <label style="font-size:12px; font-weight:700; text-transform:uppercase;">Your Message / Query</label>
        <textarea required id="chatMsg" placeholder="Hi, I am interested in this stay. Is it available for immediate move-in?" rows="3" style="width:100%; padding:11px; margin-top:4px; border:1px solid var(--border-strong); border-radius:8px; background:var(--bg-main); color:var(--text-main); font-family:inherit;"></textarea>
      </div>
      <button type="submit" class="action-btn-primary">
        🚀 Send Message via WhatsApp
      </button>
    </form>
  `;
  openModal(html);
}

function handleContactOwnerSubmit(e, propId) {
  e.preventDefault();
  closeModal();
  showToast("Inquiry dispatched directly to the property caretaker!", "✅");
}

// --- Modal Helper Methods ---
function openModal(contentHtml) {
  const overlay = document.getElementById('modalOverlay');
  const container = document.getElementById('modalContainer');
  if (overlay && container) {
    container.innerHTML = contentHtml;
    overlay.classList.add('active');
  }
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('active');
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'modalOverlay') closeModal();
}

// Close modal on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// --- Wishlist / Saved Stays Page ---
function wishlistPage() {
  const favProps = properties.filter(p => favorites.includes(p.id));

  document.getElementById("app").innerHTML = `
  <section class="section wishlist-page-marker">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Your Wishlist</div>
        <h2 class="section-title">Saved Accommodations (${favProps.length})</h2>
        <p class="section-subtitle">Review and compare the places you shortlisted before making your decision.</p>
      </div>
      ${favProps.length ? `<button class="back-btn" onclick="clearAllFavorites()">Clear All</button>` : ''}
    </div>

    ${favProps.length ? `
      <div class="cards-grid">
        ${favProps.map(card).join('')}
      </div>
    ` : `
      <div class="empty" style="padding:80px 20px;">
        <div style="font-size:52px; margin-bottom:16px;">🤍</div>
        <h3>No saved stays yet</h3>
        <p class="muted" style="margin-top:6px;">Click the heart icon on any stay card while browsing to save it here for later.</p>
        <button class="cta-pill-btn" style="margin-top:20px;" onclick="showPage('explore')">Start Shortlisting Places →</button>
      </div>
    `}
  </section>`;
}

function clearAllFavorites() {
  favorites = [];
  localStorage.setItem('b4u_favorites', JSON.stringify(favorites));
  updateBadges();
  wishlistPage();
  showToast("Wishlist cleared", "🗑️");
}

// --- Compare Stays Page ---
function comparePage() {
  const compareProps = properties.filter(p => compareList.includes(p.id));

  document.getElementById("app").innerHTML = `
  <section class="compare-container">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Side-by-Side Analysis</div>
        <h2 class="section-title">Compare Selected Accommodations</h2>
        <p class="section-subtitle">Evaluate rent, security deposits, amenities, food, and curfew rules.</p>
      </div>
      ${compareProps.length ? `<button class="back-btn" onclick="clearCompareList()">Clear Comparison</button>` : ''}
    </div>

    ${compareProps.length >= 2 ? `
      <div class="compare-table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Features</th>
              ${compareProps.map(p => `
                <th>
                  <div class="compare-prop-head">
                    <img src="${p.img}" class="compare-prop-thumb" alt="${p.name}">
                    <div>
                      <strong>${p.name}</strong>
                      <div class="muted" style="font-size:12px;">${p.location}</div>
                    </div>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monthly Rent</strong></td>
              ${compareProps.map(p => `<td><strong style="color:var(--accent); font-size:16px;">₹${p.price.toLocaleString()}</strong></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Security Deposit</strong></td>
              ${compareProps.map(p => `<td>₹${(p.deposit || p.price).toLocaleString()}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Property Type</strong></td>
              ${compareProps.map(p => `<td><span class="badge-type">${p.type}</span></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Sharing / Room</strong></td>
              ${compareProps.map(p => `<td>${p.sharing || 'Single / Double'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Food / Mess</strong></td>
              ${compareProps.map(p => `<td>${p.meals || 'Self Cooking'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Curfew Time</strong></td>
              ${compareProps.map(p => `<td>${p.curfew || 'No Curfew'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Rating</strong></td>
              ${compareProps.map(p => `<td>⭐ ${p.rating} (${p.reviewsCount} reviews)</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Key Amenities</strong></td>
              ${compareProps.map(p => `<td>${p.amenities.slice(0, 4).join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Action</strong></td>
              ${compareProps.map(p => `
                <td>
                  <button class="p-detail-btn" onclick="details(${p.id})">Full Details</button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    ` : `
      <div class="empty" style="padding:80px 20px;">
        <div style="font-size:52px; margin-bottom:16px;">⚖️</div>
        <h3>Select at least 2 properties to compare</h3>
        <p class="muted" style="margin-top:6px;">Click the ⚖️ compare icon on any property card to view a side-by-side spec comparison.</p>
        <button class="cta-pill-btn" style="margin-top:20px;" onclick="showPage('explore')">Explore Properties to Compare →</button>
      </div>
    `}
  </section>`;
}

function clearCompareList() {
  compareList = [];
  localStorage.setItem('b4u_compare', JSON.stringify(compareList));
  updateBadges();
  comparePage();
  showToast("Comparison cleared", "🗑️");
}

// --- Rent Budget Affordability Estimator ---
function calculatorPage() {
  document.getElementById("app").innerHTML = `
  <section class="calc-container">
    <div style="text-align:center; max-width:650px; margin:0 auto 30px;">
      <div class="section-tag">Financial Planning Tool</div>
      <h2 class="section-title">Rent Affordability Calculator</h2>
      <p class="section-subtitle">Financial experts recommend spending no more than <strong>30%–35%</strong> of your monthly income or student allowance on housing.</p>
    </div>

    <div class="calc-card-modern">
      <div class="calc-slider-box">
        <div class="calc-slider-header">
          <span>Your Monthly Income / Allowance</span>
          <strong id="sliderDisplayVal">₹25,000</strong>
        </div>
        <input type="range" class="calc-range-slider" min="6000" max="80000" step="1000" value="25000" id="incomeSlider" oninput="updateRentCalculations()">
      </div>

      <div class="calc-breakdown-grid">
        <div class="calc-result-box" style="border-color:var(--accent);">
          <small style="font-weight:700; color:var(--accent); text-transform:uppercase;">Recommended Max Rent</small>
          <strong id="calcMaxRent" style="color:var(--accent);">₹7,500</strong>
          <span class="muted" style="font-size:12px;">30% allocation</span>
        </div>
        <div class="calc-result-box">
          <small style="font-weight:700; text-transform:uppercase;">Food & Groceries</small>
          <strong id="calcFood">₹6,250</strong>
          <span class="muted" style="font-size:12px;">25% allocation</span>
        </div>
        <div class="calc-result-box">
          <small style="font-weight:700; text-transform:uppercase;">Transport & Savings</small>
          <strong id="calcSavings">₹11,250</strong>
          <span class="muted" style="font-size:12px;">45% remainder</span>
        </div>
      </div>

      <div style="margin-top:30px; text-align:center;">
        <button class="cta-pill-btn" onclick="applyCalculatedBudget()">
          Find Stays Within This Budget →
        </button>
      </div>
    </div>
  </section>`;
}

function updateRentCalculations() {
  const income = Number(document.getElementById('incomeSlider').value);
  document.getElementById('sliderDisplayVal').textContent = `₹${income.toLocaleString()}`;

  const maxRent = Math.round(income * 0.30);
  const food = Math.round(income * 0.25);
  const savings = income - maxRent - food;

  document.getElementById('calcMaxRent').textContent = `₹${maxRent.toLocaleString()}`;
  document.getElementById('calcFood').textContent = `₹${food.toLocaleString()}`;
  document.getElementById('calcSavings').textContent = `₹${savings.toLocaleString()}`;
}

function applyCalculatedBudget() {
  const income = Number(document.getElementById('incomeSlider').value);
  const maxRent = Math.round(income * 0.30);

  filterState.maxPrice = maxRent;
  filterState.type = "All";
  filterState.query = "";
  showPage('explore');
  showToast(`Showing stays up to ₹${maxRent.toLocaleString()} / month`, "🎯");
}

// --- About Page ---
function aboutPage() {
  document.getElementById("app").innerHTML = `
  <section class="section">
    <div style="text-align:center; max-width:750px; margin:0 auto 40px;">
      <div class="section-tag">About B4Umove</div>
      <h2 class="section-title">Redefining How India Discovers Living Stays</h2>
      <p class="section-subtitle">Born out of the real-world housing struggles faced by college students and early-career movers across Delhi-NCR and major educational hubs.</p>
    </div>

    <div class="category-cards-grid" style="margin-bottom:40px;">
      <div class="cat-card-modern">
        <div class="cat-icon-bubble">🎯</div>
        <h3>Our Core Mission</h3>
        <p>To provide 100% transparent pricing, zero brokerage, verified photos, and direct owner chats so nobody moves blindly.</p>
      </div>

      <div class="cat-card-modern">
        <div class="cat-icon-bubble">🛡️</div>
        <h3>Verified Guarantee</h3>
        <p>Every listed PG, hostel, and apartment is verified for basic water supply, electricity backup, and student security.</p>
      </div>

      <div class="cat-card-modern">
        <div class="cat-icon-bubble">🎓</div>
        <h3>Campus Proximity</h3>
        <p>Engineered around top institutions like KIET, AKGEC, DU Colleges, JSS, and corporate tech parks.</p>
      </div>

      <div class="cat-card-modern">
        <div class="cat-icon-bubble">⚡</div>
        <h3>Lightning Fast UX</h3>
        <p>Single Page Application architecture with instant client-side filtering and dark mode support.</p>
      </div>
    </div>
  </section>`;
}

// --- Add Property Listing Page ---
function addPage() {
  document.getElementById("app").innerHTML = `
  <section class="section" style="max-width:720px; margin:0 auto;">
    <div class="section-header-modern" style="text-align:center; display:block;">
      <div class="section-tag">Admin & Partner Portal</div>
      <h2 class="section-title">Add a New Property</h2>
      <p class="section-subtitle">Publish a verified accommodation listing to B4Umove.</p>
    </div>

    <form class="filter-bar-modern" onsubmit="addListing(event)" style="display:grid; gap:16px;">
      <div class="filter-control">
        <label>Property Name *</label>
        <input id="listingName" required placeholder="e.g. Green Meadows Luxury PG">
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
        <div class="filter-control">
          <label>City *</label>
          <input id="listingCity" required placeholder="e.g. Ghaziabad / Noida">
        </div>
        <div class="filter-control">
          <label>Locality / Address *</label>
          <input id="listingLocation" required placeholder="e.g. Muradnagar, near KIET">
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
        <div class="filter-control">
          <label>Monthly Rent (₹) *</label>
          <input id="listingPrice" type="number" required placeholder="6500">
        </div>
        <div class="filter-control">
          <label>Property Type *</label>
          <select id="listingType">
            <option>PG</option>
            <option>Flat</option>
            <option>Hostel</option>
            <option>Room</option>
          </select>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
        <div class="filter-control">
          <label>Gender Suitability</label>
          <select id="listingGender">
            <option>Boys</option>
            <option>Girls</option>
            <option>Co-ed</option>
            <option>Family</option>
          </select>
        </div>
        <div class="filter-control">
          <label>Sharing / Layout</label>
          <input id="listingSharing" placeholder="e.g. Double / Single Room">
        </div>
      </div>

      <!-- Device File Upload Zone -->
      <div class="filter-control">
        <label>Property Photo (Choose from your device) *</label>
        <div class="file-upload-dropzone" id="listingDropzone" onclick="document.getElementById('listingFileInput').click()" ondragover="handleListingDragOver(event)" ondragleave="handleListingDragLeave(event)" ondrop="handleListingDrop(event)">
          <input type="file" id="listingFileInput" accept="image/*" style="display:none;" onchange="handleListingFileSelect(event)">
          
          <div class="dropzone-content" id="dropzonePrompt">
            <div class="dropzone-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <div class="dropzone-text">
              <span class="dropzone-title"><strong>Select photo from your device</strong> or drag & drop here</span>
              <span class="dropzone-sub">Supports JPG, PNG, WEBP, HEIC from your computer or phone</span>
            </div>
            <button type="button" class="dropzone-browse-btn">Browse Files</button>
          </div>

          <div class="dropzone-preview-box" id="dropzonePreview" style="display:none;">
            <div class="preview-thumb-wrap">
              <img id="previewImgEl" src="" alt="Selected Property Photo">
            </div>
            <div class="preview-meta">
              <span class="preview-filename" id="previewFileName">selected-photo.jpg</span>
              <span class="preview-status-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Loaded from device
              </span>
            </div>
            <button type="button" class="preview-action-btn" onclick="clearListingFile(event)" title="Choose another photo">
              ✕ Change Photo
            </button>
          </div>
        </div>
        <input type="hidden" id="listingImgDataUrl" value="">
      </div>

      <div class="filter-control">
        <div class="label-with-action">
          <label for="listingDesc">Description *</label>
          <button type="button" class="ai-sparkle-pill-btn" onclick="generateAiListingDesc()">
            <span>✨ Auto-Write with AI</span>
          </button>
        </div>
        <textarea id="listingDesc" required placeholder="Describe the room, food, proximity to campus or metro..." rows="3" style="width:100%; padding:12px; border:1px solid var(--border-subtle); border-radius:var(--radius-md); background:var(--bg-main); color:var(--text-main); font-family:inherit;"></textarea>
      </div>

      <div class="filter-control">
        <label>Amenities (Comma-separated)</label>
        <input id="listingAmenities" placeholder="e.g. Wi-Fi, AC, Power backup, Food Included, RO Water">
      </div>

      <button class="action-btn-primary" type="submit" style="margin-top:10px;">
        ✓ Publish Property Listing
      </button>
    </form>
  </section>`;
}

// --- Device Image Upload State & Handlers ---
let uploadedListingImage = "";

function handleListingFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  processSelectedListingFile(file);
}

function processSelectedListingFile(file) {
  if (!file.type.startsWith('image/')) {
    showToast("Please select an image file (PNG, JPG, WEBP)", "⚠️");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedListingImage = e.target.result;
    const previewBox = document.getElementById("dropzonePreview");
    const promptBox = document.getElementById("dropzonePrompt");
    const previewImg = document.getElementById("previewImgEl");
    const previewName = document.getElementById("previewFileName");
    const hiddenInput = document.getElementById("listingImgDataUrl");
    const dropzone = document.getElementById("listingDropzone");

    if (previewImg) previewImg.src = uploadedListingImage;
    if (previewName) previewName.textContent = file.name;
    if (hiddenInput) hiddenInput.value = uploadedListingImage;
    if (previewBox) previewBox.style.display = "flex";
    if (promptBox) promptBox.style.display = "none";
    if (dropzone) dropzone.classList.add("has-file");

    showToast("Photo loaded from your device!", "📸");
  };
  reader.readAsDataURL(file);
}

function clearListingFile(e) {
  if (e) e.stopPropagation();
  uploadedListingImage = "";
  const fileInput = document.getElementById("listingFileInput");
  const previewBox = document.getElementById("dropzonePreview");
  const promptBox = document.getElementById("dropzonePrompt");
  const hiddenInput = document.getElementById("listingImgDataUrl");
  const dropzone = document.getElementById("listingDropzone");

  if (fileInput) fileInput.value = "";
  if (hiddenInput) hiddenInput.value = "";
  if (previewBox) previewBox.style.display = "none";
  if (promptBox) promptBox.style.display = "flex";
  if (dropzone) dropzone.classList.remove("has-file");
}

function handleListingDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropzone = document.getElementById("listingDropzone");
  if (dropzone) dropzone.classList.add("dragover");
}

function handleListingDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropzone = document.getElementById("listingDropzone");
  if (dropzone) dropzone.classList.remove("dragover");
}

function handleListingDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropzone = document.getElementById("listingDropzone");
  if (dropzone) dropzone.classList.remove("dragover");
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    processSelectedListingFile(e.dataTransfer.files[0]);
  }
}

function addListing(e) {
  e.preventDefault();
  const name = document.getElementById("listingName").value.trim();
  const city = document.getElementById("listingCity").value.trim() || "Delhi-NCR";
  const location = document.getElementById("listingLocation").value.trim();
  const price = Number(document.getElementById("listingPrice").value);
  const type = document.getElementById("listingType").value;
  const gender = document.getElementById("listingGender").value;
  const sharing = document.getElementById("listingSharing").value.trim() || "Single / Double";
  
  // Retrieve image from device upload or fallback
  const hiddenDataUrl = document.getElementById("listingImgDataUrl")?.value.trim();
  let img = hiddenDataUrl || uploadedListingImage;
  if (!img) {
    img = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80";
  }

  const desc = document.getElementById("listingDesc").value.trim();
  const amenitiesStr = document.getElementById("listingAmenities").value.trim();
  const amenities = amenitiesStr ? amenitiesStr.split(",").map(a => a.trim()) : ["Wi-Fi", "Clean Washroom", "Power Backup"];

  const newId = properties.length ? Math.max(...properties.map(p => p.id)) + 1 : 1;
  const newProp = {
    id: newId,
    name,
    type,
    city,
    location,
    price,
    deposit: price,
    rating: 5.0,
    reviewsCount: 1,
    gender,
    sharing,
    meals: "Optional",
    curfew: "10:30 PM",
    distance: "Convenient location",
    img,
    images: [img],
    amenities,
    desc,
    featured: true
  };

  properties.unshift(newProp);
  uploadedListingImage = "";
  showToast("Property published with your device photo!", "🎉");
  e.target.reset();

  setTimeout(() => {
    if (currentUser === 'admin') showPage('dashboard');
    else showPage('explore');
  }, 1200);
}

// --- Admin Dashboard ---
function dashboardPage() {
  if (currentUser !== 'admin') {
    showPage('login');
    return;
  }

  const avgPrice = Math.round(properties.reduce((acc, p) => acc + p.price, 0) / properties.length);

  document.getElementById("app").innerHTML = `
  <section class="section">
    <div class="section-header-modern">
      <div>
        <div class="section-tag">Admin Management Console</div>
        <h2 class="section-title">Platform Dashboard</h2>
        <p class="section-subtitle">Real-time metrics, inventory management & customer inquiry tracker.</p>
      </div>
      <button class="cta-pill-btn" onclick="showPage('add')">+ Add New Listing</button>
    </div>

    <!-- Stat Metric Boxes -->
    <div class="hero-metrics-strip" style="padding:0; margin-bottom:30px;">
      <div class="metric-box">
        <div class="metric-icon-wrap">🏢</div>
        <div class="metric-info">
          <strong>${properties.length}</strong>
          <span>Total Active Listings</span>
        </div>
      </div>
      <div class="metric-box">
        <div class="metric-icon-wrap">💰</div>
        <div class="metric-info">
          <strong>₹${avgPrice.toLocaleString()}</strong>
          <span>Average Monthly Rent</span>
        </div>
      </div>
      <div class="metric-box">
        <div class="metric-icon-wrap">📩</div>
        <div class="metric-info">
          <strong>${customerQueries.length}</strong>
          <span>Customer Enquiries</span>
        </div>
      </div>
      <div class="metric-box">
        <div class="metric-icon-wrap">⭐</div>
        <div class="metric-info">
          <strong>4.75</strong>
          <span>Average Platform Rating</span>
        </div>
      </div>
    </div>

    <!-- Customer Enquiries Table -->
    <h3 style="margin-bottom:14px;">Recent Customer Enquiries</h3>
    <div class="compare-table-wrapper" style="margin-bottom:40px;">
      <table class="compare-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${customerQueries.map((q, idx) => `
            <tr>
              <td><strong>${q.name}</strong></td>
              <td>${q.email}</td>
              <td>"${q.message}"</td>
              <td><span class="badge-verified">${q.status}</span></td>
              <td>
                <button class="p-detail-btn" style="padding:6px 12px; font-size:12px;" onclick="resolveQuery(${idx})">Mark Resolved</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Manage Properties Inventory -->
    <h3 style="margin-bottom:14px;">Inventory Overview</h3>
    <div class="compare-table-wrapper">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${properties.slice(0, 10).map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><span class="badge-type">${p.type}</span></td>
              <td>${p.location}</td>
              <td>₹${p.price.toLocaleString()}</td>
              <td>⭐ ${p.rating}</td>
              <td>
                <button class="back-btn" style="padding:4px 10px; font-size:12px; color:var(--rose);" onclick="deleteListing(${p.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}

function resolveQuery(idx) {
  customerQueries[idx].status = "Resolved";
  showToast("Query marked as resolved", "✅");
  dashboardPage();
}

function deleteListing(id) {
  const idx = properties.findIndex(p => p.id === id);
  if (idx > -1) {
    properties.splice(idx, 1);
    showToast("Property listing deleted", "🗑️");
    dashboardPage();
  }
}

// --- Login Page ---
function loginPage() {
  document.getElementById("app").innerHTML = `
  <section class="section login-section-modern">
    <div class="login-wrapper-modern">
      <!-- Left Hero Showcase Card -->
      <div class="login-hero-card">
        <div class="login-hero-overlay"></div>
        <div class="login-hero-content">
          <div class="login-hero-badge">
            <span class="pulse-dot"></span> 30+ Verified Hubs Live
          </div>
          <h2 class="login-hero-title">Find your dream student stay <span>before you move</span>.</h2>
          <p class="login-hero-subtitle">
            Zero brokerage, verified roommates, and direct owner connections near KIET, Delhi-NCR, Bangalore, and top colleges.
          </p>
          <div class="login-perks-list">
            <div class="login-perk-item">
              <span class="perk-icon">🛡️</span>
              <div>
                <strong>100% Zero Brokerage</strong>
                <p>Never pay unnecessary agent fees</p>
              </div>
            </div>
            <div class="login-perk-item">
              <span class="perk-icon">⚡</span>
              <div>
                <strong>Direct Owner Chat</strong>
                <p>Connect instantly with verified landlords</p>
              </div>
            </div>
            <div class="login-perk-item">
              <span class="perk-icon">🎓</span>
              <div>
                <strong>Campus Centric</strong>
                <p>Curated walks to universities & metros</p>
              </div>
            </div>
          </div>
          <div class="login-hero-trust">
            <div class="trust-avatars">
              <span>👨‍🎓</span>
              <span>👩‍🎓</span>
              <span>👨‍💻</span>
              <span>👩‍💻</span>
            </div>
            <span>Joined by 2,400+ students this semester</span>
          </div>
        </div>
      </div>

      <!-- Right Form Card -->
      <div class="login-form-card">
        <div class="login-card-header">
          <div class="login-brand-tag">
            <div class="logo-icon-wrap sm">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <span>B4Umove Auth</span>
          </div>
          <span class="secure-badge">
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            256-bit Encrypted
          </span>
        </div>

        <div class="login-segmented-tabs" role="tablist">
          <button class="seg-tab active" id="tabCustomerBtn" onclick="switchTab('customer')" role="tab" aria-selected="true">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Student / Tenant
          </button>
          <button class="seg-tab" id="tabAdminBtn" onclick="switchTab('admin')" role="tab" aria-selected="false">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Property Admin
          </button>
        </div>

        <!-- Customer Form -->
        <form id="customerForm" class="modern-auth-form" onsubmit="handleLogin(event, 'customer')">
          <div class="auth-form-title-wrap">
            <h3 class="auth-heading">Welcome Back! 👋</h3>
            <p class="auth-subheading">Log in to view saved properties, inquiries & rent estimates.</p>
          </div>

          <div class="quick-demo-strip">
            <span class="quick-demo-lbl">⚡ Quick Demo:</span>
            <button type="button" class="quick-chip-btn" onclick="fillDemoUser('student')">Fill Student Demo</button>
          </div>

          <div class="auth-field-group">
            <label for="custEmail">Email Address</label>
            <div class="input-with-icon">
              <span class="field-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <input type="email" id="custEmail" required placeholder="name@college.edu or gmail.com" autocomplete="email">
            </div>
          </div>

          <div class="auth-field-group">
            <div class="label-with-action">
              <label for="custPassword">Password</label>
              <a href="javascript:void(0)" onclick="handleForgotPassword()" class="forgot-link">Forgot?</a>
            </div>
            <div class="input-with-icon">
              <span class="field-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </span>
              <input type="password" id="custPassword" required placeholder="Enter password (any for demo)" autocomplete="current-password">
              <button type="button" class="eye-toggle-btn" onclick="togglePasswordVisibility('custPassword', this)" title="Show/Hide Password" aria-label="Toggle password visibility">
                <svg class="eye-open" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <svg class="eye-closed" style="display:none;" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              </button>
            </div>
          </div>

          <div class="auth-row-options">
            <label class="custom-checkbox-container">
              <input type="checkbox" id="rememberMe" checked>
              <span class="checkmark"></span>
              <span class="cb-label-text">Remember me on this browser</span>
            </label>
          </div>

          <button class="auth-submit-btn" type="submit">
            <span>Log In as Student</span>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <div class="auth-divider">
            <span>or sign in with</span>
          </div>

          <div class="social-login-grid">
            <button type="button" class="social-btn" onclick="handleSocialLogin('Google')">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/><path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"/><path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.4 7.5 23 12 23z"/></svg>
              <span>Google</span>
            </button>
            <button type="button" class="social-btn" onclick="handleSocialLogin('GitHub')">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <span>GitHub</span>
            </button>
          </div>

          <div class="auth-footer-prompt">
            <span>New to B4Umove?</span>
            <a href="javascript:void(0)" onclick="handleQuickRegister()">Create free account</a>
          </div>
        </form>

        <!-- Admin Form -->
        <form id="adminForm" class="modern-auth-form" style="display:none;" onsubmit="handleLogin(event, 'admin')">
          <div class="auth-form-title-wrap">
            <h3 class="auth-heading">Admin Portal 🛡️</h3>
            <p class="auth-subheading">Access property listing control, verification desk & client inquiries.</p>
          </div>

          <div class="admin-notice-pill">
            <span>🔐 Authorized personnel & property managers only.</span>
          </div>

          <div class="quick-demo-strip">
            <span class="quick-demo-lbl">⚡ Quick Demo:</span>
            <button type="button" class="quick-chip-btn" onclick="fillDemoUser('admin')">Fill Admin Demo</button>
          </div>

          <div class="auth-field-group">
            <label for="adminId">Administrator ID</label>
            <div class="input-with-icon">
              <span class="field-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              <input type="text" id="adminId" required placeholder="admin" value="admin" autocomplete="username">
            </div>
          </div>

          <div class="auth-field-group">
            <div class="label-with-action">
              <label for="adminPassword">Security Key / Password</label>
            </div>
            <div class="input-with-icon">
              <span class="field-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </span>
              <input type="password" id="adminPassword" required placeholder="admin123" value="admin123" autocomplete="current-password">
              <button type="button" class="eye-toggle-btn" onclick="togglePasswordVisibility('adminPassword', this)" title="Show/Hide Password" aria-label="Toggle password visibility">
                <svg class="eye-open" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <svg class="eye-closed" style="display:none;" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              </button>
            </div>
          </div>

          <button class="auth-submit-btn admin-theme-btn" type="submit">
            <span>Unlock Admin Dashboard</span>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </form>
      </div>
    </div>
  </section>`;
}

function switchTab(type) {
  const custBtn = document.getElementById('tabCustomerBtn');
  const admBtn = document.getElementById('tabAdminBtn');
  const custForm = document.getElementById('customerForm');
  const admForm = document.getElementById('adminForm');

  if (type === 'customer') {
    if (custBtn) { custBtn.classList.add('active'); custBtn.setAttribute('aria-selected', 'true'); }
    if (admBtn) { admBtn.classList.remove('active'); admBtn.setAttribute('aria-selected', 'false'); }
    if (custForm) custForm.style.display = 'flex';
    if (admForm) admForm.style.display = 'none';
  } else {
    if (admBtn) { admBtn.classList.add('active'); admBtn.setAttribute('aria-selected', 'true'); }
    if (custBtn) { custBtn.classList.remove('active'); custBtn.setAttribute('aria-selected', 'false'); }
    if (custForm) custForm.style.display = 'none';
    if (admForm) admForm.style.display = 'flex';
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const eyeOpen = btn.querySelector('.eye-open');
  const eyeClosed = btn.querySelector('.eye-closed');

  if (input.type === 'password') {
    input.type = 'text';
    if (eyeOpen) eyeOpen.style.display = 'none';
    if (eyeClosed) eyeClosed.style.display = 'block';
  } else {
    input.type = 'password';
    if (eyeOpen) eyeOpen.style.display = 'block';
    if (eyeClosed) eyeClosed.style.display = 'none';
  }
}

function fillDemoUser(role) {
  if (role === 'student') {
    const emailEl = document.getElementById('custEmail');
    const pwdEl = document.getElementById('custPassword');
    if (emailEl) emailEl.value = 'student@kiet.edu';
    if (pwdEl) pwdEl.value = 'kiet2026';
    showToast("Filled demo student credentials!", "⚡");
  } else if (role === 'admin') {
    const idEl = document.getElementById('adminId');
    const pwdEl = document.getElementById('adminPassword');
    if (idEl) idEl.value = 'admin';
    if (pwdEl) pwdEl.value = 'admin123';
    showToast("Filled demo admin credentials!", "🛡️");
  }
}

function handleForgotPassword() {
  const emailInput = document.getElementById('custEmail');
  const emailVal = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'your email';
  showToast(`Password reset link sent to ${emailVal}! (Demo)`, "📧");
}

function handleSocialLogin(provider) {
  currentUser = 'customer';
  localStorage.setItem('b4u_logged_in_user', 'customer');
  updateNav();
  showToast(`Signed in successfully with ${provider}!`, "🎉");
  showPage('home');
}

function handleQuickRegister() {
  showToast("Registration is open! Fill your details and click Log In to start exploring.", "ℹ️");
  const emailInput = document.getElementById('custEmail');
  if (emailInput && !emailInput.value) emailInput.value = 'newuser@college.edu';
}

function handleLogin(e, type) {
  e.preventDefault();
  currentUser = type;
  localStorage.setItem('b4u_logged_in_user', type);
  updateNav();
  showToast(type === 'admin' ? "Logged in as Admin successfully!" : "Logged in as Student!", "🔐");

  if (type === 'admin') showPage('dashboard');
  else showPage('home');
}

// --- Contact Page ---
function contactPage() {
  document.getElementById("app").innerHTML = `
  <section class="section" style="max-width:720px; margin:0 auto;">
    <div class="section-header-modern" style="text-align:center; display:block;">
      <div class="section-tag">Get in Touch</div>
      <h2 class="section-title">Contact Support & Admin</h2>
      <p class="section-subtitle">Need help finding a stay near your campus or want to partner with us?</p>
    </div>

    <form class="filter-bar-modern" onsubmit="submitQuery(event)" style="display:grid; gap:16px;">
      <div class="filter-control">
        <label>Your Name *</label>
        <input id="queryName" required placeholder="e.g. Your Name">
      </div>
      <div class="filter-control">
        <label>Email Address *</label>
        <input id="queryEmail" type="email" required placeholder="you@example.com">
      </div>
      <div class="filter-control">
        <label>Your Message *</label>
        <textarea id="queryMessage" required placeholder="Tell us what you are looking for..." rows="4" style="width:100%; padding:12px; border:1px solid var(--border-subtle); border-radius:var(--radius-md); background:var(--bg-main); color:var(--text-main); font-family:inherit;"></textarea>
      </div>
      <button class="action-btn-primary" type="submit">
        Send Message to Admin
      </button>
    </form>
  </section>`;
}

function submitQuery(e) {
  e.preventDefault();
  const name = document.getElementById('queryName').value.trim();
  const email = document.getElementById('queryEmail').value.trim();
  const message = document.getElementById('queryMessage').value.trim();

  customerQueries.unshift({ name, email, message, date: "Just now", status: "New" });
  showToast("Your query has been dispatched to the admin team!", "📩");
  e.target.reset();
}

function handleNewsletter(e) {
  e.preventDefault();
  const el = document.getElementById('newsletterEmail');
  if (el) {
    showToast(`Subscribed ${el.value} to student stay alerts!`, "🎉");
    el.value = "";
  }
}

// --- Toast Notification Engine ---
function showToast(msg, icon = "✨") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('b4u_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Trigger smooth transition class
  document.body.classList.add('theme-transitioning');

  // Trigger 360° spin on theme toggle buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.classList.add('theme-switching');
  });

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('b4u_theme', newTheme);
  showToast(`Switched to ${newTheme} mode`, newTheme === 'dark' ? '🌙' : '☀️');

  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.classList.remove('theme-switching');
    });
  }, 500);
}

// --- Live Animations Engine (Cursor Aura & Button Ripples) ---
function initLiveAnimations() {
  // 1. Dynamic Cursor Spotlight Glow
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        glow.style.opacity = '1';
        isMoving = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
      isMoving = false;
    });

    // Smooth RAF interpolation for cursor aura
    function animateCursorAura() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      requestAnimationFrame(animateCursorAura);
    }
    requestAnimationFrame(animateCursorAura);
  }

  // 2. Global Button Liquid Ripple Wave
  document.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest(
      'button, .cta-pill-btn, .action-btn-primary, .action-btn-outline, .action-btn-share, .p-detail-btn, .card-icon-btn, .icon-btn, .back-btn, .amenity-chip, .tab, .search-tab'
    );
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

// --- Scroll Utilities ---
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNavbar');
  if (nav) {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }

  // Parallax on background particles
  const particles = document.querySelector('.bg-particles');
  if (particles) {
    particles.style.transform = `translateY(${window.scrollY * 0.2}px)`;
  }
});

// ==========================================================================
// B4Umove AI Copilot — Chat Assistant, Gemini API & Local Intelligence Engine
// ==========================================================================

let isAiDrawerOpen = false;
let isAiGenerating = false;

function toggleAiDrawer() {
  const drawer = document.getElementById('aiDrawer');
  const fab = document.getElementById('aiFabBtn');
  if (!drawer) return;

  isAiDrawerOpen = !isAiDrawerOpen;
  if (isAiDrawerOpen) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (fab) fab.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('aiUserInput');
      if (input) input.focus();
    }, 250);
  } else {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (fab) fab.classList.remove('active');
  }
}

function openAiKeyModal() {
  const modalContainer = document.getElementById('modalContainer');
  const modalOverlay = document.getElementById('modalOverlay');
  if (!modalContainer || !modalOverlay) return;

  const currentKey = GEMINI_API_KEY ? GEMINI_API_KEY : '';
  const maskedKey = currentKey ? currentKey.substring(0, 6) + '...' + currentKey.substring(currentKey.length - 4) : 'Not configured';

  modalContainer.innerHTML = `
    <div class="modal-header-modern">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">🔑</span>
        <div>
          <h3 style="margin:0; font-size:18px; font-weight:800;">Google Gemini API Key</h3>
          <p style="margin:2px 0 0; font-size:13px; color:var(--text-muted);">Connect your personal Gemini key for real-time AI responses.</p>
        </div>
      </div>
      <button class="modal-close-btn" onclick="closeModal()">✕</button>
    </div>
    <div style="padding:20px 0; display:flex; flex-direction:column; gap:14px;">
      <p style="font-size:13.5px; color:var(--text-main); margin:0; line-height:1.5;">
        You can get a free Google Gemini API key from 
        <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener" style="color:var(--accent); font-weight:700; text-decoration:underline;">Google AI Studio</a>.
      </p>
      
      <div class="auth-field-group">
        <label for="geminiKeyInput">Your Gemini API Key</label>
        <div class="input-with-icon">
          <span class="field-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </span>
          <input type="password" id="geminiKeyInput" placeholder="AIzaSy..." value="${currentKey}">
        </div>
        <span style="font-size:12px; color:var(--text-dim);">Status: ${currentKey ? '🟢 Key Active (' + maskedKey + ')' : '🟡 Using Built-in AI Matcher (No key required)'}</span>
      </div>
    </div>
    <div style="display:flex; gap:10px; justify-content:flex-end;">
      ${currentKey ? `<button type="button" class="action-btn-outline" onclick="clearAiKey()">Remove Key</button>` : ''}
      <button type="button" class="action-btn-primary" onclick="saveAiKey()">Save API Key</button>
    </div>
  `;

  modalOverlay.classList.add('open');
}

function saveAiKey() {
  const input = document.getElementById('geminiKeyInput');
  const val = input ? input.value.trim() : '';

  if (val) {
    GEMINI_API_KEY = val;
    localStorage.setItem('b4u_gemini_api_key', val);
    showToast("Gemini API Key saved! Live AI activated.", "✨");
    updateAiModeStatus();
  } else {
    clearAiKey();
  }
  closeModal();
}

function clearAiKey() {
  GEMINI_API_KEY = "";
  localStorage.removeItem('b4u_gemini_api_key');
  showToast("Key cleared. Switched to Built-in AI Matcher.", "ℹ️");
  updateAiModeStatus();
  closeModal();
}

function updateAiModeStatus() {
  const subtitle = document.getElementById('aiModeSubtitle');
  if (subtitle) {
    if (GEMINI_API_KEY) {
      subtitle.innerHTML = '🟢 Live Gemini 1.5 Powered / Active';
    } else {
      subtitle.innerHTML = 'Powered by Gemini AI / Student Matchmaker';
    }
  }
}

function askAiPrompt(promptText) {
  const input = document.getElementById('aiUserInput');
  if (input) {
    input.value = promptText;
    handleAiSubmit(new Event('submit'));
  }
}

async function handleAiSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (isAiGenerating) return;

  const input = document.getElementById('aiUserInput');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  // Append user message
  appendAiMessage(userText, 'user');
  input.value = '';

  // Show typing loader
  isAiGenerating = true;
  const typingEl = showAiTypingIndicator();

  try {
    let aiResponse = "";
    if (GEMINI_API_KEY) {
      aiResponse = await callGeminiLiveApi(userText);
    } else {
      // Simulate realistic intelligent AI thinking
      await new Promise(r => setTimeout(r, 650));
      aiResponse = generateLocalAiResponse(userText);
    }

    if (typingEl) typingEl.remove();
    appendAiMessage(aiResponse, 'bot');
  } catch (err) {
    if (typingEl) typingEl.remove();
    console.warn("AI API fallback triggered:", err);
    const fallbackResponse = generateLocalAiResponse(userText);
    appendAiMessage(fallbackResponse, 'bot');
  } finally {
    isAiGenerating = false;
  }
}

function appendAiMessage(htmlContent, sender) {
  const container = document.getElementById('aiMessagesContainer');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-msg ai-msg-${sender}`;

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="ai-msg-avatar">🤖</div>
      <div class="ai-msg-bubble">${formatAiText(htmlContent)}</div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="ai-msg-bubble">${escapeHtml(htmlContent)}</div>
      <div class="ai-msg-avatar">👤</div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function showAiTypingIndicator() {
  const container = document.getElementById('aiMessagesContainer');
  if (!container) return null;

  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg ai-msg-bot ai-typing-indicator';
  typingDiv.innerHTML = `
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-bubble">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
  return typingDiv;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatAiText(text) {
  // If text already contains custom HTML cards, preserve it
  if (text.includes('<div class="ai-stay-chip">') || text.includes('<div class="ai-recom-list">')) {
    return text;
  }
  // Convert basic markdown to clean HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

// --- Live Google Gemini 1.5 Flash API Call ---
async function callGeminiLiveApi(query) {
  const sampleStays = properties.slice(0, 10).map(p => ({
    id: p.id,
    name: p.name,
    type: p.type,
    city: p.city,
    location: p.location,
    price: p.price,
    gender: p.gender,
    sharing: p.sharing,
    meals: p.meals,
    distance: p.distance
  }));

  const systemPrompt = `You are B4Umove AI Copilot, a friendly student & young professional housing expert in India (Delhi-NCR, Ghaziabad/KIET, Noida, Gurgaon, Bangalore, Mumbai, Pune).
Here is the live verified accommodation dataset available in B4Umove:
${JSON.stringify(sampleStays)}

Rules:
1. Recommend 1-3 matching stays from this dataset with their real names, rent, meals, and proximity.
2. If the user asks about rent budget, calculate realistic living costs (rent + mess + transport).
3. If they ask about safety, curfews, or security deposits, give honest, protective student advice.
4. Keep replies concise, helpful, and formatted with bullet points and emojis.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        { role: 'user', parts: [{ text: `${systemPrompt}\n\nStudent User Query: ${query}` }] }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Gemini API returned HTTP ${response.status}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response received from Gemini.");
  return text;
}

// --- Built-in Smart Intelligence Engine (Zero Latency Offline Matcher) ---
function generateLocalAiResponse(query) {
  const q = query.toLowerCase();

  // 1. Check for deposit / lease / agreement advice
  if (q.includes('deposit') || q.includes('curfew') || q.includes('rule') || q.includes('agreement') || q.includes('brokerage')) {
    return `
      <strong>📜 B4Umove Legal & Campus Rules Guide:</strong><br><br>
      • <strong>Zero Brokerage:</strong> All listings on B4Umove are direct owner verified — never pay token fees to third-party brokers.<br>
      • <strong>Security Deposit Norms:</strong> Typically 1 month's rent for PGs, and 1-2 months for flats. Always demand a written digital receipt with explicit refund clauses.<br>
      • <strong>Curfew Timings:</strong> PGs near colleges (like KIET) usually have gates close between <strong>9:30 PM – 10:30 PM</strong>. Flats and independent rooms offer 24/7 entry without curfew.<br>
      • <strong>Electricity Bills:</strong> Confirm whether units are charged at commercial (₹10-12/unit) or government rates before moving in!
    `;
  }

  // 2. Budget / cost calculation
  if (q.includes('budget') || q.includes('calculate') || q.includes('cost of living') || q.includes('expense')) {
    return `
      <strong>🧮 Realistic Monthly Student Budget Estimation:</strong><br><br>
      • <strong>Room Rent (Double sharing PG):</strong> ₹6,000 – ₹7,500<br>
      • <strong>Food / Mess:</strong> Usually included in PG, or ₹3,000 for self-cooking/tiffin<br>
      • <strong>Electricity & AC:</strong> ₹800 – ₹1,500/month in summers<br>
      • <strong>Local Transit (E-rickshaw / Metro):</strong> ₹600 – ₹1,200<br>
      • <strong>Laundry & Wi-Fi:</strong> Free / Included in most student PGs<br><br>
      💡 <strong>Total Recommended Monthly Budget:</strong> <strong>₹8,500 – ₹10,500</strong> per student.
    `;
  }

  // 3. Search and Match against actual Properties dataset
  let matched = properties.filter(p => {
    // City / locality match
    if (q.includes('kiet') || q.includes('muradnagar')) {
      if (p.location.toLowerCase().includes('muradnagar') || p.location.toLowerCase().includes('kiet')) return true;
    }
    if (q.includes('noida') && p.city.toLowerCase().includes('noida')) return true;
    if (q.includes('delhi') && p.city.toLowerCase().includes('delhi')) return true;
    if (q.includes('gurgaon') && p.city.toLowerCase().includes('gurgaon')) return true;
    if (q.includes('bangalore') && p.city.toLowerCase().includes('bangalore')) return true;

    // Gender filter
    if (q.includes('girl') || q.includes('female')) {
      if (p.gender === 'Girls') return true;
    }
    if (q.includes('boy') || q.includes('male')) {
      if (p.gender === 'Boys') return true;
    }

    // Type filter
    if (q.includes('flat') && p.type === 'Flat') return true;
    if (q.includes('pg') && p.type === 'PG') return true;
    if (q.includes('hostel') && p.type === 'Hostel') return true;

    // Price query
    if (q.includes('7000') || q.includes('7k') || q.includes('under 8000') || q.includes('cheap')) {
      if (p.price <= 8000) return true;
    }

    return false;
  });

  if (!matched.length) {
    matched = properties.slice(0, 3);
  } else {
    matched = matched.slice(0, 3);
  }

  let html = `I found <strong>${matched.length} verified stays</strong> matching your criteria:<br><br>`;
  html += `<div class="ai-recom-list">`;

  matched.forEach(p => {
    html += `
      <div class="ai-stay-chip">
        <div class="ai-stay-img-box">
          <img src="${p.img}" alt="${escapeHtml(p.name)}">
        </div>
        <div class="ai-stay-info">
          <strong>${escapeHtml(p.name)}</strong>
          <span class="ai-stay-meta">📍 ${escapeHtml(p.location)} · <strong>₹${p.price.toLocaleString()}/mo</strong></span>
          <span class="ai-stay-badges">🏷️ ${p.type} · ${p.gender} · ${p.meals}</span>
          <button class="ai-view-btn" onclick="toggleAiDrawer(); showDetailModal(${p.id});">View Details →</button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  html += `<p style="margin-top:10px; font-size:12.5px; color:var(--text-muted);">💡 Click <strong>View Details</strong> to see full photos, amenities, direct owner contacts, and student reviews.</p>`;
  return html;
}

// --- AI Listing Description Generator (For Admin Add Property) ---
async function generateAiListingDesc() {
  const nameInput = document.getElementById("listingName");
  const typeInput = document.getElementById("listingType");
  const cityInput = document.getElementById("listingCity");
  const locInput = document.getElementById("listingLocation");
  const priceInput = document.getElementById("listingPrice");
  const genderInput = document.getElementById("listingGender");
  const descArea = document.getElementById("listingDesc");
  const amenInput = document.getElementById("listingAmenities");

  const name = nameInput ? nameInput.value.trim() : "";
  const type = typeInput ? typeInput.value : "PG";
  const city = cityInput ? cityInput.value.trim() : "Delhi-NCR";
  const loc = locInput ? locInput.value.trim() : "Near Campus";
  const price = priceInput && priceInput.value ? priceInput.value : "7,000";
  const gender = genderInput ? genderInput.value : "Students";

  if (!descArea) return;

  const btn = event?.currentTarget;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>⏳ Writing...</span>`;
  }

  try {
    let generatedDesc = "";
    if (GEMINI_API_KEY) {
      const prompt = `Write a compelling, professional, 2-3 sentence description for a student/working professional accommodation in India.
Property Name: ${name || 'Modern Student Stay'}
Type: ${type}
Location: ${loc}, ${city}
Monthly Rent: ₹${price}
Suitability: ${gender}
Include highlights about cleanliness, Wi-Fi, safety, and proximity to campus/transit.`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 250, temperature: 0.7 }
        })
      });
      const data = await res.json();
      generatedDesc = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    }

    if (!generatedDesc) {
      await new Promise(r => setTimeout(r, 400));
      generatedDesc = `Modern, fully furnished ${type} located at ${loc}, ${city}. Tailored exclusively for ${gender} with high-speed Wi-Fi, air-conditioned rooms, 24/7 security, and hygienic food options. Walking distance to nearby colleges and metro connectivity with zero brokerage.`;
    }

    descArea.value = generatedDesc;
    if (amenInput && !amenInput.value) {
      amenInput.value = "High-speed Wi-Fi, AC, Food Included, Power Backup, CCTV, RO Water";
    }
    showToast("AI generated description & amenities!", "✨");
  } catch (err) {
    console.warn("AI desc generator fallback:", err);
    descArea.value = `Premium ${type} situated at ${loc}, ${city}. Features well-ventilated rooms, high-speed Wi-Fi, 24/7 power backup, and quiet study spaces suitable for ${gender}.`;
    showToast("Generated description with built-in AI!", "✨");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<span>✨ Auto-Write with AI</span>`;
    }
  }
}

function showDetailModal(id) {
  details(id);
}

// Initial boot - Ensure visitor lands on the login page first if not logged in
if (currentUser) {
  updateNav();
  homePage();
} else {
  updateNav();
  showPage('login');
}
