import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
// import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={{
                        uri:
                            imageError || !job.employer_logo
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbix27ya0nEZ8iVIc7gt3DovKnPJDLhYhFQ&s"
                                : job.employer_logo,
                        // uri: checkImageURL(job.employer_logo)
                        //     ? job.employer_logo
                        //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbix27ya0nEZ8iVIc7gt3DovKnPJDLhYhFQ&s",
                    }}
                    onError={() => setImageError(true)}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {job.job_title}
                </Text>
                <Text style={styles.jobType}>{job.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default NearbyJobCard;
