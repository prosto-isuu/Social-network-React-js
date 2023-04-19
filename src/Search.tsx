import React from 'react'
import { debounce } from 'lodash';

// Создание действия для вызова API
export const fetchUserData = (userId) => async (dispatch) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data = await response.json();
    dispatch({ type: 'FETCH_USER_DATA', payload: data });
};

// Создание функции для задержки вызова действия
export const debouncedFetchUserData = debounce((userId, dispatch) => {
    dispatch(fetchUserData(userId));
}, 500); // 500 миллисекунд задержки

// Компонент React, который вызывает задержанную функцию при изменении значения ввода
function UserComponent({ userId, dispatch }) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        debouncedFetchUserData(value, dispatch);
    };

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
        </div>
    );
}

const Search = () => {
    return (
        <div>
            
        </div>
    );
};

export default Search;