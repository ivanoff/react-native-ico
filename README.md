# Icons for React Native

### react-native-ico

3k+ Icons for React Native

## Usage

```
import Icon from 'react-native-ico';


// Inside some view component
render() {
    return (
        <Fragment>
          <Icon name="heart" />
          <Icon name="home" group="font-awesome" />
          <Icon name="speaker" height="40" width="40" />
          <Icon name="essential/trash" color="red" />
        </Fragment>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico react-native-svg
```

#### npm

```bash
npm install --save react-native-ico react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [group color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file in selected group, can contain group name before '/' sign | "home", "font-awesome/home"
group | yes | default | name of the group | "essential"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## List of icons

- [balloons](https://github.com/ivanoff/react-native-ico-balloons/blob/master/static/balloons.md)

- [coolicons](https://github.com/ivanoff/react-native-ico-coolicons/blob/master/static/coolicons.md)

- [default](https://github.com/ivanoff/react-native-ico-default/blob/master/static/default.md)

- [essential](https://github.com/ivanoff/react-native-ico-essential/blob/master/static/essential.md)

- [file-folder](https://github.com/ivanoff/react-native-ico-file-folder/blob/master/static/file-folder.md)

- [flags](https://github.com/ivanoff/react-native-ico-flags/blob/master/static/flags.md)

- [font-awesome](https://github.com/ivanoff/react-native-ico-font-awesome/blob/master/static/font-awesome.md)

- [interaction](https://github.com/ivanoff/react-native-ico-interaction/blob/master/static/interaction.md)

- [lodgicons](https://github.com/ivanoff/react-native-ico-lodgicons/blob/master/static/lodgicons.md)

- [payment-method](https://github.com/ivanoff/react-native-ico-payment-method/blob/master/static/payment-method.md)

- [social-media](https://github.com/ivanoff/react-native-ico-social-media/blob/master/static/social-media.md)

- [universalicons](https://github.com/ivanoff/react-native-ico-universalicons/blob/master/static/universalicons.md)


## Example

![example](./static/example.png)

```
// App.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-ico';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}><Icon name="heart" color="red" />  Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}><Icon group="essential" name="like" />  See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}><Icon name="edit" />  Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}><Icon name="menu/Quiz" />  Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
```

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
