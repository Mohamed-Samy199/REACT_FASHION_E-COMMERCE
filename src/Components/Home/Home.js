import React, { useState } from 'react'
import { allImages } from '../../images'
import "./Home.css"

const Home = () => {
    console.log(allImages[0])
    const [selectImage, setSelectImage] = useState(allImages[6])
    return (
        <div className='home'>
            <div className='container'>
                <div className='image'>
                    <img src={selectImage}
                        style={{
                            display: "flex", justifyContent: "center", alignItems: "center", margin: "20px auto 50px",
                            border: "2px solid #f9004d", cursor: "pointer"
                        }} alt='' />
                    <div className='opacity'>
                        <i class="fa-solid fa-bookmark one"></i>
                        <i class="fa-solid fa-magnifying-glass two"></i>
                        <i class="fa-solid fa-heart there"></i>
                    </div>
                </div>
                <div className='all-images' style={{
                    margin: "20px auto", padding: "10px 5%", alignItems: "center", display: "flex",
                    justifyContent: "center", flexWrap: "wrap"
                }}>
                    {
                        allImages.map((e, idx) => (
                            <img className='small-image' src={e} key={idx} alt='fashion' width="250px"
                                style={{ padding: "15px", cursor: "pointer", border: selectImage === e ? "2px solid #f9004d" : "" }}
                                onClick={() => setSelectImage(e)} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home
