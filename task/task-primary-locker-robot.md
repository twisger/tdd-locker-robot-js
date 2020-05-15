1. Given bag and all lockers have space, When store using lockerRobot, Then the bag should be stored in first locker and return a ticket.
2. Given bag and not all lockers have space,  When store using lockerRobot, Then the bag should be stored in first locker have space and return a ticket.
3. Given bag and all lockers have no space, When store using lockerRobot, Then store failed and send a message "No space left!".
4. Given valid ticket, When retrieve bag, Then retrieve successfully and send the bag.
5. Given invalid ticket, When retrieve bag, Then retrieve failed and send a message "Please input valid ticket!".
    - Given a used ticket, when retrieve bag, Then retrieve failed.

