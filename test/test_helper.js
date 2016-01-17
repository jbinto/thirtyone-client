import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

global.expect = expect;
global.sinon = sinon;
