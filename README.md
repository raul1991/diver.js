# diver.js
Dives deep into the DOM and dumps it as a js object.
# What does it do ?
Creating a rest based app requires you to send data to your server in json or xml (most likely). Well you know when the data is huge on the client side you tend to create the json yourself most of the time by writing a lot of boiler plate code. What if you just had to tweak in your html and the hierarchical json with the values would be created magically for you. Interesting ?

So basically diver does all that for you.
# How it works ?
It works by accepting a root-node-id and an empty object. Now it traverses the complete tree and translates every leaf node having a name into its corresponding object literal notation. The name of the leaf node would be translated into an object key and its value will be that key's value.
It is important to note that "Select" html element is an exception to the aforementioned criteria. The name attribute on the select element will be taken as the key and the selected option would be taken as it's value.
# Terminologies
Read more about the terms used in this repository on the [wiki page](https://github.com/raul1991/diver.js/wiki)
# Attributes supported by the library

| Attribute |                   Value                   |                                                                          Use With                                                                          |
|:---------:|:-----------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   group   |         path.to.your.json.property        | Any non-container html element like h1..h6, p, input(preferably) etc. Any element which will have child elements inside it won't work like table, div etc. |
| delimiter | Any token that separates the input value. |                                                                    input - Html Element                                                                    |
|    name   |            Any valid object key           | Any non-container html element like h1..h6, p, input(preferably) etc. Any element which will have child elements inside it won't work like table, div etc. |

# How to use it ?
### Include the script
```javascript
<script type="text/javascript" src="diver.js"></script>
```
### Example Html
```html
<div id="container-top" style="margin:10%">
    <div>
        <div style="margin-left: -118px">
            <label for="inputName">Name</label>
            <div>
                <input  type="text"  name="first_name" group="personal_details" placeholder="First"
                value="cafebabe">
                <input  type="text"  name="last_name"  group="personal_details" placeholder="Last"
                value="1991">
            </div>
        </div>
        <div style="margin-left: -118px">
            <label for="inputAge">Age</label>
            <div>
                <input type="text"  name="age" group="personal_details.age" placeholder="Age" value="21">
            </div>
        </div>
        <div style="margin-left: -118px">
            <label for="inputEmail">Email</label>
            <div>
                <input type="text" group="personal_details.email" name="email_id"  placeholder="Email" value="bugville@nowhere.com">
                <input type="checkbox" group="personal_details" name="isChecked">
                <input type="text" name="Delimited-values" delimiter="," placeholder="delimited values" value="foo,bar,john-doe">
                <select name="cars">
                    <option>Lamborghini</option>
                    <option>Porsche</option>
                    <option>Maybach</option>
                </select>
            </div>
        </div>
    </div>
</div>
```
### Example call to the diver's function
```javascript
var obj = diver.traverse('container-top',{});
```
### Output
```json
{
"personal_details": {
   "isChecked" : "false",
   "first_name": "cafebabe",
   "last_name": "1991",
   "Delimited-values":["foo","bar","john-doe"],
   "age": {
     "age": "21"
   },
   "email": {
     "email_id": "bugville@nowhere.com"
    }
},
"cars": "Lamborghini"
}
```
