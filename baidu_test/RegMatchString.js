// var firstLine = readline();
// var secondLine = readline();

var firstLine = "abcd";
var secondLine = "??"

var findMatch = function(firstLine, secondLine) {
    var firstLen = firstLine.length,
        secondLen = secondLine.length,
        subStr,
        uniqueSet = new Set();
    
    // 处理边界情况
    if(firstLen < secondLen || secondLen === 0) {
        console.log(0);
        return;
    }
    
    // 一次移一位匹配
    for(let i = 0; i <= firstLen - secondLen; i++) {
        subStr = firstLine.substr(i, secondLen);
        if(isSubMatched(subStr, secondLine)) {
            // 如果subStr没有在set里
            if(!uniqueSet.has(subStr)) uniqueSet.add(subStr);
        }
    }
    
    // 输出结果
    console.log("Total matched substrings: " + uniqueSet.size);
    if(uniqueSet.size) {
        console.log("All matched strings: ");
        uniqueSet.forEach(item => console.log(item + " "));
    }
}

var isSubMatched = function(target, matchString) {
    // 检测错误实参
    if(target.length !== matchString.length || target.length === 0) {
        console.error('Wrong parameter!');
        return false;
    }
        
    // 匹配
    for(let i = 0; i < matchString.length; i++) {
        if(matchString.charAt(i) != target.charAt(i) &&
           matchString.charAt(i) != '?')
            return false;
    }
    
    return true;
}

findMatch(firstLine, secondLine);