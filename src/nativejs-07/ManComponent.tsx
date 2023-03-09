import React, {useState} from 'react';

type ManComponentPropsType = {
    title: string
    man: {name: string, age: number, lessons: {title: string}[], address: {street: {title: string}}}
    food: string[]
    car: {model: string}
}

function useDimychState(m: string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<ManComponentPropsType> = (props) => {

    const {title, man, ...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {`${true}`}
                {man.name}
                {restProps.car}
            </div>
        </div>
    );
};