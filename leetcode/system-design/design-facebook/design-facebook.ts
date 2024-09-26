/*
design-facebook
leetcode/system-design/Design Facebook
URL: https://leetcode.com/explore/learn/card/system-design/690/system-design-case-studies/4396/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

type Post = {
  id: number;
  content: string;
};

class Facebook {
  private posts: Map<number, Post[]> = new Map<number, Post[]>();

  private postCount = 0;

  private friendList: Map<number, number[]> = new Map<number, number[]>();

  writePost(userId: number, postContent: string): void {
    if (!this.posts.has(userId)) {
      this.posts.set(userId, []);
    }

    this.posts.get(userId).push({
      id: this.postCount,
      content: postContent,
    });
    this.postCount += 1;
  }

  addFriend(user1: number, user2: number): void {
    if (!this.friendList.has(user1)) {
      this.friendList.set(user1, []);
    }
    if (!this.friendList.has(user2)) {
      this.friendList.set(user2, []);
    }

    const user1FriendList = this.friendList.get(user1);
    if (!user1FriendList.includes(user2)) {
      user1FriendList.push(user2);
    }

    const user2FriendList = this.friendList.get(user2);
    if (!user2FriendList.includes(user1)) {
      user2FriendList.push(user1);
    }
  }

  showPosts(userId: number): string[] {
    if (!this.friendList.has(userId)) {
      return [];
    }

    this.friendList.get(userId);

    return this.friendList.get(userId).map((friendId) => {
      if (!this.posts.has(friendId)) {
        return [];
      }
      return this.posts.get(friendId);
    }).flat()
      .sort((a, b) => b.id - a.id)
      .map((post) => post.content);
  }
}

/**
 * Your Facebook object will be instantiated and called as such:
 * var obj = new Facebook()
 * obj.writePost(userId,postContent)
 * obj.addFriend(user1,user2)
 * var param_3 = obj.showPosts(userId)
 */

// Input
//   ["Facebook", "addFriend", "writePost", "writePost", "writePost", "writePost", "showPosts", "showPosts", "addFriend", "showPosts", "showPosts", "showPosts"]
//   [[], [1, 2], [1, "postone"], [2, "posttwo"], [3, "postthree"], [2, "postfour"], [2], [3], [2, 3], [1], [2], [3]]
// Output
//   [null, null, null, null, null, null, ["postone"], [], null, ["postfour", "posttwo"], ["postthree", "postone"], ["postfour", "posttwo"]]

let facebook: Facebook = new Facebook();
facebook.addFriend(1, 2); // Users 1 and 2 become friends.
facebook.writePost(1, 'postone'); // "postone" is posted by user 1.
facebook.writePost(2, 'posttwo'); // "posttwo" is posted by user 2.
facebook.writePost(3, 'postthree'); // "postthree" is posted by user 3.
facebook.writePost(2, 'postfour'); // "postfour" is posted by user 2.
facebook.showPosts(2); // return ["postone"]
                       // User 2 has only one friend, which is user 1 who has posted one time so far.
facebook.showPosts(3); // return []
                       // User 3 does not have any friends yet, so we return [].
facebook.addFriend(2, 3); // Users 2 and 3 become friends.
facebook.showPosts(1); // return ["postfour", "posttwo"]
                       // The only friend of user 1 is user 2 who has two posts, so we return them.
facebook.showPosts(2); // return ["postthree", "postone"]
                       // Users 1 and 3 are the friends of user 2.
                       // Both users 1 and 3 have one post each, but user 3 posted last,
                       // so we return user 3's post first.
// facebook.showPosts(3); // return ["postfour", "posttwo"]
                       // The only friend of user 3 is user 2 who has two posts.

