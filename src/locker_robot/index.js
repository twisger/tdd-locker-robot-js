export class Ticket {
  constructor(index) {
    this.id = index;
  }
}

export class Bag {

}

export class LockerRobot {
  constructor(lockerSize) {
    if (typeof lockerSize !== 'number' || lockerSize <= 0) {
      throw new Error('must set a valid locker size');
    }
    this.locker = [];
    this.lockerSize = lockerSize;
  }

  store(bag) {
    if (this.lockerSize <= this.locker.filter(item => !!item).length) {
      return 'No space left!';
    }
    this.locker.push(bag);
    return new Ticket(this.locker.length - 1);
  }

  retrieve(ticket) {
    if (ticket instanceof Ticket && ticket.id < this.lockerSize) {
      const bag = this.locker[ticket.id];
      this.locker[ticket.id] = undefined;
      return bag;
    }
    return 'Please input valid ticket!';
  }
}
