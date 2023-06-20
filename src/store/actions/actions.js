
export const add = (item) => ({type: 'ADD', payload: item});

export const del = () => ({type: 'DEL'});

export const drag = (item) => ({type: 'DRAG', payload: item});

export const load = (item, num) => ({type: 'LOAD', payload: [item, num]});