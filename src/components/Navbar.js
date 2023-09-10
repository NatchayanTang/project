import logo from "../assets/icons/user.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import line from "../assets/icons/line.png";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={50} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://th-th.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" width={30} /> {""}
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" width={30} /> {""}
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://line.me/th/" target="_blank">
                        <img src={line} alt="line" width={30} /> {""}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;