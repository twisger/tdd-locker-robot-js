export class LockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    if (this.lockers.every(locker => locker.haveSpace())) {
      return this.lockers[0].store(bag);
    }
  }
}
