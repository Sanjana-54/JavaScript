import {useState}  from 'react'
import {useForm} from 'react-hook-form'
function UserForm(){
    const{users,setUsers}=useState({});
    const {
        register, //to register form fields
        handleSubmit, //to handle for submission
        formState:{errors} //to handle validation
    }=useForm();

    //form submit fn
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
    return(
        <div>
            <h1 className='text-3xl text-cyan-800 font-bold text-center mt-10'>Form</h1>
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
             <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" {...register("firstname",{
                    required:"firstname required",
                    validate:(v)=>v.trim().length===0|| "White space isn't valid"
                   
                })}
                id="firstname"
                className='border w-full p-3'></input>

                {/* FIRSTNAME VALIDATION ERROR MESSAGE */}
                {errors.firstname?.type==="required" && <p className='text-red-700'>{errors.firstname.message}</p>}
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" {...register("email",{
                    required:"email required",
                    validate:(v)=>v.trim().length===0|| "White space isn't valid"
                 
                })}
                id="email"
                className='border w-full p-3'></input>

                {/* EMAIL VALIDATION ERROR MESSAGE */}
                {errors.email?.type==="required" && <p className='text-red-700'>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="dateofbirth">dateofbirth</label>
                <input type="text" {...register("dateofbirth",{
                    required:"dateofbirth required",
                    validate:(v)=>v.trim().length===0|| "White space isn't valid"
                 
                })}
                id="dateofbirth"
                className='border w-full p-3'></input>
                {/* FIRSTNAME VALIDATION ERROR MESSAGE */}
                {errors.dateofbirth?.type==="required" && <p className='text-red-700'>{errors.dateofbirth.message}</p>}
            </div>
            <button className='p-3 bg-pink-600 mt-3 '>Add user</button>
        </form>
          <h1 className='text-3xl font-bold text-cyan-900 text-center'>List Of Users</h1>
          <table>
            <thead>
                <tr>
                    <th className='text-sm gap-5'>firstname</th>
                    <th className='text-sm gap-5'>email</th>
                    <th className='text-sm gap-5'>dateofbirth</th>
                </tr>
            </thead>
          </table>
    

        </div>
    )
}
export default UserForm;