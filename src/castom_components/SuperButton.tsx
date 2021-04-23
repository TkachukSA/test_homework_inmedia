import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./SuperButton.module.css";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, color,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.default : s.red} ${className}`;
    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
