import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./accordionItem.css";


export default function SimpleAccordion({task}) {

  let date;
  if(task.changed){
    date = "edited:"+ task.creationDate;
  } else{
    date = "created:"+ task.creationDate;
  }
  return (
    <div>
      <Accordion
      disableGutters
      elevation={0}
      sx={{
          '&:before': {
              display: 'none',
          }
      }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>{task.taskLabel}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>{task.description}</p>
          <p>{date}</p>
          
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}