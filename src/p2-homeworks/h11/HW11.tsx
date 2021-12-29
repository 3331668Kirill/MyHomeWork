import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '././common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11


            <div>
                <span className={s.range_values}>Value:{value1}</span>
                <SuperRange onChangeRange={(e) => {
                    if (value1 < value2) {
                        setValue1(e)
                    }
                }}
                            value={value1}

                />
            </div>


            <div>
                <span className={s.range_values}>Min:{value1}</span>
                <SuperDoubleRange onChangeRange={([value1, value2]) => {
                    if (value1 < value2) {
                        setValue1(value1)
                        setValue2(value2)
                    }

                }
                }
                                  value={[value1, value2]}

                />
                <span className={s.range_values}>Max:{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
