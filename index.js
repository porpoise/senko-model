function model(getter, setter, prop="value") {
    const modelObj = Object.create(null);
    modelObj[prop] = getter;
    modelObj.onChange = function (event) {
        setter(event.target[prop]);
    };

    return modelObj;
}

exports.model = model;