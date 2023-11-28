import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Context = () => {
    const context = useContext(AuthContext)
    return context
};


export default Context;