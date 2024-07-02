import { View } from "react-native";
import { SpareTable, FormTitle, AddButton } from "../index";

export function TakeSpareParts() {
    return (
        <View>
            <FormTitle title="Kullanılan Yedek Parçalar" style={{marginBottom:10}}/>
            <SpareTable style={{marginBottom:10}}/>
            <AddButton/>
        </View> 
    );
} 