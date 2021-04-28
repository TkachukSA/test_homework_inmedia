import React, {useState} from 'react';
import style from '../form/FormSelection.module.css'
import s from './FormTabs.module.css'


export const FormTabs = React.memo(() => {
    return (
        <div>
            <div className={style.formContainer}>
                <div className={style.item}>
                    <div style={{borderTop: '1px', justifyContent: "centr"}} className={`${style.form} ${s.formTabs}`}>

                        {dataFromTabs.map((d, i) => {
                            return <FormTabsSelect title={d.title}
                                                   id={d.id}
                                                   key={i}
                                                   description={d.description}
                            />
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
})

type FormTabsType = {
    title: string
    description?: string
    id?: number
}


export const FormTabsSelect = React.memo<FormTabsType>((
    {
        title, description,
        id, children
    }
    ) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className={s.flex}>
            <div className={checked ? s.mainitem : s.mainitemRed}>{id}</div>
            <div className={s.sideitem}>
                <div onClick={() => setChecked(!checked)}
                     className={checked ? s.item : s.itemRed}>
                    <span>{title}</span>
                </div>
                {checked && <div className={s.item}>{description}</div>}
            </div>
        </div>
    )
})

type DataFromTabsType = {
    title: string
    id: number,
    description: string
}
const dataFromTabs: DataFromTabsType[] = [
    {
        title: "Заголовок 1", id: 1, description: 'Какой-то текст про ' +
            'очень важные вещи о которых нужно было ' +
            'написать внутри этих табов'
    },
    {
        title: "Заголовок 2", id: 2, description: 'Какой-то текст про ' +
            'очень важные вещи о которых нужно было ' +
            'написать внутри этих табов'
    },
    {
        title: "Заголовок 3", id: 3, description: 'Какой-то текст про ' +
            'очень важные вещи о которых нужно было ' +
            'написать внутри этих табов'
    }
]



