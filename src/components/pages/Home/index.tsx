import { useAuth } from '@/feature/auth/hooks/useAuth';

export const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>ホーム画面</h1>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
