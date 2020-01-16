class ArithmeticTaskRunner{

    constructor(){
        this.tasks = [];
    }

    addNegationTask(){
        this.tasks.push(x => - x);
    }

    addAdditionTask(y){
        this.tasks.push(x => x + y);
    }

    addMultiplicationTask(y){
        this.tasks.push(x => x * y);
    }

    get taskCount(){
      return this.tasks.length;
    }

    execute(startValue = 0){  //need a default parameter after startvalue
      let arrayLength = this.tasks.length;
      let x = startValue;
      for(var i = 0; i < arrayLength; i++){
        x = this.tasks[i](x);
      }
      return x;
  }

}

let taskRunner = new ArithmeticTaskRunner();
//taskRunner.addAdditionTask(2);
taskRunner.addNegationTask();
taskRunner.addMultiplicationTask(4);
//taskRunner.execute();
//taskRunner.execute(10);
//taskRunner.taskCount;
taskRunner.addAdditionTask(50);
//taskRunner.addNegationTask();
console.log(taskRunner.execute(5));
