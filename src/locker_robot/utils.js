export const retrieveBag = (lockers, ticket) => {
  const locker = lockers.find(item => item.id === ticket.lockerId);
  if (locker) {
    return locker.retrieve(ticket);
  }
  return 'Please input valid ticket!';
};
