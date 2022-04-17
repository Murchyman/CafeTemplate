import React from 'react'
const Menu = (props) => {

    return (
        <>
            <section id="MenuSection1">{props.MenuSection1}</section>
            <section id="MenuSection2">{props.MenuSection2}</section>
            <section id="MenuSection3">{props.MenuSection3}</section>
            <section id="MenuSection4">{props.MenuSection4}</section>
            <section id="Info">
                <h1 className="menuHeading">Information</h1>
                <br />
                <div className="infoBox">
                    <div className="left">
                        <div>
                            <h3>Hours</h3>
                            <p>Monday: {props.OpenHours[1]}</p>
                            <p>Tuesday: {props.OpenHours[2]}</p>
                            <p>Wednesday: {props.OpenHours[3]}</p>
                            <p>Thursday: {props.OpenHours[4]}</p>
                            <p>Friday: {props.OpenHours[5]}</p>
                            <p>Saturday: {props.OpenHours[6]}</p>
                            <p>Sunday: {props.OpenHours[0]}</p>
                        </div>
                        <div>
                            <h3>Reservations</h3>
                            <p>Please call us to discuss Reservations</p>
                            <a href={"tel:" + process.env.NEXT_PUBLIC_PhoneNumber}>
                                Phone: {process.env.NEXT_PUBLIC_PhoneNumber}
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h3>Contact</h3>
                            <a href={"tel:" + process.env.NEXT_PUBLIC_PhoneNumber}>
                                Phone: {process.env.NEXT_PUBLIC_PhoneNumber}
                            </a>

                        </div>
                        <div>
                            <h3>General Enquiries</h3>
                            <a href="mailto:Swanbites@mail.com.au">
                                Email: Swanbites@mail.com.au
                            </a>
                        </div>
                        <div>
                            <h3>Social Media</h3>
                            <a
                                href={process.env.Instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>

                        </div>
                        <div>
                            <h3>Catering</h3>
                            <p>
                                We are delighted to offer catering,
                            </p>
                            <p> please do not
                                hesitate to contact us</p>
                            <a href="mailto:Swanbites@mail.com.au">
                                Email: Swanbites@mail.com.au
                            </a>
                            <br />
                            <br />
                            <a href={"tel:" + process.env.NEXT_PUBLIC_PhoneNumber}>
                                Phone: {process.env.NEXT_PUBLIC_PhoneNumber}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu