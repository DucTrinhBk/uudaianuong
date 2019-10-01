import { OK,ERROR,SEARCH_STATE,getApiUrl } from '../utils/api'
const getSearch = (textSearch,page)=>dispatch =>{
    var url = SEARCH_STATE+"?search="+textSearch+'&page='+page;
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
                    state: SEARCH_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: SEARCH_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: SEARCH_STATE,
            payload: e
        })
    });
}
export default getSearch;