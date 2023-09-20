# Buto-Plugin-WfAjax
- Make ajax request with jquery to a div element.


## Widgets
### Include
Include js in head section.
```
type: widget
data:
  plugin: wf/ajax
  method: include
```

### I18N
Include element in body section (optional) for translation purpose.

```
type: widget
data:
  plugin: wf/ajax
  method: i18n
```

## Methods
Javascript to make request to element and post form to element. It also include an updater function for all requests to element.

### Load
Load a page in an element.
```
PluginWfAjax.load(id, url);
```

#### Div element
```
type: div
attribute:
  id: _my_div_id_
innerHTML: 
```
This value is visible in the toast.
```
  data-content: My div name
```
One could also init the load method like this.
```
innerHTML: load:/my/page
```
Error params.
```
  data-wf-ajax-error: Role issue...
  data-wf-ajax-error-message: There was a role issue on this request!
```

#### Flow
##### Div

- The indicator is shown on first load or if the div is empty.
- Otherwise the div get the style attribute visibility hidden to maintain used with and height.

##### Toast
- A toast is shown with header text "Loading content".
- Text in the body from div attribute data-content along with the indicator.

### Update
Update element previously loaded by id.
This method uses the load method.
```
PluginWfAjax.update(id);
```

### Callback
Handle request in method PluginWfCallbackjson.call().
```
PluginWfAjax.callbackjson(url);
```

## Indicator
An icon shown in div and toast.
