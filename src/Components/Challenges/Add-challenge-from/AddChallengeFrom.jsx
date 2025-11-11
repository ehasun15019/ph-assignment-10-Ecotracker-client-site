import React from "react";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";

const AddChallengeFrom = () => {
  const axios = useAxios();

  const handleCreateChallenge = (e) => {
    e.preventDefault();

    const target = e.target;

    const newChallenge = {
      title: target.title.value,
      category: target.category.value,
      description: target.description.value,
      imageUrl: target.imageUrl.value,
      duration: target.duration.value,
      target: target.target.value,
      impactMetric: target.impactMetric.value,
      startDate: target.startDate.value,
      endDate: target.startDate.value,
      createdBy: target.createdBy.value,
    };

    axios
      .post("/challenges", newChallenge)
      .then((data) => {
        toast.success(data.data.message);
        target.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error creating challenge!");
      });
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-3xl shadow-2xl rounded-2xl border border-gray-200">
        <div className="card-body space-y-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Create a New Challenge
          </h2>

          <form onSubmit={handleCreateChallenge}>
            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="label font-semibold text-gray-700">
                  Challenge Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Plastic-Free July"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="label font-semibold text-gray-700">
                  Select Category
                </label>
                <select
                  name="category"
                  defaultValue="Waste Reduction"
                  className="select select-bordered w-full"
                >
                  <option>Waste Reduction</option>
                  <option>Energy Conservation</option>
                  <option>Water Conservation</option>
                  <option>Sustainable Transport</option>
                  <option>Green Living</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="pt-3">
              <label className="label font-semibold text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                rows="3"
                placeholder="Describe your challenge (e.g., Avoid single-use plastic for one month)"
              ></textarea>
            </div>

            {/* Photo URL */}
            <div className="pt-3">
              <label className="label font-semibold text-gray-700">
                Challenge Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
              />
            </div>

            {/* Duration & Target */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
              <div>
                <label className="label font-semibold text-gray-700">
                  Duration (in days)
                </label>
                <input
                  type="number"
                  name="duration"
                  placeholder="e.g., 30"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label font-semibold text-gray-700">
                  Target
                </label>
                <input
                  type="text"
                  name="target"
                  placeholder="e.g., Reduce plastic waste"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Impact Metric */}
            <div className="pt-3">
              <label className="label font-semibold text-gray-700">
                Impact Metric
              </label>
              <input
                type="text"
                name="impactMetric"
                placeholder="e.g., kg plastic saved"
                className="input input-bordered w-full"
              />
            </div>

            {/* Start & End Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
              <div>
                <label className="label font-semibold text-gray-700">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label font-semibold text-gray-700">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Created By */}
            <div className="pt-3">
              <label className="label font-semibold text-gray-700">
                Created By
              </label>
              <input
                type="email"
                name="createdBy"
                placeholder="admin@ecotrack.com"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 text-center">
              <button type="submit" className="btn btn-neutral w-full">
                Submit Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChallengeFrom;
