import { getServerSession } from "next-auth";
import Button from "../components/button/button.component";

const ServerActions = async () => {
    const user = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.name || "Not Logged In";
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white py-20">
            <div className="container">
                <Button action={ user }>Check User</Button>
            </div>
        </div>
    )
}   

export default ServerActions;