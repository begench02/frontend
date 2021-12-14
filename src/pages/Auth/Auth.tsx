import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// Components
import { Button, TextField } from "@mui/material";
import { AuthActions, AuthDataType } from "../../redux/auth/AuthReducer";
// Styles
import styles from './Auth.module.css';


export const Auth = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onFormSubmitClick = (authData: AuthDataType) => {
        console.log(authData);
        dispatch(AuthActions.setAuthData(authData));
    };

    return (
        <div className={styles.main_block}>
            <div className={styles.content_block}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onFormSubmitClick)}>
                    <div className={styles.inputs_block}>
                        <TextField {...register('email')} label='Email'/>
                        <TextField {...register('password')} label='Password'/>
                    </div>
                    <div className={styles.button_block}>
                        <Button type='submit' variant='contained'>Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};