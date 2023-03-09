
import "./css/index.css"

import logo from "./images/UCF_Logo_Clean_Horizontal_Alt.jpg"

const Header = () => {
    const hideMenu = () => {
        document.getElementById("navLinks").style.right = "-200px";

    }
    const showMenu = () => {
        document.getElementById("navLinks").style.right = "0px";
    }
    return ( 
        <section className="header">
            <nav>
                {/* need to change A tags with react-router-dom API */}
                <a href="index.html"> <img src={logo} alt="" /></a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick={ hideMenu }></i>
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="majors.html">MAJOR</a></li>
                        <li><a href="study.html">STUDY GROUPS</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="profile.html">PROFILE</a></li>
                    </ul>
			    </div>
			    <i className="fa fa-bars" onClick={ showMenu }></i>
            </nav>

            <div className="text-box">
			<h1>World's Biggest University</h1>
			<p>Welcome to the UCF Study Buddy, your one-stop destination for all things related to the University of Central Florida. Whether you're a prospective student, a current student, a faculty member, or a staff member, you'll find all the information you need here. From admissions and academic programs to campus resources and student life, we're here to help you succeed at UCF.</p>
			<a href="study.html" className="hero-btn">Find A Study Group Today</a>
		</div>
        </section>
     );
}
 
export default Header;