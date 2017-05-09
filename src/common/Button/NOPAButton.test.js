import React from 'react';
import renderer from 'react-test-renderer';
import NOPAButton from './NOPAButton';

describe('<NOPAButton />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <NOPAButton
        title={'I am a button'}
        onPress={() => console.log('Pressed')}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});