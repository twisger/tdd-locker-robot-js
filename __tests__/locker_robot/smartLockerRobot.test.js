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

test('should bag stored in locker A or locker B and return a ticket when store bag given smart robot, locker A whose space left is 2 and locker B whose space left is 2', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(2);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = smartLockerRobot.store(bag);

  expect([lockerA.retrieve(ticket), lockerB.retrieve(ticket)]).toContain(bag);
});

test('should store failed and send a message "No space left!" when store bag given smart robot, locker A whose space left is 0 and locker B whose space left is 0', () => {
  const lockerA = new Locker(1);
  const lockerB = new Locker(1);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  smartLockerRobot.store(new Bag());
  smartLockerRobot.store(new Bag());

  const message = smartLockerRobot.store(new Bag());

  expect(message).toBe('No space left!');
});

test('should retrieve successfully and send the bag when retrieve bag given smart robot and valid ticket', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(3);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  const bag = new Bag();
  const ticket = smartLockerRobot.store(bag);

  expect(smartLockerRobot.retrieve(ticket)).toBe(bag);
});

test('should retrieve failed and send a message "Please input valid ticket!" when retrieve bag given smart robot and invalid ticket', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(3);
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB);
  const bag = new Bag();
  smartLockerRobot.store(bag);

  expect(smartLockerRobot.retrieve('invalid ticket')).toBe('Please input valid ticket!');
});

test('should bag stored in locker B and return ticket when store bag given locker A space left is 3 locker B space left is 4 locker C space left is 0', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(4);
  const lockerC = new Locker(1);
  lockerC.store(new Bag());
  const smartLockerRobot = new SmartLockerRobot(lockerA, lockerB, lockerC);
  const bag = new Bag();

  const ticket = smartLockerRobot.store(bag);

  expect(lockerB.retrieve(ticket)).toBe(bag);
});
