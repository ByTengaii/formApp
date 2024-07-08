import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { getForm } from '../../services/context/'
import { FormProps, Item } from "../../models";
import { SelectDateController, SelectTimeController, ContinueButton, LeaveButton, InputLargeController } from "../../components";
import { Colors } from "../../theme";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";




type FormValues = {
    tower: string,
    location: string,
    equipmant: string,
    serialNo: string,
    band: string,
    barCode: string,
    faultDefination: string,
    faultType: string,
    startDay: Date
    startTime: Date
};

const FormSchema: ZodType<FormValues> = z
    .object({
        tower: z.string(({ required_error: "Tower is required" })).min(1),
        location: z.string(({ required_error: "Location is required" })).min(1),
        equipmant: z.string(({ required_error: "Equipmant is required" })).min(1),
        serialNo: z.string(({ required_error: "Serial Number is required" })).min(1),
        band: z.string(({ required_error: "Band is required" })).min(1),
        barCode: z.string(({ required_error: "Bar Code is required" })).min(1),
        faultDefination: z.string(({ required_error: "Fault Defination is required" })).min(1),
        faultType: z.string(({ required_error: "Fault Type is required" })).min(1),
        startDay: z.date(({ required_error: "Start Day is required" })),
        startTime: z.date(({ required_error: "Start Time is required" })),
    }).required();


const items = [
    { id: 1, name: 'tower', title: "Kule" },
    { id: 2, name: 'location', title: "Lokasyon" },
    { id: 3, name: 'equipmant', title: "Ekipman" },
    { id: 4, name: 'serialNo', title: "Seri No" },
    { id: 5, name: 'band', title: "Marka/Model" },
    { id: 6, name: 'barCode', title: "Benzersiz Barkod" },
    { id: 7, name: 'faultDefination', title: "Arızanın Tanımı" },
    { id: 8, name: 'faultType', title: "Arızanın Tipi (elektronik, yazılım, mekanik vb.)" },
    { id: 9, name: 'startDay', type: 'date', title: "Arıza Başlangıç Günü" },
    { id: 10, name: 'startTime', type: 'time', title: "Arıza Başlangıç Saati" },
] as Item[];





export function Form_1(props: FormProps) {
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const Form = getForm();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
    });

    setValue('tower', 'kule');
    setValue('location', 'lokasyon');
    setValue('equipmant', 'ekipman');
    setValue('serialNo', 'seri no');
    setValue('band', 'marka/model');
    setValue('barCode', 'barkod');
    setValue('faultDefination', 'ariza tanimi');
    setValue('faultType', 'ariza tipi');
    setValue('startDay', new Date());
    setValue('startTime', new Date());
    
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        Form.setForm(data);
        console.log('FormDAta',Form.formData);
        //props.navigation.navigate('page-2');
    });
    const ViewItem = ({ item }: { item: Item }) => {
        switch (item.type) {
            case 'date':
                return <SelectDateController item={item} control={control} errors={errors} setValue={setValue} />;
            case 'time':
                return <SelectTimeController item={item} control={control} errors={errors} setValue={setValue} />;
            default:
                return < InputLargeController title={item.title} name={item.name} control={control} errors={errors} />;
        }

    };
    props.index.setActiveIndex(0);

    return (

        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={ViewItem}
            />
            <View style={styles.submitContainer}>
                <LeaveButton />
                <ContinueButton
                    navigation={props.navigation}
                    pageName='page-2'
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
        paddingTop: 16,
    },
    submitContainer: {
        borderTopWidth: 1,
        borderColor: Colors.borderPrimary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
        paddingBottom: 20,
    },
});

export default Form_1