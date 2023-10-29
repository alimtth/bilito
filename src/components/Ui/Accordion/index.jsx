import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './accordion.css'

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
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #EDEDED',
    fontFamily: '!inherit',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div id='container' className='pt-24'>
            <h1 className='text-xl font-bold mb-8'>سوالات متداول</h1>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <div className={`${expanded === 'panel1' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>در هر پرواز میزان بار مجاز چقدر است؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        بلیط تمام خطوط هوایی دنیا در سایت بیلیتو موجود است، چه پروازهایی که مبدا یا مقصد آنها ایران است
                        و چه پروازهای داخلی دورترین کشورهای دنیا. پروازهای ایرلاین‌هایی مثل لوفت‌هانزا، امارات،
                        قطرایرویز، ترکیش‌ایر، ایرفرانس، کی‌ال‌ام، آئروفلوت، آلیتالیا، اوکراینی، ایرایژیا، پگاسوس و ده‌ها
                        ایرلاین دیگر در بیلیتو قابل تهیه هستند. همچنین بلیط پروازهای خارجیِ شرکت‌های هواپیمایی داخلی
                        مانند ماهان، ایران‌ایر، قشم ایر، آتا و... نیز روی سایت بیلیتو به فروش می‌رسد.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <div className={`${expanded === 'panel2' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>نرخ بلیط هواپیما برای نوزادان و کودکان زیر 12سال چگونه است؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <div className={`${expanded === 'panel3' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <div className={`${expanded === 'panel4' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>آیا پس از خرید بلیط هواپیما امکان تغییر نام یا نام خانوادگی وجود دارد؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <div className={`${expanded === 'panel5' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم امکان انتخاب صندلی مورد نظرمان وجود دارد؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <div className={`${expanded === 'panel6' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>بلیط پرواز چه کشورها ایرلاین‌هایی را می‌توانم‌ در سایت بیلیتو جستجو و خریداری کنم؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    <div className={`${expanded === 'panel7' ? 'text-blue-500' : ''}`}>
                        <Typography className='font1'>چطور تاریخ پرواز را تغییر دهیم؟</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='font1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
