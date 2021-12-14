import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
// Components
import { Button, TextField } from "@mui/material";
// Reducer
import { MainActions } from "../../../redux/main/MainReducer";
import { UserInputType } from "../UsersEditModal/UsersEditModal";
// Helpers
import { PrepareUserData } from "../../../helpers/prepareUserData";
// Images
import x from '../../../images/x.png';


export const AddUserModal = (props: PropsType) => {
    const dispatch = useDispatch();
    // Local store
    const { register, handleSubmit } = useForm();

    // Functions
    const onFormSubmit = (userInputData: UserInputType) => {
        props.changeIsOpen(false);
        const preparedData = PrepareUserData(userInputData);
        dispatch(MainActions.addNewUser(preparedData));
    };


    return (
        <ReactModal isOpen={props.isOpen} className='module'>
            <form className='user_input_main_block' onSubmit={handleSubmit(onFormSubmit)}>
                <div onClick={() => {props.changeIsOpen(false)}} className='close'><img alt='X' src={x}/></div>
                <TextField label='Id' {...register('id', {required: true})} />
                <TextField label='Name' {...register('name', {required: true})} />
                <TextField label='Username' {...register('username', {required: true})}/>
                <TextField label='Email' {...register('email', {required: true})}/>
                <TextField label='Street' {...register('street', {required: true})}/>
                <TextField label='Suite' {...register('suite', {required: true})}/>
                <TextField label='City' {...register('city', {required: true})}/>
                <TextField label='Zipcode' {...register('zipcode', {required: true})}/>
                <TextField label='Lat' {...register('lat', {required: true})}/>
                <TextField label='Lng' {...register('lng', {required: true})}/>
                <TextField label='Phone' {...register('phone', {required: true})}/>
                <TextField label='Website' {...register('website', {required: true})}/>
                <TextField label='Company name' {...register('company_name', {required: true})}/>
                <TextField label='catchPhrase' {...register('catchPhrase', {required: true})}/>
                <TextField label='BS' {...register('bs', {required: true})}/>
                <Button type='submit' variant='contained' color='success'>Добавить</Button>
            </form>
        </ReactModal>
    );
};


type PropsType = {
    isOpen: boolean;
    changeIsOpen: (bool: boolean) => void;
}