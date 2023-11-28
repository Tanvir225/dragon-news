import { useState } from "react";
import PropTypes from 'prop-types';

const NewsDes = ({description}) => {

    //state for show more
    const [isShowMore,setShowMore] = useState(false)






    return (
        <div className="text-gray-500 text-sm">
            {
                isShowMore ? description : `${description.substring(0,150)}... `
            }
            <small className="cursor-pointer text-orange-500 font-semibold underline ml-1" onClick={()=> setShowMore(!isShowMore)}>{isShowMore ? ' show less..' : ' read more..'}</small>
        </div>
    );
};

NewsDes.propTypes = {
    description:PropTypes.string.isRequired,
}

export default NewsDes;