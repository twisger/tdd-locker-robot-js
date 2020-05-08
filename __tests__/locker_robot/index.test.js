import { LockerRobot, Ticket, Bag } from '../../src/locker_robot';


test('should send a ticket and store successfully when store bag', () => {
  const lockerRobot = new LockerRobot(2);
  const bag = new Bag();
  const ticket = lockerRobot.store(bag);
  expect(ticket).toBeInstanceOf(Ticket);
});

test('should not send a ticket store failed when store bag but no space', () => {
  const lockerRobot = new LockerRobot(2);
  lockerRobot.store(new Bag());
  lockerRobot.store(new Bag());
  const ticket = lockerRobot.store(new Bag());
  expect(ticket).toBeNull();
});

test('should throw an error when init lockerRobot but not pass locker size', () => {
  const fn = () => new LockerRobot();
  expect(fn).toThrowError();
});

test('should get bag successful when retrieve bag given a valid ticket', () => {
  const lockerRobot = new LockerRobot(2);
  const bag = new Bag();
  const ticket = lockerRobot.store(bag);
  expect(lockerRobot.retrieve(ticket)).toBe(bag);
});

test('should retrieve failed and get no bag when retrieve bag given an invalid ticket', () => {
  const lockerRobot = new LockerRobot(2);
  const invalidTicket = new Ticket(3);
  expect(lockerRobot.retrieve(invalidTicket)).toBeNull();
  expect(lockerRobot.retrieve('ticket')).toBeNull();
});
