class CombinationIterator {
    private String characters; //조합할 대상 문자열.
    private int combinationLength; //조합할 문자열의 최대 길이
    private Queue<String> combinationCharacters = new LinkedList<>(); //조합한 문자열 결과물을 담는 큐.

    //생성자
    public CombinationIterator(String characters, int combinationLength) {
        this.characters=characters;
        this.combinationLength=combinationLength;
        dfs("",0);

    }
    private void dfs(String comibationChar,int start){
        if(comibationChar.length() == this.combinationLength){ //문자열의 크기가 같다면 큐에 조합한 문자열을 더해주고 빠져나간다.
            this.combinationCharacters.add(comibationChar);
            return;
        }
        for(int i=start;i<this.characters.length();i++){ //이전에 문자열과 현재 문자열을 합치고나서 dfs함수를 호출한다.
            dfs(comibationChar+this.characters.substring(i,i+1),i+1);
        }

    }

    public String next() { //큐에있는 문자열을 뺀다.
        return this.combinationCharacters.poll();
    }

    public boolean hasNext() { //큐에 뺄 문자열이 있는지를 확인한다.
        return !this.combinationCharacters.isEmpty();

    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * CombinationIterator obj = new CombinationIterator(characters, combinationLength);
 * String param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */