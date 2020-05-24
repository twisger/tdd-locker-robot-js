import { retrieveBag } from './utils';

export class SmartLockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const targetLocker = this.lockers.reduce((pre, cur) => (pre.getSpaceLeft() > cur.getSpaceLeft() ? pre : cur));
    return targetLocker.store(bag);
  }

  retrieve(ticket) {
    return retrieveBag(this.lockers, ticket);
  }
}
