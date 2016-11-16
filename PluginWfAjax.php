<?php
/**
<p>
Javascript to make request to element and post form to element. It also include an updater function for all requests to element.
</p>
<p>Load a page in an element.</p>
#code-javascript#
PluginWfAjax.load(id, url);
#code#
<p>Update element previously loaded by id.</p>
#code-javascript#
PluginWfAjax.update(id);
#code#
<p>Handle request in method PluginWfCallbackjson.call().</p>
#code-javascript#
PluginWfAjax.callbackjson(url);
#code#
 */
class PluginWfAjax{
  /**
  <p>
  Including js in html/head section.
  </p>
  #code-yml#
  -
    type: widget
    data:
      plugin: 'wf/ajax'
      method: include
  #code#
  */
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/ajax/include.js'));
    wfDocument::renderElement(array($element));
  }
  
  
}