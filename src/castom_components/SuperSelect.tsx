import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";



type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    Value?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }


) => {
    const componentPng = {
        color: 'red',
        backgroundImage: 'red',
    };
    const mappedOptions = options && options.map((o, i) => <option style={componentPng} key={i}>{o}</option>)



    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    return (
        <select placeholder={'gitfitrdir'} onChange={onChangeCallback} {...restProps}>
            <option style={componentPng} value='1' disabled>Select</option>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;



