import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

const iconsSet = {
  'balloons': require('./data/balloons'),
  'coolicons': require('./data/coolicons'),
  'default': require('./data/default'),
  'essential': require('./data/essential'),
  'file-folder': require('./data/file-folder'),
  'flags': require('./data/flags'),
  'font-awesome': require('./data/font-awesome'),
  'interaction': require('./data/interaction'),
  'lodgicons': require('./data/lodgicons'),
  'payment-method': require('./data/payment-method'),
  'social-media': require('./data/social-media'),
  'universalicons': require('./data/universalicons'),
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
