import assert from 'assert';
import {add, mul} from './calc'
var calc = require('./calc.js');

describe('Parallel', function () {
    describe('Calculator Tests', function () {
        it('returns 1+1=2', function (done) {
            assert.equal(add(1, 1), 2);
            setTimeout(done, 1000)
        });

        it('returns 2*2=4', function (done) {
            assert.equal(mul(2, 2), 4);
            setTimeout(done, 1000)
        });
    });

    describe('Calculator Tests', function () {
        it('returns 1+1=2', function (done) {
            assert.equal(add(1, 1), 2);
            setTimeout(done, 1000)
        });

        it('returns 2*2=4', function (done) {
            assert.equal(mul(2, 2), 4);
            setTimeout(done, 1000)
        });
    });

    describe('Calculator Tests', function () {
        it('returns 1+1=2', function (done) {
            assert.equal(add(1, 1), 2);
            setTimeout(done, 1000)
        });

        it('returns 2*2=4', function (done) {
            assert.equal(mul(2, 2), 4);
            setTimeout(done, 1000)
        });
    });

    describe('Calculator Tests', function () {
        it('returns 1+1=2', function (done) {
            assert.equal(add(1, 1), 2);
            setTimeout(done, 1000)
        });

        it('returns 2*2=4', function (done) {
            assert.equal(mul(2, 2), 4);
            setTimeout(done, 1000)
        });
    });

    describe('Calculator Tests', function () {
        it('returns 1+1=2', function (done) {
            assert.equal(add(1, 1), 2);
            setTimeout(done, 1000)
        });

        it('returns 2*2=4', function (done) {
            assert.equal(mul(2, 2), 4);
            setTimeout(done, 1000)
        });
    });
})
