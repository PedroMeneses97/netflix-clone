import React, {useState, useEffect} from 'react'

function Navbar(){
const [show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 150) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])


    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix logo">
            </img>

            <img
            className="nav_user"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="user logo"></img>
        </div>
    )
}

export default Navbar