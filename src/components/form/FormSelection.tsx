import React, {ChangeEvent, useCallback, useState} from 'react';
import style from './FormSelection.module.css'
import SuperSelect from "../../castom_components/SuperSelect";
import SuperButton from "../../castom_components/SuperButton";
import iconfile from '../../asses/image/filesicon.svg'


export const FormSelection = React.memo(() => {
    const options = [
        {title: "Выбор 1", value: 1},
        {title: "Выбор 2", value: 2},
        {title: "Выбор 3", value: 3},
        {title: "Выбор 4", value: 4},
        {title: "Выбор 5", value: 5}

    ]
    const [option, onChangeOption] = useState<any>('hhh');
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [text, setText] = useState('');
    const [sizeRows, setSizeRows] = useState(1);
    const [files, setFiles] = useState<Array<any>>([]);


    const onChangeValue = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setValue(value)
        if (!/^\d+$/.test(value)) {
            setError(true)

        } else {
            setError(false)
        }
    }, [])


    const onChangeText = useCallback(function (e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.currentTarget.value)
        if (text.length > 35) {
            setSizeRows(2)
        }
        if (text.length > 70) {
            setSizeRows(3)
        }
    }, [text.length])


    const onChangeFile = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            let file = e.currentTarget.files[0]
            let contact = files.concat(file)
            setFiles(contact)
        }
    }, [files])

    return (
        <div>
            <div className={style.formContainer}>
                <div className={style.item}>
                    <form>
                        <div className={style.form}>
                            <div>
                                <h2>{'Форма'}</h2>
                                <span>Дополнительный текст</span>
                            </div>
                            <div>
                                <SuperSelect items={options}
                                             value={option}
                                             onClick={onChangeOption}
                                /></div>
                            <div>
                                <input type='Phone'
                                       multiple={false}
                                       className={error ? style.error : style.input}
                                       value={value}
                                       placeholder={'Номер телефона *'}
                                       onChange={onChangeValue}/>
                            </div>
                            <div>
                                <textarea value={text}
                                          placeholder={'Коротко о чем-то еще'}
                                          onChange={onChangeText}
                                          rows={sizeRows}
                                          className={style.textarea}/>
                            </div>
                            <div className={style.filesform}>
                                <label className={style.label}>
                                    <img alt={'icon'} src={iconfile}/>
                                    <input className={style.file}
                                           onChange={onChangeFile}
                                           title={''}
                                           name="myFile"
                                           type="file"/>
                                </label>
                                <div className={style.filesform}>{
                                    files.map(t => {
                                        const removeFile = () => {
                                            let file = files.filter(x => x.name !== t.name);
                                            setFiles(file)
                                        }
                                        return <div style={{paddingLeft: '10px'}}>{t.name}<b onClick={removeFile}> x</b>
                                        </div>
                                    })
                                }
                                </div>
                            </div>
                            <div>
                                <SuperButton style={{width: '288px'}}
                                             onClick={e => e.preventDefault()}>
                                    {'Кнопка'}
                                </SuperButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
})


