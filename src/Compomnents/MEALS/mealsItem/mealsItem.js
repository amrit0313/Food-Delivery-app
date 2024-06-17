import classes from './mealsitem.module.css'

const MealsItem = props =>{
    const price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>

            </div>
            <div>

            </div>
        </li>
    )
};

export default MealsItem;