import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard
} from 'react-native';

const WriteTask = ({taskItems, setTaskItems}) => {

    const [task, setTask] = React.useState('')

    const handleAddTask = () => {
        if (task.trim()) {
            Keyboard.dismiss()
            setTaskItems([...taskItems, { text: task.trim() }])
        }
        setTask('')
    }

    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper} >

            <View style={styles.inputWrapper}>
                <TextInput
                    value={task}
                    style={styles.input}
                    placeholder='Write your task'
                    onChangeText={(text) => setTask(text)} />
            </View>

            <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
                <View style={styles.addTaskIcon}>
                    <Image style={styles.plus} source={require('../assets/icons/plus.png')} />
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        width: '100%',
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#9F6868',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
    },

    addTaskButton: {
        display: 'flex',
        width: 50,
        height: 50,
    },

    addTaskIcon: {
        backgroundColor: '#9F6868',
        borderRadius: 100,
        padding: 10,
    },

    plus: {
        width: 30,
        height: 30,
    },
})

export default WriteTask;
