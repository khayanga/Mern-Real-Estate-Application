import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebas'
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/User/userSlice'
import {useNavigate} from 'react-router-dom'

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: result.user.displayName,
                  email: result.user.email,
                  photo: result.user.photoURL,
                }),
              });

            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')

        }catch(error){
            console.log("Cannot sign in with Google",error)
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-600 text-white p-3 rounded-lg
    uppercase hover:opacity-95 w-64 mx-auto'>
        Continue with Google
    </button>
  )
}

export default OAuth