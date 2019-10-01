import {DETAIL_STATE,OK,ERROR} from '../utils/api';
const detailReducer = (state = {},action)=>{
    if (action.state == DETAIL_STATE){
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
export default detailReducer;