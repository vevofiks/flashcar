"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  Calendar,
  Instagram,
} from "lucide-react";
import Image from "next/image";

type Post = {
  id: number;
  type: "image";
  src: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  author: string;
};

type Reel = {
  id: number;
  type: "video";
  poster: string;
  src: string;
  caption: string;
  likes: number;
  comments: number;
  views: string;
  date: string;
  author: string;
};

type Item = Post | Reel;

const InstagramSwiper = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "reels">("posts");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState<Record<number, boolean>>({});
  const [isMuted, setIsMuted] = useState<Record<number, boolean>>({});
  const [likes, setLikes] = useState<Record<number, number>>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Move data outside component or memoize it
  const posts: Post[] = useMemo(() => [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=600&fit=crop",
      caption: "Premium car detailing service completed! ✨",
      likes: 156,
      comments: 23,
      date: "2 hours ago",
      author: "Flash Car",
    },
    // Add more post items...
  ], []);

  const reels: Reel[] = useMemo(() => [
    {
      id: 101,
      type: "video",
      poster: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=600&fit=crop",
      src: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4",
      caption: "Watch our expert team transform this car!",
      likes: 1247,
      comments: 156,
      views: "12.5K",
      date: "3 hours ago",
      author: "Flash Car",
    },
    // Add more reel items...
  ], []);

  // Memoize currentData to prevent recreation on every render
  const currentData: Item[] = useMemo(() => 
    activeTab === "posts" ? posts : reels, 
    [activeTab, posts, reels]
  );

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(currentData.length / itemsPerSlide);

  // Fix the useEffect - remove currentData from dependencies since it's now memoized
  useEffect(() => {
    setCurrentSlide(0);
    setLikes(currentData.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {}));
  }, [activeTab]); // Only depend on activeTab

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const togglePlayPause = (item: Item) => {
    if (item.type === "video") {
      const vid = videoRefs.current[item.id];
      if (vid) {
        if (isPlaying[item.id]) vid.pause();
        else vid.play();
        setIsPlaying((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
      }
    }
  };

  const toggleMute = (item: Item) => {
    if (item.type === "video") {
      const vid = videoRefs.current[item.id];
      if (vid) {
        vid.muted = !vid.muted;
        setIsMuted((prev) => ({ ...prev, [item.id]: vid.muted }));
      }
    }
  };

  const toggleLike = (item: Item) => {
    setLikes((prev) => ({
      ...prev,
      [item.id]: prev[item.id] + (Math.random() > 0.5 ? 1 : -1),
    }));
  };

  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    return currentData.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full mb-6">
          <Instagram className="h-6 w-6 text-white mr-2" />
          <span className="text-white font-semibold">Follow Our Journey</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Latest from <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Instagram</span>
        </h2>
        <p className="text-lg text-gray-600">
          Stay updated with our latest work, behind-the-scenes content, and automotive tips
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {["posts", "reels"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "posts" | "reels")}
            className={`px-6 py-2 font-medium rounded-md mr-2 ${
              activeTab === tab
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tab === "posts" ? "Posts" : "Reels"}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex overflow-hidden">
          {getVisibleItems().map((item) => (
            <div key={item.id} className="w-1/3 p-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  {item.type === "image" ? (
                    <Image src={item.src} alt={item.caption} className="object-cover w-full h-full" width={400} height={300} />
                  ) : (
                    <>
                      <video
                        ref={(el) => { videoRefs.current[item.id] = el; }}
                        poster={item.poster}
                        className="object-cover w-full h-full"
                        loop
                        muted
                        playsInline
                      />
                      <button
                        onClick={() => togglePlayPause(item)}
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow"
                      >
                        {isPlaying[item.id] ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </button>
                      <button
                        onClick={() => toggleMute(item)}
                        className="absolute bottom-3 left-3 bg-white p-2 rounded-full shadow"
                      >
                        {isMuted[item.id] ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                      </button>
                      <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full px-2 py-1 text-white text-sm flex items-center">
                        <Eye className="h-4 w-4 mr-1" /> {(item as Reel).views}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-3">
                      <button onClick={() => toggleLike(item)} className="flex items-center">
                        <Heart className="h-5 w-5 text-red-500" />
                        <span className="ml-1">{likes[item.id]}</span>
                      </button>
                      <MessageCircle className="h-5 w-5 text-gray-500" />
                      <Share className="h-5 w-5 text-gray-500" />
                    </div>
                    <Bookmark className="h-5 w-5 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{item.author}</span>: {item.caption}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`block w-3 h-3 rounded-full cursor-pointer ${
              idx === currentSlide ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramSwiper;