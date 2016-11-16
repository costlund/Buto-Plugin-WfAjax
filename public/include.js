function plugin_wf_ajax(){
  this.elements = new Array();
  /**
   * Load to element.
   * @param {type} id
   * @param {type} url
   * @returns {undefined}
   */
  this.load = function (id, url){
    this.myListener = function(){
      var element = document.getElementById(id);
      if(!element){
        console.log('PluginWfAjax could not find element with id '+id+' to load responseText in!');
      }else{
        element.innerHTML = this.responseText;
        var scripts = element.getElementsByTagName('script');
        for (var i=0;i<scripts.length;i++) {
          eval(scripts[i].innerHTML);
        }
      }
    }
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    this.elements[id] = url;
    // Set _time param.
    var time = new Date().getTime();
    if(url.indexOf('?')>0){url=url+'&_time='+time;}else{url=url+'?_time='+time;}
    if(document.getElementById(id)){
      document.getElementById(id).innerHTML='<img style="margin:10px;" src="/plugin/wf/ajax/loading.gif">';
    }
    xmlhttp.open("GET",url,false);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-Length", 999);   
    xmlhttp.onload = this.myListener;
    xmlhttp.send();
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
