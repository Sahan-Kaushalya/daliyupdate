const jwt = require("jsonwebtoken");

const jwtManager=(getUser)=>{

      const token = jwt.sign(
    {
      _id: getUser._id,
      name: getUser.name,
      email: getUser.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30min",
    }
  );

  return token;
  
};
module.exports=jwtManager;