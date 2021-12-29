import React, {ChangeEvent} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (value) {
            onChangeRange && onChangeRange(
                [e.currentTarget.id === '1' ? +e.currentTarget.value : value[0],
                    e.currentTarget.id === '2' ? +e.currentTarget.value : value[1]])
        }

    }

    return (
        <>
            <div className={s.range_wrap}>
                <div
                    style={{
                        left: `0`,
                        width: `100%`
                    }}
                    className={s.range_line}
                >
                </div>
                <input

                    id={'1'}
                    type={'range'}
                    onChange={onChangeCallback}
                    value={value ? value[0] : ''}

                />
                <input

                    id={'2'}
                    type={'range'}
                    onChange={onChangeCallback}
                    value={value ? value[1] : ''}

                />
            </div>
        </>
    )
}

export default SuperDoubleRange
