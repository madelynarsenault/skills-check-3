import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import store, {UPDATE_NAME} from "../store"
import Axios from 'axios';


class Wizard extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            address: '',
            city: '',
            state:'',
            zip: 0
        } 
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
        let action ={
            type: UPDATE_NAME,
            payload: e.target.value
        }
        store.dispatch(action)
        console.log(store.getState())
    }
    componentDidMount(){
        Axios.get('/name')
        .then(response => {
            this.setState({name: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }




    render(){
    return (
        <div>
            <button>cancel</button>
        </div>
    )
}}


export default Wizard;