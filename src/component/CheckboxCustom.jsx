import React from 'react';
import './customCheckbox_aviasales.scss';

const CheckboxCustom = ({ label = '', checked = false }) => {
    return (
        <div class="checkboxes-list__item">
            <label class="checkboxes-list__label" for="stops_1">
                <label className="_checkbox__container">
                    <input
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
