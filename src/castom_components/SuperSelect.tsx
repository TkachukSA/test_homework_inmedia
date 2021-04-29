import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState, ButtonHTMLAttributes} from "react";
import s from  './SuperSelect.module.css'




type itemType = {
    title: string
    value: any
}

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type SuperButtonPropsType = DefaultButtonPropsType & {
    value?: any
    onClick: (value: any) => void
    items: Array<itemType>
}
const SuperSelect: React.FC<SuperButtonPropsType> = (
    {
        items, className, value, onClick,
        ...restProps
    }
) => {
    const select = items.find(i => i.value === value)
    const [active, setActive] = useState(false)
    const [hovored, setHovored] = useState(value)
    const hovoreditem = items.find(i => i.value === hovored)
    const togl = () => {setActive(!active)}



    return (
        <>
            <span className={s.placeholder}>Выбор чего-то</span>
            <div className={s.select}>
        <span className={s.main} onClick={togl}>
            {select && <div style={{paddingLeft: "10px"}}>{select.title}</div>}</span>
                {
                    active &&
                <div className={s.items} tabIndex={0}>
                    {items.map(i => <div
                        className={s.item + " " + (hovoreditem === i ? s.select : s.selectRed)}
                        onClick={() => {onClick(i.value);
                            togl()
                        }}
                        onMouseEnter={() => {setHovored(i.value)}}
                        key={i.value}
                    >{<span>{i.title}</span>}
                    </div>)}
                </div>

                }
            </div>
        </>
    );
}

export default SuperSelect;







