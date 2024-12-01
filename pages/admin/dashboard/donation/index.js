import DonationList from '@/components/dashboard/donation/DonationList';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function donation({ user }) {
  return (
    <DashboardWrapper user={user}>
      <DonationList />
    </DashboardWrapper>
  );
}

export default donation;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
