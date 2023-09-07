import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  errorInput: {
    color: theme.colors.errorColor,
    borderColor: theme.colors.errorColor,
  },
  baseInput: {
    borderWidth: 1,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    padding: 10,
    fontSize: theme.fontSizes.heading,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
        style={[styles.baseInput, showError && styles.errorInput, props.style]}
        autoCapitalize="none"
      />
      {showError && (
        <Text style={styles.errorText} color={"error"}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;
