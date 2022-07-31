import styled from "styled-components";

const getType = (type) => {
    switch(type){
        case 'primary' :
            return{
                background: 'green',
                color: 'white',
                border: "none"
            }
        case 'secondary' :
            return{
                background: 'yellow',
                color: 'white',
                border: "none",
            }
        default: 
            return{
                border: "1px solid grey",
                background: '#F8F9FA',
                color: 'black',
            }
    }
}


export const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;

    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : '44px'} ;
    /* background-color: ${({bg}) => bg ? bg : 'red'} ; */
    color: ${({color}) => color ? color : 'black'} ;

    margin: ${({m}) => +m  ? m + 'px' : m} ;
    margin-right: ${({mr}) => `${mr}px`} ;
    margin-left: ${({ml}) => `${ml}px`} ;
    margin-top: ${({mt}) => `${mt}px`} ;
    margin-bottom: ${({mb}) => `${mb}px`} ;

    :active{
        transform: scale(0.98);
        opacity: 0.8;
    }

    ${({type}) => getType(type)}
`