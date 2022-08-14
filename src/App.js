import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Prodact from "./Components/Prodact/Prodact";
import { prodacts } from "./data"
import Prodactetails from "./Components/Prodactetails/Prodactetails";
import Admin from "./Components/Contact/Contact";
import ChangsAdmin from "./Components/ChangsAdmin/ChangsAdmin";
import { CartProvider } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify'

let data = localStorage.getItem("dtapp") ? JSON.parse(localStorage.getItem("dtapp")) : prodacts
localStorage.setItem("dtapp", JSON.stringify(data))

class App extends Component {
    state = {
        prodacts: data,
        index: 0,
        name: '',
        price: '',
        card: [1, 2, 3]
    }
    handelWrite = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    cheak =()=>{
        toast("follow us daily to now every change")
        // console.log("click")
    }
    handelSubmit = (e) => {
        e.preventDefault()
        toast("add new item to list")
        this.setState({
            prodacts: [...this.state.prodacts,
            {
                id: 8,
                name: this.state.name,
                price: this.state.price,
            }
            ]
        }, () => localStorage.setItem("dtapp", JSON.stringify(this.state.prodacts)))
        window.location = "/contact/add"
    }
    handelDelet = (id) => {
        let database = [...this.state.prodacts]
        let contentDB = database.filter((e) => e.id !== id)
        toast.error("delete item")
        this.setState({
            prodacts: contentDB
        })
    }
    render() {
        return (
            <CartProvider>
                <BrowserRouter>
                    <ToastContainer />
                    <Navbar countProdacts={this.state.prodacts.filter(e => e.count > 0).length} />
                    <Routes>
                        <Route path="/" exact element={<Home btn={this.state.index} />} />
                        <Route path="/about" exact element={<About />} />
                        <Route path="/prodact" exact element={<Prodact item={this.state.prodacts} />} />
                        <Route path="/prodact/:id" exact element={<Prodactetails item={this.state.prodacts} btn={this.state.index} />} />
                        <Route path="/contact" exact element={<Admin handelWrite={this.handelWrite} handelSubmit={this.handelSubmit} cheak={this.cheak} />} />
                        <Route path="/contact/add" exact element={<ChangsAdmin send={this.state.prodacts} handelDelet={this.handelDelet} />} />
                        <Route path="/card" exact element={<Card card={this.state.card} item={this.state.prodacts} btn={this.state.index} />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        )
    }
}
export default App