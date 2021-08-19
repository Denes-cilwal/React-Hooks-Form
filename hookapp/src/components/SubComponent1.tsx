// formprovider  to use same state
// form context : same context from form provider
import React, {FC} from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {TextField}from "@material-ui/core";

const SubComponent2 : FC = ()=>{
    const {control,formState:{errors}} = useFormContext()
    return(
        <>
            {/* to work with UI  Controller */}
            {/* render a component controller by Controller */}
            <Controller name="firstName"
                        control={control}
                        render={({ field}) =>(
                            <TextField
                                // grabbing (name, control, defaultValue)
                                // and passing here to text-field component
                                {...field}
                                label = "First Name"
                                variant="outlined"
                                error={!!errors.FirstName}
                                helperText={errors.FirstName ? errors.FirstName.message : ""}
                            />
                        ) }
            />
            <br/>
            <br/>
            <Controller name="lastName"
                        control={control}
                        render={({ field}) =>(
                            <TextField
                                // grabbing (name, control)
                                // and passing here to text-field component
                                {...field}
                                label = "Last Name"
                                variant="outlined"
                                error={!!errors.LastName}
                                helperText={errors.LastName ? errors.LastName.message : ""}
                            />
                        ) }
            />
        </>
    )
}

export default SubComponent2;