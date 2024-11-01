import featuredImg from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className="px-10 lg:px-32 bg-fixed py-24 text-white bg-black/50 bg-blend-multiply featured my-16">
            <div className="text-center md:w-1/2 lg:w-4/12 mx-auto mb-10">
            <p className="text-lg md:text-xl italic text-yellow-300 mb-4">--- Check it Out ---</p>
            <h2 className="text-white font-medium border-y-2 py-5 text-2xl md:text-4xl">FROM OUR MENU</h2>
            
        </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1"><img className="rounded" src={featuredImg} alt="" /></div>
                <div className="flex-1">
                    <h4 className="text-2xl">March 23, 2029</h4>
                    <h5 className="text-2xl my-2">WHERE CAN I GET SOME ?</h5>
                    <p className="text-justify text-xs lg:text-base">Our restaurant showcases seasonal special items, including our creamy truffle mushroom risotto and flavorful grilled lemon herb chicken served with quinoa salad. We also feature a daily special based on local market finds, all complemented by a curated wine selection for a memorable dining experience. Check our website for details.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white mt-6'>Order-Now</button>
                </div>
            </div>
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;