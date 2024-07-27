// src/components/GridContainer.js
import { bodyDesc, bodyHeader, calculaterList, frequentQuestion } from '../../utils/const';
import QAContainer from '../QA-Container/Questions-Answer-Container';
import './Calculater-Card.css';


const GridContainer = () => {
    
    return (
        <div className='body-container'>
            <h2>{bodyHeader}</h2>
            <p className='pStyle'>{bodyDesc}</p>
            <div className="grid-container">
                {calculaterList.map(item => (
                    <div key={item.id} className='grid-item '>
                        <img src={item.image} className="grid-item-image" />
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>
            <h3>Frequently ask questions</h3>
            <div className='question container'>
                {frequentQuestion.map((qa) => (
                    <QAContainer question={qa.question} answer={qa.desc} />
                ))}
            </div>
        </div>
    );
};

export default GridContainer;
