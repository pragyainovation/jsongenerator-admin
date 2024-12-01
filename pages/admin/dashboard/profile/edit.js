import EditProfile from '@/components/dashboard/profile/EditProfile';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function editProfile({ user }) {
  return (
    <DashboardWrapper user={user}>
      <EditProfile user={user} />
    </DashboardWrapper>
  );
}

export default editProfile;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
