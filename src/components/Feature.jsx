import React from 'react';
import classes from './Feature.module.scss';
// import tv from '../../public/images';


const Feature = (props) => {
  return (
    <div className={classes.features}>
      <div className={classes.feature}>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <h4>{props.subTitle}</h4>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
        
    </div>
  )
}

export default Feature