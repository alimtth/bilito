import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        // marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        margin: '10px',
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        // border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 0 10px 0',
        textAlign: 'center',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            // borderRadius: 4,
            // borderColor: '#80bdff',
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

function DatePickerComponent(props) {
    const daysOption =
        Array.from({ length: 31 })
            .map((_, i) => {
                return {
                    label: i + 1 > 9 ? i + 1 : `0${i + 1}`,
                    value: i + 1,
                }
            })

    // const date = new Date(0,11);
    // const month
    const monthOption = [
        { value: 1, label: 'January' },
        { value: 2, label: 'February' },
        { value: 3, label: 'March' },
        { value: 4, label: 'April' },
        { value: 5, label: 'May' },
        { value: 6, label: 'June' },
        { value: 7, label: 'July' },
        { value: 8, label: 'August' },
        { value: 9, label: 'September' },
        { value: 10, label: 'October' },
        { value: 11, label: 'November' },
        { value: 12, label: 'December' },
    ]
        ;

    return (
        <div className='flex justify-center mt-96'>
            <div className='flex border border-gray-100 rounded'>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    autoWidth={true}
                    input={<BootstrapInput />}
                >
                    {
                        daysOption.map((el) => {
                            return (
                                <MenuItem value={el.value}>
                                    {el.label}
                                </MenuItem>
                            )

                        })}
                </Select>
                <div className='w-px h-{100%} bg-gray-100' />
                <Select
                    autoWidth={true}
                    id="demo-customized-select"
                    input={<BootstrapInput />}
                >
                    {
                        monthOption.map((el) => {
                            return (
                                <MenuItem value={el.value}>
                                    {el.label}
                                </MenuItem>
                            )

                        })}
                </Select>
                <div className='w-px h-{100%} bg-gray-100' />
                <BootstrapInput id="demo-customized-textbox" placeholder='سال' />
            </div>
            {/*<div className='flex border-2 rounded gap-1 border-gray-100 justify-between pr-3'>*/}
            {/*    <input className='rounded-s-2xl focus:outline-none pl-1 '/>*/}
            {/*    <Select*/}
            {/*//             placeholder={'ماه'}*/}
            {/*//             classNames={{*/}
            {/*//                 control: () => "!border-none rounded-2xl"*/}
            {/*//             }}*/}
            {/*//             options={options}*/}
            {/*//         />*/}
            {/*//         <Select*/}
            {/*//             placeholder={'روز'}*/}
            {/*//             classNames={{*/}
            {/*//                 control: () => "!border-none rounded-2xl"*/}
            {/*//             }}*/}
            {/*//             options={options}*/}
            {/*//         />*/}
            {/*//         <TextField id="outlined-basic" label="عنوان" variant="outlined" />*/}
            {/*//*/}
            {/*//     </div>*/}
        </div>

    );
}

export default DatePickerComponent;