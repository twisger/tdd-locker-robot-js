import { Bag, Locker } from '../../src/locker_robot';
import { SuperLockerRobot } from '../../src/locker_robot/superLockerRobot';

test('should stored in locker B and return a ticket when store given locker A space left 2 size 3 and locker B space left 3 size 3', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(3);
  lockerA.store(new Bag());
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerB.retrieve(ticket)).toBe(bag);
});
