import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import styles from '../styles/Home.module.css'
import {FC} from 'react';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import SubComponent from "../src/components/SubComponent";
import SubComponent1 from "../src/components/SubComponent1";

interface IFormInput {
  email : string;
  password : string;
  firstName : string;
  lastName :string
}

// validate can be done with schema instead of applying directly to element
const schema = yup.object().shape({
  email : yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required()
})

const Home: FC = () => {
  // provide methods to subcomponents
  const methods = useForm<IFormInput>(
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


console.log('watch variable is ', methods.watch('email'))
  // on submit : pass in form data that we gone get it from registers here
  // pass that into handler function and execute it.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <FormProvider  {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <SubComponent/>
            <SubComponent1/>
            <input type="submit"/>
          </form>
        </FormProvider>

      </main>
    </div>
  )
}

export default Home
