const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "lastname required"],
    validate: {
      validator: (value) => {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "No numbers allowed",
    },
  },
  email: {
    type: String,
    required: [true, "Email required"],
    validate: {
      validator: (value) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      },
      message: "Invalid email",
    },
  },
  gender: {
    type: String,
    required: [true, "Gender required"],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password required"],
    validate: {
      validator: (value) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
          value
        );
      },
      message: "Must contain letters and numbers",
    },
  },
});

// ON SAVE WE HASH PASSWORD
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

// COMPERING PASSWORDS
UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};

mongoose.model("User", UserSchema);
