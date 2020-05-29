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
