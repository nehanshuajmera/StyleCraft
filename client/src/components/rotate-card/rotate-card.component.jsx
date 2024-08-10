import "./rotate-card.styles.scss";

export const RotateCard = ({ backgroundColor, cardHeading, details }) => {
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
            {
              details.map((detail) => (
                <li key={detail.id}>{detail.item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back 
        back-${backgroundColor}`}
      >
        back
      </div>
    </div>
  );
};
