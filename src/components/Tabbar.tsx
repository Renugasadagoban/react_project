import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginValidation, Query } from '../utils/query';


export const Tabbar = () => {
    const [activeTab, setActiveTab] = useState('My Queries');
    const [queryList, setQueryList] = useState<Query[]>([])
    const [loginCheck, setLoginCheck] = useState<LoginValidation>();


    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const navigate = useNavigate();

    const handleQueryClick = () => {
        navigate('/query');
    }

    useEffect(() => {
        try {
            const storedData = JSON.parse(localStorage.getItem('queryData') ?? '[]');
            setQueryList(storedData);
            const loginData = JSON.parse(localStorage.getItem('login') ?? '');
            setLoginCheck(loginData);
        } catch (error) {
            console.error('Failed to fetch data from local storage:', error);
            setQueryList([]);
            setLoginCheck({
                email: '',
                password: '',
                isLoggedIn: false,
            });
        }
    }, []);

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                <button style={{ alignItems: 'center', border: ' 1px soild red' }} onClick={() => handleTabClick('My Queries')} className={activeTab === 'My Queries' ? 'active' : ''}>My Queries</button>
                <button onClick={() => handleTabClick('FAQ')} className={activeTab === 'FAQ' ? 'active' : ''}>FAQ</button>
                {/* <button onClick={() => handleTabClick('Tab3')} className={activeTab === 'Tab3' ? 'active' : ''}>Tab 3</button>
      */}
            </div>
            <div className="tab-content">
                {activeTab === 'My Queries' && queryList.length > 0 && <div>
                    {queryList.map((item, index) => (
                        item.loginId === loginCheck?.email && (
                            <div className='query-list' key={index} style={{ color: 'red', margin: '10px' }}>
                                <p ><span style={{ fontWeight: 'bold' }}>Query Title:</span> {item.queryTitle}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Query Description:</span> {item.queryDesc}</p>
                            </div>)
                    ))
                    }
                </div>
                }
                {activeTab === 'FAQ' && queryList.length > 0 && <div>
                    {queryList.map((item, index) => (
                        (
                            <div className='query-list' key={index} style={{ color: 'red', margin: '10px' }}>
                                <p ><span style={{ fontWeight: 'bold' }}>Query Title:</span> {item.queryTitle}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Query Description:</span> {item.queryDesc}</p>
                            </div>)
                    ))
                    }
                </div>
                }
                {activeTab === 'My Queries' && <button
                    onClick={() => handleQueryClick()}
                    style={{ alignItems: 'center', backgroundColor: 'brown' }}> Ask a Query</button>}
                {activeTab === 'FAQ' && <div>Content for Tab 2</div>}
            </div>
        </div>
    );
};
