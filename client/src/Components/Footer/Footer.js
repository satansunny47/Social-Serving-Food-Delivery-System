import './footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa"
const Footer = () => {
    const fstyle ={color: "white", fontSize:"1.5em"};
    const tstyle ={color: "white", fontSize:"1.5em"};
    const ystyle ={color: "red", fontSize:"1.5em"};
    const istyle ={color: "pink", fontSize:"1.5em"};
    return (
        <div id="footer" className="footer">
            <div className="upper">
                <div className="social">
                    <span>NPO</span>
                    <div><p>Developed by Tireless Whoopers</p></div>
                    <div class="icon">
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebookF style={fstyle}/></a>
                        <a href="https://twitter.com/" target="_blank"><FaTwitter style={tstyle}/></a>
                        <a href="https://www.youtube.com.com/" target="_blank"><FaYoutube style={ystyle}/></a>
                        <a href="https://instagram.com/" target="_blank"><FaInstagram style={istyle}/></a>
                    </div>
                </div>
            </div>
            <div className="lower">
                <span>Copyright &#169; Non Profit Organization</span>
                <a href="" target="_blank">Privacy Policy</a>
            </div>
        </div >
    );
}

export default Footer;