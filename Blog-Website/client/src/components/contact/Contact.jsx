
import { Box, styled, Typography, Link, Grid } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import "./styles.css";

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
    color: #000000;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
            <div class="three">
          <h1>Our Community Members</h1>
        </div>
                <Text variant="h5">
                    Albinism problems remain unspoken. While discussing the problems with
                    loved ones always helps, contacting for help to the right experts
                    can help mitigate some pain. The following organizations work hard to make
                    life for Albino's better everyday.
                    <ul>
                        <div class="spacing">
                        <li>
                            The National Organization for Albinism and Hypopigmentation (NOAH) <br></br>
                            Website: <Link href="https://www.albinism.org/" color="inherit" target="_blank"> https://www.albinism.org/ </Link>
                        </li>
                        </div>
                        <div class="spacing">
                        <li>
                            Albinism – Kids Health For Kids  <br></br>
                            Website: <Link href="https://www.kidshealth.org/" color="inherit" target="_blank"> https://www.kidshealth.org/ </Link>
                        </li>
                        </div>
                        <div class="spacing">
                        <li>
                             Vision for Tomorrow  <br></br>
                            Website: <Link href="https://visionfortomorrow.org/albinism/" color="inherit" target="_blank"> https://visionfortomorrow.org/albinism/ </Link>
                        </li>
                        </div>
                        <div class="spacing">
                        <li>
                             Positive Exposure  <br></br>
                            Website: <Link href="https://positiveexposure.org/" color="inherit" target="_blank"> https://positiveexposure.org/ </Link>
                        </li>
                        </div>
                    </ul>
                            
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;