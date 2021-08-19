import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import styles from '../styles/Home.module.css'
import {FC} from 'react';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

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
        <input defaultValue="test123@gmail.com" {...register('email')}/>
        <br/>
        <br/>
        <input  {... register('password')}/>
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
