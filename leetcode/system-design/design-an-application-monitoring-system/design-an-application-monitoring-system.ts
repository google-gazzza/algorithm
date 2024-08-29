/*
design-an-application-monitoring-system
leetcode/system-design/Design an Application Monitoring System
URL: https://leetcode.com/explore/learn/card/system-design/689/system-design-basics/4410/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

type AppErrorStore = Map<string, Map<number, number>>;

class ErrorStore {
  private errorMaps: Map<string, Map<string, Map<number, number>>>;

  constructor() {
    this.errorMaps = new Map();
  }

  add(applicationName: string, api: string, statusCode: number) {
    if (!this.errorMaps.has(applicationName)) {
      this.errorMaps.set(applicationName, new Map());
    }

    const appErrorStore: AppErrorStore = this.errorMaps.get(applicationName);

    if (!appErrorStore.has(api)) {
      appErrorStore.set(api, new Map());
    }

    const apiErrorStore: Map<number, number> = appErrorStore.get(api);

    apiErrorStore.set(statusCode, apiErrorStore.get(statusCode) + 1 || 1);
  }

  getTopErrors(applicationName: string, api: string) {
    const appErrorStore: AppErrorStore = this.errorMaps.get(applicationName);

    let apiErrorResult: number[][] = [];
    if (!appErrorStore.has(api)) {
      apiErrorResult = Array.from(appErrorStore.entries())
        .reduce((acc, [key, value]) => acc.concat(Array.from(value)), []);
    } else {
      apiErrorResult = Array.from(appErrorStore.get(api).entries());
    }

    if (apiErrorResult.length < 3) {
      apiErrorResult = Array.from(appErrorStore.entries())
        .reduce((acc, [, errorStore]) => acc.concat(Array.from(errorStore.entries())), []);
    }

    return apiErrorResult.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }

      return b[1] - a[1];
    })
      .map(([key]) => key)
      .slice(0, 3);
  }
}

class LatencyStore {
  private latencyMap: Map<string, Map<string, number[]>> = new Map();

  add(applicationName: string, api: string, latency: number) {
    if (!this.latencyMap.has(applicationName)) {
      this.latencyMap.set(applicationName, new Map());
    }

    const appLatencyStore: Map<string, number[]> = this.latencyMap.get(applicationName);

    if (!appLatencyStore.has(api)) {
      appLatencyStore.set(api, []);
    }

    const apiLatencyStore: number[] = appLatencyStore.get(api);

    apiLatencyStore.push(latency);
  }

  getPercentileLatency(applicationName: string, api: string, percentile: number) {
    const appLatencyStore: Map<string, number[]> = this.latencyMap.get(applicationName);

    let apiLatencies: number[];

    if (!appLatencyStore.has(api)) {
      apiLatencies = Array.from(appLatencyStore.entries())
        .reduce((acc, [, value]) => acc.concat(value), [])
        .sort((a, b) => a - b);
    } else {
      apiLatencies = appLatencyStore.get(api)
        .sort((a, b) => a - b);
    }

    const index = Math.floor(((apiLatencies.length - 1) / 100) * percentile);

    return apiLatencies[index];
  }
}

class MonitoringSystem {
  private errorStore: ErrorStore;
  private latencyStore: LatencyStore;

  constructor() {
    this.errorStore = new ErrorStore();
    this.latencyStore = new LatencyStore();
  }

  logLatency(applicationName: string, api: string, latencyInMills: number): void {
    this.latencyStore.add(applicationName, api, latencyInMills);
  }

  logError(applicationName: string, api: string, errorCode: number): void {
    this.errorStore.add(applicationName, api, errorCode);
  }

  getPercentileLatency(percentile: number, applicationName: string, api: string): number {
    return this.latencyStore.getPercentileLatency(applicationName, api, percentile);
  }

  getTopErrors(applicationName: string, api: string): number[] {
    return this.errorStore.getTopErrors(applicationName, api);
  }
}

const ms: MonitoringSytem = new MonitoringSystem();
ms.logLatency('profile', 'getuser', 100); // the "getuser" API of "profile" application took 100ms to execute.
ms.logLatency('profile', 'getuser', 100); // same as above.
ms.logError('profile', 'updateuser', 400); // the "updateuser" API of "profile" generated error 400.
ms.logLatency('profile', 'updateuser', 200); // the "updateuser" API of "profile" took 200ms to execute.
ms.logError('profile', 'updateuser', 504); // the "updateuser" API of "profile" generated error 504.
ms.logError('profile', 'updateuser', 504); // same as above.
ms.logLatency('profile', 'getuser', 100); // the "getuser" API of "profile" took 100ms to execute.
ms.logError('profile', 'updateuser', 400); // the "updateuser" API of "profile" generated error 400.
ms.getPercentileLatency(95, 'profile', 'getuser'); // returns 100
                                                   // the latencies for "getuser" API of "profile" are [100, 100, 100].
                                                   // index = max(0,⌊(95*3)/100⌋-1) = 1.
                                                   // Hence, latency[1] = 100 is returned.
ms.logError('profile', 'updateuser', 505);  // the "updateuser" API of "profile" generated error 505.
ms.getTopErrors('profile', 'updateuser'); // returns [400, 504, 505]
                                          // For the application/API combination "profile"/"updateuser",
                                          // error 400 occurs twice, 504 occurs twice, and 505 occurs once.
ms.getPercentileLatency(95, 'profile', 'finduser'); // returns 100
                                                    // there is no API named "finduser" under "profile".
                                                    // So, we consider the latencies under "profile":
                                                    // [100, 100, 100, 200].
                                                    // index = max(0,⌊(95*4)/100⌋-1) = 2.
                                                    // Hence, latency[2] = 100 is returned.

const ms2: MonitoringSystem = new MonitoringSystem();
ms2.logLatency('crfwtn', 'tmhsr', 634186);
ms2.logError('wynayvl', 'tmhsr', 747998);
ms2.logError('wynayvl', 'fivkpwc', 931448);
ms2.logError('wlsyjhvjw', 'veodlikf', 147028);
ms2.logError('wynayvl', 'veodlikf', 931448);
ms2.logLatency('crfwtn', 'mnr', 196542);
ms2.logLatency('wynayvl', 'fivkpwc', 693905);
ms2.logError('wlsyjhvjw', 'fivkpwc', 470492);
ms2.logLatency('pyhafzp', 'mfknd', 675847);
ms2.logError('crfwtn', 'veodlikf', 931448);
ms2.getPercentileLatency(95, 'wynayvl', 'veodlikf');
ms2.logError('wlsyjhvjw', 'mnr', 471443);
ms2.getTopErrors('wlsyjhvjw', 'mfknd');
ms2.getPercentileLatency(97, 'wynayvl', 'fivkpwc');
ms2.logError('yj', 'veodlikf', 931448);
ms2.logLatency('pyhafzp', 'fivkpwc', 634186);

/**
 * Your MonitoringSystem object will be instantiated and called as such:
 * var obj = new MonitoringSystem()
 * obj.logLatency(applicationName,api,latencyInMills)
 * obj.logError(applicationName,api,errorCode)
 * var param_3 = obj.getPercentileLatency(percentile,applicationName,api)
 * var param_4 = obj.getTopErrors(applicationName,api)
 */
