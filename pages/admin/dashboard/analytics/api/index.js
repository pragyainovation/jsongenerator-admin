import ApiAnalytics from '@/components/dashboard/analytics/api/ApiAnalytics';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function report({ user }) {
  return (
    <DashboardWrapper user={user}>
      <ApiAnalytics />
    </DashboardWrapper>
  );
}

export default report;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
