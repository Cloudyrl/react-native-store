import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const customInput = props => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(prevState => !prevState);
  };

  const handleBlur = event => {
    setIsFocused(prevState => !prevState);

    if(props.onBlur){
        props.onBlur(event)
    }
  };

  const {style,setInput, ...otherProps} = props;
  return (
    <TextInput
      style={
        isFocused
          ? [styles.textInput, style, {borderColor: 'rgb(107, 99, 255)'}]
          : [styles.textInput, style]
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#BEBEBE',
    borderBottomWidth: 1.5,
    marginBottom: 20,
  },
});

export default customInput;
