/**
 * @param {string[]} words
 * @return {number}
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
    输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
    输出: 16 
    解释: 这两个单词为 "abcw", "xtfn"。
 */

// my answer
 var maxProduct = function(words) {
    let num = 0;
    for (let i=0; i<words.length - 1; i++) {
        for (let j=1; j<words.length; j++) {
            if (!hasSimlar(words[i], words[j])) {
                if (words[i].length * words[j].length > num) {
                    num = words[i].length * words[j].length
                } 
            }
        }
    }
    return num
};

var hasSimlar = function(words1, words2) {
    for (let val of words1) {
        if (words2.indexOf(val) !== -1) {
            return true
        }
    }
    for (let val of words2) {
        if (words1.indexOf(val) !== -1) {
            return true
        }
    }
    return false
}

//stander
var maxProduct = function(words) {
    const map = new Map();
    let ans = 0;
    for(const word of words){
        const h = hash(word), n = word.length;
        if(map.has(h) && map.get(h) >= n)
            continue;
        for(const other of map.keys())
            if((other & h) == 0)
                ans = Math.max(ans, map.get(other) * n);
        map.set(h, n);
    }
    return ans;
};

var hash = function(word) {
    let res = 0;
    for(let i=0;i<word.length;i++)
        res |= 1 << (word[i].charCodeAt() - 'a'.charCodeAt());
    return res;
};