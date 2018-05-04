# Global Words Count
Words count for multi-languages paragraph mixed with numbers and punctuations. One rule apply to all.  

[See Test Case](https://byn9826.github.io/global-words-split/)  
  
Example
--
```
var wordsSplit = require('global-words-split');  
var countResult = wordsSplit('Hello World').length;  
```
  
Why use it
--
words_to_be_count = "Let's say ‘你好’ 100 times per day, 勤勉";  
globalWordsSplit.js -> 10  
  
words_to_be_count.length -> 36  
words_to_be_count.split(' ').length -> 8  
Countable.js -> 8  
PHP str_word_count(words_to_be_count) -> 5  
PHP mb_strlen(words_to_be_count) -> 36  
Office Word -> 12  

Test Case
--
<b>Original Content:</b>  
Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.  
<b>Basic Test Content:</b>  
Translate original content into target language by Google Translate. Will allow +-1 words in some case.  
<b>Test Case Coverage:</b>  
English, Chinese, Chinese-Traditional, Japanese, Korean, French,  
German, Italian, Spanish, Portuguese, Russian, Ukrainian, Arabic,  
Hebrew, Afrikaans, Albanian, Amharic, Armenian, Azerbaijani,  
Basque, Belarusian, Bengali, Bulgarian, Croatian, Czech, Danish,  
Dutch, Filipino, Finnish, Greek, Hindi, Hungarian, Icelandic,  
Indonesian, Irish, Latin, Latvian, Lithuanian, Nepali, Norwegian,  
Polish, Romanian, Serbian, Slovenian, Swedish, Turkish, Welsh, Zulu  
  
Reference
--
http://php.net/manual/en/function.str-word-count.php#109733  
https://www.key-shortcut.com/en/writing-systems/%E6%96%87%E5%AD%97-chinese-cjk/cjk-characters-1/