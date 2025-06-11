import Button from "./Button/Button.jsx";
import { useState, useRef } from "react";



 function StateVsRef() {
     const input = useRef()

     const [show, setShow] = useState(false)
     function handleDown(event) {
         if(event.key === 'Enter') {
             setShow(true)
         }
     }

     return(
         <>
             <h3>Input value: {show && input.current.value}</h3>
             <input ref={input} type="text" className='control' onKeyDown={handleDown} />
         </>
     )
 }


export default function About() {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        error: false,
    })

    function handleNameChange (event) {
        setForm(prev => ({
            ...prev,
            name: event.target.value,
            error: event.target.value.trim().length === 0
        }))

    }

    /*function toggleError () {
        // в параметре предыдущее значение возвращает новое
        //setError((prev) => !prev)
    }*/

    return (
        <>
            {/*<Button onClick={toggleError}>Toggle error</Button>*/}
            <form style={{margin: '24px 0 32px'}}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    className="control"
                    value={form.name}
                    onChange={handleNameChange}
                    style={{
                        border: form.error ? '1px solid tomato' : null
                    }}
                />

                <label htmlFor="reason">Reason</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}
                >
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Suggest</option>
                </select>

                {/*<pre>
                    {JSON.stringify(form)}
                </pre>*/}
                <Button disabled={form.error} isActive={!form.error}>Send</Button>

            </form>

            <StateVsRef />
        </>

    )
}