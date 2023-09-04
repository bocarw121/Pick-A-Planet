export type User = {
  name: string;
  email: string;
  image: string;
};

export type FormError = {
  email: {
    message: string;
    type: string;
  };
  password: {
    message: string;
    type: string;
  };

  confirmPassword: {
    message: string;
    type: string;
  };

  all: {
    message: string;
    type: string;
  };
};
