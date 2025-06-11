import Button from "./Button/Button.jsx";
import { tabData } from "../data.js";
import { useState } from "react";

export default function TabList() {
    const [content, setContent] = useState('Press the Button');

    function handleClick(type) {
        setContent(type)
    }

    return (
        <section>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <Button isActive={content === 'type1'} onClick={() => handleClick('type1')}>show tab 1</Button>
                <Button isActive={content === 'type2'} onClick={() => handleClick('type2')}>show tab 2</Button>
                <Button isActive={content === 'type3'} onClick={() => handleClick('type3')}>show tab 3</Button>
            </div>

            <p>{ tabData[content] || content}</p>
        </section>
    )
}