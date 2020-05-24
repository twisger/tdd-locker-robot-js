import { retrieveBag } from './utils';

export class PrimaryLockerRobot {
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
    return retrieveBag(this.lockers, ticket);
  }
}
