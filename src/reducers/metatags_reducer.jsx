import {OK,ERROR} from '../utils/api';
const metaTagsReducer = (state = {},action)=>{
    switch(action.type){
        case OK:
            if(action.payload.Meta){
                return {
                    type: OK,
                    data: action.payload.Meta
                }
            }
        case ERROR:
            return {
                type: ERROR,
                message: action.payload
            }
        default:
            return state;
    }
    return state;
}
export default metaTagsReducer;