import React from 'react';
import './customCheckbox_aviasales.scss';
// import { ToggleButton } from 'react-bootstrap';
const CheckboxCustom = ({ label = '', checked = false, id, onChange }) => {
    return (
        <div className="checkboxes-list__item">
            <label className="checkboxes-list__label" htmlFor="stops_1">
                <label className="_checkbox__container">
                    <input
                        id={id}
                        onChange={onChange}
                        type="checkbox"
                        className="_checkbox__input"
                        checked={checked}
                    />
                    <span className="_checkbox__checkmark" />
                    <span className="_checkbox__label">{label}</span>
                </label>
            </label>
        </div>
    );
};
export default CheckboxCustom;
