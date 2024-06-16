 import React from 'react'
 import mealsImage from '../../Assets/meals.jpg'
 import classes from './header.module.css'
 
 const Header = props =>{

    return(
        <React.Fragment>
            <header className= {classes.header}>
                <h1>AmrtzMeals</h1>
                <button>carts</button>
            </header>
            <div className={classes['main-image']}>
                <img src = {mealsImage} alt='here would be foods for you'/>
            </div>
        </React.Fragment>
    );

 };

 export default Header;