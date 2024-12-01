import EditPassword from '@/components/dashboard/profile/EditPassword';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function editPassword({ user }) {
  return (
    <DashboardWrapper user={user}>
      <EditPassword user={user} />
    </DashboardWrapper>
  );
}

export default editPassword;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
