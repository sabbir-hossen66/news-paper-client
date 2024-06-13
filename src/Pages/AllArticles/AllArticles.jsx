import { useEffect, useState } from "react";
import AllArticle from "../AllArticle/AllArticle";


const AllArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/news')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false)
      })
  }, [loading])


  return (
    <div>
      <h3>All Articles is here:{articles.length}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3   my-16">
        {
          articles.map(article => <AllArticle
            key={article._id}
            article={article}
          ></AllArticle>)
        }
      </div>
    </div>
  );
};

export default AllArticles;