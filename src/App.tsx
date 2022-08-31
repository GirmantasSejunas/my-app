/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from './components/header/header'
import SectionA from './components/section-a/section-a'
import SectionB from './components/section-b/section-b'
import SectionC from './components/section-c/section-c'

  const App: React.FC = () =>  {

    return (
    <>
  <Header/>
  <SectionA/>
  <SectionB/>
  <SectionC/>
    </>
 )
}

export default App