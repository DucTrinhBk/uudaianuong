import {CATEGORY_STATE,OK,ERROR} from '../utils/api';
const categoryReducer = (state = {},action)=>{
    if (action.state == CATEGORY_STATE){
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
export default categoryReducer;