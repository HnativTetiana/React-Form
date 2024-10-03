import React from 'react';

import "../styles/FirstPage.css";

const FirstPage = (props) => {

    const { fields, changeFieldsValue, pageHandler } = props;

    return (
        <div className='page-wrapper'>
            <h1 className='main-title first-page-title'>Basic information about you</h1>
            <div className='decoration'>
                <div className='circle blue-circle'>
                    1
                </div>
                <hr className='line'></hr>
                <div className='circle white-circle'>
                    2
                </div>
            </div>
            <form className='form first-page-form' onSubmit={() => pageHandler(1)}>
                <div className='user-info-container'>
                    <input className='form-field first-name-input'
                        placeholder='First name'
                        name="firstName"
                        value={fields.firstName}
                        onChange={changeFieldsValue}
                        required
                    />
                    <input className='form-field'
                        placeholder='Last name'
                        name="lastName"
                        value={fields.lastName}
                        onChange={changeFieldsValue}
                        required
                    />
                </div>
                <div className='gender-container'>
                    <h2 className='gender-title'>Gender</h2>
                    <ul className='gender-list'>
                        <li>
                            <input type='radio'
                                id='male'
                                name='gender'
                                value="male"
                                onChange={changeFieldsValue}
                                checked={fields.gender === "male"}
                                required
                            />
                            <label htmlFor="male">Male</label>
                        </li>
                        <li>
                            <input type='radio'
                                id='female'
                                name='gender'
                                value="female"
                                onChange={changeFieldsValue}
                                checked={fields.gender === "female"}
                            />
                            <label htmlFor="female">Female</label>
                        </li>
                        <li>
                            <input type='radio'
                                id='secret'
                                name='gender'
                                value="secret"
                                onChange={changeFieldsValue}
                                checked={fields.gender === "secret"}
                            />
                            <label htmlFor="secret">I prefer not to say</label>
                        </li>
                        <li>
                            <input type='radio'
                                id='other'
                                name='gender'
                                value="other"
                                onChange={changeFieldsValue}
                                checked={fields.gender === "other"}
                            />
                            <label htmlFor="other">Other</label>
                            <input
                                className='form-field other-gender-input'
                                name='otherGender'
                                value={fields.otherGender}
                                onChange={changeFieldsValue}
                                disabled={fields.gender !== "other"}
                                required={fields.gender === "other"}
                            />
                        </li>
                    </ul>
                </div>
                <div className='phone-container'>
                    <div className='phone-select-positioning'>
                        <div className='phone-select-container'>
                            <select
                                className='form-field'
                                name='phonePrefix'
                                value={fields.phonePrefix}
                                onChange={changeFieldsValue}
                            >
                                <option value="+1">+1</option>
                                <option value="+2">+2</option>
                                <option value="+3">+3</option>
                                <option value="+4">+4</option>
                                <option value="+5">+5</option>
                            </select>
                        </div>

                    </div>
                    <input className='form-field phone-number-input'
                        name='phoneInput'
                        value={fields.phoneInput}
                        onChange={changeFieldsValue}
                        placeholder='Business phone number'
                        pattern="[0-9]*"
                        title="Only numbers"
                        required
                    />
                </div>
                <div className='buttons'>
                    <button type='button' className='previous-button' onClick={() => pageHandler(-1)}>
                        <div className='svg-container'>
                            <svg width="7.41" height="12" viewBox="0 0 7.41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="#323232" />
                            </svg>
                        </div>
                        Previous
                    </button>
                    <button type='submit' className='continue-button'>Continue</button>
                </div>
            </form>
        </div>
    );
}

export default FirstPage;