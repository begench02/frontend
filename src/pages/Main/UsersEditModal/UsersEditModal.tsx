import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
// Reducer
import { MainActions } from "../../../redux/main/MainReducer";
// Types
import { AppStateType } from "../../../redux/store";
// Helpers
import { PrepareUserData } from "../../../helpers/prepareUserData";
// Images
import x from '../../../images/x.png';

export const UsersEditModal = (props: PropsType) => {
    const dispatch = useDispatch();

    // Global store
    const user = useSelector((state: AppStateType) => state.main.users?.filter((user) => user.id === props.id)[0]);

    // Functions
    const onFormSubmit = (userData: UserInputType) => {
        props.changeIsOpen(false);
        const preparedData = PrepareUserData(userData);
        dispatch(MainActions.changeUserData(preparedData));
    }

    // Local store
    const { register, handleSubmit } = useForm({
        defaultValues: {
          id: user?.id,
          name: user?.name,
          username: user?.username,
          email: user?.email,
          street: user?.address.street,
          suite: user?.address.suite,
          city: user?.address.city,
          zipcode: user?.address.zipcode,
          lat: user?.address.geo.lat,
          lng: user?.address.geo.lng,
          phone: user?.phone,
          website: user?.website,
          company_name: user?.company.name,
          catchPhrase: user?.company.catchPhrase,
          bs: user?.company.bs,
        }
      })


    return (
        <ReactModal className='module' isOpen={props.isOpen}>
            <form onSubmit={handleSubmit(onFormSubmit)} className='user_input_main_block'>
                <div onClick={() => props.changeIsOpen(false)} className='close'> <img alt='X' src={x}/> </div>
                <TextField label='Id' {...register('id')}/>
                <TextField label='Name' {...register('name')}/>
                <TextField label='Username' {...register('username')}/>
                <TextField label='Email' {...register('email')}/>
                <TextField label='Street' {...register('street')}/>
                <TextField label='Suite' {...register('suite')}/>
                <TextField label='City' {...register('city')}/>
                <TextField label='Zipcode' {...register('zipcode')}/>
                <TextField label='Lat' {...register('lat')}/>
                <TextField label='Lng' {...register('lng')}/>
                <TextField label='Phone' {...register('phone')}/>
                <TextField label='Website' {...register('website')}/>
                <TextField label='Company name' {...register('company_name')}/>
                <TextField label='catchPhrase' {...register('catchPhrase')}/>
                <TextField label='BS' {...register('bs')}/>
                <Button type='submit' variant='contained'>Сохранить</Button>
            </form>
        </ReactModal>
    );
}

type PropsType = {
    isOpen: boolean;
    changeIsOpen: (bool: boolean) => void;
    id: number | null;
};

export type UserInputType = {
    id: number;
    name: string;
    username: string;
    email: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    lat: string;
    lng: string;
    phone: string;
    website: string;
    company_name: string;
    catchPhrase: string;
    bs: string;
};