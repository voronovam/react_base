import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import DataList from "./components/DataList.jsx";
import TabList from "./components/TabList.jsx";
import TabsSection from "./components/TabsSection.jsx";
import About from "./components/About.jsx";
import EffectSection from "./components/EffectSection.jsx";


export default function App() {
  //const [count, setCount] = useState(0)
    const [tab, setTab] = useState('effect')

  return (
    <>
      <Header/>
      <h1>Vite + React</h1>
      <main>
          <TabsSection active={tab} onChange={ (current) => setTab(current)} />

          {tab === 'home' && (
              <>

                  <DataList />
                  <TabList/>
              </>
          )}

          {tab === 'about' && (
            <>
                <About />
            </>
          )}

          {tab === 'effect' && (
              <>
                  <EffectSection />
              </>
          )}

      </main>
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}
    </>
  )
}
