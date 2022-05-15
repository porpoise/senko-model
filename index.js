function model(getter, setter, prop) {
    const modelObj = Object.create(null);
    modelObj[prop] = getter;
    modelObj.onChange = function (event) {
        setter(event.target[prop]);
    };

    return modelObj;
}

function factory(createElement) {
    return function(tag, props, ...children) {
        let copyProps = props;
        if (props.model) {
            let targetProp = "innerText";

            if (tag === "input" && props.type === "checkbox") {
                targetProp = "checked";
            } else if (["input", "textarea"].includes(tag)) {
                targetProp = "value";
            }

            copyProps = Object.assign(
                props, model(
                    props.model[0], 
                    props.model[1],
                    targetProp
                )
            );

            delete copyProps.model;
        }

        return createElement(tag, copyProps, ...children);
    }
}

exports.model = model;
exports.factory = factory;