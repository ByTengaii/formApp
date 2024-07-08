import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import { FormProps, Item} from "../../models/";
import { AddingWorkshop, ContinueButton, GoBackButton, TakeTime, SwitchQuestion} from "../../components";
import Colors from "../../theme/colors";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";


const items = [
    { id: 1, name:'contact' ,type: 'toggle', title: "Atölye ile irtibata geçildi mi ?" },
    { id: 2, name:'workshopNames' ,type: 'adding', title: "Müdahale ettiyse hangi atölye(ler) ?" },
    { id: 3, name: 'comingTime',title: "Atölye Gelme Süresi (sa & dk)" },
    { id: 4, name: 'identificationTime',title: "Teşhis Süresi (sa & dk)" },
    { id: 5, name: 'repairTime',title: "Tamir / Demontaj Süresi (sa & dk)" },
    { id: 6, name: 'waitingTime',title: "Yedek Parça Bekleme Süresi (sa & dk)" },
    { id: 7, name: 'montageTime',title: "Montaj Süresi (sa & dk)" },
] as Item[];

type FormValues = {
    contact: boolean,
    workshopNames: string[] | undefined,
    /*comingTime: string,
    identificationTime: string,
    repairTime: string,
    waitingTime: string,
    montageTime: string,*/
};

const FormSchema : ZodType<FormValues> = z.object({
    contact: z.boolean(),
    workshopNames: z.array(z.string()).optional(),
    /*comingTime: z.string(),
    identificationTime: z.string(),
    repairTime: z.string(),
    waitingTime: z.string(),
    montageTime: z.string(),*/
}).required();


export function Form_2(props:FormProps) {
    const [isContacted, setIsContacted] = useState(false);
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
    });
    props.index.setActiveIndex(1);

    const ViewItem = ({ item }: { item: Item }) => {
        switch (item.type) {
            case 'toggle':
                return <SwitchQuestion 
                control={control}
                item={item} 
                setIsContacted={setIsContacted}
                setValue={setValue}
                />;
            case 'adding':
                return <AddingWorkshop
                control={control}
                item={item}
                isEnable={isContacted}
                />;
            default:
                return <TakeTime title={item.title} />;
        } 

    };

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={items}
                renderItem={ViewItem}
            />
            <View style={styles.submitContainer}>
                <GoBackButton/>
                <ContinueButton
                props={{
                    onPress: onSubmit,
                }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    statusBarContainer: {
        justifyContent: "flex-end",
    },
    submitContainer: {
        borderTopWidth: 1,
        borderColor: Colors.borderPrimary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
    },
});

export default Form_2