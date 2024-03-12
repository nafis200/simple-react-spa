
import profile from '../../../src/ItemID6769.jpg'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4'>
            <h1 className="text-4xl font-bold roboto-bold">Knowledge cafe</h1>
            <img src={profile} className=' w-48 h-48 rounded-full' alt="" />
        </header>
    );
};

export default Header;

