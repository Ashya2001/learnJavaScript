import React from 'react'
import "./App.css"
import Header from './components/Header'
import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'


const App = () => {
  return (
    <div>
     <Header/>
     <ContactCard/>
     <ContactList/>
     <AddContact/>

    </div>
  )
}

export default App
