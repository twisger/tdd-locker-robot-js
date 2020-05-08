export class Ticket {
  constructor(index) {
    this.id = index;
  }
}

export class Bag {

}

export class LockerRobot {
  constructor(lockerSize) {
    if (typeof lockerSize !== 'number') {
      throw new Error('must set a valid locker size');
    }
    this.locker = [];
    this.lockerSize = lockerSize;
  }

  store(bag) {
    if (this.lockerSize > this.locker.length) {
      this.locker.push(bag);
      return new Ticket(this.locker.length - 1);
    }
    return null;
  }
}
