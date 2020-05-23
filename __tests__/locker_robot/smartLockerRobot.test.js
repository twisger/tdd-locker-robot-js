import { Locker, Bag } from '../../src/locker_robot';
import { SmartLockerRobot } from '../../src/locker_robot/smartLockerRobot';

test('should bag stored in locker B and return a ticket when store bag given smart robot, locker A whose space left is 2 and locker B whose space left is 3', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(3);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = smartLockerRobot.store(bag);

  expect(lockerB.retrieve(ticket)).toBe(bag);
});

test('should bag stored in locker A and return a ticket when store bag given smart robot, locker A whose space left is 3 and locker B whose space left is 2', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(2);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = smartLockerRobot.store(bag);

  expect(lockerA.retrieve(ticket)).toBe(bag);
});
