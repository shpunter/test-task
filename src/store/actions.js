import { SAVE_SEARCH, REMOVE, MODAL_VIEW, MODAL_EDIT, MODAL_HIDE, SAVE_USER, SAVE_USERS_FROM_RESPONSE } from './types';

export const removeUser = id => ({
    type: REMOVE,
    userId: id
});

export const modalView = id => ({
    type: MODAL_VIEW,
    userId: id
});

export const modalEdit = id => ({
    type: MODAL_EDIT,
    userId: id
});

export const modalHide = () => ({
    type: MODAL_HIDE
});

export const saveUser = ({ userId, userDepartment, userName, userActive }) => ({
    type: SAVE_USER,
    user: { userId, userDepartment, userName, userActive }
});

export const saveUsersFromResponse = ({ users }, pagesLength) => ({
    type: SAVE_USERS_FROM_RESPONSE,
    users: users,
    pagesLength: pagesLength
});

export const saveSearch = search => ({
    type: SAVE_SEARCH,
    search: search
})