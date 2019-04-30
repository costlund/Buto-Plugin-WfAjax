# Buto-Plugin-WfAjax


## Widget
```
type: widget
data:
  plugin: wf/ajax
  method: include
```


## Javascript
Javascript to make request to element and post form to element. It also include an updater function for all requests to element.

Load a page in an element.
```
PluginWfAjax.load(id, url);
```

Update element previously loaded by id.
```
PluginWfAjax.update(id);
```

Handle request in method PluginWfCallbackjson.call().
```
PluginWfAjax.callbackjson(url);
```
