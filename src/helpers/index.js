/**
 * Format date to DD MMM YYYY
 * @param {string} dateAdded - The date the pet was added in the format 'dd-mm-yyyy'
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateAdded) => {
    if (!dateAdded) return null;

    // Split the date string into day, month, and year
    const [day, month, year] = dateAdded.split("-");
    
    // Create a new Date object using the parsed values
    const date = new Date(`${year}-${month}-${day}`);

    // Format the date string and return it
    return `${date.getDate()} ${date.toLocaleString("en-US", { month: 'long' })} ${date.getFullYear()}`
}

/**
 * Convert date strings to a format that can be compared
 * @param {string} dateString - The date string to convert in the format 'dd-mm-yyyy'
 * @returns {Date} - Converted Date object
 */
export const parseCustomDate = (dateString) => {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString.split('-');

    // Return a new Date object using the parsed values
    return new Date(`${year}-${month}-${day}`);
};

/**
 * Calculate age from birth year
 * @param {number} birthYear - The year the pet was born
 * @returns {string} - Formatted age string
 */
export const calculateAgeFromBirthYear = (birthYear) => {
    // If no birth year is provided, return null
    if (!birthYear) return null;

    // Get the current year and month
    const currentYear = new Date().getFullYear();

    // If the birth year is greater than the current year, return null
    const currentMonth = new Date().getMonth() + 1;

    // Return the age string
    return `${currentYear - birthYear} years, ${currentMonth} months`
}

/** 
 * Bolden matching text in a string (case insensitive)
 * @param {string} text - The text to check for matches
 * @param {string} searchTerm - The search term to match
 * @returns {Array} - Array of React components with matching text boldened
 */
export const boldenMatchingText = (text, searchTerm) => {
    // If no text is provided, return null
    if (!text) return null;

    // If no search term is provided, return the text
    if (!searchTerm) return text;

    // Create a new RegExp object with the search term and global and case insensitive flags
    const regex = new RegExp(`(${searchTerm})`, 'gi');

    // Split the text into an array of parts and map over them
    return text.split(regex).map((part, index) =>
        // If the part matches the regex, return a boldened version of it, otherwise return the part
        regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
}

/**
 * Extract unique values from an array of objects
 * @param {Array} pets - The array of objects to extract unique values from
 * @param {string} key - The key to extract unique values from
 * @returns {Array} - Array of unique values
 */
export const extractUniqueValues = (pets, key) => {
    // If no pets or key is provided, return null
    const values = pets.map(pet => pet[key]);

    // Return an array of unique values
    return [...new Set(values)];
};

/**
 * Slugify text
 * @param {string} text - The text to slugify
 * @returns {string} - Slugified text
 */
export const slugify = (text) => {
    // If no text is provided, return null
    if (!text) return null;

    // Slugify the text and return it
    return text
        .toString() // Cast to string
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};
