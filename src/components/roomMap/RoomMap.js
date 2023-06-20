import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import { saveAs } from 'file-saver';
import {del, drag, load} from '../../store/actions/actions';

import RoomItem from '../roomItem/RoomItem';

import './roomMap.scss';

function RoomMap() {

    const [fileContent, setFileContent] = useState('');
    const coordinates = useSelector(state => state.coordinatesItems)
    const counter = useSelector(state => state.counter);
    const mapItems = useSelector(state => state.mapItems);
    const dispatch = useDispatch();

    let quantity = counter === 0 ? null : <p>{counter}</p>

    const delItemsToMap = () => {
        dispatch(del());
    }    

    const handleMouseMove = (e, id) => {
        let {top, left} = e.target.getBoundingClientRect(); 
        const coord = mapItems.map(item => {
            if (item.id === id) {
                return {...coordinates, ...item, top, left}
            } else if (item.id !== id) {
                return {...item, top, left}
            }
        })
        console.log(coordinates);
        dispatch(drag(coord));
    }

    const saveCoordin = () => {
        const array = coordinates.map(item => {
            return JSON.stringify(item)
        })
        const fileText = array;
        const blob = new Blob([fileText], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'itemstomap.txt');
    }

    const handleFileRead = (e) => {
        const content = e.target.result;
        setFileContent(content);
    }

    const downloadCoordin = (file) => {
        let fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }

    const dropToMap = () => {
        const text = fileContent;
        const obj = JSON.parse(`[${text}]`);
        dispatch(load(obj, obj.length));
        console.log(obj.length);
    }

    return (    
        <div className='map'>
            <div className="map__title">
                <div>
                    <h2>Карта заведения</h2>
                    {quantity}
                </div>
                <ul>
                    <li>{quantity && <button onClick={saveCoordin}>Сохранить</button>}</li>
                    <li><input type='file' onChange={e => downloadCoordin(e.target.files[0])}/></li>
                    <li><button onClick={dropToMap}>Загрузить</button></li>
                </ul>  
            </div>
            <div className="map__board">
                {mapItems.map(({id, itemSrc, left, top}) =>
                    <RoomItem id={id} src={itemSrc} dragEnd={(e) => handleMouseMove(e, id)} coordTop={top} coordLeft={left}/>
                )}
                {quantity && <button onClick={delItemsToMap}>Очистить</button>}
            </div>            
        </div>
    )
}

export default RoomMap;