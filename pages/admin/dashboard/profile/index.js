import Profile from '@/components/dashboard/profile/Profile';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function profile({ user }) {
  return (
    <DashboardWrapper user={user}>
      <Profile user={user} />
    </DashboardWrapper>
  );
}

export default profile;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
