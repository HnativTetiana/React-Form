import React from 'react';

import "../styles/SelectRolePage.css";

const SelectRolePage = (props) => (
    <div className='page-wrapper'>
        <h1 className="main-title">Which describes you best?</h1>
        <div className="select-content">
            <div className="role-container homeowner-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 15H19V17H17V15ZM17 11H19V13H17V11ZM17 7H19V9H17V7ZM13.74 7L15 7.84V7H13.74Z" fill="#757575" />
                    <path d="M10 3V4.51L12 5.84V5H21V19H17V21H23V3H10Z" fill="#757575" />
                    <path d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7ZM10 19H13V11.16L8.17 8.09L3 11.38V19H6V13H10V19Z" fill="#757575" />
                </svg>
                <div>
                    <h2>Homeowner</h2>
                    <p>I am a homeowner or interesed in home design.</p>
                </div>
            </div>
            <div className="role-container professional-container">
                <div >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_240)">
                            <path d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM4 9H20V14H15V11H9V14H4V9ZM13 15H11V13H13V15ZM19 19H5V16H9V17H15V16H19V19Z" fill="#376FDB" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_240">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h2>Professional</h2>
                    <p>I offer home improvement services or sell home products.</p>
                </div>
            </div>
            <button className="next-button" onClick={() => props.pageHandler(1)}>
                <div className='next-button-content'>
                    Next
                    <div className='svg-container'>
                        <svg width="7.41" height="12" viewBox="0 0 7.41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.722592 11.0968L5.16037 6.36916L0.442417 1.92108L1.80873 0.468708L7.98905 6.28279L2.17497 12.4631L0.722592 11.0968Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    </div>

)

export default SelectRolePage;