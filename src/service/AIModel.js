import {
  GoogleGenAI,
} from '@google/genai';

export async function AIModel({prompt}) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'application/json',
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Designing a Budget Vegas Trip**

        I've initiated the JSON structure for the travel plan, focusing on the root object and the 'travelPlan' object within it. Now, I'm working to flesh out the itinerary with budget-friendly options for accommodation, dining, and entertainment, specifically geared towards a couple. I will try to incorporate some free activities.


        **Developing Hotel Recommendations**

        I'm now focusing on the hotel options, populating the \`hotelOptions\` array. I'm aiming for three to four solid budget picks, considering off-strip locations and older Strip properties like The LINQ and Flamingo. I'm actively researching each hotel to gather necessary data for the JSON structure: name, address, price range, image URL, geo-coordinates, rating, and a concise description suitable for budget-conscious travelers.


        **Crafting the Day-by-Day Plan**

        I'm now fully immersed in developing the detailed itinerary for each of the three days. Day 1 is shaping up with a focus on free attractions and economical dining along the South and Mid Strip. I'm carefully selecting activities and attractions that offer the best value for budget-conscious travelers, focusing on the couple. I'm considering free shows, exploring iconic landmarks, and finding great food deals. This meticulous approach aims to deliver an engaging and cost-effective Vegas experience.


        **Developing Itinerary Activities**

        I'm now fully immersed in developing the detailed itinerary. The current focus is on Day 2 and Day 3 activities and attractions. I'm actively researching free entertainment options along Fremont Street and the vibrant downtown scene. I'm also mindful of the overall budget, ensuring the plan remains economical while providing an enjoyable experience.


        **Developing the Itinerary's Content**

        I'm now integrating the established structure with the detailed itinerary plan. I'm focusing on populating the 'dailyPlan' array for each day with the specified activities. My focus is on ensuring each activity aligns with the budget and traveler preferences, incorporating free attractions, affordable dining suggestions, and cost-effective entertainment options. I'm carefully researching specific times and locations to provide an engaging and practical 3-day experience.


        **Developing the Full JSON Response**

        Now, I'm working to fully assemble the JSON response based on the generated plan and researched data. I'm focusing on ensuring all fields in the JSON structure are correctly populated, from the travel plan details to the detailed itinerary and hotel options. I'm diligently cross-referencing my research to verify all the data and making sure the final output accurately reflects a viable, budget-friendly Vegas trip for a couple, focusing on value and enjoyment.


        **Fleshing Out the Structure**

        Now I'm fully occupied with the \`hotelOptions\` array and the individual \`activity\` objects within the itinerary. I've begun populating the hotel array with the Excalibur and The LINQ, researching each hotel's features, and gathering images to meet the user's requirements. Simultaneously, I've commenced populating the activities within the daily itinerary. I'm focusing on crafting concise, informative descriptions and appropriate price estimates to provide a clear and engaging travel plan. I've also added the "Welcome to Fabulous Las Vegas" sign.


        **Populating Hotel and Itinerary**

        I'm now fully populating the \`hotelOptions\` array with the researched data for Excalibur, The LINQ, Flamingo, and El Cortez, ensuring all JSON fields are complete. Simultaneously, I'm working to finish the itinerary details for each day, incorporating activity details and checking that budget suggestions are present. All images were found and are valid.


        **Refining Itinerary and Structure**

        I'm now fully immersed in refining the itinerary details. I'm carefully double-checking the timings and ensuring there's a seamless flow between attractions on each day. I'm focusing on crafting engaging descriptions for each activity within the \`dailyPlan\` array, while staying mindful of the couple's budget. Additionally, I'm working to organize all gathered data to prepare the JSON for the final output.


        **Populating the Data Structure**

        I've completed populating the JSON structure with all the gathered data, from hotel details and coordinates to itinerary descriptions, images, and pricing. I've focused on ensuring the data reflects budget-friendly options, clear and concise descriptions, and valid image URLs. The itinerary's flow, balancing free attractions and cost-effective experiences, is now fully integrated. The "bestTimeToVisit" string has also been added to the \`travelPlan\` object.


`,
        },
        {
          text: `\`\`\`json
            {
            "travelPlan": {
                "location": "Las Vegas",
                "duration": "3 Days",
                "travelerType": "Couple",
                "budget": "Cheap",
                "bestTimeToVisit": "For the best deals and pleasant weather, plan your trip mid-week (Tuesday-Thursday) during the spring (March-May) or fall (September-November). This helps you avoid the scorching summer heat and the high accommodation prices of weekends and major holidays."
            },
        "hotelOptions": [
            {
            "hotelName": "Excalibur Hotel & Casino",
            "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
            "price": "Approx. $35 - $90 per night",
            "imageUrl": "https://images.unsplash.com/photo-1598462217158-4e3639962a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            "geoCoordinates": {
                "latitude": 36.0988,
                "longitude": -115.1755
            },
            "rating": 3.5,
            "description": "A very budget-friendly hotel on the South Strip with a unique castle theme. It's well-connected to neighboring hotels via a free tram and offers a great starting point for exploring the Strip."
            },
            {
            "hotelName": "Flamingo Las Vegas Hotel & Casino",
            "address": "3555 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
            "price": "Approx. $40 - $110 per night",
            "imageUrl": "https://images.unsplash.com/photo-1620332372330-96b61053749c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            "geoCoordinates": {
                "latitude": 36.1162,
                "longitude": -115.1710
            },
            "rating": 3.5,
            "description": "A classic Vegas hotel in a prime center-strip location. It boasts a vibrant, tropical theme, a fantastic pool area, and a free Wildlife Habitat with real flamingos, offering excellent value."
            },
            {
            "hotelName": "The LINQ Hotel + Experience",
            "address": "3535 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
            "price": "Approx. $45 - $120 per night",
            "imageUrl": "https://images.unsplash.com/photo-1563515250917-0b589438f654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "geoCoordinates": {
                "latitude": 36.1177,
                "longitude": -115.1708
            },
            "rating": 4.0,
            "description": "Centrally located and geared towards a younger crowd, The LINQ offers modern, efficient rooms. It provides direct access to the lively LINQ Promenade, home to shops, restaurants, and the High Roller."
            },
            {
            "hotelName": "El Cortez Hotel & Casino",
            "address": "600 E Fremont St, Las Vegas, NV 89101, USA",
            "price": "Approx. $40 - $80 per night",
            "imageUrl": "https://images.unsplash.com/photo-1605825833215-d419a4e37a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            "geoCoordinates": {
                "latitude": 36.1695,
                "longitude": -115.1396
            },
            "rating": 4.0,
            "description": "A historic, adults-only (21+) hotel offering an authentic Downtown Vegas experience. Located in the Fremont East district, it's known for its vintage charm, great value, and classic casino floor."
            }
        ],
        "itinerary": [
            {
            "day": 1,
            "theme": "Iconic Strip Exploration & Free Shows",
            "dailyPlan": [
                {
                "timeOfDay": "Morning (9:00 AM - 11:00 AM)",
                "placeName": "Welcome to Fabulous Las Vegas Sign",
                "placeDetails": "Start your trip with a classic photo op at the world-famous sign. It's best to go in the morning to avoid long lines and the midday heat. There's usually a line, but it moves quickly.",
                "placeImageUrl": "https://images.unsplash.com/photo-1597839219213-a513b641a9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.0820,
                    "longitude": -115.1728
                },
                "ticketPricing": "Free",
                "timeToSpend": "45-60 minutes"
                },
                {
                "timeOfDay": "Afternoon (11:30 AM - 4:00 PM)",
                "placeName": "South & Mid-Strip Hotel Hopping",
                "placeDetails": "Walk the strip and explore the free interior attractions of the grand hotels. Start at Mandalay Bay, take the free tram to Luxor (see the pyramid architecture) and Excalibur. Cross over to New York-New York, and visit M&M's World and the Coca-Cola Store for some quirky fun. Grab a cheap lunch at a food court.",
                "placeImageUrl": "https://images.unsplash.com/photo-1583325958569-3a36701a238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.1026,
                    "longitude": -115.1746
                },
                "ticketPricing": "Free (unless you shop or eat)",
                "timeToSpend": "3-4 hours"
                },
                {
                "timeOfDay": "Evening (6:00 PM - 10:00 PM)",
                "placeName": "Bellagio Conservatory & Fountains",
                "placeDetails": "A perfect romantic evening. First, visit the Bellagio Conservatory & Botanical Gardens, a stunning indoor display of flowers and plants that changes seasonally. Afterwards, step outside to watch the iconic Fountains of Bellagio show, a magnificent spectacle of water, light, and music. Shows run every 30 minutes in the early evening and every 15 minutes after 8 PM.",
                "placeImageUrl": "https://images.unsplash.com/photo-1558902816-95383a79133a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.1126,
                    "longitude": -115.1767
                },
                "ticketPricing": "Free",
                "timeToSpend": "2-3 hours"
                }
            ]
            },
            {
            "day": 2,
            "theme": "Downtown Vegas & Fremont Street Fun",
            "dailyPlan": [
                {
                "timeOfDay": "Afternoon (2:00 PM - 6:00 PM)",
                "placeName": "Downtown Container Park",
                "placeDetails": "Take a bus or rideshare to Downtown. Explore this unique open-air shopping center and entertainment venue built from shipping containers. It features quirky shops, affordable food and drink options, and a giant flame-throwing praying mantis sculpture out front. It's a more relaxed and artsy side of Vegas.",
                "placeImageUrl": "https://images.unsplash.com/photo-1619532813588-c773976862c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.1685,
                    "longitude": -115.1370
                },
                "ticketPricing": "Free to enter",
                "timeToSpend": "2-3 hours"
                },
                {
                "timeOfDay": "Evening (6:00 PM onwards)",
                "placeName": "Fremont Street Experience",
                "placeDetails": "This is the main event of Downtown. Walk the five-block pedestrian mall, enjoy the street performers and live music on multiple stages. The main attraction is the Viva Vision light show on the massive overhead canopy, which runs every hour. The atmosphere is electric, and drinks are significantly cheaper here than on the Strip.",
                "placeImageUrl": "https://images.unsplash.com/photo-1519677103297-99d41b59a65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.1706,
                    "longitude": -115.1448
                },
                "ticketPricing": "Free",
                "timeToSpend": "3-4 hours"
                }
            ]
            },
            {
            "day": 3,
            "theme": "North Strip Charm & Skyline Views",
            "dailyPlan": [
                {
                "timeOfDay": "Morning (10:00 AM - 1:00 PM)",
                "placeName": "The Venetian's Grand Canal Shoppes",
                "placeDetails": "Feel like you've been transported to Italy. Stroll through the stunning Grand Canal Shoppes, complete with a painted sky ceiling, cobblestone walkways, and a quarter-mile-long canal with singing gondoliers. It's free to walk around and window shop, and it's a beautiful, romantic experience.",
                "placeImageUrl": "https://images.unsplash.com/photo-1543226874-3d735acde8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                "geoCoordinates": {
                    "latitude": 36.1212,
                    "longitude": -115.1697
                },
                "ticketPricing": "Free (Gondola rides are extra, approx. $39 per person)",
                "timeToSpend": "2 hours"
                },
                {
                "timeOfDay": "Afternoon (1:00 PM - 4:00 PM)",
                "placeName": "LINQ Promenade & Flamingo Wildlife Habitat",
                "placeDetails": "Walk over to the LINQ Promenade, a lively outdoor district with unique shops and eateries. Then, duck into the neighboring Flamingo Hotel to visit the free Wildlife Habitat, a serene garden with Chilean flamingos, pelicans, and other exotic birds. It's a peaceful escape from the casino floor.",
                "placeImageUrl": "https://images.unsplash.com/photo-1563515250917-0b589438f654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "geoCoordinates": {
                    "latitude": 36.1180,
                    "longitude": -115.1700
                },
                "ticketPricing": "Free",
                "timeToSpend": "2-3 hours"
                },
                {
                "timeOfDay": "Evening (8:00 PM - 10:00 PM)",
                "placeName": "The STRAT Hotel - Skyline Views",
                "placeDetails": "For your final night, get a breathtaking view of the entire Las Vegas valley. A great budget tip is to skip the official Skypod Observation Deck ticket. Instead, go to the 107 SkyLounge, buy a drink or two, and enjoy the exact same panoramic view in a more comfortable and romantic lounge setting.",
                "placeImageUrl": "https://images.unsplash.com/photo-1572280594273-0d33a6369062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                "geoCoordinates": {
                    "latitude": 36.1475,
                    "longitude": -115.1561
                },
                "ticketPricing": "Price of a drink (Approx. $15-$25 per person)",
                "timeToSpend": "1.5-2 hours"
                }
            ]
            }
        ]
        }
        \`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  // for await (const chunk of response) {
  //   console.log(chunk.text);
  // }
  
  return response.text;
}