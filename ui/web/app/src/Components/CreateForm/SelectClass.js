import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

export default function SelectClass(props) {

    return (
        <>
            {
                props.inputDetails != undefined ? (
                    <FormControl fullWidth >
                        <InputLabel>{props.formDetails.label}</InputLabel>
                        <Select
                            required
                            fullWidth
                            label={props.formDetails.id}
                            variant='outlined'
                            type="select"
                            name={props.formDetails.id}
                            onChange={(e) => props.onChange(e)}
                            value={props.inputDetails[props.formDetails.id]}
                            InputProps={{
                                readOnly: props.editFlag === 'edit' ? props.formDetails.disabled : props.editFlag === 'view' ? true : false
                            }}

                        >
                            <MenuItem
                                onChange={(e) => props.onChange(e)}
                                value={props.inputDetails[props.formDetails.id]}

                            >
                                {/* <em>None</em> */}
                            </MenuItem>
                            {
                                [
                                    "Kerala", "Tamilnadu", "Karnataka"
                                ].map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item}>
                                            {item}
                                        </MenuItem>
                                    )
                                })
                            }

                        </Select>
                    </FormControl>
                ) : (
                    <></>
                )
            }

        </>
    )
}
