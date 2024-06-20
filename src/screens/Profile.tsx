import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../theme/colors';
import useAppFonts from '../theme/fonts';
import { ExitButton } from '../index';
interface ProfileProps {
    name: string;
    surname: string;
    email: string;
    title: string;
    pPicture: string | null;
}
export function Profile() {
    const profilePic = require('../../assets/avatar.png');
    const fonts = useAppFonts();
    if (!fonts) return null;
    return (
        <View style={styles.container} >
            <View style={styles.banner}>
                <Image
                    source={profilePic}
                    style={styles.profilePic}
                />
                <Text style={styles.name}>İsim Soyisim</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Görevi</Text>
                <Text style={styles.info}>Operatör</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>E-Mail</Text>
                <Text style={styles.info}>deneme@gmail.com</Text>
            </View>    
            <View style={styles.exitContainer}>
                <ExitButton/>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom:16,
    },
    banner: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profilePic: {
        width: 64,
        height: 64,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: 'Inter_600SemiBold',
    },
    infoContainer: {
        marginBottom: 16,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    title: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_600SemiBold",
        color: Colors.secondary,
    },
    info: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: "Inter_600SemiBold",
        color: Colors.primary,
    },
    exitContainer: {
        alignSelf: 'stretch',
        marginTop: 'auto',
    }
});

export default Profile;
