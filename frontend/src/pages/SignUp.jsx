import { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignUp = () => {

    const [showpassword,setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : "",
        profilePic : ""
    })

    const handleOnChange = (e)=> {
        const {name, value} = e.target

        setData((prev)=> {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefalult();
    }

    return (
        <section id="login">
            <div className="mx-auto container p-4">
                <div className="bg-white p-2 w-full max-w-sm  mx-auto rounded">
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcon} alt="loginicons" />
                    </div>

                    <form className="pt-10 flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="grid">
                            <label htmlFor="email">Username :</label>
                            <div className="bg-slate-200 p-2">
                                <input type="text" 
                                placeholder="enter your usename" 
                                onChange={handleOnChange}
                                name="name"
                                value={data.name}
                                className="w-full h-full outline-none bg-transparent" />
                            </div>
                        </div>
                        <div className="grid">
                            <label htmlFor="email">Email :</label>
                            <div className="bg-slate-200 p-2">
                                <input type="email" 
                                placeholder="enter your email" 
                                onChange={handleOnChange}
                                name="email"
                                value={data.email}
                                className="w-full h-full outline-none bg-transparent" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Password :</label>
                            <div className="bg-slate-200 p-2 flex">
                                <input type={showpassword ? "text" : "password" } 
                                placeholder="enter your password" 
                                onChange={handleOnChange}
                                name="password"
                                value={data.password}
                                className="w-full h-full outline-none bg-transparent" />
                                <div className="cursor-pointer" onClick={()=> {setShowPassword((prev)=>!prev)}}>
                                    <span>
                                        {
                                            showpassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                       
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Password :</label>
                            <div className="bg-slate-200 p-2 flex">
                                <input type={showConfirmPassword ? "text" : "password" } 
                                placeholder="enter your password" 
                                onChange={handleOnChange}
                                name="confirmPassword"
                                value={data.confirmPassword}
                                className="w-full h-full outline-none bg-transparent" />
                                <div className="cursor-pointer" onClick={()=> {setShowConfirmPassword((prev)=>!prev)}}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                       
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-90 transition-all mx-auto block mt-7  ">SignUp</button>
                    </form>
                    <p className="my-5 ">Already have account ? <Link to={"/login"} className="text-red-500 hover:text-red-700 hover:underline"> Login </Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp;