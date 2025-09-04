
const OurMissionSection = () => {
  const missions = [
    {
      id: 1,
      icon: "💡",
      title: "Breakthrough Product Launched",
      description: "Introducing innovative Ayurvedic solutions for modern health challenges.",
    },
    {
      id: 2,
      icon: "🌿",
      title: "Mission",
      description: "“To deliver trusted Ayurvedic weight loss solutions that are effective, natural, and free from side effects—helping people lose weight the right way.”",
    },
    {
      id: 3,
      icon: "🔭",
      title: "Vision: To Redefine Wellness in India",
      description: "Combining ancient wisdom with contemporary science for holistic health.",
    },
    {
      id: 4,
      icon: "🏆",
      title: "Goal: Healthy Lifestyle for All",
      description: "Making authentic Ayurvedic solutions accessible and effective for everyone.",
    },
  ];

  return (
    <section className="py-20 bg-ayurveda-light">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ayurveda-dark mb-16">
          Our Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission) => (
            <div 
              key={mission.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{mission.icon}</div>
              <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-2">
                {mission.title}
              </h3>
              <p className="text-gray-700">
                {mission.description}
              </p>
            </div>  
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
