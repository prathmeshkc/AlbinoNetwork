
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    // background: url(istockphoto-1283712207-612x612.jpg) center/100% ;
    background: url(istockphoto-1283712207-612x612.jpg) center/100% ;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // padding: 4em;
    
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    // background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>ALBINO NETWORK</Heading>
            <SubHeading>Let's unite the community</SubHeading>
        </Image>
    )
}

export default Banner;