type Config = {
  punctuationAsBreaker: boolean;
  disableDefaultPunctuation: boolean;
  punctuation: string[];
};

export function wordsCount(text: string, config?: Config): number;
export function wordsSplit(text: string, config?: Config): string[];
export function wordsDetect(
  text: string,
  config?: Config
): { count: number; words: string[] };

export default wordsCount;
