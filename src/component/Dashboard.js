import React, { Component } from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();

        this.state ={
            houses: [],
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(res => {
            console.log('endpoint hit')
            this.setState({
                houses: res.data
            })
        })
    }

    // componentDidUpdate(){
    //     axios.get('/api/houses').then(res => {
    //         console.log('endpoint hit')
    //         this.setState({
    //             houses: res.data
    //         })
    //     })
    // }

    deleteHouse = name =>{
        console.log(name)
        axios.delete(`/api/houses${name}`).then(res => {
            console.log(res.status)
            console.log(res.data)
            
        })
    }

    render() {
        return (
            <div>
                <Link to= "/wizard">
                    <button>ADD NEW PROPERTY</button>
                </Link>
                
               
                {this.state.houses.map((val,i) =>{
                    return <div key={i}>
                        <House
                        propertyName = {val.propertyname}
                        address = {val.address}
                        city = {val.city}
                        state= {val.state}
                        zip= {val.zip}
                        deleteHouse={this.deleteHouse}
                        />
                    </div>
                })
                }
            </div>
        );
    }
}

export default Dashboard;