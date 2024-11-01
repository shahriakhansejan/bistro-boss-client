

const Title = ({title, subTitle}) => {
    return (
        <div className="text-center md:w-1/2 lg:w-5/12 mx-auto mt-16">
            <p className="text-lg md:text-xl italic text-yellow-600 mb-4">--- {subTitle} ---</p>
            <h2 className="text-[#151515] font-medium border-y-2 py-5 text-2xl md:text-4xl">{title}</h2>
            
        </div>
    );
};


export default Title;