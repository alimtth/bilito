import * as React from 'react'
import {styled} from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import './accordion.css'
import {accordionData} from '@/FakeData/accordionData.js'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
    fontFamily: '!inherit',
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(({theme}) => ({
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  fontFamily: '!inherit',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #EDEDED',
  fontFamily: '!inherit',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div id="container" className="pt-24">
      <h1 className="text-xl font-bold mb-8">سوالات متداول</h1>
      {accordionData.map((e) => {
        return (
          <div key={e.id}>
          <Accordion expanded={expanded === e.id} onChange={handleChange(e.id)}>
            <AccordionSummary
              aria-controls={`${e.id}d-content`}
              id={`${e.id}d-header`}
              >
              <div className={`${expanded === e.id ? 'text-blue-500' : ''}`}>
                <Typography className="font1">{e.title}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font1">{e.description}</Typography>
            </AccordionDetails>
          </Accordion>
              </div>
        )
      })}
    </div>
  )
}
