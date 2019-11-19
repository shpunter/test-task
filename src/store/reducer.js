import { SAVE_SEARCH, REMOVE, MODAL_VIEW, MODAL_HIDE, MODAL_EDIT, SAVE_USER, SAVE_USERS_FROM_RESPONSE } from './types';

export const initialState = {
    users: [],
    search: '',
    currentPage: 1,
    pagesLength: 1,
    smallModal: {
        show: false,
        edit: false,
        user: {
            empId: '',
            empName: '',
            empActive: false,
            empDepartment: ''
        }
    }
};

const reducer = (state, action) => {
    switch (action.type){
        case REMOVE:
            return {
                ...state,
                users: state.users.filter(user => user.empId !== action.userId) 
            };
        case MODAL_VIEW:
            return {
                ...state,
                smallModal: {
                    ...state.showModal,
                    show: true,
                    user: { ...state.users.find(user => user.empId === action.userId) }
                }
            };
        case MODAL_EDIT:
                return {
                    ...state,
                    smallModal: {
                        ...state.showModal,
                        show: true,
                        edit: true,
                        user: { ...state.users.find(user => user.empId === action.userId) }
                    }
                };
        case MODAL_HIDE:
            return {
                ...state,
                smallModal: {
                    ...state.smallModal,
                    show: false
                }
            };
        case SAVE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.empId === action.user.userId){
                        user.empDepartment = action.user.userDepartment;
                        user.empName = action.user.userName;
                        user.empActive = action.user.userActive;
                    }

                    return user;
                })
            };
        case SAVE_USERS_FROM_RESPONSE:
            return {
                ...state,
                users: [...action.users],
                pagesLength: +action.pagesLength
            };
        case SAVE_SEARCH: 
            return {
                ...state,
                search: action.search,
                currentPage: 1,
            }
        default:
            throw new Error('This case never should not be triggered') 
    }
};

export default reducer;
