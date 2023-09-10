import avartar from "../assets/icons/man.png";
import { useNavigate } from "react-router-dom";
function LandingPage () {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    };
    return(
        <div className="text-center font-mono">
            <p className="font-mono text-2xl font-bold uppercase">About Me</p>
            <div className="flex justify-center">
            <img
            src={avartar}
            alt="avatar"
            className="w-[20%] my-3 bg-white rounded-full p-6"
            />
            </div>
            <p className="text-md mt-2 font-bold text-white mx-36">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." <br />
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>{" "}
            <button className="text-xl text-[#c41411] underline" 
            onClick={() => handleToDetail()}>
            NEXT
            </button>
        </div>
    );
}

export default LandingPage;