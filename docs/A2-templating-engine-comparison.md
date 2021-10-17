# templating engine comparison

An overview comparison of popular front-end templating engine.

- handlebars
- pug(previously known as jade)
- ejs
- mustache

## syntax comparison

template + data = output

|aspect |handlebar |
|---|---|
|Variable evaluation|`{{firstname}} {{lastname}}`|
|Object property evaluation|`{{person.firstname}} {{person.lastname}}`|
|condition|```{{#if author}}<br/><h1>{{firstName}} {{lastName}}</h1><br/>{{/if}}```|
|for loop|```  {{#each people}}<br/><li>{{this}}</li><br/>{{/each}}```|

## conclusion
- if you hate white space hell, don't consider using pug.
