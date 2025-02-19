'use server';

import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export async function logout(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    cookieStore.delete('org');
    permanentRedirect('/');
}