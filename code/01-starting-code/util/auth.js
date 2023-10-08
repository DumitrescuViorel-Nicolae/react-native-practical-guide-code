import axios from "axios";

const API_KEY = "AIzaSyCYE33vKdWKbuunsajHVPIttImdHZYnz7I";

export async function createUser(email, password) {
  try {
    await authenticate("signUp", email, password);
  } catch (error) {
    console.log(error.message);
  }
}

export async function login(email, password) {
  try {
    await authenticate("signInWithPassword", email, password);
  } catch (error) {
    console.log(error.message);
  }
}

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}
