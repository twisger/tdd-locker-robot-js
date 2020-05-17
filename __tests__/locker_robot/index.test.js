import { Locker, Ticket, Bag } from '../../src/locker_robot';


test('should send a ticket and store successfully when store bag given locker have space', () => {
  const locker = new Locker(2);
  const bag = new Bag();

  const ticket = locker.store(bag);

  expect(ticket).toBeInstanceOf(Ticket);
});

test('should send error message when store bag given no space', () => {
  const locker = new Locker(2);
  locker.store(new Bag());
  locker.store(new Bag());

  const message = locker.store(new Bag());

  expect(message).toBe('No space left!');
});

test('should throw an error when init locker given not pass locker size', () => {
  const fn = () => new Locker();

  expect(fn).toThrowError();
});

test('should get bag successful when retrieve bag given a valid ticket', () => {
  const locker = new Locker(2);
  const bag = new Bag();
  const ticket = locker.store(bag);

  expect(locker.retrieve(ticket)).toBe(bag);
});

test('should retrieve failed and get no bag when retrieve bag given an invalid ticket', () => {
  const locker = new Locker(2);
  const invalidTicket = new Ticket(3);

  expect(locker.retrieve(invalidTicket)).toBe('Please input valid ticket!');
  expect(locker.retrieve('ticket')).toBe('Please input valid ticket!');
});

test('should throw an error when init locker given locker size is 0', () => {
  const fn = () => new Locker(0);

  expect(fn).toThrowError();
});

test('should throw an error when init locker given locker size less than 0', () => {
  const fn = () => new Locker(-1);

  expect(fn).toThrowError();
});

test('should return correct bag when retrieve bag given after retrieve another bag', () => {
  const locker = new Locker(3);
  const bag1 = new Bag();
  const bag2 = new Bag();
  const bag3 = new Bag();

  const ticket1 = locker.store(bag1);
  const ticket2 = locker.store(bag2);
  const ticket3 = locker.store(bag3);
  locker.retrieve(ticket1);

  expect(locker.retrieve(ticket2)).toBe(bag2);
  expect(locker.retrieve((ticket3))).toBe(bag3);
});
