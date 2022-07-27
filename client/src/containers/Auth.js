import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from '../components/ErrorAlert/ErrorAlert';

export const Auth = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = () => {
        if (!name.trim() && !surname.trim()) {
            return <ErrorAlert text='Введите данные поля...' />
        } else {
            navigate('/alphabet');
        }
    }

    const handleChangeField = (event) => {
        setName(event.target.value);
        setSurname(event.target.value);
    }

    return (
        <div className='b-auth'>
            <form>
                <div className='b-auth__name'>
                    <input 
                        type='text' 
                        placeholder='Введи свое имя' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='b-auth__surname'>
                    <input 
                        type='text' 
                        placeholder='Введи свою фамилию' 
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className='b-auth__btn'>
                    <button type='submit' onClick={handleSubmitForm}>Начать учиться</button>
                </div>
            </form>
        </div>
    )
}