import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log('Press In !!!/n');
    const _onPressOut = () => console.log('Press Out !!!/n');
    return (
        <TouchableOpacity
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPressIn={_onPressIn}
        onPressOut={_onPressOut}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
        </TouchableOpacity>
    );
};

export default EventButton;