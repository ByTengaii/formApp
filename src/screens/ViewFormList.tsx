import { View, StyleSheet} from "react-native";
import { FormPreviewCard } from "../index";


const exampleData = [
    {
        text: "BOM.RP.001 Deneme Formu",
        date: "19.04.2024",
        status: "Solved"
    },
    {
        text: "TPIC Form 86",
        date: "19.04.2024",
        status: "Temporary Solution"
    },
    {
        text: "BOM.RP.001 Deneme Formu",
        date: "19.04.2024",
        status: "Not Solved"
    }
];

export function ViewFormList() {
    return (
        <View style={styles.container}>
            <FormPreviewCard index={1} data={exampleData[0]}  />
            <FormPreviewCard index={2} data={exampleData[1]}  />
            <FormPreviewCard index={3} data={exampleData[2]}  />

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
