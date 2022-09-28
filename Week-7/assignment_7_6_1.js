 import MyStack from "../for_testing/assignment_7_6.js";

class QueueFromStacks {
    constructor() {
        this.stack1 = new MyStack();
        this.stack2 = new MyStack();
    }
    get isEmpty() {
        return this.size === 0;
    }
    enqueue(item) {
        // push to inbox
        this.stack1.push(item);
    }

    
    dequeue() {
        // if outbox is empty, pop entire inbox into outbox
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            
            }
        }
                if(this.stack2.isEmpty()) return -1;
                return this.stack2.pop();
    }
                peek(){
                    return this.stack2.peek();
                }
}

            const input = [
                4,
                1,2,2,2,1,4
            ]
            const queue = new QueueFromStacks();
            for (let i = 1; i<input.length;i++){
                if(input[i]==1){
                    queue.enqueue(input[i+1]);
                    i++;
                }
                else if(input[i]==2){
                    console.log(queue.dequeue());
                }
            }

            /*describe("My stack tests", () => {
                test('1 2 the queue will be {2}', () => {
                  // arrange and act
                  var result = MyStack.queue(1,2)
                
                  // assert
                  expect(result).toBe(2);
                });
                
                test("1 3 the queue will be {2 3}", () => {
                  // arrange and act
                  var result = MyStack.push(2,3)
                
                  // assert
                  expect(result).toBe(2,3);
                });
                
                test("multiplying 2 and 8 should return 16", () => {
                  // arrange and act
                  var result = mathOperations.product(2,8)
                
                  // assert
                  expect(result).toBe(16);
                })*/
               