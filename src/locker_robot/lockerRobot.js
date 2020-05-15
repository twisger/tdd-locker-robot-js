export class LockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const firstLockerHaveSpace = this.lockers.filter(locker => locker.haveSpace())[0];
    if (firstLockerHaveSpace) {
      return firstLockerHaveSpace.store(bag);
    }
  }
}
