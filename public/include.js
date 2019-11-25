function plugin_wf_ajax(){
  this.elements = new Array();
  /**
   * Load to element.
   * @param {type} id
   * @param {type} url
   * @returns {undefined}
   */
  this.load = function (id, url){
    /**
     * Set element in array.
     */
    this.elements[id] = url;
    /**
     * Handle url.
     */
    var time = new Date().getTime();
    if(url.indexOf('?')>0){url=url+'&_time='+time;}else{url=url+'?_time='+time;}
    /**
     * Loading gif.
     */
    if(document.getElementById(id)){
      document.getElementById(id).innerHTML='<img style="margin:10px;margin:0px;width:16px;border:solid 1px silver;border-radius: 5px;" src="/plugin/wf/ajax/apng2.png?_time='+time+'">';
    }
    /**
     * Ajax request.
     */
    var element = document.getElementById(id);
    if(!element){
      console.log('PluginWfAjax says: Could not find element with id '+id+'!');
    }else{
      $.get(url, function(data){
      }).done(function(data){
        element.innerHTML = data;
        var scripts = element.getElementsByTagName('script');
        for (var i=0;i<scripts.length;i++) {
          eval(scripts[i].innerHTML);
        }
      });
    }
  }
  /**
   * Update an element.
   * @param {type} id
   * @returns {undefined}
   */
  this.update = function(id){
    if(this.elements[id]){
      this.load(id, this.elements[id]);
    }
  }
  /**
   * Request to method PluginWfCallbackjson.call().
   * @param {type} url
   * @returns {Boolean}
   */
  this.callbackjson = function(url){
    $.get(url).done(function(data) 
    { 
      PluginWfCallbackjson.call( data ); 
    });
    return false;
  }
}
PluginWfAjax = new plugin_wf_ajax();
