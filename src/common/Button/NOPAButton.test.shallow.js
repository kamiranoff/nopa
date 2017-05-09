import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NOPAButton from './NOPAButton';

describe('<NOPAButton />', () => {
  it('Should return the right default button', () => {
    const wrapper = shallow(<NOPAButton
        title={'I am a button'}
        onPress={() => console.log('Pressed')}
      />);

    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('NOPAText')).to.have.length(1);
  });

  it('Should return the right overloaded button', () => {
    const wrapper = shallow(
      <NOPAButton
        title={'I am a button'}
        onPress={() => console.log('Pressed')}
        color={'blue'}
        backgroundColor={'red'}
      />);

    expect(wrapper.length).to.equal(1);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('TouchableHighlight').props().color).to.equal('blue');
    expect(wrapper.find('TouchableHighlight').props().backgroundColor).to.equal('red');
    expect(wrapper.find('NOPAText').children().contains('I am a button')).to.equal(true);

  });
});
