import React, { useState, useRef, useEffect, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function CurrencyInput({
  name,
  prefix,
  onChange,
  thousandSeparator,
  ...rest
}) {
  const { fieldName, defaultValue, registerField, error } = useField(
    name || ''
  );

  const [value, setValue] = useState(defaultValue);
  const ref = useRef();

  useMemo(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.value',
      });
    }
  }, [ref.current, fieldName]); //eslint-disable-line

  return (
    <>
      <NumberFormat
        id={fieldName}
        decimalSeparator=","
        thousandSeparator={thousandSeparator}
        isNumericString
        fixedDecimalScale
        decimalScale={2}
        prefix={prefix}
        ref={ref}
        value={value}
        name={fieldName}
        onValueChange={values => {
          setValue(values.floatValue);
          if (onChange) onChange(values.floatValue);
        }}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

CurrencyInput.defaultProps = {
  prefix: '',
  onChange: null,
  thousandSeparator: '',
  name: null,
};

CurrencyInput.propTypes = {
  name: PropTypes.string,
  prefix: PropTypes.string,
  thousandSeparator: PropTypes.string,
  onChange: PropTypes.func,
};
