import { View, Text, StyleSheet} from "react-native";
import { FormInputLarge } from "../index";
import useAppFonts from "../theme/fonts";
import Colors from "../theme/colors";
export function CreateForm() {
    const fonts = useAppFonts();
    if (!fonts) return null;
    return(
        <View style={styles.container}>
            <FormInputLarge title="Kule"/>
            <FormInputLarge title="Lokasyon"/>
            <FormInputLarge title="Ekipman"/>
            <FormInputLarge title="Serino"/>
            <FormInputLarge title="Marka/Model"/>
            <FormInputLarge title="Benzersiz Barkod"/>
            <FormInputLarge title="Arızanın Tanımı"/>
            <FormInputLarge title="Arızanın Tipi (elektronik, yazılım, mekanik vb.)"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
});

export default CreateForm