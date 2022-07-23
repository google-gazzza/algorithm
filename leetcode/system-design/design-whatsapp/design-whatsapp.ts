/*
design-whatsapp
leetcode/system-design/Design Whatsapp
URL: https://leetcode.com/explore/learn/card/system-design/690/system-design-case-studies/4395/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

class WhatsApp {
  private groups: Map<number, number[]> = new Map<number, number[]>();
  private users: Map<number, string[]> = new Map<number, string[]>();

  sendMessage(userId: number, message: string): void {
    if (!this.users.has(userId)) {
      this.users.set(userId, []);
    }
    this.users.get(userId).unshift(message);
  }

  createGroup(initialUsers: number[]): number {
    this.groups.set(this.groups.size + 1, initialUsers);

    return this.groups.size;
  }

  addUserToGroup(groupId: number, userId: number): void {
    if (this.groups.has(groupId)) {
      const group = this.groups.get(groupId);
      if (group.indexOf(userId) === -1) {
        group.push(userId);
      }
    }
  }

  sendGroupMessage(fromUser: number, groupId: number, message: string): void {
    if (!this.groups.has(groupId)) {
      return;
    }

    const group = this.groups.get(groupId);

    if (group.indexOf(fromUser) === -1) {
      return;
    }

    group.forEach((userId) => {
      if (userId !== fromUser) {
        this.sendMessage(userId, message);
      }
    });
  }

  getMessagesForUser(userId: number): string[] {
    if (!this.users.has(userId)) {
      return [];
    }

    return this.users.get(userId);
  }
}

/**
 * Your WhatsApp object will be instantiated and called as such:
 * var obj = new WhatsApp()
 * obj.sendMessage(toUser,message)
 * var param_2 = obj.createGroup(initialUsers)
 * obj.addUserToGroup(groupId,userId)
 * obj.sendGroupMessage(fromUser,groupId,message)
 * var param_5 = obj.getMessagesForUser(userId)
 */

let whatsApp = new WhatsApp();
whatsApp.createGroup([1, 2, 3]); // return 1
                                 // The first group is created containing the users [1,2,3].
                                 // Since it is the first group, its id will be 1.
whatsApp.sendMessage(2, 'hellotwo'); // User 2 receives a personal message "hellotwo".
whatsApp.sendMessage(4, 'hellofour'); // User 4 receives a personal message "hellofour".
whatsApp.getMessagesForUser(2); // return ["hellotwo"]
                                // User 2 only received the message "hellotwo" so far.
whatsApp.sendGroupMessage(1, 1, 'helloeveryone'); // User 1 sends a message to group 1.
                                                  // So both users 2 and 3 receive the message.
whatsApp.getMessagesForUser(2); // return ["helloeveryone", "hellotwo"]
                                // Two messages were sent to user 2 so far.
whatsApp.addUserToGroup(1, 4); // User 4 is added to group 1.
whatsApp.sendGroupMessage(1, 1, 'seeyousoon'); // User 1 sends a message to group 1.
                                               // So users 2, 3, and 4 receive the message.
whatsApp.getMessagesForUser(2); // return ["seeyousoon", "helloeveryone", "hellotwo"]
                                // Three messages were sent to user 2.
whatsApp.getMessagesForUser(4); // return ["seeyousoon", "hellofour"]
// Two messages were sent to user 4, so we return them.
// Note that user 4 did not receive the message "helloeveryone".

whatsApp = new WhatsApp();
whatsApp.sendMessage(2, 'hellotwofromthree');
whatsApp.sendMessage(2, 'hellotwofromone');
whatsApp.sendMessage(1, 'helloone');
whatsApp.getMessagesForUser(3);
whatsApp.getMessagesForUser(2);
whatsApp.getMessagesForUser(1);
whatsApp.createGroup([1, 2]);
whatsApp.sendGroupMessage(1, 1, 'helloeveryone');
whatsApp.getMessagesForUser(2);
whatsApp.addUserToGroup(1, 3);
whatsApp.sendGroupMessage(2, 1, 'seeyousoon');
whatsApp.getMessagesForUser(2);
whatsApp.getMessagesForUser(3);
// [null,null,null,null,[],["hellotwofromone","hellotwofromthree"],["helloone"],1,null,["helloeveryone","hellotwofromone","hellotwofromthree"],null,null,["helloeveryone","hellotwofromone","hellotwofromthree"],["seeyousoon"]]
