import styled from "styled-components";


const getType = (type) => {
    switch(type){
        case 'email' :
            return{
                placeholder: '@gmail.com',
                color: 'black',
                background: 'transparent',
            }
        case 'number' :
            return{
                placeholder: 'Number',
                color: 'black',
                background: 'transparent',
            }
        case 'password' :
            return{
                placeholder: 'Password',
                color: 'black',
                background: 'transparent',
            }
        case 'chackbox' :
            return{
                background: 'transparent',
                color: 'black',
                background: 'transparent',
            }
        default: 
            return{
                placeholder: 'Search...',
                background: 'transparent',
                color: 'black',
            }
    }
}


export const Inp = styled.input`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;


    outline: none;
    border: none;
    text-indent: 15px;
    border: 1px solid grey;

    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : '35px'} ;

    border-radius: ${({br}) => br ? br : '30px'} ;
    margin: ${({m}) => +m  ? m + 'px' : m} ;
    margin-right: ${({mr}) => `${mr}px`} ;
    margin-left: ${({ml}) => `${ml}px`} ;
    margin-top: ${({mt}) => `${mt}px`} ;
    margin-bottom: ${({mb}) => `${mb}px`} ;

    ::placeholder{
        font-size: 15px;
    }
    ${({type}) => getType(type)}
`





