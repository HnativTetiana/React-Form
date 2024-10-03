import React from 'react';

import "../styles/SecondPage.css";

const SecondPage = (props) => {
    const { fields, changeFieldsValue, resetFields, pageHandler } = props;

    const submitResult = () => {
        console.log(fields);
        pageHandler(-1);
        resetFields();
    }

    return (
        <div className='page-wrapper'>
            <h1 className='main-title second-page-title'>Basic information about you</h1>
            <div className='decoration'>
                <div className='circle white-circle'>
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5644 0L16.876 0.703622C13.6016 4.05763 10.0754 7.92621 6.80303 11.3097L1.98422 7.25351L1.23507 6.6223L0 8.16408L0.749143 8.79525L6.25636 13.4309L6.93464 14L7.5623 13.3585C11.0377 9.79857 14.8172 5.61968 18.2528 2.10052L18.9412 1.3969L17.5644 0Z" fill="#376FDB" />
                    </svg>
                </div>
                <hr className='line'></hr>
                <div className='circle blue-circle'>
                    2
                </div>
            </div>
            <form onSubmit={submitResult}>
                <div className='work-categories'>
                    <h2 className='work-categories-title'>Categories you work with</h2>
                    <ul className='work-categories-list'>
                        <li>
                            <input
                                type='checkbox'
                                id='economy'
                                name='workCategories'
                                value="economy"
                                onChange={changeFieldsValue}
                                checked={fields.workCategories.includes("economy")}
                            />
                            <label htmlFor='economy'>Economy</label>
                        </li>
                        <li>
                            <input
                                type='checkbox'
                                id='business'
                                name='workCategories'
                                value="business"
                                onChange={changeFieldsValue}
                                checked={fields.workCategories.includes("business")}
                            />
                            <label htmlFor='business'>Business</label>
                        </li>
                        <li>
                            <input
                                type='checkbox'
                                id='trading'
                                name='workCategories'
                                value="trading"
                                onChange={changeFieldsValue}
                                checked={fields.workCategories.includes("trading")}
                            />
                            <label htmlFor='trading'>Trading</label>
                        </li>
                        <li>
                            <input
                                type='checkbox'
                                id='communications'
                                name='workCategories'
                                value="communications"
                                onChange={changeFieldsValue}
                                checked={fields.workCategories.includes("communications")}
                            />
                            <label htmlFor='communications'>Сommunications</label>
                        </li>
                    </ul>
                </div>
                <div className='user-info-container'>
                    <input
                        className='form-field'
                        type='email'
                        placeholder='Email'
                        name="email"
                        value={fields.email}
                        onChange={changeFieldsValue}
                        required
                    />
                    <div>
                        <input
                            className='form-field'
                            type='password'
                            placeholder='Password'
                            minLength="8"
                            pattern=".*[A-Z].*"
                            title="Password must contain at least one uppercase letter"
                            name="password"
                            value={fields.password}
                            onChange={changeFieldsValue}
                            required
                        />
                        <p className='password-message'>The password has to be at least 8 characters long and contain at least one upper case letter.</p>
                    </div>
                </div>
                <div className='buttons second-page-buttons'>
                    <button type='button' className='previous-button' onClick={() => pageHandler(-1)}>
                        <div className='svg-container'>
                            <svg width="7.41" height="12" viewBox="0 0 7.41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="#323232" />
                            </svg>
                        </div>
                        Previous
                    </button>
                    <button type='submit' className='submit-button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SecondPage;