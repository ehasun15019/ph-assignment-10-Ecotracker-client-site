import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import CardDetailsDesign from "../../Components/Design/Card-Details-Design/CardDetailsDesign";

const CardDetails = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [loader, setLoader] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/challenges/${id}`)
    .then((data) => {
        setShowData(data.data);
        setLoader(false);
    })
  }, [axios, id]);

  if (loader) {
    return (
      <div className="flex flex-col justify-center items-center py-6">
        <span className="loading loading-dots loading-xl text-[#cbf139]"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto">
      <CardDetailsDesign
        key={showData._id}
        id={showData._id}
        imageUrl={showData.imageUrl}
        category={showData.category}
        title={showData.title}
        description={showData.description}
        duration={showData.duration}
        target={showData.target}
        participants={showData.participants}
        impactMetric={showData.impactMetric}
        createdBy={showData.createdBy}
      />
    </div>
  );
};

export default CardDetails;
