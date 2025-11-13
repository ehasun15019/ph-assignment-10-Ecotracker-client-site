import { FaLeaf, FaChartLine, FaUsers } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUsers className="text-green-600 text-3xl mb-3" />,
      title: "Join a Challenge",
      desc: "Choose from a variety of sustainability challenges that match your lifestyle goals — from reducing waste to saving energy.",
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl mb-3" />,
      title: "Track Your Progress",
      desc: "Log your daily actions, see your impact grow, and stay motivated as you contribute to collective eco progress.",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl mb-3" />,
      title: "Share & Inspire",
      desc: "Share your results, post green living tips, and inspire others in the EcoTrack community to take action.",
    },
  ];

  return (
    <section className="py-16 mt-20 w-11/12 mx-auto">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How It Works 🌱
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          EcoTrack makes sustainable living simple and fun — follow these three
          steps to make a measurable impact every day.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
