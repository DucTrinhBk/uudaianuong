import { OK,ERROR,DETAIL_STATE,getApiUrl } from '../utils/api'
const getDetail = (blogId)=>dispatch =>{
    var url = DETAIL_STATE+"?blogId="+blogId
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
                    state: DETAIL_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: DETAIL_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: DETAIL_STATE,
            payload: e
        })
    });
}
export default getDetail;