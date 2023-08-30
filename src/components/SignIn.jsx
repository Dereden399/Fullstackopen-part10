import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardColor,
    padding: 10,
    width: "100%",
    flexDirection: "column",
  },
  form: {
    flexDirection: "column",
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: theme.colors.errorColor,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Text
        fontSize={"heading"}
        fontWeight={"bold"}
        style={{ alignSelf: "center" }}
      >
        Sign in
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {(props) => (
          <View style={styles.form}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              autoComplete={"off"}
              autoCorrect={false}
            />
            <FormikTextInput
              name="password"
              secureTextEntry={true}
              placeholder="Password"
              style={{ marginTop: 10 }}
              autoComplete="off"
              autoCorrec={false}
            />
            <Pressable
              onPress={props.handleSubmit}
              style={[
                styles.submitButton,
                !props.isValid && styles.disabledButton,
              ]}
              disabled={!props.isValid}
            >
              <Text fontSize={"heading"} color={"white"}>
                Sign in
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
