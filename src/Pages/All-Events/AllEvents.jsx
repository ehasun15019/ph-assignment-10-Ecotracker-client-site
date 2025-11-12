import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import EventCardDesign from "../../Components/Design/Event-Cards-Design/EventCardDesign";

const AllEvents = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/all-events").then((data) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {showData.map((item) => {
          return (
            <EventCardDesign
              key={item._id}
              title={item.title}
              description={item.description}
              date={item.date}
              location={item.location}
              organizer={item.organizer}
              maxParticipants={item.maxParticipants}
              currentParticipants={item.currentParticipants}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllEvents;
