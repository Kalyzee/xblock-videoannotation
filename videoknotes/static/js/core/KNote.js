/*
* Knote Model
*
*/
function KNote(id, time, value){
   
  var listeners = new KNotesListener(),
      _this = this,
      _id = id,
      _time = time,
      _value = value,
      _active = false;


    /**
    * SETTERS AND GETTERS
    * 
    */

    this.setTime = function(time){
      
      var eventObject = {"time": time, "timeOld" : _time};
    
      _time = time;
      
      fireEdit(eventObject);
    }

    this.getTime = function(){
      return _time;
    }

    this.setValue = function(value){

      var eventObject = {"value": value, "valueOld" : _value};
      _value = value;
      fireEdit(eventObject);
    }

    this.getValue = function(){
      return _value;
    }

    this.setId = function(id){
      
      var eventObject = {"id": id, "idOld" : _id};
      
      _id = id;

      fireEdit(eventObject);
    }

    this.getId = function(){
      return _id;
    }

    this.getValue = function(){
      return _value;
    }    


    this.setActive = function(active){
      var eventObject = {"active": active, "idActive" : _active};
      _active = active;
    }

    this.isActive = function(){
      return _active;
    }

    /*
    * Method called when a user click on delete note button
    */
    var fireEdit = function(updatedField){
      listeners.fireListeners("onEdit", function(callback){
        callback(_this, updatedField);
      });
    }

    /*
    * Method to add a callback when the user click on delete on a specific note
    */
    this.onEdit = function(callback){
      listeners.addlisteners("onEdit", callback);
    }

}
