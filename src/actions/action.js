import * as actionTypes from './actionTypes';
const identifiedId = 'aa@aa.com';
const identifiedPw = 'aa';

/**
 * login
 * @param username
 * @param password
 * @returns {Function}
 */
export const login = (id, password) => {
    return (dispatch, getState) => {
        if(id == identifiedId && password == identifiedPw){
            //passed login
            dispatch({
                type: 'LOGIN',//actionTypes.LOGIN //'LOGIN',
                username:id,
                password:password
            });
        }
        else{
            //failed

        }
    };
};

/**
 * logout
 * @returns {Function}
 */
export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        });
    };
};

export default bb = () => {

};