import { useState } from "react";

const countryCode = ["+91", "+87", "+99", "+34", "+232", "+45", "+89", "+23"];

const GetApp = () => {
  const [inputEmail, setInputEmail] = useState(true);

  return (
    <section className="section-get-app">
      <div className="container get-app-grid get-app-container">
        <div className="get-app-img-box">
          <img src="/img/getapp/mobile-app.png" className="app-img" />
        </div>
        <div>
          <h2 className="heading-secondary get-app-heading">
            Get the Zomato app
          </h2>
          <p className="get-app-text">
            We will send you a link, open it on your phone to download the app
          </p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <div className="radio-btn-box">
              <div className="get-app-radio-label-wrapper">
                <input
                  id="email"
                  type="radio"
                  name="shareon"
                  value="email"
                  defaultChecked
                  onChange={() => setInputEmail(true)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="get-app-radio-label-wrapper">
                <input
                  id="phone"
                  type="radio"
                  name="shareon"
                  value="phone"
                  onChange={() => setInputEmail(false)}
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="get-app-input-box">
              {inputEmail ? (
                <input
                  type="email"
                  className="email-input"
                  placeholder="Email"
                />
              ) : (
                <div className="phone-input-box">
                  <select>
                    {countryCode.map((code, index) => {
                      return (
                        <option key={index} value={code}>
                          {code}
                        </option>
                      );
                    })}
                  </select>
                  <input type="tel" placeholder="type here..." />
                </div>
              )}
              <button className="share-btn">Share App Link</button>
            </div>
          </form>
          <p className="download-text">Download app from</p>
          <div className="app-store-img-box">
            <a href="#">
              <img src="/img/getapp/play-store.png" />
            </a>

            <a href="#">
              <img src="/img/getapp/apple-store.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
