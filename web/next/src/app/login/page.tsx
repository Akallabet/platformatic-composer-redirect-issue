import { signIn } from "@/auth";

export default async function Login() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn();
			}}
		>
			<button type="submit">Sign in</button>
		</form>
	);
}
