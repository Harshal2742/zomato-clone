import { IoMdArrowDropright } from "react-icons/io";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    title: "13 Unmissable Gujrat Del...",
    placeCount: 13,
    imgSrc: "/img/collections/collection-1.png",
  },
  {
    title: "11 Great Cafes",
    placeCount: 17,
    imgSrc: "/img/collections/collection-2.jpg",
  },
  {
    title: "6 Luxury Dining Places",
    placeCount: 5,
    imgSrc: "/img/collections/collection-3.jpg",
  },
  {
    title: "9 Local Favourite Places",
    placeCount: 8,
    imgSrc: "/img/collections/collection-4.png",
  },
];

const Collections = () => {
  return (
    <section className="collections">
      <div className="container">
        <h2 className="heading-secondary">Collections</h2>
        <div className="collections-text-box">
          <p className="collections-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Surat, based on trends
          </p>
          <a href="#" className="all-collections-link">
            All collections in Surat
            <IoMdArrowDropright className="all-collections-icon" />
          </a>
        </div>
        <div className="grid-4-col">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
