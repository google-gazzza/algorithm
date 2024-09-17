/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b)=>Number(a)-Number(b));//오름차순 정렬
    for(let i=0;i<nums.length;i++){
        let left=i+1,right=nums.length-1;
        if(i>0 && nums[i] === nums[i-1]) continue; //첫번째수가 현재와 이전값이 같으면 pass
        while(left < right){//왼쪽보다 오른쪽이 클때까지 
            let sum = nums[i]+nums[left]+nums[right];
            if(sum > 0){//합계가 0보다 크면, right가 크기때문에, right--
                right--;
            }else if(sum < 0){//합계가 0보다 작으면, left가 너무 작기때문에, left--
                left++;
            }else{//3개의 합계가 0일때
                result.push([nums[i],nums[left],nums[right]]);
                while(nums[left]===nums[left+1]) left++//다음배열의 값이 다를때까지, 1단계업!
                while(nums[right]===nums[right-1]) right--//이전배열의 값이 다를때까지 1단계감소 
                left++ ;
                right--;
            }
        }
    }
    return result;
};