import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/auth/[...nextauth]/route';
import Providers from "../components/provider/provider.component";
import Profile from "../components/profile/profile.component";

import "./sign-in.style.scss";


const SignIn = async () => {
    const session = await getServerSession();
    const providers = await getProviders();

    return (
        <main className="sign-in">
            <div className="bg-zinc-950 text-white py-20 md:py-24 flex items-center">
                <div className="container">
                    <div className="wrapper bg-white text-black p-10 max-w-xs mx-auto">
                        {
                            (!session || !session.user) && 
                                Object.values(providers).map((provider) => ( 
                                    <Providers key={ provider.id } otherprops = { provider } />
                                ))
                        }
                        {
                            (session && session.user) && 
                                <Profile details={ session.user } />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn;