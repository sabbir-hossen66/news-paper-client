import { useEffect, useState } from "react";


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
    </div>
  );
};

export default AllArticles;