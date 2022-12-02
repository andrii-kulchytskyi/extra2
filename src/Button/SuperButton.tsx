import React from 'react';


type PropsType = {
    callback: () => void
    color: string
    children?: React.ReactNode
}


export const SuperButton: React.FC<PropsType> = () => {

    const onClickHandler = () => {

    }
    return (
        <button onClick={onClickHandler}>

        </button>

    );
};

