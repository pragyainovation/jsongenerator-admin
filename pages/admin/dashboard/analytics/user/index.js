import UserAnalytics from '@/components/dashboard/analytics/user/UserAnalytics';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function report({ user }) {
  return (
    <DashboardWrapper user={user}>
      <UserAnalytics />
    </DashboardWrapper>
  );
}

export default report;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
