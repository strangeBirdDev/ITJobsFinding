import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
// import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>
            <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
                <Image
                    source={{
                        uri:
                            imageError || !item.employer_logo
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbix27ya0nEZ8iVIc7gt3DovKnPJDLhYhFQ&s"
                                : item.employer_logo,
                        // uri: checkImageURL(item.employer_logo)
                        //     ? item.employer_logo
                        //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbix27ya0nEZ8iVIc7gt3DovKnPJDLhYhFQ&s",
                    }}
                    onError={() => setImageError(true)}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>

            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularJobCard;
