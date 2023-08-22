import {
  IoChevronDown,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import FooterItemList from "./FooterItemList";

const contents = [
  {
    title: "About zomato",
    items: [
      "Who Are We",
      "Blog",
      "Work With Us",
      "Invertor Relations",
      "Report Fraud",
      "Contact Us",
    ],
  },
  {
    title: "Zomaverse",
    items: ["Zomato", "Blinkit", "Feeding india", "Hyperpure", "Zomaland"],
  },
  {
    title: "For Restaurants",
    items: ["Partern with us", "Apps for you"],
  },
  {
    title: "For Enterprises",
    items: ["Zomato For Enterprise"],
  },
  {
    title: "Learn more",
    items: ["Privacy", "Security", "Terms", "Sitemap"],
  },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div>
          <div className="footer-heading">
            <img
              className="brand-name-black"
              src="/img/brand-name-black.png"
              alt="Brand name: Zomato"
            />
            <div className="drop-down-btn " role="button">
              <span>India</span>
              <IoChevronDown />
            </div>
            <div className="drop-down-btn " role="button">
              <GrLanguage />
              <span>English</span>
              <IoChevronDown />
            </div>
          </div>
        </div>
        <div className="footer-content-grid">
          <FooterItemList {...contents[0]} className="about-zomato" />
          <FooterItemList {...contents[1]} className="zomaverse" />
          <FooterItemList {...contents[2]} className="for-restaurants" />
          <FooterItemList {...contents[3]} className="for-enterprises" />
          <FooterItemList {...contents[4]} className="learn-more" />
          <div className="social-links">
            <div>
              <p className="social-links-title ">Social links</p>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoYoutube />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoFacebook />
                  </a>
                </li>
              </ul>
              <div>
                <a href="#">
                  <img src="/img/getapp/apple-store.png" />
                </a>
                <a href="#">
                  <img src="/img/getapp/play-store.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
