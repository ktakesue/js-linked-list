/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    function createNode(value){
        return {
            value: value,
            next: null,
        };
    }
    
    let head = null;
    let tail = null;


    let getHead = function(){
        return head;
    };

    let getTail = function(){
        return tail;
    };

    let add = function(value){
        let newNode = createNode(value);
        if (head === null && tail === null){
            head = newNode;
            tail = newNode;
        }else{
            tail.next = newNode;
            tail = newNode;
        }
        return newNode;
    };
    
    let get = function(number){
        let currentNode;
        let index = 0;

        if(head === null && tail === null){
            return false;
        }else{
            currentNode = head;
        }
        while (index < number){
            if(currentNode.next === null){
                return false;
            }
                index++;
                currentNode = currentNode.next; 
            }
            return currentNode;
        };

    let remove = function(number){
        let nodeToRemove = get(number);
        let previousNode = get(number - 1);
        let nextNode = get(number + 1);

        if(nodeToRemove === false){
            return false;
        }

        //removing first node
        if(number === 0){
            head = nodeToRemove.next;

        //removing last node    
        }else if(nodeToRemove.next === null){
            previousNode.next = null;
            tail = previousNode;

        //removing everything else    
        }else{
            previousNode.next = nextNode;
        } 
    };

    let insert = function(value, number){
        let currentNode = get(number);
        let previousNode = get(number - 1);
        let newNode = createNode(value);
        // console.log("previousNode", previousNode);

        if(!get(number) || number < 0){
            return false;
        }
        // if(currentNode){

            //inserting before 1st node
            if(number === 0){
                head = newNode;
                newNode.next = currentNode;

            //inserting in between everything else
            }else{
                newNode.next = currentNode;
                previousNode.next = newNode;
            }

        // }else{
        //     return false; 
        // }
    };

    
    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        get: get,
        remove: remove,
        insert: insert
    };
}

var myLinkedList = linkedListGenerator();
    console.log(myLinkedList.add("hello"));
    console.log(myLinkedList.add("bye"));
    console.log(myLinkedList.add("fuck"));
    console.log(myLinkedList.add("cake"));
    console.log(myLinkedList.add("wassup"));
    console.log(myLinkedList.add("shit"));
    // console.log(myLinkedList.getHead());
    // console.log(myLinkedList.getTail());
    // console.log(myLinkedList.get(4));
    // console.log(myLinkedList.remove(3));
    console.log(myLinkedList.insert("ass", 1));
    console.log("get head", myLinkedList.getHead());
    