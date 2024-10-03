import { Link } from "react-router-dom";


import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

 const SignUp = () => {
  const {
    register,
    handleSubmit,
 
    
    formState: { errors },
  } = useForm();
  const onSubmit=data=>{
    console.log(data);
    // fetch("https://api.imgbb.com/1/upload?key=00d06510cc396c061b24a569a4767059",{
    //   method:"POST",
    //   body:data
    // }).then(res=>res.json())
    // .then(data=>console.log(data))
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-amber-500 font-bold">
            Sign Up for FlavourVista
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                
                required
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label  className="block mb-2 text-sm">
              Image URL
              </label>
             
               <input
              type="url"
              {...register("image")}
                 className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
            />
        
               {errors.image && (
                  <span className="text-red-600">Image is required</span>
                )}
            </div>
            {/* <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                {...register("image")}
                accept="image/*"
              />
               {errors.image && (
                  <span className="text-red-600">Image is required</span>
                )}
            </div> */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
               {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password")}
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
              />
               {errors.password && (
                  <span className="text-red-600">password is required</span>
                )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-amber-500 w-full rounded-md py-3 text-white"
            >
              { (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
         
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-emerald-400-500 text-amber-500"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;