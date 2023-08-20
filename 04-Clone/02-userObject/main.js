const state1 = { username: 'john', point: 100, loading: true };

const state2 = Object.assign({}, state1,{laoding:false, point:75})
console.log(state2)