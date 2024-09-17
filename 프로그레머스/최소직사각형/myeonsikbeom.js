function solution(sizes) {
    var answer = 0;
    const maxSize = [0,0];
    
    const rotateSizes = sizes.map(size=>[size[0] < size[1] ? size[1]:size[0] , size[0] > size[1] ? size[1]:size[0]])
    for(let i=0;i<rotateSizes.length;i++){
        const size = rotateSizes[i];
        if(maxSize[0] < size[0]){
            maxSize[0]=size[0];
        }
        if(maxSize[1] < size[1]){
            maxSize[1]=size[1];
        }
    }
    return maxSize[0]*maxSize[1];
}
