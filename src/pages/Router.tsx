import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Auth from './auth';
import Dashboard from './dashboard';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </>
    );
}

export default Router;
