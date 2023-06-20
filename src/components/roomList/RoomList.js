import {Routes, Route, Link} from 'react-router-dom';

import ItemsBathRoom from '../itemsBathRoom/ItemsBathRoom';
import ItemsLivingRoom from '../itemsLivingRoom/ItemsLivingRoom';
import ItemsKitchenRoom from '../itemsKitchenRoom/ItemsKitchenRoom';

import './roomList.scss';

function RoomList() {

    return (
        <div className="list">
            <nav className="nav">
                <Link to="/" className="nav__room">Гостиная</Link>
                <Link to="/bathroom" className="nav__bathroom">Ванная команта</Link>
                <Link to="/kitchen" className="nav__bathroom">Кухня</Link>
            </nav>
            <Routes>
                <Route path='/' element={<ItemsLivingRoom/>}/>
                <Route path='/bathroom' element={<ItemsBathRoom/>}/>
                <Route path='/kitchen' element={<ItemsKitchenRoom/>}/>
            </Routes>
        </div>
    )
}

export default RoomList;