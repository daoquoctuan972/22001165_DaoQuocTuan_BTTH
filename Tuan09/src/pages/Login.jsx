import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../components/login/loginSlice';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { name: username, email: 'daoquoctuan972@gmail.com' };
    dispatch(login(user));
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default LoginPage;