import React, { Component } from "react";
import PropType from "prop-types";

class ContactCard extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>mobile: {this.props.mobile}</li>
                    <li>work: {this.props.work}</li>
                    <li>email: {this.props.email}</li>
                </ul>
            </div>
        );
    }
}

ContactCard.propType = {
    name: PropType.string.isRequired,
    mobile: PropType.string.isRequired,
    work: PropType.string,
    email: PropType.string.isRequired, 
};
export default ContactCard;