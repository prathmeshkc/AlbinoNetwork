
import { Box, styled, Typography, Link, Grid } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import "./styles.css";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                            Albinism – Health For Kids  <br></br>
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

            <Accordion>
            <AccordionSummary
            style = {{backgroundColor: "#FBEEE5"}}
             expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> The National Organization for Albinism and Hypopigmentation (NOAH)</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The National Organization for Albinism and Hypopigmentation is a non-profit organization that 
            assists people who have albinism. NOAH was created in 1982 and is based in East Hampstead, 
            New Hampshire. NOAH is operated by volunteers. It is funded primarily by member dues and 
            contributions.
            <p>
                Website: <Link href="https://www.albinism.org/" color="inherit" target="_blank"> https://www.albinism.org/ </Link>
            </p>
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
         style = {{backgroundColor: "#FBEEE5",marginTop:20}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> Albinism – Kids Health For Kids</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Health for kids is an online portal providing guidance on various kids related issues,
            including Albinism. Albino health is a paramount problem amongst kids that needs
            expert guidance.
            <p>
            Website: <Link href="https://www.kidshealth.org/" color="inherit" target="_blank"> https://www.kidshealth.org/ </Link>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         style = {{backgroundColor: "#FBEEE5",marginTop:20}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> Vision for Tomorrow </strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              The Vision for Tomorrow Foundation seeks to empower people with low vision to
               have the confidence and ability to achieve their dreams. We envision a world 
               where vision problems may be cured – or even prevented. That is why funding 
               research is at the heart of our foundation. Research makes it possible to 
               better understand and more effectively treat ocular complications common in 
               albinism and aniridia, two conditions causing low vision from birth. We also 
               know that we are stronger together and offer support and information to families 
               affected by albinism and aniridia.
                <p>
               Website: <Link href="https://visionfortomorrow.org/albinism/" color="inherit" target="_blank"> https://visionfortomorrow.org/albinism/ </Link>
                </p>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         style = {{backgroundColor: "#FBEEE5",marginTop:20}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> Positive Exposure </strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              POSITIVE EXPOSURE promotes a more inclusive world through award-winning photography
              , films, exhibitions, lectures and educational programs. For 25 years, 
              POSITIVE EXPOSURE has collaborated globally with nonprofit organizations, 
              hospitals, medical schools, educational institutions and advocacy groups to 
              promote a more equitable and compassionate world where individuals and communities 
              at risk of stigma and exclusion are understood, embraced and celebrated. They have
              published a lot of content on Albinism as well. Its a great measure to spread 
              positive awareness.
                <p>
                     Website: <Link href="https://positiveexposure.org/" color="inherit" target="_blank"> https://positiveexposure.org/ </Link>
                </p>

          </Typography>
        </AccordionDetails>
      </Accordion>
       <br></br>
      <br></br>
        </Box>
    );
}

export default Contact;