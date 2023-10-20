<?php
class PluginWfAjax{
  public static function widget_include($data){
    $data = new PluginWfArray($data);
    wfPlugin::enable('include/js');
    $element = array();
    $element[] = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wf/ajax/include.js'));
    /**
     * loading_content
     */
    if($data->is_set('data/loading_content') && $data->get('data/loading_content')===false){
      $element[] = wfDocument::createHtmlElement('script', "PluginWfAjax.loading_content=false");    
    }
    /**
     * 
     */
    wfDocument::renderElement($element);
  }
  public static function widget_i18n(){
    wfDocument::renderElementFromFolder(__DIR__, __FUNCTION__);
  }
}
