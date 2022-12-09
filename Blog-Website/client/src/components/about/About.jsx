import { Box, styled, Typography, Link } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./styles.css"

const Banner = styled(Box)`
    background-image: url(https://cdn.mos.cms.futurecdn.net/WKsdDcbVSEWL6zaQjB6e9L-1200-80.jpg);
    width: 100%;
    height: 70vh;
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
    // font-family: "Montserrat";
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <div class="three">
                  <h1>Albinism from our Eyes !</h1>
                </div>
                <Text variant="h5">Albinism is a skin disorder that's been neglected from
                the society since ages. Our goal is to spread <storng>Awareness</storng> and 
                create a platform which could act as a <storng>congenial atmosphere</storng> for all Albino's
                to connect <br />
                
                </Text>
                <Text variant="h5">
                    Let's understand Albinism in a little detail
                </Text>
            </Wrapper>

             <Accordion>
            <AccordionSummary
            style = {{backgroundColor: "#FBEEE5"}}
             expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong> What is Albinism?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Albinism </strong>typically refers to oculocutaneous (ok-u-low-ku-TAY-nee-us) albinism
                        (OCA) — a group of inherited disorders where there is little or no production of 
                        the pigment melanin. The type and amount of melanin your body produces determines the 
                        color of your skin, hair and eyes. Melanin also plays a role in the development of optic 
                        nerves, so people with albinism have vision problems.
            <p>Signs of albinism are usually apparent in a person's skin, hair and eye color, but sometimes
                        differences are slight.
                        People with albinism are also sensitive to the effects of the sun, so they're at increased risk
                        of developing skin
                        cancer. </p>

                    <p>Although there's no cure for albinism, people with the disorder can take steps to protect their
                        skin and eyes and
                        maximize their vision. </p>
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
          <Typography style = {{color: "#2f2418", fontSize: 18}}><strong>What are the types of Albinism?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             The 2 main types of albinism are:
             <ul>
                <li>
                    <h3> Oculocutaneous Albinism (OCA)</h3>
                    The most common type, affecting the skin, hair and eyes.
                </li>
                <li>
                    <h3> Ocular Albinism (OA)</h3>
                    A rarer type that mainly affects the eyes.
                </li>
             </ul>
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
                   An absence of color in the skin, hair, or eyes
                </li>
                <li>
                    Lighter than normal coloring of the skin, hair, or eyes
                </li>
                <li>
                    Patches of skin that have an absence of color
                </li>
             </ol>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <br></br>
        </Box>

       
    );
}

export default About;


