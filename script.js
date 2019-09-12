class MyClass{
    constructor(id){
        this.testText = id
    }
    get myMethod(){
        return this.testText
    }
    set myMethod(param){
        this.testText = param
    }
    justaMethod(){
        return "This is a method in MyClass" + this.testText
    }
    static justaStaticMethod(){
        return "this was printed using the static method" + this.testText
    }
    parentMethod(){
        return "i'm a parent method. "
    }
}

class TheOtherClass extends MyClass{
    justAnotherMethod(){
        return this.parentMethod() + "this is from the child class"
    }
}

myCall = new MyClass("Aman's Class!")
document.getElementById("test-p").innerHTML = myCall.justaMethod()

document.getElementById("test-p").innerHTML = MyClass.justaStaticMethod()

mySecondCall = new TheOtherClass()
document.getElementById("test-p").innerHTML = mySecondCall.justAnotherMethod()
