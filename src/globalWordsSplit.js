function globalWordsSplit(text) {
	if (text === null || text === '') {
		return [];
	}
	//Format white space character
	let words = text.replace(/\s+/, ' ');
	//Remove all kind of symbols
	words = words.replace(/[\uff00-\uffef\u2000-\u206F]/g, '').trim();
	//Split words by white space (For European languages)
	words = words.split(' ');
	//Match number digit, english character, and East Asia character 
	const reg = /(\d+)|(a-zA-Z+)|[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF\u4e00-\u9fff\uf900-\ufaff\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u3190-\u319F\uFF00-\uFFEF\u4E00-\u4FFF\u4000-\u4DBF\u3400-\u3FFF\u3300-\u33FF\u3200-\u32FF\u31C0-\u31EF\u3000-\u303F\u2F00-\u2FDF\u2E80-\u2EFF]/g;
	let final = [];
	let carry;
	words.forEach(function(word) {
		carry = [];
		while (m = reg.exec(word)) { 
			carry.push(m[0]) 
		}
		carry.length === 0 ? final.push(word) : final = final.concat(carry);
	});
	return final;
}

module.exports = globalWordsSplit;