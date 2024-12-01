import Help from '@/components/dashboard/others/Help';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function help({ user }) {
  return (
    <DashboardWrapper user={user}>
      <Help />
    </DashboardWrapper>
  );
}

export default help;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
