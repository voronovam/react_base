import Button from "./Button/Button.jsx";
export default function TabsSection({active, onChange}) {
    return (
        <section>
            <Button isActive={active === 'home'} onClick={()=> onChange('home')}>Home</Button>
            <Button isActive={active === 'about'} onClick={()=> onChange('about')}>About</Button>
            <Button isActive={active === 'effect'} onClick={()=> onChange('effect')}>Effect</Button>
        </section>
    )
}