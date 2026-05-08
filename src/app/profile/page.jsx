'use client';
import { UpdateUserForm } from "@/Components/UpdateUserForm";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";


const UpdateProfilePage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        
            <div className="grid justify-center border p-6 m-6 bg-slate-50 w-1/3 mx-auto gap-4">
                <div className="flex mx-auto">

                <Avatar className="w-20 h-20 rounded-full">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>
                </div>
                <h1 className="text-xl font-bold text-center">{user?.email}</h1>
                <h1 className="text-center font-semibold">{user?.name}</h1>

                <div className="flex mx-auto">

                <UpdateUserForm/>
                </div>
            </div>

       
    );
};

export default UpdateProfilePage;