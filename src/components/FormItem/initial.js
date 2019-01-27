import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Text, TextInput } from 'react-native-elements'
import styles from './styles'

export default class Initial extends Component {
  static propTypes = {
    // What Props might we need?
    title: PropTypes.string,
    containerStyle: View.propTypes.style,
    titleStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style,
  }

  state = {
    // What should be stored in the state of THIS component?
  }

  render() {
    const {
      title,
      containerStyle,
      titleStyle,
      inputStyle,
      ...inputProps
    } = this.props
    return (
      <View style={[styles.inputContainer, containerStyle]}>
        <FormLabel labelStyle={[styles.title, titleStyle]}>{title}</FormLabel>
        <FormInput
          containerStyle={styles.formInputContainer}
          inputStyle={[styles.formInput, inputStyle]}
          {...inputProps}
        />
      </View>
    )
  }
}