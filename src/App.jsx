import React, { Component } from "react";
import './App.css';
import Button from './Generic/Btn/App';
import Input from "./Generic/Input/App";

class App extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <div className="Container">
                <div className="Box">
                   <Button 
                    // width="100px" 
                    // height="40px"
                    onclick={this.state.Button}
                    type='primary'
                    bg='blue' 
                    color='red'
                    mt='10'
                    ml='10'
                    >Login</Button>

                   <Button 
                    // width="100px" 
                    // height="40px"
                    type='secondary'
                    bg='blue' 
                    color='blue'
                    mt='10'
                    ml='10'
                    m='auto'

                >Register</Button> 



                    < div colssName="InpBox">
                        <Input
                            type="text"
                            width="150px" 
                            height="40px"  
                            color='blue'
                            br='8px'
                            mt='10'
                            ml='10'
                            m='auto'
                        />
                        <Input
                            type="password"
                            width="150px" 
                            height="40px"  
                            color='blue'
                            br='0'
                            mt='10'
                            ml='10'
                            m='auto'
                        />
                        <Input
                            type="number"
                            width="150px" 
                            height="40px"  
                            color='blue'
                            br='15px'
                            mt='10'
                            ml='10'
                            m='auto'
                        />
                        <Input
                            type="email"
                            width="150px" 
                            height="40px"  
                            color='blue'
                            mt='10'
                            ml='10'
                            br='4px'
                            m='auto'
                        />
                        <Input
                            type="chackbox"
                            width="150px" 
                            height="40px"  
                            color='blue'
                            mt='10'
                            ml='10'
                            m='auto'
                        />
                        
                    </div>
                </div>

                

                
                       
            </div>
        )
    };
}
export default App;