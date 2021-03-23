import React, { Component } from 'react';
import './Joinus.css';

export  class Joinus extends Component {
    constructor(){
        super();
        this.state={              
                HotelName:"",
                FullName:"",
                ContactNumber:"",
                EmailId:"",
                Address:"",
                Landmark:"",
                AuthSign: [
                    {
                        DesignantorName:"",
                        ContactNo:"",
                        Address:""
                    }
                 ]
                }
        
    }

    handleFormSubmit =( event) =>{
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



    render(){
        var childs =[];
        for (var i = 0; i < this.state.AuthSign.length; i++) {
            childs.push(
                <div style={{ paddingTop: "3rem" }}>
                    <i class="far fa-times-circle" style={{ fontSize: "2rem", float: 'right' }} onClick={this.handleRemoveFieldCount(i)}></i>
                    <div>
                        <div style={{ display: "flex" }}>
                            <div>
                                Name
                            </div>
                            <input 
                                value={this.state.AuthSign[i].name} 
                                index={i} name="Name" 
                                onChange={this.assignAuthSignDetails(i)}/>                            
                                {console.log(this.state)}
                            <div>
                                Contact No.
                            </div>
                            <input 
                                value={this.state.AuthSign[i].ContactNo} 
                                name="ContactNo" 
                                onChange={this.assignAuthSignDetails(i)} />
                            </div>
                            <input
                                type="text-Area"
                                value={this.state.AuthSign[i].Address}
                                name="Address"
                                placeholder="Address"
                                onChange={this.assignAuthSignDetails(i)}
                            />
                        <div style={{ padding: "1.2rem" }}>
                            <div>
                                Upload Signature:
                            </div>
                            <div>
                                <input
                                    style={{
                                        backgroundColor: "orange",
                                        width: "80%"
                                    }}
                                    type="file"
                                />
                            </div>
                            <div>
                                Upload File:
                            </div>
                            <div>
                                <input
                                    style={{
                                        backgroundColor: "orange",
                                        width: "80%"
                                    }}
                                    type='file'
                                />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            textAlign: "right",
                            padding: "1.2rem"
                        }}
                    >
                    </div>
                </div>
            );
        }
        return (
            <div className='joinus-container'>
                <div> Hotel Name</div>
                <input type='text' onChange={this.handleFormSubmit} value={this.state.HotelName} name="HotelName"/>
                <div>Full Name</div>
                <input type='text' onChange={this.handleFormSubmit} value={this.state.FullName} name='FullName'/>
                <div>Contact Number</div>
                <input type='number' onChange={this.handleFormSubmit} value={this.state.ContactNumber} name='ContactNumber'/>               
                 <div>Email-id</div>
                 {console.log(this.state)}
                <input type="mail" onChange={this.handleFormSubmit} value={this.state.EmailId} name='EmailId'/>
                <div>Address</div>
                <input type="text-area" placeholder="Address" style={{height:"6.5rem"}}  onChange={this.handleFormSubmit} value={this.state.Address} name='Address'/>
                <div>Landmark</div>
                <input type="text"  onChange={this.handleFormSubmit} value={this.state.Landmark} name='Landmark'/>                
                <h1 style={{ textAlign: "center" }}>
                        Authorized Designatory:
                            </h1>
                    {childs}
                    <button  onClick={this.handleAddFieldCount}>+Add</button>
            </div>
        )
    }
}
