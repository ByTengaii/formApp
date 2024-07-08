import { View, StyleSheet } from "react-native";
import { FormTitle, YesBooleanButton, NoBooleanButton} from "./";
import { useState } from "react";

interface YesNoQuestionProps {
    question: string;
    style?: object;
}
export function YesNoQuestion(props:YesNoQuestionProps){

    const [userAnswer,setUserAnswer]= useState<boolean>(false);

    return (
        <View style={[styles.container, props.style]}>
            <FormTitle style={styles.question} title={props.question}/>
            <View style={styles.buttonContainer}>
                <YesBooleanButton setAnswerHandler={setUserAnswer} style={styles.buttons} isEnable={userAnswer}/>
                <NoBooleanButton setAnswerHandler={setUserAnswer} style={styles.buttons} isEnable={userAnswer}/>
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