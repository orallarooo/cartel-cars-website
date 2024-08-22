import vector_gold_bigger from "../../img/vector-gold-bigger.svg"
import "./CarsCard.scss"

const CarsCard = ({name}, {img}) => {
  return (
    <div className="page-catalog__item">
      <h3>{name}</h3>
      <img src={vector_gold_bigger} alt="" />
    </div>
  );
};

export default CarsCard;
