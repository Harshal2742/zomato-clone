import ExploreOptionsDropdown from "./ExploreOptionsDropdown";

const options = [
  {
    title: "Popular cuisines near me",
    displayGrid: false,
    places: [
      "Bakery food near me",
      "Beverages food near me",
      "Biryani food near me",
      "Burger food near me",
      "Chinese food near me",
      "Coffee food near me",
      "Desserts food near me",
      "Gujarati food near me",
      "Ice Cream food near me",
      "Italian food near me",
      "Mughlai food near me",
      "Pasta food near me",
      "Pizza food near me",
      "Sandwich food near me",
      "Shake food near me",
      "Sichuan food near me",
      "South Indian food near me",
      "Street food near me",
      "Tea food near me",
    ],
  },
  {
    title: "Popular restaurant types near me",
    displayGrid: false,
    places: [
      "Bakeries near me",
      "Bars near me",
      "Beverage Shops near me",
      "Bhojanalya near me",
      "Cafés near me",
      "Casual Dining near me",
      "Dessert Parlors near me",
      "Dhabas near me",
      "Fine Dining near me",
      "Food Courts near me",
      "Food Trucks near me",
      "Kiosks near me",
      "Lounges near me",
      "Paan Shop near me",
      "Quick Bites near me",
      "Sweet Shops near me",
    ],
  },
  {
    title: "Top Restaurant Chains",
    displayGrid: true,
    places: ["Burger King", "KFC", "McDonald's", "Pizza Hut", "Subway"],
  },
  {
    title: "Cities We Deliver To",
    displayGrid: true,
    places: [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Kolkata",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Chandigarh",
      "Lucknow",
      "Kochi",
      "Goa",
      "Agra",
      "Varanasi",
      "Amritsar",
      "Bhopal",
      "Indore",
      "Mysore",
      "Patna",
      "Nagpur",
      "Kanpur",
      "Coimbatore",
      "Vadodara",
      "Bhubaneswar",
      "Jaipur",
      "Ludhiana",
      "Agra",
      "Dehradun",
      "Guwahati",
      "Nashik",
      "Surat",
      "Jodhpur",
      "Visakhapatnam",
      "Thiruvananthapuram",
      "Raipur",
      "Varanasi",
      "Amritsar",
      "Ranchi",
      "Gurgaon",
      "Noida",
      "Faridabad",
      "Meerut",
      "Patiala",
      "Kota",
      "Srinagar",
      "Jammu",
      "Shillong",
    ],
  },
];

const ExploreOptions = (): JSX.Element => {
  return (
    <section className="section-explore-options">
      <div className="container">
        <h2 className="explore-options-heading">Explore options near me</h2>
        <div>
          {options.map((option, index) => {
            return <ExploreOptionsDropdown key={index} {...option} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreOptions;
