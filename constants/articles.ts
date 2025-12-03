export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  contentImage?: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    quote?: {
      text: string;
      author?: string;
    };
  };
}



export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "rare-fine-wine-collection",
    title: "Rare, Fine Wine: Inside Our Exclusive Collection Of Wine",
    excerpt: "Discover the stories behind every bottle in our carefully curated wine collection.",
    date: "25 April 2025",
    readTime: "7 Min Read",
    category: "Wine",
    heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Our wine collection is more than a carefully curated assortment—it's a living archive of terroir, tradition, and time.",
      sections: [
        {
          heading: "Every Bottle Holds A Legacy Worth Pouring",
          body: "Our wine collection is more than a carefully curated assortment—it's a living archive of terroir, tradition, and time. Each bottle has been selected not only for its flavor profile but for the story it tells: vineyards passed down through generations, harvests shaped by soil and sun, and winemakers who treat every vintage like an act of devotion. From rare Bordeaux to limited-edition Burgundies, our cellar is a tribute to excellence in liquid form.",
        },
        {
          heading: "Crafted Pairings That Speak In Flavor And Silence",
          body: "Wine is a language, and at SAVORIA, our sommelier is fluent. Every dish on our menu has been thoughtfully paired with selections from our collection, creating symphonies of taste that elevate both plate and pour. Whether it's a bold Cabernet complementing a perfectly seared ribeye or a delicate Sancerre dancing alongside fresh oysters, each pairing is designed to create moments of quiet revelation.",
        },
        {
          heading: "The Cellar Experience: Where Rarity Meets Ritual",
          body: "For those seeking an even more intimate encounter with our collection, we offer private cellar experiences. Step into a temperature-controlled sanctuary where bottles rest in reverent silence, each one waiting for its moment. Our wine director will guide you through vertical tastings, rare vintages, and collector's gems you won't find anywhere else. It's not just a tasting—it's a journey through vineyards, climates, and decades.",
        },
        {
          heading: "Tasting Notes & Pairing Rituals",
          body: "Our sommelier-led experiences are designed to educate and inspire. Learn the subtle difference between old-world and new-world wines, discover how oak aging transforms flavor, and understand why certain regions produce certain styles. We believe that wine appreciation is both an art and a science, and we're here to share both with you. Each tasting is a masterclass, each pour a new perspective.",
        },
      ],
      quote: {
        text: "Wine Is Bottled Poetry — But In The Hands Of A Master, It Becomes A Sonnet Of Soil, Sun, And Soul. Every Glass Is An Invitation To Taste The Past, Celebrate The Present, And Toast To Something Timeless.",
      },
    },
  },
  {
    id: 2,
    slug: "seafood-experience",
    title: "Beneath The Surface: A Deep Dive Into Seafood Experience",
    excerpt: "An exploration of oceanic flavors and the art of sustainable seafood sourcing.",
    date: "21 May 2025",
    readTime: "5 Min Read",
    category: "Cuisine",
    heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "The ocean holds mysteries and flavors that transcend ordinary dining—each wave brings a new story to our tables.",
      sections: [
        {
          heading: "From Ocean To Table With Purpose",
          body: "Our seafood program is built on relationships with sustainable fisheries and local coastal communities. Every morning, our chefs receive the freshest catch, selected for quality, sustainability, and flavor. We work directly with fishermen who understand the delicate balance between harvest and preservation, ensuring that the ocean's bounty remains abundant for generations to come.",
        },
        {
          heading: "The Art Of Preparation",
          body: "Seafood demands respect and precision. Our culinary team has mastered techniques from around the world—Japanese sashimi cuts, French seafood bisques, Mediterranean grilling, and beyond. Each method is chosen to highlight the natural character of the fish, whether it's the buttery richness of wild salmon or the sweet delicacy of day-boat scallops.",
        },
        {
          heading: "Seasonal Celebrations",
          body: "Our menu evolves with the tides and seasons. Spring brings soft-shell crab and pristine halibut. Summer delivers succulent lobster and sweet stone crab. Fall and winter are for rich oysters and hearty monkfish. This rhythm keeps our offerings fresh, exciting, and deeply connected to nature's calendar.",
        },
        {
          heading: "Sustainability Is Our Standard",
          body: "We believe that exceptional dining should never come at the expense of our oceans. That's why we're committed to sourcing only from certified sustainable fisheries, supporting catch limits, and celebrating underutilized species. When you dine with us, you're not just enjoying a meal—you're supporting a healthier planet.",
        },
      ],
      quote: {
        text: "The sea, once it casts its spell, holds one in its net of wonder forever. On every plate, we honor that magic.",
      },
    },
  },
  {
    id: 3,
    slug: "fire-kissed-desserts",
    title: "Burnt Sugar & Flame: The Allure Of Fire-Kissed Desserts",
    excerpt: "Where heat meets sweetness, creating caramelized masterpieces that linger on the palate.",
    date: "9 June 2025",
    readTime: "6 Min Read",
    category: "Desserts",
    heroImage: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Fire transforms sugar into liquid gold, creating textures and flavors that dance between bitter and sweet.",
      sections: [
        {
          heading: "The Alchemy Of Caramelization",
          body: "There's magic in the controlled application of heat to sugar. As temperatures rise, simple sweetness gives way to complex, toasted notes—hints of toffee, butterscotch, and even savory undertones. Our pastry team has spent years perfecting the art of caramelization, knowing exactly when to pull back the flame to achieve that perfect balance of color, flavor, and texture.",
        },
        {
          heading: "Signature Fire-Kissed Creations",
          body: "Our dessert menu features classics reimagined through flame: crème brûlée with its iconic torched sugar crust, baked Alaska crowned with caramelized meringue peaks, and our signature burnt Basque cheesecake with its deeply caramelized top. Each dessert is a study in contrasts—creamy interiors against crisp, caramelized exteriors.",
        },
        {
          heading: "Tools Of The Trade",
          body: "From traditional kitchen torches to wood-fired ovens, we employ various methods to achieve different caramelization effects. Some desserts benefit from the intense, focused heat of a blowtorch, while others develop their character in the gentle, ambient heat of our custom-built dessert oven. Each tool serves a purpose, each technique tells a story.",
        },
        {
          heading: "Beyond Sweetness",
          body: "What makes fire-kissed desserts truly special is their ability to transcend simple sweetness. The slight bitterness of caramelized sugar, the smoky notes from open flame, the textural contrast between smooth and crisp—these elements create desserts that are sophisticated, memorable, and utterly craveable.",
        },
      ],
      quote: {
        text: "Sugar and fire—the oldest alchemy. In that brief encounter, sweetness is transformed into something far more profound.",
      },
    },
  },
  {
    id: 4,
    slug: "art-of-plating",
    title: "The Art Of Plating: Where Culinary Meets Visual Mastery",
    excerpt: "Every plate is a canvas where color, texture, and composition tell a delicious story.",
    date: "15 June 2025",
    readTime: "8 Min Read",
    category: "Technique",
    heroImage: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Before the first bite, a dish must captivate the eyes. Plating is where culinary art and visual design become one.",
      sections: [
        {
          heading: "Composition Principles",
          body: "Just as a painter considers balance, focal points, and negative space, our chefs approach each plate as a composition. The main protein often serves as the focal point, supported by complementary elements arranged to guide the eye and create visual flow. We consider height, color contrast, and the interplay of textures to create plates that are as beautiful as they are delicious.",
        },
        {
          heading: "Color Theory On The Plate",
          body: "Vibrant microgreens against seared proteins, golden turmeric sauces beside deep purple beets, emerald herb oils drizzled with precision—color is a language we speak fluently. We source ingredients not just for flavor but for their visual contribution, creating plates that celebrate the natural palette of seasonal produce.",
        },
        {
          heading: "Texture As Visual Element",
          body: "Smooth purées provide canvases for crispy garnishes. Glossy glazes catch the light. Rough-hewn bread contrasts with silky spreads. Texture isn't just about mouthfeel—it's about creating visual interest and depth on the plate. Each element is chosen to contribute to both the tactile and visual experience.",
        },
        {
          heading: "The Final Touch",
          body: "Plating is the final act of creation, the moment where all preparation converges. Our chefs move with precision and intention, placing each component with purpose. A last-minute garnish, a careful drizzle of sauce, a sprinkle of finishing salt—these final touches transform a dish from excellent to extraordinary.",
        },
      ],
      quote: {
        text: "We eat first with our eyes. A beautiful plate awakens anticipation and elevates every bite that follows.",
      },
    },
  },
  {
    id: 5,
    slug: "farm-to-table-philosophy",
    title: "Farm To Table: Sourcing The Finest Seasonal Ingredients",
    excerpt: "Building relationships with farmers who share our commitment to quality and sustainability.",
    date: "28 June 2025",
    readTime: "6 Min Read",
    category: "Ingredients",
    heroImage: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Great cooking begins long before the kitchen—it starts in the soil, with farmers who treat their craft as seriously as we treat ours.",
      sections: [
        {
          heading: "Partnerships Built On Trust",
          body: "We've spent years cultivating relationships with local farmers, ranchers, and artisan producers. These aren't transactional relationships—they're partnerships built on mutual respect and shared values. We visit farms regularly, understanding growing practices and seasonal cycles. This connection ensures we receive not just ingredients, but stories we can share with every dish.",
        },
        {
          heading: "Seasonal Menu Evolution",
          body: "Our menu is a living document that changes with the seasons. Spring brings tender asparagus and peas, summer offers heirloom tomatoes and stone fruits, fall delivers squashes and root vegetables, winter showcases hearty greens and citrus. This seasonal approach ensures peak flavor and supports natural growing cycles rather than forcing nature's hand.",
        },
        {
          heading: "Quality Over Convenience",
          body: "We could source ingredients from global suppliers year-round, but we choose a different path. We'd rather wait for local strawberries in June than serve imported ones in January. We'd rather feature what's naturally abundant than force ingredients out of season. This patience is rewarded with superior flavor and integrity in every dish.",
        },
        {
          heading: "Supporting Local Economy",
          body: "When you dine at SAVORIA, you're supporting an entire community. Your meal creates demand that supports small farms, preserves agricultural land, and keeps food production local. It's a cycle of sustainability that benefits everyone—from the farmer to the chef to you.",
        },
      ],
      quote: {
        text: "The best ingredient is the one that traveled the shortest distance from soil to plate. Freshness has a flavor all its own.",
      },
    },
  },
 
 {
  id: 6,
  slug: "craft-cocktail-culture",
  title: "Liquid Artistry: The Evolution Of Our Craft Cocktail Culture",
  excerpt: "Behind our bar, mixology becomes an art form where spirits, botanicals, and creativity collide.",
  date: "5 July 2025",
  readTime: "7 Min Read",
  category: "Beverages",
  heroImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=90",
  contentImage: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=90",
  content: {
    intro: "A cocktail is more than the sum of its ingredients—it's a narrative in a glass, a sensory journey from first sip to last.",
    sections: [
      {
        heading: "The Mixologist As Artist",
        body: "Our bartenders are craftspeople who've dedicated years to understanding spirits, flavor profiles, and technique. They know how citrus acidity balances sweetness, how dilution affects texture, and how temperature impacts aroma. Each cocktail is mixed with the precision of a chemist and the creativity of an artist, resulting in drinks that surprise and delight.",
        
      },
      {
        heading: "House-Made Everything",
        body: "We make our own syrups, infusions, bitters, and tinctures. Our bar is stocked with house-infused spirits—vanilla bourbon, chili tequila, herb-infused gin. We cold-press our juices daily and craft our own tonic water. This commitment to house-made ingredients means our cocktails taste like nowhere else, with layers of flavor that can't be replicated.",
        
      },
      {
        heading: "Seasonal Cocktail Menus",
        body: "Like our food menu, our cocktail list evolves with the seasons. Summer brings refreshing spritzes with fresh herbs and berries. Fall features warm spices and apple-based drinks. Winter showcases rich, spirit-forward cocktails. Spring celebrates renewal with floral and citrus notes. Each season tells its own liquid story.",
        
      },
      {
        heading: "The Theater Of Service",
        body: "Presentation matters. We serve cocktails in vintage glassware, garnish with edible flowers and dehydrated citrus wheels, and sometimes add a touch of theater—smoke, fire, or tableside preparation. These aren't gimmicks; they're enhancements to the experience, ways to engage all the senses and create memorable moments.",
       
      },
    ],
    quote: {
      text: "A great cocktail is a conversation between spirit and soul, mixed with intention and served with style.",
    },
  },
},

  {
    id: 7,
    slug: "farm-to-table-philosophy",
    title: "From Farm To Table: How We Build A Seasonal, Local Menu",
    excerpt: "Every plate begins with a farmer, a field, and a commitment to ingredients at their peak.",
    date: "12 July 2025",
    readTime: "6 Min Read",
    category: "Dining",
    heroImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Good food starts long before it reaches the plate. Our farm-to-table philosophy is about honoring the land, the people who tend it, and the ingredients that define each season.",
      sections: [
        {
          heading: "Sourcing From Nearby Farms",
          body: "We work directly with small local producers who share our values. Weekly farm visits, early-morning market runs, and long-standing relationships mean we know exactly where our food comes from. That proximity lets us respond to what’s freshest, not just what’s available on a truck.",
          
        },
        {
          heading: "Designing A Seasonal Menu",
          body: "Our chefs write menus around harvest calendars, not trends. When tomatoes are bursting with flavor, they’re the star; when root vegetables are at their sweetest, they move to the center of the plate. Dishes rotate often, so what you’re eating reflects the exact moment in the season.",
          
        },
        {
          heading: "Respecting Every Ingredient",
          body: "We practice whole-ingredient cooking—bones become stock, stems turn into pesto, citrus peels are candied or infused. This approach reduces waste and brings deeper flavor to our food. When you’ve met the person who grew your carrots, you treat those carrots with respect.",
          
        },
        {
          heading: "Supporting A Sustainable Future",
          body: "Buying local isn’t just about taste; it’s about community and sustainability. Shorter supply chains mean fewer emissions, and stronger relationships with growers help keep small farms thriving. Every dish you order becomes a vote for a healthier, more connected food system.",
          
        },
      ],
      quote: {
        text: "Every ingredient has a story; we choose the ones worth telling.",
      },
    },
  },

  {
    id: 8,
    slug: "hospitality-and-care",
    title: "Hospitality Redefined: The Art Of Caring For Every Guest",
    excerpt: "Service is technique; hospitality is how we make you feel from the moment you walk in.",
    date: "19 July 2025",
    readTime: "6 Min Read",
    category: "Hospitality",
    heroImage: "https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Hospitality is the invisible ingredient that turns a meal into a memory. Behind every smile, every recommendation, and every small gesture is a culture of care we practice daily.",
      sections: [
        {
          heading: "Warm Welcomes, Thoughtful Goodbyes",
          body: "Your experience starts before you sit down. From the way we greet you at the door to how we say goodnight, we focus on genuine, unforced connection. Names are remembered, preferences are noted, and every guest is treated as a regular—even on their first visit.",
          
        },
        {
          heading: "Anticipating Needs Before They're Spoken",
          body: "Great service isn’t just reacting—it’s anticipating. A fresh napkin appears before you ask, a wine top-up arrives at the perfect moment, and a quieter table is offered when we sense you need it. We train our team to read the room and respond to subtle cues with care.",
          
        },
        {
          heading: "Training A Culture Of Care",
          body: "Our team rehearses hospitality the way a kitchen practices recipes. Regular trainings, service role-plays, and open debriefs after each shift help us refine how we interact with guests. Everyone is empowered to fix problems on the spot, because caring shouldn’t need permission.",
          
        },
        {
          heading: "Designing Spaces For Comfort And Connection",
          body: "Care shows up in the details you might not notice at first: the height of your chair, the softness of the lighting, the way sound travels across the room. We’ve designed our space to encourage conversation, relaxation, and that feeling of being looked after without being watched.",
          
        },
      ],
      quote: {
        text: "Service is what we do; hospitality is how we make you feel.",
      },
    },
  },

  {
    id: 9,
    slug: "coffee-and-brunch-culture",
    title: "Morning Rituals: Inside Our Specialty Coffee & Brunch Program",
    excerpt: "From farm-sourced beans to chef-driven plates, our mornings are crafted to be worth waking up for.",
    date: "26 July 2025",
    readTime: "7 Min Read",
    category: "Coffee & Brunch",
    heroImage: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=90",
    contentImage: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=90",
    content: {
      intro: "Mornings set the tone for the day, and we’ve built our coffee and brunch program around rituals that feel slow, intentional, and satisfying.",
      sections: [
        {
          heading: "Sourcing Specialty Beans",
          body: "We partner with roasters who work transparently with farmers, paying fairly for quality beans. Each coffee on our menu is chosen for its distinct origin story and flavor profile—bright and fruity, deep and chocolatey, or delicately floral.",
          
        },
        {
          heading: "Precision In Every Pour",
          body: "Our baristas treat every espresso shot and pour-over like a tiny science experiment. Dialed-in grinders, carefully measured doses, strict brew times, and perfectly textured milk all come together to create consistent, café-level coffee in a restaurant setting.",
          
        },
        {
          heading: "Brunch With A Chef's Touch",
          body: "Our brunch menu goes beyond the usual suspects. House-baked breads, seasonal jams, slow-poached eggs, and thoughtful vegetarian options mean every plate is composed with the same care as our dinner service—just with a sunnier disposition.",
         
        },
        {
          heading: "Creating A Morning Community",
          body: "Whether you’re grabbing a quick flat white or settling in with friends for a long brunch, we want mornings here to feel like a ritual. Shared tables, easygoing music, and a relaxed pace invite you to linger, connect, and ease into your day.",
         
        },
      ],
      quote: {
        text: "Great mornings aren’t rushed—they’re brewed, plated, and shared.",
      },
    },
  },

  {
  id: 10,
  slug: "pastry-and-dessert-artistry",
  title: "Sweet Endings: Inside Our Pastry & Dessert Atelier",
  excerpt: "Our desserts are more than a final course—they're a closing scene crafted to linger in your memory.",
  date: "2 August 2025",
  readTime: "6 Min Read",
  category: "Desserts",
  heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=90",
  contentImage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=90",
  content: {
    intro: "Dessert is the final chapter of your meal's story, and we believe it should be as carefully written as the first bite.",
    sections: [
      {
        heading: "Baking From Scratch, Every Day",
        body: "Our pastry kitchen starts before sunrise, mixing, proofing, and baking everything in-house. From flaky tart shells to sponge cakes and custards, we skip shortcuts and pre-made bases so every texture tastes alive and fresh.",
        
      },
      {
        heading: "Balancing Flavor And Texture",
        body: "We think about contrast in every dessert—crisp against creamy, tart against sweet, warm against cold. A single plate might bring together roasted fruit, silky mousse, and a whisper of salt to keep your palate curious from first spoonful to last.",
        
      },
      {
        heading: "Visual Poetry On The Plate",
        body: "Presentation matters as much here as in our savory courses. Edible flowers, delicate sugar work, and bold color contrasts turn each dessert into a small work of art—almost too beautiful to eat, but impossible to resist.",
        
      },
      {
        heading: "Pairing Desserts With Drinks",
        body: "The right pairing can transform dessert into a full experience. We match sweets with espresso, digestifs, dessert wines, and even low-ABV cocktails, finding harmonies and contrasts that make both the glass and the plate shine.",
       
      },
    ],
    quote: {
      text: "A beautiful dessert doesn't end the meal—it keeps the story going.",
    },
  },
},

];

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return ARTICLES.find((article) => article.slug === slug);
};

// Helper function to get featured articles (for home page)
export const getFeaturedArticles = (count: number = 2): Article[] => {
  return ARTICLES.slice(0, count);
};

// Helper function to get similar articles (exclude current)
export const getSimilarArticles = (currentSlug: string, count: number = 2): Article[] => {
  return ARTICLES.filter((article) => article.slug !== currentSlug).slice(0, count);
};