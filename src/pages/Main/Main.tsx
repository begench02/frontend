import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Reducer
import { getUsers, UserType } from '../../redux/main/MainReducer';
// Store
import { AppStateType } from '../../redux/store';
// Components
import { UsersEditModal } from './UsersEditModal/UsersEditModal';
import { AddUserModal } from './AddUserModal/AddUserModal';
import { Button } from '@mui/material';
// Styles
import styles from './Main.module.css';

export const Main = () => {
    const dispatch = useDispatch();

    // Local store
    const [clickedUserId, setClickedUserId] = useState(null as number | null);
    const [modalShown, setModalShown] = useState(false);
    const [addUserModalShown, setAddUserModalShown] = useState(false);

    // Global state
    const users = useSelector((state: AppStateType) => state.main.users);
    const role_id = useSelector((state: AppStateType) => state.auth.role_id);
    
    // Functions
    const onEditButtonClick = (id: number) => {
        setClickedUserId(id);
        setModalShown(true);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    return (
        <div>
            {users?.map((user: UserType) => (
                <div className={styles.user_block}>
                    <div>
                        ID: {user.id}
                    </div>
                    <div>
                        Name: {user.name}
                    </div>
                    <div>
                        Username: {user.username}
                    </div>
                    <div>
                        Email: {user.email}
                    </div>
                    <div>
                        Street: {user.address.city}
                    </div>
                    <div>
                        Suite: {user.address.suite}
                    </div>
                    <div>
                        City: {user.address.city}
                    </div>
                    <div>
                        Zipcode: {user.address.zipcode}
                    </div>
                    <div>
                        Lat: {user.address.geo.lat}
                    </div>
                    <div>
                        Lat: {user.address.geo.lng}
                    </div>
                    <div>
                        Phone: {user.phone}
                    </div>
                    <div>
                        Company name: {user.company.name}
                    </div>
                    <div>
                        Catch phrase: {user.company.catchPhrase}
                    </div>
                    <div>
                        BS: {user.company.bs}
                    </div>
                    {role_id === 0
                        ? 
                            <div>
                                <Button onClick={() => onEditButtonClick(user.id)} variant='contained' color='info'>Edit</Button>
                            </div>
                        :
                            null
                    }

                </div>
            ))}
            {role_id === 0
                ? 
                    <div className={styles.add_user_block}>
                        <Button onClick={() => setAddUserModalShown(true)} variant='contained' color='success'>Добавить пользователя</Button>
                    </div>
                :
                    null
            }
            {modalShown
                ?
                    <UsersEditModal isOpen={modalShown} id={clickedUserId} changeIsOpen={setModalShown} />
                :
                    null
            }
            {addUserModalShown
                ?
                    <AddUserModal isOpen={addUserModalShown} changeIsOpen={setAddUserModalShown}/>
                :
                    null
            }
        </div>
    );
};