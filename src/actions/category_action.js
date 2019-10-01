import { OK,ERROR,CATEGORY_STATE,getApiUrl } from '../utils/api'
const getData = (categoryId,page,isMobile)=>dispatch =>{
    var url = "Category?categoryId="+categoryId+(page?"&page="+page+(isMobile?"&isMobile="+isMobile:''):'');
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
                    state: CATEGORY_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: CATEGORY_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: CATEGORY_STATE,
            payload: e
        })
    });
}
export default getData;