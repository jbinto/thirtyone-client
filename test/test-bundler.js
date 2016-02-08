import sinon from 'sinon';
import chai from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// chai.use(chaiEnzyme());

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();


const testsContext = require.context('../test', true, /spec\.js$/);
testsContext.keys().forEach(testsContext);

const sourceContext = require.context('../src', true, /^((?!app).)*\.js$/);
sourceContext.keys().forEach(sourceContext);
