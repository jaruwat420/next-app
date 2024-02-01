import Input from "./Input"
export default function LoginForm() {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-green-500">LOGIN</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email </span>
                        </label>
                        <Input
                            type="text"
                            placeholder="UserName"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-active btn-secondary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}