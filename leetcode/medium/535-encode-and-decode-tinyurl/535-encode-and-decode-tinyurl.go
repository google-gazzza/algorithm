/*
535-encode-and-decode-tinyurl
leetcode/medium/535. Encode and Decode TinyURL
Difficulty: medium
URL: https://leetcode.com/problems/encode-and-decode-tinyurl/
*/

package main

import (
	"fmt"
	"strconv"
)

type Codec struct {
	count    int
	keyTable map[string]string
}

func Constructor() Codec {
	return Codec{
		count:    0,
		keyTable: make(map[string]string),
	}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	this.keyTable[strconv.Itoa(this.count)] = longUrl
	this.count++
	return fmt.Sprintf("%d", this.count-1)
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
	return this.keyTable[shortUrl]
}

/**
* Your Codec object will be instantiated and called as such:
* obj := Constructor();
* url := obj.encode(longUrl);
* ans := obj.decode(url);
 */

func main() {
	fmt.Println("hello world")
	longUrl := "test123"
	obj := Constructor()
	url := obj.encode(longUrl)
	ans := obj.decode(url)
	fmt.Println(url)
	fmt.Println(ans)
	fmt.Println(ans)
}
