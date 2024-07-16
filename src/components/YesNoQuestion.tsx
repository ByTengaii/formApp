import { View, StyleSheet } from "react-native";
import { FormTitle, YesBooleanButton, NoBooleanButton} from "./";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface YesNoQuestionProps {
    question: string;
    name: string;
    formMethods: UseFormReturn<any>;
    style?: object;
}
export function YesNoQuestion(props:YesNoQuestionProps){

    const [userAnswer,setUserAnswer]= useState<boolean>(props.formMethods.getValues(props.name));

    const handleAnswer = (answer:boolean) => {
        setUserAnswer(answer);
        props.formMethods.setValue(props.name, answer);
    }

    return (
        <View style={[styles.container, props.style]}>
            <FormTitle style={styles.question} title={props.question}/>
            <View style={styles.buttonContainer}>
                <YesBooleanButton setAnswerHandler={handleAnswer} style={styles.buttons} isEnable={userAnswer}/>
                <NoBooleanButton setAnswerHandler={handleAnswer} style={styles.buttons} isEnable={userAnswer}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 20,
    },
    question:{
        marginBottom: 16,
    },
    buttons:{
        width: 142,
        height: 32,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
});