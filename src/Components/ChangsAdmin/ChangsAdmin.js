import React, { Component } from 'react'
import "./ChangsAdmin.css"
import image1 from "../../Assets/Images/logo.png"

class ChangsAdmin extends Component {
    render() {
        const { send } = this.props
        return (
            <div className='app'>
                <h2 style={{ color: "#444", textAlign: "center", marginBottom: "25px" }}>new prodact added</h2>
                <div >
                    {
                        send.map((e) => (
                            <div style={{
                                border: ".5px solid #888", padding: "10px", borderRadius: "6px", marginBottom: "15px",
                                display: "flex", alignItems: "center", justifyContent: "space-between"
                            }}>
                                <span>{e.name}</span>

                                <p style={{ margin: "10px" }}>{e.price}</p>
                                <img src={image1} alt="no img" width="50px" />
                                <button className='bttn' onClick={() => this.props.handelDelet(e.id)} style={{ color: "#fff", padding: "10px 15px", margin: "10px", fontWeight: "bolder", cursor: "pointer" }}>delete</button>
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={image1} alt="no img" width="120px" />
                </div>
            </div>
        )
    }
}
export default ChangsAdmin
