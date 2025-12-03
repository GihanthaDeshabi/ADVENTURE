interface GalleryImage {
    id: string;
    url: string;
    caption: string;
  }
  
  interface FeaturedPlace {
    id: number;
    title: string;
    description: string;
    image: string;
    fullDescription: string;
    location: string;
    bestTimeToVisit: string;
    entryFee: string;
    visitDuration: string;
    gallery: GalleryImage[];
  }
  
  const featuredPlaces: FeaturedPlace[] = [
        {
          id: 1,
          title: "Sigiriya Rock Fortress",
          description: "Ancient palace and fortress complex with stunning frescoes and lion sculptures.",
          image: "/56.jpg",
          fullDescription: `Sigiriya Rock Fortress, often hailed as the Eighth Wonder of the World, is one of Sri Lanka’s most breathtaking historical landmarks. Built in the 5th century by King Kashyapa, this UNESCO World Heritage Site is a masterpiece of ancient engineering, artistic brilliance, and architectural innovation. Rising 200 meters above the surrounding landscape, Sigiriya offers stunning panoramic views, mesmerizing frescoes, and intricate water gardens, making it a must-visit attraction for travelers.
          
          King Kashyapa (477–495 AD) built Sigiriya as his royal palace and fortress after seizing the throne from his father, King Dhatusena. Fearing retaliation from his brother, he strategically chose this massive rock formation as his secure stronghold. After Kashyapa’s death, the site was converted into a Buddhist monastery, which remained active for centuries before being abandoned. Sigiriya was rediscovered in the 19th century by British explorers, leading to extensive archaeological research that unveiled its historical and cultural significance.
          
          The ideal time to visit Sigiriya is during the dry season from January to April, when the weather is perfect for climbing and sightseeing. To experience the best views and cooler temperatures, an early morning visit is recommended. Watching the sunrise from the summit is an unforgettable experience, offering breathtaking golden hues over the surrounding forests and ancient ruins.
          
          Sigiriya Rock Fortress is not just a historical marvel but also a symbol of Sri Lanka’s rich heritage. Its ancient frescoes, symmetrical gardens, and panoramic views make it a dream destination for history enthusiasts, culture lovers, and adventure seekers. Whether you're fascinated by ancient civilizations, breathtaking landscapes, or unique architectural wonders, Sigiriya offers an unparalleled journey through time. Plan your visit today and uncover the secrets of this legendary Sri Lankan masterpiece.`,
          location: "Central Province, Sri Lanka",
          bestTimeToVisit: "Early morning or late afternoon",
          entryFee: "USD 30 for foreign tourists",
          visitDuration: "3-4 hours",
          gallery: [
            {
              id: "sig1",
              url: "/Place(sigiriyaG1).jpg",
              caption: "Aerial view of Sigiriya Rock"
            },
            {
              id: "sig2",
              url: "/Place(SigiriyaG2).jpg",
              caption: "Ancient rock wall paintings"
            },
            {
              id: "sig3",
              url: "/Place(SigiriyaG3).jpg",
              caption: "Drone view of sigiriya"
            },
            {
              id: "sig4",
              url: "/Place(sigiriyaaG4).jpg",
              caption: "Lions feet entrance"
            },
            {
              id: "sig5",
              url: "/Place(sigiriyaaG5).jpg",
              caption: "Water gardens at the base"
            },
            {
              id: "sig6",
              url: "/Place(sigiriyaaG6).jpg",
              caption: "front view of Sigiriya"
            }
          ]
        },
        {
          id: 2,
          title: "Mirissa Beach",
          description: "Pristine beach known for whale watching, surfing, and spectacular sunsets.",
          image: "/Place(mirissa).jpg",
          fullDescription: `Mirissa Beach, one of Sri Lanka’s most stunning coastal destinations, is renowned for its golden sandy shores, crystal-clear waters, and breathtaking sunsets. This crescent-shaped tropical paradise, lined with swaying coconut palms, offers the perfect mix of relaxation and adventure, making it a must-visit destination for beach lovers and adventure seekers.
          
          Mirissa is world-famous for whale watching, attracting nature enthusiasts eager to witness blue whales, dolphins, and other marine life in their natural habitat. The best time for whale watching in Mirissa is between November and April, when these majestic creatures migrate through the warm waters of the Indian Ocean.
      
      For surfing enthusiasts, Mirissa Beach offers consistent waves suitable for both beginners and experienced surfers. With ideal conditions throughout the year, it has become a favorite surfing hotspot in Sri Lanka’s southern coast.
      
      As the sun sets, Mirissa Beach transforms into a vibrant paradise with breathtaking sunset views over the Indian Ocean. The beachfront comes alive with beach bars and restaurants, serving fresh seafood, tropical cocktails, and authentic Sri Lankan cuisine. The laid-back yet energetic atmosphere makes Mirissa an ideal destination for romantic getaways, family vacations, and solo travelers.
      
      From thrilling water adventures to serene beach relaxation, Mirissa Beach offers an unforgettable tropical escape. Whether you're looking to spot majestic whales, ride the waves, or simply unwind with a coconut in hand, Mirissa is the ultimate beach destination in Sri Lanka. Plan your trip today and experience the beauty of Mirissa Beach firsthand`,
          location: "Southern Province, Sri Lanka",
          bestTimeToVisit: "December to March",
          entryFee: "Free",
          visitDuration: "Half day to full day",
          gallery: [
            {
              id: "mir1",
              url: "/Place(mirissaG1).jpg",
              caption: "Sunset at Mirissa Beach"
            },
            {
              id: "mir2",
              url: "/Place(mirissaG2).jpg",
              caption: "Whale watching"
            },
            {
              id: "mir3",
              url: "/Place(mirissaG3).jpg",
              caption: "Beach activities"
            },
            {
              id: "mir4",
              url: "/Place(mirissaG4).jpg",
              caption: "Water gardens at the base"
            },
            {
              id: "mir5",
              url: "/Place(mirissaG5).jpg",
              caption: "Coconut tree hill"
            },
            {
              id: "mir6",
              url: "/Place(mirissaG6).jpg",
              caption: "Parrot rock"
            }
          ]
        },
        {
          id: 3,
          title: "Kandy Temple of Tooth",
          description: "Sacred Buddhist temple housing Buddha's tooth relic.",
          image: "/kandyy.jpg",
          fullDescription: `The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) in Kandy, Sri Lanka, is one of the most revered Buddhist temples in the world. This UNESCO World Heritage site is home to the sacred tooth relic of Lord Buddha, making it a major pilgrimage destination for Buddhists worldwide.
          
          The golden-roofed temple, part of the ancient royal palace complex of Kandy, showcases stunning Buddhist architecture, intricate woodwork, and beautifully decorated walls. As one of Sri Lanka’s most important cultural landmarks, the temple stands as a testament to the country’s rich heritage and devotion to Buddhism.
          
          Visitors can experience the daily rituals and ceremonies, offering a glimpse into the spiritual and cultural traditions of the temple. The highlight of the year is the Esala Perahera Festival, one of Asia’s grandest Buddhist celebrations. This annual event features elaborate processions, where the sacred tooth relic is paraded through Kandy on beautifully adorned elephants, accompanied by traditional dancers, drummers, and fire performers.
          
          The Temple of the Sacred Tooth Relic is not just a place of worship but also a symbol of Sri Lanka’s deep-rooted history and spirituality. Whether you seek spiritual enlightenment, cultural exploration, or architectural beauty, this sacred temple in Kandy offers a truly immersive experience. Plan your visit today and witness the spiritual grandeur of Sri Dalada Maligawa`,
          location: "Kandy, Central Province",
          bestTimeToVisit: "Early morning or evening",
          entryFee: "USD 15 for foreign tourists",
          visitDuration: "2-3 hours",
          gallery: [
            {
              id: "kan1",
              url: "/Place(kandyG1).jpg",
              caption: "Temple exterior"
            },
            {
              id: "kan2",
              url: "/Place(kandyG2).jpg",
              caption: "Temple ceremonies"
            },
            {
              id: "kan3",
              url: "/Place(kandyG3).jpg",
              caption: "Inner sanctum"
            },
            {
              id: "kan4",
              url: "/Place(kandyG4).jpg",
              caption: "front view of temple"
            },
            {
              id: "kan5",
              url: "/Place(kandyG5).jpg",
              caption: "inside view"
            },
            {
              id: "kan6",
              url: "/Place(kandyG6).jpg",
              caption: "Annual kandy perahara"
            }
          ]
        },
        {
          id: 4,
          title: "Galle Fort",
          description: "Historic Dutch colonial fort and UNESCO World Heritage site in southern Sri Lanka.",
          image: "/Place(gallee).jpg",
          fullDescription: `Galle Fort, a UNESCO World Heritage site, stands as a remarkable testament to Sri Lanka’s colonial past. Built by the Portuguese in the 16th century and later expanded by the Dutch, this historic fortress in Galle is one of the best-preserved colonial-era settlements in Asia.
          
          Nestled along the southern coast of Sri Lanka, Galle Fort is famous for its narrow cobblestone streets, well-preserved Dutch-colonial buildings, boutique hotels, art galleries, and museums. The fort’s massive stone walls not only offer protection but also provide stunning panoramic views of the Indian Ocean. One of its most iconic landmarks, the Galle Lighthouse, continues to guide ships safely along the coastline.
          
          Visitors can stroll through the historic streets, explore centuries-old churches, visit fascinating museums, and admire the seamless blend of European and Sri Lankan architectural styles. Walking along the fort’s ramparts at sunset is a must, offering breathtaking views of the ocean and cityscape.
          
          As one of Sri Lanka’s top tourist attractions, Galle Fort offers a unique blend of history, culture, and coastal charm. Whether you're a history enthusiast, an architecture lover, or a traveler seeking a scenic getaway, this colonial gem promises an unforgettable experience. Plan your visit to Galle Fort today and step back in time.`,
          location: "Galle, Southern Province",
          bestTimeToVisit: "November to April",
          entryFee: "Free to explore the fort area",
          visitDuration: "2-3 hours",
          gallery: [
            {
              id: "gal1",
              url: "/Place(galleG1).jpg",
              caption: "Tourist Attractions"
            },
            {
              id: "gal2",
              url: "/Place(galleG2).jpg",
              caption: "Historic lighthouse"
            },
            {
              id: "gal3",
              url: "/Place(galleG3).jpg",
              caption: "View inside the Galle fort"
            },
            {
              id: "gal4",
              url: "/Place(galleG4).jpg",
              caption: "Drone view of fort"
            },
            {
              id: "gal5",
              url: "/Place(galleG5).jpg",
              caption: "Fort inside view"
            },
            {
              id: "gal6",
              url: "/Place(galleG6).jpg",
              caption: "Light house view"
            }
          ]
        },
        {
          id: 5,
          title: "Adams Peak (Sri Pada)",
          description: "Sacred mountain with religious significance and breathtaking pilgrimage trail.",
          image: "/Place(adams).jpg",
          fullDescription: `Adam’s Peak, locally known as Sri Pada, is a 2,243-meter-high mountain in central Sri Lanka, revered by multiple religions including Buddhism, Hinduism, Christianity, and Islam. This iconic pilgrimage site attracts thousands of visitors each year, offering both spiritual significance and breathtaking natural beauty.
          
          At the summit of Adam’s Peak, there is a sacred rock formation believed to be the footprint of Buddha by Buddhists, the footprint of Shiva by Hindus, and attributed to St. Thomas or Adam by Christians and Muslims. This deep spiritual connection makes Sri Pada one of the most sacred sites in Sri Lanka.
          
          The journey to the summit involves climbing around 5,500 steps, traditionally during the pilgrimage season from December to May. The well-maintained trail is illuminated at night, allowing pilgrims and hikers to ascend before dawn. Reaching the peak in the early morning rewards visitors with a stunning sunrise view, creating an unforgettable experience.
          
          Adam’s Peak is not only a sacred pilgrimage destination but also a must-visit hiking spot in Sri Lanka. Whether you seek spiritual fulfillment, adventure, or breathtaking landscapes, this iconic mountain promises an experience like no other. Plan your trek today and witness the magic of Sri Pada.`,
          location: "Ratnapura District, Central Province",
          bestTimeToVisit: "December to May",
          entryFee: "Free (small donation recommended)",
          visitDuration: "6-8 hours (round trip)",
          gallery: [
            {
              id: "ada1",
              url: "/Place(adamsG1).jpg",
              caption: "Mountain top sunrise view"
            },
            {
              id: "ada2",
              url: "/Place(adamsG2).jpg",
              caption: "One destination of trail(idikatupaana)"
            },
            {
              id: "ada3",
              url: "/Place(adamsG3).jpg",
              caption: "Mountain Top view"
            },
            {
              id: "ada4",
              url: "/Place(adamsG4).jpg",
              caption: "Mountain peak at sunrise"
            },
            {
              id: "ada5",
              url: "/Place(adamsG5).jpg",
              caption: "temple front view"
            },
            {
              id: "ada6",
              url: "/Place(adamsG6).jpg",
              caption: "adam's peak temple inside"
            }
          ]
        },
        {
          id: 6,
          title: "Trincomalee",
          description: "Historic coastal city with beautiful beaches and significant maritime heritage.",
          image: "/Place(trinco).jpg",
          fullDescription: `Trincomalee, located on the northeast coast of Sri Lanka, is a breathtaking coastal city known for its natural harbor, pristine beaches, and cultural heritage. This historic port city has played a significant role in Sri Lanka’s maritime history, attracting explorers, traders, and colonial powers for centuries.
          
          Nilaveli Beach – One of Sri Lanka’s best beaches, famous for its powdery white sand and turquoise waters, ideal for sunbathing, swimming, and snorkeling.
          
          Koneswaram Temple – A sacred Hindu shrine perched on a cliff, offering panoramic ocean views and deep spiritual significance.
          
          Whale Watching & Diving – Trincomalee is a top destination for marine adventures, including whale watching, snorkeling, and diving at Pigeon Island National Park.
          
          Fort Frederick – A 17th-century fortress built by the Portuguese and later fortified by the Dutch and British, offering stunning views of Trincomalee Harbor.
          
          Trincomalee is a must-visit destination in Sri Lanka, blending history, culture, and nature. Whether you seek relaxation on pristine beaches, thrilling marine adventures, or historical exploration, this coastal paradise has something for everyone. Plan your visit to Trincomalee and experience its timeless beauty today.`,
          location: "Eastern Province, Sri Lanka",
          bestTimeToVisit: "May to September",
          entryFee: "Varies by attraction",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "tri1",
              url: "/Place(TrincoG1).jpg",
              caption: "sea vibes with whale watching"
            },
            {
              id: "tri2",
              url: "/Place(TrincoG2).webp",
              caption: "Local Fish market"
            },
            {
              id: "tri3",
              url: "/Place(TrincoG3).jpg",
              caption: "koneshwaram kovil"
            },
            {
              id: "tri4",
              url: "/Place(TrincoG4).jpg",
              caption: "Coastal landscape"
            },
            {
              id: "tri5",
              url: "/Place(TrincoG5).jpg",
              caption: "koneshwaram view"
            },
            {
              id: "tri6",
              url: "/Place(TrincoG6).jpg",
              caption: "sea view in koneshwaram"
            }
          ]
        },
        {
          id: 7,
          title: "Jaffna",
          description: "Cultural hub of Northern Sri Lanka with unique Tamil heritage and historic sites.",
          image: "/Place(Jaffnaa).jpg",
          fullDescription: `Jaffna, located at the northernmost tip of Sri Lanka, is the cultural capital of the Tamil community, offering a unique blend of history, heritage, and vibrant traditions. Known for its rich Tamil culture, historic landmarks, and mouthwatering cuisine, Jaffna provides an authentic Sri Lankan experience away from the usual tourist routes.
          
          Jaffna Fort – A well-preserved Dutch colonial fort, offering stunning views of the city and lagoon.
          
          Nallur Kandaswamy Temple – One of the most sacred Hindu temples in Sri Lanka, known for its grand architecture and annual festivals.
          
          Jaffna Library – Once considered one of Asia’s finest libraries, now restored to its former glory.
          
          Delft Island – A serene getaway, home to wild horses, ancient ruins, and beautiful coral walls.
          
          Jaffna is a must-visit destination for those looking to explore Sri Lanka’s diverse culture and history. Whether you're drawn to its historic temples, colonial forts, or unique cuisine, Jaffna offers an unforgettable travel experience. Plan your trip to Jaffna today and immerse yourself in its rich heritage.`,
          location: "Northern Province, Sri Lanka",
          bestTimeToVisit: "January to April",
          entryFee: "Varies by attraction",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "jaf1",
              url: "/Place(jaffnaG1).jpg",
              caption: "Nallur Kandaswamy Kovil"
            },
            {
              id: "jaf2",
              url: "/Place(jaffnaG2).jpg",
              caption: "Jaffna Temple (dabukolapatuna)"
            },
            {
              id: "jaf3",
              url: "/Place(jaffnaG3).jpg",
              caption: "Jaffna Library"
            },
            {
              id: "jaf4",
              url: "/Place(jaffnaG4).jpg",
              caption: "Jaffna view of the small ship yards"
            },
            {
              id: "jaf5",
              url: "/Place(jaffnaG5).jpg",
              caption: "Drone view of jaffna fort"
            },
            {
              id: "jaf6",
              url: "/Place(jaffnaG6).jpg",
              caption: "jaffna fort inside view"
            }
          ]
        },
        {
          id: 8,
          title: "Anuradhapura",
          description: "Ancient city and UNESCO World Heritage site with extensive Buddhist ruins.",
          image: "/Place(anurapuraa).jpeg",
          fullDescription: `Anuradhapura, one of the world’s oldest continuously inhabited cities, is a UNESCO World Heritage site and a sacred Buddhist pilgrimage destination. As the first capital of ancient Sri Lanka, this historic city is renowned for its magnificent stupas, ancient monasteries, and advanced irrigation systems, reflecting a civilization that thrived over 2,000 years ago.
          
          Ruwanwelisaya Stupa – One of the most revered stupas in Sri Lanka, built by King Dutugemunu in the 2nd century BC.
          
          Jetavanaramaya – A massive stupa, once the third tallest structure in the ancient world.
          
          Abhayagiri Monastery – A vast monastic complex, serving as a center for Buddhist learning in ancient times.
          
          Jaya Sri Maha Bodhi – A sacred fig tree, believed to be a sapling from the Bodhi Tree in India, under which Buddha attained enlightenment.
          
          Anuradhapura is a must-visit for history enthusiasts, spiritual seekers, and cultural explorers. With its stunning Buddhist monuments, ancient ruins, and remarkable irrigation systems, this city offers a glimpse into Sri Lanka’s glorious past. Plan your visit today and experience the timeless beauty of Anuradhapura.`,
          location: "North Central Province, Sri Lanka",
          bestTimeToVisit: "December to March",
          entryFee: "USD 25 for foreign tourists",
          visitDuration: "Full day",
          gallery: [
            {
              id: "anu1",
              url: "/Place(anurapuraG1).jpg",
              caption: "Abegiriya Stupa"
            },
            {
              id: "anu2",
              url: "/Place(anurapuraG2).jpg",
              caption: "Sacred Bodhi Tree"
            },
            {
              id: "anu3",
              url: "/Place(anurapuraG3).jpg",
              caption: "Twin ponds(kuttam pokuna)"
            },
            {
              id: "anu4",
              url: "/Place(anurapuraG4).jpg",
              caption: "Ruwanwelisaya Stupa"
            },
            {
              id: "anu5",
              url: "/Place(anurapuraG5).jpg",
              caption: "Jaya Sri maha Bodiya"
            },
            {
              id: "anu6",
              url: "/Place(anurapuraG6).jpg",
              caption: "Isurumuniya temple"
            }
          ]
        },
        {
          id: 9,
          title: "Polonnaruwa",
          description: "Medieval capital with well-preserved archaeological ruins and ancient Buddhist sculptures.",
          image: "/Place(polonnruwa).jpg",
          fullDescription: `Polonnaruwa, the second capital of ancient Sri Lanka, flourished between the 11th and 13th centuries and is now a UNESCO World Heritage site. This historic city showcases remarkably preserved ruins, reflecting the grandeur and sophistication of medieval Sri Lankan civilization.
          
          Gal Vihara – A stunning rock temple with massive Buddha statues carved into granite.
          
          Royal Palace Complex – The ruins of King Parakramabahu’s palace, once a seven-story structure.
          
          Polonnaruwa Vatadage – A circular relic house, believed to have housed the Sacred Tooth Relic.
          
          The Quadrangle – A sacred area containing intricately carved stupas, shrines, and statues.
          
          Polonnaruwa offers a blend of history, architecture, and ancient engineering marvels. Visitors can cycle through the vast ruins, explore the archaeological museum, and admire the advanced urban planning of this medieval kingdom. Step back in time and discover the legacy of Polonnaruwa.`,
          location: "North Central Province, Sri Lanka",
          bestTimeToVisit: "January to April",
          entryFee: "USD 25 for foreign tourists",
          visitDuration: "Half day to full day",
          gallery: [
            {
              id: "pol1",
              url: "/Place(polonnruwaG1).jpg",
              caption: "Watadagaya Stupa"
            },
            {
              id: "pol2",
              url: "/Place(polonnruwaG2).jpg",
              caption: "Gal Vihara Buddha statues"
            },
            {
              id: "pol3",
              url: "/Place(polonnruwaG3).jpg",
              caption: "King Parakramabaru statue"
            },
            {
              id: "pol4",
              url: "/Place(polonnruwaG4).jpg",
              caption: "Antiant Temple"
            },
            {
              id: "pol5",
              url: "/Place(polonnruwaG5).jpg",
              caption: ""
            },
            {
              id: "pol6",
              url: "/Place(polonnruwaG6).jpg",
              caption: "Antiant place"
            }
          ]
        },
        {
          id: 10,
          title: "Ella",
          description: "Picturesque hill country town known for stunning landscapes and hiking trails.",
          image: "/Place(ella).jpg",
          fullDescription: `Ella, a picturesque mountain village in Sri Lanka’s Central Highlands, is a paradise for nature lovers, adventure seekers, and backpackers. Surrounded by lush tea plantations, mist-covered mountains, and cascading waterfalls, Ella offers a relaxing yet adventurous getaway in Sri Lanka’s hill country.
          
          Nine Arch Bridge – A world-famous architectural marvel, built during the British colonial era, offering a stunning blend of history and nature.
          
          Ella Rock – A challenging yet rewarding hike, offering breathtaking panoramic views of the surrounding valleys.
          
          Little Adam’s Peak – A relatively easy trek with spectacular sunrise and sunset views over rolling hills and tea estates.
          
          Diyaluma Falls – The second-highest waterfall in Sri Lanka, perfect for swimming and enjoying natural rock pools.
          
          Ella is the perfect blend of adventure, relaxation, and natural beauty. Whether you’re hiking through scenic trails, admiring breathtaking landscapes, or immersing yourself in the local tea culture, Ella promises an unforgettable travel experience. Discover the magic of Sri Lanka’s hill country in Ella.`,
          location: "Badulla District, Uva Province",
          bestTimeToVisit: "December to March",
          entryFee: "Free (some attractions may have small fees)",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "ell1",
              url: "/Place(ellaG1).jpg",
              caption: "Nine Arch Bridge"
            },
            {
              id: "ell2",
              url: "/Place(ellaG2).jpg",
              caption: "Landscape view"
            },
            {
              id: "ell3",
              url: "/Place(ellaG3).jpg",
              caption: "Tea plantations"
            },
            {
              id: "ell4",
              url: "/Place(ellaG4).jpg",
              caption: "Mountain trails"
            },
            {
              id: "ell5",
              url: "/Place(ellaG5).jpg",
              caption: "near nine arch bridge "
            },
            {
              id: "ell6",
              url: "/Place(ellaG6).jpg",
              caption: "Ella rock"
            }
          ]
        },
        {
          id: 11,
          title: "Nuwara Eliya",
          description: "Colonial-era hill station known as 'Little England' with cool climate and tea estates.",
          image: "/Place(nuwaraeliyaa).jpg",
          fullDescription: `Nuwara Eliya, a charming hill station in the heart of Sri Lanka’s tea country, is renowned for its cool climate, colonial architecture, and breathtaking landscapes. Often called ‘Little England’, this picturesque town offers a unique blend of British colonial charm, lush tea plantations, and scenic beauty, making it a must-visit destination in Sri Lanka.
          
          Gregory Lake – A serene lake perfect for boating, picnicking, and relaxing amidst scenic mountains.
          
          Victoria Park – One of the most beautiful gardens in Sri Lanka, ideal for leisurely strolls and bird watching.
          
          Horton Plains National Park – A UNESCO-listed nature reserve, home to World’s End, a dramatic cliff-edge viewpoint with stunning panoramic views.
          
          Nuwara Eliya is a perfect getaway for those seeking cool mountain air, stunning tea landscapes, and colonial-era charm. Whether you're hiking through misty trails, exploring lush gardens, or indulging in fresh Ceylon tea, this hill town offers an unforgettable travel experience. Discover the magic of Sri Lanka’s tea country in Nuwara Eliya.`,
          location: "Central Province, Sri Lanka",
          bestTimeToVisit: "April to September",
          entryFee: "Free (some attractions have separate fees)",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "nuw1",
              url: "/place(nuwaraeliyG1).jpg",
              caption: "Colonial architecture"
            },
            {
              id: "nuw2",
              url: "/Place(nuwaraeliyG2).jpg",
              caption: "Tea plantations"
            },
            {
              id: "nuw3",
              url: "/Place(nuwaraeliyG3).jpg",
              caption: "Gregory Lake"
            },
            {
              id: "nuw4",
              url: "/Place(nuwaraeliyG4).jpg",
              caption: "Mountain scenery"
            },
            {
              id: "nuw5",
              url: "/Place(nuwaraeliyG5).jpg",
              caption: "Lake view "
            },
            {
              id: "nuw6",
              url: "/Place(nuwaraeliyG6).jpg",
              caption: "Road view"
            }
          ]
        },
        {
          id: 12,
          title: "Dambulla Cave Temple",
          description: "Ancient Buddhist cave temple complex with stunning rock art and sculptures.",
          image: "/Place(dabullaa).jpg",
          fullDescription: `TThe Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a UNESCO World Heritage Site and one of Sri Lanka’s most significant Buddhist landmarks. Dating back to the 1st century BCE, this ancient rock monastery is renowned for its remarkable Buddhist art, religious murals, and centuries-old statues. Nestled within a massive rock formation, the temple complex stands as a spiritual retreat and a testament to Sri Lanka’s rich cultural heritage.
          
          The temple consists of five sacred caves, each adorned with intricate murals, over 150 Buddha statues, and religious paintings that depict various aspects of Buddhist teachings and historical events. The Golden Buddha Statue at the entrance serves as an iconic symbol of the temple's significance. The frescoes inside the caves, covering over 2,100 square meters, showcase well-preserved artwork spanning multiple historical periods, making it one of the most expansive collections of Buddhist murals in the world.
          
          The climb to the temple complex is both scenic and rewarding, offering panoramic views of the lush countryside and nearby attractions like Sigiriya Rock Fortress. Visitors can immerse themselves in the serene atmosphere, witness daily Buddhist rituals, and explore the temple’s fascinating history. The Golden Temple Museum, located nearby, provides deeper insights into Dambulla’s religious and artistic legacy.
          
          A visit to Dambulla Cave Temple is a journey through Sri Lanka’s spiritual and artistic past. Whether you are a history enthusiast, a cultural explorer, or a traveler seeking tranquility, this sacred site offers a profound and unforgettable experience.`,
          location: "Central Province, Sri Lanka",
          bestTimeToVisit: "Early morning or late afternoon",
          entryFee: "USD 10 for foreign tourists",
          visitDuration: "2-3 hours",
          gallery: [
            {
              id: "dam1",
              url: "/Place(dabullaG1).jpg",
              caption: "Cave temple interior"
            },
            {
              id: "dam2",
              url: "/Place(dabullaG2).jpg",
              caption: "Buddha statues"
            },
            {
              id: "dam3",
              url: "/Place(dabullaG3).jpg",
              caption: "Rock cave "
            },
            {
              id: "dam4",
              url: "/Place(dabullaG4).jpg",
              caption: "Rock cave paintings"
            },
            {
              id: "dam5",
              url: "/Place(dabullaG5).jpg",
              caption: "Temple exterior view"
            },
            {
              id: "dam6",
              url: "/Place(dabullaG6).jpg",
              caption: "Temple front view"
            }
          ]
        },
        {
          id: 13,
          title: "Yala National Park",
          description: "Wildlife sanctuary famous for leopard populations and diverse ecosystems.",
          image: "/Place(yala).jpg",
          fullDescription: `Yala National Park is Sri Lanka’s most famous wildlife sanctuary, celebrated for its unparalleled biodiversity and the highest density of leopards in the world. Spanning over 979 square kilometers, the park offers an incredible mix of dry forests, grasslands, lagoons, and coastal ecosystems, creating a thriving habitat for an impressive range of wildlife.
          
          Renowned for its thrilling safari experiences, Yala is home to a diverse array of species, including Sri Lankan leopards, elephants, sloth bears, crocodiles, and over 200 bird species. The park is divided into five blocks, with Block 1 being the most frequented by visitors due to its high concentration of leopard sightings and well-established safari routes. The landscape varies from rugged rocky outcrops to dense forested areas and stunning coastal lagoons, offering breathtaking scenery along with exciting wildlife encounters.
          
          Visitors can embark on guided safari tours, best experienced during the early morning or late afternoon when animals are most active. Jeep safaris provide a close-up view of Yala’s wildlife, making it a paradise for nature lovers, photographers, and adventure seekers. The park’s unspoiled beauty and rich biodiversity make it a must-visit destination for anyone looking to explore Sri Lanka’s wild side.
          
          For the ultimate wildlife adventure, Yala National Park promises an unforgettable journey through one of Asia’s most spectacular nature reserves. Whether you’re seeking a thrilling leopard encounter or a serene moment in the heart of nature, Yala delivers an authentic and immersive safari experience.`,
          location: "Southern Province, Sri Lanka",
          bestTimeToVisit: "February to July",
          entryFee: "USD 30 for foreign tourists (plus safari costs)",
          visitDuration: "Half day to full day",
          gallery: [
            {
              id: "yal1",
              url: "/Place(yalaG1).jpg",
              caption: "Leopard sighting"
            },
            {
              id: "yal2",
              url: "/Place(yalaG2).jpg",
              caption: "wild life"
            },
            {
              id: "yal3",
              url: "/Place(yalaG3).jpg",
              caption: "Park landscape"
            },
            {
              id: "yal4",
              url: "/Place(yalaG4).png",
              caption: "Wildlife safari"
            },
            {
              id: "yal5",
              url: "/Place(yalaG5).jpg",
              caption: "Elephants close up"
            },
            {
              id: "yal6",
              url: "/Place(yalaG6).jpg",
              caption: "leopard close up"
            }
          ]
        },
        {
          id: 14,
          title: "Pinnawala Elephant Orphanage",
          description: "Sanctuary caring for orphaned and injured elephants in a natural environment.",
          image: "/Place(pinnwala).jpg",
          fullDescription: `Pinnawala Elephant Orphanage is one of Sri Lanka’s most renowned wildlife conservation centers, dedicated to rescuing and caring for orphaned and injured elephants. Established in 1975, this elephant sanctuary provides a safe haven for these majestic creatures, playing a vital role in elephant rehabilitation and conservation.
          
          Nestled along the banks of the Maha Oya River, Pinnawala offers visitors a one-of-a-kind experience, allowing them to observe elephants up close in their natural environment. The daily feeding sessions and the iconic river bathing ritual, where herds of elephants splash and play in the water, are among the most captivating sights for wildlife enthusiasts and photographers.
          
          The orphanage is also a pioneer in captive elephant breeding, having successfully raised numerous elephant calves over the years. Through educational programs and guided tours, visitors gain a deeper understanding of elephant behavior, conservation efforts, and the challenges these animals face in the wild.
          
          A visit to Pinnawala Elephant Orphanage is a must for nature lovers, wildlife photographers, and conservation advocates, offering a unique opportunity to connect with Sri Lanka’s beloved elephants while supporting their protection and well-being.`,
          location: "Sabaragamuwa Province, Sri Lanka",
          bestTimeToVisit: "Year-round, best during feeding times",
          entryFee: "USD 15 for foreign tourists",
          visitDuration: "2-3 hours",
          gallery: [
            {
              id: "pin1",
              url: "/Place(pinnwalaG1).jpg",
              caption: "Elephant herd"
            },
            {
              id: "pin2",
              url: "/Place(pinnwalaG2).jpg",
              caption: "Elephant bathing"
            },
            {
              id: "pin3",
              url: "/Place(pinnwalaG3).jpg",
              caption: "Young elephants"
            },
            {
              id: "pin4",
              url: "/Place(pinnwalaG4).jpg",
              caption: "Sanctuary landscape"
            },
            {
              id: "pin5",
              url: "/Place(pinnwalaG5).jpg",
              caption: "Sanctuary landscape"
            },
            {
              id: "pin6",
              url: "/Place(pinnwalaG6).jpg",
              caption: "Sanctuary landscape"
            }
          ]
        },
        {
          id: 15,
          title: "Arugam Bay",
          description: "World-renowned surfing destination with pristine beaches and laid-back atmosphere.",
          image: "/Place(arugambay).jpg",
          fullDescription: `Arugam Bay is Sri Lanka’s premier surfing destination, located on the scenic east coast of the island. Famous for its consistent waves and laid-back beach culture, this tropical paradise attracts surfers from around the world, offering a variety of surf breaks suitable for beginners and experienced surfers alike. With its warm waters and world-class surf spots like Main Point, Whiskey Point, and Peanut Farm, Arugam Bay is considered one of the best surf destinations in Asia.
          
          Beyond surfing, Arugam Bay Beach boasts pristine shores, breathtaking sunrises, and a vibrant coastal atmosphere. Visitors can relax on the golden sands, indulge in local seafood delicacies, or explore the picturesque fishing villages that dot the coastline. The area is also a hub for water sports, including paddleboarding, snorkeling, and diving, making it a haven for adventure seekers.
          
          For nature lovers, Arugam Bay offers easy access to Kumana National Park, a renowned wildlife sanctuary where visitors can spot elephants, crocodiles, leopards, and exotic bird species. The nearby Lahugala National Park is another hidden gem, providing a serene escape into Sri Lanka’s diverse wilderness.
          
          Whether you're looking to ride the perfect wave, unwind by the beach, or explore the untamed beauty of Sri Lanka’s east coast, Arugam Bay promises an unforgettable experience filled with adventure, relaxation, and natural beauty.`,
          location: "Eastern Province, Sri Lanka",
          bestTimeToVisit: "May to September",
          entryFee: "Free",
          visitDuration: "3-5 days",
          gallery: [
            {
              id: "aru1",
              url: "/Place(arugambayG1).jpg",
              caption: "Surfing waves"
            },
            {
              id: "aru2",
              url: "/Place(arugambayG2).jpg",
              caption: "Beach landscape"
            },
            {
              id: "aru3",
              url: "/Place(arugambayG3).webp",
              caption: "Coastal scenery"
            },
            {
              id: "aru4",
              url: "/Place(arugambayG4).jpg",
              caption: "Hotel Cabanas"
            },
            {
              id: "aru5",
              url: "/Place(arugambayG5).jpg",
              caption: "Surfing spot"
            },
            {
              id: "aru6",
              url: "/Place(arugambayG6).jpg",
              caption: "jetwing surf view"
            }
          ]
        },
        {
          id: 16,
          title: "Dondra(Devinuwara)",
          description: "Historic lighthouse and architectural marvel at Sri Lanka's southernmost point.",
          image: "/Place(dondra).webp",
          fullDescription: `Devinuwara, also known as Dondra, is a historic coastal town at the southernmost point of Sri Lanka, offering a perfect blend of cultural heritage, natural beauty, and maritime history. This picturesque destination is home to ancient Buddhist temples, the iconic Dondra Head Lighthouse, and stunning ocean views, making it a must-visit for travelers exploring Sri Lanka.
      
      Dondra Vihara – A Sacred Buddhist Temple
      At the heart of Devinuwara lies the sacred Dondra Vihara, a centuries-old Buddhist temple in Sri Lanka that attracts pilgrims and history enthusiasts alike. Steeped in legend and architectural grandeur, the temple highlights the spiritual and cultural significance of Devinuwara, offering visitors a deep connection to Sri Lanka’s religious traditions.
      
      Dondra Head Lighthouse – A Colonial-Era Landmark
      Overlooking the Indian Ocean, the Dondra Head Lighthouse is a prominent symbol of Sri Lanka’s maritime heritage. Built during the British colonial period, this 54-meter-tall lighthouse is one of Southeast Asia’s tallest, providing breathtaking panoramic views of the coastline and the vast ocean. It remains an essential navigation point for sailors and a popular attraction for tourists seeking picturesque scenery.
      
      Experience Devinuwara’s Coastal Culture
      Beyond its landmarks, Devinuwara thrives with traditional Sri Lankan coastal culture. The town is known for its fishing communities, vibrant local festivals, and rich folklore. Visitors can immerse themselves in the authentic Sri Lankan experience, exploring historical sites, stunning beaches, and traditional lifestyles that define this unique destination.
      
      Whether you're a history lover, a spiritual seeker, or a nature enthusiast, Devinuwara (Dondra) offers a unique travel experience in Sri Lanka, blending history, culture, and breathtaking landscapes. Visit Devinuwara, the southernmost tip of Sri Lanka, and uncover the beauty and heritage of this coastal paradise.`,
          location: "Southern Province, Sri Lanka",
          bestTimeToVisit: "November to April",
          entryFee: "Small entrance fee",
          visitDuration: "1-2 hours",
          gallery: [
            {
              id: "don1",
              url: "/Place(dondraG1).jpeg",
              caption: "Lighthouse exterior"
            },
            {
              id: "don2",
              url: "/Place(dondraG2).webp",
              caption: "temple viewa"
            },
            {
              id: "don3",
              url: "/Place(dondraG3).jpg",
              caption: "temple front view"
            },
            {
              id: "don4",
              url: "/Place(dondraG4).png",
              caption: "kovil view"
            },
            {
              id: "don5",
              url: "/Place(dondraG5).jpg",
              caption: "upper view of lighthouse"
            },
            {
              id: "don6",
              url: "/Place(dondraG6).jpg",
              caption: "southern point"
            }
          ]
        },
        {
          id: 17,
          title: "Hikkaduwa",
          description: "Vibrant coastal town known for marine life, coral reefs, and water sports.",
          image: "/Place(hikk).jpg",
          fullDescription: `Hikkaduwa is one of Sri Lanka’s most popular beach destinations, known for its stunning coral reefs, world-class surfing, and vibrant coastal culture. Located on the southwestern coast, this tropical paradise attracts travelers seeking adventure, relaxation, and marine exploration.
          
          The Hikkaduwa Marine National Park is a major highlight, offering crystal-clear waters teeming with colorful coral reefs, exotic tropical fish, and sea turtles. Visitors can experience snorkeling, scuba diving, and glass-bottom boat tours, making it a top spot for underwater exploration in Sri Lanka.
          
          For surf enthusiasts, Hikkaduwa Beach boasts consistent waves, making it a must-visit surfing hotspot for both beginners and experienced surfers. The surf season runs from November to April, with some of the best waves in Sri Lanka’s southern coast.
          
          Beyond its natural beauty, Hikkaduwa has a lively nightlife scene with beachfront restaurants, bars, and music festivals that create a fun and energetic atmosphere. Visitors can indulge in fresh seafood, traditional Sri Lankan cuisine, and tropical cocktails while enjoying ocean views and breathtaking sunsets.
          
          Whether you're looking to dive into Sri Lanka’s vibrant marine life, ride the waves, or simply relax on the golden sands, Hikkaduwa offers an unforgettable beach getaway filled with adventure, culture, and relaxation.`,
          location: "Southern Province, Sri Lanka",
          bestTimeToVisit: "November to April",
          entryFee: "Small marine park entrance fee",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "hik1",
              url: "/Place(hikkG1).jpg",
              caption: "Pool view"
            },
            {
              id: "hik2",
              url: "/Place(hikkG2).jpg",
              caption: "Beach view"
            },
            {
              id: "hik3",
              url: "/Place(hikkG3).webp",
              caption: "Beach landscape"
            },
            {
              id: "hik4",
              url: "/Place(hikkG4).jpg",
              caption: "Marine activities"
            },
            {
              id: "hik5",
              url: "/Place(hikkG5).jpg",
              caption: "Night Life"
            },
            {
              id: "hik6",
              url: "/Place(hikkG6).jpg",
              caption: "Hotel vibes"
            }
          ]
        },
        {
          id: 18,
          title: "Mannar",
          description: "Historic peninsula with unique wildlife, ancient heritage, and maritime significance.",
          image: "/Place(mannar).jpg",
          fullDescription: `Mannar, a stunning coastal peninsula in northwest Sri Lanka, is famous for its rich history, diverse wildlife, and breathtaking landscapes. Known for its strategic location in ancient trade routes, the region offers a blend of historical landmarks, unique ecosystems, and cultural significance.
          
          One of Mannar’s most fascinating features is Adam’s Bridge (Rama’s Bridge), a natural chain of limestone shoals that once connected Sri Lanka to India. This mysterious geological formation holds deep mythological and historical significance and is a must-visit for nature lovers and history enthusiasts.
          
          The Mannar Fort, originally built by the Portuguese in the 16th century and later expanded by the Dutch, stands as a testament to Sri Lanka’s colonial history. The fort offers panoramic views of the surrounding landscape and provides insight into the region’s maritime past.
          
          Mannar is also a paradise for bird watchers, particularly at the Vankalai Bird Sanctuary, where visitors can spot flamingos, pelicans, herons, and many other migratory birds during the peak season. The region's coastal wetlands and salt flats create an ideal habitat for hundreds of bird species, making it a top eco-tourism destination in Sri Lanka.
          
          With its unique blend of history, wildlife, and untouched landscapes, Mannar offers a one-of-a-kind travel experience for those seeking cultural discovery, birdwatching, and coastal adventures in Sri Lanka’s northern region.`,
          location: "Northern Province, Sri Lanka",
          bestTimeToVisit: "December to March",
          entryFee: "Free (some sites may have small fees)",
          visitDuration: "1-2 days",
          gallery: [
            {
              id: "man1",
              url: "/Place(mannarG1).jpg",
              caption: "Mannar Fort"
            },
            {
              id: "man2",
              url: "/Place(mannarG2).webp",
              caption: "Coastal landscape"
            },
            {
              id: "man3",
              url: "/Place(mannarG3).webp",
              caption: "Bird watching"
            },
            {
              id: "man4",
              url: "/Place(mannarG4).webp",
              caption: "Historical site"
            },
            {
              id: "man5",
              url: "/Place(mannarG5).jpg",
              caption: "Costal view"
            },
            {
              id: "man6",
              url: "/Place(mannarG6).jpg",
              caption: "Adams Bridge"
            }
          ]
        },
        {
          id: 19,
          title: "Kurunegala",
          description: "Historic city surrounded by distinctive rock formations and cultural landmarks.",
          image: "/Place(kuru).jpg",
          fullDescription: `Kurunegala, a historic city in Sri Lanka’s North Western Province, is renowned for its rich heritage, ancient landmarks, and breathtaking natural landscapes. Once serving as a medieval capital, the city is now a thriving urban hub surrounded by massive rock formations that add to its unique charm.
          
          The most iconic landmark in Kurunegala is the majestic Buddha statue, which towers over the city from Ethagala Rock. This colossal structure offers panoramic views of the surrounding landscape and is a spiritual and cultural symbol of the region. The city’s distinctive rock formations, named after animal shapes such as Elephant Rock (Ethagala), Tortoise Rock, and Eel Rock, make it a fascinating geological wonder.
          
          Visitors can explore ancient temples, including the Ridi Viharaya (Silver Temple), a historic Buddhist monastery believed to date back to the 2nd century BCE, adorned with intricate murals and religious artifacts. The Kurunegala Lake (Rantaliya Wewa), located near the city center, provides a tranquil escape for those looking to relax and enjoy scenic views.
          
          The city also offers a vibrant local market scene, where travelers can experience authentic Sri Lankan culture, traditional cuisine, and handicrafts. With its blend of history, nature, and urban life, Kurunegala is a must-visit destination for those interested in Sri Lanka’s heritage, unique landscapes, and cultural experiences.`,
          location: "North Western Province, Sri Lanka",
          bestTimeToVisit: "December to March",
          entryFee: "Free",
          visitDuration: "1-2 days",
          gallery: [
            {
              id: "kur1",
              url: "/Place(kuruG1).jpg",
              caption: "LAke view"
            },
            {
              id: "kur2",
              url: "/Place(kuruG2).webp",
              caption: "Drone view"
            },
            {
              id: "kur3",
              url: "/Place(kuruG3).jpg",
              caption: "Lake View"
            },
            {
              id: "kur4",
              url: "/Place(kuruG5).png",
              caption: "Lake side park "
            },
            {
              id: "kur5",
              url: "/Place(kuruG4).jpg",
              caption: "Buddha statue "
            },
            {
              id: "kur6",
              url: "/Place(kuruG6).jpg",
              caption: "Yapahuwa temple"
            }
          ]
        },
        {
          id: 20,
          title: "Negombo",
          description: "Coastal city known for beaches, fishing industry, and colonial-era architecture.",
          image: "/Place(negmboo).webp",
          fullDescription: `Negombo, a vibrant coastal city near Colombo, is renowned for its golden sandy beaches, thriving fishing industry, and colonial-era charm. Often called "Little Rome" due to its strong Catholic heritage, the city features a unique blend of Sri Lankan and European influences, making it a fascinating destination for travelers.
          
          Negombo’s top attractions include the bustling Negombo Fish Market, where visitors can witness the local fishing culture in action. The Dutch Canal, originally built for transporting spices, offers scenic boat rides through the town’s historic waterways. St. Mary's Church and other colonial-era churches showcase Negombo’s deep-rooted religious and architectural heritage.
          
          The pristine beaches of Negombo provide the perfect setting for relaxation, water sports, and sunset views. Visitors can enjoy windsurfing, jet skiing, and boat excursions, exploring the scenic Negombo Lagoon, home to diverse marine and birdlife. The city’s lively markets, seafood restaurants, and traditional street food stalls make it a culinary hotspot for food lovers.
          
          With its close proximity to Colombo’s Bandaranaike International Airport, Negombo is a popular first and last stop for travelers exploring Sri Lanka. Whether you're looking for a beach getaway, cultural exploration, or an authentic local experience, Negombo offers an unforgettable coastal adventure.`,
          location: "Western Province, Sri Lanka",
          bestTimeToVisit: "December to April",
          entryFee: "Free",
          visitDuration: "1-2 days",
          gallery: [
            {
              id: "neg1",
              url: "/Place(negmboG1).jpg",
              caption: "Church"
            },
            {
              id: "neg2",
              url: "/Place(negmboG2).jpg",
              caption: ""
            },
            {
              id: "neg3",
              url: "/Place(negmboG3).jpg",
              caption: "Hotel view"
            },
            {
              id: "neg4",
              url: "/Place(negmboG4).jpg",
              caption: "Colonial architecture"
            },
            {
              id: "neg5",
              url: "/Place(negmboG5).jpg",
              caption: "Costal view"
            },
            {
              id: "neg6",
              url: "/Place(negmboG6).jpg",
              caption: "Negombo lagoon"
            }
          ]
        },
        {
          id: 21,
          title: "Ravana Waterfall",
          description: "Scenic waterfall with mythological significance in Sri Lankan folklore.",
          image: "/Place(ravana).jpg",
          fullDescription: `Ravana Waterfall, one of Sri Lanka’s most breathtaking waterfalls, is located near Ella, surrounded by lush greenery and misty mountains. Standing 25 meters high, this multi-tiered cascade is among the widest waterfalls in Sri Lanka, offering a mesmerizing natural spectacle.
          
          Steeped in mythology and history, Ravana Ella is deeply connected to the Ramayana epic. According to legend, King Ravana is believed to have hidden Princess Sita in a cave behind the waterfall, now known as Ravana Cave, adding a mystical allure to the site. This makes it a significant cultural and historical landmark, attracting both nature lovers and mythology enthusiasts.
          
          During the monsoon season, the waterfall becomes even more majestic, with powerful torrents cascading over the rocky cliffs, creating a breathtaking sight. The surrounding forests and mountainous terrain make it a perfect stop for travelers exploring Ella’s natural wonders.
          
          Easily accessible from Ella, Ravana Falls is a must-visit attraction for those seeking stunning scenery, rich history, and a touch of legend. Whether you're a photography enthusiast, adventure seeker, or history buff, this picturesque waterfall promises an unforgettable experience in the heart of Sri Lanka’s hill country.`,
          location: "Badulla District, Uva Province",
          bestTimeToVisit: "June to September",
          entryFee: "Free",
          visitDuration: "1-2 hours",
          gallery: [
            {
              id: "rav1",
              url: "/Place(ravanaG1).jpg",
              caption: "Waterfall view"
            },
            {
              id: "rav2",
              url: "/Place(ravanaG2).jpg",
              caption: "Surrounding landscape"
            },
            {
              id: "rav3",
              url: "/Place(ravanaG3).jpg",
              caption: "Waterfall close-up rainy season"
            },
            {
              id: "rav4",
              url: "/Place(ravanaG4).jpg",
              caption: "Monsoon flow"
            },
            {
              id: "rav5",
              url: "/Place(ravanaG5).jpg",
              caption: ""
            },
            {
              id: "rav6",
              url: "/Place(ravanaG6).jpg",
              caption: ""
            }
          ]
        },
        {
          id: 22,
          title: "Colombo",
          description: "Capital city blending modern urban life with colonial history and cultural diversity.",
          image: "/Place(colombo).jpg",
          fullDescription: `Colombo, the vibrant capital of Sri Lanka, is a bustling metropolis that blends colonial charm with contemporary sophistication. As the economic and cultural hub of the island, Colombo offers a rich mix of history, modern attractions, and diverse experiences.
          
          The city is home to iconic landmarks such as the National Museum, Gangaramaya Temple, Beira Lake, and the historic Pettah Market, each reflecting Colombo’s rich heritage and dynamic urban landscape. Visitors can explore colonial-era buildings, wander through lively street markets, and indulge in luxury shopping and fine dining at modern shopping malls and upscale restaurants.
          
          With its diverse culinary scene, Colombo is a paradise for food lovers, offering everything from authentic Sri Lankan cuisine to international delicacies. The city also boasts a thriving nightlife, with trendy bars, rooftop lounges, and beachfront cafes creating a lively atmosphere.
          
          Colombo serves as the perfect gateway to Sri Lanka, offering travelers a glimpse into the country’s transformation from colonial rule to a modern, cosmopolitan city. Whether you're interested in history, culture, shopping, or nightlife, Colombo promises an unforgettable experience in the heart of Sri Lanka’s urban landscape.`,
          location: "Western Province, Sri Lanka",
          bestTimeToVisit: "Year-round",
          entryFee: "Free (most attractions have separate fees)",
          visitDuration: "2-3 days",
          gallery: [
            {
              id: "col1",
              url: "/Place(colomboG1).jpg",
              caption: "City skyline"
            },
            {
              id: "col2",
              url: "/Place(colomboG2).jpg",
              caption: "portcity view"
            },
            {
              id: "col3",
              url: "/Place(colomboG3).jpg",
              caption: "Port City drone view"
            },
            {
              id: "col4",
              url: "/Place(colomboG4).webp",
              caption: "Beira Lake"
            },
            {
              id: "col5",
              url: "/Place(colomboG5).jpg",
              caption: "Jami UL-Alfar Mosque"
            },
            {
              id: "col6",
              url: "/Place(colomboG6).jpg",
              caption: "Galle Face view"
            }
          ]
        }
        
     
  ];

  export default featuredPlaces;