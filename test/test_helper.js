import { expect } from 'chai';
import sinon from 'sinon';
import dirtyChai from 'dirty-chai';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
chai.use(dirtyChai);

global.expect = expect;
global.sinon = sinon;
