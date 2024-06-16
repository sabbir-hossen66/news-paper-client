import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const MyArticles = () => {
  const { user } = useContext(AuthContext)
  const axiosScure = useAxiosSecure()

  const { data: myArticles = [] } = useQuery({
    queryKey: ['myArticles', user?.email],
    queryFn: async () => {
      const res = await axiosScure.get(`/myNews?authorEmail=${user?.email}`);

      return res.data;
    },
    // enabled: !!id,
  });

  console.log(myArticles);

  return (
    <div>
      <h2>This Is My Articles</h2>



    </div>
  );
};

export default MyArticles;