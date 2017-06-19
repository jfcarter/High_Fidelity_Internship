(function(){

    var _this = this;

    _this.preload = function(entityID)
    {
        _this.entityID = entityID;
    }

    _this.collisionWithEntity = function(idA, idB, collision)
    {
        print("Entering entity!");
        var addScriptProperty = {"script": "https://hifi-content.s3.amazonaws.com/liv/dev/Edible.js"}; 
        Entities.editEntity(idB, addScriptProperty);
    }
})
