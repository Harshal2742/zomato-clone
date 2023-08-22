import { IoMdArrowDropright } from "react-icons/io";

type CollectionCardProps = {
  title: string;
  imgSrc: string;
  placeCount: number;
};

const CollectionCard = ({
  title,
  imgSrc,
  placeCount,
}: CollectionCardProps): JSX.Element => {
  return (
    <div className="collection-card">
      <div className="collection-img-box ">
        <img src={imgSrc} alt={title} className="collection-img" />
      </div>
      <div className="collection-text-wrapper">
        <div className="collection-text-box">
          <p className="collection-title">{title}</p>
          <div className="collection-place-count">
            <p>{placeCount} Places</p>
            <IoMdArrowDropright className="places-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
