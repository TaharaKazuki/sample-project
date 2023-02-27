import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/feature/auth/hooks/useAuth';

export const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const logoutFc = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>ホーム画面</h1>
      <button onClick={logoutFc}>ログアウト</button>
    </div>
  );
};
