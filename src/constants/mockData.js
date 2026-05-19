// ─── Cuisine Categories ──────────────────────────────────────────────────────
export const CATEGORIES = [
  { id: "c1", name: "All", icon: "🍽️" },
  { id: "c2", name: "Burgers", icon: "🍔" },
  { id: "c3", name: "Pizza", icon: "🍕" },
  { id: "c4", name: "Sushi", icon: "🍣" },
  { id: "c5", name: "Indian", icon: "🍛" },
  { id: "c6", name: "Chinese", icon: "🥡" },
  { id: "c7", name: "Tacos", icon: "🌮" },
  { id: "c8", name: "Desserts", icon: "🍰" },
  { id: "c9", name: "Healthy", icon: "🥗" },
  { id: "c10", name: "BBQ", icon: "🥩" },
];

// ─── Promo Banners ───────────────────────────────────────────────────────────
export const BANNERS = [
  {
    id: "b1",
    title: "50% OFF",
    subtitle: "On your first order",
    code: "FIRST50",
    gradient: ["#FF6B35", "#FF8C60"],
    emoji: "🎉",
  },
  {
    id: "b2",
    title: "Free Delivery",
    subtitle: "Orders above ₹25",
    code: "FREEDEL",
    gradient: ["#2EC4B6", "#45D4C8"],
    emoji: "🚀",
  },
  {
    id: "b3",
    title: "Weekend Feast",
    subtitle: "Extra 20% off Sat & Sun",
    code: "WKND20",
    gradient: ["#8B5CF6", "#A78BFA"],
    emoji: "🎊",
  },
];

// ─── Restaurant Data ──────────────────────────────────────────────────────────
export const RESTAURANTS = [
  {
    id: "r1",
    name: "Burger Republic",
    cuisine: "American • Burgers • Fries",
    category: "Burgers",
    rating: 4.8,
    reviewCount: 2340,
    deliveryTime: "18-28 min",
    deliveryFee: "Free delivery",
    minOrder: "₹50",
    maxOrder: "₹100",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    isOpen: true,
    isFeatured: true,
    isPopular: true,
    tags: ["Bestseller", "Fast Delivery"],
    distance: "1.2 km",
    menu: [
      {
        id: "m1_1",
        name: "Classic Smash Burger",
        description:
          "Double smashed patties, American cheese, special sauce, pickles & onions on a brioche bun",
        price: 40.99,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
        category: "Burgers",
        isPopular: true,
        isVeg: false,
        calories: 680,
        rating: 4.9,
      },
      {
        id: "m1_2",
        name: "BBQ Bacon Stack",
        description:
          "Triple patty, crispy bacon, smoky BBQ sauce, jalapeños, cheddar",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
        category: "Burgers",
        isPopular: true,
        isVeg: false,
        calories: 890,
        rating: 4.7,
      },
      {
        id: "m1_3",
        name: "Crispy Chicken Deluxe",
        description:
          "Southern fried chicken, coleslaw, sriracha mayo, brioche bun",
        price: 14.49,
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
        category: "Chicken",
        isPopular: false,
        isVeg: false,
        calories: 720,
        rating: 4.6,
      },
      {
        id: "m1_4",
        name: "Truffle Parmesan Fries",
        description: "Golden fries, truffle oil, parmesan, fresh herbs",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
        category: "Sides",
        isPopular: true,
        isVeg: true,
        calories: 380,
        rating: 4.8,
      },
      {
        id: "m1_5",
        name: "Mushroom Swiss Burger",
        description:
          "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli",
        price: 15.49,
        image:
          "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
        category: "Burgers",
        isPopular: false,
        isVeg: false,
        calories: 640,
        rating: 4.5,
      },
      {
        id: "m1_6",
        name: "Oreo Milkshake",
        description:
          "Thick vanilla shake blended with Oreo cookies, topped with whipped cream",
        price: 7.49,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        category: "Drinks",
        isPopular: false,
        isVeg: true,
        calories: 560,
        rating: 4.7,
      },
    ],
  },
  {
    id: "r2",
    name: "Napoli Pizza Co.",
    cuisine: "Italian • Pizza • Pasta",
    category: "Pizza",
    rating: 4.7,
    reviewCount: 1890,
    deliveryTime: "25-40 min",
    deliveryFee: "₹1.99 delivery",
    minOrder: "₹15",
    maxOrder: "₹50",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    isOpen: true,
    isFeatured: true,
    isPopular: true,
    tags: ["Wood-fired", "Authentic"],
    distance: "2.1 km",
    menu: [
      {
        id: "m2_1",
        name: "Margherita Classica",
        description:
          "San Marzano tomatoes, fior di latte mozzarella, fresh basil, extra virgin olive oil",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
        category: "Pizza",
        isPopular: true,
        isVeg: true,
        calories: 720,
        rating: 4.9,
      },
      {
        id: "m2_2",
        name: "Diavola Spicy Salami",
        description:
          "Tomato base, mozzarella, spicy Calabrian salami, chilli flakes",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
        category: "Pizza",
        isPopular: true,
        isVeg: false,
        calories: 850,
        rating: 4.7,
      },
      {
        id: "m2_3",
        name: "Quattro Formaggi",
        description:
          "Mozzarella, gorgonzola, taleggio, parmigiano on white base",
        price: 21.99,
        image:
          "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
        category: "Pizza",
        isPopular: false,
        isVeg: true,
        calories: 920,
        rating: 4.6,
      },
      {
        id: "m2_4",
        name: "Spaghetti Carbonara",
        description: "Guanciale, egg yolk, pecorino romano, black pepper",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
        category: "Pasta",
        isPopular: true,
        isVeg: false,
        calories: 780,
        rating: 4.8,
      },
      {
        id: "m2_5",
        name: "Tiramisu",
        description:
          "Mascarpone cream, espresso-soaked ladyfingers, cocoa dusting",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
        category: "Desserts",
        isPopular: true,
        isVeg: true,
        calories: 420,
        rating: 4.9,
      },
    ],
  },
  {
    id: "r3",
    name: "Tokyo Sushi Bar",
    cuisine: "Japanese • Sushi • Ramen",
    category: "Sushi",
    rating: 4.9,
    reviewCount: 3120,
    deliveryTime: "30-45 min",
    deliveryFee: "₹2.49 delivery",
    minOrder: "₹20",
    maxOrder: "₹70",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    isOpen: true,
    isFeatured: true,
    isPopular: true,
    tags: ["Premium", "Chef Special"],
    distance: "3.4 km",
    menu: [
      {
        id: "m3_1",
        name: "Dragon Roll",
        description:
          "Shrimp tempura, cucumber, topped with avocado, spicy mayo, eel sauce",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
        category: "Rolls",
        isPopular: true,
        isVeg: false,
        calories: 520,
        rating: 4.9,
      },
      {
        id: "m3_2",
        name: "Salmon Sashimi (10pc)",
        description:
          "Premium Atlantic salmon, thinly sliced, served with wasabi & gari",
        price: 22.99,
        image:
          "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
        category: "Sashimi",
        isPopular: true,
        isVeg: false,
        calories: 340,
        rating: 4.8,
      },
      {
        id: "m3_3",
        name: "Tonkotsu Ramen",
        description:
          "Rich pork bone broth, chashu pork, soft egg, nori, bamboo shoots",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
        category: "Ramen",
        isPopular: true,
        isVeg: false,
        calories: 680,
        rating: 4.7,
      },
      {
        id: "m3_4",
        name: "Edamame",
        description: "Steamed salted edamame pods",
        price: 5.49,
        image:
          "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
        category: "Starters",
        isPopular: false,
        isVeg: true,
        calories: 120,
        rating: 4.5,
      },
      {
        id: "m3_5",
        name: "Mochi Ice Cream (3pc)",
        description:
          "Matcha, mango & strawberry mochi filled with premium ice cream",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&q=80",
        category: "Desserts",
        isPopular: true,
        isVeg: true,
        calories: 280,
        rating: 4.8,
      },
    ],
  },
  {
    id: "r4",
    name: "Spice Garden",
    cuisine: "Indian • Curry • Tandoor",
    category: "Indian",
    rating: 4.6,
    reviewCount: 987,
    deliveryTime: "20-35 min",
    deliveryFee: "Free delivery",
    minOrder: "₹18",
    maxOrder: "₹60",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    isOpen: true,
    isFeatured: false,
    isPopular: true,
    tags: ["Spicy", "Authentic"],
    distance: "1.8 km",
    menu: [
      {
        id: "m4_1",
        name: "Butter Chicken",
        description:
          "Tender chicken in rich tomato-butter-cream sauce, served with basmati rice",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
        category: "Mains",
        isPopular: true,
        isVeg: false,
        calories: 620,
        rating: 4.8,
      },
      {
        id: "m4_2",
        name: "Paneer Tikka Masala",
        description: "Grilled paneer cubes in aromatic masala gravy",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
        category: "Mains",
        isPopular: true,
        isVeg: true,
        calories: 540,
        rating: 4.7,
      },
      {
        id: "m4_3",
        name: "Garlic Naan (4pc)",
        description:
          "Soft tandoor-baked flatbreads brushed with garlic butter & cilantro",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=400&q=80",
        category: "Breads",
        isPopular: true,
        isVeg: true,
        calories: 280,
        rating: 4.6,
      },
      {
        id: "m4_4",
        name: "Lamb Biryani",
        description:
          "Slow-cooked basmati rice with tender lamb, saffron & fried onions",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1630851840406-f9dc7f7a6fd8?w=400&q=80",
        category: "Mains",
        isPopular: false,
        isVeg: false,
        calories: 780,
        rating: 4.9,
      },
      {
        id: "m4_5",
        name: "Mango Lassi",
        description: "Creamy yogurt drink blended with fresh Alphonso mango",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80",
        category: "Drinks",
        isPopular: true,
        isVeg: true,
        calories: 220,
        rating: 4.8,
      },
    ],
  },
  {
    id: "r5",
    name: "Dragon Palace",
    cuisine: "Chinese • Dim Sum • Noodles",
    category: "Chinese",
    rating: 4.5,
    reviewCount: 1456,
    deliveryTime: "22-35 min",
    deliveryFee: "₹1.49 delivery",
    minOrder: "₹16",
    maxOrder: "₹44",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
    isOpen: false,
    isFeatured: false,
    isPopular: false,
    tags: ["Dim Sum", "Noodles"],
    distance: "2.7 km",
    menu: [
      {
        id: "m5_1",
        name: "Har Gow Dumplings (6pc)",
        description: "Steamed translucent shrimp dumplings, a dim sum classic",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
        category: "Dim Sum",
        isPopular: true,
        isVeg: false,
        calories: 240,
        rating: 4.7,
      },
      {
        id: "m5_2",
        name: "Kung Pao Chicken",
        description:
          "Wok-fried chicken, peanuts, dried chillies, Sichuan peppercorn sauce",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=400&q=80",
        category: "Mains",
        isPopular: true,
        isVeg: false,
        calories: 580,
        rating: 4.6,
      },
      {
        id: "m5_3",
        name: "Dan Dan Noodles",
        description:
          "Wheat noodles in spicy sesame peanut sauce, minced pork, scallions",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
        category: "Noodles",
        isPopular: false,
        isVeg: false,
        calories: 620,
        rating: 4.5,
      },
    ],
  },
  {
    id: "r6",
    name: "Taco Loco",
    cuisine: "Mexican • Tacos • Burritos",
    category: "Tacos",
    rating: 4.4,
    reviewCount: 876,
    deliveryTime: "15-25 min",
    deliveryFee: "Free delivery",
    minOrder: "₹10",
    maxOrder: "₹132",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    isOpen: true,
    isFeatured: false,
    isPopular: false,
    tags: ["Cheap Eats", "Fast"],
    distance: "0.8 km",
    menu: [
      {
        id: "m6_1",
        name: "Street Tacos (3pc)",
        description:
          "Corn tortillas, carne asada, cilantro, diced onion, lime, salsa verde",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80",
        category: "Tacos",
        isPopular: true,
        isVeg: false,
        calories: 420,
        rating: 4.7,
      },
      {
        id: "m6_2",
        name: "Burrito Bowl",
        description:
          "Rice, black beans, guacamole, pico de gallo, grilled chicken, sour cream",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1615870216519-2f9fa575a43f?w=400&q=80",
        category: "Bowls",
        isPopular: true,
        isVeg: false,
        calories: 680,
        rating: 4.5,
      },
      {
        id: "m6_3",
        name: "Loaded Nachos",
        description:
          "Tortilla chips, melted cheddar, jalapeños, salsa, guacamole, sour cream",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80",
        category: "Sharing",
        isPopular: true,
        isVeg: true,
        calories: 760,
        rating: 4.6,
      },
    ],
  },
  {
    id: "r7",
    name: "Green Bowl Co.",
    cuisine: "Healthy • Salads • Bowls",
    category: "Healthy",
    rating: 4.6,
    reviewCount: 654,
    deliveryTime: "12-20 min",
    deliveryFee: "Free delivery",
    minOrder: "₹14",
    maxOrder: "₹40",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    isOpen: true,
    isFeatured: false,
    isPopular: false,
    tags: ["Vegan Friendly", "Organic"],
    distance: "1.5 km",
    menu: [
      {
        id: "m7_1",
        name: "Buddha Bowl",
        description:
          "Quinoa, roasted sweet potato, chickpeas, kale, tahini dressing, seeds",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
        category: "Bowls",
        isPopular: true,
        isVeg: true,
        calories: 480,
        rating: 4.8,
      },
      {
        id: "m7_2",
        name: "Avocado Power Toast",
        description:
          "Sourdough, smashed avocado, poached egg, cherry tomatoes, microgreens",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80",
        category: "Toasts",
        isPopular: true,
        isVeg: true,
        calories: 360,
        rating: 4.6,
      },
      {
        id: "m7_3",
        name: "Green Detox Smoothie",
        description: "Spinach, kale, banana, mango, ginger, coconut water",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80",
        category: "Drinks",
        isPopular: false,
        isVeg: true,
        calories: 180,
        rating: 4.5,
      },
    ],
  },
  {
    id: "r8",
    name: "Smoke & Fire BBQ",
    cuisine: "BBQ • Ribs • Steaks",
    category: "BBQ",
    rating: 4.8,
    reviewCount: 2100,
    deliveryTime: "35-50 min",
    deliveryFee: "₹2.99 delivery",
    minOrder: "₹25",
    maxOrder: "₹90",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    isOpen: true,
    isFeatured: true,
    isPopular: true,
    tags: ["Slow Smoked", "Premium Cuts"],
    distance: "4.2 km",
    menu: [
      {
        id: "m8_1",
        name: "BBQ Baby Back Ribs (Full Rack)",
        description:
          "12-hour slow-smoked pork ribs, house dry rub, signature BBQ sauce",
        price: 34.99,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
        category: "Ribs",
        isPopular: true,
        isVeg: false,
        calories: 1200,
        rating: 4.9,
      },
      {
        id: "m8_2",
        name: "Smoked Brisket Plate",
        description:
          "200g Texas-style smoked beef brisket, pickles, onions, white bread",
        price: 27.99,
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
        category: "Mains",
        isPopular: true,
        isVeg: false,
        calories: 880,
        rating: 4.8,
      },
      {
        id: "m8_3",
        name: "Mac & Cheese",
        description: "Creamy triple-cheese macaroni baked to golden perfection",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&q=80",
        category: "Sides",
        isPopular: true,
        isVeg: true,
        calories: 520,
        rating: 4.7,
      },
    ],
  },
];

// ─── Recent Orders (for Orders Screen) ───────────────────────────────────────
export const RECENT_ORDERS = [
  {
    id: "o1",
    restaurantName: "Burger Republic",
    restaurantImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
    items: ["Classic Smash Burger", "Truffle Parmesan Fries"],
    total: 20.98,
    date: "2026-05-18",
    status: "Delivered",
    rating: 5,
  },
  {
    id: "o2",
    restaurantName: "Tokyo Sushi Bar",
    restaurantImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=80",
    items: ["Dragon Roll", "Edamame", "Mochi Ice Cream"],
    total: 34.47,
    date: "2026-05-15",
    status: "Delivered",
    rating: 5,
  },
  {
    id: "o3",
    restaurantName: "Spice Garden",
    restaurantImage:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&q=80",
    items: ["Butter Chicken", "Garlic Naan", "Mango Lassi"],
    total: 26.97,
    date: "2026-05-12",
    status: "Cancelled",
    rating: null,
  },
];

// ─── Search Suggestions ──────────────────────────────────────────────────────
export const SEARCH_SUGGESTIONS = [
  "Butter Chicken",
  "Sushi",
  "Burger",
  "Pizza Margherita",
  "Tacos",
  "Ramen",
  "BBQ Ribs",
  "Salad Bowl",
];
