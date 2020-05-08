import { LockerRobot, Ticket, Bag } from '../../src/locker_robot';

const lockerRobot = new LockerRobot();

test('should send a ticket and store successfully when store bag', () => {
  const bag = new Bag();
  const ticket = lockerRobot.store(bag);
  expect(ticket).toBeInstanceOf(Ticket);
});
