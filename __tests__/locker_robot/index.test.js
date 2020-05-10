import { LockerRobot, Ticket, Bag } from '../../src/locker_robot';


test('should send a ticket and store successfully when store bag given enough space', () => {
  const lockerRobot = new LockerRobot(2);
  const bag = new Bag();

  const ticket = lockerRobot.store(bag);

  expect(ticket).toBeInstanceOf(Ticket);
});

test('should send error message when store bag given no space', () => {
  const lockerRobot = new LockerRobot(2);
  lockerRobot.store(new Bag());
  lockerRobot.store(new Bag());

  const message = lockerRobot.store(new Bag());

  expect(message).toBe('No space left!');
});

test('should throw an error when init lockerRobot given not pass locker size', () => {
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

  expect(lockerRobot.retrieve(invalidTicket)).toBe('Please input valid ticket!');
  expect(lockerRobot.retrieve('ticket')).toBe('Please input valid ticket!');
});

test('should throw an error when init lockerRobot given locker size is 0', () => {
  const fn = () => new LockerRobot(0);

  expect(fn).toThrowError();
});

test('should throw an error when init lockerRobot given locker size less than 0', () => {
  const fn = () => new LockerRobot(-1);

  expect(fn).toThrowError();
});
