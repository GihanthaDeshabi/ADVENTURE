export interface TravelPackage {
    id: number;
    name: string;
    title: string;
    location: string;
    duration: string;
    groupSize: string;
    rating: number;
    price: number;
    image: string;
    features: string[];
    inclusions: string[];
    itinerary: {
        day: string;
        places: string[];
    }[];
}

export const travelPackages: TravelPackage[] = [
    {
        id: 1,
        name: "EXPLORE SRI LANKA - ONE WEEK",
        title: "EXPLORE SRI LANKA- ONE WEEK",
        location: "Yala, Sigiriya, Bentota, More",
        duration: "6N/7D",
        groupSize: "2 - 12 People",
        rating: 4.7,
        price: 950,
        image: "/9.jpg",
        features: ["Ancient City Tours", "Temple Visits", "Cultural Performances", "Authentic Cuisine"],
        inclusions: [
            "Hotel Accommodation (2/3/4/5/ Star)",
            "Daily Breakfast ",
            "A/C vehicle and services ",
            "English speaking Chauffeur ",
           
        ],
        itinerary: [
            { day: "Day 01", places: ["Arrival in Sigiriya", "Sigiriya Rock Visit"] },
            { day: "Day 02", places: ["Transfer to Kandy", "Traditional Sri Lankan Lunch & Temple Visit"] },
            { day: "Day 03", places: ["Transfer to Nuwara Eliya", "Enjoying Fresh tea & Visit greogery Lake"] },
            { day: "Day 04", places: ["Transfer to Yala", "Enjoyinmg the Wild Life"] },
            { day: "Day 05", places: ["Transfer to Bentota", "Vsist the Beaches."] },
            { day: "Day 06", places: ["Transfer to Colombo", "City Tour & Shopping"] },
            { day: "Day 07", places: ["Colombo", "Airport"] }
            
        ]
    },
    {
        id: 2,
        name: "SRI LANKAN CULTURE TOUR",
        title: "SRI LANKAN CULTURE TOUR",
        location: "Nuwara Eliya, Yala , Mirissa, More",
        duration: "8N/9D",
        groupSize: "2 - 12 People",
        rating: 4.8,
        price: 1450,
        image: "/10.jpg",
        features: ["Scenic Train Ride", "Tea Plantation Tour", "Waterfall Visits", "Trekking"],
        inclusions: [
            "Hotel Accommodation (2/3/4/5/ Star)",
            "Daily Breakfast ",
            "A/C vehicle and services ",
            "English speaking Chauffeur ",
        ],
        itinerary: [
            { day: "Day 01", places: ["Arrival in Anuradhapura", "Visit Temples"] },
            { day: "Day 02", places: ["Transfer to Polonnaruwa", "Vsist Ancient city"] },
            { day: "Day 03", places: ["Transfer to Sigiriya", "Vsist Sigiriya Rock"] },
            { day: "Day 04", places: ["Transfer to Kandy", "Visit Temple of Tooth"] },
            { day: "Day 05", places: ["Transfer to Nuwara Eliya", "Enjoying Fresh Tea"] },
            { day: "Day 06", places: ["Transfer to Yala", "Enjoying Wild Life"] },
            { day: "Day 07", places: ["Transfer to Bentota", "Evening  Sea View Accomadations"] },
            { day: "Day 08", places: ["Transfer to Mirissa", "Enjoying Down South Culture"] },
            { day: "Day 09", places: ["Colombo", "Airport"] }
        ]
    },
    {
        id: 3,
        name: "SRI LANKA HOLIDAY TOUR",
        title: "SRI LANKA HOLIDAY TOUR",
        location: "Trincomalee, Bentota, Kandy, More",
        duration: "10N/11D",
        groupSize: "2 - 12 People",
        rating: 4.9,
        price: 1750,
        image: "/Place(yala).jpg",
        features: ["Beachside Resort", "Whale Watching", " Fort Tour", "Water Sports"],
        inclusions: [
            "Hotel Accommodation (2/3/4/5/ Star)",
            "Daily Breakfast ",
            "A/C vehicle and services ",
            "English speaking Chauffeur ",
            
        ],
        itinerary: [
            { day: "Day 01", places: ["Arrival & Colombo" , "Beach Relaxation"] },
            { day: "Day 02", places: ["Transfer to Anuradhapura", "Temple Visit"] },
            { day: "Day 03", places: ["Transfer to Trincomalee", "Sunset at  Beach"] },
            { day: "Day 04", places: ["Transfer to Polonnaruwa", "Visit Ancient City"] },
            { day: "Day 05", places: ["Transfer to Sigiriya", "Visit Sigiriya Rock"] },
            { day: "Day 06", places: ["Transfer to  Kandy", "Vsist Temple of Tooth"] },
            { day: "Day 07", places: ["Transfer to Nuwara Eliya", "Enjoying Fresh Tea & Visit Hortan Place"] },
            { day: "Day 08", places: ["Transfer to Yala", "Enjoying the Wild Life"] },
            { day: "Day 09", places: ["Transfer to Bentota", "Beach Relaxation"] },
            { day: "Day 10", places: ["Transfer to Mirissa", "Boat experince and Whale Watching "] },
            { day: "Day 11", places: ["Colombo", "Airport"] },
            

        ]
    },
    {
        id: 4,
        name: "BEACH EXPLORE SRI LANKA",
        title: "BEACH EXPLORE SRI LANKA",
        location: "Negambo, Bentota,Mirissa, Hirikatiya, More",
        duration: "6N/7D",
        groupSize: "2 - 12 People",
        rating: 4.8,
        price: 980,
        image: "/Place(mirissa).jpg",
        features: ["Beach View", "Down South Culture", "Boat Experience", "Whale Watching"],
        inclusions: [
            "Hotel Accommodation (2/3/4/5/ Star)",
            "Daily Breakfast ",
            "A/C vehicle and services ",
            "English speaking Chauffeur ",
            // "Local government taxes & service charges"
        ],
        itinerary: [
            { day: "Day 01", places: ["Arrival & Negambo" , "Relaxation"] },
            { day: "Day 02", places: ["Transfer to Bentota", " Enjoying Sea View"] },
            { day: "Day 03", places: ["Explore the City", "Visit Secret Places"] },
            { day: "Day 04", places: ["Transfer to Mirissa ", "Whale Watching"] },
            { day: "Day 05", places: ["Down South Culture Experience", " Enjoying Down South Traditional Food"] },
            { day: "Day 06", places: ["Transfer to", "Visit Hirikatiya Beach"] },
            { day: "Day 07", places: ["Colombo", "Airport"] },
         
        ]
    },
];