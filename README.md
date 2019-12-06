# Buto-Plugin-WfAjax
Jquery get method to make Ajax calls.

## Include
Include js.
```
type: widget
data:
  plugin: wf/ajax
  method: include
```

## Javascript
Javascript to make request to element and post form to element. It also include an updater function for all requests to element.

### Load
Load a page in an element.
```
PluginWfAjax.load(id, url);
```

### Update
Update element previously loaded by id.
```
PluginWfAjax.update(id);
```

### Callback
Handle request in method PluginWfCallbackjson.call().
```
PluginWfAjax.callbackjson(url);
```

## Element attribute
Handle content match.
```
type: div
attribute:
  id: _my_div_id_
  data-wf-ajax-error: Role issue...
  data-wf-ajax-error-message: There was a role issue on this request!
innerHTML: 
```
