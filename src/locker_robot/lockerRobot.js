export class LockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const firstLockerHaveSpace = this.lockers.find(locker => locker.haveSpace());
    if (firstLockerHaveSpace) {
      return firstLockerHaveSpace.store(bag);
    }
    return 'No space left!';
  }

  retrieve(ticket) {
    const locker = this.lockers.find(item => item.id === ticket.lockerId);
    if (locker) {
      return locker.retrieve(ticket);
    }
    return 'Please input valid ticket!';
  }
}
