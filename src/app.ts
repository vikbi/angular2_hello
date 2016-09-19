import {Component} from 'angular2/core'

@Component ({
selector : "test",
template : `
    <div>
    <h2>Hello {{name}}</h2>
    </div>
    `
})

export class App{
constructor(){ this.name = "world";}
}
