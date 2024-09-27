import java.util.UUID;
/**
 https://leetcode.com/problems/encode-and-decode-tinyurl/
 Runtime : 20 ms
 Memory : 43.4 MB
 */
public class Codec {
    public final static Map<String,String> urlMap = new HashMap<String,String>();
    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        UUID uuid = UUID.randomUUID();
        String returnUrl = "http://tinyurl.com/"+uuid;
        urlMap.put(returnUrl,longUrl);
        return returnUrl;
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        return urlMap.get(shortUrl);
    }
}