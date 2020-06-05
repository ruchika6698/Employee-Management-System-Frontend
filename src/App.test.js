import React from 'react';
import Login from './Components/login';
import { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test case for testing login',() =>{

  it('login check with right data',()=>{
  const wrapper = shallow(<Login />);
  wrapper.find('input[type="text"]').simulate('change', {target: {name: 'Username', value: 'Diksha.Rane'}});
  wrapper.find('input[type="password"]').simulate('change', {target: {name: 'Password', value: 'Diksha@123'}});
  wrapper.find('input[type="text"]').simulate('change', {target: {name: 'Designation', value: 'HR'}});
  wrapper.find('button').simulate('click');
  expect(wrapper.state('Username')).toEqual('Diksha.Rane');
  expect(wrapper.state('Password')).toEqual('Diksha@123');
  expect(wrapper.state('Designation')).toEqual('HR');
  })
})
