import React from 'react';
import {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from './userSlice';
UserFeature.propTypes = {
    
};

function UserFeature(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const inputRef = useRef("");
    const handleLoginClick = () => {
        if(inputRef.current.value!==""){

            const action = login(inputRef.current.value);
            dispatch(action);
        }
    }

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    }
    if(user!=="") {
        return (
            <div>
                User Feature
                <br></br>
                Wellcome , {user}
                <div>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        );
    }
    return (
        <div>
            User Feature
            <br></br>
            <input ref={inputRef} type="text" id="message" name="message" />
            <div>
                <button onClick={handleLoginClick}>Login</button>
            </div>
        </div>
    );
    
}

export default UserFeature;