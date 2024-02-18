import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import SignIn  from './sign-in';
import SignUp from './sign-up';

const AuthPage = () => {
	return (
		<div className="flex flex-row h-screen">
			<div className="w-full md:w-3/5 flex flex-col justify-center items-center">
				<Tabs defaultValue="signin" className="w-[400px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="signin">Sign In</TabsTrigger>
						<TabsTrigger value="signup">Sign Up</TabsTrigger>
					</TabsList>
					<TabsContent value="signin">
						<SignIn />
					</TabsContent>
					<TabsContent value="signup">
						<SignUp />
					</TabsContent>
				</Tabs>
			</div>
			<div className="hidden md:block md:w-3/5 bg-gray-200">
				<h2>Bank opole</h2>
			</div>
		</div>
	)
};

export default AuthPage;
