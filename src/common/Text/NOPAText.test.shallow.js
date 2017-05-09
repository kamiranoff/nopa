import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NOPAText from './NOPAText'

describe('<NOPAText />', () => {
  it('Should return the right default text', () => {
    const wrapper = shallow(<NOPAText>The right text!</NOPAText>);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('Text')).to.have.length(1);
  });

  it('Should return the right overloaded text', () => {
    const wrapper = shallow(
      <NOPAText
        fontSize={18}
        fontFamily={'monserratSemiBold'}
        color={'#444'}
      >The right text!</NOPAText>);

    expect(wrapper.length).to.equal(1);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('Text').props().style[0].color).to.equal('#444');
    expect(wrapper.find('Text').props().style[0].fontSize).to.equal(18);
    expect(wrapper.find('Text').props().style[0].fontFamily).to.equal('monserratSemiBold');
    expect(wrapper.children().contains('The right text!')).to.equal(true);
  });

});
