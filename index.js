class Stack{
  constructor(){
    this.data=[]
    this.top=5
  }
}

let s = new Stack()
s.push(1)
s.push(2)
s.push(4)
s.push(6)
s.push(7)
console.log('size',s.size())