import React, { useState } from "react";

import "./styles/reset.css";
import "./styles/common.css";

import SelectRolePage from "./pages/SelectRolePage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

import { useFormFields } from "./hooks/useFormFields";

const App = () => {

    const [thisPage, setPage] = useState(0);

    const pageHandler = (value) => setPage(thisPage + value);

    const { fields, changeFieldsValue, resetFields } = useFormFields({
        firstName: "",
        lastName: "",
        gender: "",
        otherGender: "",
        phonePrefix: "+1",
        phoneInput: "",

        workCategories: [],
        email: "",
        password: "",
    });

    return (
        <>
            {
                thisPage === 0 && <SelectRolePage
                    pageHandler={pageHandler}
                ></SelectRolePage>
            }
            {
                thisPage === 1 && <FirstPage
                    pageHandler={pageHandler}
                    fields={fields}
                    changeFieldsValue={changeFieldsValue}
                ></FirstPage>
            }
            {
                thisPage === 2 && <SecondPage
                    pageHandler={pageHandler}
                    fields={fields}
                    changeFieldsValue={changeFieldsValue}
                    resetFields={resetFields}
                ></SecondPage>
            }
        </>

    )
}

export default App;
