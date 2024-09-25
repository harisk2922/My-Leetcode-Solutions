var middleNode = function(head) {
    length = 0;
    current = head;
    while(current!==null) {
        length++;
        current = current.next;
    }
    let middle = Math.floor(length / 2);
    current = head;
    let i = 0
    while(i!==middle) {
        current = current.next;
        i++;
    }
    return current;
};

