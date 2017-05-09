import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NOPAText from './NOPAText';

describe('<NOPAText />', () => {
  it('Should return the right default style', () => {
    expect(renderer.create(<NOPAText>The right text!</NOPAText>)).toMatchSnapshot();
  });

  it('Should return the right overloaded style', () => {
    expect(renderer.create(
      <NOPAText
        fontSize={18}
        fontFamily={"monserratSemiBold"}
        color={"#444"}
        onPress={() => console.log('Pressed')} // eslint-disable-line no-console
      >
        Content
      </NOPAText>)).toMatchSnapshot();
  });
});
