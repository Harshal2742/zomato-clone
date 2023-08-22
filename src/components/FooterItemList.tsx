type FooterItemListProps = {
  title: string;
  items: string[];
  className?: string;
};

const FooterItemList = ({
  title,
  items,
  className,
}: FooterItemListProps): JSX.Element => {
  return (
    <div className={className}>
      <p className="footer-item-list-title">{title}</p>
      <ul className="footer-item-list ">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItemList;
