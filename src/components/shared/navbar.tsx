import { navLink } from "@/constants";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { useUserState } from "@/store/user.store";
import UserBox from "./user-box";

export default function navbar() {
    const { user } = useUserState()
    console.log(user);

    return (
        <div className='w-full h-[10vh] border-b fixed inset-0 z-50 bg-background'>
            <div className='container max-w-6xl mx-auto h-full flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-2xl font-bold uppercase'>
                        workout
                    </h1>
                </Link>
                <div className="flex items-center gap-3">
                    {navLink.map(nav =>
                        <a href={nav.path}
                            key={nav.path}
                            className="font-medium hover:underline"
                        >
                            {nav.label}
                        </a>
                    )}
                    <ModeToggle />
                    {
                        user ? (
                            <UserBox />
                        ) : (
                            <Link to='/auth'>
                                <Button variant={"secondary"}>
                                    Join Free
                                </Button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
