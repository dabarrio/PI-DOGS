import css from './CardDog.module.css'
const CardDog = ({ name, id, image, temperament, weight_min, weight_max }) => {
    return (
      <div className={css.containerDog} key={id}>
        <img className={css.imageDog} src={image} alt={`Imagen de ${name}`}/>
        <div className={css.dataDog}>
        <h3 className={css.titleDog}>{name}</h3>
        <div>
          <h4 className={css.titleDog}>Temperamentos:</h4>
          <span>{temperament}</span>
        </div>
        <div className={css.weigthDog}>
        <p >{weight_min > 0 ? `Min : ${weight_min}` : ""}</p>
        <p >{weight_max > 0 ? `Max : ${weight_max}` : ""}</p>
        </div>    
        </div>
      </div>
    );
  };
  
  export default CardDog;
  