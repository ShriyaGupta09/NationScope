import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, SetArticles] = useState([]);
  
  useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      fetch(url).then(response=> response.json()).then(data=>SetArticles(data.articles)).catch(error => console.error("Error fetching news:", error));
      
    }, [category]);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#0066cc",
          WebkitTextStroke: "0.4px black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        Latest News
      </h1>
      {articles.length > 0 ? (
        articles.map((news) => (
          <NewsItem
            key={news.url}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No news available or loading...</p>
      )}
    </div>
  );
};

export default NewsBoard;
