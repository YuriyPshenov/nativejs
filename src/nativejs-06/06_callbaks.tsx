import React, {ChangeEvent, useState} from 'react';

export const User = () => {

    const [user, setUser] = useState('Dimych')

    const deleteUser = () => {
        setUser('deleted user')
        alert('user have been deleted')
    }

    const saveUser = () => {
        setUser('save user')
        alert('user have been saved')
    }

    const [text, setText] = useState('1234')

    const placeHolder = user === 'deleted user' ? 'add new user' : user

    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }

    const onBlurHandler = () => {
        console.log("focus lost")
    }

    return (
        <div>
            {user}
            <input tabIndex={1}
                   type="text"
                   placeholder={placeHolder}
                   onChange={onNameChanged}
                   onBlur={onBlurHandler}
            />
            <textarea value={text}></textarea>
            <button tabIndex={2} onClick={deleteUser}>delete</button>
            <button tabIndex={3} onClick={saveUser}>save</button>
        </div>
    );
};