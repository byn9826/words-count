const DEFAULT_PUNCTUATION = [
	',', '，', '.', '。', ':', '：', ';', '；', '[', ']', '【', ']', '】', '{', '｛', '}', '｝',
	'(', '（', ')', '）', '<', '《', '>', '》', '$', '￥', '!', '！', '?', '？', '~', '～',
	"'", "’", '"', '“', '”', "'", "'",
	'*', '/', '\\', '&', '%', '@', '#', '^', '、', '、', '、', '、'
];

function globalWordsSplit(text, config = {}) {
	if (!text) return 0;
	let words = String(text);
	if (words.trim() === '') return 0;
	const punctuationReplacer = config.punctuationAsBreaker ? ' ' : '';
	const defaultPunctuations = config.disableDefaultPunctuation ? [] : DEFAULT_PUNCTUATION;
	const customizedPunctuations = config.punctuation || [];
	const combinedPunctionations = defaultPunctuations.concat(customizedPunctuations);
	// Remove punctuations or change to empty space
	combinedPunctionations.forEach(function(punctuation) {
		words = words.replace(punctuation, punctuationReplacer);	
	});
	// Remove all kind of symbols
	words = words.replace(/[\uFF00-\uFFEF\u2000-\u206F]/g, '');
	// Format white space character
	words = words.replace(/\s+/, ' ');
	// Split words by white space (For European languages)
	words = words.split(' ');
	words = words.filter(word => word.trim());
	// Match latin, cyrillic, Malayalam letters and numbers
	const common = "(\\d+)|[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u1E00-\u1EFF\u0400-\u04FF\u0500-\u052F\u0D00-\u0D7F]+|";
	// Match Chinese Hànzì, the Japanese Kanji and the Korean Hanja
	const cjk = "\u2E80-\u2EFF\u2F00-\u2FDF\u3000-\u303F\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\u3400-\u3FFF\u4000-\u4DBF\u4E00-\u4FFF\u5000-\u5FFF\u6000-\u6FFF\u7000-\u7FFF\u8000-\u8FFF\u9000-\u9FFF\uF900-\uFAFF";
	// Match Japanese Hiragana, Katakana, Rōmaji
	const jp = "\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u3190-\u319F";
	// Match Korean Hangul
	const kr = "\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uAFFF\uB000-\uBFFF\uC000-\uCFFF\uD000-\uD7AF\uD7B0-\uD7FF";
	
	const reg = new RegExp(
		common + "[" + cjk + jp + kr + "]",
		"g"
	);
	let total = 0;
	words.forEach(function(word) {
		let carry = 0;
		while (m = reg.exec(word)) {
			carry++;
		}
		total = carry === 0 ? total + 1 : total + carry;
	});
	return total;
}

module.exports = globalWordsSplit;
