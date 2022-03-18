import { LightningElement } from 'lwc';
export default class App extends LightningElement {
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
   ready = false;
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}

/*
sets a 3-second timer. After 3 seconds, the content should appear.
(Of course, this is only for testing purposes.)
The code waits 3 seconds, then sets ready to true.

the method is triggered when a component is inserted in the document object model (DOM). 
In this case, it starts the timer.

JavaScript methods define what to do with input, data, events, changes to state, 
and more to make your component work.

events include when a component is:

Created
Added to the DOM
Rendered in the browser
Encountering errors
Removed from the DOM
Respond to any of these lifecycle events using callback methods. For example, 
the connectedCallback() is invoked when a component is inserted into the DOM. 

The this keyword in JavaScript refers to the top level of the current context. Here, the context is this class.

You can import multiple decorators, but a single property or function can have only one decorator. 
For example, a property can’t have @api and @wire decorators.

Examples of Lightning Web Components decorators include:

@api: Marks a field as public. Public properties define the API for a component. An owner component that uses the component in its HTML markup can access the component’s public properties. All public properties are reactive, which means that the framework observes the property for changes. When the property’s value changes, the framework reacts and rerenders the component.
Tip Tip Field and property are almost interchangeable terms. A component author declares fields in a JavaScript class. An instance of the class has properties. To component consumers, fields are properties. In a Lightning web component, only fields that a component author decorates with @api are publicly available to consumers as object properties.
@track: Tells the framework to observe changes to the properties of an object or to the elements of an array. If a change occurs, the framework rerenders the component. All fields are reactive. If the value of a field changes and the field is used in a template—or in the getter of a property used in a template—the framework rerenders the component. You don’t need to decorate the field with @track. Use @track only if a field contains an object or an array and if you want the framework to observe changes to the properties of the object or to the elements of the array. If you want to change the value of the whole property, you don’t need to use @track.
Note Prior to Spring ’20, you had to use @track to mark fields (also known as private properties) as reactive. You’re no longer required to do that. Use @track only to tell the framework to observe changes to the properties of an object or to the elements of an array. Some legacy examples may still use @track where it isn’t needed, but that’s OK because using the decorator doesn’t change the functionality or break the code. For more information, see this release note.
@wire: Gives you an easy way to get and bind data from a Salesforce org.
*/