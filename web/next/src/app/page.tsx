import { SignIn } from "@/lib/auth/components/signin";
import { redirect } from "next/navigation";

const signIn = async () => {
	return redirect("/api/auth/signin");
};

export default async function Home() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn();
				// await signinToKeycloak();
			}}
		>
			<button>Sign In</button>
		</form>
	);
}
