"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("Logout Meow");
        router.push("/");
    };

    return (
        <>
            Dashboard is here
            <Button
                className=""
                type="button"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </>
    );
}
