import { View, Text } from 'react-native';

interface ProfileProps {
    name: string;
    surname: string;
    email: string;
    title: string;
    pPicture: string | null;
}
export function Profile (){
    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    )
}

export default Profile;
