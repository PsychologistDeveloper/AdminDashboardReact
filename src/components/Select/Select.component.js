import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

export const Select = (props) => {
  const {
    id,
    label,
    value,
    onChange,
    children,
  } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{ label }</InputLabel>
      <MuiSelect
        labelId={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        { children }
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
