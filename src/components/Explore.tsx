import ExploreCard from "./ExploreCard";

const exploreItems = [
  {
    title: "Order Online",
    subtitle: "Stay home and order to your doorstep",
    imgSrc: "/img/explore/explore-1.jpeg",
  },
  {
    title: "Dining",
    subtitle: "View the city's favourite dining venues",
    imgSrc: "/img/explore/explore-2.jpeg",
  },
  {
    title: "Nightlife and Clubs",
    subtitle: "Explore the city's top nightlife outlets",
    imgSrc: "/img/explore/explore-3.jpeg",
  },
];

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="grid-3-col grid-box">
          {exploreItems.map((item, index) => (
            <ExploreCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
