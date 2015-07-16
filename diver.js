/**
 * Makes an object full of valid input values.
 * @param id :  Id of the container.
 * @param obj : Object to populate with values
 */

function traverse(id, obj) {
    var methodName = "traverse";
    var elementToTraverse = document.getElementById(id);
    var currentElementLength = elementToTraverse.childNodes.length;

    if (currentElementLength > 0) {

        var children = getChildNodes(elementToTraverse);
        for (var ch in children) {
            var currentChild = children[ch];
            //ignore the text nodes
            if (currentChild.nodeType == 3) {
                continue;
            }

            if (currentChild.nodeType == 1 && currentChild.childNodes.length > 0 && currentChild.id != "") {
                //call without the object argument as it has already been constructed.
                traverse(currentChild.id, obj);
            }
            else if (currentChild.nodeType == 1 && currentChild.id != "" && currentChild.getAttribute('name') != null) {
                
                var group = currentChild.getAttribute('group') || undefined;
                var name = currentChild.getAttribute('name');
                var value = getValue(currentChild);
                var dataType = currentChild.getAttribute('data-type') || undefined;            
                
                if(!group){
                    obj[name] = value || "";                    
                }
                else{
                    obj = createHierarchy(obj, group, name, value);
                }

            }
            else {

                //catch exception       
            }
        }
    }
    return obj;
}

/**
 * Creates an object based on the group type and
 * inserts a value into it with the property name
 * as the key. 
 * @param obj: The obj in which the new heirarchy needs to be created.
 * @param group : The group which can be flat like first_level or like first.second.third passed as string to the function.
 * @param name : The key to be inserted into the object.
 * @param value : The value to the key. 
 */
function createHierarchy(obj, group, name, value){
    var methodName = "createHierarchy";
    
    var array = group.split(".");
    var temp = obj;
    var len  = array.length;
    for(var i = 0; i < len; i++) {
        if(temp[array[i]] === undefined){
            temp = temp[array[i]] = {};
            temp[name] = value;                       
        }
        else
            temp = temp[array[i]][name] = value;
    }
    return obj;
}

/**
 * Gets the childnodes for a node.
 * @param node : for which the childNodes will be returned.
 */ 
function getChildNodes(node) {
    switch (node.nodeName.toLowerCase()) {
        case "form":
            return node.elements;

        default :
            return node.childNodes;
    }

}

/**
 * Returns the value of an element depending on the nodeName
 * for example : span values can be accessed by innerHTML property
 * but other elements like
 * @param element
 * @returns {*}
 */
function getValue(element) {
    var methodName = "getValue";
    
    switch (element.nodeName.toLowerCase()) {
        case "span":
        case "div":
        case "h1" || "h2" || "h3" || "h4" || "h5" || "h6":
            
            return element.innerHTML;
        case "a":
            
            return element.href;
        default:
            
            return element.value;
    }
}