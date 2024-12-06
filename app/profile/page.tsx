"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile = () => {
    const { data: session, status } = useSession();
    
    if (status === "unauthenticated") {
        return (
            <div className="flex flex-col justify-center items-center bg-blue-200 p-4 text-blue-500">
                <p>You are not signed in.</p>
            </div>
        );
    }
    //not sure why this is necessary if already checking authentication
    if (!session || !session.user) {
        return <div>No session available</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center bg-blue-200 p-4">
            <h2 className="text-xl font-bold">Profile</h2>
            <div className="flex flex-col items-center mt-4">
                <img
                    src={session.user.image || "/default-avatar.png"}
                    alt="Profile Image"
                    className="w-32 h-32 rounded-full"
                />
                <p className="mt-2 text-xl">{session.user.name}</p>
                <p className="mt-1 text-md text-blue-500">{session.user.email}</p>
                <p className="mt-1 text-md text-blue-500">GitHub Username: {session.user.name}</p>
                <p className="mt-1 text-md text-blue-500">Signed in with GitHub</p>
            </div>
        </div>
    );
};
export default Profile;


