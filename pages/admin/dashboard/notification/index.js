import NotificationList from '@/components/dashboard/notification/NotificationList';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function notification({ user }) {
  return (
    <DashboardWrapper user={user}>
      <NotificationList user={user} />
    </DashboardWrapper>
  );
}

export default notification;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
