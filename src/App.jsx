import { useState } from 'react'
import { Layout } from './components/layout'
import AppRouter from './AppRouter'

const App = () => 
  <div className='application-wrapper'>
    <Layout>
      <AppRouter />
    </Layout>
  </div>

export default App
