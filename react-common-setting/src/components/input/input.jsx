import { useState } from "react";
import style from "./Input.module.css";

import visibilityOff from "../../assets/btn_visibility_off_24px.svg";
import visibilityOn from "../../assets/btn_visibility_on_24px.svg";

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const inputType = type === "password" && isShowPassword ? "text" : type;
  const handlePassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className={style.inputWrap}>
      {label && <label className={style.inputLabel}>{label}</label>}
      <div className={style.inputContainer}>
        <input
          className={`${style.input} ${error ? style.inputError : ""}`}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            className={style.passwordToggle}
            onClick={handlePassword}
            disabled={disabled}
          >
            <img src={isShowPassword ? visibilityOn : visibilityOff} alt="" />
          </button>
        )}
      </div>
      {error && <p className={style.inputErrorMessage}>*{error}</p>}
    </div>
  );
}
