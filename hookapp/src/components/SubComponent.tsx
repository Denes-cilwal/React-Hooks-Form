import React, {FC} from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {TextField}from "@material-ui/core";


const SubComponent : FC = ()=>{
    const {control,formState:{errors}} = useFormContext()
  return(
      <>
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
      </>
  )
}

export default SubComponent;