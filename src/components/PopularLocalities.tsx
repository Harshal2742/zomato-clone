import { useState } from "react";
import {
  IoChevronForwardSharp,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";

const localities = [
  {
    name: "Vesu",
    placesCount: 406,
  },
  {
    name: "Piplod",
    placesCount: 155,
  },
  {
    name: "Adajan Gam",
    placesCount: 301,
  },
  {
    name: "City Light",
    placesCount: 103,
  },
  {
    name: "Athwa",
    placesCount: 121,
  },
  {
    name: "Nanpura",
    placesCount: 44,
  },
  {
    name: "Dumas",
    placesCount: 26,
  },
  {
    name: "Katargam",
    placesCount: 201,
  },
  {
    name: "Udhan Gam",
    placesCount: 62,
  },
  {
    name: "Mandalla",
    placesCount: 51,
  },
  {
    name: "Pal Gam",
    placesCount: 123,
  },
  {
    name: "Nana Varachha",
    placesCount: 100,
  },
  {
    name: "Adajan Patiya",
    placesCount: 64,
  },
  {
    name: "Umarwada",
    placesCount: 32,
  },
  {
    name: "Palanapore",
    placesCount: 45,
  },
  {
    name: "Haripura",
    placesCount: 10,
  },
  {
    name: "Katodara",
    placesCount: 6,
  },
];

const PopularLocalities = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="popular-localities">
      <div className="container">
        <h2 className="heading-secondary">
          Popular localities in and around <span className="city">Surat</span>
        </h2>
        <div className="grid-3-col localities-grid-gap">
          {localities
            .slice(0, showMore ? localities.length : 8)
            .map((locality, index) => (
              <div key={index} className="locality">
                <p className="locality-name">{locality.name}</p>
                <p className="locality-placecount">{`${locality.placesCount} places`}</p>
                <IoChevronForwardSharp className="greater-than-logo" />
              </div>
            ))}
          <div
            className={`show-button ${!showMore && "not-expanded"}`}
            onClick={() => setShowMore((prev) => !prev)}
            role="button"
          >
            <p>{showMore ? "see less" : "see more"}</p>
            {showMore ? (
              <IoChevronUp className="see-more-logo" />
            ) : (
              <IoChevronDown className="see-more-logo" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocalities;
