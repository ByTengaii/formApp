import { View, StyleSheet} from "react-native";
import { FormPreviewCard } from "../index";



export function ViewFormList() {
    return (
        <View style={styles.container}>
            <FormPreviewCard order={1} text="BOM.RP.001 Deneme Formu" date="19.04.2024" status="Solved"  />
            <FormPreviewCard order={2} text="TPIC Form 86" date="19.04.2024" status="Temporary Solution"  />
            <FormPreviewCard order={3} text="BOM.RP.001 Deneme Formu" date="19.04.2024" status="Not Solved"  />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1 , 
        backgroundColor:'white',
        paddingVertical: 16,
        paddingHorizontal: 20,
    }
});

export default ViewFormList;
