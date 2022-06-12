import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <AppWrapper>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </AppWrapper>
  );
}

const AppWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
