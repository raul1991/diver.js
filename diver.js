/**
 * Makes an object full of valid input values.
 * @param id :  Id of the container.
 * @param obj : Object to populate with values
 */
var diver = (function (){
    var utilities =
    {
      createHierarchy : function createHierarchy(obj, group, name, value){
          var methodName = "createHierarchy";

          var array = group.split(".");
          var temp = obj;
          var len  = array.length;
          var target = array[len - 1];
          
          if(len == 1) {
            //single objects like : foo
            if(obj[group] ===  undefined) {
              obj[group] = {};
            }
            obj[group][name] = value;
          }
          else {
            //nested objects like : foo.bar.more
            for(var i = 0; i < len; i++) {
               if(temp[array[i]] === undefined) {
                 temp = temp[array[i]] = {};
               }
               else {
                temp = temp[array[i]];
               }

               //value must be assigned only if it's the deepest object.
               if(target === array[i]) {
                  temp[name] = value;
               }
            }  
          }
          
          return obj;
      },
      getChildNodes : function getChildNodes(node) {
          switch (node.nodeName.toLowerCase()) {
              case "form":
                  return node.elements;

              default :
                  return node.childNodes;
          }

      },
      getValue : function getValue(element) {
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
    };
    return {
      traverse : function traverse(id, obj) {
        var methodName = "traverse";
        var elementToTraverse = document.getElementById(id);
        var currentElementLength = elementToTraverse.childNodes.length;

        if (currentElementLength > 0) {

            var children = utilities.getChildNodes(elementToTraverse);
            for (var ch in children) {
                if(!children.hasOwnProperty(ch)) continue;
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
                    var value = utilities.getValue(currentChild);
                    var dataType = currentChild.getAttribute('data-type') || undefined;

                    if(!group){
                        obj[name] = value || "";
                    }
                    else{
                        obj = utilities.createHierarchy(obj, group, name, value);
                    }

                }
                else {

                    //catch exception
                }
            }
        }
        return obj;
      }
    }
})();
