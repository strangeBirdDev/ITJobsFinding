import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, icons, SIZES } from "../constants";
import { Welcome, ScreenHeaderBtn, Nearbyjobs, Popularjobs } from "../components";
import { useState } from "react";

function Home() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
                    headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handlePress={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`);
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
