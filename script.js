// आपकी Amazon Idea Lists का डेटा
const collections = [
  //1. Daily Use Smart Tools
  {
    badge: "⚡ Daily Must-Have",
    title: "Daily Use Smart Tools",
    subtitle: "Must-have gadgets to make ",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/3LJSCXBQLXR1?&linkCode=ll2&tag=sunilcreato0b-21&linkId=99b8d7606534e153e6eff73c639b5086&ref_=as_li_ss_tl",
    previews: [
      {
        name: "Lint Remover",
        img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Foldable Umbrella",
        img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Toothbrush Holder",
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80",
      },
    ],
  },
  //2. Kitchen & Dining Essentials
  {
    badge: "🍳 Kitchen Special",
    title: "Kitchen & Dining Essentials",
    subtitle: "Choppers, jars, racks & dispensers",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/3LJVUSYIM1WO?&linkCode=ll2&tag=sunilcreato0b-21&linkId=6464be2bebfe0619ca4b0759b4aaad83&ref_=as_li_ss_tl",
    previews: [
      {
        name: "Veg Chopper",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Oil Dispenser",
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Spice Container",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80",
      },
    ],
  },
  //3. Body Care & Grooming Essentials
  {
    badge: "✨ Self Care",
    title: "Body Care & Grooming Essentials",
    subtitle: "Trimmers, skincare & wellness tools",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/20KHXJSBOVKX4?&linkCode=ll2&tag=sunilcreato0b-21&linkId=b6eb660b2f50df2ae5687601b10238bc&ref_=as_li_ss_tl",
    previews: [
      {
        name: "Beard Trimmer",
        img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Face Massager",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Portable Heated",
        img: "https://m.media-amazon.com/images/I/711roD-T+CL._SL1500_.jpg",
      },
    ],
  },
  //4. Kids Toys & Learning Tools
  {
    badge: "🧸 Kids & Fun",
    title: "Kids Toys & Learning Tools",
    subtitle: "Educational toys, LCD slate & games",
    amazonLink:  "https://www.amazon.in/hz/wishlist/ls/3SDDQ06DL0KQY?&linkCode=ll2&tag=sunilcreato0b-21&linkId=0ff06350ed9dfa86c7c80dfa8cea6055&ref_=as_li_ss_tl",
    previews: [
      {
        name: "Toy Train Set",
        img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Panda Night Light",
        img: "https://m.media-amazon.com/images/I/71AyfKwgZnL._SL1254_.jpg",
      },
      {
        name: "Building Blocks",
        img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&auto=format&fit=crop&q=80",
      },
    ],
  },
//=========================================
  // 5. Home Decor & Aesthetic Setup
  {
    badge: "🔥 50+ Items",
    title: "Home Decor & Aesthetic Setup",
    subtitle: "Transform your living room",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/RVK3MT2SRVYM?&linkCode=ll2&tag=sunilcreato0b-21&linkId=402a000584f5f0f61c6aea13b9b691dd&ref_=as_li_ss_tl",
    previews: [
      {
        name: "Warm Fairy Lights",
        img: "https://www.melaniejadedesign.com/wp-content/uploads/2023/12/amazon-essential-moodboard-960x1440.jpg",
      },
            {
        name: "Boy Buddha",
        img: "https://images-eu.ssl-images-amazon.com/images/I/815eXSPF+4L._AC_UL600_SR600,600_.jpg",
      },

      {
        name: "Table Lamp Niwlix",
        img: "https://m.media-amazon.com/images/I/41ZQFVf13wL._SX342_SY445_QL70_FMwebp_.jpg",
      },
    ],
  },

  // 6. Gaming stup & Content Creation
  {
    badge: "📸 Must-Haves",
    title: "Gaming Setup & Content Creation",
    subtitle: "Tripods, RGB lights & wireless mics Gaming stup",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/GHLXI0MRG9ME?&linkCode=ll2&tag=sunilcreato0b-21&linkId=aaa93c3ddba1842ec516d4b5d55de961&ref_=as_li_ss_tl", // यहाँ अपना Amazon wishlist लिंक डालें
    previews: [
      {
        name: "Gaming Headset",
        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "RGB Ring Light",
        img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Content Creation",
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  // 7. Mobile & Laptop Accessories
  {
    badge: "🎮 Gamer Zone",
    title: "Mobile & Laptop Accessories",
    subtitle: "Mobile, Laptop, USB, Mobile item",
    amazonLink:
      "https://www.amazon.in/hz/wishlist/ls/12XF8L4VOVEFA?&linkCode=ll2&tag=sunilcreato0b-21&linkId=9e1212bf8865bcfc295cc4f403dc7344&ref_=as_li_ss_tl", // आपका Public हुआ Electronics/Gaming लिंक
    previews: [
      {
        name: "Oppo Reno16c 5G",
        img: "https://m.media-amazon.com/images/I/71XRiNSJbeL._SL1500_.jpg",
      },
      {
        name: "Smart gest",
        img: "https://media.gettyimages.com/id/1335669510/vector/vector-isometric-devices-set.jpg",
      },
      {
        name: "Laptop hp",
        img: "https://m.media-amazon.com/images/I/61bWhgr-qgL._SL1500_.jpg",
      },
    ],
  },

  // 8. Men's Fashion & Accessories
  {
    badge: "🔥 Trending",
    title: "Men's Fashion & Accessories",
    subtitle: "Watches, wallets & sunglasses",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/1UGH4J96WG5XM?&linkCode=ll2&tag=sunilcreato0b-21&linkId=4b4a6d940775a49bfecea86882697a70&ref_=as_li_ss_tl", // यहाँ अपना Amazon wishlist लिंक डालें
    previews: [
      {
        name: "Analog Watch",
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Leather Wallet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq69Yom11PsSg3GZtrnyNX4vm7pEGQjZmChP21ODAclZ7PDH-9VZnAf7Yw&s=10",
      },
      {
        name: "Sunglasses",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  // 9. Women's Fashion & Accessories
  {
    badge: "🔥 Trending",
    title: "Women's fashion & Accessories",
    subtitle: "Desk lamps, laptop stands & organizers",
    amazonLink: "https://www.amazon.in/hz/wishlist/ls/356630H47UN2L?&linkCode=ll2&tag=sunilcreato0b-21&linkId=64d3aeed38c431b2c89031e7d0e6fda7&ref_=as_li_ss_tl", // यहाँ अपना Amazon wishlist लिंक डालें
    previews: [
      {
        name: "Fashion Handbags ",
        img: "https://static.fibre2fashion.com//articleresources/images/71/7074/SAdobeStock_247321133_Small.jpg",
      },
      {
        name: "One Piece Dress",
        img: "https://m.media-amazon.com/images/I/61Iv8PJQZ9L._SY879_.jpg",
      },
      {
        name: "Designer Daree",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIk_cz3p6cI-5Cl6ntK0jBOCBUxuxkHCG0KwYzLVfW35yPeo39ubhHKnc&s=10",
      },
    ],
  },
];


// कार्ड्स को पेज पर रेंडर (Render) करने का फंक्शन
const grid = document.getElementById('collections-grid');

collections.forEach(item => {
    // 3 फ़ोटो का HTML बनाना
    let thumbsHTML = item.previews.map(p => `
        <div class="thumb-item">
            <img src="${p.img}" alt="${p.name}">
            <span>${p.name}</span>
        </div>
    `).join('');

    // पूरा कार्ड HTML बनाना
    const cardHTML = `
        <div class="card">
            <div>
                <span class="badge">${item.badge}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-subtitle">${item.subtitle}</p>
                <div class="thumb-grid">
                    ${thumbsHTML}
                </div>
            </div>
            <a href="${item.amazonLink}" target="_blank" class="btn-amazon">
                👉 View List on Amazon
            </a>
        </div>
    `;

    grid.innerHTML += cardHTML;
});
