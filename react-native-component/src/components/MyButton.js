import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'

const MyButton = props => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>{props.children || props.title}</Text>
        </TouchableOpacity>
    );
}

MyButton.defaultProps = {
    title: 'Button',
};

MyButton.propTypes = {
    title: PropTypes.string.isRequired, //defaultProps에 설정했기에 title이 없을 경우는 없다.
    onPress: PropTypes.func.isRequired,
};

export default MyButton;