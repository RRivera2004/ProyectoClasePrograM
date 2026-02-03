import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomPassword{
    title: string;
    onClick: () => void;
}

export default function CustomPassword({
    title,
    onClick,
}: CustomPassword) {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        width: "80%",
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    text: {
        color: "black",
        fontSize: 14,
        fontWeight: "500"
    }
});
