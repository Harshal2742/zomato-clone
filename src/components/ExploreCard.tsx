type ExploreCardProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

const ExploreCard = ({
  title,
  subtitle,
  imgSrc,
}: ExploreCardProps): JSX.Element => {
  return (
    <div className="explore-card">
      <div className="explore-img-box">
        <img className="explore-img" src={imgSrc} alt={title} />
      </div>
      <div className="explore-text-box">
        <p className="explore-title">{title}</p>
        <p className="explore-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
