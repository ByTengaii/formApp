import { useState } from "react";
import { View } from "react-native";
import { SpareTable, FormTitle, AddSpareButton } from "../index";

interface SpareParts {
    id: number;
    stockCode: string;
    usedAmount: number;
    materialDescription: string;
};
export function TakeSpareParts() {
    const [items, setItems] = useState([] as SpareParts[]);

    return (
        <View>
            <FormTitle title="Kullanılan Yedek Parçalar" style={{ marginBottom: 10 }} />
            {items.map((item) => {
                return <SpareTable data={{items, setItems}} element={item}  style={{ marginBottom: 10 }} />;
            })}
            <AddSpareButton  data={{items, setItems}}/>
        </View>
    );
} 