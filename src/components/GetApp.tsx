const GetApp = () => {
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
          <form>
            <div className="radio-btn-box">
              <div className="get-app-radio-label-wrapper">
                <input
                  id="email"
                  type="radio"
                  name="shareon"
                  value="email"
                  defaultChecked
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="get-app-radio-label-wrapper">
                <input id="phone" type="radio" name="shareon" value="phone" />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="get-app-email-phone-input-box">
              <input
                type="email"
                className="email-phone-input"
                placeholder="Email"
              />
              <button>Share App Link</button>
            </div>
          </form>
          <p className="download-text">Download app from</p>
          <div className="app-store-img-box">
            <img src="/img/getapp/play-store.png" />
            <img src="/img/getapp/apple-store.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
