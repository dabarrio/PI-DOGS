import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createDog, getAllTemperaments } from "../../redux/actions";
import css from "./Form.module.css";
import Header from '../NavBar/Header'
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogCreate = useSelector(state=>state.newDog)
  const [valueTemperament, setValueTemperament] = useState([]);
  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const handleTemperament = (e) => {
    const value = e.target.value;
    if (
      !valueTemperament.includes(value) &&
      !valueTemperament.includes("No tiene temperamentos")
    ) {
      setValueTemperament([...valueTemperament, value]);
    }
    if (value === "No tiene temperamentos") {
      setValueTemperament([value]);
    }
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const value = e.target.value;

    const deleteTemp = valueTemperament.filter((t) => t !== value);

    setValueTemperament(deleteTemp);
  };

  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    image: "",
    temperament: "",
  });

  const [error, setError] = useState({
    name: "Este campo no puede estar incompleto",
    min_height: "Este campo no puede estar incompleto",
    max_height: "Este campo no puede estar incompleto",
    min_weight: "Este campo no puede estar incompleto",
    max_weight: "Este campo no puede estar incompleto",
    life_span: "Este campo no puede estar incompleto",
    image: "Este campo no puede estar incompleto",
  });

  const onSend = (e) => {
    e.preventDefault();
    const newDog = {
      name: input.name,
      min_height: input.min_height,
      max_height: input.max_height,
      min_weight: input.min_weight,
      max_weight: input.max_weight,
      life_span: input.life_span,
      image: input.image,
      temperament: valueTemperament,
    };
    console.log(newDog);
    dispatch(createDog(newDog));
    return alert(`${input.name}`);
  };

  const validate = (state) => {
    const errors = {};
    /// name
    if (!state.name) {
      errors.name = "Por favor, complete este campo";
    } else if (!/(^[A-Za-z\s]{3,25})+$/.test(state.name)) {
      errors.name = `El nombre '${state.name}' no cumple con los requisitos`;
    }
    /// min_height
    if (!state.min_height) {
      errors.min_height = "Por favor, complete este campo";
    } else if (!/(^\d{1,3})$/.test(state.min_height)) {
      errors.min_height = `'${state.min_height}' no cumple con los requisitos`;
    }
    ///max_height
    if (!state.max_height) {
      errors.max_height = "Por favor, complete este campo";
    } else if (!/(^\d{1,3})$/.test(state.max_height)) {
      errors.max_height = `'${state.max_height}' no cumple con los requisitos`;
    }
    ///min_weight
    if (!state.min_weight) {
      errors.min_weight = "Por favor, complete este campo";
    } else if (!/(^\d{1,3})$/.test(state.min_weight)) {
      errors.min_weight = `'${state.min_weight}' no cumple con los requisitos`;
    }
    ///max_weight
    if (!state.max_weight) {
      errors.max_weight = "Por favor, complete este campo";
    } else if (!/(^\d{1,3})$/.test(state.max_weight)) {
      errors.max_weight = `'${state.max_weight}' no cumple con los requisitos`;
    }
    ///life_span
    if (!state.life_span) {
      errors.life_span = "Por favor, complete este campo";
    } else if (!/(^\d{1,3})$/.test(state.life_span)) {
      errors.life_span = `'${state.life_span}' no cumple con los requisitos`;
    }
    ///image
    if (!state.image) {
      errors.image = "Por favor, complete este campo";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(state.image)) {
      errors.image = `'${state.image}' no cumple con los requisitos`;
    }
    ///temperament

    return errors;
  };

  const handleInput = (e) => {
    setInput((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
    });
  };

  return (
    <div>
     <Header/>
      {dogCreate.length===0 ?
           <form className={css.form}>
           <div className={css.formFlexColumn}>
             <label htmlFor="name">Nombre</label>
             <div>
             <input
               className={error.name ? css.inputFormDanger : css.inputForm }
               type="text"
               name="name"
               value={input.name}
               onChange={handleInput}
             ></input>
             {error.name ? <span>❌</span> : <span>✅</span>}
             </div>
           </div>
           {/*ALTURA*/}
           <div className={css.formFlexColumn}>
           <label htmlFor="min_height">Altura</label>
             <div className={css.formFlexRow}>
             <div className={css.minMax}>
             <div>
             <input
               className={error.name ? css.inputFormDanger : css.inputForm }
               type="num"
               name="min_height"
               value={input.min_height}
               onChange={handleInput}
               placeholder='Min'
             /><span>m</span>
             {error.min_height ? <span>❌</span> : <span>✅</span>}
             </div>
             </div>
             <div className={css.minMax}>
               <div>
               <input
               className={error.max_height ? css.inputFormDanger : css.inputForm }
               type="number"
               name="max_height"
               value={input.max_height}
               onChange={handleInput}
               placeholder='Max'
             ></input><span>m</span>
               {error.max_height ? <span>❌</span> : <span>✅</span>}
               </div></div>
             </div>
           </div>
           <div className={css.formFlexColumn}>
             <label htmlFor="min_weight">Peso</label>
             {/* Minimo */}
             <div className={css.formFlexRow}>
             <div className={css.minMax}>
               <div>
               <input
               className={error.min_weight ? css.inputFormDanger : css.inputForm }
               type="number"
               name="min_weight"
               value={input.min_weight}
               onChange={handleInput}
               placeholder='Min'
             ></input><span>kg</span>
             {error.min_weight ? <span>❌</span> : <span>✅</span>}
               </div>
             </div>
             {/* Maximo */}
             <div className={css.minMax}>
               <div>
               <input
               className={error.max_weight ? css.inputFormDanger : css.inputForm }
               type="number"
               name="max_weight"
               value={input.max_weight}
               onChange={handleInput}
               placeholder='Max'
             ></input><span>kg</span>
             {error.max_weight ? <span>❌</span> : <span>✅</span>}
               </div>
             </div>
             </div>
   
           </div>
           <div className={css.formFlexColumn}>
             <label htmlFor="life_span">Años</label>
             <div className={css.minMax}>
             <div>
             <input
               className={error.life_span ? css.inputFormDanger : css.inputForm }
               type="text"
               name="life_span"
               value={input.life_span}
               onChange={handleInput}
             ></input>
             {error.life_span ? <span>❌</span> : <span>✅</span>}
             </div>
             </div>
           </div>
           <div className={css.formFlexColumn}>
             <label htmlFor="image">Imagen</label>
             <div>
             <input
               className={error.image ? css.inputFormDanger : css.inputForm }
               name="image"
               value={input.image}
               onChange={handleInput}
             ></input>
             {error.image ? <span>❌</span> : <span>✅</span>}  
             </div>
           </div>
           <div className={css.formFlexColumn}>
           <div className={css.formFlexColumn}>
           <label htmlFor="temperament">Temperamento</label>
             <select 
             className={css.inputForm }
             name="temperament" onChange={handleTemperament}>
               {temperaments.map((t) => {
                 return (
                   <option key={t} value={t}>
                     {t}
                   </option>
                 );
               })}
             </select>
           </div>
             {valueTemperament.length > 0 ? (
               <div className={css.containerTemp}>
                 {valueTemperament.map((t) => {
                   return (
                     <input
                       type="submit"
                       key={t}
                       value={t}
                       onClick={handleDelete}
                       className={css.buttonTemp}
                     />
                   );
                 })}
               </div>
             ) : (
               <></>
             )}
           </div>
           <div>
             {!error.name &&
             !error.min_height &&
             !error.max_height &&
             !error.min_weight &&
             !error.max_weight &&
             !error.life_span &&
             !error.image ? (
               <input className={css.buttonSubmit} type="submit" value="Enviar" onClick={onSend} />
             ) : (
               <></>
             )}
           </div>
         </form>:
         <div className={css.form}>
           <h1>Tu perro ha sido creado con exito!</h1>
           <div>
             <Link to={`/${dogCreate.id}`}>Ver el perrito</Link>
             <Link to='/home'>Volver al home</Link>
           </div>
        </div>}
    </div>
  );
};

export default Form;
