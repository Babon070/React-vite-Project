import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const Social = () => {
    return (
        <>
            <Separator className='my-3' />
            <div className='grid grid-cols-2 gap-2'>
                <Button className='h-12' variant={'secondary'}>
                    <FaGithub />
                    <span>Sign in with Github</span>
                </Button>
                <Button className='h-12' variant={'destructive'}>
                    <FaGoogle />
                    <span>Sign in with Google</span>
                </Button>
            </div>
        </>
    );
}

export default Social;
