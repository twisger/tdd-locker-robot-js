export class SmartLockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const targetLocker = this.lockers.reduce((pre, cur) => (pre.getSpaceLeft() > cur.getSpaceLeft() ? pre : cur));
    return targetLocker.store(bag);
  }

  retrieve(ticket) {
    const locker = this.lockers.find(item => item.id === ticket.lockerId);
    if (locker) {
      return locker.retrieve(ticket);
    }
    return 'Please input valid ticket!';
  }
}
