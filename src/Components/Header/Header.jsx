import headerImage  from "../../assets/logo.png"
import moment from "moment/moment";



const Header = () => {
    return (
        <div className="text-center space-y-5 mt-16">
            <img src={headerImage} className="mx-auto" alt={`this image for header`} />
            <p className="text-gray-500 text-lg">Journalism Without Fear or Favour</p>
            <p className="text-gray-600 font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;