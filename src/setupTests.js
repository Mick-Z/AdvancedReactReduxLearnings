import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Enzyme API
//1) static 2) shallow 3) full dom

Enzyme.configure({adapter: new Adapter() });
