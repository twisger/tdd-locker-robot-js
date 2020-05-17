1. Given bag, lockerRobot and all lockers have space, When store using lockerRobot, Then the bag should be stored in first locker and return a ticket.
2. Given bag, lockerRobot and not all lockers have space,  When store using lockerRobot, Then the bag should be stored in first locker have space and return a ticket.
    - Given bag, lockerRobot which manage first locker is full, second have space, When store using lockerRobot, Then the bag should be stored in first locker have space and return a ticket.
    - Given bag, lockerRobot which manage first locker have space, second is full, When store using lockerRobot, Then the bag should be stored in first locker have space and return a ticket.
3. Given bag, lockerRobot and all lockers have no space, When store using lockerRobot, Then store failed and send a message "No space left!".
4. Given valid ticket, When retrieve bag, Then retrieve successfully and send the bag.
5. Given invalid ticket, When retrieve bag, Then retrieve failed and send a message "Please input valid ticket!".
    - Given a used ticket, when retrieve bag, Then retrieve failed.

