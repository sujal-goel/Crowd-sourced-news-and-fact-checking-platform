import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import NewsCard from "../components/NewsCard";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/news/posts`);
        console.log("Response Data:", response.data); // Debugging log
        setNews(response.data.news); // Ensure you are setting the correct data
      } catch (error) {
        setError("Failed to fetch news data. Please try again later.");
        console.error("Fetch news error:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  console.log("NewsFeed Component Loaded!");
  console.log("News Data:", news); // Debugging to ensure news is defined

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!news.length) {
    return <p>Loading news...</p>; // Show a loading message while data is being fetched
  }

  return (
    <div className="w-full max-w-full mx-auto p-4">
      {news.map((item) => (
        <NewsCard 
          key={item._id} 
          postId={item._id} 
          title={item.title} 
          content={item.description}
          factStatus={item.status}
          upvotes={item.upvotes.length}
          downvotes={item.downvotes.length}
          comments={item.comments.map(comment => comment.comment)}
        />
      ))}
    </div>
  );
};

export default NewsFeed;