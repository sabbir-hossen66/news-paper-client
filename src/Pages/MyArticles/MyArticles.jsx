import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyAllArticle from "../MyAllArticle/MyAllArticle";


const MyArticles = () => {
  const { user } = useContext(AuthContext)
  const axiosScure = useAxiosSecure()

  const { data: myArticles = [], refetch } = useQuery({
    queryKey: ['myArticles', user?.email],
    queryFn: async () => {
      const res = await axiosScure.get(`/myNews?authorEmail=${user?.email}`);
      return res.data;
    },

  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-semibold text-center">These Are My Articles</h2>

      {/* <div className="container mx-auto p-4"> */}
      <div className="overflow-x-auto">

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Title
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Author
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Photo
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Posted Date
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Publisher
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {
              myArticles.map(myArticle => <MyAllArticle
                key={myArticle._id}
                myArticle={myArticle}
                refetch={refetch}
                axiosScure={axiosScure}
              ></MyAllArticle>)
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyArticles;