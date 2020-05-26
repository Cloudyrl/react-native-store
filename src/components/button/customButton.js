import React from 'react';
import {Alert,Text,TouchableOpacity,StyleSheet} from 'react-native';


const CustomButton = (props) =>{
    const {title , onPress ,...otherProps} = props;

    return <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.text} {...otherProps}>{title}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(107, 99, 255)',
        marginBottom: 20,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(107, 99, 255)"
      },
      text: {
        color: 'white',
        textAlign: "center",
        height: 20
      }
});

export default CustomButton;