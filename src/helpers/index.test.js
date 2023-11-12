import {
    formatDate,
    parseCustomDate,
    calculateAgeFromBirthYear,
    boldenMatchingText,
    extractUniqueValues,
    slugify,
  } from './index';
  
  describe('Helper functions', () => {
    describe('formatDate', () => {
      test('formats date correctly', () => {
        const formattedDate = formatDate('01-12-2022');
        expect(formattedDate).toBe('1 December 2022');
      });
    });
  
    describe('calculateAgeFromBirthYear', () => {
      test('calculates age correctly', () => {
        const age = calculateAgeFromBirthYear(1990);
        expect(age).toBe('33 years, 11 months');
      });
    });
  
    describe('extractUniqueValues', () => {
      test('extracts unique values', () => {
        const pets = [{ type: 'Dog' }, { type: 'Cat' }, { type: 'Dog' }];
        const uniqueValues = extractUniqueValues(pets, 'type');
        expect(uniqueValues).toEqual(['Dog', 'Cat']);
      });
    });
  
    describe('slugify', () => {
      test('slugifies text correctly', () => {
        const slugifiedText = slugify('Hello World!');
        expect(slugifiedText).toBe('hello-world');
      });
    });
  });
  