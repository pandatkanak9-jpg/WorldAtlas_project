import { NavLink } from "react-router-dom";
import { TbBrandLeetcode, TbBrandLinkedinFilled } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const FooterInfo = () => {

    return (
        <footer className="footer-section">
            <div className="container-footer grid ">
                        <div className="footer-contact">
                            <div className="icon"><TbBrandLinkedinFilled color="white" size={30}/></div>
                            <div className="footer-contact-text">
                                <p><a href="https://www.linkedin.com/in/kanak-pandat-014792375/">Leetcode</a></p>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div className="icon"><FaSquareGithub color="white" size={30}/></div>
                            <div className="footer-contact-text">
                                <p><a href="https://github.com/pandatkanak9-jpg">GitHub</a></p>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div className="icon"><SiLeetcode color="white" size={30}/></div>
                            <div className="footer-contact-text">
                                <p><a href="https://leetcode.com/u/kanak_pandat/">Leetcode</a></p>
                            </div>
                        </div>
                        
                    </div>    

            <div className="copyright-area">
                <div className="container">
                    <div className="grid">
                        <div className="copyright-text">
                            <p>Copyright &copy: 2026, All Right Reserved 
                                {/* <a href=" https://pandatkanak9-jpg.github.io/profile/">My Portfolio Page</a> */}
                                <NavLink href=" https://pandatkanak9-jpg.github.io/profile/" target="_blank">My Portfolio Page</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    ); 
};