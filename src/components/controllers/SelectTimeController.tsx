import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Controller, Control, FieldErrors, FieldValues, UseFormSetValue, UseFormReturn } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Item } from '../../models';
import Colors from '../../theme/colors';
import { ClockIcon } from '../../../assets';



interface SelectTimeProps {
  item: Item;
  formMethods: UseFormReturn<any>;
}

function MyComponent({ title, date }: { title: string, date: Date }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <ClockIcon style={styles.icon} />
        <Text style={styles.text}>{date.toLocaleTimeString()}</Text>
      </View>
    </View>

  )
}

const SelectTimeController: React.FC<SelectTimeProps> = ({
  item,
  formMethods
}) => {
  const { control, formState:{errors}, setValue } = formMethods;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate;
    setShow(false);
    if (typeof (currentDate) !== 'undefined'){
      setDate(currentDate);
      setValue?
      setValue(item.name, currentDate)
      :null;
    }
      
  };

  const showDatepicker = () => {
    setShow(true);
    setMode('time');
  };

  return (
    <>
      <Controller
        name={item.name}
        control={control}
        render={({ field: { } }) => (
          <View>
            <TouchableOpacity
              onPress={showDatepicker} >
              <MyComponent title={item.title} date={date} />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode as any}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        )}
      />
      {errors
        && errors[item.name]
        && <Text style={{ color: Colors.red }}>{String(errors[item.name]?.message)}</Text>
      }
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderPrimary,
    padding: 5,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_500Medium",
    color: Colors.primary,
    textAlign: "left",
    marginBottom: 3,
  },
  icon: {
    marginRight: 5
  },
  text: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
    color: Colors.secondary,
  },

})

export default SelectTimeController;