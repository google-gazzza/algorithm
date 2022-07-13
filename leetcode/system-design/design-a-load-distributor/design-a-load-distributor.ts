/*
design-a-load-distributor
leetcode/system-design/Design a Load Distributor
URL: https://leetcode.com/explore/learn/card/system-design/689/system-design-basics/4409/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

type App = {
  appId: number;
  capacity: number;
};

class Machine {
  id: number;
  capacity: number;
  apps: App[] = [];

  constructor(id: number, capacity: number) {
    this.id = id;
    this.capacity = capacity;
  }

  addApp(app: App) {
    this.apps.push(app);
    this.capacity -= app.capacity;
  }

  removeApp(appId: number) {
    const targetApp: App = this.apps.find((_app: App) => _app.appId === appId);
    this.apps.splice(this.apps.indexOf(targetApp), 1);
    this.capacity += targetApp.capacity;
  }
}

class DCLoadBalancer {
  private machines: Machine[] = [];

  addMachine(machineId: number, capacity: number): void {
    this.machines.push(new Machine(machineId, capacity));
  }

  removeMachine(machineId: number): void {
    const targetMachine: Machine = this.machines.find((_machine: Machine) => _machine.id === machineId);
    this.machines.splice(this.machines.indexOf(targetMachine), 1);

    targetMachine.apps.forEach((_app: App) => {
      this.addApplication(_app.appId, _app.capacity);
    });
  }

  findMaximumCapacityMachine(loadUse: number): Machine {
    let maximumCapacityMachines: Machine[] = [
      this.machines.find((_machine: Machine) => _machine.capacity >= loadUse),
    ];

    if (maximumCapacityMachines.length === 0) {
      return null;
    }

    this.machines?.forEach((_machine: Machine) => {
      if (_machine.capacity > maximumCapacityMachines[0]?.capacity) {
        maximumCapacityMachines = [_machine];
      }
      if (_machine.capacity === maximumCapacityMachines[0]?.capacity) {
        maximumCapacityMachines.push(_machine);
      }
    });

    let minimumIdMachine: Machine = maximumCapacityMachines.shift();

    maximumCapacityMachines.forEach((_machine: Machine) => {
      if (_machine.id < minimumIdMachine.id) {
        minimumIdMachine = _machine;
      }
    });

    return minimumIdMachine;
  }

  addApplication(appId: number, loadUse: number): number {
    const machine: Machine = this.findMaximumCapacityMachine(loadUse);

    if (!machine) {
      return -1;
    }
    machine.addApp({ appId, capacity: loadUse });

    return machine.id;
  }

  stopApplication(appId: number): void {
    this.machines.find((_machine: Machine) => {
      return _machine.apps.find((_app: App) => _app.appId === appId);
    }).removeApp(appId);
  }

  getApplications(machineId: number): number[] {
    const result = this.machines.find((_machine: Machine) => _machine.id === machineId)
      .apps.map((_app: App) => _app.appId)
      .slice(0, 10);
    return result;
  }
}

// DCLoadBalancer;
const dCLoadBalancer = new DCLoadBalancer();
dCLoadBalancer.addMachine(1, 1); // Capacity Left: [1]
dCLoadBalancer.addMachine(2, 10); // Capacity Left: [1,10]
dCLoadBalancer.addMachine(3, 10); // Capacity Left: [1,10,10]
dCLoadBalancer.addMachine(4, 15); // Capacity Left: [1,10,10,15]
dCLoadBalancer.addApplication(1, 3); // return 4, Capacity Left: [1,10,10,12]
                                     // Machine 4 had the largest capacity left at 15.
dCLoadBalancer.addApplication(2, 11); // return 4, Capacity Left: [1,10,10,1]
                                      // Machine 4 had the largest capacity left at 12.
dCLoadBalancer.addApplication(3, 6); // return 2, Capacity Left: [1,4,10,1]
                                     // Machine 2 and 3 had the same largest capacity but machine 2 has the lower ID.
dCLoadBalancer.addApplication(4, 5); // return 3, Capacity Left: [1,4,5,1]
                                     // Machine 3 had the largest capacity at 10.
dCLoadBalancer.getApplications(2); // return [3], Machine 2 only has application 3.
dCLoadBalancer.addMachine(5, 10); // Capacity Left: [1,4,5,1,10]
dCLoadBalancer.addApplication(5, 5); // return 5, Capacity Left: [1,4,5,1,5]
                                     // Machine 5 had the largest capacity at 10.
dCLoadBalancer.stopApplication(3); // Capacity Left: [1,10,5,1,5],
                                   // Application 3 was running on machine 2.
dCLoadBalancer.addApplication(6, 5); // return 2, Capacity Left: [1,5,5,1,5]
                                     // Machine 2 had the largest capacity at 10.
dCLoadBalancer.getApplications(4); // return [1, 2], Machine 4 has applications 1 and 2.
dCLoadBalancer.removeMachine(4); // Capacity Left: [1,2,5,-,5]
                                 // Machine 4 had applications 1 and 2.
                                 // Application 1 has a load of 3 and is added to machine 2.
                                 // Application 2 has a load of 11 and cannot be added to any machine so it is removed.
dCLoadBalancer.getApplications(2); // return [6, 1], Machine 2 has applications 6 and 1.
