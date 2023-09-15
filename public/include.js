function plugin_wf_ajax(){
  this.elements = new Array();
  this.load_element = [{type: 'img', attribute: {style: 'margin:10px;margin:0px;width:16px;border:solid 1px silver;border-radius: 5px;', src: '/plugin/wf/ajax/apng2.png'}}];
  this.loading = [];
  /**
   * Load to element.
   * @param {type} id
   * @param {type} url
   * @returns {undefined}
   */
  this.url_trim = function(url){
    /**
     * Remove / at the end of url to handle some browsers who loading it twice.
     */
    if(url.substr(url.length-1)==='/'){
      url = url.substr(0, url.length-1);
    }
    return url;
  }
  this.load = function (id, url){
    /**
     * 
     */
    url = this.url_trim(url);
    /**
     * Set element in array.
     */
    this.elements[id] = url;
    this.loading[id] = url;
    /**
     * Handle url.
     */
    var time = new Date().getTime();
    if(url.indexOf('?')>0){url=url+'&_time='+time;}else{url=url+'?_time='+time;}
    /**
     * Loading gif.
     */
    if(document.getElementById(id)){
      if(false){
        document.getElementById(id).innerHTML='<img style="margin:10px;margin:0px;width:16px;border:solid 1px silver;border-radius: 5px;" src="/plugin/wf/ajax/apng2.png?_time='+time+'">';
      }else{
        PluginBootstrapToast.toast({
          id: 'plugin_wf_ajax_toast', header: 'Loading content', body: this.load_element, autohide: false
        });
      }
    }
    /**
     * Ajax request.
     */
    var _element = document.getElementById(id);
    if(!_element){
      console.log('PluginWfAjax says: Could not find element with id '+id+'!');
    }else{
      $.get(url, function(data){
      }).done(function(data){
        _element.innerHTML = data;
        var scripts = _element.getElementsByTagName('script');
        for (var i=0;i<scripts.length;i++) {
          eval(scripts[i].innerHTML);
        }
        /**
         * Alert some error.
         */
        if(_element.getAttribute('data-wf-ajax-error')==_element.innerHTML){
          _element.innerHTML='';
          if(_element.getAttribute('data-wf-ajax-error-message')){
            alert(_element.getAttribute('data-wf-ajax-error-message'));  
          }else{
            alert('PluginWfAjax says: Attribute data-wf-ajax-error has match but the message is not set!');
          }
        }
        /**
         * loading
         */
        delete PluginWfAjax.loading[id];
        if(PluginWfAjax.loading.length==0){
          $('#plugin_wf_ajax_toast').toast('hide');
        }else{
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
    }else{
      console.log('PluginWfAjax.update says: Could not find data elements['+id+']!');
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
