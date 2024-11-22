const NewsItem = ({ title, description, src, url }) => {
  const fallbackImage = (
    <div
      style={{
        height: "190px", // Match the height of the image
        width: "327px", // Match the width of the image
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc", // Fallback color
        color: "#555",
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "4px",
        border: "0.8px solid black", // Border matching other images
      }}
    >
      <img
        src="src\assets\image_not_found.png" // Replace with your actual "Image Not Found" image
        alt="Image Not Found"
        style={{
          height: "190px", // Match the height
          width: "327px", // Match the width
          objectFit: "cover", // Maintain aspect ratio and cover the box
        }}
      />
    </div>
  );

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        maxWidth: "345px",
        maxHeight: "440px",
        border: "0.1px solid black",
      }}
    >
      {src ? (
        <img
          src={src}
          style={{
            height: "200px",
            width: "327px",
            objectFit: "cover",
            border: "0.8px solid black",
          }}
          className="card-img-top"
          alt={title || "News Image"}
          onError={(e) => {
            // Handle broken image by showing fallback
            e.target.onerror = null;
            e.target.src = "src\assets/broken.jpg"; // Fallback "Image Not Found"
          }}
        />
      ) : (
        fallbackImage // Display fallback when `src` is missing
      )}
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Untitled News"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Breaking News: Major events unfolding as we speak!"}
        </p>
        {!src && (
          <p
            style={{
              fontSize: "14px",
              color: "#999",
              marginTop: "10px",
            }}
          >
            This news is currently removed from the website.
          </p>
        )}
        <a
          href={url}
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;



