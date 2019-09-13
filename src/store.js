import {createStore} from 'redux';
const initialState={
     houseName: '',
     houseType:''
    }
    export const UPDATE_NAME='UPDATE_NAME'

function reducer(state=this.state, action ){
    console.log(action)
    switch(action.type){
    case UPDATE_NAME:
        return{
            ...state,
            username: action.payload 
        }
}
}

export default createStore(reducer)