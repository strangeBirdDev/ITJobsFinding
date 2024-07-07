import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function Layout() {
    const [fontsLoaded, error] = useFonts({
        DBBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DBMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DBRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return <Stack />;
}

export default Layout;
