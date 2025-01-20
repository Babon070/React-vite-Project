import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import FillLoading from '../shared/fill-loading';

const Social = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const onGoole = () => {
        setIsLoading(true)
        const gooleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, gooleProvider).then(() => {
            navigate('/')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const onGitHub = () => {
        setIsLoading(true)
        const GitHubProvider = new GithubAuthProvider()
        signInWithPopup(auth, GitHubProvider).then(() => {
            navigate('/')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <>
            {isLoading && <FillLoading />}
            <Separator className='my-3' />
            <div className='grid grid-cols-2 gap-2'>
                <Button className='h-12' variant={'secondary'} disabled={isLoading} onClick={onGitHub} >
                    <FaGithub />
                    <span>Sign in with Github</span>
                </Button>
                <Button className='h-12' variant={'destructive'} disabled={isLoading} onClick={onGoole}>
                    <FaGoogle />
                    <span>Sign in with Google</span>
                </Button>
            </div>
        </>
    );
}

export default Social;
