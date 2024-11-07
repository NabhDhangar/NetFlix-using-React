// import './NetFlix.css'
import styles from './Netflix.module.css'
import styled from 'styled-components'
export const SeriesCard=(props)=>{

    const btn_style={
        padding:"1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:`${props.currElem.rating>=8.5?"#7dcea0" :"#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight:"bold",
        cursor:"pointer",
    }
    const ratingClass=props.currElem.rating>=8.5 ? styles["super-hit"] : styles.average;

    return(
        <li>
            <div className={styles.card}>
                <img src={props.currElem.img_url} alt="jpg img" width="40%" height="40%"/>
                
                <div className={styles["card-content"]}>
                    <h2>Name: {props.currElem.name} </h2>
                    <h3>Rating: 
                        <span className={ `${styles.rating} ${ratingClass}`}>
                        {props.currElem.rating}
                        </span>
                    </h3>
                    <p className="text-amber-700">Summary: {props.currElem.description}</p>
                    <p>Genre: {props.currElem.genre.join(", ")}</p>
                    <p>Cast: {props.currElem.cast.join(", ")}</p>
                    <a href={props.currElem.watch_url} target="_blank"> 
                        <button style={btn_style}>Watch Now</button> 
                    </a>
                </div>
            </div>
        </li>
    );
};

// conditional styling as like--   `${condition}`