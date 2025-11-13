import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const CreatedChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingChallenge, setEditingChallenge] = useState(null);
  const [formData, setFormData] = useState({});
  const axios = useAxios();
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const { data } = await axios.get(`/created-challenges/${user.email}`);
        if (data.success) setChallenges(data.data);
      } catch (err) {
        console.error("Error fetching created challenges:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, [axios, user]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/challenges/${id}`);
      if (data.success) {
        setChallenges((prev) => prev.filter((c) => c._id !== id));
        toast.success("Challenge deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete challenge!");
    }
  };

  const handleEditClick = (challenge) => {
    setEditingChallenge(challenge);
    setFormData({
      title: challenge.title,
      category: challenge.category,
      description: challenge.description,
      duration: challenge.duration,
      target: challenge.target,
      impactMetric: challenge.impactMetric,
    });

    document.getElementById("edit_modal").showModal(); // open modal
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`/challenges/${editingChallenge._id}`, {
        ...formData,
        id: editingChallenge._id, // backend needs id in body
      });
      if (data.success) {
        setChallenges((prev) =>
          prev.map((c) => (c._id === editingChallenge._id ? { ...c, ...formData } : c))
        );
        toast.success("Challenge updated successfully!");
        document.getElementById("edit_modal").close(); // close modal
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update challenge!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <span className="loading loading-dots loading-xl text-[#cbf139]"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Challenges You Created</h2>

      {challenges.length === 0 ? (
        <p className="text-center text-gray-500">No challenges created yet.</p>
      ) : (
        <div className="w-full overflow-x-auto shadow-lg rounded-xl">
          <table className="min-w-full border border-gray-200">
            <thead className="">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left hidden sm:table-cell">Category</th>
                <th className="p-3 text-left hidden md:table-cell">Created At</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge, index) => (
                <tr key={challenge._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{challenge.title}</td>
                  <td className="p-3 hidden sm:table-cell">{challenge.category}</td>
                  <td className="p-3 hidden md:table-cell">
                    {new Date(challenge.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleEditClick(challenge)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(challenge._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DaisyUI Modal */}
      <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" onSubmit={handleEditSubmit} className="modal-box w-full max-w-md">
          <h3 className="font-bold text-lg mb-4">Edit Challenge</h3>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            placeholder="Category"
            className="input input-bordered w-full mb-3"
            required
          />
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="textarea textarea-bordered w-full mb-3"
            required
          />
          <input
            type="number"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
            placeholder="Duration"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            name="target"
            value={formData.target || ""}
            onChange={handleChange}
            placeholder="Target"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            name="impactMetric"
            value={formData.impactMetric || ""}
            onChange={handleChange}
            placeholder="Impact Metric"
            className="input input-bordered w-full mb-3"
          />
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => document.getElementById("edit_modal").close()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CreatedChallenges;
