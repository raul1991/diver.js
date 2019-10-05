var diver = (function (){
    "use strict";
    var utilities =
    {
      createHierarchy : function createHierarchy(obj, group, name, value){
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
              case "select":
                  return node;
              default :
                  return node.childNodes;
          }

      },
      getValue : function getValue(element) {
          //for checkboxes and radio buttons
          var isBooleanType = ((element.type == "radio") || (element.type == "checkbox"));
          if(isBooleanType) {
            return element.checked ? element.getAttribute('value') : '';
          }

          switch (element.nodeName.toLowerCase()) {
              case "span":
              case "div":
              case "h1": case "h2": case "h3": case "h4": case "h5": case "h6":
                  return element.innerHTML;
              case "a":
                  return element.href;
              case "select":
                  var options = element.options;
                  return options[options.selectedIndex].value;
              default:
                  //input
                  var delimiter = element.getAttribute("delimiter") || undefined;
                  if(delimiter) {
                    var values = [];
                    values = values.concat(element.value.split(delimiter));
                    return values;
                  }
                  return element.value;
          }
          
      },
      dumpValue : function dumpValue(currentChild, obj) {
        var group = currentChild.getAttribute("group") || undefined;
        var name = currentChild.getAttribute("name");
        var value = utilities.getValue(currentChild);
        // don't dump the empty values
        if (value === '') return obj;
        //todo: Add support for this soon.
        var dataType = currentChild.getAttribute("data-type") || undefined;

        if(!group){
          obj[name] = value || "";
        }
        else{
          obj = utilities.createHierarchy(obj, group, name, value);
        }
        return obj;
      }
    };
    return {
      /*
      *  traverses the child elements of the passed in container id.
      * @param id : The container which has to be traversed.
      * @param obj : An empty object to put the value into it.
      */
      traverse : function traverse(id, obj) {
        var elementToTraverse = document.getElementById(id) || id;
        var isSelect = (elementToTraverse.nodeName.toLowerCase() == "select");
        var currentElementLength = elementToTraverse.childNodes.length;

        if (currentElementLength > 0 && !isSelect) {

            var children = utilities.getChildNodes(elementToTraverse);
            for (var ch in children) {
                if(!children.hasOwnProperty(ch)) {
                  continue;
                }
                var currentChild = children[ch];
                //ignore the text nodes
                if (currentChild.nodeType != 1) {
                    continue;
                }
                else if (currentChild.nodeType == 1 && currentChild.childNodes.length > 0) {
                    traverse(currentChild, obj);
                }
                else if (currentChild.nodeType == 1 && currentChild.getAttribute("name") !== null) {
                    obj = utilities.dumpValue(currentChild, obj);
                }
                else {
                    //catch exception
                }
            }
        }
        else {
          obj = utilities.dumpValue(elementToTraverse, obj);
        }
        return obj;
      }
    };
})();
