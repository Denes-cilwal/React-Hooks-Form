import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import styles from '../styles/Home.module.css'
import {FC} from 'react';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {TextField} from "@material-ui/core";

interface IFormInput {
  email : string;
  password : string;
}

// validate can be done with schema instead of applying directly to element
const schema = yup.object().shape({
  email : yup.string().email().required(),
  password: yup.string().min(4).max(20).required()
})

const Home: FC = () => {
  const {
    register,
      control,
    handleSubmit,
    watch,
    formState:{errors}} = useForm<IFormInput>(
      // integrate schema to our app
        {
        resolver:yupResolver(schema)
      }
  )

  // using form state we can access the error object to see
  // if error exist.

  const formSubmitHandler : SubmitHandler<IFormInput> = (data:IFormInput) =>{
    console.log("form data is :", data)
  }

console.log("error is", errors)
console.log('watch variable is ', watch('email'))
  // on submit : pass in form data that we gone get it from registers here
  // pass that into handler function and execute it.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* to work with UI  Controller */}
        {/* render a component controller by Controller */}
        <Controller name="email"
                    control={control}
                    defaultValue="test@123@gmail.com"
                     render={({ field}) =>(
                         <TextField
                             // grabbing (name, control, defaultValue)
                             // and passing here to text-field component
                             {...field}
                            label = "Email"
                             variant="outlined"
                              error={!!errors.email}
                             helperText={errors.email ? errors.email.message : ""}
                         />
                     ) }
        />
          <br/>
          <br/>
        <Controller name="password"
                    control={control}
                    render={({ field}) =>(
                        <TextField
                            // grabbing (name, control)
                            // and passing here to text-field component
                            {...field}
                            type="password"
                            label = "Password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ""}
                        />
                    ) }
        />
        {/*if error exist in field password show this error*/}
        {errors.password && errors.password?.message&& <span>{errors.password.message}</span>}
        <br/>
          <br/>
        <input type="submit"/>
      </form>
      </main>
    </div>
  )
}

export default Home
