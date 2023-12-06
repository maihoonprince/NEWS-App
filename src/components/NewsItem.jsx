import image from '../assets/news_jpg.jpg';

const NewsItem = ({ title, description, src, url }) => {
    // Check if title is provided and is a valid string
    const truncatedTitle = title && typeof title === 'string' ? title.slice(0, 50) : '';
  
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "News"}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
  
  export default NewsItem;
  