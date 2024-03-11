import React from "react";
import image2 from './bg-header-sqi-1.png'


const Secondcomp = (() => {

    const mybtn={
        backgroundColor:"RGB(0, 32, 138)",
        color:'white',
        width:'150px',
        height:"50px",
        borderRadius:'10px',
        border:'none',
        
    }
    return (
        <>
            <div style={{display:'flex'}}>
                <div style={{marginLeft:'150px'}}>
                    <h1 style={{ color:'rgb(0, 14, 66)', fontWeight:'700px', fontSize:'60px', marginTop:'70px'}}>Study to <br /> become a <br /> global talent</h1><br />
                    <p style={{color:"rgb(71, 71, 71)"}}>Learn new tech skills using a world-class curriculum from top <br /> industry experts in an accredited institution.</p>
                    <button style={mybtn}>Start Now</button>
                </div>
                    <img style={{marginLeft:'70px'}} src={image2} alt="" />
            </div>
        </>
    )
})

export default Secondcomp;