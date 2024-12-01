import TicketList from '@/components/dashboard/ticket/TicketList';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function tickets({ user }) {
  return (
    <DashboardWrapper user={user}>
      <TicketList />
    </DashboardWrapper>
  );
}

export default tickets;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
