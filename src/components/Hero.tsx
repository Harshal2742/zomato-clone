import { IoLocation, IoSearchOutline } from "react-icons/io5";

const Hero = (): JSX.Element => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/img/brand-name.png" className="brand-img--white" />
        <h1 className="heading-primary hero-heading">
          Discover the best food & drinks in <span>Pune</span>
        </h1>
        <form className="search-form">
          <div className="location-box">
            <IoLocation className="icon-location" />
            <select>
              <option value={""}>Surat</option>
              <option value={"pune"}>Pune</option>
              <option value={"satara"}>Satara</option>
            </select>
          </div>
          <div className="search-box">
            <IoSearchOutline className="icon-search" />
            <input
              type="search"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
