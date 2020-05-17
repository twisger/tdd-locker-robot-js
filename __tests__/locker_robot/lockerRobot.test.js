import { Bag, Locker, Ticket } from '../../src/locker_robot';
import { LockerRobot } from '../../src/locker_robot/lockerRobot';

test('should return a ticket and store in first locker when store bag given all locker have space', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();

  const ticket = lockerRobot.store(bag);

  expect(locker1.retrieve(ticket)).toBe(bag);
});

test('should not stored in second locker when store bag given two locker all have space', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();

  const ticket = lockerRobot.store(bag);

  expect(locker2.retrieve(ticket)).toBe('Please input valid ticket!');
});

describe('should return a ticket and store in first locker have space when store bag given not all locker have space', () => {
  test('given first locker with no space and second locker with space', () => {
    const locker1 = new Locker(1);
    const locker2 = new Locker(1);
    const lockerRobot = new LockerRobot(locker1, locker2);
    const bag = new Bag();
    locker1.store(new Bag());

    const ticket = lockerRobot.store(bag);

    expect(locker1.retrieve(ticket)).toBe('Please input valid ticket!');
    expect(locker2.retrieve(ticket)).toBe(bag);
  });
  test('given first locker with space and second locker with no space', () => {
    const locker1 = new Locker(1);
    const locker2 = new Locker(1);
    const lockerRobot = new LockerRobot(locker1, locker2);
    const bag = new Bag();
    locker2.store(new Bag());

    const ticket = lockerRobot.store(bag);

    expect(locker1.retrieve(ticket)).toBe(bag);
    expect(locker2.retrieve(ticket)).toBe('Please input valid ticket!');
  });
});

test('should return message and store failed when store given all lockers have no space', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();
  locker1.store(new Bag());
  locker2.store(new Bag());

  expect(lockerRobot.store(bag)).toBe('No space left!');
});

test('should send the bag when retrieve bag given valid ticket', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();
  const ticket = lockerRobot.store(bag);

  expect(lockerRobot.retrieve(ticket)).toBe(bag);
});

test('should send a message when retrieve bag given an invalid ticket', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();
  lockerRobot.store(bag);

  expect(lockerRobot.retrieve(new Ticket(1, 32))).toBe('Please input valid ticket!');
});

test('should retrieve last bag in locker 1 when retrieve given fist locker have space after retrieve a bag from it and second locker have space', () => {
  const locker1 = new Locker(2);
  const locker2 = new Locker(2);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag1 = new Bag();
  const bag2 = new Bag();
  const bag3 = new Bag();
  const bag4 = new Bag();
  const ticket1 = lockerRobot.store(bag1);
  const ticket2 = lockerRobot.store(bag2);
  const ticket3 = lockerRobot.store(bag3);

  lockerRobot.retrieve(ticket1);
  const ticket4 = lockerRobot.store(bag4);

  expect(locker1.retrieve(ticket2)).toBe(bag2);
  expect(locker2.retrieve(ticket3)).toBe(bag3);
  expect(locker1.retrieve(ticket4)).toBe(bag4);
});
