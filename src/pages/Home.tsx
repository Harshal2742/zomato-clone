import Collections from "../components/Collections";
import Explore from "../components/Explore";
import ExploreOptions from "../components/ExploreOptions";
import Footer from "../components/Footer";
import GetApp from "../components/GetApp";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularLocalities from "../components/PopularLocalities";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Collections />
        <PopularLocalities />
        <GetApp />
        <ExploreOptions />
      </main>
      <Footer />
    </>
  );
};

export default Home;
