import RoomMap from '../roomMap/RoomMap';
import RoomList from '../roomList/RoomList';

import './app.scss';

function App() {
  return (
    <main className="app">
      <div className="content">
        <RoomList/>
        <RoomMap/>
      </div>
    </main>
  );
}

export default App;
