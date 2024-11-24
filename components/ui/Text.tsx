import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
    return (
        <RNText style={[styles.text, style]} {...props}>
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'DM-Sans', // Replace with your specific font family
    },
});

export default Text;