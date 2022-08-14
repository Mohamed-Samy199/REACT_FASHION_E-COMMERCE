import React, {  Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Prodact.css"
import { useCart } from 'react-use-cart'

const Prodact = ({item}) => {
        const { addItem } = useCart()
        return (
            <div className="container-prodact" style={{display : "flex", justifyContent : "space-between" }}>
            {item.map((e )=>{
                return(
                    <Fragment key={e.id }>
                    <div className="box" >
                    <NavLink to={"/prodact/" + e.id } className="image" >
                    <img src={e.images } alt="pictur one" width="300px" />
                    {console.log(e.images)}
                    {console.log(e.price)}
                    </NavLink>
                    <div className="row" style={{display : "flex", justifyContent : "space-between" , fontSize : "20px" , padding : "15px 10px"}}>
                        <p style={{fontWeight : "bolder"}}>{e.name}</p>
                        <p>$ {e.price}</p>
                    </div>
                    <button className="add" onClick={()=>addItem(e)}
                    style={{ color : "#fff" , padding : "10px 15px", margin : "10px" , fontWeight:"bolder" , cursor : "pointer"}}>
                    add to card{console.log(e)}
                    </button>
                </div>
                    </Fragment>
                ) 
            })
            }
            </div>
        )
    }
export default Prodact