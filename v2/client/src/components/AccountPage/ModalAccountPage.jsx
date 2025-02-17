import React, { useState, useEffect } from 'react';

const ModalAccountPage = ({ isModalOpen, closeModal }) => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
  });

  // Показ текста при монтировании
  useEffect(() => {
    setIsTextVisible(true);
  }, []);

  const handleSignupButtonClick = () => {
    setIsSignupVisible(true);
  };

  const handleLoginButtonClick = () => {
    setIsSignupVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Registration successful');
      setIsSignupVisible(false);
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      localStorage.setItem('token', data.token);
      alert('Login successful');
      closeModal();
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed');
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="modalAccountpage">
      <div className="modal-contentAccountpage">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="user_acc">
          <div className="user_options-container">
            <div className="user_options-text">
              {!isSignupVisible ? (
                <div
                  className={`user_options-unregistered ${
                    isTextVisible ? 'open' : ''
                  }`}
                >
                  <h2 className="user_unregistered-title">
                    Don't have an account?
                  </h2>
                  <p className="user_unregistered-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta molestiae alias nihil quo. Suscipit, est.
                  </p>
                  <button
                    className="user_unregistered-signup"
                    id="signup-button"
                    onClick={handleSignupButtonClick}
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <div
                  className={`user_options-registered ${
                    isTextVisible ? 'open' : ''
                  }`}
                >
                  <h2 className="user_registered-title">Have an account?</h2>
                  <p className="user_registered-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus modi qui ullam, eum atque nulla.
                  </p>
                  <button
                    className="user_registered-login"
                    id="login-button"
                    onClick={handleLoginButtonClick}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
            <div className="user_options-forms" id="user_options-forms">
              {!isSignupVisible ? (
                <div className="user_forms-login">
                  <h2 className="forms_title">Login</h2>
                  <form className="forms_form" onSubmit={handleLoginSubmit}>
                    <fieldset className="forms_fieldset">
                      <div className="forms_field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="forms_field-input"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoFocus
                        />
                      </div>
                      <div className="forms_field">
                        <input
                          type="password"
                          placeholder="Password"
                          className="forms_field-input"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </fieldset>
                    <div className="forms_buttons">
                      <button type="button" className="forms_buttons-forgot">
                        Forgot password?
                      </button>
                      <input
                        type="submit"
                        value="Log In"
                        className="forms_buttons-action"
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <div className="user_forms-signup">
                  <h2 className="forms_title">Sign Up</h2>
                  <form className="forms_form" onSubmit={handleSignupSubmit}>
                    <fieldset className="forms_fieldset">
                      <div className="forms_field">
                        <input
                          type="text"
                          placeholder="Login"
                          className="forms_field-input"
                          name="login"
                          value={formData.login}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="forms_field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="forms_field-input"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="forms_field">
                        <input
                          type="password"
                          placeholder="Password"
                          className="forms_field-input"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </fieldset>
                    <div className="forms_buttons">
                      <input
                        type="submit"
                        value="Sign up"
                        className="forms_buttons-action"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModalAccountPage;
