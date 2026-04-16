import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Input.module.css";

type FieldProps = {
  label?: string;
  hint?: string;
  id?: string;
  className?: string;
};

export function Input(
  props: FieldProps & InputHTMLAttributes<HTMLInputElement>
) {
  const { label, hint, id, className = "", ...rest } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} className={styles.input} {...rest} />
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

export function TextArea(
  props: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const { label, hint, id, className = "", ...rest } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea id={id} className={styles.textarea} rows={4} {...rest} />
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

export function Select(
  props: FieldProps &
    SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }
) {
  const { label, hint, id, className = "", children, ...rest } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.selectWrap}>
        <select id={id} className={styles.select} {...rest}>
          {children}
        </select>
        <svg
          className={styles.chev}
          viewBox="0 0 12 12"
          aria-hidden
          width="12"
          height="12"
        >
          <path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
