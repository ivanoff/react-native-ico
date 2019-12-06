import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

const iconsSet = {
  'font-awesome': require('./data/font-awesome'),
  'essential': require('./data/essential'),
  'coolicons': require('./data/coolicons'),
  'lodgicons': require('./data/lodgicons'),
  'universalicons': require('./data/universalicons'),
  'flags': require('./data/flags'),
  'social-media': require('./data/social-media'),
  'menu': require('./data/menu'),
  'default': require('./data/default'),
};

const defaultSet = 'default';

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { group: sourceGroup, name: sourceName, width = 20, height = 20, color, stroke, ...rest } = this.props || {};

    const [, group, name] = sourceName.match(/(.*?)\/(.*)/) || [, sourceGroup || defaultSet, sourceName];

    let icon = iconsSet[group][name];
    if(typeof icon !== 'string') icon = iconsSet.default.question;

    if(color) icon = icon.replace(/<path /g, `<path fill="${color}" `)
    if(stroke) icon = icon.replace(/<path /g, `<path stroke="${stroke}" `)

    return <SvgXml xml={icon} width={width} height={height} {...rest} />
  }
}
