import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";

const ProtectedRoute = async () => {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect('/')
    }
    return (
        <main>
            <div className="min-h-screen bg-zinc-950 text-white py-20">
            <div className="container">
                <h1 className="text-4xl">You are on a protected Route</h1>
            </div>
            </div>
        </main>
    )
}

export default ProtectedRoute;