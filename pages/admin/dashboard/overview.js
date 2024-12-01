import Overview from '@/components/dashboard/overview/Overview';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function dashboard({ user }) {
  return (
    <DashboardWrapper user={user}>
      <Overview />
    </DashboardWrapper>
  );
}

export default dashboard;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
