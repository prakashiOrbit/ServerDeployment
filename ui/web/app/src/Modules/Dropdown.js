import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

export default function CustomSelect({ label, value, onChange, options }) {

    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                fullWidth
                label={label}
                name={label}
                value={value}
                onChange={onChange}
            >
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
