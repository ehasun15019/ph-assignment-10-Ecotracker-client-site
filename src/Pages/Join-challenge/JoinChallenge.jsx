import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxios from "../../Hooks/useAxios";
import { useNavigate, useParams } from "react-router";

const JoinChallenge = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
   const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxios();

  const handleJoin = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("You must be logged in to join!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`/challenges/join/${id}`, {userId: user.uid});
      setMessage(res.data.message);

      if(res.data.message){
        navigate(`/challenges/${id}`)
      }

    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Server error occurred");
    }

    setLoading(false);
  };

  return (
    <div className="w-11/12 mx-auto flex justify-center items-center pt-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleJoin}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                readOnly
                placeholder={user?.displayName || "Enter your name"}
              />

              <label className="label">Email</label>
              <input
                type="password"
                className="input"
                readOnly
                placeholder={user?.email || "Enter your email"}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn btn-neutral mt-4"
              >
                {loading ? "joining..." : "Join this challenge"}
              </button>
            </fieldset>
          </form>

          {
            message && <p className="mt-4 text-center">{message}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default JoinChallenge;
