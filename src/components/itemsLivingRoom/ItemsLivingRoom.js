import {useSelector, useDispatch} from 'react-redux';
import {add} from '../../store/actions/actions';

function ItemsLivingRoom() {

    const itemsRoom = useSelector(state => state.livingRoom);
    const dispatch = useDispatch();

    const addItemToMap = (id) => {
        itemsRoom.forEach(item => {
            if (item.id === id) {
                dispatch(add(item))
            }
        })
    }

    return (
        <ul>
            {itemsRoom.map(({id, itemSrc}) => 
                <li key={id} onClick={() => addItemToMap(id)}>
                    <img src={itemSrc} title='Click to add to the map -->'></img>
                </li>
            )}
        </ul>
    )
}

export default ItemsLivingRoom;