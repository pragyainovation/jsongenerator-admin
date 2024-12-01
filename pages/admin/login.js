import Login from '@/components/auth/Login';
import { authPageHandler } from '@/utils/authHandler';

function login() {
  return <Login />;
}

export default login;

export const getServerSideProps = async (context) => {
  return await authPageHandler(context);
};
