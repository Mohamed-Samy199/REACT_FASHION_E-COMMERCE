import React, {  Fragment, useState } from "react";
import { api } from "../../data";
import Filter from "../Filter/Filter";
import image1 from "../../Assets/Images/logo.png"
import "./About.css"
const About =()=>{
        const [data , setDate] = useState(api)
        const [filter , setFilter] = useState("")
        const filterByBtn =(e)=>{
            const result = api.filter((el)=>{
                return el.type === e
            })
            setDate(result)
        }
        const filterName=(name)=>{
            setFilter(name)
        }
        const namesHandel =()=>{
            if(filter.length !== 0){
                return data.filter(({type})=> type.includes(filter))
            }
            return data
        }
        return(
            <div className="app">
            <h3 style={{textAlign : "center" , color : "#141215" , fontWeight : "bolder" , fontSize : "20px"}}>what you do!</h3>
                <div className="buttons" style={{display : "flex" , alignItems : "center" , justifyContent : "center" }}>
                <button className="click" onClick={()=>filterByBtn("night")}>night</button>
                <button className="click" onClick={()=>filterByBtn("uniform")}>uniform</button>
                <button className="click" onClick={()=>filterByBtn("casual")}>casual</button>
                <button className="click" onClick={()=>filterByBtn("sport")}>sport</button>
                <button className="click" onClick={()=>setDate(api)}>all</button>
                </div>   
                <Filter filterName={ filterName }/>
                
                <div className="allImage"  style={{display : "flex" , justifyContent :"center" , alignItems : "center" , 
                flexWrap : "wrap"}}>
                {
                    namesHandel().map((e)=>{
                        return(
                                    <Fragment>
                                    <img  src={e.image} alt="one" width="250px"/>
                                    </Fragment>
                            )
                        })
                    }
                </div>
                <div style={{display: "flex" , justifyContent : "center" , alignItems : "center"}}>
                    <img src={image1} alt="no img" width="120px" />
                </div>
            </div>
        )
}
export default About