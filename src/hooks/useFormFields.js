import { useState } from "react";

export const useFormFields = (initialValues) => {
    const [fields, setFields] = useState(initialValues);

    const changeFieldsValue = (e) => {
        const { name, value, type, checked } = e.target;

        setFields(prevFields => {
            let newFields = { ...prevFields };

            if (type === 'radio') {
                if (value !== 'other') {
                    newFields.otherGender = '';
                }
                newFields[name] = value;

            } else if (type === 'checkbox') {
                newFields[name] = checked
                    ? [...(prevFields[name] || []), value]
                    : (prevFields[name] || []).filter(item => item !== value);

            } else {
                newFields[name] = value;
            }

            return newFields;
        });
    }

    const resetFields = () => setFields(initialValues);

    return { fields, changeFieldsValue, resetFields };
}