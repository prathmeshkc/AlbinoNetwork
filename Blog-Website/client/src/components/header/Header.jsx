
import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { API } from '../../service/api';
// import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account')
       
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/community'>COMMUNITY</Link>
                <Link to='/account' onClick={async () => {
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