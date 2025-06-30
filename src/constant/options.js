export const budgetOptions = [
  {
    id: 1, // Assuming an ID for consistency
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💰" // Represents a dollar bill icon as seen in the UI
  },
  {
    id: 2, // Assuming an ID for consistency
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "👜" // Represents a money bag icon as seen in the UI
  },
  {
    id: 3, // Assuming an ID for consistency
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💎" // Represents a diamond or gem icon as seen in the UI
  }
];

export const travelCompanions = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "✈️", // Corrected based on the image, looks like an airplane
    people: "1"
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂", // Based on the code snippet, this is likely a champagne glass icon
    people: "2 People"
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏠", // Based on the code snippet, this is likely a house icon
    people: "3 to n" // The rest of the value is cut off in the image
  },
  {
  id: 4, // Assuming it's the next ID in the sequence
  title: "Friends",
  desc: "A group of companions on an adventure", // Placeholder description
  icon: "⛵", // Represents the sailboat icon from the image
  people: "Multiple" // Placeholder for people count, or a specific number range
}
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {noOfdays} days for {traveling} with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {noOfdays} with each day plan with best time to visit in JSON format.
`