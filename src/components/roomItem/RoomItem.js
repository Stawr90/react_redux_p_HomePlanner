import useDragger from '../../hooks/useDragger';

function RoomItem ({id, src, dragEnd, coordTop, coordLeft}) {

    useDragger(id);
    
    return (
        <div 
            key={id} 
            id={id} 
            className="map__img"
            style={{top: `${coordTop-115}px`, left: `${coordLeft-448}px`}} 
            onDragEnd={dragEnd}>
            <img src={src} alt={id}></img>
        </div>
    )   
}

export default RoomItem;

// 190, 258

// top 115.20000457763672
// left 448.8000183105469

// "top":301.20001220703125,"left":703.7999877929688}

