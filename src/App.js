import React from "react"
import Contact from "./components/Contact"
import Header from "./components/Header"
// import logo from "./logo.svg"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="John Doe" email="johndoe@gmail.com" phone="553-3333-7887" />
        <Contact name="Jane Doe" email="janedoe@gmail.com" phone="111-3333-7887" />
      </div>
    </div>
  )
}

export default App
