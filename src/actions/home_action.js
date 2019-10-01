import { OK,ERROR,HOME_STATE,getApiUrl } from '../utils/api'
const getData = ()=>dispatch =>{
    fetch(getApiUrl('Home'),{
        method: 'GET',
        headers: {
            'content-type':'application/json',
        }
    })
    .then(res=>res.json())
    
    .then(data =>{

        if(data){
            dispatch({
                    type: OK,
                    state: HOME_STATE,
                    payload: data
                }
            )
        }else{
            dispatch({
                type: ERROR,
                state: HOME_STATE,
                payload: "Have some error"
            })
        }
    }).catch(function(e) {
        dispatch({
            type: ERROR,
            state: HOME_STATE,
            payload: e
        })

    });
}
export default getData;