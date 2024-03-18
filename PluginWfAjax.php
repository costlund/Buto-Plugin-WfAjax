<?php
class PluginWfAjax{
  public static function widget_include($data){
    $data = new PluginWfArray($data);
    $element = array();
    /**
     * js
     */
    wfPlugin::enable('include/js');
    $element[] = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wf/ajax/include.js'));
    /**
     * loading_content
     */
    if($data->is_set('data/loading_content') && $data->get('data/loading_content')===false){
      $element[] = wfDocument::createHtmlElement('script', "PluginWfAjax.loading_content=false");    
    }
    /**
     * i18n
     */
    wfPlugin::includeonce('i18n/translate_to_json');
    $i18n_translate_to_json = new PluginI18nTranslate_to_json();
    $json_i18n = $i18n_translate_to_json->get_json(__DIR__.'/element/i18n.yml', '/plugin/wf/ajax/i18n');
    $element[] = wfDocument::createHtmlElement('script', "PluginWfAjax.i18n=$json_i18n");
    /**
     * 
     */
    wfDocument::renderElement($element);
  }
}
