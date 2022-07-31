import React, { Component } from "react";
import { Btn } from "./styled";

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <Btn
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                bg={this.state.bg} 
                color={this.state.color} 
                mr={this.state.mr} 
                ml={this.state.ml} 
                mt={this.state.mt} 
                mb={this.state.mb} 
                m={this.state.m} 
            > 
                {this.state.children}
            </Btn>
        )
    };
}
export default Button;