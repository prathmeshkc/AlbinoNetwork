
import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { API } from '../../service/api';
import React, {useState} from "react";
// import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
    :hover {
		color: #ed1212;
		cursor: pointer;
	}
`;



const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
    :hover {
		color: #ed1212;
		cursor: pointer;
	}
`

function MouseOver(event) {
    event.target.style.background = '#FFE4C4';
  }
  function MouseOut(event){
    event.target.style.background="";
  }





const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account')
       
    return (
        <Component>
            <Container>
                <Link to='/' onMouseOver={MouseOver} onMouseOut={MouseOut}>HOME</Link>
                <Link to='/about' onMouseOver={MouseOver} onMouseOut={MouseOut}>ABOUT</Link>
                <Link to='/contact' onMouseOver={MouseOver} onMouseOut={MouseOut}>CONTACT</Link>
                <Link to='/community' onMouseOver={MouseOver} onMouseOut={MouseOut}>COMMUNITY</Link>
                <Link to='/account' onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={async () => {
                    const refreshToken = sessionStorage.getItem('refreshToken');

                    await API.userLogout({ token: refreshToken.split(' ')[1] });

                    sessionStorage.removeItem('accessToken');
                    sessionStorage.removeItem('refreshToken');
                }}>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;