import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Title from "../../Components/Title/Title";
import { RiDeleteBin5Fill } from "react-icons/ri";
import toast from "react-hot-toast";

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

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/user-challenges/${id}`);

      if (data.success) {
        // Correctly update state
        setActivities((prev) => prev.filter((a) => a._id !== id));
        toast.success("Deleted Successfully");
      }
    } catch (err) {
      toast.error("Failed to delete challenge:", err);
    }
  };

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
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100 hidden md:table-header-group">
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
              <th className="py-3 px-6 text-center text-gray-700 font-semibold">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors 
                     block md:table-row mb-4 md:mb-0 rounded-lg md:rounded-none"
              >
                {/* Challenge Name */}
                <td className="py-2 px-4 md:py-4 md:px-6 text-gray-700 block md:table-cell">
                  <span className="font-semibold md:hidden">Challenge:</span>{" "}
                  {activity.challengeTitle}
                </td>

                {/* Status */}
                <td className="py-2 px-4 md:py-4 md:px-6 text-gray-700 block md:table-cell">
                  <span className="font-semibold md:hidden">Status:</span>{" "}
                  {activity.status}
                </td>

                {/* Progress */}
                <td className="py-2 px-4 md:py-4 md:px-6 text-gray-700 block md:table-cell">
                  <span className="font-semibold md:hidden">Progress:</span>{" "}
                  {activity.Progress}%
                </td>

                {/* Joined On */}
                <td className="py-2 px-4 md:py-4 md:px-6 text-gray-500 block md:table-cell">
                  <span className="font-semibold md:hidden">Joined On:</span>{" "}
                  {new Date(activity.joinDate).toLocaleDateString("en-GB")}
                </td>

                {/* Delete Button */}
                <td className="py-2 px-4 md:py-4 md:px-6 flex items-center justify-center md:table-cell">
                  <RiDeleteBin5Fill
                    className="cursor-pointer text-red-500 hover:text-red-600 transition"
                    onClick={() => handleDelete(activity._id)}
                    size={20}
                  />
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
