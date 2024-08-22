import "./rotate-card.styles.scss";

export const RotateCard = ({
  backgroundColor,
  cardHeading,
  details,
  price,
}) => {
  return (
    <div className="rotate-card">
      <div className={`card__side card__side--front`}>
        <div className={`card__picture picture-${backgroundColor}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card-heading-span heading-${backgroundColor}`}>
            {cardHeading}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {details.map((detail) => (
              <li key={detail.id}>{detail.item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back 
        back-${backgroundColor}`}
      >
        <div className="card__action">
          <div className="price__box">
            <div className="price--only">only</div>
            <div className="price--value">{price}</div>
          </div>
          <div className="card__btn">
            <a className="anchor__btn anchor__btn--white" href="#popup">
              Buy Now !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
