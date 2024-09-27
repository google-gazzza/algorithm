// leetcode/medium/2694. Event Emitter
// 2694-event-emitter
// URL: https://leetcode.com/problems/event-emitter/

type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  eventMap: Map<string, Set<any>>;

  constructor() {
    this.eventMap = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.eventMap.has(eventName)) {
      this.eventMap.set(eventName, new Set());
    }
    const callbacks = this.eventMap.get(eventName) || new Set();
    callbacks.add(callback);

    return {
      unsubscribe: () => {
        const _callbacks = this.eventMap.get(eventName) || new Set();
        _callbacks.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const callbacks = this.eventMap.get(eventName);

    if (!callbacks) {
      return [];
    }

    return Array.from(callbacks).map((callback) => callback(...args));
  }
}

let emitter = new EventEmitter();

emitter = new EventEmitter();
emitter.emit("firstevent"); // [], no callback are subscribed yet
let s1 = emitter.subscribe("firstevent", (x) => x + 1);

emitter.emit("firstevent", [5]); // [5, 6], returns the output of cb1 and cb2
// emitter.emit("firstevent", [1]); // [5, 6], returns the output of cb1 and cb2
let s2 = emitter.subscribe("firstevent", (x) => x + 2);
emitter.emit("firstevent", [5]); // [5, 6], returns the output of cb1 and cb2
s1.unsubscribe();
emitter.emit("firstevent", [5]); // [5, 6], returns the output of cb1 and cb2
