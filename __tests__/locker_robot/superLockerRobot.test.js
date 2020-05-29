import { Bag, Locker } from '../../src/locker_robot';
import { SuperLockerRobot } from '../../src/locker_robot/superLockerRobot';


const batchStoreBag = (locker, count) => {
  for (let i = 0; i < count; i++) {
    locker.store(new Bag());
  }
};

test('should stored in locker B and return a ticket when store given locker A space left 2 size 3 and locker B space left 3 size 3', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(3);
  lockerA.store(new Bag());
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerB.retrieve(ticket)).toBe(bag);
});

test('should stored in locker A and return a ticket when store given locker A space left 3 size 3 and locker B space left 2 size 3', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(3);
  lockerB.store(new Bag());
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerA.retrieve(ticket)).toBe(bag);
});

test('should stored in locker A or B and return a ticket when store given locker A space left 2 size 2 and locker B space left 2 size 2', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(2);
  const bag = new Bag();
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);

  const ticket = superLockerRobot.store(bag);

  expect([lockerA.retrieve(ticket), lockerB.retrieve(ticket)]).toContain(bag);
});


test('should stored in locker B and return a ticket when store given locker A space left 3 size 10 and locker B space left 2 size 4', () => {
  const lockerA = new Locker(10);
  const lockerB = new Locker(4);
  batchStoreBag(lockerA, 7);
  batchStoreBag(lockerB, 2);
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerB.retrieve(ticket)).toBe(bag);
});

test('should stored in locker A and return a ticket when store given locker A space left 3 size 4 and locker B space left 2 size 10', () => {
  const lockerA = new Locker(4);
  const lockerB = new Locker(10);
  lockerA.store(new Bag());
  batchStoreBag(lockerB, 8);
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerA.retrieve(ticket)).toBe(bag);
});

test('should stored in locker A and return a ticket when store given locker A space left 1 size 2 and locker B space left 1 size 3', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(3);
  lockerA.store(new Bag());
  batchStoreBag(lockerB, 2);
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();

  const ticket = superLockerRobot.store(bag);

  expect(lockerA.retrieve(ticket)).toBe(bag);
});

test('should store failed and send a message "No space left!" when store bag given super robot, locker A whose space left is 0 and locker B whose space left is 0', () => {
  const lockerA = new Locker(1);
  const lockerB = new Locker(1);
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  superLockerRobot.store(new Bag());
  superLockerRobot.store(new Bag());

  const message = superLockerRobot.store(new Bag());

  expect(message).toBe('No space left!');
});

test('should retrieve successfully and send the bag when retrieve bag given super robot and valid ticket', () => {
  const lockerA = new Locker(2);
  const lockerB = new Locker(3);
  const superLockerRobot = new SuperLockerRobot(lockerA, lockerB);
  const bag = new Bag();
  const ticket = superLockerRobot.store(bag);

  expect(superLockerRobot.retrieve(ticket)).toBe(bag);
});
