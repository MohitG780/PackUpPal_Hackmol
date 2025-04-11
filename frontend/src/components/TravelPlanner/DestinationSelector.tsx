import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Search,
  Trending
} from "lucide-react";
import BudgetTracker from "./BudgetTracker.tsx"; // Make sure this path is correct

// Mock API for popular and trending destinations
const fetchPopularDestinations = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    { name: "New York", count: 1243, image: "/api/placeholder/300/200" },
    { name: "Paris", count: 987, image: "/api/placeholder/300/200" },
    { name: "Tokyo", count: 876, image: "/api/placeholder/300/200" },
    { name: "Bali", count: 765, image: "/api/placeholder/300/200" },
    { name: "London", count: 654, image: "/api/placeholder/300/200" },
    { name: "Sydney", count: 543, image: "/api/placeholder/300/200" }
  ];
};

const fetchUserSuggestions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return [
    { name: "Santorini", user: "travel_lover92", rating: 4.9 },
    { name: "Kyoto", user: "wanderlust_23", rating: 4.8 },
    { name: "Amsterdam", user: "explorer_jane", rating: 4.7 },
    { name: "Barcelona", user: "journey_man", rating: 4.7 }
  ];
};

const DestinationSelector = () => {
  // User input state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState("Apr 15 - Apr 22, 2025");
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(25000);
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // For autocomplete suggestions and API mocks
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [isLoadingPopular, setIsLoadingPopular] = useState(true);
  const [userSuggestions, setUserSuggestions] = useState([]);
  const [isLoadingUserSuggestions, setIsLoadingUserSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allDestinations = [
    "New York", "Paris", "Tokyo", "London", "Sydney", "Rome", "Bangkok",
    "Dubai", "Singapore", "Hong Kong", "Barcelona", "Amsterdam", "Berlin",
    "Istanbul", "Prague", "Vienna", "Budapest", "Venice", "Florence", "Madrid",
    "Seoul", "Kyoto", "Taipei", "Bali", "Phuket", "Maldives", "Cairo", "Marrakech",
    "Cape Town", "Rio de Janeiro", "Buenos Aires", "Mexico City", "Los Angeles",
    "San Francisco", "Vancouver", "Toronto", "Montreal", "Havana", "Nassau",
    "Cancun", "Hawaii", "Fiji", "Auckland", "Melbourne", "Mumbai", "Delhi"
  ];

  // Load popular and user-suggested destinations on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoadingPopular(true);
        setIsLoadingUserSuggestions(true);

        const popularData = await fetchPopularDestinations();
        const userData = await fetchUserSuggestions();

        setPopularDestinations(popularData);
        setUserSuggestions(userData);
      } catch (error) {
        console.error("Failed to load destination data:", error);
      } finally {
        setIsLoadingPopular(false);
        setIsLoadingUserSuggestions(false);
      }
    };

    loadData();
  }, []);

  // Update autocomplete suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allDestinations.filter(dest =>
        dest.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination.trim()) {
      alert("Please select a destination");
      return;
    }
    setSubmitted(true);
  };

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      setDestination(value);
    }
  };

  const selectSuggestion = (suggestion) => {
    setDestination(suggestion);
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">TravelBuddy</h1>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {!submitted ? (
          <div className="mb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Destination</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Enter destination"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {showSuggestions && (
                    <ul className="absolute left-0 right-0 bg-white border rounded-md mt-1 z-10">
                      {suggestions.map((sugg, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => selectSuggestion(sugg)}
                        >
                          {sugg}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Date Range</label>
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Travelers</label>
                <input
                  type="number"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Budget (₹)</label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        ) : (
          // When the form is submitted, pass user inputs to BudgetTracker.
          <BudgetTracker
            isDarkMode={isDarkMode}
            destination={destination}
            travelers={travelers}
            dateRange={dateRange}
            budget={budget}
          />
        )}
      </div>
    </div>
  );
};

export default DestinationSelector;
