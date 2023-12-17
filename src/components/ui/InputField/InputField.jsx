// InputField.jsx

import React, { useState } from 'react';
import { usePostSubjects } from './usePostSubjects';
import styles from "./InputField.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconPerson } from "../../../icon/icon-person.svg";

const cx = classNames.bind(styles);

const InputField = () => {
    const [name, setName] = useState('');
    const { postSubject } = usePostSubjects();

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = postSubject(name);
        console.log('Subject ID:', subject.id);
    };

    return (
        <form className={cx("input-wrap")} onSubmit={handleSubmit}>
            <input
                className={cx("input")}
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleInputChange}
            />
            <IconPerson className={cx("icon")} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputField;
