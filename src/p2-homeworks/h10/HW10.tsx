import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import logo from './bll/spinning-circles.svg'

function HW10() {


    const loading = useSelector<AppStoreType, { loading: boolean }>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10


            {loading.loading
                ? (
                    <div>
                        <img style={{width: '50px', height: '50px'}}
                             src={logo}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
