import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import useAxios from "../../../Hooks/useAxios";
import TipsCardDesign from "../../Design/Tips-Design/TipsCardDesign";

const RecentTips = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/recent-tips").then((data) => {
      setShowData(data.data);
      setLoading(false);
    });
  }, [axios]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-6">
        <span className="loading loading-dots loading-xl text-[#cbf139]"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-0 py-6">
      <div>
        <Title text1={<>Recent Tips</>} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {
            showData.map((item) => {
                return(
                    <TipsCardDesign 
                        key={item._id}
                        title={item.title}
                        content={item.content}
                        category={item.category}
                        author={item.author}
                        authorName={item.authorName}
                        upvotes={item.upvotes}
                    />
                )
            })
        }
      </div>
    </div>
  );
};

export default RecentTips;
