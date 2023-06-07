import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleLoginWithGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user ;
            console.log(user);
        })
        .catch( err => {
            console.log(err.message);
        })
    }
    return (
        <div className='flex justify-center -mt-4 mb-5'>
            <button onClick={handleLoginWithGoogle} className='flex btn btn-primary text-white w-[85%]'>Login With <FaGoogle className='text-xl'></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;