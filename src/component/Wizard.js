import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
        this.addHouse = this.addHouse.bind(this);
    }

    handleChange = e => { this.setState({ [e.target.name]: e.target.value }); }




    addHouse() {
        axios.post('/api/house', {
            propertyname: this.state.propertyname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        }).then(res => {
            this.setState({
                propertyname: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
            })

        })
    }





    render() {
        return (
            <div>
                <div>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </div>

                <div>
                    PropertyName
                <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.propertyname}
                    ></input>
                </div>

                <div>
                    Address
                <input
                        type="text"
                        name="address"
                        onChange={this.handleChange}
                        value={this.state.address}
                    ></input>
                </div>

                <div>
                    City
                <input
                        type="text"
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                    ></input>
                </div>

                <div>
                    State
                <input
                        type="text"
                        name="state"
                        onChange={this.handleChange}
                        value={this.state.state}
                    ></input>
                </div>

                <div>
                    Zip
                <input
                        type="text"
                        name="zipcode"
                        onChange={this.handleChange}
                        value={this.state.zip}
                    ></input>
                </div>

                <button onClick={this.addHouse}>Complete</button>

            </div>
        );
    }
}

export default Wizard;