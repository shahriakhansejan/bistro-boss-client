
import { FiDollarSign } from 'react-icons/fi';

const Item = ({item}) => {
    const { name, recipe, image, price } = item;

    return (
        <div className='flex mt-12 flex-col mx-3 md:mx-1 md:flex-row pb-1 items-center gap-8 border-b md:border-b-0'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-32' src={image} alt="" />
            <div>
                <span className='flex justify-between'>
                <h3 className='text-xl mb-2 dark1'>{name} ----</h3><p className='text-yellow-600 flex items-center text-xl'><FiDollarSign /> {price}</p>
                </span>
                <p className='dark3'>{recipe}</p>
            </div>
        </div>
    );
};

Item.propTypes = {
    
};

export default Item;