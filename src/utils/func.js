import { axiosAuth } from "./axiosInstances";
import { user } from "./user";

export const loginAuth = (email, password) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const { data } = await axiosAuth.post(
  //   "/api/user",
  //   { email, password },
  //   config
  // );

  // return data;

  const correctUser = user.filter(
    (a) => a.email == email && a.password == password
  );

  return correctUser;
};
