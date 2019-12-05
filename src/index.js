import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

const allIcons = {
  question: require('./data/default/question'),
  menu: require('./data/default/menu'),
  leftArrow: require('./data/default/leftArrow'),
  edit: require('./data/default/edit'),
  remove: require('./data/default/remove'),
  speaker: require('./data/default/speaker'),
  heart: require('./data/default/heart'),
  heart2: require('./data/default/heart2'),

  Words: require('./data/menu/Words'),
  Groups: require('./data/menu/Groups'),
  Quiz: require('./data/menu/Quiz'),
};

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { { name, width = 20, height = 20, color, stroke, ...rest} = {} } = this.props;

    let icon = allIcons[name];
    if(typeof icon !== 'string') icon = allIcons.question;

    if(color) icon = icon.replace(/<path /g, `<path fill="${color}" `)
    if(stroke) icon = icon.replace(/<path /g, `<path stroke="${stroke}" `)

    return <SvgXml xml={icon} width={width} height={height} {...rest} />
  }
}
