import { OK,ERROR,getApiUrl, MENU_STATE } from '../utils/api'
const getMenus = ()=>dispatch =>{
    fetch(getApiUrl(MENU_STATE),{
        method: 'GET',
        headers: {
            'content-type':'application/json',
        }
    }).then(res=>res.json())
    .then(data =>{
        if(data){
            dispatch({
                    type: OK,
                    state: MENU_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: MENU_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: MENU_STATE,
            payload: e
        })
    });
}
export default getMenus;