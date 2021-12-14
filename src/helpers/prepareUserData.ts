import { UserInputType } from './../pages/Main/UsersEditModal/UsersEditModal';


export const PrepareUserData = (userInputData: UserInputType) => {
    return {
        id: userInputData.id,
        name: userInputData.name,
        username: userInputData.username,
        email: userInputData.email,
        address: {
            street: userInputData.street,
            suite: userInputData.suite,
            city: userInputData.city,
            zipcode: userInputData.zipcode,
            geo: {
                lat: userInputData.lat,
                lng: userInputData.lng,
            }
        },
        phone: userInputData.phone,
        website: userInputData.website,
        company: {
            name: userInputData.company_name,
            catchPhrase: userInputData.catchPhrase,
            bs: userInputData.bs
        }
    };
}