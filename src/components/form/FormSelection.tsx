import React, {ChangeEvent, useState} from 'react';
import style from './FormSelection.module.css'
import SuperSelect from "../../castom_components/SuperSelect";
import SuperButton from "../../castom_components/SuperButton";
import iconfile from '../../asses/image/filesicon.svg'


export default function FormSelection() {
    const options = ['Выбор 1', 'Выбор 2', 'Выбор 3', 'Выбор 4']
    const [option, onChangeOption] = useState<string>('hhh');
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [text, setText] = useState('');
    const [sizeRows, setSizeRows] = useState(1);
    const [files, setFiles] = useState<any>([]);


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValue(value)

        if (value.length !== 12) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const onChangeText = (e) => {
        setText(e.currentTarget.value)
        if (text.length > 35) {
            setSizeRows(2)
        }
        if (text.length > 70) {
            setSizeRows(3)
        }
    }


    let onChangeFile = (e) => {
        let file = e.currentTarget.files
        let filesArr = [...file]
        setFiles([...files, ...filesArr])

    }

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
                                <SuperSelect options={options}
                                             value={option}
                                             className={style.selected}
                                             onChangeOption={onChangeOption}
                                /></div>
                            <div>
                                <input type='phone'
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
}


