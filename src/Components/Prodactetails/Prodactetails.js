import React, { Fragment, useState } from 'react'
import { useParams } from "react-router-dom"
import { useCart } from 'react-use-cart'
import { slideImages } from '../../images'
import "./Prodactetails.css"

const Prodactetails = ({ item }) => {
    console.log(item)
    const { id } = useParams()
    const { addItem } = useCart()
    const [stateImages, setStateImages] = useState(slideImages[id - 1])

    let allProdact = JSON.parse(localStorage.getItem("dtapp"))
    let find = allProdact.find((e) => e.id == id)
    let { colors } = find
    console.log(allProdact[2].images)
    return (
        <div className='app'>
            <div className='all-card'>
                <div className='left'>
                    <img src={ stateImages} alt={find.name} width="300px" />
                </div>
                <div className='details'>
                    <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3 style={{ marginBottom: "1.2rem" }}>{find.name}</h3>
                        <p style={{ color: "#f9004d", fontSize: "18px" }}>$ {find.price}</p>
                    </div>
                    <div className='colors' style={{ marginBottom: "1.2rem", cursor: "pointer", fontSize: "25px" }}>
                        {colors.map((e, index) => (
                            <button key={index} style={{ background: e, height: "40px", width: "40px", marginRight: "15px" }}></button>
                        ))}
                    </div>
                    <div className='descraption' style={{ marginBottom: "2rem", color: "#f9004d" }}>
                        <p>{find.desc}</p>
                    </div>
                    <div className='content' style={{ marginBottom: "1.2rem", color: "#777" }}>
                        <p>{find.content}</p>
                    </div>
                    <div className='img'>
                        {
                            slideImages.map((e, idx) => (
                                <Fragment>
                                    <img src={ e} alt={find.name}
                                        key={idx} width="80px"
                                        style={{ margin: "15px 15px 15px 0px", cursor: "pointer" }}
                                        onClick={() => setStateImages(e)} />
                                </Fragment>
                            ))
                        }
                        {item.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    {
                                        e.id <= 1 &&
                                        <div className='btn'>
                                            <button className="card" style={{
                                                color: "#fff", padding: "10px 15px", margin: "42px 0px 30px",
                                                fontWeight: "bolder", cursor: "pointer"
                                            }} onClick={() => addItem(e)}>add to card</button>
                                        </div>
                                    }
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Prodactetails