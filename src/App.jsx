import { useState } from 'react'
import { Layout } from './components/layout'
import AppRouter from './AppRouter'
import { AppHeader } from './components/header'
import { AppFooter } from './components/footer'

const App = () => 
  <div className='application-wrapper'>
    <AppHeader />
    <Layout>
      <AppRouter />
    </Layout>
    <AppFooter />
  </div>

export default App
