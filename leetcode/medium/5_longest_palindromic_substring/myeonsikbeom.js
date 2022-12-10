/**
 * @param {string} s
 * @return {string}
 */
 
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
   let left=0,right=1;
   const len = s.length;
   const noPalindromicArr = [];
   const isPalindromicStr = (s,i,j)=>{
        while(i>=0 && j<s.length && s[])
        // for(let i=0;i<s.length;i++){
        //     if(s[i]!==s[s.length-1-i]){
        //         noPalindromicArr.push(s.substring(i,s.length-i));
        //         return false;
        //     }
        // }
        // return true;
    }

   for(let i=0;i<s.length;i++){
        const currentIsPalindromicStr1 = isPalindromicStr(s,i,i);
        if(currentIsPalindromicStr1){

        }

   }
//    while(left < s.length+1 ||  right < s.length+1){
//         let substr = s.substring(left,right);
//         if(!(okPalindromicArr.some(str => str === substr) || noPalindromicArr.some(str => str === substr))){
//             if(!isPalindromicStr(substr)){
//                 noPalindromicArr.push(substr);
//             }else{
//                 okPalindromicArr.push(substr);
//             }    
//         }
        
//         right++;
//         if(right >= s.length+1){
//             left+=1;
//             right=left+1;
//             console.log(left,right,noPalindromicArr,okPalindromicArr);
//         }
//     }    
//     return okPalindromicArr.sort((a,b)=> {
//         if(a.length - b.length < 0){
//             return 1
//         }else{
//             return -1;
//         }
//     })[0];
};
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))