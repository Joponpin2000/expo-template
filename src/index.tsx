import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import React from 'react'
import { Provider as PaperProvider } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components/native";
import { appTheme } from './theme';
import { StatusBar } from "expo-status-bar";

const AppWrapper = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <NavigationContainer>
        <PaperProvider>
          <KeyboardWrapper
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {children}
            <StatusBar style="dark" />
          </KeyboardWrapper>
        </PaperProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppWrapper

interface IProps {
  children: React.ReactNode;
}

const KeyboardWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;