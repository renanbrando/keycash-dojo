# Build object from queryparameters from url
Given an url "www.keycash.com?a=1&b=2,3&c=4,5", get all query parameters from it and transform it into an object such as
```
{
    a: 1,
    b: [2,3],
    c: [4, 5]
}
```
The query parameters will always be numeric, but when there are more than one param within the object it should be returned as a numeric array