import React from 'react'
import s from './../Header.module.css'

function Error404() {
    const img = "https://free-images.com/or/b614/error_404_404_error.jpg"
    return (
        <div>
            <div>404</div>
            <div>Page not found!</div>
            <img className={s.img} src={img}/>
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
