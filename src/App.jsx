import { useState } from 'react'
import { Layout } from 'antd';
import AppHeader from "./components/layout/AppHeader.jsx";
import AppSider from "./components/layout/AppSider.jsx";
import AppFooter from "./components/layout/AppFooter.jsx";
import AppContent from "./components/layout/AppContent.jsx";

import DataList from "./components/DataList.jsx";
import TabList from "./components/TabList.jsx";
import TabsSection from "./components/TabsSection.jsx";
import About from "./components/About.jsx";
import EffectSection from "./components/EffectSection.jsx";

import './App.css'

export default function App() {
    const [tab, setTab] = useState('effect')

  return (
    <>
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent>
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
                </AppContent>
            </Layout>
            <AppFooter />
        </Layout>
    </>
  )
}
