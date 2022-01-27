'use strict';

const { validateBrackets } = require('../stack-queue-brackets');

describe('testing the validate brackets function', () => {

  it('should return false if there is only one bracket in the string', () => {

    let res1 = validateBrackets('(');
    let res2 = validateBrackets('[');
    let res3 = validateBrackets('{');
    let res4 = validateBrackets(')');
    let res5 = validateBrackets(']');
    let res6 = validateBrackets('}');

    expect(res1).toEqual(false);
    expect(res2).toEqual(false);
    expect(res3).toEqual(false);
    expect(res4).toEqual(false);
    expect(res5).toEqual(false);
    expect(res6).toEqual(false);
  });

  it('should return false on mismatched pairs', () => {

    let res1 = validateBrackets('(]');
    let res2 = validateBrackets('[}');
    let res3 = validateBrackets('{)');
    let res4 = validateBrackets('{)');
    let res5 = validateBrackets('(]');
    let res6 = validateBrackets('[}');

    expect(res1).toEqual(false);
    expect(res2).toEqual(false);
    expect(res3).toEqual(false);
    expect(res4).toEqual(false);
    expect(res5).toEqual(false);
    expect(res6).toEqual(false);
  });

  it('should return false on mismatched pairs LAB CASES', () => {

    let res1 = validateBrackets('[({}]');
    let res2 = validateBrackets('(](');
    let res3 = validateBrackets('{(})');
    let res4 = validateBrackets('{');
    let res5 = validateBrackets(')');
    let res6 = validateBrackets('[}');

    expect(res1).toEqual(false);
    expect(res2).toEqual(false);
    expect(res3).toEqual(false);
    expect(res4).toEqual(false);
    expect(res5).toEqual(false);
    expect(res6).toEqual(false);
  });

  it('should return true if there are no brackets in the string', () => {

    let res = validateBrackets('test');

    expect(res).toEqual(true);
  });

  it('should return true there are brackets in the string', () => {

    let res = validateBrackets('{test}');

    expect(res).toEqual(true);
  });

  it('should prompt user to enter a string on empty string', () => {

    let res = validateBrackets('');

    expect(res).toEqual('Enter a String');
  });

  it('should return true on LAB CASES', () => {

    let res1 = validateBrackets('{}');
    let res2 = validateBrackets('{}(){}');
    let res3 = validateBrackets('()[[Extra Characters]]');
    let res4 = validateBrackets('(){}[[]]');
    let res5 = validateBrackets('{}{Code}[Fellows](())');

    expect(res1).toEqual(true);
    expect(res2).toEqual(true);
    expect(res3).toEqual(true);
    expect(res4).toEqual(true);
    expect(res5).toEqual(true);
  });

  it('should return true on bracket pairs', () => {

    let res1 = validateBrackets('{}');
    let res2 = validateBrackets('()');
    let res3 = validateBrackets('[]');

    expect(res1).toEqual(true);
    expect(res2).toEqual(true);
    expect(res3).toEqual(true);
  });

});
