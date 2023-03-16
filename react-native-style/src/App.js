import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { viewStyles, textStyle } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';
import Button from './components/Button';
import Input from './components/Input';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme, lightTheme, darkTheme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <View style={[viewStyles.container, {
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }]}>
                    <Button title='Hanbit' />
                    <Button title='asd' />
                    <Input borderColor='#3498db' />
                    <Input borderColor='#9b59b6' />
                </View>
            </Container>
        </ThemeProvider>
    );
};

export default App;