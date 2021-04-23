import React, {useState} from 'react';
import style from '../form/FormSelection.module.css'
import s from './FormTabs.module.css'


export default function FormTabs() {

    return (
        <div>
            <div className={style.formContainer}>
                <div className={style.item}>
                    <div style={{borderTop: '1px', justifyContent: "centr"}} className={`${style.form} ${s.formTabs}`}>
                        <FormTabsSelect title={'Заголовок 1'}
                                        id={1}
                                        description={'Какой-то текст про ' +
                                        'очень важные вещи о которых нужно было ' +
                                        'написать внутри этих табов.'}

                        />
                        <FormTabsSelect title={'Заголовок 2'}
                                        id={2}
                                        description={'Какой-то текст про' +
                                        ' очень важные вещи о которых нужно было ' +
                                        'написать внутри этих табов.'}

                        />
                        <FormTabsSelect title={'Заголовок 3'}
                                        id={3}
                                        description={'Какой-то текст про ' +
                                        'очень важные вещи о которых нужно' +
                                        ' было написать внутри этих табов.'}

                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

type FormTabsType = {
    title: string
    description?: string
    id?: number
}

const FormTabsSelect: React.FC<FormTabsType> = (
    {
        title, description, id,
        ...restProps
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
                {checked && <div style={{border: '2px'}} className={s.item}>{description}</div>}
            </div>
        </div>
    )
}




