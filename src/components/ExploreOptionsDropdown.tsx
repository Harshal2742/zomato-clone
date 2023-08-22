import { Fragment, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type ExploreOptionsDropdownProps = {
  title: string;
  places: string[];
  displayGrid: boolean;
};

const ExploreOptionsDropdown = ({
  title,
  places,
  displayGrid,
}: ExploreOptionsDropdownProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="explore-options-dropdown"
      role="button"
      onClick={() => {
        setExpanded((prev) => !prev);
      }}
    >
      <div className="drop-down-header">
        <p className="dropdown-title">{title}</p>
        <IoChevronDown
          className={`dropdown-logo ${
            expanded ? "dropdown-logo-expanded" : ""
          }`}
        />
      </div>
      {expanded && (
        <div className={`dropdown-body ${displayGrid && "grid-5-col"}`}>
          {places.map((link, index) => {
            return (
              <Fragment key={index}>
                <a href="#">{link}</a>
                {!displayGrid && <span>&bull;</span>}
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreOptionsDropdown;
