export class SmartLockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const maxSpaceLeft = Math.max(...this.lockers.map(locker => locker.getSpaceLeft()));
    const targetLocker = this.lockers.find(locker => locker.getSpaceLeft() === maxSpaceLeft);
    return targetLocker.store(bag);
  }
}
