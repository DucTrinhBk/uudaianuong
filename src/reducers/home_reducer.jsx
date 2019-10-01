import {HOME_STATE,OK,ERROR} from '../utils/api';
const homeReducer = (state = {},action)=>{
    if (action.state == HOME_STATE){
        switch(action.type){
            case OK:
                return {
                    type: OK,
                    data: action.payload
                }
            case ERROR:
                return {
                    type: ERROR,
                    message: action.payload
                }
            default:
                return state;
        }
    }
    return state;
}
export default homeReducer;