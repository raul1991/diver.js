# diver.js
Dives deep into the DOM and dumps it as a js object.

# How it works ?
It works by accepting a root-node-id and an empty object. Now it traverses the complete tree and translates every leaf node having an id and a name into its corresponding object literal notation. The name of the leaf node would be translated into an object key and its value will be that key's value.
It is important to note that "Select" html element is an exception to the aforementioned criteria. The name attribute on the select element will be taken as the key and the selected option would be taken as it's value.

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
<div class="hide">
<div class="form-horizontal control-group"  style="margin-left: -118px">
    <label class="control-label" for="inputName">Name</label>

    <div class="controls">
	<input class="input_fat span2" type="text"  name="first_name" group="personal_details" placeholder="First"
	      value="cafebabe">
	<input class="input_fat span2" type="text"  name="last_name"  group="personal_details" placeholder="Last"
	      value="1991">
    </div>
</div>
<div class="form-horizontal control-group"  style="margin-left: -118px">
    <label class="control-label" for="inputAge">Age</label>

    <div class="controls">
	<input class="input_fat span2" type="text"  name="age" group="personal_details.age" placeholder="Age" value="21">
    </div>
</div>
<div class="form-horizontal control-group"  style="margin-left: -118px">
    <label class="control-label" for="inputEmail">Email</label>

    <div class="controls">
	<input class="input_fat span3" type="text" group="personal_details.email" name="email_id"  placeholder="Email" value="bugville@nowhere.com">
	<input class="input_fat span3" type="checkbox" group="personal_details" name="isChecked">
	<input class="input_fat span3" type="text" name="Delimited-values" delimiter="," placeholder="delimited values" value="foo,bar,john-doe">
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
