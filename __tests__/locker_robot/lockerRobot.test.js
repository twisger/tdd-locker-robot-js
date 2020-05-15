import { Bag, Locker } from '../../src/locker_robot';
import { LockerRobot } from '../../src/locker_robot/lockerRobot';

test('should return a ticket and store in first locker when store bag given all locker have space', () => {
  const locker1 = new Locker(1);
  const locker2 = new Locker(1);
  const lockerRobot = new LockerRobot(locker1, locker2);
  const bag = new Bag();

  const ticket = lockerRobot.store(bag);

  expect(locker2.retrieve(ticket)).toBe('Please input valid ticket!');
  expect(locker1.retrieve(ticket)).toBe(bag);
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
