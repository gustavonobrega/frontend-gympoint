import React, { useEffect, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import MaskedTextInput from 'react-text-mask';

import 'react-datepicker/dist/react-datepicker.css';

export default function MyDatePicker({ name, onChange, disabled, ...rest }) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useMemo(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        defaultValue,
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); //eslint-disable-line

  function handleStartDate(newDate) {
    setValue(newDate);
  }

  return (
    <>
      <DatePicker
        id={fieldName}
        name={fieldName}
        ref={ref}
        selected={value}
        onChange={newDate => {
          handleStartDate(newDate);
          if (onChange) onChange(newDate);
        }}
        dateFormat="dd/MM/yyyy"
        disabled={!!disabled}
        customInput={
          <MaskedTextInput
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        }
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
MyDatePicker.defaultProps = {
  disabled: false,
  name: null,
  onChange: null,
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
