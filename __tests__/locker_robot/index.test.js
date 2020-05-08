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
