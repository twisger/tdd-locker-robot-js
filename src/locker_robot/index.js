export class Ticket {
  constructor(index, lockerId) {
    this.id = index;
    this.lockerId = lockerId;
    this.isUsed = false;
  }
}

export class Bag {

}

export class Locker {
  constructor(lockerSize) {
    if (typeof lockerSize !== 'number' || lockerSize <= 0) {
      throw new Error('must set a valid locker size');
    }
    this.locker = [];
    this.lockerSize = lockerSize;
    this.id = Math.random();
  }

  store(bag) {
    if (!this.haveSpace()) {
      return 'No space left!';
    }
    this.locker.push(bag);
    return new Ticket(this.locker.length - 1, this.id);
  }

  retrieve(ticket) {
    const isTicket = ticket instanceof Ticket;
    const isTicketValid = ticket.lockerId === this.id && !ticket.isUsed;
    if (isTicket && isTicketValid) {
      const bag = this.locker[ticket.id];
      this.locker[ticket.id] = undefined;
      ticket.isUsed = true;
      return bag;
    }
    return 'Please input valid ticket!';
  }

  haveSpace() {
    return this.lockerSize > this.locker.filter(item => !!item).length;
  }
}
