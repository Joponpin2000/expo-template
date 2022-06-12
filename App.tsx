import "react-native-gesture-handler";
import AppWrapper from "./src";
import {AppRoutes}  from "./src/routes";

export default function App() {
  return (
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  );
}
