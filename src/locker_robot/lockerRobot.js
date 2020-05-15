export class LockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const firstLockerHaveSpace = this.lockers.filter(locker => locker.haveSpace())[0];
    if (firstLockerHaveSpace) {
      return firstLockerHaveSpace.store(bag);
    }
    return 'No space left!';
  }

  retrieve(ticket) {
    const locker = this.lockers.find(item => item.id === ticket.lockerId);
    return locker.retrieve(ticket);
  }
}
