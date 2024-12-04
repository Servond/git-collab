import { findUser } from "../dal/user.dal";

const findUserService = async () => {
  try {
    const user = await findUser();

    return user;
  } catch (err) {
    throw err;
  }
};

export { findUserService };
