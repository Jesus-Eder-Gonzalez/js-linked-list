/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;

  }

  function getTail() {
    return tail;
  }

  function addNode(val) {
    let node = {
      value: val,
      next: null
    };

    if (!head && !tail) {
      head = node;
      tail = node;
    } else {
      let currentTail = tail;
      currentTail.next = node;
      tail = node;
    }

    return node;
  }

  function get(number) {
    let currentNode = head;
    let count = 0;

    while (currentNode.next) {

      if (count === number) {
        return currentNode;
      } else {
        count++;
        currentNode = currentNode.next;
      }

    }

    if (count === number) {
      return tail;
    } else {
      return false;
    }

  }

  function remove(number) {
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
    let count = 0;

    while (currentNode) {

      if (count === number) {

        if (!nextNode && !previousNode) {

          if (currentNode.next) {
            head = currentNode.next;
            return true;
          } else {
            head = null;
            return true;
          }

        } else if (!nextNode && previousNode) {
          previousNode.next = null;
          tail = previousNode;
          return true;

        } else {
          previousNode.next = nextNode;
          return true;
        }

      } else {
        count++;
        previousNode = currentNode;

        if (currentNode.next) {
          currentNode = currentNode.next;
          nextNode = currentNode.next;

        } else {
          return false;
        }

      }
    }
  }

  function insert(val, number) {
    let newNode = {
      value: val,
      next: null
    };
    let currentNode = head;
    let previousNode = null;
    let count = 0;

    while (currentNode) {

      if (count === number) {

        if (!previousNode) {

          newNode.next = currentNode;
          head = newNode;
          return true;

        } else {
          newNode.next = currentNode;
          previousNode.next = newNode;
          return true;

        }

      } else {
        count++;
        previousNode = currentNode;

        if (currentNode.next) {
          currentNode = currentNode.next;

        } else {
          return false;
        }

      }
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: addNode,
    remove: remove,
    get: get,
    insert: insert
  };
}