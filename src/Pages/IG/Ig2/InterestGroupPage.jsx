import { Keywords } from "./components/keywords";
import { ProfileCard } from "./components/profilecard";
import { Section } from "./components/section";
import fvimg from "../assets/fvimg.png";
import styles from "./index.module.css";
import { BiCalendar, BiTime, BiMap } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { webdev } from "../data/web-dev";
import { datascience } from "../data/datascience";
import { gamedev } from "../data/gamedev";
import { devops } from "../data/devops";
import { uiuxDesign } from "../data/uiux";
import { cybersecurity } from "../data/cybersecurity";
import { useEffect, useState } from "react";
// import { artificialIntelligence } from "../data/ai";
import { arVr } from "../data/arvr";
import { hr } from "../data/hr";
import { digitalMarketing } from "../data/digitalmarketing";
import { productManagement } from "../data/productmanagement";
import { entrepreneurship } from "../data/entrepreneurship";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Timeline from "./components/Timeline";

export default function InterestGroupPage() {
  const { id } = useParams();

  // New state to hold the dynamic data
  const [data, setData] = useState(null);
  const [ismobile, setismobile] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = ismobile ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= data.learningCircles.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? data.learningCircles.length - 1 : nextIndex;
    });
  };

  // Calculate visible items based on current viewport
  const getVisibleItems = () => {
    const items = [...data.learningCircles];
    const visibleItems = [];

    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }

    return visibleItems;
  };

  useEffect(() => {
    // Load data based on the id
    const loadData = () => {
      switch (id) {
        case "web-development":
          setData(webdev);
          break;
        case "data-science":
          setData(datascience);
          break;
        case "game-development":
          setData(gamedev);
          break;
        case "cloud-and-devops":
          setData(devops);
          break;
        case "cybersecurity":
          setData(cybersecurity);
          break;
        case "uiux":
          setData(uiuxDesign);
          break;
        // case "ai":
        //   setData(artificialIntelligence);
        //   break;
        case "arvr":
          setData(arVr);
          break;
        case "human-resources":
          setData(hr);
          break;
        case "digital-marketing":
          setData(digitalMarketing);
          break;
        case "product-management":
          setData(productManagement);
          break;
        case "entrepreneurship":
          setData(entrepreneurship);
          break;
        default:
          setData(null); // Handle unknown id
      }
    };

    loadData();
  }, [id]); // Dependency array includes id to reload data on change

  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return <div>Loading...</div>; // Optional loading state

  return (
    <div
      className={`${styles.container} min-h-screen overflow-x-hidden w-full flex-1`}>
      <div className="flex text-left w-full mb-8">
        <div className={styles.contentSide}>
          <h1 className={styles.title}>{data.title}</h1>

          <p className={styles.description}>{data.introduction?.description}<br/><span> <a href={data.introduction?.downloadLink} target="_blank" rel="noopener noreferrer" className="text-orange-400">Click here</a> to download the foundation deck.</span></p>
          
         

          <div className={styles.offerInfo}>
            <span className={styles.highlight}>Office Hours</span>{" "}
            {data.introduction.schedules?.officeHours || "TBA"}
            <br />
            <span className={styles.highlight}>Think Tank Meeting</span>{" "}
            {data.introduction.schedules?.thinkTankMeeting || "TBA"}
          </div>

          <button type="button" className={styles.primaryButton} onClick={() => window.open('https://app.mulearn.org', '_blank')}>Join learning Circles</button>
        </div>
        <div
          className={`flex-1 lg: min-w-[300px] flex justify-center items-center max-lg:hidden`}>
          <div className={styles.heroImage}>
            <img
              src={fvimg}
              alt="Web Development Illustration"
              className={`${styles.mainImage}`}
            />
          </div>
        </div>
      </div>
      {data.communityPartners && (
        <div className="py-4 md:py-8 ">
          <h2 className="text-2xl font-bold text-[#FF6B35] my-4 md:my-6 ml-0 text-left text-nowrap ">
            Community Partners
          </h2>

          <div className="flex max-sm:flex-col gap-8 w-full flex-wrap justify-center">
            {data.communityPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex flex-wrap items-center  rounded-lg p-4 ">
                <img
                  className="w-[100px] object-fill "
                  src={partner.image}
                  alt={partner.name}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {data.learningCircles && (
        <div className="w-full py-4 md:py-8 md:px-8">
          <h2 className="text-2xl font-bold text-[#FF6B35] my-4 md:my-6 ml-0 text-left">
            Learning Circles
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out gap-5"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}>
                {getVisibleItems().map((circle) => (
                  <div
                    key={circle.id}
                    className="w-full flex-shrink-0 min-w-0"
                    style={{ flex: `0 0 ${100 / itemsPerView}%` }}>
                    <div
                      style={{
                        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
                      }}
                      className="bg-white rounded-lg p-6 m-2">
                      <h3 className="text-xl font-semibold mb-2">
                        {circle.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {circle.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <BiCalendar className="w-5 h-5" />
                          <span className="text-sm">{circle.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <BiTime className="w-5 h-5" />
                          <span className="text-sm">{circle.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <BiMap className="w-5 h-5" />
                          <span className="text-sm">{circle.location}</span>
                        </div>
                      </div>
                      <button className="bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-[#e85f2f] transition-colors">
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors -ml-4 z-10">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors -mr-4 z-10">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      <Section
        className="text-left flex flex-col justify-start items-start py-4 md:py-8 space-y-4 md:space-y-8"
        title="Pre-requisites">
        <p className="text-gray-600">{data.prerequisites.description}</p>
        {/* <p className="text-gray-600">
          {data.prerequisites?.map((prerequisite) => (
            <span key={prerequisite} className="text-gray-600">
              {prerequisite},{" "} 
            </span>
          ))}
        </p> */}
      </Section>

      <Section className="w-full" title="Learning Path">
        <div className=" max-w-6xl mx-auto px-4 py-8">
          <div className="w-full border rounded-lg overflow-hidden bg-white">
            {/* <iframe
              src={data.learningPath?.embedUrl}
              width="100%"
              height="900px"
              frameBorder="0"
              title="Roadmap Preview"
            /> */}
            <Timeline/>
          </div>
        </div>
      </Section>

      <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
        <Section title="Mentor Details" className="space-y-4 md:space-y-6">
          <p className="text-gray-600">
            Here to help? Our Mentors are here to help you get all your doubts
            cleared and help you along your journey. Join in for our office
            hours and get all your doubts cleared.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.mentors?.map((mentor) => (
              <ProfileCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </Section>

        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
          <Section title="Interest Group Leads">
            <p className="text-gray-600">
              Interest group leads manage the activities and events within
              interest groups and serve as a point of contact for students. They
              help coordinate activities and provide information about new
              interests.
            </p>
            <div className="space-y-4 mt-4">
              {data.interestGroupLeads?.leads.map((lead) => (
                <ProfileCard key={lead.name} {...lead} />
              ))}
            </div>
          </Section>

          <Section title="Interest Group Leaderboard">
            <p className="text-gray-600">
              Stay engaged and climb the leaderboard as you complete projects
              and participate in discussions.
            </p>
            {data.interestGroupLeaderboard && (
              <div className="aspect-square bg-white rounded-lg border mt-4" />
            )}
          </Section>
        </div>

        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Section title="Opportunities">
            <p className="text-gray-600">
              Getting a new skill always brings in possible opportunities. Here
              are possible opportunities that you could grab by learning this
              skill.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {data.opportunities?.map((opportunity) => (
                <li key={opportunity.title} className="text-gray-600">
                  {opportunity.title} - {opportunity.description}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Top People to Follow ">
            <p className="text-gray-600">
              These are list of people you should be following/connecting to
              learn as well as stay updated!
            </p>
            <ul className="space-y-1">
              {data.peopleToFollow?.map((person) => (
                <li key={person.name} className="text-gray-600">
                  {person.name} -{" "}
                  <a
                    href={person.link}
                    className="text-[#ff6b00] hover:underline">
                    click here
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Top Blogs to Follow">
            <p className="text-gray-600">
              Learning through reading is a great way to improve your knowledge
              base. These are trusted blogs and have quality content and have
              lots of them!
            </p>
            <ul className="space-y-1">
              {data.blogsToFollow?.map((blog) => (
                <li key={blog.name} className="text-gray-600">
                  {blog.name} -{" "}
                  <a
                    href={blog.link}
                    className="text-[#ff6b00] hover:underline">
                    click here
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Top Keywords">
          <p className="text-gray-600">
            Listed below are the top keywords that you should be looking out for
            while searching through internet!
          </p>
          <Keywords keywords={data.topKeywords} />
        </Section>
      </div>
    </div>
  );
}
