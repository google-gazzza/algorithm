function solution(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z]/gi,' ');
   str2 = str2.toLowerCase().replace(/[^a-z]/gi,' ');
   const str1Arr = [],str2Arr=[];
   for(let i=0;i<str1.length-1;i++){
       if(str1[i] === ' ' || str1[i+1] === ' ' ){
           continue;
       }
       str1Arr.push(str1.substring(i,i+2));
   }
   for(let i=0;i<str2.length-1;i++){
       if(str2[i] === ' ' || str2[i+1] === ' ' ){
           continue;
       }
       str2Arr.push(str2.substring(i,i+2));
   }
   str1Arr.sort();
   str2Arr.sort();
   //교집합
   const intersection = (arr1,arr2)=>{
       let left = 0,right=0;
       let section=[];
       while(left < arr1.length &&  right < arr2.length){
           if(arr1[left] > arr2[right]){
               right++;
           }else if(arr1[left] < arr2[right]){
               left++;
           }else{
               section.push(arr1[left]);
               left++;
               right++;
           }
       }
       return section;
   }
   const union = (arr1,arr2)=>{
       let left = 0,right=0;
       let section=[]
       while(left < arr1.length &&  right < arr2.length){
           if(arr1[left] < arr2[right]){
               section.push(arr1[left]);
               left++;
           }else if(arr1[left] === arr2[right]){
               section.push(arr1[left]);
               left++;
               right++;
           }else{
               section.push(arr2[right]);
               right++;
           }
       }
       for(let i =left ; i<arr1.length;i++){
           section.push(arr1[i]);
       }
       for(let i =right ; i<arr2.length;i++){
           section.push(arr2[i]);
       }
       return section;
   }
  let intersect = intersection(str1Arr,str2Arr).length;
   let uni = union(str1Arr,str2Arr).length
  return parseInt((intersect === uni ? 1 : (parseInt(intersect) / parseInt(uni) ) )* 65536);
}