import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressKey: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, pressKey, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''  // need to fix with (?:)
    const messageError = s.messageError
    const messageUsers = s.messageUsers
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={pressKey}/>
            <span className={messageError}>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={messageUsers}>  Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
