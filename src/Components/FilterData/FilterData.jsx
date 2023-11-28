
const FilterData = ({filterData}) => {
    
    // destructure object
    const {thumbnail_url,title,author} = filterData || {}
    //console.log(filterData);
    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-40 object-cover">
                    <img className="w-full h-full"
                        src={thumbnail_url}
                        alt={`${title} image`}
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="font-bold text-gray-500">
                       sports
                    </div>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                       date: {author.published_date.slice(0,10)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FilterData;