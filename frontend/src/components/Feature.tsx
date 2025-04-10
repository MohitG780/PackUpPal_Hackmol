import React from 'react';
import { Utensils, Tent, Camera, Train } from 'lucide-react';

export const Features =() => {
  const features = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Cultural Journeys",
      description: "Experience diverse cultures through carefully curated routes"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Culinary Adventures",
      description: "Savor authentic cuisines and food trails across the globe"
    },
    {
      icon: <Tent className="w-6 h-6" />,
      title: "Local Experiences",
      description: "Connect with local communities and traditional lifestyles"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Trails",
      description: "Capture Instagram-worthy moments at scenic locations"
    }
  ];

  const destinations = [
    {
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80",
      description: "Royal palaces and desert adventures"
    },
    {
      name: "Santorini",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80",
      description: "Stunning sunsets and Mediterranean charm"
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80",
      description: "Serene backwaters and ayurvedic experiences"
    },
    {
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80",
      description: "Majestic mountains and scenic trails"
    },
    {
      name: "Himalayas",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80",
      description: "Mountain treks and spiritual retreats"
    }
  ];

  return (
    <>
      <div className="bg-white py-24">
     
      </div>
    </>
  );
}