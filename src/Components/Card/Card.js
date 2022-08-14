import React, { Fragment } from 'react'
import { useCart } from 'react-use-cart'
import {  toast } from 'react-toastify'
import "./Card.css"

const Card = ({item}) => {
    console.log(item.name)
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    if(isEmpty)  return  <h5  style={{textAlign : "center"}}>card is empty <span style={{display : "none"}}>{toast("card is empty")}</span></h5>
    return (
        <div className='app'>
        <h2 style={{textAlign : "center" , color : "#333" , fontWeight : "bolder" , marginBotton : "30px"}}>my cart</h2>
        <div >
        <p style={{textAlign : "center" , color : "#000" , margin : "30px" , fontSize : "px"}}>cart
        <span style={{ padding : "5px 8px",borderRadius : "5px",margin : "10px" , color : "#fff", background : "#f9004d"
        }}>{totalUniqueItems}</span>
        total items
        <span style={{ padding : "5px 8px",borderRadius : "5px",margin : "10px" , color : "#fff", background : "#f9004d"
        }}>{totalItems}</span></p>
        </div>
    <div className='all-cardd' > 
    {
        items.map((e)=>(
            <Fragment key={e.id}>
            <div className='gap' style={{ border : "1px solid #444", marginBottom : "1.5rem" ,display : "flex" , justifyContent : "space-between" , alignItems : "center"}} >
    <div className='left'>
        <img src={e.images} alt="pictur one" width="300px" />
    </div>
    <div className='details' style={{borderBottom :"2px solid #333" , marginBottom : "30px", paddingRight : "20px"}}>
    <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginBottom: "1.2rem" }}>{e.name}</h3>
        <p style={{ color: "#f9004d", fontSize: "18px" }}>$ {e.price}</p>
    </div>

    <div className='colors' style={{ marginBottom: "1.2rem", cursor: "pointer", fontSize: "25px" }}>
                        {e.colors.map((e, index) => (
                            <button key={index} style={{ background: e, height: "40px", width: "40px", marginRight: "15px" }}></button>
                        ))}
                    </div>

    <div className='descraption' style={{ marginBottom: "2rem", color: "#f9004d" }}>
        <p>{e.desc}</p>
    </div>
    <div className='content' style={{ marginBottom: "1.2rem", color: "#777" }}>
            <p>{e.content}</p>
    </div>

    <div className='numberOfItem'>
    <button className="add" onClick={()=>updateItemQuantity(e.id , e.quantity - 1) }
                    style={{ color : "#fff" , padding : "10px 15px", margin : "10px" , fontWeight:"bolder" ,fontSize :"15px" , 
                    cursor : "pointer"}}>-
    </button>
    <span style={{margin  : "15px"}}>{e.quantity}</span>
    <button className="add" onClick={()=>updateItemQuantity(e.id , e.quantity + 1) }
                    style={{ color : "#fff" , padding : "10px 15px", margin : "10px" , fontWeight:"bolder",fontSize :"15px" , 
                    cursor : "pointer"}}>+
    </button>
    </div>

    <button className='remove' onClick={()=>removeItem(e.id) }
    style={{ color : "#fff" , padding : "10px 15px", margin : "10px" , fontWeight:"bolder",fontSize :"15px" , 
    cursor : "pointer" , float : "right"}} >remove item</button>
    </div>
    </div>
            </Fragment>
        ))
    }
    <div className='total-price'>
    <button className='remove' onClick={()=> emptyCart() }
    style={{ color : "#fff" , padding : "10px 15px", margin : "10px" , fontWeight:"bolder",fontSize :"15px" , 
    cursor : "pointer" }}>clear all</button>
    <h3 style={{float : "right"}}>total price : ${cartTotal }</h3>
    </div>
    </div>
    </div>
    )
}
export default Card