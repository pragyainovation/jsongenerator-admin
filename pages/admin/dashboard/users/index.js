import UsersList from '@/components/dashboard/users/UsersList';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function users({ user }) {
  return (
    <DashboardWrapper user={user}>
      <UsersList />
    </DashboardWrapper>
  );
}

export default users;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
