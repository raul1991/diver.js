# diver.js
Dives deep into the dom and dumps it in the object literal notation.

# How it works ?
It works by accepting a root-node-id and an empty object. Now it traverses the complete tree and translates every leaf node having an id and a name into its corresponding object literal notation. The name of the leaf node would be translated into an object key and its value will be that key's value.

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
            "first_name": "cafebabe",
            "last_name": "1991",
	    "number" : {
		"age": "21"
	    },
	    "text" : {	
             	"email": {"email_id": "bugville@nowhere.com"}
	    }	
        }
    }

```
