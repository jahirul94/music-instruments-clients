import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const handleLoginWithGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user ;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email , role : "regular" , image : loggedInUser.photoURL}
            fetch('https://music-instrument-server-navy.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    Swal.fire(
                        'Done!',
                        'Your Account Login Successfully.',
                        'success'
                    )
                    navigate("/")
                })
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