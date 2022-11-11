let reducer = (state,action)=>{
    switch(action.type){
        case 'LOADER':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_VALUE':
            return {
                ...state,
                isLoading: false,
                name: action.payload
            }
        case 'GET_COUNTERY':
            return {
                ...state,
                isLoading: false,
                country: action.payload
            }        
        default: 
        return state;
    }
}
export default reducer