
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

            Website: <Link href="https://www.kidshealth.org/" color="inherit" target="_blank"> https://www.kidshealth.org/ </Link>
        
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
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> What are the signs of Albinism?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              People with albinism will have the following symptoms:

             <ol>
                <li>
                   an absence of color in the skin, hair, or eyes
                </li>
                <li>
                    lighter than normal coloring of the skin, hair, or eyes
                </li>
                <li>
                    patches of skin that have an absence of color
                </li>
             </ol>

          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
    );
}

export default Contact;