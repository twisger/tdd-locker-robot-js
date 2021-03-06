import { retrieveBag } from './utils';

export class SuperLockerRobot {
  constructor(...lockers) {
    this.lockers = lockers;
  }

  store(bag) {
    const targetLocker = this.lockers.reduce(
      (pre, cur) => (pre.getVacancyRate() > cur.getVacancyRate() ? pre : cur),
    );
    return targetLocker.store(bag);
  }

  retrieve(ticket) {
    return retrieveBag(this.lockers, ticket);
  }
}
