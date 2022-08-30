import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Alphabet } from '../containers/Alphabet/Alphabet';
import { Auth } from '../containers/Auth/Auth';
import { Cartoons } from '../containers/Cartoons/Cartoons';
import { Draw } from '../containers/Draw/Draw';
import { Litreature } from '../containers/Litreature/Litreature';
import { Math } from '../containers/Math/Math';
import { Music } from '../containers/Music/Music';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/alphabet' element={<Alphabet />} />
            <Route path='/litreature' element={<Litreature />} />
            <Route path='/cartoons' element={<Cartoons />} />
            <Route path='/draw' element={<Draw />} />
            <Route path='/math' element={<Math />} />
            <Route path='/music' element={<Music />} />
        </Routes>
    )
};