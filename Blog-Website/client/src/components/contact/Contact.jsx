
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://storage.googleapis.com/afs-prod/media/media:27d069dfb7804bd89a7773719f0cfcaf/1000.jpeg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Alibino Problems are REAL !!!!</Typography>    
                <Text variant="h5">
                    Albinism problems remain unspoken. While discussing the problems with
                    loved ones always helps, contacting for help to the right experts
                    can help mitigate some pain. The following organizations work hard to make
                    life for Albino's better everyday.
                    <ul>
                        <li>
                            The National Organization for Albinism and Hypopigmentation (NOAH) <br></br>
                            Email:  <Link href="info@albinism.org" color="inherit" target="_blank"> info@albinism.org </Link>
                        </li>
                        <li>
                             The Albino Foundation <br></br>
                            Email:  <Link href="info@albinism.org" color="inherit" target="_blank"> info@albinism.org </Link>
                        </li>
                    </ul>
                    
                   
                       
                    or send me an Email 
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;