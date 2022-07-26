export default function signUp(){
    return (<div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
                    <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Fullname
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Fullname" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        SignIn
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    SignUp
                    </button>
                    
                    </div>
                </form>
                <p className="text-center text-grey text-xs">
                    ©2018 Acme Corp. All rights reserved.
                </p>
                </div>
                </div>
    </div>)
}