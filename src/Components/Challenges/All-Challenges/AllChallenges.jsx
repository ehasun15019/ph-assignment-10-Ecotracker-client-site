import React, { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import CardDesign from "../../Design/CardDesign/CardDesign";

const AllChallenges = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/challenges").then((data) => {
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
    <div className="w-full px-6 sm:px-9 lg:px-10 py-10">
      {/* Card Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-7xl mx-auto">
        {showData.map((item) => {
          return (
            <CardDesign
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
              participants={item.participants}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllChallenges;
