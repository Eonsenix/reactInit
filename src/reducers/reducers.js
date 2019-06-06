export default (state = 0, action)=>{
  state = state || {counter:0}
  switch(action.type){
    case 'Add':
      return {counter: state.counter + 1}
    case 'Sub':
      return {counter: state.counter - 1}
    default:
      return state
  }
}