import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Title from "../../Components/Title/Title";

const MyActivities = () => {
  const { user } = use(AuthContext);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    if (user?.uid) {
      axios
        .get(`user-challenges/${user.uid}`)
        .then((data) => {
          setActivities(data.data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user activities:", err);
          setLoading(false);
        });
    }
  }, [axios, user]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">No activities found 😔</h2>
        <p>Join some challenges to see them here!</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <Title text1={<>My Activities</>} />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Challenge Name
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Status
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Progress
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Joined On
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Challenge ID
              </th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity._id}
                className="border-b border-gray-200 transition-colors"
              >
                <td className="py-4 px-6 text-gray-700">
                  {activity.challengeTitle}
                </td>
                <td className="py-4 px-6 text-gray-700">{activity.status}</td>
                <td className="py-4 px-6 text-gray-700">
                  {activity.Progress}%
                </td>
                <td className="py-4 px-6 text-gray-500">
                  {new Date(activity.joinDate).toLocaleDateString("en-GB")}
                </td>
                <td className="py-4 px-6 text-gray-500 text-xs">
                  {activity.challengeId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyActivities;
