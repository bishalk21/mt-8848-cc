export const authAdmin = (req, res, next) => {
  // console.log("Admin auth is getting called");
  const dummyToken = "admin";
  const isAdminAuthenticated = dummyToken === "admin";
  if (!isAdminAuthenticated) {
    res.status(401).send("Unauthorized Admin");
  } else {
    next();
  }
};

export const userAuth = (req, res, next) => {
  // console.log("User auth is getting called");
  const dummyToken = "user";
  const isUserAuthenticated = dummyToken === "user";
  if (!isUserAuthenticated) {
    res.status(401).send("Unauthorized User");
  } else {
    next();
  }
};
