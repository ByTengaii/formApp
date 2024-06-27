import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import { CalendarIcon } from '../../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';

function MyComponent({ title, date }: { title: string, date: Date }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <CalendarIcon style={styles.icon} />
        <Text style={styles.text}>{date.toLocaleDateString()}</Text>
      </View>
    </View>

  )
}
export function SelectDate({title}: {title: string}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate;
    setShow(false);
    if (typeof (currentDate) !== 'undefined')
      setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
    setMode('date');
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatepicker} >
        <MyComponent title={title} date={date} />
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
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: Colors.borderPrimary,
    padding: 5,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_500Medium",
    color: Colors.primary,
    marginBottom: 3,
  },
  icon: {
    marginRight:5
  },
  text: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
    color: Colors.secondary,
  },

})