import React, { Component } from "react";
import { Inp } from './styled'

class Input extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <Inp   
                type={this.state.type}
                br={this.state.br}
                pl={this.state.pl}
                width={this.state.width}
                height={this.state.height}
                bg={this.state.bg} 
                mr={this.state.mr} 
                ml={this.state.ml} 
                mt={this.state.mt} 
                mb={this.state.mb} 
                m={this.state.m}

            >
                {this.state.children}
            </Inp>
            
        )
    }
}
export default Input;