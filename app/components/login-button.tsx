import { auth } from "@/app/auth";
import { SignIn, SignOut } from "./auth-components";

export default async function LogButton() {
    const session = await auth();
    if (!session?.user) return <SignIn />
    return (
        <SignOut />
    )
}
