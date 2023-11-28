
import Header from '../../Components/Header/Header';
import RightSidebar from '../../Components/RighSidebar/RightSidebar';
import Navbar from '../../Components/Navbar/Navbar';

const NewsDes = () => {
 
    return (
        <div className='space-y-5'>
           <Header></Header>
           <Navbar></Navbar>
           <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-3'>
                    News
                </div>

                <div>
                    <RightSidebar></RightSidebar>
                </div>
           </div>
        </div>
    );
};

export default NewsDes;