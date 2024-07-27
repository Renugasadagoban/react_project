

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Questions-Answer-Container.css';


function QAContainer(props: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="qa-section" >
            <div className="qa-header">
                <div className='question'>{props.question}</div>
                <div className='arrow'
                    onClick={toggleExpansion} >{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</div>
            </div>
            <div style={{
                paddingLeft: '40px',
                paddingTop: '5px',
                color: 'black',
                paddingBottom: '20px',
                textAlign: 'left',
                visibility: isExpanded ? 'hidden' : 'visible',
                height: isExpanded ? 0 : 'auto'
            }}>
                <span> {props.answer}</span>
            </div>
        </div >
    );
}

export default QAContainer;
