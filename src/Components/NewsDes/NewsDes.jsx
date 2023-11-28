
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsDes = ({ description, id }) => {
    

    // //state for show more
    // const [isShowMore,setShowMore] = useState(false)
   





    return (
        <div className="text-gray-500 text-sm">
            {
                description ? description.length > 200 && <>
                    `${description.substring(0, 150)}... `
                    <Link to={`/details/${id}`}  className="cursor-pointer text-orange-500 font-semibold underline ml-1">show more</Link></> : ''
            }

        </div>
    );
};

NewsDes.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default NewsDes;