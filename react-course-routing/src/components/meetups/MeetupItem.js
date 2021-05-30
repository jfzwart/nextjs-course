import React, {useContext} from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }

    return (
        <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.id} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
        </li> 
        </Card>
    );
};

export default MeetupItem;