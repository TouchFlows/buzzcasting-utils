/**
 * Count the number of words in a string that has been normalized
 * source: https://thelinuxcode.com/word-count-using-javascript/
 * @param content
 * @returns number
 */
export const countWords = (content: string) => {
  const cleaned = content
    .replace(/\n/g, " ") // Replace newlines with spaces
    .toLowerCase() // Normalize to lowercase
    .replace(/['";:,.???\-!??]+/g, "") // Remove problematic punctuation
    .replace(/\s{2,}/g, " ") // Consolidate spaces
    .trim(); // Trim leading/trailing whitespace

  return cleaned.split(/\s+/).length; // Split and count
};

// const text = `This is a sample text, with several sentences. It has some punctuation we don‘t want to count!`;

// console.log(countWords(text)); // 15
