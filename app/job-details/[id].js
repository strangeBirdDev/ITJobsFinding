import React, { useState } from "react";
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import { COLORS, SIZES, icons } from "../../constants";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id,
    });

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => {};

    const displayTabContent = () => {
        switch (activeTab) {
            case "About":
                return <JobAbout title="About" info={data[0].job_description ?? "No data provided"} />;
            case "Qualifications":
                return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ?? ["N/A"]} />;
            case "Responsibilities":
                return (
                    <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? ["N/A"]} />
                );
            default:
                break;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" hanldePress={() => router.back()} />
                    ),
                    headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />,
                }}
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    {isLoading ? (
                        <ActivityIndicator size={"large"} color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong!</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                            {displayTabContent()}
                        </View>
                    )}
                </ScrollView>

                <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"} />
            </>
        </SafeAreaView>
    );
};

export default JobDetails;
