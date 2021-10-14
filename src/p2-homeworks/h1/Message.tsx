import React from 'react'
import s from './Message.module.css'

type TypeMessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: TypeMessageProps) {
    return (
        <div>
            <div className={s.div_img}>
                <img className={s.img} src={props.avatar}/>
            </div>

            <div className={s.message}>
                <p className={s.name}>
                    {props.name}
                </p>
                <p className={s.name_message}>
                    {props.message}
                </p>
                <p className={s.time}>
                    {props.time}
                </p>

            </div>
        </div>
    )
}

export default Message
