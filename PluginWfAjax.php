<?php
class PluginWfAjax{
  public static function widget_include(){
    wfPlugin::enable('include/js');
    $element = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wf/ajax/include.js'));    
    wfDocument::renderElement(array($element));
  }
}
