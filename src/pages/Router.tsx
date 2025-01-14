import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Auth from './auth';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </>
    );
}

export default Router;
