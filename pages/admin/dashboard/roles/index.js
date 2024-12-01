import RolesList from '@/components/dashboard/roles/RolesList';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function roles({ user }) {
  return (
    <DashboardWrapper user={user}>
      <RolesList />
    </DashboardWrapper>
  );
}

export default roles;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
