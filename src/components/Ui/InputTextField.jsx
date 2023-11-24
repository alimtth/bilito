/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {Children} from 'react'
import './ui.css'
import PropTypes from "prop-types";

const sizes = {
  sm: 'flex py-4 text-sm px-1 ',
  md: 'flex py-4 text-sm px-1 ',
  lg: 'flex py-4 text-sm px-1 ',
  xl: 'flex py-4 text-sm px-1 ',
  ssl: 'flex py-3 text-sm px-3 ',
  sll: 'flex py-4 text-sm px-6',
  slx: 'flex py-4 text-sm pl-28',
  xsl: 'flex py-3 text-sm pl-32 ',
}
function InputTextField({
  children,
  className,
  onChange,
  type,
  register,
  value,
  size,
  disabled,
  name,
}) {
  return (
    <div>
      <div className="material-textfield">
        <input
          onChange={onChange}
          value={value}
          className={`${value?.length === 0 ? "input-text-field" : "selected-input-text-field"} ${sizes[size]} ${className}`}
          type={type}
          name={name}
          {...register}
          disabled={disabled}
        />

        <label className="label">{children}</label>
      </div>
    </div>
  )
}
  InputTextField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  name: PropTypes.string
};


export default InputTextField
