import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleLoginWithGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user ;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {})
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