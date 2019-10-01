import { OK,ERROR,TAG_STATE,getApiUrl } from '../utils/api'
const getTagPage = (tag,page)=>dispatch =>{
    var url = TAG_STATE+"?tagId="+tag+'&page='+page;
    console.log(getApiUrl(url));
    fetch(getApiUrl(url),{
        method: 'GET',
        headers: {
            'content-type':'application/json',
        }
    }).then(res=>res.json())
    .then(data =>{
        if(data){
            dispatch({
                    type: OK,
                    state: TAG_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: TAG_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: TAG_STATE,
            payload: e
        })
    });
}
export default getTagPage;