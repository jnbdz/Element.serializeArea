/*
---
description: Serialization of areas that a element or elements are taking in another element.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.name/)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'

provides:
  - Element.serializeArea
...
*/

Element.implement({
    serializeArea: function(relative){
        var coors = this.getCoordinates(relative);
        return {
                el: this,
                lefty: coors.top.toInt(),
                leftx: coors.left.toInt(),
                righty: coors.height.toInt() + coors.top.toInt(),
                rightx: coors.width.toInt() + coors.left.toInt()
            };
    }
});