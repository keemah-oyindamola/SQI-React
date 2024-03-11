import React from "react";
import eng from './software-engineering-630x330-1.webp'
import ux from './product.jpg'
import data from './DATA-SQI.jpg'
import literacy from './digital-literacy.jpg'

const Fourthcomp = (() => {
    const mydiv = {
        display: 'flex',
        marginLeft: '170px',
        marginTop: '70px',
    }
    const strip = {
        color: 'rgb(0, 14, 66)',
    }
    const software = {
        width: '530px',
        marginTop: '40px',
        height: '680px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: 'rgb(213,234,243)',
        padding: '50px'
    }
    const ui = {
        width: '530px',
        marginTop: '40px',
        height: '680px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: 'rgb(224,213,192)',
        padding: '50px'
    }
    const analysis = {
        width: '530px',
        marginTop: '40px',
        height: '680px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'rgb(238,239,189)',
        padding: '50px',
        marginLeft: '50px'
    }
    const digital = {
        width: '530px',
        marginTop: '40px',
        height: '680px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'rgb(223,213,232)',
        padding: '50px',
        marginLeft: '50px'
    }
    return (
        <>
            <div style={mydiv}>
                <div>
                    <h1>Our Top Courses</h1>
                    <p>Take a look at some of our popular courses</p>
                    <a style={strip} href="">View all Courses</a>
                    <div style={software}>
                        <img style={{ height: '200px', borderRadius: '20px', }} src={eng} alt="" />
                        <h4>Software Engineering</h4>
                        <p>Software Engineering is one of the most in-demand jobs <br /> across the globe today.</p><br />
                        <p>Software Engineers are also known as programmers,<br /> developers or coders. They are the ones behind all the <br /> apps and software you use today either on your phone <br /> or computer within your browser. Software such as <br /> banking apps, booking apps, mailing apps (e.g Gmail), <br /> Chat apps (e.g WhatsApp) and other Social apps (e.g <br /> Twitter, Facebook) and many more are created by <br /> software engineers.</p>
                        <a href="">Learn More</a>
                    </div>
                    <div style={ui}>
                        <img style={{ height: '250px', borderRadius: '20px', }} src={ux} alt="" />
                        <h4>UI/UX – Product Design</h4>
                        <p>Software Engineering is one of the most in-demand jobs <br /> across the globe today.</p><br />
                        <p>Software Engineers are also known as programmers,<br /> developers or coders. They are the ones behind all the <br /> apps and software you use today either on your phone <br /> or computer within your browser. Software such as <br /> banking apps, booking apps, mailing apps (e.g Gmail), <br /> Chat apps (e.g WhatsApp) and other Social apps (e.g <br /> Twitter, Facebook) and many more are created by <br /> software engineers.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>
                <div>
                    <div style={analysis}>
                        <img style={{ height: '250px', borderRadius: '20px', }} src={data} alt="" />
                        <h4>Data Science & Analysis</h4>
                        <p>Software Engineering is one of the most in-demand jobs <br /> across the globe today.</p><br />
                        <p>Software Engineers are also known as programmers,<br /> developers or coders. They are the ones behind all the <br /> apps and software you use today either on your phone <br /> or computer within your browser. Software such as <br /> banking apps, booking apps, mailing apps (e.g Gmail), <br /> Chat apps (e.g WhatsApp) and other Social apps (e.g <br /> Twitter, Facebook) and many more are created by <br /> software engineers.</p>
                        <a href="">Learn More</a>
                    </div>
                    <div style={digital}>
                        <img style={{ height: '250px', borderRadius: '20px', }} src={literacy} alt="" />
                        <h4>Digital Literacy</h4>
                        <p>Software Engineering is one of the most in-demand jobs <br /> across the globe today.</p><br />
                        <p>Software Engineers are also known as programmers,<br /> developers or coders. They are the ones behind all the <br /> apps and software you use today either on your phone <br /> or computer within your browser. Software such as <br /> banking apps, booking apps, mailing apps (e.g Gmail), <br /> Chat apps (e.g WhatsApp) and other Social apps (e.g <br /> Twitter, Facebook) and many more are created by <br /> software engineers.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>


            </div>


            <div  style={{ marginLeft: '170px',marginTop: '70px',}}>
            <h4>Our alumni work at world-class <br /> companies around the world including</h4>
            </div>
            <div style={mydiv}>
                <div>
                    <img src={require('./google.png')} alt="" />
                    <img src={require('./Paystack.png')} alt="" />
                    <img src={require('./edozzier.png')} alt="" />
                </div>
                <div></div>
                <div></div>
            </div>

        </>
    )
})


export default Fourthcomp;