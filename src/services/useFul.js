
export const validate = (type, value) => {
  switch (type) {
    case "username":
    case "user":
    case "name":
    case "nombre":
      if (value.length < 3) {
        return "Write 3 characters at least";
      } else {
        return "";
      }

    case "password":
    case "pass":
    case "contraseña":
      if (value.length < 6) {
        return "Write 6 characters at least";
      } else {
        //Checking the password format....

        if (!/[\d()+-]/g.test(value)) {
          return "Invalid password format";
        } else {
          return "";
        }
      }
  }
};
