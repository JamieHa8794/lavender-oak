import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {faker} from '@faker-js/faker'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MoreInfo = () =>{

    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className="main-box">
            <div className="moreinfo-container">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Product Description
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {faker.lorem.paragraphs(2)}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        How to Care
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {faker.lorem.paragraphs(2)}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Reviews
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                        <Typography>
                            {faker.lorem.paragraphs(2)}
                        </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}




export default connect()(MoreInfo)