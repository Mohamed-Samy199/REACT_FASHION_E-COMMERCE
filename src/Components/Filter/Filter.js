import React, { useState } from 'react'

const Filter = ({ filterName }) => {
    const [filter, setFilter] = useState("")
    const handelFilter = (e) => {
        const name = e.target.value
        setFilter(name)
        filterName(name)
    }
    return (
        <div className="contenter" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid #f9004d", borderRadius: "30px",
        }}>
            <div className="search" style={{ padding: "15px", width: "90%" }}>
                <label htmlFor="search"><i class="fa-solid fa-magnifying-glass" style={{
                    fontWeight: "bolder", color: "#f9004d",
                    fontSize: "20px", cursor: "pointer", paddingRight: "15px", textTransform: "lowercase"
                }}></i></label>
                <input id="search" type="search" placeholder='night uniform casual sport' style={{
                    width: "90%", fontSize: "15px",
                    caretColor: "#f9004d", textTransform: "lowercase"
                }}
                    value={filter}
                    onChange={handelFilter} />
            </div>
        </div>
    )
}
export default Filter
