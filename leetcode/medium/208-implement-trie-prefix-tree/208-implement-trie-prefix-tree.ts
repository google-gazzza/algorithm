/*
208-implement-trie-prefix-tree
leetcode/medium/208. Implement Trie (Prefix Tree)
URL: https://leetcode.com/problems/implement-trie-prefix-tree/

NOTE: Description
NOTE: Constraints
  - 1 <= word.length, prefix.length <= 2000
  - word and prefix consist only of lowercase English letters.
  - At most 3 * 104 calls in total will be made to insert, search, and startsWith.

NOTE: Explanation
NOTE: Reference
*/

class TrieNode {
  public character: string;
  public childNodeMap: Map<string, TrieNode>;
  private isCompleteWord: boolean;

  constructor(characters: string[]) {
    this.childNodeMap = new Map<string, TrieNode>();
    this.isCompleteWord = false;
    this.character = characters.shift();

    if (characters.length === 0) {
      this.isCompleteWord = true;
    } else {
      this.childNodeMap.set(characters[0], new TrieNode(characters));
    }
  }

  append(characters: string[]): void {
    if (characters.length === 1) {
      this.isCompleteWord = true;
    }

    characters.shift();
    if (this.childNodeMap.has(characters[0])) {
      this.childNodeMap.get(characters[0])
        .append(characters);
    } else {
      this.childNodeMap.set(characters[0], new TrieNode(characters));
    }
  }

  search(characters: string[]): boolean {
    if (characters.length === 1 && this.isCompleteWord) {
      if (this.character === characters[0]) {
        return true;
      }
      return false;
    }

    characters.shift();
    const nextChar = characters[0];

    if (this.childNodeMap.has(nextChar)) {
      return this.childNodeMap.get(nextChar)
        .search(characters);
    }

    return false;
  }

  startWith(characters: string[]): boolean {
    characters.shift();
    const nextChar = characters[0];

    if (characters.length === 0) {
      return true;
    }

    if (this.childNodeMap.has(nextChar)) {
      return this.childNodeMap.get(nextChar)
        .startWith(characters);
    }

    return false;
  }
}

class Trie {
  public childNodeMap: Map<string, TrieNode>;

  constructor() {
    this.childNodeMap = new Map<string, TrieNode>();
  }

  insert(word: string): void {
    if (this.childNodeMap.has(word[0])) {
      this.childNodeMap.get(word[0])
        .append(word.split(''));
    } else {
      this.childNodeMap.set(word[0], new TrieNode(word.split('')));
    }
  }

  search(word: string): boolean {
    if (this.childNodeMap.has(word[0])) {
      return this.childNodeMap.get(word[0])
        .search(word.split(''));
    }
    return false;
  }

  startsWith(word: string): boolean {
    if (this.childNodeMap.has(word[0])) {
      return this.childNodeMap.get(word[0])
        .startWith(word.split(''));
    }
    return false;
  }
}

const trie: Trie = new Trie();
trie.insert('apple');
trie.search('apple');   // return True
trie.search('app');     // return False
trie.startsWith('app'); // return True
trie.insert('app');
trie.search('app');     // return True
