import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import CapsuleList from "../components/capsule-listing/capsule-listing.component";

const Capsules = async () => {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect('/')
    }
    
    return (
        <main className="bg-zinc-950 pt-10" style={{minHeight: "calc(100vh - 70px)"}}>
            <CapsuleList />
        </main>
    )
}

export default Capsules