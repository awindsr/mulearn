import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./InterestGroups.module.css";
import fvimg from "./assets/fvimg.png";
// import { useState } from "react";
import {
  Users,
  BookOpen,
  Calendar,
  Share2,
  TrendingUp,
  Network,
  Award,
  GitMerge,
  Code,
  Paintbrush,
  Cpu,
  Briefcase,
} from "lucide-react";

const features = [
  { icon: Users, title: "Focused Learning Communities" },
  { icon: BookOpen, title: "Peer-to-Peer Learning" },
  { icon: Calendar, title: "Workshops and Events" },
  { icon: Share2, title: "Resource Sharing" },
  { icon: TrendingUp, title: "Skill Development Pathways" },
  { icon: Network, title: "Networking Opportunities" },
  { icon: Award, title: "Recognition and Rewards" },
  { icon: GitMerge, title: "Collaboration Opportunities" },
];

const categories = [
  {
    name: "Software",
    description: "Dive into the world of coding and software development.",
    icon: Code,
    active: [
      "Game Development",
      "Web Development",
      "Data Science",
      "Cybersecurity",
      "Artificial Intelligence",
      "Cloud and DevOps",
    ],
    comingSoon: [
      "Beckn",
      "No/Low Code",
      "Quality Assurance",
      "Blockchain",
      "Edge Computing",
      "Data Structures and Algorithms",
    ],
  },
  {
    name: "Creative",
    description: "Unleash your creativity and design skills.",
    icon: Paintbrush,
    active: ["UIUX", "ARVR"],
    comingSoon: [
      "CAD",
      "Film Making",
      "Content Writing",
      "Creative Design",
      "3D Animation",
      "Comics",
    ],
  },
  {
    name: "Maker",
    description: "Build and innovate with cutting-edge technologies.",
    icon: Cpu,
    active: ["Internet of Things"],
    comingSoon: ["Semiconductor", "Robotics", "Wearable Technology", "Drones"],
  },
  {
    name: "Others",
    description: "Explore diverse fields and expand your horizons.",
    icon: Briefcase,
    active: [
      "Product Management",
      "Digital Marketing",
      "Entrepreneurship",
      "Human Resources",
    ],
    comingSoon: ["Strategic Leadership"],
  },
];

const InterestGroups = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const carouselItems = [
  //   {
  //     title: "Title 1",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   {
  //     title: "Title 2",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   {
  //     title: "Title 3",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   {
  //     title: "Title 3",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   {
  //     title: "Title 3",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   {
  //     title: "Title 3",
  //     date: "Date",
  //     time: "Time",
  //     location: "Location",
  //   },
  //   // Add more items as needed
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
  //   );
  // };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contentSide}>
          <h1 className={styles.title}>
            µLearn <span>Interest Groups</span>
          </h1>

          <p className={styles.description}>
            An informal mechanism for bringing together learners who are
            interested in the same topic from across different fields and
            disciplines. A fantastic way to spend a small amount of time
            learning about new things with a group of people with same
            interests!
          </p>

          <div className="flex  gap-4 mt-8">
            <button
            type="button"
              className={styles.primaryButton}
              onClick={() => {
                document
                  .getElementById("categories")
                  .scrollIntoView({ behavior: "smooth" });
              }}>
              Discover More
            </button>
            <button
            type="button"
              onClick={() =>
                window.open("https://airtable.com/shriAaNO6q4cQzKKl")
              }
              className="bg-white border border-[#ff6b00] transition-all duration-200 ease-in-out hover:text-white hover:bg-[#ff6b00] px-4 py-2 rounded-md">
              Request Interest Group
            </button>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.heroImage}>
            <img
              src={fvimg}
              alt="Web Development Illustration"
              className={styles.mainImage}
            />
          </div>
        </div>
        <section id="features" className="w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-5">
              Existing <span className="text-orange-400">Interest Groups</span>
            </h2>
            <p className="w-1/2 text-center mx-auto">
              Learning things for which you are curious is interesting, right?
              What about learning the same thing along with a group of
              like-minded peers and mentors, Much more interesting, right? Join
              in Now and Start Learning!
            </p>
            <div className="w-full mt-8 grid gap-6">
              {/* Software - Full Width Row */}
              {categories[0] && (
                <div className="shadow-lg p-5 rounded-md">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 text-orange-400 mr-3">
                      {React.createElement(categories[0].icon, {
                        className: "w-8 h-8 text-orange-400",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold">{categories[0].name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {categories[0].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories[0].active.map((group, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
                        <h4 className="font-semibold mb-2">{group}</h4>
                        <a
                          href={`/interestgroups/${group
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-sm text-orange-400 hover:text-orange-500">
                          View Group →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Creative (UI/UX) and Maker - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.slice(1, 3).map((category, index) => (
                  <div key={index} className="shadow-lg p-5 rounded-md">
                    <div className="flex items-center mb-4">
                      <category.icon className="w-8 h-8 text-orange-400 mr-3" />
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="grid grid-cols-1 gap-4">
                      {category.active.map((group, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
                          <h4 className="font-semibold mb-2">{group}</h4>
                          <a
                            href={`/interestgroups/${group
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm text-orange-400 hover:text-orange-500">
                            View Group →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Others - Full Width Row */}
              {categories[3] && (
                <div className="shadow-lg p-5 rounded-md">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 text-orange-400 mr-3">
                      {React.createElement(categories[3].icon, {
                        className: "w-8 h-8 text-orange-400",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold">{categories[3].name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {categories[3].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories[3].active.map((group, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
                        <h4 className="font-semibold mb-2">{group}</h4>
                        <a
                          href={`/interestgroups/${group
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-sm text-orange-400 hover:text-orange-500">
                          View Group →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Learning Circles Section */}
      </div>
      <Footer />
    </>
  );
};

export default InterestGroups;
