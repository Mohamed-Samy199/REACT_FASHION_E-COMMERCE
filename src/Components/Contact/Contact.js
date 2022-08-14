import React from 'react'
import { numbers } from '../../data'
import "./Admin.css"
import image1 from "../../Assets/Images/logo.png"

const Admin = ({ handelWrite, handelSubmit , cheak}) => {
    console.log(handelWrite)
    return (
        <div className='app'>
            <div className='row' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px" }}>
                {
                    numbers.map((e, idx) => (
                        <div key={idx} className='cards' style={{ width: "16rem", height: "8rem", borderRadius: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} onClick={cheak}>
                                <h2 >{e.numb}</h2>
                                <span>{e.icon}</span>
                            </div>
                            <p>{e.titel}</p>
                        </div>
                    ))
                }
            </div>
            <form onSubmit={handelSubmit} style={{ marginTop: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "50px" }}>
                <div className='form-group'>
                    <label htmlFor='name'
                        style={{ marignBottom: "50px", color: "#f9004d", fontWeight: "bolder", fontSize: "23px", cursor: "pointer" }}>prodact name</label>
                    <input type="text" id={"name"} onChange={handelWrite}
                        placeholder='name'
                        style={{ marginTop: "20px", width: "50%", fontSize: "15px", caretColor: "#f9004d", border: "1px solid #888", borderRadius: " 10px", padding: "20px 250px 20px 20px" }} />
                </div>
                <div className='form-group'>
                    <label htmlFor='price'
                        style={{ marignBottom: "50px", color: "#f9004d", fontWeight: "bolder", fontSize: "23px", cursor: "pointer" }}>prodact price</label>
                    <input type="text" id={"price"} onChange={handelWrite}
                        placeholder='price'
                        style={{ marginTop: "20px", width: "50%", fontSize: "15px", caretColor: "#f9004d", border: "1px solid #888", borderRadius: " 10px", padding: "20px 250px 20px 20px" }} />
                </div>
                <div>
                    <input type="submit" value="add now prodact"
                        style={{ marginTop: "20px", cursor: "pointer", fontSize: "15px", color: "#fff", background: "#141215", padding: "10px 20px" }} />
                </div>
                <div>
                    <img src={image1} alt="no img" width="100px" onClick={handelWrite} />
                </div>
            </form>
        </div>
    )
}
export default Admin
