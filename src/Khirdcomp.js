import React from "react";
import divone from './college.jpg';
import divtwo from './prof.jpg'
import divthree from './certificate.jpg'

const Khirdcomp = (() => {
    const start = {
        color: 'rgb(0, 14, 66)',
        fontWeight: '700px',
        fontSize: '40px',
        marginTop: '70px',
        marginLeft: '170px'
    }
    const firstdiv = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '170px',
        marginTop: '30px',
    }

    return (
        <>
            <h1 style={start}>Start here. Change the world.</h1>
            <div style={firstdiv}>
                <div>
                    <img style={{ height: '340px', opacity: '5' }} src={divone} alt="" />
                    <h4 style={{ color: 'rgb(0, 14, 66)' }}>National Innovative Diploma <br /> (NID)</h4>
                    <p style={{ color: 'rgb(102, 102, 102)' }}>The National Innovation Diploma (NID) <br /> offered at SQI College of ICT is a 2 year <br /> approved academic program of the National <br /> Board for Technical Education (NBTE)</p>
                    <a style={{ color: 'rgb(102, 102, 102)' }} href="">Learn More</a>
                </div>
                <div style={{ marginLeft: '50px', marginTop: '30px' }}>
                    <img style={{ height: '340px' }} src={divtwo} alt="" />
                    <h4 style={{ color: 'rgb(0, 14, 66)' }}>Professional Diploma <br /> Certificate</h4>
                    <p style={{ color: 'rgb(102, 102, 102)' }}>The Professional Certificate Program is 1 year <br /> practical training with wide range of edge- <br />cutting IT certification courses offered in SQI <br /> College of ICT to people who want to <br /> advance their career.</p>
                    <a style={{ color: 'rgb(102, 102, 102)' }} href="">Learn More</a>
                </div>
                <div style={{ marginLeft: '50px', marginTop: '30px' }}>
                    <img style={{ height: '340px' }} src={divthree} alt="" />
                    <h4 style={{ color: 'rgb(0, 14, 66)' }}>Certificate Program</h4>
                    <p style={{ color: 'rgb(102, 102, 102)' }}>The Certificate Program is a short- <br />term training, 2 weeks to 6 months <br /> with a wide range of edge-cutting <br /> IT certification courses offered in <br /> SQI College of ICT to people who <br /> want to advance their careers.</p>
                    <a style={{ color: 'rgb(102, 102, 102)' }} href="">Learn More</a>
                </div>
            </div>


            <div style={firstdiv}>
                <div style={{ marginTop: '20px' }}>
                    <h5>NATIONAL DIPLOMA COURSES</h5>
                    <div style={{ textDecoration: 'underline', color: 'rgb(102, 102, 102)',fontSize:'17px'  }}>
                        <p> <b>Duration:</b> 2 Years</p>
                        <p> <b>Certificate:</b>Both National Diploma and <br /> Professional Diploma.</p>
                        <p> <b>Skills:</b>Academic Institution recognized <br /> skills and In-demand professional <br /> skills.</p>
                        <p> <b>Entry Requirements:</b> 120 min in JAMB</p>
                        <p><b>Required Hardware: </b>(usually Laptop)</p>
                        
                    </div>
                    <p style={{ color: 'rgb(102, 102, 102)',fontSize:'17px' }}> <b>Access to Alumni Network and <br /> Opportunities:</b> Yes.</p>
                </div>
                <div style={{ marginLeft: '60px', marginTop: '30px' }}>
                <h5>PROFESSIONAL DIPLOMA COURSES</h5>
                    <div style={{ textDecoration: 'underline', color: 'rgb(102, 102, 102)',fontSize:'17px'  }}>
                        <p> <b>Duration:</b> 2 Years</p>
                        <p> <b>Certificate:</b>Both National Diploma and <br /> Professional Diploma.</p>
                        <p> <b>Skills:</b>Academic Institution recognized <br /> skills and In-demand professional <br /> skills.</p>
                        <p> <b>Entry Requirements:</b> 120 min in JAMB</p>
                        <p><b>Required Hardware: </b>(usually Laptop)</p>
                        
                    </div>
                    <p style={{ color: 'rgb(102, 102, 102)',fontSize:'17px' }}> <b>Access to Alumni Network and <br /> Opportunities:</b> Yes.</p>
                </div>
                <div style={{ marginLeft: '60px', marginTop: '30px' }}>
                <h5>CERTIFICATE PROGRAM</h5>
                    <div style={{ textDecoration: 'underline', color: 'rgb(102, 102, 102)',fontSize:'17px'  }}>
                        <p> <b>Duration:</b> 2 Years</p>
                        <p> <b>Certificate:</b>Both National Diploma and <br /> Professional Diploma.</p>
                        <p> <b>Skills:</b>Academic Institution recognized <br /> skills and In-demand professional <br /> skills.</p>
                        <p> <b>Entry Requirements:</b> 120 min in JAMB</p>
                        <p><b>Required Hardware: </b>(usually Laptop)</p>
                        
                    </div>
                    <p style={{ color: 'rgb(102, 102, 102)',fontSize:'17px' }}> <b>Access to Alumni Network and <br /> Opportunities:</b> Yes.</p>
                </div>
            </div>
        </>
    )
})

export default Khirdcomp;