import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    source={{
                        uri:
                            imageError || !companyLogo
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbix27ya0nEZ8iVIc7gt3DovKnPJDLhYhFQ&s"
                                : companyLogo,
                    }}
                    onError={() => setImageError(true)}
                    style={styles.logoImage}
                />
            </View>

            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>

            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName}>{companyName} / </Text>
                <View style={styles.locationBox}>
                    <Image source={icons.location} resizeMode="contain" style={styles.locationImage} />
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default Company;
