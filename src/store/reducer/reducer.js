import armchair from '../../assets/img/armchair.jpg';
import chair from '../../assets/img/chair.jpg';
import bollard from '../../assets/img/bollard.jpg';
import computerTable from '../../assets/img/computer table.jpg';
import cornerComputerTable from '../../assets/img/corner computer table.jpg';
import plant from '../../assets/img/plant.jpg';
import sofa from '../../assets/img/sofa.jpg';
import TV from '../../assets/img/TV.jpg';
import wc from '../../assets/img/WC.jpg';
import sink from '../../assets/img/sink.jpg';
import cornerBath from '../../assets/img/corner bath.jpg';
import bathtub from '../../assets/img/bathtub.jpg';
import gasStove from '../../assets/img/Gas stove.jpg';
import largeSink from '../../assets/img/large sink.jpg';
import table4 from '../../assets/img/table 4.jpg';
import table8 from '../../assets/img/table 8.jpg';
import roundChair from '../../assets/img/round chair.jpg';


const initialState = {
    livingRoom: [
        {id: 'armchair', itemSrc: armchair},
        {id: 'chair', itemSrc: chair},
        {id: 'bollard', itemSrc: bollard},
        {id: 'computerTable', itemSrc: computerTable},
        {id: 'cornerComputerTable', itemSrc: cornerComputerTable},
        {id: 'plant', itemSrc: plant},
        {id: 'sofa', itemSrc: sofa},
        {id: 'TV', itemSrc: TV}
    ],
    bathRoom: [
        {id: 'wc', itemSrc: wc},
        {id: 'sink', itemSrc: sink},
        {id: 'cornerBath', itemSrc: cornerBath},
        {id: 'bathtub', itemSrc: bathtub},
    ],
    kitchenRoom: [
        {id: 'gasStove', itemSrc: gasStove},
        {id: 'largeSink', itemSrc: largeSink},
        {id: 'table4', itemSrc: table4},
        {id: 'table8', itemSrc: table8},
        {id: 'roundChair', itemSrc: roundChair}
    ],
    mapItems: [],
    counter: 0,
    coordinatesItems: [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        mapItems: [...state.mapItems, action.payload],
        counter: state.counter + 1
      };
    case 'DEL':
      return {
        ...state,
        mapItems: [],
        counter: 0
      };
    case 'DRAG':
      return {
        ...state,
        coordinatesItems: [...action.payload]
      };
    case 'LOAD':
      return {
        ...state,
        mapItems: [...action.payload[0]],
        counter: action.payload[1]
      };
    default:
      return state;
  }
}

export default reducer;