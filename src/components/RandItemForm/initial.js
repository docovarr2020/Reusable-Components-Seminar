import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'

export default class Initial extends Component {
  state = {
  }

  handleChange = (key, newText) => {
    this.setState({[key]: newText})
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    return (
      <View style={styles.formContainer}>
        <FormItem
          title={'Name'}
          placeholder={'John'}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          onChangeText={this.handleChange.bind(null, 'name')}
        />
        <FormItem
          title={'Email'}
          placeholder={'john@email.com'}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          onChangeText={this.handleChange.bind(null, 'email')}
        />
        <FormItem
          title={'Password'}
          placeholder={'password'}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          secureTextEntry
          onChangeText={this.handleChange.bind(null, 'password')}
        />
        <FormItem
          title={'Confirm Password'}
          placeholder={'confirm'}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          secureTextEntry
          onChangeText={this.handleChange.bind(null, 'confim')}
        />
        <TouchableOpacity onPress={this.submit}style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}