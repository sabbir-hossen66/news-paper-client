import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyAllArticle from "../MyAllArticle/MyAllArticle";


const MyArticles = () => {
  const { user } = useContext(AuthContext)
  const axiosScure = useAxiosSecure()

  const { data: myArticles = [] } = useQuery({
    queryKey: ['myArticles', user?.email],
    queryFn: async () => {
      const res = await axiosScure.get(`/myNews?authorEmail=${user?.email}`);
      return res.data;
    },

  });

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">These Are My Articles</h2>
      <div>
        {
          myArticles.map(myArticle => <MyAllArticle
            key={myArticle._id}
            myArticle={myArticle}
          ></MyAllArticle>)
        }
      </div>


    </div>
  );
};

export default MyArticles;