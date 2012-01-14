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
                leftY: coors.top.toInt(),
                leftX: coors.left.toInt(),
                rightY: coors.height.toInt() + coors.top.toInt(),
                rightX: coors.width.toInt() + coors.left.toInt()
            };
    }
});