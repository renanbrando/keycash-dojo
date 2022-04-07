const main = (url) => {
    const queryInObjectForm = {};

    const [, query] = url.split("?");
    const parameters = query.split("&");

    for (const parameter of parameters) {
        const [name, value] = parameter.split("=");
        if (value.includes(",")) {
            queryInObjectForm[name] = value.split(",").map((el) => +el);
        } else {
            queryInObjectForm[name] = +value;
        }
    }

  return queryInObjectForm;
}

console.log(main("www.keycash.com?a=1&b=2,3&c=4,5"))

module.exports = main

