import logo from '/vite.svg'
import { useState, useEffect } from 'react';
import {styled} from 'styled-components'

const HeaderContainer = styled.div`
background-color: #3d237e;
`

export default function TheHeader () {
    const [now, setNowState] = useState(new Date())

    useEffect(()=> {
        const interval = setInterval(() => setNowState(new Date), 1000)
        return () => {
            clearInterval(interval) //destroy like in vue
        }
    }, [])


    return (
        <HeaderContainer>
            <img src={logo} alt="logo"/>
            <div> {now.toLocaleTimeString()}</div>
        </HeaderContainer>

    )
}