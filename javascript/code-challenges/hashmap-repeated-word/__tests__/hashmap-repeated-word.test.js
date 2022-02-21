'use strict';

const repeatedWord = require('../hashmap-repeated-word');

describe('Testing the repeatedWord function', () => {
  it('should return the value of the first repeated string', () => {
    //do a thing
    let result = repeatedWord('a b c a b c');
    expect(result).toEqual('a');
  });
  it('should return the value of the first repeated string with first string capitalized', () => {
    //do a thing
    let result = repeatedWord('A b c a b c');
    expect(result).toEqual('a');
  });
  it('should return the value of the first repeated string with second string capitalized', () => {
    //do a thing
    let result = repeatedWord('a b c A b c');
    expect(result).toEqual('a');
  });
  it('should return the null on an empty string', () => {
    //do a thing
    let result = repeatedWord('');
    expect(result).toEqual(null);
  });
  it('should return the null if only one string', () => {
    //do a thing
    let result = repeatedWord('a');
    expect(result).toEqual(null);
  });
  it('should return the null if no repeated words', () => {
    //do a thing
    let result = repeatedWord('a b c');
    expect(result).toEqual(null);
  });
  it('should pass example input 1', () => {
    //do a thing
    let result = repeatedWord('Once upon a time, there was a brave princess who...');
    expect(result).toEqual('a');
  });
  it('should pass example input 2', () => {
    //do a thing
    let result = repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');
    expect(result).toEqual('it');
  });
  it('should pass example input 3', () => {
    //do a thing
    let result = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn`t know what I was doing in New York...');
    expect(result).toEqual('summer');
  });
});
