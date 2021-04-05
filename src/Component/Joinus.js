import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Joinus.css';

export class Joinus extends Component {
    constructor() {
        super();
        this.state = {
            HotelName: "",
            FullName: "",
            ContactNumber: "",
            EmailId: "",
            Address: "",
            Landmark: "",
            AuthSign: [
                {
                    DesignantorName: "",
                    ContactNo: "",
                    Address: ""
                }
            ]
        }

    }

    handleFormSubmit = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleAddFieldCount = () => {
        const AuthSign = this.state.AuthSign;
        AuthSign.push({
            DesignatorName: "",
            ContactNo: "",
            Address: ""
        });
        this.setState({
            AuthSign: AuthSign
        });
    }

    handleRemoveFieldCount = (index) => (event) => {
        var AuthSign = this.state.AuthSign;
        AuthSign.splice(index, 1);
        console.log(AuthSign);
        this.setState({
            AuthSign: AuthSign
        })
    }

    assignAuthSignDetails = (index) => (event) => {
        const newAuthSign = this.state.AuthSign.map((auth, idx) => {
            if (idx !== index) {
                return auth;
            } else {
                return { ...auth, [event.target.name]: event.target.value };
            }
        })
        this.setState({
            AuthSign: newAuthSign
        });
        console.log(this.state);
    };

    render() {
        var childs = [];
        for (var i = 0; i < this.state.AuthSign.length; i++) {
            childs.push(
                <div style={{ padding: "1rem" }}>
                    <div className="child-container">
                 <h2 style={{color:"black",fontSize:"1.25em"}}>
                        Authorized Designatory:
                    </h2>
                        <div >
                        <i class="far fa-times-circle"
                            onClick={this.handleRemoveFieldCount(i)}
                            style={{top:"2rem",right:"16px",position:"absolute",fontSize:"2rem"}}
                        >  
                        </i>
                        </div>                                
                            <div>
                                Name
                            </div>
                            <input
                                value={this.state.AuthSign[i].name}
                                index={i} name="Name"
                                onChange={this.assignAuthSignDetails(i)} />
                            {console.log(this.state)}
                            <div>
                                Contact No.
                            </div>
                            <input
                                value={this.state.AuthSign[i].ContactNo}
                                name="ContactNo"
                                onChange={this.assignAuthSignDetails(i)} />
                        
                            <div>
                            Address
                        </div>
                        <input
                            type="text-Area"
                            value={this.state.AuthSign[i].Address}
                            name="Address"
                            placeholder="Address"
                            style={{ height: "6.5rem" }}
                            onChange={this.assignAuthSignDetails(i)}
                        />
                        <div>
                            <div style={{padding:"1rem"}}>
                                Upload Signature:
                            </div>
                            <div>
                                <input
                                    type="file"
                                />
                            </div>
                            <div style={{padding:"0.5rem"}}>
                                Upload File:
                            </div>
                            <div>
                                <input
                                    type='file'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
          <div >
                <div className='joinus-container'>
                    <div> Hotel Name</div>
                    <input type='text' onChange={this.handleFormSubmit} value={this.state.HotelName} name="HotelName" />
                    <div>Full Name</div>
                    <input type='text' onChange={this.handleFormSubmit} value={this.state.FullName} name='FullName' />
                    <div>Contact Number</div>
                    <input type='number' onChange={this.handleFormSubmit} value={this.state.ContactNumber} name='ContactNumber' />
                    <div>Email-id</div>
                    {console.log(this.state)}
                    <input type="mail" onChange={this.handleFormSubmit} value={this.state.EmailId} name='EmailId' />
                    <div>Address</div>
                    <input type="text-area" placeholder="Address" style={{ height: "6.5rem" }} onChange={this.handleFormSubmit} value={this.state.Address} name='Address' />
                    <div>Landmark</div>
                    <input type="text" onChange={this.handleFormSubmit} value={this.state.Landmark} name='Landmark' />
                    <p style={{ paddingTop: "2" }}>
                        To add info of Authorized designatory click on add.
                </p>
                    <button onClick={this.handleAddFieldCount}>+Add</button>
                </div>
                <div className='child-holder'>
                    {childs}
                </div>
            </div>
        )
    }
}
